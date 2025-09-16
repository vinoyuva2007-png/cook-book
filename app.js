// FoodieHub Recipe Website JavaScript

// Global state
const FoodieHub = {
    recipes: [],
    savedRecipes: [],
    currentSuggestionIndex: 0,
    suggestions: [],
    busyRecipes: [],
    filteredRecipes: []
};

// Sample recipe data
const sampleRecipes = [
    {
        id: 1,
        title: "Unbelievable Chicken Parmesan",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        cookTime: "45 mins",
        rating: 4.8,
        reviews: 2351,
        difficulty: "Medium",
        servings: 4,
        calories: 520,
        description: "Crispy breaded chicken breast topped with marinara sauce and melted mozzarella cheese.",
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "1 cup all-purpose flour",
            "2 large eggs, beaten",
            "2 cups Italian seasoned breadcrumbs",
            "1/2 cup grated Parmesan cheese",
            "2 cups marinara sauce",
            "2 cups shredded mozzarella cheese",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Season chicken breasts with salt and pepper.",
            "Set up breading station with flour, beaten eggs, and breadcrumb mixture.",
            "Coat each chicken breast in flour, then egg, then breadcrumbs.",
            "Heat olive oil in large oven-safe skillet over medium-high heat.",
            "Cook chicken 3-4 minutes per side until golden brown.",
            "Top with marinara sauce and mozzarella cheese.",
            "Bake 15-20 minutes until chicken reaches 165°F internal temperature.",
            "Let rest 5 minutes before serving."
        ]
    },
    {
        id: 2,
        title: "Apple Cider Hawaiian Rolls",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        cookTime: "30 mins",
        rating: 4.6,
        reviews: 1287,
        difficulty: "Easy",
        servings: 12,
        calories: 180,
        description: "Sweet and fluffy Hawaiian rolls infused with apple cider flavor.",
        ingredients: [
            "3 cups all-purpose flour",
            "1 packet active dry yeast",
            "1/4 cup warm apple cider",
            "1/4 cup sugar",
            "1/4 cup melted butter",
            "1 large egg",
            "1 teaspoon salt",
            "1/2 teaspoon cinnamon"
        ],
        instructions: [
            "Dissolve yeast in warm apple cider with 1 tablespoon sugar.",
            "Mix flour, remaining sugar, salt, and cinnamon in large bowl.",
            "Add yeast mixture, melted butter, and egg to dry ingredients.",
            "Knead dough 8-10 minutes until smooth and elastic.",
            "Place in greased bowl, cover, and let rise 1 hour.",
            "Shape into 12 rolls and place in greased baking dish.",
            "Let rise 30 minutes more.",
            "Bake at 375°F for 15-20 minutes until golden brown."
        ]
    },
    {
        id: 3,
        title: "Best Taco Casserole",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1565299585323-38174c58d2ed?w=400&h=300&fit=crop",
        cookTime: "35 mins",
        rating: 4.9,
        reviews: 3846,
        difficulty: "Easy",
        servings: 8,
        calories: 420,
        description: "Layers of seasoned ground beef, cheese, and tortilla chips baked to perfection.",
        ingredients: [
            "1 lb ground beef",
            "1 packet taco seasoning",
            "1 can black beans, drained",
            "1 can corn, drained",
            "2 cups shredded Mexican cheese",
            "1 bag tortilla chips, crushed",
            "1 cup sour cream",
            "1/2 cup salsa",
            "2 green onions, chopped"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Brown ground beef and drain fat.",
            "Add taco seasoning, black beans, and corn to beef.",
            "Layer half the crushed chips in greased 9x13 baking dish.",
            "Top with beef mixture and half the cheese.",
            "Add remaining chips and cheese.",
            "Bake 20-25 minutes until cheese melts.",
            "Top with sour cream, salsa, and green onions before serving."
        ]
    },
    {
        id: 4,
        title: "Fresh Tomato Pie",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        cookTime: "60 mins",
        rating: 4.7,
        reviews: 892,
        difficulty: "Medium",
        servings: 6,
        calories: 350,
        description: "A savory pie loaded with fresh tomatoes, herbs, and cheese in a flaky crust.",
        ingredients: [
            "1 pre-baked pie crust",
            "4 large tomatoes, sliced",
            "1/2 cup mayonnaise",
            "1/2 cup grated Parmesan cheese",
            "1/4 cup fresh basil, chopped",
            "2 tablespoons fresh oregano",
            "1/4 teaspoon salt",
            "1/4 teaspoon black pepper"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Slice tomatoes and lay on paper towels.",
            "Sprinkle tomatoes with salt and let drain 30 minutes.",
            "Mix mayonnaise, Parmesan, basil, and oregano.",
            "Layer tomatoes in pre-baked crust.",
            "Spread mayonnaise mixture over tomatoes.",
            "Bake 30-35 minutes until top is golden brown.",
            "Cool 15 minutes before serving."
        ]
    },
    {
        id: 5,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
        cookTime: "25 mins",
        rating: 4.9,
        reviews: 5432,
        difficulty: "Easy",
        servings: 24,
        calories: 150,
        description: "Classic chocolate chip cookies that are crispy on the outside and chewy inside.",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour and baking soda in bowl.",
            "Cream butter and both sugars until fluffy.",
            "Beat in eggs and vanilla.",
            "Gradually mix in flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons onto ungreased baking sheets.",
            "Bake 9-11 minutes until golden brown."
        ]
    },
    {
        id: 6,
        title: "Healthy Quinoa Bowl",
        category: "healthy",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cookTime: "20 mins",
        rating: 4.5,
        reviews: 678,
        difficulty: "Easy",
        servings: 2,
        calories: 380,
        description: "Nutritious quinoa bowl loaded with fresh vegetables and a tangy dressing.",
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth",
            "1 avocado, sliced",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/4 red onion, thinly sliced",
            "2 tablespoons olive oil",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Rinse quinoa under cold water.",
            "Bring vegetable broth to boil, add quinoa.",
            "Reduce heat, cover, and simmer 15 minutes.",
            "Let quinoa cool completely.",
            "Prepare vegetables while quinoa cools.",
            "Whisk olive oil, lemon juice, salt, and pepper.",
            "Combine quinoa with vegetables.",
            "Drizzle with dressing and serve."
        ]
    },
    {
        id: 7,
        title: "Pancakes Perfect Stack",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        cookTime: "15 mins",
        rating: 4.8,
        reviews: 2134,
        difficulty: "Easy",
        servings: 4,
        calories: 320,
        description: "Fluffy, golden pancakes that are perfect for weekend breakfast.",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "3 1/2 teaspoons baking powder",
            "1 teaspoon salt",
            "1 tablespoon sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tablespoons melted butter",
            "Butter for cooking"
        ],
        instructions: [
            "Mix flour, baking powder, salt, and sugar in large bowl.",
            "Whisk milk, egg, and melted butter in separate bowl.",
            "Pour wet ingredients into dry ingredients.",
            "Stir just until combined - don't overmix.",
            "Heat griddle or large skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form, then flip.",
            "Cook until golden brown on both sides."
        ]
    },
    {
        id: 8,
        title: "15-Minute Stir Fry",
        category: "quick",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        cookTime: "15 mins",
        rating: 4.6,
        reviews: 1543,
        difficulty: "Easy",
        servings: 3,
        calories: 280,
        description: "Quick and healthy stir fry with fresh vegetables and savory sauce.",
        ingredients: [
            "2 tablespoons vegetable oil",
            "1 bell pepper, sliced",
            "1 cup broccoli florets",
            "1 carrot, julienned",
            "2 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "1 tablespoon honey",
            "1 teaspoon sesame oil",
            "2 green onions, chopped"
        ],
        instructions: [
            "Heat oil in large skillet or wok over high heat.",
            "Add bell pepper and broccoli, stir-fry 3 minutes.",
            "Add carrot and garlic, stir-fry 2 minutes more.",
            "Mix soy sauce, honey, and sesame oil.",
            "Pour sauce over vegetables.",
            "Stir-fry 1-2 minutes until vegetables are crisp-tender.",
            "Garnish with green onions.",
            "Serve immediately over rice or noodles."
        ]
    }
];

