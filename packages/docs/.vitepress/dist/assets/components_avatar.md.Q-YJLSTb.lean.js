import { B as s } from './chunks/lib.DxdC4lfY.js'
import {
  d as n,
  c as o,
  o as i,
  j as t,
  G as r,
  ae as p,
  a as e,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const v = JSON.parse(
    '{"title":"Avatar Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar.md","filePath":"components/avatar.md"}'
  ),
  d = { name: 'components/avatar.md' },
  _ = n({
    ...d,
    setup(h) {
      return (m, a) => (
        i(),
        o('div', null, [
          a[0] ||
            (a[0] = t(
              'h1',
              { id: 'avatar-component', tabindex: '-1' },
              [
                e('Avatar Component '),
                t(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#avatar-component',
                    'aria-label': 'Permalink to "Avatar Component"'
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
          r(l(s)),
          a[2] || (a[2] = p('', 1))
        ])
      )
    }
  })
export { v as __pageData, _ as default }
