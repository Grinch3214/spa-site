<template>
  <div>
    <div class="choice-input-select">
      <input v-model="selected" :placeholder="playceholder" type="text" class="choice-input-select__input" />
      <div
        class="choice-input-select__btn"
        @click="open = !open"
        :class="{ active: open }"
      ></div>

      <ul class="choice-input-select__select">
        <li
          @click="
            $emit('input');
            selected = option;
            open = false;
          "
          v-for="(option, index) in options"
          :key="index"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChoiceInputSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    playceholder: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      open: false,
      input: "",
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.choice-input-select {
  position: relative;
  color: #222536;
  font-weight: 300;

  &__btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
    &::before {
        content: "";
        position: absolute;
        transition: all 0.2s;
        width: 10px;
        height: 10px;
        border-top: 1px solid #528be6;
        border-left: 1px solid #528be6;
        transform: rotate(-135deg);
        right: 5px;
        top: 4px;
        display: block;
    }
    &.active {
        &::before {
          transform: rotate(45deg);
          top: 9px;
        }
    }
  }

  &__btn.active + .choice-input-select__select {
    display: block;
  }

  &__select {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    li {
        margin-top: 15px;
        margin-bottom: 15px;
        padding-left: 2px;
    }
  }

  &__input {
    outline-style: none;
    border: none;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    font-family: 'Manrope', sans-serif;
    font-weight: 300;
    color: #222536;
    width: 100%;
    padding-right: 29px;
  }
}
</style>