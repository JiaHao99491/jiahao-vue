import { T as l, _ as h } from './chunks/lib.1tMO2kGh.js'
import {
  d as k,
  c as p,
  o,
  j as s,
  G as a,
  ae as r,
  a as e,
  w as t,
  k as n
} from './chunks/framework.D5jwEaSD.js'
const f = JSON.parse(
    '{"title":"Accordian Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/accordian.md","filePath":"components/accordian.md"}'
  ),
  E = { name: 'components/accordian.md' },
  m = k({
    ...E,
    setup(d) {
      return (c, i) => (
        o(),
        p('div', null, [
          i[2] ||
            (i[2] = s(
              'h1',
              { id: 'accordian-component', tabindex: '-1' },
              [
                e('Accordian Component '),
                s(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#accordian-component',
                    'aria-label': 'Permalink to "Accordian Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          i[3] ||
            (i[3] = s(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                e('Without any props '),
                s(
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
          a(n(h), null, {
            default: t(() => [
              a(
                n(l),
                { title: 'Panel 1' },
                { default: t(() => i[0] || (i[0] = [s('p', null, 'Panel 1 Content', -1)])), _: 1 }
              ),
              a(
                n(l),
                { title: 'Panel 2' },
                { default: t(() => i[1] || (i[1] = [s('p', null, 'Panel 2 Content', -1)])), _: 1 }
              )
            ]),
            _: 1
          }),
          i[4] || (i[4] = r('', 1))
        ])
      )
    }
  })
export { f as __pageData, m as default }
