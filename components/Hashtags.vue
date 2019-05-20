<template>
  <VFlex xs12>
    <VCombobox v-model="hashtags" chips hide-details clearable solo multiple>
      <template v-slot:selection="data">
        <VChip
          :selected="data.selected"
          close
          @input="removeHashtag(data.item)"
          >{{ data.item }}</VChip
        >
      </template>
    </VCombobox>

    <VSnackbar v-model="snackbar" :timeout="5000" :top="true">
      {{ snackbarText }}
      <VBtn color="primary" flat @click="snackbar = false">
        Fechar
      </VBtn>
    </VSnackbar>
  </VFlex>
</template>

<script>
import { setInterval } from 'timers'

export default {
  name: 'Hashtags',
  data() {
    return {
      hashtags: [],
      snackbar: false,
      snackbarText: ''
    }
  },
  watch: {
    hashtags(oldValue, newValue) {
      if (newValue.length > oldValue.length) {
        this.createHashtag(newValue[newValue.length - 1])
      }
    }
  },
  mounted() {
    this.getHashtags()
    setInterval(() => {
      this.getHashtags()
    }, 5000)
  },
  methods: {
    getHashtags() {
      this.$axios.get('/hashtag').then(response => {
        this.hashtags = response.data.map(obj => obj.hashtag)
      })
    },
    createHashtag(item) {
      this.$axios.post('/hashtag', { hashtag: item }).then(() => {
        this.getHashtags()
        this.snackbar = true
        this.snackbarText = 'Hashtag cadastrada com sucesso'
      })
    },
    removeHashtag(item) {
      this.hashtags.splice(this.hashtags.indexOf(item), 1)
      this.hashtags = [...this.hashtags]

      this.$axios.delete(`/hashtag/${item}`).then(() => {
        this.snackbar = true
        this.snackbarText = 'Hashtag excluída com sucesso'
      })
    }
  }
}
</script>
