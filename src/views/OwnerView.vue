<template>
  <div>
    
    <div class="hidden bg-gray-900 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 dark:border-white/10 dark:bg-black/10">
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <RouterLink :to="item.href" @click.prevent="item.onLogout ? onLogout() : null" :class="[item.current ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
       <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const navigation = [
  { name: 'Rezervacije', href: '/owner/reservations'},
  { name: 'Gosti', href: '/owner/guests'},
  { name: 'Apartmani', href: '/owner/apartments'},
  { name: 'Dodaj Apartman', href: '/owner/add-apartment'},
  {name: 'Ažuriraj apartman', href: '/owner/update-apartment'},
  { name: 'Profil', href:'/owner/profile'},
  { name: 'Odjava', href:'/',onLogout:true}
]

const sidebarOpen = ref(false)

function onLogout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.assign('/')
}
</script>