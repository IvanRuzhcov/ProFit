// eslint-disable-next-line import/no-cycle
import User from '../../auth/types/User';

export type Subscribe = {
  id: number;
  profilePicture: string;
  sportsman_id: number;
  coach_id: number;
  coach: User;
};
