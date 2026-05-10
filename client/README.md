# E-Portfolio (Week 7)

React + Vite single-page app with client-side routing.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended), which includes `npm`

## Environment

The file `.env` defines `VITE_API_BASE_URL` for the Express backend. Leave it empty in development to use the Vite dev server’s `/api` proxy, or set it to the API origin (for example `http://localhost:3000`) if you run the front end without that proxy.

The Express API must be running with a working **MongoDB** connection (`MONGO_URI` on the server). The **Projects** page fetches `GET /api/projects`; that data comes from the database, not from the files below.

## Run locally

1. **Install dependencies** (from this project folder):

   ```bash
   npm install
   ```

2. **Start the dev server**:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## API

**NASA APOD** — The NASA Astronomy Picture of the Day API adds a dynamic visual on the homepage. A Node script fetches with Axios and writes `output/apiResults.json`, which the app uses for the `ApiCard`.

**Projects** — The Projects page uses `fetch` to `GET /api/projects` on the Express server. The server reads and writes project documents in **MongoDB** (see the server `README.md`). Admin-style create/update/delete operations are available on the API if you need to manage projects outside the UI.

This personalizes my portfolio by changing the homepage image, making each visit feel unique. I paired it with the theme “Are the stars aligning?” to create a more engaging first impression while showing how I can integrate external APIs into a front-end project.

## Node scripts

Run these from the project folder (after `npm install`). They use plain Node; output appears in the terminal unless noted.

| Command                 | What it does |
| ----------------------- | ------------ |
| `npm run read-projects` | Reads `src/data/projects.json` and logs each project to the console (handy for reference; the live Projects page uses the API/MongoDB). |
| `npm run fetch-apod`    | Calls the NASA APOD API with Axios and writes the response to `output/apiResults.json` for the homepage `ApiCard`. |

You can also run the same files directly:

```bash
node scripts/readProjects.js
node scripts/fetchApiData.js
```

After updating `output/apiResults.json`, restart or refresh the dev server (or run `npm run build` again for production) so the app picks up the new data.

## Other commands

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run build`   | Production build output in `dist/`               |
| `npm run preview` | Serve the production build locally to smoke-test |
| `npm run lint`    | Run ESLint                                       |


