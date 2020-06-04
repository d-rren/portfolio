<template>
  <a href="#" class="btn btn-primary rounded-0 d-inline-block pb-3 pt-2">
    <i class="material-icons md-24 align-middle mr-2" v-if="icon">{{ icon }}</i>
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
