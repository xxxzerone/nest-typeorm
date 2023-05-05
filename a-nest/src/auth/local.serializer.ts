import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {
    super();
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.usersRepository
      .findOneOrFail({
        where: { id: +userId },
        select: ['id', 'email', 'nickname'],
        relations: ['Workspaces'],
      })
      .then((user) => {
        console.log('user', user);
        done(null, user);
      })
      .catch((error) => done(error));
  }

  serializeUser(user: Users, done: CallableFunction) {
    done(null, user.id);
  }
}
