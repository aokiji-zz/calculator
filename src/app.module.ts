import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AppCacheModule } from './cache/cache.module';
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    AppCacheModule,
    CalculatorModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
