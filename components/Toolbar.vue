<template>
  <VToolbar color="primary" dark>
    <VToolbarTitle @click="$router.push('/')">Hashtag Tracking</VToolbarTitle>

    <VSpacer />

    <VToolbarItems class="hidden-sm-and-down">
      <VBtn flat @click="$router.push('/about')">Sobre</VBtn>
    </VToolbarItems>
  </VToolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>
