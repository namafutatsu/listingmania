export default {
  computed: {
    heartColor () {
      if (this.highlightHeart) return '#333'
      if (this.event && this.$store.getters.isLiked(this.event)) return '#D16E47'
      return '#999'
    },
  },
  methods: {
    doHighlightHeart () {
      this.highlightHeart = true
    },
    resetHeart () {
      this.highlightHeart = false
    },
    likeEvent: async function () {
      if (!this.$store.state.user) {
        this.$store.commit('showLoginForm', true)
      } else {
        await this.event.doLike()
        this.resetHeart()
      }
    },
  },
}