// Busy recipe suggestions (quick meals)
const busyRecipeData = [
    {
        id: 101,
        title: "5-Minute Avocado Toast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
        cookTime: "5 mins",
        rating: 4.7,
        reviews: 892
    },
    {
        id: 102,
        title: "One-Pot Pasta Primavera",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        cookTime: "20 mins",
        rating: 4.8,
        reviews: 1456
    },
    {
        id: 103,
        title: "Quick Greek Salad",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        cookTime: "10 mins",
        rating: 4.6,
        reviews: 723
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeFoodieHub();
});

function initializeFoodieHub() {
    console.log('🍳 FoodieHub Initializing...');
    
    // Load data
    FoodieHub.recipes = sampleRecipes;
    FoodieHub.busyRecipes = busyRecipeData;
    FoodieHub.suggestions = sampleRecipes.slice(0, 4);
    FoodieHub.filteredRecipes = sampleRecipes;
    
    // Load saved recipes from localStorage
    loadSavedRecipes();
    
    // Initialize components
    setupEventListeners();
    renderSuggestions();
    renderBusyRecipes();
    setupCategoryFilters();
    
    console.log('✅ FoodieHub Initialized');
}

// Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchRecipes();
            }
        });
    }
    
    // Category navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Modal close events
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('recipeModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
        FoodieHub.filteredRecipes = FoodieHub.recipes;
    } else {
        FoodieHub.filteredRecipes = FoodieHub.recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(query) ||
            recipe.category.toLowerCase().includes(query) ||
            recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(query)
            )
        );
    }
    
    updateSearchResults();
}

function searchRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (query === '') {
        alert('Please enter a search term');
        return;
    }
    
    handleSearch({ target: { value: query } });
    
    // Show search results
    if (FoodieHub.filteredRecipes.length === 0) {
        alert(No recipes found for "${query}");
    } else {
        // Scroll to suggestions section and update with search results
        document.querySelector('.suggestions-section').scrollIntoView({ behavior: 'smooth' });
        FoodieHub.suggestions = FoodieHub.filteredRecipes.slice(0, 8);
        renderSuggestions();
        
        // Update section header
        const sectionHeader = document.querySelector('.suggestions-section .section-header h2');
        sectionHeader.textContent = Search Results for "${query}";
    }
}

function updateSearchResults() {
    // Update suggestions with filtered results
    FoodieHub.suggestions = FoodieHub.filteredRecipes.slice(0, 8);
    renderSuggestions();
    
    // Update section header
    const sectionHeader = document.querySelector('.suggestions-section .section-header h2');
    const query = document.getElementById('searchInput').value;
    
    if (query.trim() === '') {
        sectionHeader.textContent = 'Start Saving These Dishes';
    } else {
        sectionHeader.textContent = Search Results for "${query}";
    }
}

// Category filtering
function filterByCategory(category) {
    if (category === 'all') {
        FoodieHub.filteredRecipes = FoodieHub.recipes;
        FoodieHub.suggestions = FoodieHub.recipes.slice(0, 8);
    } else {
        FoodieHub.filteredRecipes = FoodieHub.recipes.filter(recipe => 
            recipe.category === category
        );
        FoodieHub.suggestions = FoodieHub.filteredRecipes.slice(0, 8);
    }
    
    renderSuggestions();
    
    // Update section header
    const sectionHeader = document.querySelector('.suggestions-section .section-header h2');
    if (category === 'all') {
        sectionHeader.textContent = 'Start Saving These Dishes';
    } else {
        sectionHeader.textContent = ${category.charAt(0).toUpperCase() + category.slice(1)} Recipes;
    }
    
    // Clear search input
    document.getElementById('searchInput').value = '';
}

function setupCategoryFilters() {
    // This is handled in setupEventListeners()
}

