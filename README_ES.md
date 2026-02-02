# 🚐 Travel Trucks

**Travel Trucks** es una aplicación web de una sola página (SPA) para buscar y explorar campers (autocaravanas). Los usuarios pueden filtrar vehículos, ver información detallada, leer reseñas y añadir campers a su lista de favoritos.

El proyecto está desarrollado con React, incluye enrutamiento, gestión de estado global e integración con una API remota.

---

## 🌐 Fuente de datos (Mock API)

https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

---

## 🧰 Tecnologías utilizadas

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

## ⚙️ Funcionalidades

### 🏠 Página principal

Sección promocional con navegación al catálogo de campers.

### 📋 Catálogo de campers

- Carga de datos desde la API
- Filtros por ubicación, tipo de vehículo y características
- Añadir a favoritos
- Indicadores de carga
- Manejo de errores en las peticiones

### 🚐 Página de detalles del camper

- Galería de imágenes
- Descripción completa
- Características técnicas
- Reseñas de usuarios
- Formulario de reserva

### ❤️ Favoritos

Se guardan en el estado global y se mantienen después de recargar la página.

---

## 🧭 Rutas de la aplicación

| Ruta                       | Descripción                |
| -------------------------- | -------------------------- |
| `/`                        | Página principal           |
| `/catalog`                 | Catálogo de campers        |
| `/catalog/:carId`          | Detalles del camper        |
| `/catalog/:carId/features` | Características del camper |
| `/catalog/:carId/review`   | Reseñas del camper         |
| `*`                        | Página 404                 |

---

## 🗂 Estructura del proyecto

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

## 🚀 Puesta en marcha

### 1. Clonar el repositorio

```bash
git clone https://github.com/your-username/travel-trucks.git
cd travel-trucks
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador: http://localhost:5173

---

## 🏗 Build para producción

```bash
npm run build
```

Los archivos finales se generarán en la carpeta **dist/**

---

## 👀 Previsualizar la build de producción

```bash
npm run preview
```

---

## 🧪 Linting

```bash
npm run lint
```

---

## ❗ Solución de problemas

**Problemas con dependencias**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Puerto en uso**  
Vite sugerirá automáticamente otro puerto disponible en la consola.
