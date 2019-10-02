<template>
  <component :is="layout"></component>
</template>

<script>
import LoginLayout from './layouts/Login';
import PrincipalLayout from './layouts/Principal';
import { mapState } from 'vuex';
export default {
  components: { LoginLayout, PrincipalLayout },
  computed: mapState(['layout'])
  /*data () {
    return {
      layout: 'principal-layout'
    }
  } */
}
</script>
