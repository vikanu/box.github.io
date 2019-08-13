<template>
  <div class="home">
    <box-button :rounded="false" color="green" size="small">Submit</box-button>
    <box-edit></box-edit>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
