let actions = store => ({
    login(state) {
      return { isLogged: true }
    },
    logout(state) {
        return { isLogged: false }
    },
    user(state, user) {
        return { user: user }
    },
    createList(state) {
        return { 
            createListIsClicked: true
        }
    },
    manageList(state) {
        return { 
            manageListIsClicked: true
        }
    }
})

export default actions;
  