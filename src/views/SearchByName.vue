<template>
    <div class="p-8 pd-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
            @keyup="searchMeals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealList v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from "vue-router";
import MealList from '../components/MealList.vue';

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