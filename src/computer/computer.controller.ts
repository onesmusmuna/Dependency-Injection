import { Controller } from '@nestjs/common';

@Controller('computer')
export class ComputerController {
  supplyPower(watts: number) {
    console.log(`Suppling ${watts} worth of power`);
  }
}
