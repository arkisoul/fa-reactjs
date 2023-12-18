To deploy a React app to GitHub Pages using GitHub Actions, you’ll need to create a workflow that builds the React application and then pushes the build directory to the `gh-pages` branch of your repository. Below is a step-by-step guide to setting up your CI/CD pipeline for deployment on GitHub Actions:

### Prerequisites:

1. Have a React app that you would like to deploy.
2. Make sure your repository has a `gh-pages` branch (you can create one if it does not exist).
3. Ensure your project has a `package.json` with scripts for building the app (typically `"build": "react-scripts build"`).

### Steps:

**Step 1: Configure Your React App for GitHub Pages**

Edit the `package.json` file in the root of your React project:

- Add a `homepage` field with the URL where your project will be hosted. This will usually be of the form:
  ```json
  "homepage": "https://<username>.github.io/<repository-name>/",
  ```
  Replace `<username>` with your GitHub username and `<repository-name>` with the name of your repository.

**Step 2: Create a GitHub Actions Workflow File**

- In your repository, create a directory named `.github` if it doesn't already exist.
- Inside the `.github` directory, create another directory named `workflows`.
- Inside the `workflows` directory, create a new file named `deploy-gh-pages.yml`.

**Step 3: Define Your Workflow Configuration**

Paste the following YAML configuration inside the `deploy-gh-pages.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # Set this to the default branch of your repository

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: "14" # Use whatever Node version your project requires

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages # The branch to deploy to
          folder: build # The folder the action should deploy
          clean: true # Automatically remove deleted files from the deployment
```

This YAML script defines a workflow that is triggered on every push to the `main` branch (or whichever branch you designate as your default). It includes jobs to check out the code, set up Node.js, install dependencies, build the React app, and deploy the `build` directory to the `gh-pages` branch.

**Step 4: Commit and Push Your Changes**

Once you have committed the `.github/workflows/deploy-gh-pages.yml` file to your repository and pushed it to GitHub, the workflow will trigger on the next push to the `main` branch.

**Step 5: GitHub Pages Configuration**

- Go to the settings of your GitHub repository.
- Scroll down to the "GitHub Pages" section.
- Under "Source", select the `gh-pages` branch and save the configuration.

**Step 6: View Your Deployed App**

After the GitHub Actions workflow has run successfully, your app should be publicly accessible at the URL you specified in the `homepage` field of your `package.json`.

Make sure to review the logs of the GitHub Actions workflow if the deployment does not work as expected. You might need to adjust certain configurations based on specific requirements for your project.

Lastly, remember that it can sometimes take a few minutes for your app to become accessible after deployment due to CDN caching and propagation delays.

**Note** Take care of repo permissions for action bot
