/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '文档', link: '/guide/start/main/', activeMatch: '/guide/', icon: 'material-symbols:book' },
  { text: '博客', link: '/blog/', activeMatch: '/blog/', icon: 'mdi:pen' },
])
