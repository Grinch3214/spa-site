<template>
  <div class="base-input" :class="{ error: !!error, active: state }">
    <input
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      v-model.trim="val"
      @input="oninput()"
    >
    <p :class="{ error: val }">{{ error }}</p>
  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Example placeholder'
    },
    validator: {
      type: Function
    },
    maxlength: {
      type: String,
      default: '24'
    }
  },
  data() {
    return {
      val: this.value,
      error: '',
      state: false
    }
  },
  methods: {
    oninput() {
      // this.val = this.val.toLowerCase()
      this.$emit('update:value', this.val)
      if (this.validator)
        this.error = this.validator(this.val)
        this.state = !this.error
    },
  }
}
</script>

<style lang="scss">
  .base-input {
    input {
      font-size: 14px;
      font-weight: 300;
      line-height: 19.12px;
      border: none;
      padding-bottom: 10px;
      border-bottom: 1px solid #4587E0;
      outline: transparent;
      width: 100%;
    }
    &.error {
      input {
        border-bottom: 1px solid #FF3B30;
        &:focus {
          border-bottom: 1px solid #FF3B30;
        }
      }
    }
    &.active {
      input {
        border-bottom: 1px solid #41D7AA;
      }
    }
    p {
      font-size: 12px;
      line-height: 16.39px;
      color: #FF3B30;
    }
  }
</style>