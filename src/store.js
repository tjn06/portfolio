import { createStore /*storeKey */ } from 'vuex'

const mutations = {
    changeCurrentItemFromNav(state, payload) {
      state.fromNavObj = {
        ...state.fromNavOb,
        itemIndex: payload.index,
        fromNav: payload.fromNav
      }
    },
    changeCurrentItem(state, currentItem) {
      if (state.currentItem !== currentItem) {
        state.currentItem = currentItem
      }

      if (state?.fromNavObj?.itemIndex !== currentItem) {
        state.fromNavObj = {
          ...state.fromNavObj,
          itemIndex: currentItem,
          fromNav: false
        }
      }
    },
    changeHeaderStyleOnce(state) {
      state.changedPageOnce = true
    }
  },
  state = {
    currentItem: 0,
    fromNavObj: { itemIndex: 0, fromNav: false },
    changedPageOnce: false
  },
  getters = {}

export default createStore({ mutations, state, getters, strict: true })
