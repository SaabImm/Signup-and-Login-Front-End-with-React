# 🛍️ SauSau — Modern E-Commerce Website

**SauSau** is a modern e-commerce website built with React and Tailwind CSS.  
It features a sleek design, smooth category browsing, product detail pages, and a dynamic cart system — all focused on providing a realistic shopping experience.

---

## 🚀 Features

### 🏠 Homepage
- Hero section with promotional banners.  
- Featured products and shop-by-brand displays.  
- Category carousel allowing users to browse by product type.

### 🧭 Navigation
- Responsive fixed navbar with blur effect.  
- Search and cart icons integrated into the header.  
- Dropdown menu for product categories.  
- Smooth anchor scrolling and React Router navigation.

### 🛒 Product System
- Product listing with dynamic data from a local JSON file.  
- Category-based product filtering.  
- Detailed product page with:
  - Images gallery and multiple color options.  
  - Ratings and customer reviews.  
  - Price, brand, specs, and stock information.

### 🖼️ UI & UX
- Built entirely with **Tailwind CSS** for speed and consistency.  
- Clean and minimalistic design using a **blue-gray and yellow** color palette.  
- Interactive hover and blur effects.  
- Fully responsive layout.

### ⚙️ Routing
- **React Router** for page navigation (`Home`, `Product Details`, `Cart`, etc.).  
- Dynamic route handling for `/product/:id`.

### 🧠 State Management
- React **Context API** for shared components like search and cart.  
- Category-based filtering handled with useState and useEffect hooks.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Components | Swiper.js (for sliders & carousels) |
| Icons | React Icons |
| Data | Local JSON (mock API) |

---

## 🏗️ File Structure (simplified)

src/
├── assets/ # Images and logo
├── Components/
│ ├── Navbar.jsx
│ ├── Category.jsx
│ ├── ItemCards.jsx
│ ├── Footer.jsx
│ ├── FooterLinks.jsx
│ └── ...
├── Context/
│ └── SearchBarContext.jsx
├── Pages/
│ ├── HomePage.jsx
│ ├── ProductDetail.jsx
│ ├── Cart.jsx
│ └── ...
├── MockDataAPI/
│ └── products.json
├── App.jsx
└── index.js


---

## 🧭 How to Run

```bash
# Clone this repository
git clone https://github.com/your-username/sausau-ecommerce.git

# Enter the project directory
cd sausau-ecommerce

# Install dependencies
npm install

# Run the project
npm start


---

