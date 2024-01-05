<template>
    <nav class="w-fullmx-auto">
        <div class="w-full bg-black text-start py-4 px-2 font-semibold text-xl text-white font-mono">
            <NuxtLink to="/">📕 The Book Of Terminology</NuxtLink>
        </div>
        <div class="w-full text-center text-white bg-black/50">
            🚧 This website is under construction 🚧
        </div>
    </nav>
    <main id="main">
        <slot />
    </main>
    <footer class="bg-black text-white font-mono text-center py-4 mt-4">
        <p class="mb-4 font-semibold">
            Developed with 💜 by <a class="underline hover:text-white/50 transition duration-150 ease-in-out" href="https://raubertech.com" rel="external" target="_blank">Luis Juvinel</a>
            
        </p>
        <a class="mx-2 px-2 bg-yellow-500 rounded-lg py-2 shadow-md hover:bg-yellow-500/50 transition duration-150 ease-in-out text-black font-semibold" href="https://www.buymeacoffee.com/luisjuvinel" target="_blank" rel="noopener noreferrer" >☕ Buy me a Coffee</a>
    </footer>
</template>