import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default (store, moduleName = 'w3') => {
  
  store.registerModule(moduleName, {
    namespaced: false,
    state,
    getters,
    mutations,
    actions,
  })
  
  store.dispatch('initWeb3')
}