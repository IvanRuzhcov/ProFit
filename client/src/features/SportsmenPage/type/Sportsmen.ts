export type Sportsmen = {
  id?: number;
  description: string;
  city: string;
  profilePicture: string;
  name: string;
};

export type SportsmenId = Sportsmen['id'];

export type SportsmenUp = {
  id: SportsmenId;
  description: string | undefined;
  city: string | undefined;
  name: string | undefined;
  email: string | undefined;
};

export type State = {
  updateSportsmen: SportsmenUp[];
  error: string | undefined;
};
