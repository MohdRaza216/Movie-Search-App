# 🎬 Movie Search App

## 📌 Overview
The **Movie Search App** allows users to search for movies using the OMDB API, view movie details, and add/remove movies from their favorites list. The app also uses **local storage** to persist favorite movies even after a page refresh.

## 🚀 Features
- 🔍 **Search for Movies** using the OMDB API
- 💾 **Persist Favorites** with Local Storage
- ❤️ **Add/Remove Movies** from Favorites
- 🎭 **Movie Posters** with a Fallback Image
- 🎨 **Bootstrap Styling** for a clean UI

## 🛠️ Technologies Used
- **React.js** (Frontend framework)
- **Bootstrap** (Styling & layout)
- **OMDB API** (Movie data)
- **Local Storage** (Persisting favorites)

## 📂 Folder Structure
```
📦 Movie-Search-App
├── 📂 src
│   ├── 📂 components
│   │   ├── AddFavourite.js
│   │   ├── RemoveFavourite.js
│   │   ├── MoviesList.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── .env
├── package.json
├── README.md
```

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MohdRaza216/Movie-Search-App.git
cd Movie-Search-App
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up OMDB API Key
- Create a `.env` file in the root directory.
- Add your **OMDB API Key**:
```sh
REACT_APP_OMDB_API_KEY=your_api_key_here
```

### 4️⃣ Run the Application
```sh
npm start
```

## 🎥 How It Works
1. **Search for a movie** by entering a title.
2. Click **Add to Favorites ❤️** to save movies.
3. View **Favorites** in the dedicated section.
4. Click **Remove from Favorites ❌** to remove a movie.
5. **Favorites persist** even after refreshing the page.

## 📸 Screenshots

![alt text](<localhost_3000_ (6).png>)

![alt text](<localhost_3000_ (3).png>)

## 🔗 API Reference
- [OMDB API](https://www.omdbapi.com/)

## 🤝 Contributing
Contributions are welcome! Feel free to submit an issue or pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
🚀 Happy Coding! 🎬

