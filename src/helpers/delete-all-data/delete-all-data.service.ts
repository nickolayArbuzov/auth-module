import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../features/users/domain/user.schema';

@Injectable()
export class AllDataService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async deleteAllData(): Promise<void> {
    await this.userModel.deleteMany({})
  }
  
}