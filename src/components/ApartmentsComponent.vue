<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10">
        <div v-for="apartment in apartments" :key="apartment.id" className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
            <img :src="apartment.image" alt="" className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
                <p className='font-playfair text-xl font-medium text-gray-800'>{{apartment.name}}</p>
            </div>
            <div className='flex items-center gap-1 text-sm'>
                <span>{{apartment.rooms.type}}</span>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p><span span className='text-xl text-gray-800'>{{ apartment.price }} €</span></p>
                <p><span span className='text-xl text-gray-800'>{{ (apartment.price * 1.95583).toFixed(2) }} KM</span></p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name:'ApartmentsComponent',
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
            }
        },
        mounted(){
            this.getApartments();
        }
    }
</script>