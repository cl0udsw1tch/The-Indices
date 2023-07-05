<script lang='ts'>
export let imageName: string;
export let show: boolean = false;
</script>


<div class="title img" class:show={show} >
  <h1 style:background-image="url('/images/{imageName}')">
    <span>The In</span> 
    <span class="partial">&part;</span> 
    <span>ices</span>
  </h1>
</div>

<style lang="scss">

  @import '../../sass/breakpoints';
  @import '../../sass/variables';

   .title.img {
      width: 100%;
      z-index: 3;
      opacity: 0;
      position: absolute;
      align-self: center;
      padding-right: 5%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      opacity: 0;
      transition: opacity $transitionDuration;
      
      &.show {
        opacity: 1;
      }
  
      @include large {
        padding-right: 80px;
      }

      h1 {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;
        position: relative;
        background-size: cover;
        background-attachment: fixed;
        background-position: center center;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
  
      }
      
      
      h1, span {
        
        font-size: 15vw;
        font-weight: 1000;

        @include large {
          font-size: 220px;
        }
        
      }
      span.partial {

        color: rgba($accent-A, 0.7);

      };

    }
</style>