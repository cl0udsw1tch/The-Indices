<script lang="ts">
  export let imageName: string;
  export let show: boolean = false;
</script>


<div class={`background ${imageName}`} class:show={show} style:background-image="url('/images/{imageName}')"/>



<style lang="scss">
  @import '../../sass/variables';

  .background {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      background-color: transparent;
      background-size: cover;
      background-position: center center;
      
      transition: opacity $transitionDuration;
      
      &.show {
        opacity: 1;
      }
    }
</style>