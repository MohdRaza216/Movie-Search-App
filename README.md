# MoviesHub

A simple React app that allows users to search for movies using the OMDb API.

## 🚀 Features
- Search for movies by title
- Display search results with movie titles and release years
- Fetch movie data using the OMDb API
- Styled with Bootstrap for a clean UI

## 🛠️ Technologies Used
- React.js
- Bootstrap
- Fetch API

## 📂 Project Structure
```
/movie-search-app
├── public/
├── src/
│   ├── components/
│   │   ├── MoviesList.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── .env
├── package.json
├── README.md
```

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MohdRaza216/movie-search-app.git
cd movie-search-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the project root and add:
```
REACT_APP_OMDB_API_KEY=your_api_key_here
```
Replace `your_api_key_here` with your actual OMDb API key. You can get one from [OMDb API](https://www.omdbapi.com/apikey.aspx).

### 4️⃣ Start the Development Server
```sh
npm start
```
This will run the app on `http://localhost:3000/`.

## 🔧 Usage
1. Enter a movie title in the search bar.
2. Click the **Search** button.
3. View the list of movies matching the search query.

## 🐞 Troubleshooting
### `movies.map is not a function` Error
- Ensure the API response structure contains a `Search` array.
- Modify `fetchMovies()` to handle empty results:
  ```js
  setMovies(data.Search || []);
  ```

### `.env` File Not Working
- Ensure variables start with `REACT_APP_`.
- Restart the server after modifying `.env`:
  ```sh
  npm start
  ```

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

## 🙌 Contributing
Feel free to submit pull requests or report issues on GitHub.

## 📞 Contact
For any questions, reach out to me on GitHub: [MohdRaza216](https://github.com/MohdRaza216)

