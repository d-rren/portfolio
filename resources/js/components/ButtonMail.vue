<template>
  <a href="#" class="btn btn-primary rounded-0 d-inline-block py-2">
    <i class="material-icons md-18 align-middle" v-if="icon">{{ icon }}</i>
    <span class="align-middle" v-if="text">{{ text }}</span>
    <span class="align-middle" v-else>Contact Me</span>
  </a>
</template>

<script>
  export default {
    name: 'button-mail',
    props: ['text', 'icon'],
    computed: {}
  };
</script>
