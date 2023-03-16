import * as request from 'supertest';
import * as constants from './constants';

export const seedUsers = async (server: any) => {

  const users = []
  const accessTokens = []
  for await (const user of constants.users){
    const response = await request(server).post('/auth/registration')
      .send(user)
    users.push(response.body)
    
    const accessToken = await request(server).post('/auth/login')
      .send({loginOrEmail: user.login, password: user.password})
    accessTokens.push(accessToken.body.accessToken)
    
  }
  constants.variables.setCreatedUsers(users)
  constants.variables.setAccessTokens(accessTokens)

}
