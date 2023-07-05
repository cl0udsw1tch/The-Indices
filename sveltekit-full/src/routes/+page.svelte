
<script lang="ts">
  let otherImage = false;
  const handleImageChange = () => {
    otherImage = !otherImage;
  }
</script>


<main class:otherImage>
  <div class="title img">
    <h1>
      <span class="transparent">The In</span> 
      <span class="partial">&part;</span> 
      <span class="opaque">ices</span>
    </h1>
    <div class="change-image" on:click={handleImageChange} />
  </div>
  <div class="title solid">
    <h1>
      <span>The In</span> 
      <span class="partial">&part;</span> 
      <span>ices</span>
    </h1>
  </div>
</main>   
<footer>
  
</footer>


<style lang="scss">

  @import '../styles/breakpoints';
  @import '../styles/variables';

  * {
    font-family: Rajdhani;
  }
  main {

    @keyframes fadeIn {

      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {

      to {
        opacity: 0;
      }
    }

    $transitionDuration: 2s;

    $image: url("images/main1.jpg");
    height: 100%;
    width: 100%;
    opacity: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-image: $image;
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    transition: opacity $transitionDuration;
 
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      background-image: url("images/main2.jpg");
      background-color: transparent;
      background-size: cover;
      background-position: center center;
      
      transition: opacity $transitionDuration;
      
    }
    
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

    .title {
      z-index: 3;
      padding-right: 5%;
      position: relative;
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

      }
      h1, span {
        
        font-size: 15vw;
        font-weight: 1000;

        @include large {
          font-size: 220px;
        }
        
      }

      span.transparent {

        position: relative;
        background-image: $image;
        background-size: cover;
        background-attachment: fixed;
        background-position: center center;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-stroke: 2px var(--text);
        


        &::after {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          content: 'The In';
          opacity: 0;
          background-image: url("images/main2.jpg");;
          background-size: cover;
          background-attachment: fixed;
          background-position: center center;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-stroke: 2px var(--text);
          transition: opacity $transitionDuration;
        }
      };

      span.partial {

        color: rgba($accent-A, 0.7);
        
      };

      span.opaque {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-stroke: 2px $text;
        color: transparent;
        position: relative;

        &::after {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          content: 'ices';
          opacity: 0;
          background-image: url("images/main2.jpg");;
          background-size: cover;
          background-attachment: fixed;
          background-position: center center;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-stroke: 2px var(--text);
          transition: opacity $transitionDuration;
        }
        
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
      background-size: 0 100%, 50% 100%;
      background-repeat: no-repeat;
      transition: background-size $transitionDuration;
    }

    &.otherImage {
      &::before {
        opacity: 1;
      }

      &::after {
        transform: translateX(100%);
      }
      .title.img span.transparent::after {
        opacity: 1;
      }

      .title.img span.opaque::after {
        opacity: 1;
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