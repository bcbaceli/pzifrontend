<template>
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/pozadina.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>Vrhunski doživljaj za opuštanje</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Otkrijte Vašu savršenu destinaciju za ljetovanje</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base'>Doživite svoj vlastiti mir u našim apartmanima. Započnite svoj odmor danas</p>

        <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
            <div>
                <div className='flex items-center gap-2'>
                    <img src="../assets/calenderIcon.svg" alt="" className='h-4'>
                    <label>Apartman</label>
                </div>
                <input type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Pronađite apartman" required>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <img src="../assets//calenderIcon.svg" alt="" className='h-4' />
                    <label>Prijava</label>
                </div>
                <input type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none">
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src="../assets//calenderIcon.svg" alt="" className='h-4' />
                    <label>Odjava</label>
                </div>
                <input type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none">
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label>Broj gostiju</label>
                <input type="number" min="1" max="4" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0">
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
                <img src="../assets/searchIcon.svg" alt="searchIcon" className='h-7'>
                <span>Pretražite dostupnu sobu</span>
            </button>
        </form>
    </div>
</template>