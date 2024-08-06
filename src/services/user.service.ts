import { HttpService } from "./base.service";

class UserService extends HttpService {
  private readonly prefix: string = "user";

  getUserDetails = (): Promise<any> => this.get(`${this.prefix}/`);
  startMining = (): Promise<any> => this.get(`${this.prefix}/start-mining`);
  getFriendsList = (): Promise<any> => this.get(`${this.prefix}/friends`);
}

export const userService = new UserService();
