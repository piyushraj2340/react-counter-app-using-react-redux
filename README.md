# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Learning React Redux and creating the first counter app using react-redux

## steps that require to learn the react-redux

1. install the package: npm install @reduxjs/toolkit react-redux

2. [creating a redux store](src/app/store.js#L4) 

3. [Provide the Redux Store to React](src/main.jsx#L6)

4. [Create a Redux State Slice](src/features/counter/counterSlice.js#L1)

5. [Add Slice Reducers to the Store](src/app/store.js#L10)

6. [Use Redux State and Actions in React Components](src/features/counter/Counter.jsx#L16)