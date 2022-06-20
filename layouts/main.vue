<template>
  <div class="min-h-screen flex flex-col">
    <GeneralHeaderNavbar />
    <main class="flex-1 bg-neutral">
      <slot />
    </main>
    <GeneralFooFooter />
  </div>
</template>
<script>
export default {};
</script>

<style></style>
