import { Module } from '@nestjs/common';
import { UsersModule } from '../../features/users/users.module';
import { AllDataController } from './delete-all-data.controller';
import { AllDataService } from './delete-all-data.service';

@Module({
  controllers: [AllDataController],
  imports: [UsersModule],
  providers: [
    AllDataService,
  ],
})
export class AllDataModule {}
