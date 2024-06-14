import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CacheService } from 'src/cache/cache.service';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private redisCache: CacheService,
  ) {}

  async signIn(email: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!user) {
      return {
        message: 'Unauthorized',
        status: 403,
      };
    }
    const payload = { userEmail: user.email, userName: user.name };
    const token = {
      access_token: await this.jwtService.signAsync(payload),
    };
    await this.redisCache.storeData(token.access_token);
    return token;
  }
}
