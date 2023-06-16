import User from "../../auth/types/User";

export type Subscribe = {
  id: number;
  sportsman_id: number;
  coach_id: number;
  coach: User;
};
