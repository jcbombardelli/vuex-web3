<h1 align="center">Welcome to vuex-web3 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/jcbombardelli">
    <img alt="Twitter: jcbombardelli" src="https://img.shields.io/twitter/follow/jcbombardelli.svg?style=social" target="_blank" />
  </a>
</p>

> This web3 to a vuex state

### 🏠 [Homepage](https://jcbombardelli.github.io/vuex-web3)

## Prereqs
 
If you are running Windows OS and have never worked with Dapps, be sure to follow this tutorial first. https://medium.com/@jcbombardelli/configurando-web3-em-um-projeto-node-js-com-windows-984ca1224fa (pt-BR text)

## Install

```sh
npm install vuex-web3 --save
```

## Usage

```sh
import store from './vuex/store'
import registerWeb3 from 'vuex-web3'

registerWeb3(store, 'w3') 
// second parameter is module name is optional
```

# Exposed Getters:
```
address - need description
coinbase - String ETH Address Hex
instance - Function<Web3> Function that returns web3 instance
isInjected - Boolean True if web3 is injected
network - String Network
isLocal - Boolean True if web3 instance is connected to local node
balance - String Wallet balance
contract - same as web3.eth.contract
isConnected - same as web3.isConnected
```

## Run tests

```sh
npm run test
```

## Publish Package

```sh
npm run build
npm package
```

## Author

👤 **JC Bombardelli**

* Twitter: [@jcbombardelli](https://twitter.com/jcbombardelli)
* Github: [@jcbombardelli](https://github.com/jcbombardelli)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jcbombardelli/vuex-web3/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/jcbombardelli">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

<a href="https://app.picpay.com/user/jcbombardelli">
  <img src="https://logodownload.org/wp-content/uploads/2018/05/picpay-logo-8.png" width="100">
</a>


***
_This Project was created with ❤️ by JC Bombardelli and powered by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
