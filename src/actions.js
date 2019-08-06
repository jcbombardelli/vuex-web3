import Web3 from 'web3'
const sleep = (ms = 1000) => new Promise((resolve, reject) => setTimeout(resolve, ms))

export default {
  connectToWeb3: ({ commit }) =>
    new Promise((resolve, reject) => {

        if(window.ethereum){
            ethereum.enable()
                .then(async () => {
                    window.web3 = window.ethereum
                    const w3 = new Web3(window.web3)

                    const isInject = await w3.eth.net.isListening()
                    commit('setInjected', isInject)
                    commit('setInstance', () => w3)
                    commit('setLocal', false)
                    resolve(w3)
                })
                .catch(error => reject(error))
        }
    }),

  getBlockchainNetwork: ({ commit, state }) =>
    new Promise((resolve, reject) => {
      state.instance().eth.net.getNetworkType()
        .then(network => {
          commit('setNetwork', network)
          resolve(network)
        })
        .catch(error  => reject(error))
    }),

  getCoinbase: ({ commit, state }) =>
    new Promise((resolve, reject) => {
      state.instance().eth.getCoinbase((err, coinbase) => {
        if (err) {
          if (state.address) {
            commit('setCoinbase', state.address)
            resolve(state.address)
          }
          reject(err)
        } else {
          if (state.coinbase !== coinbase) commit('setCoinbase', coinbase || state.address)
          resolve(coinbase)
        }
      })
    }),

  getBalance: ({ commit, state }) =>
    new Promise((resolve, reject) => {
      const coinbase = state.coinbase
      if (!coinbase) {
        return resolve('0')
      }
      state.instance().eth.getBalance(state.coinbase, (err, result) => {
        if (err) {
          reject(err)
        } else {
          const balance = state.instance().utils.fromWei(result.toString(10), 'ether')
          if (state.balance !== balance) commit('setBalance', balance)
          resolve(balance)
        }
      })
  }),

  async monitorWeb3({ state, dispatch, commit }) {
    while (true) {
      await sleep(1000)
      try {
        const address = await dispatch('getCoinbase')
        if (address !== state.address) commit('setAddress', address)
      } catch (err) {
        console.log('get coinbase error:', err)
      }
      try {
        await dispatch('getBalance')
      } catch (err) {
        console.log('get balance error:', err)
      }
    }
  },

  async initWeb3({ dispatch, commit }) {
    await dispatch('connectToWeb3')
    await dispatch('getBlockchainNetwork')
    try {
      commit('setAddress', await dispatch('getCoinbase'))
    } catch (err) {
      console.log('get coinbase error:', err)
    }
    try {
      await dispatch('getBalance')
    } catch (err) {
      console.log('get balance error:', err)
    }
    
    dispatch('monitorWeb3')
  },
}