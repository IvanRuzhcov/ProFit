export type FileTrainer = {
    id: number,
    type: string,
    url: string,
    user_id_files: number,
    description: string,
}

export type FileTrainerId = FileTrainer['id']