<template>
  <div>
    <BoxSide></BoxSide>
  </div>
</template>

<script>
// @ is an alias to /src
import BoxSide from '@/components/BoxSide.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'drawer',
  components: {
    HelloWorld,
    BoxSide
  }
}
</script>