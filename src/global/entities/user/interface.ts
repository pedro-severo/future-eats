export interface User {
  userName: string;
}

export interface UserInput {
  userName: string;
}

export interface UserGlobalState {
  user: User;
  setUserProps: (newUserProps: UserInput) => void;
}
