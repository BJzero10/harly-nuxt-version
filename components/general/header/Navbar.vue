<template>
  <div class="navbar-container text-neutral-content md:px-3 sm:1 bg-neutral">
    <div class="navbar bg-neutral">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <NuxtLink class="active:bg-secondary" to="/">Inicio</NuxtLink>
              <NuxtLink class="active:bg-secondary" to="/nosotros"
                >Nosotros</NuxtLink
              >
              <NuxtLink class="active:bg-secondary" to="/cursos"
                >Cursos</NuxtLink
              >
            </li>
            <button
              class="btn btn-sm bg-accent normal-case font-bold mx-2.5 rounded-3xl text-neutral hover:text-white hover:bg-secondary mt-2 sm:hidden"
            >
              Conviértete en asesor
            </button>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost normal-case w-32"
          ><img src="../../../assets/logo.png" alt="logo"
        /></NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NuxtLink class="active:bg-secondary" to="/">Inicio</NuxtLink>
            <NuxtLink class="active:bg-secondary" to="/nosotros"
              >Nosotros</NuxtLink
            >
            <NuxtLink class="active:bg-secondary" to="/cursos">Cursos</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end btns-content">
        <button
          class="btn btn-sm bg-accent normal-case font-bold mx-2.5 rounded-3xl text-neutral hover:text-white hover:bg-secondary sm:visible invisible"
        >
          Conviértete en asesor
        </button>
        <button class="btn btn-ghost btn-circle mr-2.5">
          <label for="my-modal-4" class="modal-button">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs indicator-item bg-secondary"></span>
            </div>
          </label>
        </button>
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label for="" class="modal-box relative w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg notifications-title text-center">
              Notificaciones
            </h3>
            <div class="notification-content">
              <GeneralNotification />
            </div>
          </label>
        </label>
        <BtnPerfil />
      </div>
    </div>
  </div>
</template>

<script>
import BtnPerfil from "./BtnPerfil.vue";
export default {
  components: { BtnPerfil },
};
</script>

<style></style>
