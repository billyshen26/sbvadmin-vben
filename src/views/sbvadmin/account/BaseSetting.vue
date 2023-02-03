<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <Divider>账号角色</Divider>
        <a-row :gutter="24">
          <template v-for="item in roles" :key="item.value">
            <Tag color="green">
              {{ item.nameZh }}
            </Tag>
          </template>
        </a-row>
        <Divider>头像</Divider>
        <a-row :gutter="24">
          <div class="change-avatar">
            <CropperAvatar
              :uploadApi="uploadApi"
              :value="avatar"
              btnText="更换头像"
              :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
              @change="updateAvatar"
              width="150"
            />
          </div>
        </a-row>
      </a-col>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts">
  import { Tag, Button, Row, Col, Divider } from 'ant-design-vue';
  import { computed, defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperAvatar } from '/@/components/Cropper';

  import { useMessage } from '/@/hooks/web/useMessage';

  import headerImg from '/@/assets/images/header.jpg';
  // import { accountInfoApi } from '/@/api/demo/account';
  import { getUserInfo } from '/@/api/sys/user';
  import { baseSetschemas } from './data';
  import { useUserStore } from '/@/store/modules/user';
  import { uploadApi } from '/@/api/sys/upload';
  import { editUser } from '/@/api/sbvadmin/System';

  export default defineComponent({
    components: {
      Tag,
      BasicForm,
      CollapseContainer,
      Button,
      ARow: Row,
      ACol: Col,
      CropperAvatar,
      Divider,
    },
    setup() {
      const { createMessage } = useMessage();
      const userStore = useUserStore();

      const [register, { setFieldsValue, validate }] = useForm({
        labelWidth: 120,
        schemas: baseSetschemas,
        showActionButtonGroup: false,
      });

      onMounted(async () => {
        const data = await getUserInfo();
        setFieldsValue(data);
      });

      const avatar = computed(() => {
        const { avatar } = userStore.getUserInfo;
        return avatar || headerImg;
      });

      const roles = computed(() => {
        const { roles } = userStore.getUserInfo;
        console.log(roles);
        return roles || [];
      });

      function updateAvatar({ source, data }) {
        const userinfo = userStore.getUserInfo;
        userinfo.avatar = data.result;
        userStore.setUserInfo(userinfo);
        editUser(userinfo)
          .then(() => {
            createMessage.success('修改成功!');
          })
          .catch(() => {
            createMessage.error('3');
          })
          .finally(() => {
            console.log(data);
          });
        console.log('source', source);
      }

      async function handleSubmit() {
        const values = await validate();
        editUser(values)
          .then((res: any) => {
            console.log(res);
            createMessage.success(res);
          })
          .catch(() => {
            createMessage.error('3');
          })
          .finally(() => {
            console.log(values);
          });
      }

      return {
        avatar,
        roles,
        register,
        uploadApi: uploadApi as any,
        updateAvatar,
        handleSubmit,
      };
    },
  });
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
