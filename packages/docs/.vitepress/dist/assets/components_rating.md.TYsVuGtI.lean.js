import { d as i } from './chunks/lib.1tMO2kGh.js'
import {
  d as e,
  c as n,
  o,
  j as t,
  G as r,
  ae as p,
  a as s,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const c = JSON.parse(
    '{"title":"Rating Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'
  ),
  h = { name: 'components/rating.md' },
  u = e({
    ...h,
    setup(d) {
      return (k, a) => (
        o(),
        n('div', null, [
          a[0] ||
            (a[0] = t(
              'h1',
              { id: 'rating-component', tabindex: '-1' },
              [
                s('Rating Component '),
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
          r(l(i), { class: 'bg-red-500', mask: 'heart' }),
          a[2] || (a[2] = p('', 1))
        ])
      )
    }
  })
export { c as __pageData, u as default }
