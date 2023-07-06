// eslint-disable-next-line import/no-cycle
import { Subscribe } from "../../SportsmenPage/type/Subscribe";
import { FileTrainer } from "../../Trainer/types/FileTrainer";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface Certificate {
  id: number,
  user_id_cert: number,
  url_cert: string,
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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
  coach?: Subscribe[]
  Certificates?: Certificate[] ;
  Files?: FileTrainer[];
}
