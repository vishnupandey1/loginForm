const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER'

export const addUser = (users) => {
  return {
    type: ADD_USER,
    users
  }
}

export const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user
  }
}