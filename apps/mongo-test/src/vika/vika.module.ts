import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VikaModuleBase } from "./base/vika.module.base";
import { VikaService } from "./vika.service";
import { VikaController } from "./vika.controller";
import { VikaResolver } from "./vika.resolver";

@Module({
  imports: [VikaModuleBase, forwardRef(() => AuthModule)],
  controllers: [VikaController],
  providers: [VikaService, VikaResolver],
  exports: [VikaService],
})
export class VikaModule {}
