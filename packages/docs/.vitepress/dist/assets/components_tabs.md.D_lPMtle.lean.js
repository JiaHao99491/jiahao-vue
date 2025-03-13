import { u as s } from './chunks/lib.DxdC4lfY.js'
import {
  d as n,
  c as o,
  o as i,
  j as t,
  G as p,
  ae as r,
  a as e,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const b = JSON.parse(
    '{"title":"Tabs Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md"}'
  ),
  d = { name: 'components/tabs.md' },
  _ = n({
    ...d,
    setup(h) {
      return (m, a) => (
        i(),
        o('div', null, [
          a[0] ||
            (a[0] = t(
              'h1',
              { id: 'tabs-component', tabindex: '-1' },
              [
                e('Tabs Component '),
                t(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#tabs-component',
                    'aria-label': 'Permalink to "Tabs Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          a[1] ||
            (a[1] = t(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                e('Without any props '),
                t(
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
          p(l(s)),
          a[2] || (a[2] = r('', 1))
        ])
      )
    }
  })
export { b as __pageData, _ as default }
