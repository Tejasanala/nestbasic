import { Module } from "@nestjs/common";
import { HerosController } from "./heros.controller";
import { HerosService } from "./heros.service";

@Module({
  controllers: [HerosController],
  providers: [HerosService],
})
export class HerosModule {}
