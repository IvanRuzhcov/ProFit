// export type Video = {
//     id: number,
//     url: string,
//     description: string,
//     type: string,

import { FileTrainer } from "./types/FileTrainer";

// }
export const addFileTrainerFetch = async (obj: FormData): Promise<FileTrainer>=> {
    const res = await fetch('/api/trainerpage/file', {
        method: 'POST',
        body: obj,
    })
    const data = await res.json();
    return data;
}
 export const addUrlTrainerFetch = async (obj: FormData): Promise<FileTrainer> => {
    const res = await fetch('/api/trainerpage/url', {
        method: 'POST',
        body: obj,
    })
    const data = await res.json();
    return data;
 }