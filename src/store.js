import { createStore /*storeKey */ } from 'vuex'

const mutations = {
  changeCurrentItemFromNav(state, payload ) {
    state.fromNavObj = {...state.fromNavOb, itemIndex: payload.index, fromNav: payload.fromNav}
  },
    changeCurrentItem(state, currentItem) {
      state.currentItem = currentItem
      state.fromNavObj = {...state.currentItem, itemIndex: currentItem, fromNav: false}
    },
    changeHeaderStyleOnce(state) {
      // console.log('Changed initialHeaderStyle once')
      state.initialHeaderStyle = true
    },
  },
  state = {
    currentItem: 0,
    fromNavObj: {itemIndex: 0, fromNav: false},
    initialHeaderStyle: false
  },
  getters = {}

export default createStore({ mutations, state, getters, strict: true })
