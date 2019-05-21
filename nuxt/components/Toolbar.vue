<template>
  <VToolbar color="primary" dark>
    <VToolbarTitle data-testid="title" @click="$router.push('/')"
      >Hashtag Tracking</VToolbarTitle
    >

    <VSpacer />

    <VToolbarItems class="hidden-sm-and-down">
      <VBtn flat data-testid="about" @click="$router.push('/about')"
        >Sobre</VBtn
      >
    </VToolbarItems>
  </VToolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>
