import { post } from './';
import { CLIENT_ID } from '../constants';

export const signIn = payload =>
  post(`/api/v1/oauth/token`, {
    ...payload,
    clientId: CLIENT_ID,
    grantType: 'password',
  });

export const refreshToken = payload =>
  post(`/api/v1/oauth/token`, {
    refreshToken: localStorage.getItem('refreshToken'),
    clientId: CLIENT_ID,
    grantType: 'refresh_token',
  });
