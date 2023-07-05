


<header>

    <h1 class="title">The In<span>&part;</span>ices</h1>

</header>
<main>
  <slot></slot>
</main>   
<footer>
  <p>Copyright Cloudswitch.ca</p> 
</footer>


<style lang="scss">

  @use '../../styles/variables' as variables;
  main, footer {
    padding: 50px;
  }

  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid grey;
    background-image: url("images/math.jpg");
    background-repeat: repeat;
    background-size: contain;
    background-attachment: fixed;
    background-position: bottom;
    position: relative;
    z-index: -2;
  
    &::after {
      backdrop-filter: blur(50px);
      position: absolute;
      left: 0;
      top: 0;
      right: 70%;
      bottom: 0;
      content: '';
      z-index: -1;
    }
    h1 {
      position: relative;
      margin-left: 70px;
      width: fit-content;

      font-family: Rajdhani;
      font-size: 4rem;
      font-weight: 700;
      background-image: url("images/math.jpg");
      background-repeat: repeat;
      background-size: contain;
      background-attachment: fixed;
      background-position: bottom;
      background-clip: text;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: var(--text);
      -webkit-text-fill-color: transparent;

    }

      
  

    span {
      color: variables.$accent-A;
    }
  }

  main {
 
    flex: 1;
    font-size: 16px;

  }

  footer {
    height: 100px;

  }

</style>