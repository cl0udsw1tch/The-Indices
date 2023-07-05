
<script lang="ts">
  import { onMount } from "svelte";
  import Background from "../components/home/background.svelte";
  import TitleImgClip from "../components/home/title_img_clip.svelte";
  import TitleSolid from "../components/home/title_solid.svelte";

  let numImages   : number = 11;
  let windowRight : boolean = false;
  let currImage   : number = Math.floor(Math.random() * (numImages - 1));
  let timer       : NodeJS.Timeout | null;
  let duration    : number = 20_000;
  let isLocked    : boolean = false;

  const updateTimer = () => {
    timer = setTimeout(() => {
        handleImageChange();
      }, duration);
  }

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  }

  const handleImageChange = () => {
    if (!isLocked) {
      currImage = (currImage + 1) % numImages;
      windowRight = !windowRight;
      clearTimer();
      updateTimer();
    }
    else {
      const lock: HTMLElement = window.document.querySelector("i.closed")!;
      lock.classList.toggle('bx-tada', true);
      lock.style.color = 'red'
      setTimeout(() => {
        lock.classList.toggle('bx-tada', false);
        lock.style.color = 'var(--accent-A)'
      }, 1000)
    }
  }

  const handleLock = () => {
    isLocked = !isLocked;
    if (isLocked) {
      clearTimer();
    }
    else {
      updateTimer();
    }
  }

  onMount(() => {
    updateTimer();
    return clearTimer;
  })
</script>


<main class:windowRight={windowRight}>
  {#each Array(numImages) as _, i}
    <Background imageName={`main${i}.jpg`} show={currImage == i}/>
  {/each}
  {#each Array(numImages) as _, i}
    <TitleImgClip imageName={`main${i}.jpg`} show={currImage == i}/>
  {/each}
  <TitleSolid on:click={handleImageChange} windowRight={windowRight} on:lock={handleLock}/>
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

    &.windowRight {
      &::after {
        transform: translateX(100%);
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