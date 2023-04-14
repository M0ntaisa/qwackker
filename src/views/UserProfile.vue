<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateQwackPanel @add-qwack="addQwack" />
    </div>
    <div class="user-profile__qwacks-wrapper">
      <QwackItem 
        v-for="qwack in state.user.qwacks" 
        :key="qwack.id" 
        :username="state.user.username" 
        :qwack="qwack" 
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import QwackItem from "@/components/QwackItem.vue";
import CreateQwackPanel from "@/components/CreateQwackPanel.vue";

export default {
  name: 'UserProfile',
  components: { QwackItem, CreateQwackPanel },
  setup() {
    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        username: 'm0ntaisa',
        firstName: 'Monochrome',
        lastName: 'Taisa',
        email: 'm0.taisa@gmail.com',
        isAdmin: true,
        qwacks: [
          { id: 1, content: 'qwackker is pogger' },
          { id: 2, content: 'SHUBAA SHUBA SHUBAAAA!!' },
        ]
      },
    });

    const addQwack = (qwack) => {
      state.user.qwacks.unshift({
        id: state.user.qwacks.length + 1, content: qwack
      });
    }

    return {
      state,
      addQwack
    }
  },
}
</script>

<style lang="scss" scoped>
  .user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;

    .user-profile__user-panel {
      display: flex;
      flex-direction: column;
      // margin-right: 50px;
      padding: 20px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E8;
      margin-bottom: auto;

      h1 {
        margin: 0;
      }

      .user-profile__admin-badge {
        background: rebeccapurple;
        color: white;
        border-radius: 5px;
        margin: 5px auto 5px 0;
        padding: 0 10px;
        font-weight: bold;
        font-size: small;
      }
    }

    .user-profile__qwacks-wrapper {
      display: grid;
      grid-gap: 5px;
      margin-bottom: auto;
    }
  }

  
</style>
