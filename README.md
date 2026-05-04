# Phenom 100 Checkride Prep Quiz

Free public flashcard quiz for Phenom 100 type rating checkride prep.

## What's in this folder

A complete Vite + React project. You can run it locally or deploy it free to GitHub Pages.

## How to deploy to GitHub Pages (free)

You need a GitHub account. Go to github.com and sign up if you don't have one.

### Step 1: Make a new repo

1. Click the "+" button in the top right of GitHub, then "New repository"
2. Name it something like `phenom100-quiz`
3. Set it to Public
4. Don't initialize with anything (no README, no gitignore, no license)
5. Click "Create repository"

### Step 2: Upload the files

The easiest way:

1. On the new empty repo page, click "uploading an existing file"
2. Drag in everything from this folder EXCEPT `node_modules` (that folder gets recreated automatically)
3. Commit the files

### Step 3: Update one config line

Open `vite.config.js` and find this line:

```js
base: './',
```

Change it to your repo name with slashes around it:

```js
base: '/phenom100-quiz/',
```

(If you named your repo something different, use that instead.)

### Step 4: Build and deploy

You need Node.js installed. Get it from https://nodejs.org if you don't have it.

Open a terminal in the project folder and run:

```bash
npm install
npm run build
npm run deploy
```

The `deploy` command pushes the built files to a special branch called `gh-pages`.

### Step 5: Turn on GitHub Pages

1. Go to your repo on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", pick "Deploy from a branch"
5. Pick the `gh-pages` branch
6. Click "Save"

Wait 1-2 minutes, then your site will be live at:

```
https://YOURUSERNAME.github.io/phenom100-quiz/
```

Share that link with anyone.

## How to update the quiz later

If you add more questions later, just rebuild and redeploy:

```bash
npm run build
npm run deploy
```

The live site updates within a minute or two.

## Running it locally to test before deploying

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## How the public version differs from your skill version

- Each visitor's progress saves in their own browser via localStorage (not shared)
- Export and Reset buttons are hidden (cleaner UI)
- "Send Feedback" link in footer opens a mailto to quizfeedback@biter.com
- Custom questions added by users stay in their own browser only

## Feedback email

Feedback emails go to: quizfeedback@biter.com

This uses a `mailto:` link, so the user's default email app opens with the address pre-filled.
