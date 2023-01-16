<template>
   <div>
    <b-icon v-if="attivo" icon="check-circle" size="is-medium"> </b-icon>
    <b-icon v-else icon="panorama-fisheye" size="is-medium"> </b-icon>
   </div> 
</template>

<script>
export default {
    props: {
        attivo: Boolean
    } 
}
</script>
