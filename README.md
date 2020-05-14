# @gluecodes/todomvc

This is an implementation of TodoMVC app from http://todomvc.com/. It's meant to show you the code structure of an app generated with GlueCodes Platform (https://www.glue.codes). Enjoy exploring!

## Prerequisites

Docker

## Usage

- Run:
```bash  
cp .env_template .env 
```
- Run: 
```bash 
docker-compose up 
```
- When Webpack dev server started, run: 
```bash 
docker exec -it gluecodes_todomvc npm run prerender && docker exec -it gluecodes_todomvc npm run build  
```
- Go to http://localhost:5000

### Optional

Open Chrome DevTools and do CTRL+SHIFT+P and disable JavaScript to check prerendering

## File structure

```
.
├── Dockerfile
├── README.md
├── buildStamp.js
├── docker-compose.yml
├── package.json
├── postcss.config.js
├── src
│   ├── actions -->                       # App actions
│   │   ├── commands -->                  # Actions triggered by the user
│   │   │   ├── addTodo
│   │   │   │   └── index.js
│   │   │   ├── clearCompletedTodos
│   │   │   │   └── index.js
│   │   │   ├── destroyTodo
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── makeTodoEditable
│   │   │   │   └── index.js
│   │   │   ├── markAllTodosAs
│   │   │   │   └── index.js
│   │   │   ├── modifyTodo
│   │   │   │   └── index.js
│   │   │   └── setTodosFilter
│   │   │       └── index.js
│   │   └── providers -->                 # Actions to be executed before initial rendering
│   │       ├── getCompletedTodosCount
│   │       │   └── index.js
│   │       ├── getFilteredTodos
│   │       │   └── index.js
│   │       ├── getRemainingTodosCount
│   │       │   └── index.js
│   │       ├── getTodos
│   │       │   └── index.js
│   │       ├── index.js
│   │       └── parseUrlQueryParams
│   │           └── index.js
│   ├── init -->                          # Framework initializations
│   │   ├── page.js
│   │   ├── renderer.js
│   │   └── store.js
│   ├── mediaFiles
│   │   └── images
│   │       └── favicon.ico
│   ├── pageTemplates
│   │   └── index
│   │       └── index.ejs
│   ├── pages -->                         # Available pages
│   │   └── index
│   │       ├── index.js -->              # Page entry point
│   │       ├── layout.jsx -->            # Layout JSX
│   │       ├── prerender.js -->          # Layut static HTML used for prerender
│   │       ├── settings.js
│   │       ├── slots -->                 # Sections of UI
│   │       │   ├── bottomBar
│   │       │   │   ├── index.jsx -->     # Section JSX
│   │       │   │   ├── prerender.js -->  # Section HTML used by prerender
│   │       │   │   └── styles.css        # Section styles
│   │       │   ├── index.js
│   │       │   └── list
│   │       │       ├── index.jsx
│   │       │       ├── prerender.js
│   │       │       └── styles.css
│   │       └── styles.css -->            # Layout styles
│   └── reusables -->                     # Stuff reusable accross the app
│       ├── footers -->                   # Reusable piece of UI which repeats accross the app
│       │   └── public
│       │       ├── index.jsx
│       │       ├── prerender.js
│       │       └── styles.css
│       ├── functions -->                 # Utility functions, model functions etc.
│       │   ├── getTodosFromStorage
│       │   │   └── index.js
│       │   ├── index.js
│       │   ├── parseUrlQueryParams
│       │   │   └── index.js
│       │   ├── setUrlQueryParam
│       │   │   └── index.js
│       │   └── storeTodos
│       │       └── index.js
│       └── headers
│           └── public
│               ├── index.jsx
│               ├── prerender.js
│               └── styles.css
├── webpack
│   ├── app.js
│   ├── configs
│   │   ├── cssRules.js
│   │   ├── index.js
│   │   ├── mediaFileRules.js
│   │   ├── miniCssExtractPlugin.js
│   │   └── pageSettings.js
│   └── prerenders.js
└── yarn.lock
```

## Scripts

Prerender:
```bash 
docker exec -it gluecodes_todomvc npm run prerender 
```

Build:
```bash 
docker exec -it gluecodes_todomvc npm run build
 ```

Lint:
```bash  
docker exec -it gluecodes_todomvc npm run lint
```

Start (used in Docker Compose):
```bash  
npm run start
```

### License

[MIT](https://github.com/gluecodes/gluecodes-todomvc/blob/master/LICENSE.md)
