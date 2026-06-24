import { api } from './client';

export async function login(email, password) {
  const data = await api.post('/auth/login', { email, password });
  localStorage.setItem('gs_token', data.token);
  return data.user;
}

export async function register(email, password, name) {
  const data = await api.post('/auth/register', { email, password, name });
  localStorage.setItem('gs_token', data.token);
  return data.user;
}

export function logout() {
  localStorage.removeItem('gs_token');
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem('gs_token'));
}
