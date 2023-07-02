import type { PageServerLoad } from './$types';

export const load: PageServerLoad = function(params) {

  const data = fetch("/api/Differential-Calculus")
  return {
    data: data
  }
}