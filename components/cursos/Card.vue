<template>
  <div class="flex flex-wrap items-center justify-center lg:mx-10 mx-6">
    <template v-for="(curso, idx) in cursos" :key="'nav-itm-' + idx">
      <div
        class="w-80 bg-base-100 border rounded-2xl border-primary m-4 shadow-lg shadow-[#2a8e9d7e]"
      >
        <h2 class="text-center text-black font-bold text-lg pb-3 mt-4">
          {{ curso.name }}
        </h2>
        <h3 class="ml-5 pb-1 text-black font-medium">
          Asesores ({{ curso.num_asesores }})
        </h3>
        <div class="avatar-group -space-x-6">
          <div class="avatar ml-10">
            <div class="w-12">
              <img src="https://api.lorem.space/image/face?hash=4818" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://api.lorem.space/image/face?hash=40311" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://api.lorem.space/image/face?hash=84348" />
            </div>
          </div>
          <div class="avatar placeholder m-0">
            <div class="w-12 bg-neutral text-neutral-content">
              <span class="text-white">+7</span>
            </div>
          </div>
        </div>
        <h3 class="ml-5 pt-1 text-black font-medium">Calificación media</h3>
        <div class="flex pb-2 pt-1">
          <svg
            class="ml-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill: rgba(255, 202, 56, 1); transform: ; msfilter: "
          >
            <path
              d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
            ></path>
          </svg>
          <h3 class="ml-2 text-black font-bold">{{ curso.rating }}/5</h3>
        </div>
        <div class="flex flex-col items-center mb-3">
          <NuxtLink
            class="btn btn-primary normal-case text-lg px-10 rounded-full text-white"
            :to="`/cursos/${curso.name}`"
          >
            Solicitar asesoria
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["cursos"],
};
</script>

<style></style>
