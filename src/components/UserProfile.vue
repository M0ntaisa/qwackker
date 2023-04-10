<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
    </div>
    <div class="user-profile__qwacks-wrapper">
      <div class="user-profile__qwacks" v-for="qwack in user.qwacks" :key="qwack.id">
        {{ qwack.content }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserProfile',
  data() {
    return {
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
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower!`);
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    }
  },
  mounted() {
    this.followUser();
  },
}
</script>

<style>
  .user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
  }

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
  }

  .user-profile__admin-badge {
    background: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin: 5px auto 5px 0;
    padding: 0 10px;
    font-weight: bold;
  }

  h1 {
    margin: 0;
  }
</style>
