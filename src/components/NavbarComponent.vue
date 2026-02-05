<template>
    <nav class="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50" :class="{'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4': isScrolled,'py-4 md:py-6': !isScrolled}">
        <RouterLink to="/">
            <img src="../assets/logo.svg" alt="logo" class="h-14 md:h-18 lg:h-20" :class="{ 'invert opacity-80': isScrolled }">
        </RouterLink>
        <div class="hidden md:flex items-center gap-4 lg:gap-8">
            <a v-for="link in links" :key="link" :to="link.path" class="group flex flex-col gap-0.5" :class="isScrolled ? 'text-gray-700' : 'text-white'">
                {{ link.name }}
                <div class="h-0.5 w-0 group-hover:w-full transition-all duration-300" :class="isScrolled ? 'bg-gray-700' : 'bg-white'"></div>
            </a>
        </div>

        <div class="hidden md:flex items-center gap-4">
            <template v-if="!isLoggedIn">
                <a href="/login" class="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">Prijava</a>
                <a href="/register" class="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">Registracija</a>
            </template>

            <template v-else>
                <button @click="logout" class="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">
                    Odjava
                </button>
            </template>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter() 
const isScrolled = ref(false)
const isLoggedIn = ref(false)

const links = [
    { name: 'Početna', path: '/' }
]

onMounted(() => {
    isLoggedIn.value = !!localStorage.getItem('token')
})

const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    isLoggedIn.value = false
    router.push('/')
}
</script>