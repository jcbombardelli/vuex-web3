    
export default {
    setInjected(state, payload) {
      state.isInjected = payload
    },
    setInstance(state, payload) {
      state.instance = payload
    },
    setNetwork(state, payload) {
      state.network = payload
    },
    setLocal(state, payload) {
      state.isLocal = payload
    },
    setCoinbase(state, payload) {
      state.coinbase = payload
    },
    setAddress(state, payload) {
      state.address = payload
    },
    setBalance(state, payload) {
      state.balance = payload
    }
  }