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
            createListIsClicked: true,
            manageListIsClicked: false
        }
    },
    manageList(state) {
        return { 
            manageListIsClicked: true,
            createListIsClicked: false
        }
    },
    updateList(state) {
        return {
            updateListIsClicked: true
        }
    },

    allCategories(state) {
        return {
            allCategoriesIsClicked: true,
            carAndBikeIsClicked: false,
            realStateIsClicked: false, 
            modeAndBeautyIsClicked: false ,
            electronicsIsClicked: false
        }
    },
    carAndBike(state) {
        return {
            carAndBikeIsClicked: true,
            realStateIsClicked: false, 
            modeAndBeautyIsClicked: false ,
            electronicsIsClicked: false
        }
    },
    realState(state) {
        return {
            realStateIsClicked: true,
            carAndBikeIsClicked: false,
            modeAndBeautyIsClicked: false ,
            electronicsIsClicked: false
        }
    },
    modeAndBeauty(state) {
        return {
            modeAndBeautyIsClicked: true,
            realStateIsClicked: false,
            carAndBikeIsClicked: false,
            electronicsIsClicked: false
        }
    },
    electronics(state) {
        return {
            electronicsIsClicked: true,
            modeAndBeautyIsClicked: false,
            realStateIsClicked: false,
            carAndBikeIsClicked: false
        }
    }
})

export default actions;
  