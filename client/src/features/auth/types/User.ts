import { FileTrainer } from "../../Trainer/types/FileTrainer";

export interface Certificate {
  id: number,
  user_id_cert: number,
  url_cert: string,
}

export default interface User {
  id?: number;
  login?: string;
  email: string;
  name: string;
  status?: string;
  online?: boolean;
  description:string;
  city: string;
  vertification?: boolean;
  profilePicture?:string;
  Certificates?: Certificate[] ;
  Files?: FileTrainer[];
}
