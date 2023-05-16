export  function setSearchMeals(state, meals){
    state.searchedMeals = meals
}

export  function setSearchByLetter(state, meals){
    state.searchByLetter = meals || []
}