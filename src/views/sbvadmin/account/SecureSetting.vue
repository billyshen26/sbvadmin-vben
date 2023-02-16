<template>
  <CollapseContainer title="安全设置" :canExpan="false">
    <List>
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #title>
              {{ item.title }}
              <div class="extra" v-if="item.extra">
                <!-- {{ item.extra }} -->
                <a-button type="primary" @click="handleEdit">更改密码</a-button>
              </div>
            </template>
            <template #description>
              <div>{{ item.description }}</div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
    <PasswordModal @register="registerModal" />
  </CollapseContainer>
</template>
<script lang="ts">
  import { List } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useModal } from '/@/components/Modal';
  import { secureSettingList } from './data';
  import PasswordModal from './PasswordModal.vue';

  export default defineComponent({
    components: {
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      PasswordModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      function handleEdit() {
        openModal(true, {
          isUpdate: true,
        });
      }

      // function handleSuccess() {
      //   console.log('1');
      // }

      return {
        registerModal,
        handleEdit,
        // handleSuccess,
        list: secureSettingList,
      };
    },
  });
</script>
<style lang="less" scoped>
  .extra {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-weight: normal;
    color: #1890ff;
    cursor: pointer;
  }
</style>
