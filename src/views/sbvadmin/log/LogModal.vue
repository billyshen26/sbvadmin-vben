<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './Log.data';

  import { editLog, addLog } from '/@/api/sbvadmin/Log';
  import { useMessage } from '/@/hooks/web/useMessage';
  export default defineComponent({
    name: 'LogModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          const { createMessage } = useMessage();
          if (unref(isUpdate)) {
            editLog(values)
              .then((res: any) => {
                createMessage.success(res);
              })
              .catch((res) => {
                createMessage.success(res);
              })
              .finally(() => {
                closeModal();
                emit('success', {
                  isUpdate: unref(isUpdate),
                  values: { ...values, id: rowId.value },
                });
              });
          } else {
            addLog(values)
              .then((res: any) => {
                createMessage.success(res);
              })
              .catch((res) => {
                createMessage.success(res);
              })
              .finally(() => {
                emit('success');
              });
          }
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
