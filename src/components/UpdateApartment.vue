<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="updateApartment" class="space-y-6">
                <label for="apartment" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Apartman</label>
                <div class="mt-2 grid grid-cols-1">
                <select id="apartment" v-model="apartment.id"  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
                    <option disabled selected>Odaberite Apartman</option>
                    <option v-for="apartment in apartments" :key="apartment.id" :value="apartment.id">{{ apartment.name }}</option>
                </select>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="name" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Naziv</label>
                    </div>
                    <div class="mt-2">
                        <input type="text" id="name" v-model="apartment.name"  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="price" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Cijena</label>
                    </div>
                    <div class="mt-2">
                        <input type="number" id="price" v-model="apartment.price"  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
                    </div>
                </div>
                <div>
                    <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Ažuriraj apartman</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'; 
    export default{
        name:'UpdateApartment',
        data(){
            return{
                apartments:[],
                apartment:{
                    id:'',
                    name:'',
                    price:'',
                }
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
            async updateApartment(){
                try {
                const response=await axios.put(`/backend/api/apartments/${this.apartment.id}`,{
                 
                        name:this.apartment.name,
                        price:this.apartment.price
                },{
                  headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Accept': 'application/json'
                    }   
                });
                if (response.status===200){
                 alert('Apartman ažuriran');   
                }  
                } catch (error) {
                console.log('Greška',error);
                alert('Greška na serveru');   
                }
            }
        },
        mounted() {
            this.getApartments();
        },

    }
</script>