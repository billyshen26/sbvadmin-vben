<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './menu.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { PermissionParams } from '/@/api/sbvadmin/model/SystemModel';
  // import { getMenuList } from '/@/api/demo/system';
  import { getPermissionList, addPermission, editPermission } from '/@/api/sbvadmin/System';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'MenuDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
        const param = {} as PermissionParams;
        const treeData = await getPermissionList(param);
        updateSchema({
          field: 'pid',
          componentProps: { treeData },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单' : '编辑菜单'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          const { createMessage } = useMessage();
          if (unref(isUpdate)) {
            editPermission(values)
              .then(() => {
                createMessage.success(`1`);
              })
              .catch(() => {
                createMessage.error('2');
              })
              .finally(() => {
                closeDrawer();
                emit('success');
              });
          } else {
            addPermission(values)
              .then(() => {
                createMessage.success(`3`);
              })
              .catch(() => {
                createMessage.error('4');
              })
              .finally(() => {
                closeDrawer();
                emit('success');
              });
          }

          // closeDrawer();
          // emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
