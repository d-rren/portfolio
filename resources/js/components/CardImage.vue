<template>
  <div class="card w-100 bg-dark rounded-0 border-0 shadow-sm d-inline-block card-img-zoom"
    :class="tags">
    <img :src="image" class="card-img rounded-0" alt="" v-if="image">
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
    props: ["image", "title", "tags"]
  };
</script>
