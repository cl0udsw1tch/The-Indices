<script lang="ts">
  import { onMount } from 'svelte';
  

  export let data: {tex: string};

  onMount(() => {

    const e: HTMLElement = window.document.querySelector("div.tex")!;
    console.log('data', data.tex)
    e.innerHTML = data.tex;

    const s = e.querySelectorAll('*')
    s.forEach((_s) => {
      (_s as HTMLElement).style.color = "var(--text)";
      (_s as HTMLElement).style.fontFamily = "Rajdhani"
    });

    


  })
  
</script>

  <div class="tex"></div>
  

<style lang="scss">

  @import '../../sass/variables';
  .tex {
    :global(h2), :global(h3) {
      font-size: 1.5em;
     
    };

    :global(h2 .MathJax) {
        color: var(--accent-A);
    };
    :global(h3 .MathJax) {
        color: var(--accent-A);
    };

    :global(mjx-c.mjx-c27F9) {
        color: mix($pink, black, 50%);
    };
    :global(mjx-c.mjx-c27FA) {
        
        color: mix($orange, black, 50%);
    };

    :global(div.proof), :global(p) {
      font-size: 1.2em;
    }
  } 
</style>