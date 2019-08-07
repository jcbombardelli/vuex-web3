<template>
  <div class="container container-top">
    <b-container>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col sm="12" md="9" lg="7">
          <b-card border-variant="info" header="Info" align="center" >
            <v-qrcode :value="address" :size="size" level="H" slot="header"/>

            <h5>Address</h5>
            <h6>{{address}}</h6>

            <b-card-body>
              <b-card-title>Balance</b-card-title>
              <b-card-sub-title class="mb-2">Ξ {{balance}}</b-card-sub-title>
              <b-card-text>{{network}}</b-card-text>
            </b-card-body>

          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'home',
  components: {
    'v-qrcode': QrcodeVue
  },
  data () {
    return {
      width: 0
    }
  },
  computed: {
    size () {
      return Math.min(parseInt(this.width * 0.30), 500)
    },
    ...mapState({
      address: state => state.w3.coinbase,
      balance: state => state.w3.balance,
      network: state => state.w3.network
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-top{
  margin-top: 2%;
}
.card-header{
  background-color: rgba(0, 0, 0, 0.000000001);
  border-bottom: 0px;
}
</style>
