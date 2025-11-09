import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Richasy 的博客',
  description: '一个专注于分享技术、生活与思考的个人博客。',
  href: 'https://richasy.net',
  author: 'Richasy',
  locale: 'zh-CN',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '博客',
  },
  {
    href: '/authors',
    label: '作者',
  },
  {
    href: '/about',
    label: '关于',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Richasy',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/RichasyZhang',
    label: 'Twitter',
  },
  {
    href: 'mailto:z.richasy@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
