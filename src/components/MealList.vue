<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="strMeal">
        </router-link>
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <div class="p-3 flex items justify-between">
            <YoutubeButton :href="meal.strYoutube" />
        </div>
    </div>
</template>
<script setup>
import YoutubeButton from './Youtube.vue';

const {meal} = defineProps({
    meal:Object
})

</script>