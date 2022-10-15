import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    alias: {
      '@theme/HomeHero.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/HomeFeatures.vue': path.resolve(__dirname, './components/MyHomeFooter.vue'),
      '@theme/HomeContent.vue': path.resolve(__dirname, './components/MyHomeFooter.vue'),
      '@theme/HomeFooter.vue': path.resolve(__dirname, './components/MyHomeFooter.vue'),
    },
  }
}