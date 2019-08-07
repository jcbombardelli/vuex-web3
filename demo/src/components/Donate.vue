<template>
  <div class='container container-top'>
    <b-container>
      <b-card-group deck>
        <b-card border-variant='info' header='Info'>
          <h6 slot='header' class='mb-0'>Ethereum Address</h6>
          <v-qrcode :value='ethAddrDonate' :size='size' level='H' align='center' />
          <b-card-text align='center'>{{ethAddrDonate}}</b-card-text>
          <b-container>
          <b-row align=center >
              <b-col sm="12" md="8" lg="8" class="mb-3">
                <b-input v-model='ethValueDonate'></b-input>
              </b-col>
              <b-col sm="12" md="4" lg="4">
                <b-button variant='info' @click='donateEth()'>DONATE ETH</b-button>
              </b-col>
          </b-row>
          </b-container>

        </b-card>

        <b-card border-variant='info' header='Info' align='center'>
          <h6 slot='header' class='mb-0'>Bitcoin Address</h6>
          <v-qrcode :value='btcAddrDonate' :size='size' level='H' align='center' />
          <b-card-text align='center'>{{btcAddrDonate}}</b-card-text>
          <b-button v-bind:href='btcLinkDonate' variant='info'>DONATE BTC</b-button>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'donate',
  components: {
    'v-qrcode': QrcodeVue
  },
  data () {
    return {
      width: 0,
      ethAddrDonate: '0x01010c1e959792ed4fd41af900d859764863d1c1',
      btcAddrDonate: '1E7rpBVR72ESovBoGDzLuwv1RTssLe5Vya',
      btcLinkDonate: `bitcoin:1E7rpBVR72ESovBoGDzLuwv1RTssLe5Vya`,
      btcValueDonate: 0,
      ethValueDonate: '0.005'
    }
  },
  computed: {
    size () {
      return Math.min(parseInt(this.width * 0.3), 400)
    },
    ...mapState({
      address: state => state.w3.coinbase,
      balance: state => state.w3.balance,
      network: state => state.w3.network,
      w3: state => state.w3.instance
    })
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    },
    donateEth () {
      this.w3().eth.sendTransaction(
        {
          to: this.ethAddrDonate,
          from: this.address,
          value: this.w3().utils.toWei(this.ethValueDonate, 'ether')
        },
        function (err, transactionHash) {
          if (err) return alert('Thanks for trying out!')
          alert('Thanks for the generosity!!')
        })
    }
  }
}
</script>

<style scoped>
.container-top {
  margin-top: 2%;
}
.card-header {
  background-color: rgba(0, 0, 0, 0.000000001);
  border-bottom: 0px;
}
</style>
