<template>
  <VLayout wrap>
    <VFlex xs12 text-xs-center display-1
      >O Hashtag Tracking foi desenvolvido por:</VFlex
    >
    <VFlex xs12 text-xs-center>
      <VAvatar :size="200" color="grey lighten-4">
        <VImg
          src="https://avatars2.githubusercontent.com/u/35281738?s=460&v=4"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </VAvatar>
    </VFlex>
    <VFlex text-xs-center headline>Henrique de Castilhos</VFlex>
    <VFlex xs12 text-xs-center>
      <span v-for="social in socials" :key="social.icon">
        <a :href="social.url" target="_blank">
          <VBtn fab dark small color="primary">
            <VIcon dark>{{ social.icon }}</VIcon>
          </VBtn>
        </a>
      </span>
    </VFlex>
  </VLayout>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/henriquedecastilhos/'
        },
        { icon: 'mdi-github-circle', url: 'https://github.com/castilh0s/' }
      ]
    }
  }
}
</script>
