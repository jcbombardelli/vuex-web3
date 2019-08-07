<template>
  <div class="central">
    <b-container fluid>
      <b-row>
        <b-col>
            <v-qrcode :value="address" :size="size" level="H"></v-qrcode>
        </b-col>
        <b-col>
          <b-card-body title="Balance">
            <b-card-text>
              {{balance}}
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col>
          <b-card-body title="Network">
            <b-card-text>
              {{network}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'home',
  data () {
    return {
      size: 300
    }
  },
  computed: {
    ...mapState({
      address: state => state.w3.coinbase,
      balance: state => state.w3.balance,
      network: state => state.w3.network
    })
  },
  components: {
    'v-qrcode': QrcodeVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.central{
  margin: 3%;
}
</style>
