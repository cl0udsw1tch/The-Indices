import type { RequestEvent } from "./$types";
import { readFile } from 'fs/promises'

export async function GET({request}: RequestEvent): Promise<Response>{
  const content = await readFile("src/tex/Control Systems.tex", {encoding: 'utf-8'})
  return new Response(JSON.stringify(content), {status: 200});
}