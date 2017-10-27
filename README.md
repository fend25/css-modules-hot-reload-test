# css-modules-hot-reload-test

the problem: css-loader with modules: true performs localtion.reload every time instead just silently swap css in place.

now it performs location.reload on any css file change.

steps to switch off css modules:

1. webpack.config.js: `modules: false`
2. index.js: `import style from './styles.css'` -> `import './styles.css'`
3. index.js: `element.className = style.test` -> `element.className = 'test'`

and now css hmr will wokr ok (it won't do location.reload, just will swap css)
