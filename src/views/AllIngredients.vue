<template>
    <div class="p-8">
        <h3 class="text-2xl font-bold mb-4">Ingredients</h3>
        <!-- <router-link v-for="ingredient of ingredients" :key="ingredient.id" class="block bg-white rounded p-3 mb-3 shadow"
            :to="{
                name: 'byIngredient',
                params: { ingredient: ingredient.strIngredient },
            }">
            <h3 class="text-2x1 font-bold">
                {{ ingredient.strIngredient }}
            </h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link> -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <router-link v-for="ingredient of ingredients" :key="ingredient.id" 
                  class="block bg-white rounded p-3 mb-3 shadow"   :to="{
                name: 'byIngredient',
                params: { ingredient: ingredient.strIngredient },
            }">
                <h2 class="text-1xl font-bold mb-2">{{ ingredient.strIngredient }}</h2>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})
</script>