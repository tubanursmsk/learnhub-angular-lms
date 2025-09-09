export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: string; // Bazılarında role yok, o yüzden optional
  access_token: string;
    token_type:   string;
    expires_in:   number;
}
