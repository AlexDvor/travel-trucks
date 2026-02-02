# 🚐 Travel Trucks

<p align="center">
  <a href="./README_UA.md">🇺🇦 Українська версія</a> |
  <a href="./README_EN.md">🇬🇧 English version</a>
  <a href="./README_ES.md">🇬🇧 Spanish version</a>
</p>

---

## 🌍 About the Project

**Travel Trucks** is a single-page web application for browsing and exploring camper vans. Users can filter vehicles, view detailed information, read reviews, and add campers to their favorites list.

The project is built as an SPA using React, with routing, global state management, and integration with a remote API.

---

## 🌐 Data Source (Mock API)

https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

---

## 🧰 Tech Stack

- React
- Vite
- TypeScript
- React Router
- Redux Toolkit
- Redux Persist
- Axios
- Formik + Yup
- CSS Modules
- clsx

---

## ⚙️ Features

### 🏠 Home Page

A promotional hero section with navigation to the camper catalog.

### 📋 Camper Catalog

- Fetching camper data from the API
- Filtering by location, vehicle type, and features
- Add to favorites
- Loading indicators
- Error handling for failed requests

### 🚐 Camper Details Page

- Image gallery
- Full camper description
- Technical features
- User reviews
- Booking form

### ❤️ Favorites

Saved in global state and persisted after page reload.

---

## 🧭 Application Routes

| Path                       | Description     |
| -------------------------- | --------------- |
| `/`                        | Home page       |
| `/catalog`                 | Camper catalog  |
| `/catalog/:carId`          | Camper details  |
| `/catalog/:carId/features` | Camper features |
| `/catalog/:carId/review`   | Camper reviews  |
| `*`                        | 404 page        |

---

## 🗂 Project Structure

```
src/
├── api/
├── assets/
├── components/
├── pages/
├── ui/
├── hooks/
├── store/
├── utils/
└── interfaces/
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/travel-trucks.git
cd travel-trucks
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open in your browser: http://localhost:5173

---

## 🏗 Production Build

```bash
npm run build
```

Production files will be generated in the **dist/** folder.

---

## 👀 Preview Production Build

```bash
npm run preview
```

---

## 🧪 Linting

```bash
npm run lint
```

---

## ❗ Troubleshooting

**Dependency issues**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Port already in use**  
Vite will automatically suggest another available port in the console.
