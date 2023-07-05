
<script lang="ts">
  import { onMount } from 'svelte';

  
  import '../app.scss'

  onMount(() => {
   
    (window as any).MathJax!.typeset();

  })
</script>

 
 <svelte:head>
   <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    };

   </script>
   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
   <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
 </svelte:head>

 <slot>

 </slot>
