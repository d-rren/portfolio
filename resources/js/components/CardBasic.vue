<template>
  <div class="card rounded-0 border-0 shadow-sm">
    <div class="card-header bg-white" v-if="title">
      <h5 class="my-auto" v-if="href">
        <a :href="href">{{ title }}</a>
        <slot name="options"></slot>
      </h5>
      <h5 class="my-auto" v-else>
        {{ title }}
        <slot name="options"></slot>
      </h5>
    </div>
    <div class="card-header" v-if="hasSlotHeader">
      <slot name="header"></slot>
    </div>
    <div class="card-body p-0" v-if="hasSlotImage">
      <slot name="image"></slot>
    </div>
    <div class="card-body" v-if="hasSlotData">
      <slot></slot>
    </div>
    <div class="card-footer bg-white" v-if="hasSlotFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card-basic",
    props: ["title", "href", "noBorder"],
    computed: {
      hasSlotData() {
        return !!this.$slots.default;
      },
      hasSlotFooter() {
        return !!this.$slots.footer;
      },
      hasSlotHeader() {
        return !!this.$slots.header;
      },
      hasSlotImage() {
        return !!this.$slots.image;
      }
    }
  };
</script>
