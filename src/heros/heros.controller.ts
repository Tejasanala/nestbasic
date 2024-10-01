import { Controller, Get, Param } from "@nestjs/common";
import { HerosService } from "./heros.service";

@Controller("heros")
export class HerosController {
  constructor(private readonly herosService: HerosService) {}

  @Get("/")
  getHeros() {
    return this.herosService.getHeros();
  }
  //Get by name
  @Get(":name")
  getSinglehero(@Param("name") name) {
    return name;
  }
}
