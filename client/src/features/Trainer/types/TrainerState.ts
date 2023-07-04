import { Trainer } from './Trainer';
import { Subscribe } from './Subscribe';
import { FileTrainer } from './FileTrainer';
import { Comments } from './Comments';


export type TrainerState = {
  trenerState: Trainer[];
  subscribeState: Subscribe[];
  files: FileTrainer[];
  comments: Comments[];
};
