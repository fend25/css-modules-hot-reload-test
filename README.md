# css-modules-hot-reload-test

the problem: css-loader with modules: true performs localtion.reload every time instead just silently swap css in place.

now it works ok.

how to reproduce:
comment line 17 in index.js:

```if (module.hot) module.hot.accept(['./styles.css'], () => {})```

Initial config and file structure is taken from official webpack docs:
https://webpack.js.org/guides/hot-module-replacement/#hmr-with-stylesheets