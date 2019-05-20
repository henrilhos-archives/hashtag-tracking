<template>
  <VFlex xs12>
    <VCard>
      <VCardText>
        <VLayout wrap>
          <!-- <VFlex xs1 text-xs-center>
            <VAvatar color="grey lighten-4">
              <VImg
                :src="tweet.user.profileImageUrl"
                :lazy-src="tweet.user.profileImageUrl"
                aspect-ratio="1"
                class="grey lighten-2"
              />
            </VAvatar>
          </VFlex> -->
          <!-- <VFlex xs11> -->
          <VFlex xs12>
            <div class="subheading">
              <span class="font-weight-medium"
                >{{ tweet.user.name }}&nbsp;</span
              >
              <a
                :href="`https://twitter.com/${tweet.user.screenName}`"
                style="text-decoration: none"
                target="_blank"
                >@{{ tweet.user.screenName }}</a
              >
            </div>
            <div>{{ tweet.text }}</div>
            <div class="grey--text">
              {{ tweet.createdAt | moment('from') }} ({{
                tweet.createdAt | moment('DD/MM/YYYY - HH:mm:ss')
              }})
            </div>
          </VFlex>
        </VLayout>
      </VCardText>
    </VCard>
  </VFlex>
</template>

<script>
export default {
  name: 'TweetDisplay',
  props: {
    tweet: { type: Object, default: () => {} }
  }
}
</script>
