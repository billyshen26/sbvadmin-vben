<template>
  <div>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <LogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';

  import { getLogList, delLog } from '/@/api/sbvadmin/Log';
  import LogModal from './LogModal.vue';

  import { columns, searchFormSchema } from './Log.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Base64 } from 'js-base64';

  export default defineComponent({
    name: 'LogManagement',
    components: { BasicTable, LogModal, TableAction },
    setup() {
      const { createMessage } = useMessage();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '列表',
        api: getLogList,
        beforeFetch(params) {
          return '?' + Base64.encode(JSON.stringify(params));
        },
        defSort: {
          field: 'id',
          order: 'descend',
        },
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        showIndexColumn: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record.id);
        delLog(record.id)
          .then((res) => {
            createMessage.success(res);
          })
          .catch((res) => {
            createMessage.error(res);
          })
          .finally(() => {
            reload();
            console.log(record);
          });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
