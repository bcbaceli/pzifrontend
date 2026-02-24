<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="addApartment" class="space-y-6">
        <div class="mb-6">
          <label class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
            Slika Apartmana
          </label>
          <div class="flex flex-col items-center gap-4">
            
            <img
              :src="newApartment.image"
              class="w-1/2 rounded-xl shadow-md object-cover"
            />

            
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="hidden"
              ref="fileInput"
            />
            <button
              type="button"
              @click="$refs.fileInput.click()"
              class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Odaberi Sliku
            </button>
          </div>
        </div>

        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Naziv</label>
          <div class="mt-2">
            <input type="text" id="name" v-model="newApartment.name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <label for="address_id" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Adresa</label>
        <div class="mt-2 grid grid-cols-1">
          <select id="address_id" v-model="newApartment.address_id" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
            <option disabled selected>Odaberite Adresu Apartmana</option>
            <option v-for="address in addresses" :key="address.id" :value="address.id">{{ address.street }} {{ address.town }}</option>
          </select>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="square" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Površina</label>
          </div>
          <div class="mt-2">
            <input type="number" id="square" v-model="newApartment.square" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="amenities" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Dodaci</label>
          </div>
          <div class="mt-2">
            <input type="text" id="amenities" v-model="newApartment.amenities" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="number_of_guests" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Broj Gostiju</label>
          </div>
          <div class="mt-2">
            <input type="number" id="number_of_guests" v-model="newApartment.number_of_guests" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="price" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Cijena</label>
          </div>
          <div class="mt-2">
            <input type="number" id="price" v-model="newApartment.price" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          </div>
        </div>

        <label for="owner_id" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Vlasnik</label>
        <div class="mt-2 grid grid-cols-1">
          <select id="owner_id" v-model="newApartment.owner_id" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
            <option disabled selected>Odaberite Vlasnika</option>
            <option v-for="owner in owners" :key="owner.id" :value="owner.id">{{ owner.first_name }} {{ owner.last_name }}</option>
          </select>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Dodaj Apartman</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    name:'AddApartment',
    data(){
      return{
        addresses:[],
        owners:[],
        newApartment:{
          image:'',
          name:'',
          address_id:'',
          square:'',
          amenities:'',
          number_of_guests:'',
          price:'',
          owner_id:''
        }
      }
    },
    methods:{
      async getAddresses(){
        try {
          const response=await axios.get('/backend/api/addresses',{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json'
            }
          });
          this.addresses=response.data;
        } catch (error) {
          console.log('Greška',error);
          
        }
      },
      async getOwners(){
        try {
          const response=await axios.get('/backend/api/owners',{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json'
            }
          });
          this.owners=response.data;
        } catch (error) {
          console.log('Greška',error);
          
        }
      },
      async addApartment() {
        try {
          const formData = new FormData();
          formData.append('image',this.newApartment.image)
          formData.append('name', this.newApartment.name);
          formData.append('address_id', this.newApartment.address_id);
          formData.append('square', this.newApartment.square);
          formData.append('amenities', this.newApartment.amenities);
          formData.append('number_of_guests', this.newApartment.number_of_guests);
          formData.append('price', this.newApartment.price);
          formData.append('owner_id', this.newApartment.owner_id);

          const response = await axios.post('/backend/api/apartments', formData, {
            headers: { 'Content-Type': 'multipart/form-data',Authorization: `Bearer ${localStorage.getItem('token')}`,'Accept': 'application/json' }
          });

          if(response.status === 201){
            this.newApartment = { image:'', name:'', address_id:'', square:'', amenities:'', number_of_guests:'', price:'', owner_id:'' };
            alert('Apartman dodan');
          } else {
            alert('Greška prilikom dodavanja, provjerite podatke');
          }

        } catch (error) {
          console.log('Greška', error);
          
        }
      },

      handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.newApartment.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
    },
    mounted(){
      this.getAddresses();
      this.getOwners();
    }
  }
</script>