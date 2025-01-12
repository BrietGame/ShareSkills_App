import { defineStore } from 'pinia';
import axiosInstance from './axiosCustom';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    password: '',
  }),
  actions: {
    async login(email, password) {
      return new Promise((resolve, reject) => {
        axiosInstance.post('/auth/login', { email, password })
          .then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
});
