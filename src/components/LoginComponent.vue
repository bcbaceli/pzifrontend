<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="loginUser" class="space-y-6">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Email: </label>
          <div  class="mt-2">
            <input type="email" id="email" v-model="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Lozinka: </label>
          </div>
          <div class="mt-2">
            <input id="password" type="password" v-model="password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Prijavite se</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
        Niste registrirani?
        {{ ' ' }}
        <a href="/register" class="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Registrirajte se</a>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    name:'LoginComponent',
    data(){
      return{
        email:'',
        password:'',
      }
    },
    methods:{
      async loginUser(){
        try {
          const response=await axios.post('http://localhost:8000/api/login',{
            email:this.email,
            password:this.password,
          });

          const token = response.data.token;
          const user = response.data.user;

          if(response.data && response.data.token){
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            this.email='',
            this.password=''

            if (user.role === 'guest') {
              this.$router.push('/');
            } else if (user.role === 'owner') {
              this.$router.push('/owner');
            }
          }
        } catch (error) {
          console.error(error);
          alert('Greška prilikom prijave');
        }
      }
    }
  }
</script>