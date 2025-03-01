# 🛍️ Product Listing & Shopping Cart Application

## 📌 Overview
This is a modern **Angular-based e-commerce product listing application** with features like **category filtering, a shopping cart, a product details modal, and a dark mode toggle**. 

### 🔥 Features
- 🛒 **Shopping Cart**: Add and remove products with a real-time cart summary.
- 🎨 **Product Filtering**: Filter products by category.
- 🔍 **Product Modal**: Click on a product to view more details.
- 🌙 **Dark Mode**: Toggle between light and dark themes.
- ⚡ **Smooth Animations**: Stylish hover effects and fade-in transitions.
- 📱 **Responsive Design**: Works on desktop and mobile screens.

---

## 🚀 Getting Started

### 📦 Installation

1️⃣ **Clone the repository:**
git clone https://github.com/amira3a/product-listing.git

2️⃣ Navigate to the project folder:
cd product-listing

3️⃣ Install dependencies:
npm install

4️⃣ Run the development server:
ng serve --open


🏗️ Project Structure

product-listing/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/
│   │   │   ├── product-detail-modal/
│   │   │   ├── cart/
│   │   ├── services/
│   │   │   ├── product.service.ts
│   │   │   ├── cart.service.ts
│   │   ├── models/
│   │   │   ├── product.model.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│── assets/
│── styles.scss
│── angular.json
│── package.json
│── README.md

⚙️ Technologies Used
Angular: Frontend framework
TypeScript: Strongly-typed JavaScript
SCSS: Advanced styling
NgBootstrap: UI components (modals, buttons)
RxJS: Reactive state management

🛠️ Usage
1️⃣ Adding a Product to Cart
Click the "Add to Cart" button on any product.
The cart updates dynamically in the header.

2️⃣ Removing a Product from Cart
Click the "Remove" button inside the cart.
🛑 Each click removes only one instance of the product.

3️⃣ Filtering Products by Category
Select a category from the dropdown.
The list updates to show only matching products.

4️⃣ Viewing Product Details
Click on a product card to open a modal with more details.

5️⃣ Dark Mode Toggle
Click the 🌙 Dark Mode Toggle Button in the header.


🐞 Troubleshooting
Issue: Filtering is not working properly
🔹 Solution: Ensure filteredProducts is used in ngFor inside product-list.component.html.

Issue: Images not loading
🔹 Solution: Check if image URLs in product.service.ts are accessible.

Issue: Dark mode does not update the cart
🔹 Solution: Ensure .cart-summary and .cart-item have styles using var(--bg-color).


🏆 Future Improvements
✅ Add pagination for large product lists.
✅ Implement user authentication for personalized shopping.
✅ Store the cart in localStorage so it persists after refresh.


🤝 Contributing
We welcome contributions! 🚀

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m "Added a new feature").
Push to your branch (git push origin feature-name).
Open a Pull Request. 🎉


🔹 Built with ❤️ using Angular, TypeScript & SCSS 🔹