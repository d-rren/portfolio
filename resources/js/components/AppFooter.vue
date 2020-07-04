<template>
	<footer class="footer d-flex position-absolute w-100 border-0" :style="color">
    <div class="container text-center align-self-center">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props: ['color']
  };
</script>
