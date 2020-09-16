export const state = () => ({
  content: {}
})

export const mutations = {
  setContent (state, { name, value }) {
    return (state[name] = value)
  }
}
export const actions = {
  async fetchContent ({ commit }) {
    const data = await this.$axios.$get('/data/page.json')

    commit('setContent', { name: 'content', value: data })
  }
}

export const getters = {
  getSlider ({ content }) {
    return content.banners
  },
  getPromo ({ content }) {
    return content.promoblock
  },
  getAdvantages ({ content }) {
    return content.advantages
  },
  getProducts ({ content }) {
    return content.products
  },
  getFaq ({ content }) {
    return content.faq
  }
}
