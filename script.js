// Menu Data
const menuData = [
    {
        id: 1,
        name: "Margherita",
        category: "pizza",
        description: "Naše pocta jednoduchosti. Ručně mačkaná rajčata San Marzano (Agro Sarnese Nocerino DOP), buvolí mozzarella z Kampánie, čerstvá bazalka trhaná těsně před pečením, kapka extra panenského olivového oleje.",
        price30: 139,
        price45: 211,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 2,
        name: "Prosciutto",
        category: "pizza",
        description: "Rajčatová omáčka, italská šunka prosciutto, mozzarella, čerstvá rukola a parmazán hoblinky. Dokonalá kombinace šťavnatosti a svěžesti.",
        price30: 159,
        price45: 239,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 3,
        name: "Quattro Formaggi",
        category: "pizza",
        description: "Čtyři prémiové sýry: gorgonzola DOP, fontina, parmigiano reggiano a mozzarella fior di latte. Pro milovníky autentické sýrové symfonie.",
        price30: 179,
        price45: 269,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 4,
        name: "Diavola",
        category: "pizza",
        description: "Pro odvážné. Pikantní salám calabrese, rajčatová omáčka, mozzarella, čerstvé chilli papričky a olivový olej s chilli.",
        price30: 169,
        price45: 249,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 5,
        name: "Capricciosa",
        category: "pizza",
        description: "Klasika italské kuchyně. Šunka, artyčoky, čerstvé houby, olivy, rajčatová omáčka a mozzarella.",
        price30: 175,
        price45: 265,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 6,
        name: "Tartufata",
        category: "pizza",
        description: "Zemitá a intenzivní. Krém z černých lanýžů, lesní houby restované na másle, fior di latte, po upečení hobliny Pecorino Romano.",
        price30: 225,
        price45: 339,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 7,
        name: "Spaghetti Carbonara",
        category: "spaghetti",
        description: "Autentická římská klasika. Guanciale (vepřová líčka), vejce, Pecorino Romano, čerstvě mletý černý pepř. Bez smetany, jak má být.",
        price30: 189,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 8,
        name: "Penne Arrabbiata",
        category: "pasta",
        description: "Ostrá rajčatová omáčka s česnekem, čerstvým chilli, bazalkou a extra panenským olivovým olejem. Jednoduchá, ale plná chuti.",
        price30: 159,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 9,
        name: "Lasagne Bolognese",
        category: "lasagne",
        description: "Vrstvené těstoviny s bohatou masovou ragů z hovězího a vepřového masa, bechamel omáčkou a parmezánem. Pečeno dozlatova.",
        price30: 199,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 10,
        name: "Ravioli al Tartufo",
        category: "specialty",
        description: "Ručně plněné ravioli s ricottou a špenátem, podávané v krémové lanýžové omáčce s parmezánem.",
        price30: 245,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 11,
        name: "Tiramisu",
        category: "dezerty",
        description: "Klasický italský dezert. Mascarpone krém, savoiardi piškoty namočené v espressu, kakao. Připravujeme čerstvě každý den.",
        price30: 89,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 12,
        name: "Panna Cotta",
        category: "dezerty",
        description: "Jemný krémový dezert podávaný s domácím lesním ovocem nebo karamelem.",
        price30: 79,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 13,
        name: "Insalata Caprese",
        category: "salaty",
        description: "Čerstvá mozzarella di bufala, rajčata, bazalka, extra panenský olivový olej a balzamikový ocet z Modeny.",
        price30: 149,
        price45: null,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 14,
        name: "Pizza Vegana",
        category: "vegan",
        description: "Rajčatová omáčka, grilovaná zelenina (baklažán, cuketa, paprika), cherry rajčata, rukola, veganski sýr a olivový olej.",
        price30: 169,
        price45: 249,
        image: "img/pizza-nahled-ingredience.png"
    },
    {
        id: 15,
        name: "Funghi e Tartufo Vegan",
        category: "vegan",
        description: "Lesní houby, lanýžový olej, čerstvý tymián, veganski sýr a čerstvá rukola po upečení.",
        price30: 189,
        price45: 279,
        image: "img/pizza-nahled-ingredience.png"
    }
];

// Extra ingredients for pizza
const extraIngredients = [
    { name: "sýr", price: 40 },
    { name: "veganský sýr", price: 79 },
    { name: "šunka", price: 49 },
    { name: "tuňák", price: 45 },
    { name: "cibule", price: 15 },
    { name: "šampiony", price: 30 },
    { name: "olivy", price: 45 },
    { name: "rajčata", price: 20 },
    { name: "vejce", price: 20 },
    { name: "feferony", price: 35 },
    { name: "ananas", price: 35 },
    { name: "bazalka", price: 10 },
    { name: "stanina", price: 35 },
    { name: "salám", price: 40 },
    { name: "kukuřice", price: 25 },
    { name: "česnek", price: 15 },
    { name: "ančovičky", price: 45 },
    { name: "mozzarella", price: 45 },
    { name: "parmazán", price: 45 },
    { name: "chilli", price: 10 },
    { name: "krevety", price: 45 },
    { name: "niva", price: 45 },
    { name: "gorgonzola", price: 45 },
    { name: "špenát", price: 35 },
    { name: "klokáň", price: 40 },
    { name: "uzený sýr", price: 45 },
    { name: "oregano", price: 10 },
    { name: "mulle", price: 45 },
    { name: "artyčok", price: 45 },
    { name: "kuřecí maso", price: 45 }
];

