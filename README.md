<h1 align="center" id="title">Movie Search Web Application</h1>

<p id="description">This is a web application built with Next.js React and The Movie Database (TMDB) API that allows users to search for movies and manage their rated movies — all without needing to log in using a guest session.</p>
<br>
<h2>🚀 Demo</h2>

[https://movie-search-engine-kohl.vercel.app/](https://movie-search-engine-kohl.vercel.app/)

<h2 align="center">Project Screenshots:</h2>
<img src="https://i.ibb.co/MxSCYFyY/recording-ezgif-com-resize.gif" alt="project-screenshot" width="800" height="800/">

<p><br>Search tab contains search input field and top rated movies with pagination</p>
<img src="https://i.ibb.co/YBbWCq2C/1-Copy.png" width="800" height="800/">
<img src="https://i.ibb.co/VYptVzhs/2-Copy.png" alt="project-screenshot" width="800" height="800/">
<p><br>Rated tab contains guest user rated movies</p>

<img src="https://i.ibb.co/DfgN2ybg/3-Copy.png" alt="project-screenshot" width="800" height="800/">

<h2>🧐 Features</h2>

Here're some of the project's best features:

Movie Search (Main Tab):

- Search for movies using TMDB's API.
- Real-time search with debouncing for performance.
- Pagination for browsing through search results.
- Automatically creates a guest session on load to track rated movies.
  Rated Movies (Rated Tab):
- Displays all movies rated by the current guest user.
- Uses the guest session ID to fetch and display previously rated
- Rate Movies for guest sessions

<h2>🛠️ Installation Steps:</h2>

<p>1. Install dependencies</p>

```
npm install
```

<p>2. Run development server</p>

```
npm run dev
```

<p>3. Start development server</p>

```
npm run dev
```

<p>4. Build for production</p>

```
npm run build
```

<p>5. Start production server</p>

```
npm run start
```

<p>6. Run ESLint</p>

```
npm run lint
```

<p>7. Format code with Prettier</p>

```
npm run format
```

<p>8. Set up Husky Git hooks</p>

```
npm run prepare
```

<h2>💻 Built with</h2>

Technologies used in the project:

- TMDB API
- React Router DOM
- React Hooks
- Lodash Debounce
- date-fns
- TypeScript
- ESLint
- Prettier
- Husky
- Lint-staged
- Ant Design 5.26.6
- Next.js 15.4.1 (App Router with Turbopack)
