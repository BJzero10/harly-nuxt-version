<template>
  <div>
    <input-list :options="full_options" :class_input="'bg-black/10'" />
  </div>
</template>

<script>
import InputList from "~~/components/general/inputs/InputList.vue";
export default {
  components: { InputList },
  layout: "main",
  data() {
    return {
      full_options: [
        { value: "1", label: "Matemáticas" },
        { value: "2", label: "Magnetismo" },
        { value: "3", label: "Historia" },
        { value: "4", label: "Literatura" },
        { value: "5", label: "Fisica" },
        { value: "6", label: "Ingles" },
        { value: "7", label: "Estática" },
      ],
    };
  },
};
</script>

<style></style>
