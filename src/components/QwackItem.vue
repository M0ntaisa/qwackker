<template>
  <div class="qwack-item" :class="{'--draft': qwack.type === 'draft' }">
    <div class="user-profile__qwack">
      <div class="qwack-item__user">
        @{{ username }}
      </div>
      <div class="qwack-item__content">
        {{ qwack.content }}
      </div>
      <div class="qwack-item__date">
        {{ formattedDate(qwack.datetime) }}
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
      formattedDate(datetime) {
        const date = new Date(datetime);
        const options = { timeZone: 'Asia/Makassar' };
        return date.toLocaleString('en-US', options);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .qwack-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.05, 1.05);
    }

    .qwack-item__user {
      font-weight: bold;
    }

    .qwack-item__date {
      font-size: small;
      padding-top: 5px;
      color: gray;
    }

    &.--draft {
      background-color: rgb(165, 165, 165);
    }
  }

  
</style>