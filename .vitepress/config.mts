import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import sidebar from './sidebar'
import { description, docsVersion, github, keywords, name, site } from './meta'

import algolia from "./algolia";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: "Junlin Docs",
    lang: "zh-CN",
    description: "Front-end learning document collection",
    lastUpdated: true,
    locales: {
      root: { label: "简体中文", lang: "zh-CN" },
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "主页", link: "/" },
        { text: "总结or计划",
          items: [
            { text: '总结', link: '/summaryPlanning/summary/' },
            { text: '计划', link: '/summaryPlanning/planning/' },
          ]
        },
        { text: "编程",
          items: [
            { text: '实战', link: '/programming/actualCombat/' },
            { text: '学习', link: '/programming/study/' },
          ]
        },
      ],

      sidebar,

      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],
      editLink: {
        pattern: `${github}/tree/main/docs/:path`,
        text: '在 GitHub 上编辑此页',
      },
      lastUpdatedText: '最后一次更新于',
      footer: {
        message: `用心去做高质量的专业前端内容网站，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,
        copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">MIT License</a> | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="${github}">Chocolate and ChoDocs contributors</a>`,
      },
      algolia,
    },
  })
);
