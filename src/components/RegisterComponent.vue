<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="addUser" class="space-y-6">
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Korisničko ime: </label>
          <div class="mt-2">
            <input type="text" id="name" v-model="newUser.name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Email: </label>
          <div class="mt-2">
            <input type="email" id="email" v-model="newUser.email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Lozinka:</label>
          </div>
          <div class="mt-2">
            <input type="password" id="lozinka" v-model="newUser.password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <label for="role" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Odaberi: </label>
          <div class="mt-2">
            <select id="role" v-model="newUser.role" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500">
              <option value="" disabled selected>Odaberi: </option>
              <option value="guest">Gost</option>
              <option value="owner">Vlasnik</option>
            </select>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Registrirajte se</button>
        </div>
      </form>

    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default{
    name:'RegisterComponent',
    data(){
      return{
        newUser:{
          name:'',
          email:'',
          password:'',
          role:''
        }
      }
    },
    methods:{
      async addUser(){
        try {
          const response=await axios.post('/backend/api/register',this.newUser)
          if(response.status===200){
            this.newUser={
              name:'',
              email:'',
              password:'',
              role:''
            };
            alert('Korisnik registriran');
            this.$router.push('/login');
          }else{
            alert('Greška prilikom registracije, provjerite podatke');
          }
        } catch (error) {
            console.log('Greška',error);
            
        }
      }
    }
  }
</script>