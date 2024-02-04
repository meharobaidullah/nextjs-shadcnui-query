interface ID {
  name: string;
  value: string;
}

interface Name {
  first: string;
  last: string;
  title: string;
}

export interface User {
  id: ID;
  name: Name;
  email: string;
  gender: string;
}

export interface UserResponse {
  results: User[];
  info: any;
}
