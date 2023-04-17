<template>
  <form class="create-qwack-panel" @submit.prevent="createNewQwack" :class="{ '--exceeded': newQwackCharCount > 180 }">
      <label for="newQwack"><strong>New Qwack</strong> ({{ newQwackCharCount }}/180)</label>
      <textarea name="newQwack" id="newQwack" rows="4" v-model="state.newQwackContent"></textarea>

      <div class="create-qwack-panel__submit">
        <div class="create-qwack-type">
          <label for="newQwackType"><strong>Type: </strong></label>
          <select name="newQwackType" id="newQwackType" v-model="state.selectedQwackType">
            <option :value="option.value" v-for="(option, index) in state.qwackTypes" :key="index">
              {{ option.name }}
            </option>
          </select>
        </div>
        
        <button>
          Qwack!
        </button>
      </div>
    </form>
</template>

<script>
  import { reactive, computed } from 'vue';

  export default {
    name: "CreateQwackPanel",
    setup(props, ctx) {
      const state = reactive({
        qwackTypes: [
          { value: 'draft', name: 'Draft' },
          { value: 'instant', name: 'Instant Qwack' }
        ],
        newQwackContent: '',
        selectedQwackType: 'instant',
      });

      const newQwackCharCount = computed(() => state.newQwackContent.length);

      const createNewQwack = () => {
        // if (state.newQwackContent && state.selectedQwackType !== 'draft') {
          ctx.emit('add-qwack', state.newQwackContent);
          state.newQwackContent = '';
        // }
      }

      return {
        state,
        newQwackCharCount,
        createNewQwack
      }
    },
  };
</script>

<style lang="scss" scoped>
  .create-qwack-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
      border: 1px solid #DFE3E8;
      border-radius: 5px;
    }

    .create-qwack-panel__submit {
      display: flex;
      justify-content: space-between;

      .create-qwack-type {
        padding: 10px 0;
      }

      button {
        padding: 5px 20px;
        margin: auto 0;
        border-radius: 5px;
        border: none;
        background-color: yellowgreen;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }

    &.--exceeded {
      color: lightcoral;
      border-color: lightcoral;
      
      .create-qwack-panel__submit {
        button {
          background-color: lightcoral;
          border: none;
          color: white;
        }
      }
    }
  }
</style>