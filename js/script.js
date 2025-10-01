let allPlants = [];
let activeCategory = "All Trees"; 
let cart = [];

// ================== LOAD CATEGORIES ==================
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(json => displayCategories(json.categories))
        .catch(err => console.error("Error loading categories:", err));
}

// ================== LOAD ALL PLANTS ==================
const loadAllPlants = () => {
    const levelContainer = document.getElementById('levelContainer');
    levelContainer.innerHTML = `
        <div class="flex justify-center items-center py-10 col-span-3">
            <div class="animate-spin rounded-full h-10 w-10 border-t-4 border-green-700 border-b-4 border-gray-200"></div>
        </div>
    `;

    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(json => {
            allPlants = json.plants;
            displayLevelPlants(allPlants);
        })
        .catch(err => console.error("Error loading plants:", err));
}

// ================== FILTER PLANTS BY CATEGORY ==================
const loadCategoryDetails = (categoryName) => {
    activeCategory = categoryName;

    // Show spinner while filtering
    const levelContainer = document.getElementById('levelContainer');
    levelContainer.innerHTML = `
        <div class="flex justify-center items-center py-10 col-span-3">
            <div class="animate-spin rounded-full h-10 w-10 border-t-4 border-green-700 border-b-4 border-gray-200"></div>
        </div>
    `;

    setTimeout(() => {
        let filtered = categoryName === "All Trees" 
            ? allPlants 
            : allPlants.filter(plant => plant.category === categoryName);

        displayLevelPlants(filtered);
        highlightActiveCategory();
    }, 500);
}

// ================== DISPLAY PLANTS ==================
const displayLevelPlants = (plants) => {
    const levelContainer = document.getElementById('levelContainer');
    levelContainer.innerHTML = '';

    if (plants.length === 0) {
        levelContainer.innerHTML = `<p class="text-center text-red-500">No plants found</p>`;
        return;
    }

    plants.forEach(plant => {
        const card = document.createElement('div');
        card.className = "h-[400px] w-[280px] p-5 rounded-lg bg-white shadow-md";
        card.innerHTML = `
            <img class="rounded-2xl h-[160px] w-full object-cover" src="${plant.image}" alt="${plant.name}">
            <h1 onclick="openModal(${plant.id})" class="font-semibold my-3 cursor-pointer hover:text-green-700">${plant.name}</h1>
            <p class="text-[13px]">${plant.description.slice(0, 80)}...</p>
            <div class="flex justify-between items-center my-3">
                <span class="bg-green-200 px-3 py-1 rounded-3xl text-sm">${plant.category}</span>
                <span class="font-semibold">৳ ${plant.price}</span>
            </div>
            <button onclick="addToCart(${plant.id})"
                class="w-full bg-green-700 text-white font-semibold py-2
                rounded-full hover:bg-green-900 transition-colors cursor-pointer">
                Plant a Tree
            </button>
        `;
        levelContainer.appendChild(card);
    });
}

// ================== DISPLAY CATEGORIES ==================
const displayCategories = (categories) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    const allBtn = document.createElement('p');
    allBtn.textContent = "All Trees";
    allBtn.className = "my-3 cursor-pointer px-4 py-2 transition-colors";
    allBtn.setAttribute("onclick", "loadCategoryDetails('All Trees')");
    allBtn.id = "cat-All Trees";
    levelContainer.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('p');
        btn.textContent = cat.category_name;
        btn.className = "my-3 cursor-pointer px-4 py-2 transition-colors";
        btn.setAttribute("onclick", `loadCategoryDetails('${cat.category_name}')`);
        btn.id = `cat-${cat.category_name}`;
        levelContainer.appendChild(btn);
    });

    highlightActiveCategory();
}

// ================== HIGHLIGHT ACTIVE CATEGORY ==================
const highlightActiveCategory = () => {
    document.querySelectorAll("#level-container p").forEach(p => {
        if (p.textContent === activeCategory) {
            p.classList.add("bg-green-700", "text-white", "font-semibold", "rounded");
        } else {
            p.classList.remove("bg-green-700", "text-white", "font-semibold", "rounded");
        }
    });
}

// ================== CART LOGIC ==================

// Add to Cart
const addToCart = (id) => {
    const plant = allPlants.find(p => p.id === id);
    if (!plant) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({...plant, qty: 1});
    }

    displayCart();
}

// Display Cart
const displayCart = () => {
    const cartContainer = document.getElementById("yourCartContainer");
    cartContainer.innerHTML = `<h1 class="font-bold mb-5">Your Cart</h1>`;

    if(cart.length === 0){
        cartContainer.innerHTML += `<p class="text-center text-gray-500">Cart is empty</p>`;
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const row = document.createElement("div");
        row.className = "flex items-center justify-between border-b py-3";
        row.innerHTML = `
            <div class="flex items-center gap-3">
                <img src="${item.image}" class="h-12 w-12 rounded object-cover"/>
                <div>
                    <h2 class="font-semibold">${item.name}</h2>
                    <p class="text-sm text-gray-500">৳ ${item.price} x ${item.qty}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="updateQty(${item.id}, -1)" class="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>${item.qty}</span>
                <button onclick="updateQty(${item.id}, 1)" class="px-2 py-1 bg-gray-200 rounded">+</button>
                <button onclick="removeFromCart(${item.id})" class="text-red-600 ml-2">✕</button>
            </div>
        `;
        cartContainer.appendChild(row);
    });

    cartContainer.innerHTML += `
        <div class="flex justify-between items-center mt-5">
            <p>Total:</p>
            <p id="cart-total">৳ ${total}</p>
        </div>
    `;
}

// Update Quantity
const updateQty = (id, change) => {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }
    displayCart();
}

// Remove from Cart
const removeFromCart = (id) => {
    cart = cart.filter(p => p.id !== id);
    displayCart();
}

// ================== MODAL LOGIC ==================

// Open Modal
const openModal = (id) => {
    const plant = allPlants.find(p => p.id === id);
    if (!plant) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <img src="${plant.image}" class="w-full h-60 object-cover rounded-xl mb-4" alt="${plant.name}">
        <h2 class="text-2xl font-bold text-green-800 mb-2">${plant.name}</h2>
        <p class="text-sm text-gray-500 mb-2"><strong>Category:</strong> ${plant.category}</p>
        <p class="text-gray-700 mb-4">${plant.description}</p>
        <p class="text-lg font-semibold mb-4">Price: ৳ ${plant.price}</p>
        <button onclick="addToCart(${plant.id}); closeModal();"
            class="w-full bg-green-700 text-white font-semibold py-2 rounded-full hover:bg-green-900 transition-colors">
            Plant a Tree
        </button>
    `;

    const modal = document.getElementById('plantModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Close Modal
const closeModal = () => {
    const modal = document.getElementById('plantModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Close modal by clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('plantModal');
    if(e.target === modal){
        closeModal();
    }
});

// ================== INITIALIZE ==================
loadCategories();
loadAllPlants();
displayCart();
