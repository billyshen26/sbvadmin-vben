<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './user.data';
  // import { getDeptList } from '/@/api/demo/system';
  // import { editAccount } from '/@/api/demo/system';
  import { addUser, editUser } from '/@/api/sbvadmin/System';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        console.log(data);
        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
        // const treeData: Array<Number> = [1, 2];
        updateSchema([
          {
            field: 'pwd',
            show: !unref(isUpdate),
          },

          // {
          //   field: 'dept',
          //   componentProps: { treeData },
          // },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));
      // username, role, email, name
      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          const { createMessage } = useMessage();
          if (unref(isUpdate)) {
            editUser(values)
              .then((res) => {
                console.log(res);
              })
              .catch((res) => {
                console.log(res);
              })
              .finally(() => {
                console.log(values);
                closeModal();
                emit('success', {
                  isUpdate: unref(isUpdate),
                  values: { ...values, id: rowId.value },
                });
              });
          } else {
            // addAccount(values.username, values.role, values.email, values.nickname, values.password)
            //   .then(() => {
            //     createMessage.success(`1`);
            //   })
            //   .catch(() => {
            //     createMessage.error('0');
            //   })
            //   .finally(() => {
            //     console.log(values);
            //     closeModal();
            //     emit('success', {
            //       isUpdate: unref(isUpdate),
            //       values: { ...values, id: rowId.value },
            //     });
            //   });
            addUser(values)
              .then(() => {
                createMessage.success(`1`);
              })
              .catch(() => {
                createMessage.error('0');
              })
              .finally(() => {
                console.log(values);
                closeModal();
                emit('success', {
                  isUpdate: unref(isUpdate),
                  values: { ...values, id: rowId.value },
                });
              });
          }
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
