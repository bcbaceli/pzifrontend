<template>
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
            <div className='max-w-80'>
                <img src="../assets/logo.svg" alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80'>
                <p className='text-sm'>Doživite najljepši odmor u apartmanima Relax</p>
                <div className='flex items-center gap-3 mt-4'>
                    <img src="../assets/instagramIcon.svg" alt="instagram-icon" className='w-6'>
                    <img src="../assets/facebookIcon.svg" alt="facebook-icon" className='w-6'>
                    <img src="../assets/twitterIcon.svg" alt="twitter-icon" className='w-6'>
                    <img src="../assets/linkendinIcon.svg" alt="linkendin-icon" className='w-6'>
                </div>
            </div>

            <div>
                <p className='font-playfair text-lg text-gray-800'>Informacije</p>
                <ul className='mt-3 flex flex-col gap-2 text-sm'>
                    <li><a href="#">O nama</a></li>
                    <li><a href="#">Lokacija</a></li>
                </ul>
            </div>

            <div className='max-w-80'>
                <p className='font-playfair text-lg text-gray-800'>Ponude smještaja</p>
                <p className='mt-3 text-sm'>Pošaljite email za informacije</p>
                    <div className='flex items-center mt-4'>
                    <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                    <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                        <img src="../assets/arrowIcon.svg" alt="arrow-icon" className='w-3.5 invert' />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>