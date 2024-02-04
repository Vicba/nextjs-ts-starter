export type User = {
  id: string;
  username: string;
  avatar: string;
  email: string;
  googleId: string;
  createdAt: string;
  updatedAt: string;
};

export type Device = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

export enum StateType {
  ON = "ON",
  OFF = "OFF",
}

export enum ActionType {
  ON = "ON",
  OFF = "OFF",
}
