<template>
  <div id="app">
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from "@/components/common/mainTabbar/TabBarMain";
export default {
  name: 'App',
  components: {
    TabBarMain
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
