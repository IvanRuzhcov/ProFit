import { Comments } from './types/Comments';
import { FileTrainer } from './types/FileTrainer';
import { CoachId, Subscribe } from './types/Subscribe';
import { Trainer } from './types/Trainer';

// }
export const addFileTrainerFetch = async (
  obj: FormData
): Promise<FileTrainer> => {
  const res = await fetch('/api/trainerpage/file', {
    method: 'POST',
    body: obj,
  });
  const data = await res.json();
  return data;
};

export const addUrlTrainerFetch = async (
  obj: FormData
): Promise<FileTrainer> => {
  const res = await fetch('/api/trainerpage/url', {
    method: 'POST',
    body: obj,
  });
  const data = await res.json();
  return data;
};

export const addSubscribe = async (userId: CoachId): Promise<Subscribe[]> => {
  const res = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ userId }),
  });
  const data = await res.json();
  return data;
};
export const addComents = async (comments: Comments): Promise<Comments[]> => {
  const res = await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(comments),
  });
  const data = await res.json();
  return data;
};

export async function initTrainerFeth(): Promise<Trainer[]> {
  const res = await fetch('/api/coach');
  const data = await res.json();
  return data;
}
export async function initComment(): Promise<Comments[]> {
  const res = await fetch('/api/init/comments');
  const data = await res.json();
  return data;
}
