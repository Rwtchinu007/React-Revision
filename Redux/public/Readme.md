<!-- This folder is all about redux and redux toolkit  -->
step by step process
1. create store using configureStore @reduxjs-toolkit
2. Provide store in main.jsx file using Provider from react-redux
3. then create slice using createSlice form @redux-toolkit
4. then in slice name the feature,initial state and reducers
5. export default reducer
6. named export the reducers using slice.actions
7. then provide the exported reducer in store.js
8. then using useSelector and useDispatch use it to show data to the ui and also import named exports here