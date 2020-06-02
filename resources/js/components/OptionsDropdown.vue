<template>
  <div class="btn-group p-0 m-0 float-right">
    <button
      class="btn rounded-0 p-0"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      v-bind:id="id"
    >
      <i class="material-icons" v-if="icon">{{ icon }}</i>
      <i class="material-icons" v-else>more_vert</i>
    </button>
    <div class="dropdown-menu dropdown-menu-right" v-bind:aria-labelledby="id">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "options-dropdown",
    props: ["id", "icon"]
  };
</script>
