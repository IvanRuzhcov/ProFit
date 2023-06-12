import { Sportsmen } from "./type/Sportsmen";

export async function apiInitSportsmen():Promise<Sportsmen[]>{
const res = await fetch('/api/auth/verification');
if(res.status >= 400){
    const { error } = await res.json();
    throw error;
}
console.log(res.json());

return res.json()
}