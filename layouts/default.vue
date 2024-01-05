<template>
    <nav class="w-fullmx-auto">
        <div class="w-full bg-black text-start py-4 px-2 font-semibold text-xl text-white font-mono">
            <NuxtLink to="/">The Book Of Terminology</NuxtLink>
        </div>
        <div class="w-full text-center text-white bg-black/50">
            This website is under construction
        </div>
    </nav>
    <main id="main">
        <slot />
    </main>
    <footer class="bg-black text-white font-mono text-center">
        <p>
            Developed with 💜 by <a class="underline" href="https://raubertech.com" target="_blank">Luis Juvinel</a>
        </p>
    </footer>
</template>