# vue_pc

> 此项目是对[pep_vue](https://github.com/zockbell/pep_vue)移动端的补充，此架构是用iview生成的PC端的基础应用结构。

## 目录结构
```
vue_pc
│  .babelrc
│  .gitignore
│  babel.config.js
│  cypress.json
│  info.txt
│  package.json
│  README.md
│  tsconfig.json
│  tslint.json
│  vue.config.js
│  yarn.lock
│  
├─public
│  │  favicon.ico
│  │  index.html
│  │  robots.txt
│  │  
│  └─img
│      └─icons
│              android-chrome-192x192.png
│              android-chrome-512x512.png
│              apple-touch-icon-120x120.png
│              apple-touch-icon-152x152.png
│              apple-touch-icon-180x180.png
│              apple-touch-icon-60x60.png
│              apple-touch-icon-76x76.png
│              apple-touch-icon.png
│              favicon-16x16.png
│              favicon-32x32.png
│              msapplication-icon-144x144.png
│              mstile-150x150.png
│              safari-pinned-tab.svg
│              
├─src
│  │  App.vue
│  │  main.ts
│  │  registerServiceWorker.ts
│  │  shims-tsx.d.ts
│  │  shims-vue.d.ts
│  │  
│  ├─api
│  │      axiosConfig.js
│  │      http.js
│  │      
│  ├─assets
│  │  │  logo.png
│  │  │  
│  │  ├─fonts
│  │  │      demo.css
│  │  │      demo_index.html
│  │  │      iconfont.css
│  │  │      iconfont.eot
│  │  │      iconfont.js
│  │  │      iconfont.json
│  │  │      iconfont.svg
│  │  │      iconfont.ttf
│  │  │      iconfont.woff
│  │  │      iconfont.woff2
│  │  │      
│  │  ├─images
│  │  │      gray_2.png
│  │  │      logo.png
│  │  │      pep.png
│  │  │      
│  │  └─styles
│  │      │  404.scss
│  │      │  about.scss
│  │      │  common.scss
│  │      │  home.scss
│  │      │  login.scss
│  │      │  read.scss
│  │      │  
│  │      ├─components
│  │      │      count.scss
│  │      │      headerNav.scss
│  │      │      loading.scss
│  │      │      tab.scss
│  │      │      
│  │      └─variable
│  │              variable.scss
│  │              
│  ├─components
│  │      Count.vue
│  │      HelloWorld.vue
│  │      
│  ├─router
│  │      index.ts
│  │      
│  ├─store
│  │  │  index.ts
│  │  │  
│  │  ├─modules
│  │  │      count.ts
│  │  │      
│  │  └─mutationsType
│  │          index.ts
│  │          
│  ├─utils
│  │      cookie.js
│  │      cookies.ts
│  │      filters.ts
│  │      
│  └─views
│      ├─404
│      │      index.vue
│      │      
│      ├─About
│      │      index.vue
│      │      
│      ├─Home
│      │      index.vue
│      │      
│      ├─Login
│      │      index.vue
│      │      
│      └─Read
│              index.vue
│              
└─tests
    ├─e2e
    │  ├─plugins
    │  │      index.js
    │  │      
    │  ├─specs
    │  │      test.js
    │  │      
    │  └─support
    │          commands.js
    │          index.js
    │          
    └─unit
            example.spec.ts
```

## 案例demo地址：
```
http://62.234.25.173/pep_pc/
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
