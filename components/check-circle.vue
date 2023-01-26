<template>
  <div>
    <b-icon :icon="getIcon(attivo)" size="is-medium"> </b-icon>
  </div>
</template>

<script>
export default {
  props: {
    attivo: Boolean,
  },
  methods: {
    // https://pictogrammers.com/library/mdi/
    getIcon(status) {
      switch (status) {
        case true:
          return "check-circle";
        case false:
          return "close-circle";
        default:
          return "panorama-fisheye";
      }
    },
  },
};
</script>
