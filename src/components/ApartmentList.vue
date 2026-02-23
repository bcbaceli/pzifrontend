<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900 dark:text-white">Apartmani</h1>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow-sm outline-1 outline-black/5 sm:rounded-lg dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <table class="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
              <thead class="bg-gray-50 dark:bg-gray-800/75">
                <tr>
                  <th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 dark:text-gray-200">Naziv</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Ulica</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Grad</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Površina</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Dodaci</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Broj gostiju</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Cijena</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white dark:divide-white/10 dark:bg-gray-800/50">
                <tr v-for="apartment in apartments" :key="apartment.id">
                  <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 dark:text-white">{{ apartment.name }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">{{ apartment.address.street }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">{{ apartment.address.town }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">{{ apartment.square }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">{{ apartment.amenities }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">{{ apartment.number_of_guests }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">{{ apartment.price }}</td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                    <div class="flex items-center">
                      <img @click="deleteApartment(apartment.id)" src="../assets/delete.svg" alt="" class="h-4 cursor-pointer">
                    </div>
                  </td>

                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    name:'ApartmentList',
    data(){
      return{
        apartments:[]
      }
    },
    methods:{
      async getApartments(){
        try {
          const response=await axios.get('/backend/api/apartments',{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json'
            }
          });
          this.apartments=response.data;
        } catch (error) {
          console.log('Greška',error);
          alert('Greška na serveru');
        }
      },
      async deleteApartment(id){
        try {
          await axios.delete(`/backend/api/apartments/${id}`,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json'
            }
          });
          this.getApartments();
        } catch (error) {
          console.log('Greška',error);
          alert('Greška na serveru');
        }
      }
    },
    mounted(){
      this.getApartments();
    }
  }
</script>