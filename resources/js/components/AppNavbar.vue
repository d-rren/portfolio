<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black py-0 fixed-top">
    <button class="navbar-toggler border-0 mx-auto" id="navbarTogglerBtn" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <i class="material-icons">expand_more</i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="photos.html">Photos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#instagram">My Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#contact">Contact Me</a>
        </li>
      </ul>
      <span class="navbar-text text-muted" v-if="text">{{ text }}</span>
      <span class="navbar-text text-muted" v-else>Made with ❤️ by <a href="https://github.com/danielflachica" target="_blank">Daniel</a></span>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'app-navbar',
    props: ['text']
  };
</script>
