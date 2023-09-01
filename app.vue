<template>
  <NuxtLayout>
    <header>
      <ul class="flex flex-col gap-4 ">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/events">Event</NuxtLink></li>
      </ul>
    </header>
    <NuxtPage />
  </NuxtLayout>
</template>
