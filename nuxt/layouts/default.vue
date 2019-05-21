<template>
  <VApp id="app">
    <Toolbar />
    <VContainer grid-list-lg>
      <nuxt />
    </VContainer>
  </VApp>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  components: { Toolbar }
}
</script>
