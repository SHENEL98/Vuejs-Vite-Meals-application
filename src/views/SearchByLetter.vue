<template>
    <div class="flex flex-col p-8 ">
        <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="{ letter }">
                {{ letter }}
            </router-link>
        </div>
    </div>
    <!-- <pre>{{ meals }}</pre> -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealList v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>


<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealList from "../components/MealList.vue";

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.searchByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
}) 
</script>