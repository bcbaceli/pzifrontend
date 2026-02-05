<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="addOwner" class="space-y-6">
        <div>
          <label for="first_name" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Ime</label>
          <div class="mt-2">
            <input type="text" id="first_name" v-model="newOwner.first_name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="last_name" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Prezime</label>
          </div>
          <div class="mt-2">
            <input type="text" id="last_name" v-model="newOwner.last_name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="phone" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Broj Telefona</label>
          </div>
          <div class="mt-2">
            <input type="text" max="20" id="phone" v-model="newOwner.phone" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Email</label>
        <div class="mt-2 grid grid-cols-1">
          <select id="email" v-model="newOwner.email" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
            <option disabled selected>Odaberite Vaš Email</option>
            <option v-for="user in users" :key="user.id" :value="user.email">{{ user.email }}</option>
          </select>
        </div>

        <label for="user_id" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Ponovljeni Email</label>
        <div class="mt-2 grid grid-cols-1">
          <select id="user_id" v-model="newOwner.user_id" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
            <option disabled selected>Ponovno Odaberite Vaš Email</option>
            <option v-for="user in users" :key="user.id" :value="user.id">{{ user.email }}</option>
          </select>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Spremi Profil</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    name:'OwnerProfile',
    data(){
      return{
        users:[],
        newOwner:{
          first_name:'',
          last_name:'',
          phone:'',
          email:'',
          user_id:''
        }
      }
    },
    methods:{
      async getUsers(){
        try {
          const response=await axios.get('http://localhost:8000/api/users',{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json'
            }
          });
          this.users=response.data;
        } catch (error) {
          console.log('Greška',error);
          alert('Greška na serveru');
        }
      },
      async addOwner(){
        try {
          const response=await axios.post('http://localhost:8000/api/owners',this.newOwner,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json'
            }
          });
          if(response.status===201){
            this.newOwner={
              first_name:'',
              last_name:'',
              phone:'',
              email:'',
              user_id:''
            };
            alert('Profil spremljen');
          }else{
            alert('Greška prilikom dodavanja,provjerite podatke');
          }
        } catch (error) {
          console.log('Greška',error);
          alert('Greška na serveru');
        }
      }
    },
    mounted(){
      this.getUsers();
    }
  }
</script>