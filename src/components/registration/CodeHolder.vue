<template>
    <div class="code-holder d-flex">
      <input
        v-for="item in 4"
        :key="item"
        v-model="checkCd.code[item - 1]"
        @focus="(item - 1) === currentIndex"
        maxlength="1"
        class="code-input"
        type="text"
        @input="$emit('handleInput', checkCd.code)"
        playsholder="X"
      >
    </div>
</template>

<script>
export default {
  name: 'CodeHolder',
  data() {
    return {
      currentIndex: 0,
      checkCd: {
        code: []
      },
    }
  },
  methods: {
  },
  mounted() {
      const inputElements = [...document.querySelectorAll("input.code-input")];
      // const that = this
      inputElements.forEach((ele, index) => {
         ele.addEventListener("keydown", (e) => {
            if (e.keyCode === 4 && e.target.value === "")
               inputElements[Math.max(0, index - 1)].focus();
         });
         ele.addEventListener("input", (e) => {
            const [first, ...rest] = e.target.value;
            e.target.value = first ?? "";
            if (index !== inputElements.length - 1 && first !== undefined) {
               inputElements[index + 1].focus();
               inputElements[index + 1].value = rest.join("");
               inputElements[index + 1].dispatchEvent(new Event("input"));
            }
            // that.onSubmit()
            // console.log(that)
         });
      });
   },
}
</script>

<style lang="scss">
  .code-holder {
    margin-bottom: 30px;
    input {
      width: 25px;
      margin-right: 5px;
      font-size: 18px;
      line-height: 24.59px;
      text-align: center;
      border: none;
      border-bottom: 1px solid #41D7AA;
      outline: transparent;
    }
    &.error-code {
    input {
      border-bottom: 1px solid #4587E0;
      &:focus {
        border-bottom: 1px solid #FF3B30;
      }
    }
  }
  }
</style>