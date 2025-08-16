const categories = [
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Clothing" },
    { id: "books", name: "Books" },
];

const products = [
    {
        id: 1,
        name: "Phone",
        image: "https://via.placeholder.com/150",
        category: "electronics",
    },
    {
        id: 2,
        name: "Laptop",
        image: "https://via.placeholder.com/150",
        category: "electronics",
    },
    {
        id: 3,
        name: "T-shirt",
        image: "https://via.placeholder.com/150",
        category: "clothing",
    },
    {
        id: 4,
        name: "Jeans",
        image: "https://via.placeholder.com/150",
        category: "clothing",
    },
    {
        id: 5,
        name: "JS Book",
        image: "https://via.placeholder.com/150",
        category: "books",
    },
    {
        id: 6,
        name: "HTML Book",
        image: "https://via.placeholder.com/150",
        category: "books",
    },
];

const wishlists = {
    "Wishlist 1": [],
    "Wishlist 2": [],
};

const categoryTabs = document.getElementById("category-tabs");
const productList = document.getElementById("product-list");
const wishlistsContainer = document.getElementById("wishlists");

function renderTabs() {
    categories.forEach((category, index) => {
        const btn = document.createElement("button");

        btn.textContent = category.name;
        btn.id = category.id;
        btn.className = index === 0 ? "active" : "";

        btn.onclick = () => {
            const tabButtons = document.querySelectorAll(".tabs button");
            tabButtons.forEach((button) => {
                button.classList.remove("active");
            });
            btn.classList.add("active");
            renderProducts(btn.id);
        };

        categoryTabs.appendChild(btn);
    });
}

function renderProducts(categoryId) {
    productList.innerHTML = "";

    const filterProducts = products.filter(
        (item) => item.category === categoryId
    );

    filterProducts.forEach((product) => {
        const card = document.createElement("div");

        card.className = "card";
        // card.classList.add('card');

        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
        `;

        // Add to wishlists
        Object.keys(wishlists).forEach((wl) => {
            const btn = document.createElement("button");

            btn.textContent = `Add to ${wl}`;
            btn.onclick = () => {
                if (!wishlists[wl].find((p) => p.id === product.id)) {
                    wishlists[wl].push(product);
                    renderWishlists();
                }
            };

            card.appendChild(btn);
        });

        productList.appendChild(card);
    });
}

function renderWishlists() {
    wishlistsContainer.innerHTML = "";

    Object.entries(wishlists).forEach(([wlName, items]) => {
        const div = document.createElement("div");

        div.className = "wishlist";

        const title = document.createElement("h4");
        title.textContent = wlName;
        div.appendChild(title);

        items.forEach((item) => {
            const p = document.createElement("p");
            p.textContent = item.name;
            div.appendChild(p);
        });

        wishlistsContainer.appendChild(div);
    });
}

// Initialize
renderTabs();
renderProducts("electronics");
renderWishlists();
