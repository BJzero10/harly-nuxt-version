<template>
  <div class="relative">
    <div class="absolute w-screen z-20">
      <BuscadorPincipal />
    </div>
    <div class="relative w-screen sm:px-12 px-0 h-96">
      <h3
        class="absolute lg:top-1/2 top-1/3 xl:text-7xl text-white font-bold left-[10%] z-10 lg:z-0 md:text-6xl text-5xl"
      >
        Encuentra a tu <br /><em>asesor</em> ideal
      </h3>
      <img
        class="md:w-8/12 md:h-6/12 z-0 float-right opacity-50 lg:opacity-100"
        src="../assets/home/banner.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import BuscadorPincipal from "~~/components/home/BuscadorPincipal.vue";
export default {
  layout: "main",
  components: { BuscadorPincipal },
};
</script>

<style></style>
