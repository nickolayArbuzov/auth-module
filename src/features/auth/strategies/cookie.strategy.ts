import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const cookieExtractor = (req) => {
  try {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies.refreshToken;
    }
    return token;
  }
  catch(e) {
    console.log('error', e)
  }
};

@Injectable()
export class CookieStrategy extends PassportStrategy(Strategy, 'cookie') {
  constructor(
    public configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return 
  }
}