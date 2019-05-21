<template>
  <VFlex xs12>
    <VCard>
      <VCardText>
        <VLayout wrap>
          <VFlex xs12>
            <div class="subheading">
              <span class="font-weight-medium" data-testid="userName"
                >{{ tweet.user.name }}&nbsp;</span
              >
              <a
                :href="`https://twitter.com/${tweet.user.screenName}`"
                style="text-decoration: none"
                target="_blank"
                data-testid="userScreenName"
                >@{{ tweet.user.screenName }}</a
              >
            </div>
            <div data-testid="tweet">{{ tweet.text }}</div>
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
