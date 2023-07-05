

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let windowRight: boolean;
  let isLocked: boolean = false;

  const dispatch = createEventDispatcher();
  const handleLock = () => {
    isLocked = !isLocked;
    dispatch('lock')
  }


</script>


<div class="title solid"  class:windowRight={windowRight}>
  <h1>
    <span>The In</span> 
    <span class="partial">&part;</span> 
    <span>ices</span>
  </h1>
  <div class="change-image">
    <button class="button" on:click />
    <button class="lock" on:click={handleLock}>
      {#if !isLocked}
        <i class='bx bxs-lock-open opened' ></i>
      {:else}
        <i class='bx bxs-lock closed'></i>
      {/if}
    </button>
  </div>
</div>


<style lang="scss">

  
  @import '../../sass/breakpoints';
  @import '../../sass/variables';

  .title.solid {
      z-index: 3;
      color: transparent;
      width: 100%;
      position: absolute;
      align-self: center;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(rgba($text, 0.9), rgba($text, 0.9)), linear-gradient(rgba($text, 0.9), rgba($text, 0.9));
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

        .button {
          cursor: grab;
          position: absolute;
          content: '';
          height: 40px;
          width: 30px;
          display: flex;
          border-radius: 10px;
          border: 3px solid orangered;
          background-color: rgba(orangered, 0.5);

          &:active {
            cursor: grabbing;
            background-color: rgba(orangered, 0.6);
          }
        }
        
        .lock {
          cursor: pointer;
          align-self: flex-end;
          margin-right: 20px;
          background-color: transparent;
          border: none;

          i {
            font-size: 20px;

            &.opened {
              color: black;
            }
            &.closed {
              color: $accent-A;
            }
  
          }
        }
        
      }

      &.windowRight {

        background-size: 50% 100%, 0 100%;

        div.change-image {
          transform: translateX(100px);
          background-color: var(--text);
        }
      }

    }


</style>