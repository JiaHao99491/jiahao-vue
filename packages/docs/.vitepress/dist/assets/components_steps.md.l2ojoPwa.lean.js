import { M as e } from './chunks/lib.1tMO2kGh.js'
import {
  d as n,
  c as p,
  o,
  j as t,
  G as l,
  ae as h,
  a,
  k as r
} from './chunks/framework.D5jwEaSD.js'
const m = JSON.parse(
    '{"title":"Steps Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps.md","filePath":"components/steps.md"}'
  ),
  k = { name: 'components/steps.md' },
  y = n({
    ...k,
    setup(d) {
      const i = ['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']
      return (E, s) => (
        o(),
        p('div', null, [
          s[0] ||
            (s[0] = t(
              'h1',
              { id: 'steps-component', tabindex: '-1' },
              [
                a('Steps Component '),
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
          s[1] ||
            (s[1] = t(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                a('Without any props '),
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
          l(r(e), { steps: i, layout: 'horizontal', color: 'primary' }),
          s[2] || (s[2] = h('', 1))
        ])
      )
    }
  })
export { m as __pageData, y as default }
