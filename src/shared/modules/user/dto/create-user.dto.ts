import { UserType } from "../../../types/user.type.js";

export class CreateUserDto {
  public mail!: string;
  public name!: string;
  public avatar?: string;
  public password!: string;
  public type!: UserType;
}
