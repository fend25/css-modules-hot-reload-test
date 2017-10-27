# css-modules-hot-reload-test

the problem: css-loader with modules: true performs localtion.reload every time instead just silently swap css in place.

now it wokrs ok.

how to reproduce:
comment line 17 in index.js:

```if (module.hot) module.hot.accept(['./styles.css'], () => {})```