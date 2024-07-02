# Webpack

Webpack is a static module bundler for modern JS apps. Essentially, it's a program which processes your application and builds a dependency graph from one or more entry points and 'bundles' or combines all these into one or two bundles that your app absolutely needs in order to function.

The essential concepts / parts / aspects to know about in webpack:

- **Entry (Entry point)**: The module where webpack starts out building the app's dependency graph. The first module to be processed.

- **Output**: Where all the bundles are bundled after being processed by webpack.

- **Loaders**: These enable webpack to be able to process all other types of files apart from JavaScript and JSON files.

- **Plugins**: Help webpack to perform other wider range of tasks such as bundle optimization etc. Basically used by webpack to perform any other tasks that the in-built loaders can't already do.

- **Modes**: Can be either: 'development', 'production' or 'none'. Setting any would cause webpack to enable the built-in optimizations for the selected environment.

- **Browser compatibility**: Webpack only works on browsers which are ES5-compliant.

### Resources:

- [Webpack Documentation](https://webpack.js.org/concepts/)

- [Webpack beginner guide](https://www.sitepoint.com/webpack-beginner-guide/)

- [Webpack configuration documentation 4 DevServer](https://webpack.js.org/configuration/dev-server/)