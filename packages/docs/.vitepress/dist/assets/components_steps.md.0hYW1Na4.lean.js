import { M as a } from './chunks/lib.DxdC4lfY.js'
import {
  d as n,
  c as o,
  o as i,
  j as t,
  G as p,
  ae as r,
  a as s,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const _ = JSON.parse(
    '{"title":"Steps Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps.md","filePath":"components/steps.md"}'
  ),
  d = { name: 'components/steps.md' },
  k = n({
    ...d,
    setup(h) {
      return (m, e) => (
        i(),
        o('div', null, [
          e[0] ||
            (e[0] = t(
              'h1',
              { id: 'steps-component', tabindex: '-1' },
              [
                s('Steps Component '),
                t(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#steps-component',
                    'aria-label': 'Permalink to "Steps Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          e[1] ||
            (e[1] = t(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                s('Without any props '),
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
          p(l(a)),
          e[2] || (e[2] = r('', 1))
        ])
      )
    }
  })
export { _ as __pageData, k as default }
