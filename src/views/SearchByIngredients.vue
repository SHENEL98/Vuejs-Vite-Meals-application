<template>
    <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal">
                </router-link>
                <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
            </div>
        </div> 
        <div v-if="!meals.length" class="flex justify-center text-gray-600">
            There are no meals
        </div> 
        <!-- <pre>{{ meals }}</pre> -->
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.searchByIngredient)


onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient);
})
</script>