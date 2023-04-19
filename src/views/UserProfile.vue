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
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "@/assets/users.js"
import QwackItem from "@/components/QwackItem.vue";
import CreateQwackPanel from "@/components/CreateQwackPanel.vue";

export default {
  name: 'UserProfile',
  components: { QwackItem, CreateQwackPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const currentDatetime = computed(() => {
      const now = new Date();
      return now.toISOString();
    })

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || null
    });

    const addQwack = (qwack) => {
      state.user.qwacks.unshift({
        id: state.user.qwacks.length + 1, content: qwack, datetime: currentDatetime
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
