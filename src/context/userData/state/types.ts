export type User = {
  userName?: "string";
};

export type UserReturn = {
  getUserName: () => string;
  setUserName: (name: string) => void;
};
