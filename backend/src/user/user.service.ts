import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
constructor(
  @InjectModel(User.name) private userModel: Model<User>
){}

 async create(user: CreateUserDto) {
   
try{
  const result = await this.userModel.find({name:user.name});
  console.log(result)
  if(result.length !==0){
    return {message:'Este Usuario ya existe '};
  }else{
    await this.userModel.create(user);
    return{
      message:'Usuario creado con exito',
      status:200
    }
  }
}catch(error){
  console.error(error)
  throw error
}

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
