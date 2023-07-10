import User from "../../auth/types/User";

export type Comments = {
  user_id?: number;
  files_id: number;
  comments: string;
  createdAt: string
};


