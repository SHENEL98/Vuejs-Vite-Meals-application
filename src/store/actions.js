import axiosClient from '../axiosClient';

export function searchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        // debugger;
        commit('setSearchMeals', data.meals)
    })
}
export function searchMealsByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{ 
        commit('setSearchByLetter', data.meals)
    })
}