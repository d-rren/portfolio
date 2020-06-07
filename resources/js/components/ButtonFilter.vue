<template>
  <button class="btn btn-dark rounded-0 d-inline-block py-2 px-3 flex-fill">
    <i class="material-icons md-18 align-middle mr-2" v-if="icon">{{ icon }}</i>
    <span class="align-middle" v-if="text">{{ text }}</span>
    <span class="align-middle" v-else>Filter</span>
  </button>
</template>

<script>
  export default {
    name: 'button-filter',
    props: ['text', 'icon'],
    computed: {}
  };
</script>
