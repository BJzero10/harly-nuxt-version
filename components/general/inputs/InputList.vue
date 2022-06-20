<template>
  <div class="my-1">
    <div class="dropdown">
      <input
        type="text"
        :placeholder="placeholder_input"
        class="w-full max-w-xs"
        :class="class_input"
        v-model="search"
        @input="changeSearch"
      />
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
      >
        <template
          v-for="option in options_valid"
          :key="'opt-' + option[value_by]"
        >
          <li @click="selectOption(option)">
            <span>{{ option[label_by] }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { stringContain } from "../../../utils/functions";
export default {
  data() {
    return {
      search: "",
      //   options_valid: this.getOptions(),
    };
  },
  props: {
    options: { default: [] },
    searcheable: { default: true },
    class_input: { default: "" },
    placeholder_input: { default: "" },
    label_by: { default: "label" },
    value_by: { default: "value" },
  },
  computed: {
    options_valid() {
      const options = this.options.map((x) => {
        let option = x;
        if (typeof x !== "object") {
          option = { [this.label_by]: x };
        }
        if (typeof option[this.value_by] == "undefined") {
          option[this.value_by] = option[this.label_by];
        }
        return option;
      });
      return options.filter((option) => {
        return stringContain(option[this.label_by], this.search);
      });
    },
  },
  emits: ["update:search", "select"],
  methods: {
    changeSearch(event) {
      const value = event.target.value;
      this.$emit("update:search", value);
    },
    selectOption(option) {
      this.search = option[this.label_by];
      this.$emit("select", option);
    },
    //     getOptions() {
    //       return this.options.filter((option) => {
    //         return stringContain(option.label, this.search);
    //       });
    //     },
    //   },
    //   watch: {
    //     search(newValue) {
    //       console.log("nuvo valor = ", newValue, this.getOptions());
    //       this.options_valid = this.getOptions();
    //     },
    //     options() {
    //       this.options_valid = this.getOptions();
    //     },
  },
};
</script>

<style></style>
