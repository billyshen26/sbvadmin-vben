<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <Authority :value="'/api/users|POST'">
          <a-button type="primary" @click="handleCreate">新增账号</a-button>
        </Authority>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'avatar'">
          <Avatar :size="60" :src="record.avatar" />
        </template>
        <template v-else-if="column.key === 'roles'">
          <template v-for="item in record.roles" :key="item.name">
            <Tag color="green">
              {{ item.nameZh }}
            </Tag>
          </template>
        </template>
        <template v-else-if="column.key === 'depts'">
          <template v-for="item in record.depts" :key="item.id">
            <Tag color="green">
              {{ item.name }}
            </Tag>
          </template>
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              // {
              //   icon: 'clarity:info-standard-line',
              //   tooltip: '查看用户详情',
              //   onClick: handleView.bind(null, record),
              // },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
                auth: '/api/users/**|PUT',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: '/api/users/**|DELETE',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '@/components/Table';
  // import { getAccountList, deleteAccount } from '/@/api/demo/system';
  import { getUserList, deleteUser } from '@/api/sbvadmin/System';
  import { PageWrapper } from '@/components/Page';
  import DeptTree from './DeptTree.vue';
  import { Authority } from '@/components/Authority';
  import { useModal } from '@/components/Modal';
  import AccountModal from './UserModal.vue';
  import { columns, searchFormSchema } from './user.data';
  import { useGo } from '@/hooks/web/usePage';
  import { Avatar, Tag } from 'ant-design-vue';

  export default defineComponent({
    name: 'AccountManagement',
    // components: { BasicTable, PageWrapper, DeptTree, AccountModal, TableAction },
    components: {
      BasicTable,
      PageWrapper,
      AccountModal,
      TableAction,
      Avatar,
      Tag,
      Authority,
      DeptTree,
    },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '账号列表',
        api: getUserList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
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
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record.id);
        deleteUser(record.id)
          .then((res) => {
            console.log(res);
          })
          .catch((res) => {
            console.log(res);
          })
          .finally(() => {
            reload();
            console.log(record);
          });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      };
    },
  });
</script>
