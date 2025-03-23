type UserType = 'Pro' | 'Default';

export type User = {
  name: string;
  mail: string;
  avatar: string | null;
  password: string;
  type: UserType;
}
