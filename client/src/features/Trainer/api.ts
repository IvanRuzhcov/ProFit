export type Video = {
    id: number,
    url: string,
    description: string,
    type: string,
}
export const addFileTrainerFetch = async (obj: FormData): Promise<Video>=> {
    const res = await fetch('/api/trainerpage', {
        method: 'POST',
        body: obj,
    })
    const data = await res.json();
    return data;
}
