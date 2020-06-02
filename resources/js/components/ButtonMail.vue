<template>
  <a href="#" class="btn btn-primary">
    <i class="material-icons material-icons-outlined md-18" v-if="icon">{{ icon }}</i>
    <span v-if="text">{{ text }}</span>
    <span v-else>Contact Me</span>
  </a>
</template>

<script>
  export default {
    name: 'button-mail',
    props: ['text', 'icon'],
    computed: {}
  };
</script>
