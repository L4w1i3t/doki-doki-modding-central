
// do not forget about this
<script setup>
const route = useRoute();
const nuxt = useNuxtApp()

console.log(route.params.id);
console.log(nuxt)
</script>

<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>