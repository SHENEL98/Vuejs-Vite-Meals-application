<template>
    <div class="p-8 pd-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
            @keyup="searchMeals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link :to="{name:'mealDetails', params:{id:meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="strMeal">
            </router-link>
            <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
            <div class="p-3 flex items justify-between">
                <YoutubeButton :href="meal.strYoutube" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from "vue-router";
import YoutubeButton from '../components/Youtube.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

// onMounted(() =>{
//     keyword.value = route.params.name
//     if(keyword.value){
//         searchMeals()
//     }
// })
</script>