<template>
  <div class="pl-5 form-control">
    <div class="input-group dropdown">
      <input
        type="text"
        placeholder="¿Qué curso deseas aprender?"
        class="input input-bordered text-black bg-white w-72"
        v-model="search"
      />
      <div
        class="dropdown-content w-80 mt-14 p-2 bg-white rounded-box flex flex-col items-center"
      >
        <template v-for="curso in filteredCursos" :key="curso.id">
          <button
            class="scroll-auto btn w-full bg-white border-none hover:bg-yellow-100 normal-case"
            for=""
            @click="() => filterCards(curso.name)"
          >
            {{ curso.name }}
          </button>
        </template>
      </div>
      <button
        class="btn btn-square bg-[#ff5144] hover:bg-[#ff5144] border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cursos", "filterCards"],
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredCursos() {
      return this.cursos.filter((curso) =>
        curso.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
