<template>
    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px] bg-white">
            <form @submit.prevent="addReservation">
                <div class="mb-5">
                    <label for="first_name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Ime
                    </label>
                    <input type="text" placeholder="Ime" id="first_name" v-model="newGuest.first_name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-5">
                    <label for="last_name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Prezime
                    </label>
                    <input type="text"  placeholder="Prezime" id="last_name" v-model="newGuest.last_name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-5">
                    <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                        Broj telefona
                    </label>
                    <input type="text" max="20" placeholder="Unesite broj telefona" id="phone" v-model="newGuest.phone"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>

                <label for="user_id" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Odaberite vaš email</label>
                <div class="mt-2 grid grid-cols-1 mb-2">
                <select id="user_id" v-model="newGuest.user_id" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
                    <option disabled selected>Odaberite vaš email</option>
                    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.email }}</option>
                </select>
                </div>
                
                <label for="apartment_id" class="block text-sm/6 font-medium text-gray-900 dark:text-white">Odaberite apartman</label>
                <div class="mt-2 grid grid-cols-1 mb-2">
                <select id="apartment_id" v-model="newReservation.apartment_id" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus-visible:outline-indigo-500">
                    <option disabled selected>Odaberite Apartman</option>
                    <option v-for="apartment in apartments" :key="apartment.id" :value="apartment.id">{{ apartment.name }}</option>
                </select>
                </div>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <label for="start_date" class="mb-3 block text-base font-medium text-[#07074D]">
                                Prijava
                            </label>
                            <input type="date" id="start_date" v-model="newReservation.start_date"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>

                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <label for="end_date" class="mb-3 block text-base font-medium text-[#07074D]">
                                Odjava
                            </label>
                            <input type="date" id="end_date" v-model="newReservation.end_date"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>

                <div class="mb-5">
                    <label for="number_of_guests" class="mb-3 block text-base font-medium text-[#07074D]">
                        Broj gostiju
                    </label>
                    <input type="number" placeholder="Broj gostiju" max="6" id="number_of_guests" v-model="newReservation.number_of_guests"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>

                 <div class="mb-5">
                    <label for="total_price" class="mb-3 block text-base font-medium text-[#07074D]">
                        Ukupna cijena u €
                    </label>
                    <input type="number" placeholder="Ukupna cijena" disabled id="total_price" v-model="newReservation.total_price"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>

                <div class="mb-5">
                    <label for="priceIBAM" class="mb-3 block text-base font-medium text-[#07074D]">
                        Ukupna cijena u BAM
                    </label>
                    <input type="number" placeholder="Ukupna cijena" disabled id="priceIBAM" v-model="priceIBAM"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>

                <div class="mb-5 pt-3">
                    <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                        Adresa
                    </label>
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <input type="text" placeholder="Ulica" id="street" v-model="newAddress.street"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <input type="text" placeholder="Grad" id="town" v-model="newAddress.town"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <input type="text" placeholder="Poštanski broj" id="postal_code" v-model="newAddress.postal_code"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <input type="text" placeholder="Država" id="country" v-model="newAddress.country"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Rezerviraj
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name:'ReservationComponent',
        data(){
            return{
                users:[],
                apartments:[],
                newAddress:{
                    street:'',
                    town:'',
                    postal_code:'',
                    country:''
                },
                newGuest:{
                    first_name:'',
                    last_name:'',
                    phone:'',
                    user_id:'',
                    address_id:''
                },
                newReservation:{
                    guest_id:'',
                    apartment_id:'',
                    number_of_guests:'',
                    start_date:'',
                    end_date:'',
                    total_price:''
                },
                priceIBAM: ''

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
                    this.users=response.data
                } catch (error) {
                    console.log('Greška',error);
                    alert('Greška na serveru');
                }
            },
            async getAparmtents(){
                try {
                    const response=await axios.get('http://localhost:8000/api/apartments',{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                            'Accept': 'application/json'
                        }
                    });
                    this.apartments=response.data
                } catch (error) {
                    console.log('Greška',error);
                    alert('Greška na serveru');
                }
            },
            async addReservation() {
                try {
                    const addressRes = await axios.post('http://localhost:8000/api/addresses', this.newAddress,{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                            'Accept': 'application/json'
                        }
                    });
                    if (addressRes.status === 201) {
                    this.newGuest.address_id = addressRes.data.id;

                    const guestRes = await axios.post('http://localhost:8000/api/guests', this.newGuest,{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                            'Accept': 'application/json'
                        }
                    });
                    if (guestRes.status === 201) {
                        this.newReservation.guest_id = guestRes.data.id;

                        const reservationRes = await axios.post('http://localhost:8000/api/reservations', this.newReservation,{
                            headers:{
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                                'Accept': 'application/json'
                            }
                        });
                        if (reservationRes.status === 201) {

                        this.newAddress = { street:'', town:'', postal_code:'', country:'' };
                        this.newGuest = { first_name:'', last_name:'', phone:'', user_id:'', address_id:'' };
                        this.newReservation = { guest_id:'', apartment_id:'', number_of_guests:'', start_date:'', end_date:'', total_price:'' };

                        alert('Rezervirano');
                        } else {
                        alert('Rezervacija nije spremljena');
                        }
                    } else {
                        alert('Gost nije spremljen');
                    }
                    } else {
                    alert('Adresa nije spremljena');
                    }
                } catch (error) {
                    console.error(error);
                    alert('Greška na serveru');
                }
            }

        },
        computed:{
            calculateTotalPrice(){
                if(!this.newReservation.apartment_id || !this.newReservation.start_date || !this.newReservation.end_date){
                    return 0;
                }

                const apartment=this.apartments.find(a => a.id === this.newReservation.apartment_id);

                if (!apartment) return 0;

                const start = new Date(this.newReservation.start_date);
                const end = new Date(this.newReservation.end_date);

                const diffTime = end - start;
                const days = diffTime / (1000 * 60 * 60 * 24)

                if (days <= 0) return 0;

                return (days * apartment.price).toFixed(2);



            }
        },
        mounted(){
            this.getUsers();
            this.getAparmtents();
        },
        watch:{
            calculateTotalPrice(value){
                this.newReservation.total_price=value;
                this.priceIBAM=(value*1.96).toFixed(2);
            }
        }
    }
</script>