// Current filter
let currentFilter = 'vse';

// Check if item is in cart
function isItemInCart(itemId) {
    return cart.some(cartItem => cartItem.productId === itemId);
}

// Render menu items
function renderMenu(filter = 'vse') {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    const filteredItems = filter === 'vse'
        ? menuData
        : menuData.filter(item => item.category === filter);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.onclick = () => openModal(item);

        // Vytvoření size badges
        let sizeBadges = '';
        if (item.price30) {
            sizeBadges += '<span class="size-badge">⌀ 30 cm</span>';
        }
        if (item.price45) {
            sizeBadges += '<span class="size-badge">⌀ 45 cm</span>';
        }

        // Zjistit, jestli je položka v košíku
        const inCart = isItemInCart(item.id);
        const btnText = inCart ? 'V košíku' : 'Přidat do košíku';

        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                ${sizeBadges ? `<div class="menu-item-sizes">${sizeBadges}</div>` : ''}
                <div class="menu-item-footer">
                    <div class="menu-item-price">
                        <span class="price-main">${item.price30} Kč</span>
                    </div>
                    <button class="menu-item-btn">${btnText}</button>
                </div>
            </div>
        `;

        menuGrid.appendChild(menuItem);
    });
}

// Tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        currentFilter = category;
        renderMenu(category);
    });
});

// Modal functionality
const modal = document.getElementById('pizzaModal');
let currentItem = null;
let selectedSize = 30;
let selectedExtras = [];
let quantity = 1;

function openModal(item) {
    // Zavřít košík, pokud je otevřený
    if (cartSidebar.classList.contains('active')) {
        closeCart();
    }

    currentItem = item;
    selectedSize = 30;
    selectedExtras = [];
    quantity = 1;

    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalImage').src = item.image;

    // Set prices
    document.getElementById('price30').textContent = `${item.price30} Kč`;
    if (item.price45) {
        document.getElementById('price45').textContent = `${item.price45} Kč`;
        document.querySelector('input[name="size"][value="45"]').parentElement.style.display = 'block';
    } else {
        document.querySelector('input[name="size"][value="45"]').parentElement.style.display = 'none';
    }

    // Reset size selection
    document.querySelector('input[name="size"][value="30"]').checked = true;

    // Reset quantity
    document.getElementById('quantity').value = 1;

    // Render ingredients only for pizza items
    if (item.category === 'pizza' || item.category === 'vegan') {
        renderIngredients();
        document.querySelector('.ingredients-section').style.display = 'block';
    } else {
        document.querySelector('.ingredients-section').style.display = 'none';
    }

    updateTotalPrice();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function renderIngredients() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    ingredientsGrid.innerHTML = '';

    extraIngredients.forEach((ingredient, index) => {
        const ingredientOption = document.createElement('label');
        ingredientOption.className = 'ingredient-option';
        ingredientOption.innerHTML = `
            <input type="checkbox" value="${index}" onchange="toggleIngredient(${index})">
            <span class="ingredient-name">${ingredient.name}</span>
            <span class="ingredient-price">+${ingredient.price} Kč</span>
        `;
        ingredientsGrid.appendChild(ingredientOption);
    });
}

function toggleIngredient(index) {
    const ingredientIndex = selectedExtras.indexOf(index);
    if (ingredientIndex > -1) {
        selectedExtras.splice(ingredientIndex, 1);
    } else {
        selectedExtras.push(index);
    }
    updateTotalPrice();
}

// Size selection
document.addEventListener('change', (e) => {
    if (e.target.name === 'size') {
        selectedSize = parseInt(e.target.value);
        updateTotalPrice();
    }
});

// Quantity controls
function increaseQty() {
    quantity++;
    document.getElementById('quantity').value = quantity;
    updateTotalPrice();
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
        updateTotalPrice();
    }
}

// Calculate total price
function updateTotalPrice() {
    if (!currentItem) return;

    let basePrice = selectedSize === 30 ? currentItem.price30 : currentItem.price45;
    let extrasPrice = 0;

    selectedExtras.forEach(index => {
        extrasPrice += extraIngredients[index].price;
    });

    const total = (basePrice + extrasPrice) * quantity;
    document.getElementById('totalPrice').textContent = `${total} Kč`;
}

// Close modal
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Scroll functions
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animations with Intersection Observer
const scrollAnimationOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, scrollAnimationOptions);

// Observe all animated elements
function observeAnimatedElements() {
    // Observe section titles and content
    const animatedElements = document.querySelectorAll(
        '.section-title, .section-title-center, .section-subtitle, ' +
        '.decorative-line, .filozofie-text, .filozofie-quote, .filozofie-image, ' +
        '.process-content, .historie-content, .historie-text, .historie-image, ' +
        '.feature-card, .info-block, .lokace-map'
    );

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
}

// Menu items animation observer
const menuItemsObserver = new MutationObserver(() => {
    document.querySelectorAll('.menu-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.05}s`;

        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, scrollAnimationOptions);

        itemObserver.observe(item);
    });
});

