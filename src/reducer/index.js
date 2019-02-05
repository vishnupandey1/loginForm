const ADD_USER = 'ADD_USER';
const DELETE_USER ='DELETE_USER';

const initialState = {
  users:[]
}

export default (state = initialState, action) => {
  let  users = JSON.parse(localStorage.getItem("users") || "[]");
  switch (action.type) {
    case ADD_USER:
      users.push(action.users)
      localStorage.setItem("users", JSON.stringify(users));
      return {...state, users}
    case DELETE_USER:
      users = users.filter((user) => JSON.stringify(user) !== JSON.stringify(action.user))
      localStorage.setItem("users", JSON.stringify(users));
      return {...state, users}
   default:
      return {}
  }
}