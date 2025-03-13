import { d as n } from './chunks/lib.DxdC4lfY.js'
import {
  d as s,
  c as i,
  o,
  j as t,
  G as r,
  ae as p,
  a as e,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const u = JSON.parse(
    '{"title":"Rating Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'
  ),
  d = { name: 'components/rating.md' },
  _ = s({
    ...d,
    setup(h) {
      return (m, a) => (
        o(),
        i('div', null, [
          a[0] ||
            (a[0] = t(
              'h1',
              { id: 'rating-component', tabindex: '-1' },
              [
                e('Rating Component '),
                t(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#rating-component',
                    'aria-label': 'Permalink to "Rating Component"'
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
          r(l(n)),
          a[2] || (a[2] = p('', 1))
        ])
      )
    }
  })
export { u as __pageData, _ as default }
