import { v as s } from './chunks/lib.DxdC4lfY.js'
import {
  d as n,
  c as o,
  o as i,
  j as e,
  G as p,
  ae as r,
  a as t,
  k as d
} from './chunks/framework.D5jwEaSD.js'
const u = JSON.parse(
    '{"title":"Badge Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md"}'
  ),
  l = { name: 'components/badge.md' },
  _ = n({
    ...l,
    setup(h) {
      return (m, a) => (
        i(),
        o('div', null, [
          a[0] ||
            (a[0] = e(
              'h1',
              { id: 'badge-component', tabindex: '-1' },
              [
                t('Badge Component '),
                e(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#badge-component',
                    'aria-label': 'Permalink to "Badge Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          a[1] ||
            (a[1] = e(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                t('Without any props '),
                e(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#without-any-props',
                    'aria-label': 'Permalink to "Without any props"'
                  },
                  '​'
                )
              ],
              -1
            )),
          p(d(s)),
          a[2] || (a[2] = r('', 1))
        ])
      )
    }
  })
export { u as __pageData, _ as default }
