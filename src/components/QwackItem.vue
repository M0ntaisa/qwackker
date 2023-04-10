<template>
  <div class="qwack-item" @click="favouriteQwack(qwack.id)">
    <div class="user-profile__qwack">
      <div class="qwack-item__user">
        @{{ username }}
      </div>
      <div class="qwack-item__content">
        {{ qwack.content }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QwackItem",
    props: {
      username: {
        type: String,
        required: true
      },
      qwack: {
        type: Object,
        required: true
      }
    },
    methods: {
      favouriteQwack(id) {
        this.$emit('favourite', id)
      }
    }
  };
</script>

<style>
  .qwack-item {
    margin: 2px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .qwack-item:hover {
    transform: scale(1.05, 1.05);
  }

  .qwack-item__user {
    font-weight: bold;
  }
</style>