<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="修改密码" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { changePassword } from '/@/api/sbvadmin/System';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';
  import { formSchema } from './pwd.data';

  export default defineComponent({
    name: 'PasswordModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup() {
      const isUpdate = ref(true);
      const userStore = useUserStore();

      const [registerForm, { resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
      });

      async function handleSubmit() {
        try {
          const { createMessage } = useMessage();
          const values = await validate();
          const { passwordOld, passwordNew } = values;
          const userinfo = userStore.getUserInfo;
          const data = {
            id: userinfo.userId,
            passwordOld: passwordOld,
            passwordNew: passwordNew,
          };
          // 修改密码
          changePassword(data)
            .then((res: any) => {
              console.log(res);
            })
            .catch((res) => {
              console.log(res);
            })
            .finally(() => {
              closeModal();
            });
          console.log(passwordOld, passwordNew);
        } catch (error) {}
      }

      return { registerModal, registerForm, handleSubmit };
    },
  });
</script>
