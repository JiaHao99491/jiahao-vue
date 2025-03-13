import { j as s } from './chunks/lib.DxdC4lfY.js'
import {
  d as n,
  c as o,
  o as i,
  j as e,
  G as l,
  ae as p,
  a as t,
  k as r
} from './chunks/framework.D5jwEaSD.js'
const u = JSON.parse(
    '{"title":"Table Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md"}'
  ),
  d = { name: 'components/table.md' },
  _ = n({
    ...d,
    setup(h) {
      return (m, a) => (
        i(),
        o('div', null, [
          a[0] ||
            (a[0] = e(
              'h1',
              { id: 'table-component', tabindex: '-1' },
              [
                t('Table Component '),
                e(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#table-component',
                    'aria-label': 'Permalink to "Table Component"'
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
          l(r(s)),
          a[2] || (a[2] = p('', 1))
        ])
      )
    }
  })
export { u as __pageData, _ as default }
