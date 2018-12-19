export default {
  SET_USERS: (state, user) => {
    localStorage.setItem('name', user.name)
    localStorage.setItem('token', user.token)
    state.user = user
  },
  UNSET_USERS: state => {
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    state.user = {}
  }
}