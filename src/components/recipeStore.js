import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [], // Store favorite recipe IDs
  recommendations: [], // Store recommended recipes
  searchTerm: '',
  filteredRecipes: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...new Set([...state.favorites, recipeId])] // Prevent duplicates
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate recommendations based on favorite recipes
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.3 // 70% chance to recommend
    );
    return { recommendations: recommended };
  }),

  // Existing actions for adding, deleting, and updating recipes
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  deleteRecipe: (recipeId) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      favorites: state.favorites.filter(id => id !== recipeId), // Remove from favorites
    };
  }),

  updateRecipe: (recipeId, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  setSearchTerm: (term) => set((state) => {
    const updatedState = { searchTerm: term };
    updatedState.filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return updatedState;
  }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }))
}));
"setRecipes"
export default useRecipeStore;