menuItemsObserver.observe(document.getElementById('menuGrid'), {
    childList: true
});

// Initialize animations
observeAnimatedElements();

// Add to cart functionality
document.querySelector('.btn-add-cart').addEventListener('click', () => {
    // Here you would typically add the item to a cart
    // alert(`Přidáno do košíku: ${currentItem.name}\nVelikost: ${selectedSize}cm\nMnožství: ${quantity}\nCelkem: ${document.getElementById('totalPrice').textContent}`);
    closeModal();
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
}

hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

closeMenu.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        const target = link.getAttribute('href');
        if (target.startsWith('#')) {
            setTimeout(() => {
                document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cart functionality
let cart = [];
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const objednavkaBtns = document.querySelectorAll('.objednavka-btn, .mobile-objednavka-btn');

// Open cart
function openCart() {
    cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCart();
}

// Close cart
function closeCart() {
    cartSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add to cart
function addToCart(item, size, quantity, extras = []) {
    const price = size === '30' ? item.price30 : item.price45;
    const extrasPrice = extras.reduce((sum, extra) => sum + extra.price, 0);
    const totalPrice = (price + extrasPrice) * quantity;

    const cartItem = {
        id: Date.now(),
        productId: item.id,
        name: item.name,
        size: size,
        quantity: quantity,
        price: price,
        extras: extras,
        extrasPrice: extrasPrice,
        totalPrice: totalPrice,
        image: item.image
    };

    cart.push(cartItem);
    renderCart();
    renderMenu(currentFilter); // Aktualizovat menu, aby se změnilo tlačítko
    openCart();
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
    renderMenu(currentFilter); // Aktualizovat menu, aby se změnilo tlačítko
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.totalPrice = (item.price + item.extrasPrice) * item.quantity;
            renderCart();
            renderMenu(currentFilter); // Aktualizovat menu, aby se změnilo tlačítko
        }
    }
}

// Calculate cart totals
function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const delivery = 39;
    const discount = Math.round(subtotal * 0.1);
    const total = subtotal + delivery - discount;

    return { subtotal, delivery, discount, total };
}

// Render cart
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const { subtotal, delivery, discount, total } = calculateCartTotals();

    // Render cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 2rem; opacity: 0.6;">Košík je prázdný</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-header">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
                    </div>
                    <div class="cart-item-details">
                        ⌀ ${item.size} cm
                        ${item.extras.length > 0 ? ', + ' + item.extras.map(e => e.name).join(', ') : ''}
                    </div>
                    <div class="cart-item-footer">
                        <div class="cart-item-quantity">
                            <button onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                        </div>
                        <div class="cart-item-price">${item.totalPrice} Kč</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update totals
    document.getElementById('deliveryPrice').textContent = `+ ${delivery} Kč`;
    document.getElementById('cartTotalPrice').textContent = `+ ${subtotal} Kč`;
    document.getElementById('discountPrice').textContent = `- ${discount} Kč`;
    document.getElementById('finalPrice').textContent = `${total} Kč`;

    // Update cart count
    updateCartCount();
}

// Update cart count in navigation
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    const mobileCartCountEl = document.getElementById('mobileCartCount');

    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
        cartCountEl.setAttribute('data-count', totalItems);
    }

    if (mobileCartCountEl) {
        mobileCartCountEl.textContent = totalItems;
        mobileCartCountEl.setAttribute('data-count', totalItems);
    }
}

// Event listeners
objednavkaBtns.forEach(btn => {
    btn.addEventListener('click', openCart);
});

// Cart button in navigation
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
}

// Mobile cart button
const mobileCartBtn = document.getElementById('mobileCartBtn');
if (mobileCartBtn) {
    mobileCartBtn.addEventListener('click', openCart);
}

cartClose.addEventListener('click', closeCart);

// Close cart when clicking outside
cartSidebar.addEventListener('click', (e) => {
    if (e.target === cartSidebar) {
        closeCart();
    }
});

// Update add to cart button in modal
document.querySelector('.btn-add-cart').addEventListener('click', () => {
    const size = document.querySelector('input[name="size"]:checked').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    // Get selected extras (if any)
    const extras = [];
    document.querySelectorAll('input[name="extra"]:checked').forEach(checkbox => {
        extras.push({
            name: checkbox.dataset.name,
            price: parseInt(checkbox.dataset.price)
        });
    });

    addToCart(currentItem, size, quantity, extras);
    closeModal();
});

// Order form submission
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Objednávka byla odeslána! Brzy vás budeme kontaktovat.');
    cart = [];
    renderCart();
    renderMenu(currentFilter); // Aktualizovat menu, aby se změnila tlačítka
    closeCart();
});

// Initialize
renderMenu();
