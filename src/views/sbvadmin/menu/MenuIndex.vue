<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <Authority :value="'/api/permissions|POST'">
          <a-button type="primary" @click="handleCreate">新增菜单</a-button>
          <a-button type="primary" @click="handleRereashMenu">更新菜单缓存</a-button>
          <a-button type="primary" @click="handleRereashAll">更新所有缓存</a-button>
        </Authority>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
                auth: '/api/permissions/**|PUT',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: '/api/permissions/**|DELETE',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MenuDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getPermissionList,
    deletePermission,
    refreshPermissions,
    refreshAllCache,
  } from '/@/api/sbvadmin/System';
  import { useDrawer } from '/@/components/Drawer';
  import MenuDrawer from './MenuDrawer.vue';
  import { Authority } from '/@/components/Authority';
  import { columns, searchFormSchema } from './menu.data';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'MenuManagement',
    components: { BasicTable, MenuDrawer, TableAction, Authority },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload, expandAll }] = useTable({
        title: '菜单列表',
        api: getPermissionList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        isTreeTable: true,
        pagination: false,
        striped: false,
        useSearchForm: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
        const { createMessage } = useMessage();
        deletePermission(record.id)
          .then(() => {
            createMessage.success(`1`);
          })
          .catch(() => {
            createMessage.error('0');
          })
          .finally(() => {
            reload();
            console.log(record);
          });
      }

      // 手动更新菜单缓存
      function handleRereashMenu(record: Recordable) {
        const { createMessage } = useMessage();
        refreshPermissions()
          .then(() => {
            createMessage.success(`更新成功`);
          })
          .catch(() => {
            createMessage.error('0');
          })
          .finally(() => {
            reload();
            console.log(record);
          });
      }

      // 手动更新所有缓存
      function handleRereashAll(record: Recordable) {
        const { createMessage } = useMessage();
        refreshAllCache()
          .then(() => {
            createMessage.success(`更新成功`);
          })
          .catch(() => {
            createMessage.error('0');
          })
          .finally(() => {
            reload();
            console.log(record);
          });
      }

      function handleSuccess() {
        reload();
      }

      function onFetchSuccess() {
        // 演示默认展开所有表项
        nextTick(expandAll);
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
        handleRereashMenu,
        handleRereashAll,
      };
    },
  });
</script>
