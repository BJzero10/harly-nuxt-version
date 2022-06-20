<template>
  <div class="bg-base-100">
    <div class="md:mx-10 md:py-5 mx-3 py-3 border-b border-black">
      <div class="flex md:flex-row flex-col place-content-center items-center">
        <input-list
          :options="carreras"
          :label_by="'carrera'"
          :value_by="'id'"
          @update:search="searchCarrera"
          @select="carreraSelect"
          class_input="input w-96 input-primary input-bordered"
          placeholder_input="Buscar carrera"
        />
        <div class="md:divider md:divider-horizontal"></div>
        <input-list
          :options="cursos"
          :label_by="'name'"
          :value_by="'id'"
          @update:search="searchCurso"
          @select="cursoSelect"
          class_input="input w-96 input-primary input-bordered"
          placeholder_input="Buscar curso"
        />
      </div>
    </div>
    <div class="px-10">
      <h2 class="text-black">UDEP</h2>
    </div>
    <CursosCard :cursos="cursos" />
  </div>
</template>

<script>
import BuscadorCarrera from "~~/components/cursos/BuscadorCarrera.vue";
import BuscadorCurso from "~~/components/cursos/BuscadorCurso.vue";
import cursosData from "@/content/cursos/cursos.json";
import InputList from "~~/components/general/inputs/InputList.vue";
import { stringContain } from "~~/utils/functions";

export default {
  components: { BuscadorCarrera, BuscadorCurso, InputList },
  data() {
    return {
      cursos: cursosData,
      carreras: [...new Set(cursosData.map((x) => x.carrera))],
      carrera_selected: cursosData,
    };
  },
  methods: {
    carreraSelect(option) {
      this.cursos = cursosData.filter((curso) => {
        this.carrera_selected = cursosData.filter((curso) => {
          return option.id === curso.carrera;
        });
        return stringContain(curso.carrera, option.id);
      });
    },
    searchCarrera(input_carrera) {
      this.cursos = cursosData.filter((curso) => {
        return stringContain(curso.carrera, input_carrera);
      });
    },
    searchCurso(input_curso) {
      this.cursos = this.carrera_selected.filter((curso) => {
        return stringContain(curso.name, input_curso);
      });
    },
    cursoSelect(option_curso) {
      this.cursos = this.carrera_selected.filter((curso) => {
        return option_curso.id === curso.id;
      });
    },
  },
};
</script>

<style></style>
