
import axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLogin: false,
    baseurl: 'http://localhost:3000'
  }),
  actions: {
    async login(form) {
      try {
        const {data} = await axios({
          method: 'post',
          url: `${this.baseurl}/login`,
          data: form
        })
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('username', data.username);
        this.isLogin = true;
        this.router.push('/');
      } catch (error) {
        console.log(error)
      }
    },
    async logout(){
      localStorage.clear();
    }
  }

})
