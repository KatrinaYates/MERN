# Express API (Week 7)

Express server for the e-portfolio: MongoDB-backed project CRUD, static files, and contact form validation.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended), which includes `npm`
- A [MongoDB](https://www.mongodb.com/) instance (local install, [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), or similar) and a connection string

## Environment

Create a `.env` file in this folder with:

| Variable    | Description |
| ----------- | ----------- |
| `MONGO_URI` | **Required.** MongoDB connection string (e.g. `mongodb://127.0.0.1:27017/eportfolio` or an Atlas URI). The server exits if the connection fails. |
| `PORT`      | Optional. HTTP port (default `3000`). |

## Run locally

1. **Install dependencies** (from this project folder):

   ```bash
   npm install
   ```

2. **Configure** `.env` with a valid `MONGO_URI`.

3. **Start the server**:

   ```bash
   node server.js
   ```

   The server connects to MongoDB on startup, then listens on `http://localhost:3000` (or `PORT`).

## Data model (projects)

Projects are stored with **Mongoose** (`models/Project.js`): `title`, `category`, `tools` (array of strings), `description`, `image`, plus Mongoose `timestamps`. `GET /api/projects` returns a wrapper object with `intro` (fixed copy for the UI) and `items` (array of project documents).

Optional seed data for manual import lives in `data/projects.json`; it is not loaded automatically—you can insert documents via MongoDB tools or the API below.

## Test endpoints

With the server running, you can use curl, your browser, or a REST client:

| Method   | URL                    | What it does |
| -------- | ---------------------- | ------------ |
| `GET`    | `/`                    | Health check JSON response |
| `GET`    | `/api/projects`        | Returns `{ intro, items }` from MongoDB |
| `POST`   | `/api/projects`        | Create a project (JSON body matches the schema fields) |
| `PUT`    | `/api/projects/:id`    | Update a project by MongoDB `_id` |
| `DELETE` | `/api/projects/:id`    | Delete a project by `_id` |
| `POST`   | `/api/contact`         | JSON body: `name`, `email`, `message` (validated and sanitized) |
| `GET`    | `/images/...`          | Files under `public/images/` (e.g. headshot, project images) |

Examples:

```bash
curl -s http://localhost:3000/api/projects
curl -s -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## Integration with the React app

The Vite app loads the Projects page from `GET /api/projects` and posts to `/api/contact`. In development, the frontend’s Vite config proxies `/api` to this server. Set `VITE_API_BASE_URL` in the client `.env` if you run the front end without that proxy.

## Other notes

- **CORS** is enabled for browser requests from the front end.
- **Form input** is validated and sanitized with `express-validator` in `utils/validators.js` and the contact route.
- Database connection logic lives in `config/db.js`.
