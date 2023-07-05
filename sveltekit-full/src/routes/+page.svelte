
<script lang="ts">
  import Background from "../components/home/background.svelte";
  import Title from "../components/home/title.svelte";
  let numImages = 10;
  let windowRight: boolean = false;
  let currImage: number = 0;
  const handleImageChange = () => {
    currImage = (currImage + 1) % 10;
    windowRight = !windowRight;
  }
</script>


<main class:windowRight={windowRight}>

  {#each Array(numImages) as _, i}
    <Background imageName={`main${i}.jpg`} show={currImage == i}/>
  {/each}

  {#each Array(numImages) as _, i}
    <Title imageName={`main${i}.jpg`} show={currImage == i}/>
  {/each}
  

  <div class="title solid">
    <h1>
      <span>The In</span> 
      <span class="partial">&part;</span> 
      <span>ices</span>
    </h1>
    <div class="change-image" on:click={handleImageChange} />
  </div>
</main>   
<footer>
  
</footer>


<style lang="scss">

  @import '../sass/breakpoints';
  @import '../sass/variables';

  * {
    font-family: Rajdhani;
  }
  main {

    height: 100%;
    width: 100%;
    opacity: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    &::after {
      content: '@Cloudswitch.ca';
      position: absolute;
      left: 0;
      top: 0;
      right: 50%;
      bottom: 0;
      backdrop-filter: blur(50px);
      transition: transform $transitionDuration;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-left: 5vw;
      padding-bottom: 5vh;
      font-size: 32px;
    }

    .title.solid {
      z-index: 3;
      color: transparent;
      width: 100%;
      position: absolute;
      align-self: center;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(rgba($text, 0.7), rgba($text, 0.7)), linear-gradient(rgba($text, 0.7), rgba($text, 0.7));
      background-position: left 0 top 0, right 0 top 0;
      background-size: 0% 100%, 50% 100%;
      background-repeat: no-repeat;
      transition: background-size $transitionDuration;
      padding-right: 5%;

      display: flex;
      flex-direction: row;
      justify-content: center;

      @include large {
        padding-right: 80px;
      }

      h1 {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;
        -webkit-text-stroke: 2px $text;

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
        -webkit-text-stroke-width: 0px;
        
      };

      div.change-image {
        
        position: absolute;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        justify-content: center;
        top: 100%;
        right: 50%;
        width: 100px;
        height: 50px;
        border-radius: 10px;
        background-color: $text;
        transition-duration: $transitionDuration;

        &::before {
          position: absolute;
          content: '';
          height: 40px;
          width: 30px;
          display: flex;
          border-radius: 10px;
          border: 3px solid orangered;
          background-color: rgba(orangered, 0.5);

        }
      }

    }
    

    &.windowRight {

      &::after {
        transform: translateX(100%);
      }

      div.change-image {
        transform: translateX(100px);
        background-color: var(--text);
        
      }

      .title.solid {
        background-size: 50% 100%, 0 100%;
      }
    }
  
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    border-top: 1px solid beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
  }
</style>