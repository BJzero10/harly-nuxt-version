<template>
  <div class="flex flex-wrap py-8">
    <div class="flex bg-white rounded-full w-auto py-2 h-16 mx-auto">
      <div class="w-3/6 px-4 border-r border-neutral">
        <div class="form-control w-full max-w-xs pl-4">
          <label class="label py-0">
            <span class="text-xs text-black font-bold">Universidad</span>
          </label>
          <input-list
            :options="universidades"
            :label_by="'universidad'"
            :value_by="'id'"
            @update:search="searchUniversidad"
            @select="universidadSelect"
            class_input="input input-sm sm:w-64 w-[137px] max-w-xs input-bordered"
            placeholder_input="Buscar universidad"
          />
          <!-- <input
            type="text"
            placeholder="¿Dónde estudias?"
            class="input input-bordered input-sm w-full max-w-xs bg-white py-0 my-0"
          /> -->
        </div>
      </div>
      <div class="w-3/6 pl-4">
        <div class="form-control w-full max-w-xs pl-0">
          <label class="label py-0">
            <span class="text-xs text-black font-bold">Curso</span>
          </label>
          <input-list
            :options="cursos"
            :label_by="'name'"
            :value_by="'id'"
            @update:search="searchCurso"
            @select="cursoSelect"
            class_input="input input-sm sm:w-64 w-[137px] max-w-xs input-bordered"
            placeholder_input="Buscar curso"
          />
          <!-- <input
            type="text"
            placeholder="¿Qué curso deseas aprender?"
            class="input input-bordered input-sm w-full max-w-xs bg-white py-0 my-0" -->
          <!-- /> -->
        </div>
      </div>
      <div class="pt-0 px-2 md:px-5 sm:visible invisible">
        <button
          class="btn btn-ghost btn-circle w-12 h-12 rounded-full bg-secondary hover:bg-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
  </div>
</template>

<script>
import InputList from "../general/inputs/InputList.vue";
import cursosData from "@/content/cursos/cursos.json";
import { stringContain } from "~~/utils/functions";
export default {
  components: { InputList },
  data() {
    return {
      cursos: cursosData,
      universidades: [...new Set(cursosData.map((x) => x.universidad))],
      universidad_selected: cursosData,
    };
  },
  methods: {
    universidadSelect(option) {
      this.cursos = cursosData.filter((curso) => {
        this.universidad_selected = cursosData.filter((curso) => {
          return option.id === curso.universidad;
        });
        return stringContain(curso.universidad, option.id);
      });
    },
    searchUniversidad(input_universidad) {
      this.cursos = cursosData.filter((curso) => {
        return stringContain(curso.universidad, input_universidad);
      });
    },
    searchCurso(input_curso) {
      console.log(this.universidad_selected);
      this.cursos = this.universidad_selected.filter((curso) => {
        return stringContain(curso.name, input_curso);
      });
    },
    cursoSelect(option_curso) {
      this.cursos = this.universidad_selected.filter((curso) => {
        return option_curso.id === curso.id;
      });
    },
  },
};
</script>

<style></style>
