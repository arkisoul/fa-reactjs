import { RequestService } from './RequestService';

export const AuthService = {
  login: (user) => {
    return RequestService.post('login', user);
  },
  logout: () => {
    localStorage.clear();
  },
  register: (user) => { return RequestService.post('register', user) },
}