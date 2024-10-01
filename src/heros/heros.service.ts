import { Injectable } from "@nestjs/common";

@Injectable()
export class HerosService {
  getHeros() {
    return {
      heros: [
        { name: "Ironman,", realName: "Tony Stark", isAvenger: true },
        { name: "Batman", realName: "Brue Wayne", isAvenger: false },
      ],
    };
  }
}
