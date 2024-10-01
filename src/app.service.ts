import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello Teja!";
  }

  getAbout() {
    return { message: "This a message from service" };
  }
}
