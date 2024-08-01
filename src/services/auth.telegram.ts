import { HttpService } from "./base.service";

class AuthService extends HttpService {
  private readonly prefix: string = "auth";

  authenticateUser = (body: any): Promise<any> =>
    this.post(`${this.prefix}/telegram`, body);
}

export const authService = new AuthService();
