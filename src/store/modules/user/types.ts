export interface IAssinaturas{
  title: string;
  habilitada: boolean;
}

export interface IUser{
  username: string;
  password: string;
  assinaturas: IAssinaturas[];
}