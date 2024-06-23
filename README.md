# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Alias Path :

- @assets: src/assets
- @components: src/components
- @hooks: src/hooks
- @pages: src/pages
- @styles: src/styles

### Description

This configuration file uses the customize-cra library to add aliases to the Webpack configuration.

### Usage

To use this configuration file, you need to install the customize-cra package:

```sh
npm install customize-cra
```

Then, add the following line to your package.json file:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```

Finally, create a config-overrides.js file at the root of your project and paste the code above.

### How It Works

This configuration file uses the override function from customize-cra to add aliases to the Webpack configuration.
The addWebpackAlias function allows you to define aliases for specific paths in your project.
In this example, we define aliases for the assets, components, hooks, pages, and styles directories.
This allows you to import files from these directories using the aliases instead of the full path.
For example, instead of writing:

```javascript
import Header from "../../components/Header/Header";
```

You can write:

```javascript
import Header from "@components/Header/Header";
```

This makes the code cleaner and easier to read, especially in larger projects.

### Note

This configuration file assumes that your project has the following directory structure:

```
src/
├── assets/
├── components/
├── hooks/
├── pages/
├── styles/
```

If your project has a different directory structure, you can modify the aliases in the addWebpackAlias function to match your project's structure.
For example, if your components are located in the src/app/components directory, you can change the alias for components to:

```javascript
"@components": path.resolve(__dirname, "src/app/components"),
```

This will allow you to import components using the @components alias.

### Resources

- [customize-cra](https://www.npmjs.com/package/customize-cra)
- [Webpack resolve alias](https://webpack.js.org/configuration/resolve/#resolvealias)
