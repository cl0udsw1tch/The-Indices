
import { spawn } from 'child_process';
import path from 'path';


export const load = async function(params) {
  
  const fetchTex = async () => {
    const res = await params.fetch("/api/Differential-Calculus")
    const data = await res.json();
    return data;
  }

  const exportHTML = () => {
    
    return new Promise(async (resolve, reject) => {


      // Define the TeX input string
      const input = await fetchTex();
      // Spawn the pandoc process
      const pandoc = spawn('pandoc', ['-f', 'latex', '-t', 'html', '--mathjax'], 
      {cwd: path.join( process.cwd(), "static")});
    
      // Write the input string to the standard input of the pandoc process
      pandoc.stdin.write(input);
      pandoc.stdin.end();
    
      // Capture the output of pandoc
      let output = '';
      pandoc.stdout.on('data', (data) => {
        output += data;
      });
    
      pandoc.on('close', (code) => {
        resolve(output)
      });

    })
  
  }


  const output = await exportHTML()

  return {
    tex: output
  }
}