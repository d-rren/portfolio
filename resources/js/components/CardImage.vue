<template>
  <div class="card w-100 bg-dark rounded-0 border-0 shadow-sm d-inline-block">
    <img :src="src" class="card-img rounded-0" alt="" v-if="src">
    <div class="card-img-overlay d-flex align-items-end" v-if="title">
      <p class="text-muted mx-auto">{{ title }}</p>
    </div>
    <div class="card-img-overlay d-flex align-items-end" v-else>
      <p class="text-muted mx-auto">&copy; 2020 d.rren photography</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card-image",
    props: ["src", "title"]
  };
</script>