// Render functions
function renderSuggestions() {
    const carousel = document.getElementById('suggestionsCarousel');
    if (!carousel) return;
    
    carousel.innerHTML = FoodieHub.suggestions.map(recipe => `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" />
            <div class="recipe-info">
                <span class="recipe-category">${getCategoryLabel(recipe.category)}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.cookTime}</span>
                    <span class="rating">
                        <span class="stars">${generateStars(recipe.rating)}</span>
                        <span>(${recipe.reviews.toLocaleString()})</span>
                    </span>
                </div>
                <div class="recipe-actions">
                    <button class="save-btn ${isSaved(recipe.id) ? 'saved' : ''}" 
                            onclick="toggleSaveRecipe(${recipe.id})">
                        <i class="fas fa-heart"></i> ${isSaved(recipe.id) ? 'Saved' : 'Save Recipe'}
                    </button>
                    <button class="view-btn" onclick="viewRecipe(${recipe.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBusyRecipes() {
    const busyGrid = document.getElementById('busyRecipesGrid');
    if (!busyGrid) return;
    
    busyGrid.innerHTML = FoodieHub.busyRecipes.map(recipe => `
        <div class="busy-recipe-card" data-recipe-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" />
            <button class="heart-btn ${isSaved(recipe.id) ? 'liked' : ''}" 
                    onclick="toggleSaveRecipe(${recipe.id})">
                <i class="fas fa-heart"></i>
            </button>
            <div class="busy-recipe-info">
                <h3>${recipe.title}</h3>
                <div class="busy-recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.cookTime}</span>
                    <span class="rating">
                        <span class="stars">${generateStars(recipe.rating)}</span>
                        <span>(${recipe.reviews.toLocaleString()})</span>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSavedRecipes() {
    const savedGrid = document.getElementById('savedRecipesGrid');
    if (!savedGrid) return;
    
    const savedRecipeData = FoodieHub.recipes.filter(recipe => 
        FoodieHub.savedRecipes.includes(recipe.id)
    );
    
    if (savedRecipeData.length === 0) {
        savedGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-heart" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-light); margin-bottom: 0.5rem;">No saved recipes yet</h3>
                <p style="color: var(--text-light);">Start saving your favorite recipes to keep them here!</p>
            </div>
        `;
        return;
    }
    
    savedGrid.innerHTML = savedRecipeData.map(recipe => `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" />
            <div class="recipe-info">
                <span class="recipe-category">${getCategoryLabel(recipe.category)}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.cookTime}</span>
                    <span class="rating">
                        <span class="stars">${generateStars(recipe.rating)}</span>
                        <span>(${recipe.reviews.toLocaleString()})</span>
                    </span>
                </div>
                <div class="recipe-actions">
                    <button class="save-btn saved" onclick="toggleSaveRecipe(${recipe.id})">
                        <i class="fas fa-heart"></i> Saved
                    </button>
                    <button class="view-btn" onclick="viewRecipe(${recipe.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Utility functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function getCategoryLabel(category) {
    const labels = {
        'breakfast': 'Breakfast',
        'lunch': 'Lunch',
        'dinner': 'Dinner',
        'dessert': 'Dessert',
        'quick': 'Quick Meal',
        'healthy': 'Healthy'
    };
    return labels[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Recipe management
function toggleSaveRecipe(recipeId) {
    const index = FoodieHub.savedRecipes.indexOf(recipeId);
    
    if (index > -1) {
        // Remove from saved
        FoodieHub.savedRecipes.splice(index, 1);
        showToast('Recipe removed from saved recipes', 'info');
    } else {
        // Add to saved
        FoodieHub.savedRecipes.push(recipeId);
        showToast('Recipe saved successfully!', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('foodieHub_savedRecipes', JSON.stringify(FoodieHub.savedRecipes));
    
    // Update UI
    updateSaveButtons();
    renderSavedRecipes();
}

function isSaved(recipeId) {
    return FoodieHub.savedRecipes.includes(recipeId);
}

function updateSaveButtons() {
    // Update all save buttons
    document.querySelectorAll('.save-btn').forEach(btn => {
        const card = btn.closest('[data-recipe-id]');
        const recipeId = parseInt(card.getAttribute('data-recipe-id'));
        
        if (isSaved(recipeId)) {
            btn.classList.add('saved');
            btn.innerHTML = '<i class="fas fa-heart"></i> Saved';
        } else {
            btn.classList.remove('saved');
            btn.innerHTML = '<i class="fas fa-heart"></i> Save Recipe';
        }
    });
    
    // Update heart buttons
    document.querySelectorAll('.heart-btn').forEach(btn => {
        const card = btn.closest('[data-recipe-id]');
        const recipeId = parseInt(card.getAttribute('data-recipe-id'));
        
        if (isSaved(recipeId)) {
            btn.classList.add('liked');
        } else {
            btn.classList.remove('liked');
        }
    });
}

function loadSavedRecipes() {
    const saved = localStorage.getItem('foodieHub_savedRecipes');
    if (saved) {
        try {
            FoodieHub.savedRecipes = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading saved recipes:', e);
            FoodieHub.savedRecipes = [];
        }
    }
}

// Modal functionality
function viewRecipe(recipeId) {
    const recipe = FoodieHub.recipes.find(r => r.id === recipeId) || 
                   FoodieHub.busyRecipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        console.error('Recipe not found:', recipeId);
        return;
    }
    
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-image" />
        <h2 class="modal-recipe-title">${recipe.title}</h2>
        <div class="modal-recipe-meta">
            <div class="modal-meta-item">
                <div class="value">${recipe.cookTime}</div>
                <div class="label">Cook Time</div>
            </div>
            <div class="modal-meta-item">
                <div class="value">${recipe.rating}</div>
                <div class="label">Rating</div>
            </div>
            <div class="modal-meta-item">
                <div class="value">${recipe.reviews ? recipe.reviews.toLocaleString() : 'N/A'}</div>
                <div class="label">Reviews</div>
            </div>
            ${recipe.servings ? `
                <div class="modal-meta-item">
                    <div class="value">${recipe.servings}</div>
                    <div class="label">Servings</div>
                </div>
            ` : ''}
            ${recipe.calories ? `
                <div class="modal-meta-item">
                    <div class="value">${recipe.calories}</div>
                    <div class="label">Calories</div>
                </div>
            ` : ''}
        </div>
        
        ${recipe.description ? <p style="margin-bottom: 2rem; color: var(--text-light); line-height: 1.6;">${recipe.description}</p> : ''}
        
        ${recipe.ingredients ? `
            <div class="ingredients-section">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => <li>${ingredient}</li>).join('')}
                </ul>
            </div>
        ` : ''}
        
        ${recipe.instructions ? `
            <div class="instructions-section">
                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map((instruction, index) => `
                        <li>
                            <span class="step-number">${index + 1}</span>
                            <span>${instruction}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>
        ` : ''}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// My Recipes functionality
function toggleSavedRecipes() {
    const section = document.getElementById('myRecipesSection');
    const isVisible = section.style.display !== 'none';
    
    if (isVisible) {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
        renderSavedRecipes();
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Carousel functionality
function nextSuggestions() {
    const maxIndex = Math.max(0, FoodieHub.recipes.length - 4);
    FoodieHub.currentSuggestionIndex = Math.min(FoodieHub.currentSuggestionIndex + 4, maxIndex);
    FoodieHub.suggestions = FoodieHub.recipes.slice(FoodieHub.currentSuggestionIndex, FoodieHub.currentSuggestionIndex + 4);
    renderSuggestions();
}

function previousSuggestions() {
    FoodieHub.currentSuggestionIndex = Math.max(FoodieHub.currentSuggestionIndex - 4, 0);
    FoodieHub.suggestions = FoodieHub.recipes.slice(FoodieHub.currentSuggestionIndex, FoodieHub.currentSuggestionIndex + 4);
    renderSuggestions();
}

// Toast notifications
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = toast toast-${type};
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-color)' : 'var(--text-dark)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-medium);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Click handlers for recipe cards
document.addEventListener('click', function(e) {
    // Handle recipe card clicks
    const recipeCard = e.target.closest('.recipe-card, .busy-recipe-card');
    if (recipeCard && !e.target.closest('button')) {
        const recipeId = parseInt(recipeCard.getAttribute('data-recipe-id'));
        viewRecipe(recipeId);
    }
    
    // Handle trending item clicks
    const trendingItem = e.target.closest('.trending-item');
    if (trendingItem) {
        showToast('Feature coming soon!', 'info');
    }
    
    // Handle latest item clicks
    const latestItem = e.target.closest('.latest-item');
    if (latestItem) {
        showToast('Feature coming soon!', 'info');
    }
});

// Initialize suggestions with random recipes
function initializeSuggestions() {
    // Shuffle recipes for variety
    const shuffled = [...FoodieHub.recipes].sort(() => 0.5 - Math.random());
    FoodieHub.suggestions = shuffled.slice(0, 4);
    renderSuggestions();
}

// Auto-refresh suggestions periodically
setInterval(() => {
    if (document.getElementById('searchInput').value === '' && 
        document.querySelector('.nav-link.active').getAttribute('data-category') === 'all') {
        initializeSuggestions();
    }
}, 30000); // Refresh every 30 seconds

// Add some animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe recipe cards for animation
setTimeout(() => {
    const cards = document.querySelectorAll('.recipe-card, .busy-recipe-card, .trending-item, .latest-item');
    cards.forEach(card => observer.observe(card));
}, 1000);

console.log('🍳 FoodieHub Script Loaded Successfully!');