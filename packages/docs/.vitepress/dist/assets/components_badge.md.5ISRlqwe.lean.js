import { v as s } from './chunks/lib.1tMO2kGh.js'
import {
  d as o,
  c as n,
  o as i,
  j as e,
  G as r,
  ae as p,
  a as t,
  w as d,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const k = JSON.parse(
    '{"title":"Badge Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md"}'
  ),
  m = { name: 'components/badge.md' },
  _ = o({
    ...m,
    setup(h) {
      return (c, a) => (
        i(),
        n('div', null, [
          a[1] ||
            (a[1] = e(
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
          a[2] ||
            (a[2] = e(
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
          r(
            l(s),
            { color: 'primary', size: 'md' },
            { default: d(() => a[0] || (a[0] = [t('24')])), _: 1 }
          ),
          a[3] || (a[3] = p('', 1))
        ])
      )
    }
  })
export { k as __pageData, _ as default }
