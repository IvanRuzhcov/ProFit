import { Trainer } from './Trainer';
import { Subscribe } from './Subscribe';
import { FileTrainer } from './FileTrainer';
import { Comments } from './Comments';
import { User } from './User';


export type TrainerState = {
  trenerState: Trainer[];
  subscribeState: Subscribe[];
  files: FileTrainer[];
  comments: Comments[];
  user: User[]
};
