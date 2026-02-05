<template>
    <NavbarComponent/>
    <HeaderComponent/>
    <ApartmentsComponent/>
    <ReservationComponent/>
    <FooterComponent/>
</template>
<script>
    import NavbarComponent from '../components/NavbarComponent.vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import ApartmentsComponent from '../components/ApartmentsComponent.vue';
    import ReservationComponent from '../components/ReservationComponent.vue';

    export default{
        name:'HomeView',
        components:{
            NavbarComponent,
            HeaderComponent,
            FooterComponent,
            ApartmentsComponent,
            ReservationComponent
        }
    }
</script>