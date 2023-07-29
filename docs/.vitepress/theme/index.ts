import { h } from 'vue'
import Theme from 'vitepress/theme'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import HomePage from '../components/HomePage.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
}
