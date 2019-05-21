<template>
  <VLayout wrap>
    <VFlex xs12 title>Hashtags</VFlex>
    <Hashtags />
    <VFlex xs12 title>Tweets encontrados</VFlex>
    <TweetDisplay v-for="(tweet, i) in visibleTweets" :key="i" :tweet="tweet" />
    <VFlex xs12 text-xs-center>
      <VPagination
        v-model="page"
        color="primary"
        :length="Math.ceil(tweets.length / pageSize)"
      />
    </VFlex>
  </VLayout>
</template>

<script>
import TweetDisplay from '@/components/TweetDisplay.vue'
import Hashtags from '@/components/Hashtags.vue'

export default {
  name: 'Home',
  components: {
    TweetDisplay,
    Hashtags
  },
  data() {
    return {
      tweets: [],
      visibleTweets: [],
      page: 1,
      pageSize: 15
    }
  },
  watch: {
    page() {
      this.updateVisibleTweets()
    }
  },
  mounted() {
    this.getTweets()
    setInterval(() => {
      this.getTweets()
    }, 5000)
  },
  methods: {
    getTweets() {
      this.$axios.get('/api/tweets').then(res => {
        this.tweets = res.data
        this.updateVisibleTweets()
      })
    },
    updateVisibleTweets() {
      this.visibleTweets = this.tweets.slice(
        this.page * this.pageSize - this.pageSize,
        this.page * this.pageSize
      )
    }
  }
}
</script>
