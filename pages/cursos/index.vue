<template>
  <div class="bg-white">
    <CursosBuscador />
    <CursosCard :cursos="cursos" />
  </div>
</template>

<script>
// import BuscadorSecu from "@/components/cursos/BuscadorSecu.vue";
// import CursosCard from "@/components/cursos/CursosCard.vue";
export default {
  //   components: { BuscadorSecu, CursosCard },
  computed: {
    cursos() {
      const CURSOS = [
        { nombre: "Programación 1", num_asesores: 20, rating: 4.8 },
        { nombre: "Programación 2", num_asesores: 13, rating: 4.7 },
        { nombre: "Programación 3", num_asesores: 21, rating: 4.6 },
        { nombre: "Programación 4", num_asesores: 5, rating: 3.0 },
        { nombre: "Programación 1", num_asesores: 7, rating: 4.9 },
        { nombre: "Programación 1", num_asesores: 8, rating: 5.0 },
        { nombre: "Programación 1", num_asesores: 8, rating: 4.8 },
        { nombre: "Programación 1", num_asesores: 20, rating: 4.8 },
        { nombre: "Programación 1", num_asesores: 20, rating: 4.5 },
        { nombre: "Programación 1", num_asesores: 10, rating: 4.3 },
        { nombre: "Programación 1", num_asesores: 20, rating: 4.1 },
        { nombre: "Programación 1", num_asesores: 20, rating: 4.7 },
      ];
      return CURSOS;
    },
  },
};
</script>

<style></style>
