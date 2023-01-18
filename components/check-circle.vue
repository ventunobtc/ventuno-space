<template>
   <div>
    <b-icon v-if="attivo" icon="check-circle" size="is-medium" v-tooltip.hideOnTargetClick="{ content: linkafonte }"> </b-icon>
    <b-icon v-else icon="panorama-fisheye" size="is-medium"> </b-icon>
   </div> 
</template>

<script>
export default {
    props: {
        attivo: [String, Boolean]
    },
    computed: {
        linkafonte(v) {
            if (typeof this.attivo === 'string') {
                return '<a href="' + this.attivo + '"  target="_blank">fonte</a>'
            } else {
                return null
            }
        }
    }
}
</script>
