import { B as t } from './chunks/lib.1tMO2kGh.js'
import {
  d as n,
  c as e,
  o as p,
  j as s,
  G as l,
  ae as r,
  a as i,
  k as h
} from './chunks/framework.D5jwEaSD.js'
const g = JSON.parse(
    '{"title":"Avatar Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar.md","filePath":"components/avatar.md"}'
  ),
  o = { name: 'components/avatar.md' },
  m = n({
    ...o,
    setup(k) {
      return (d, a) => (
        p(),
        e('div', null, [
          a[0] ||
            (a[0] = s(
              'h1',
              { id: 'avatar-component', tabindex: '-1' },
              [
                i('Avatar Component '),
                s(
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
            (a[1] = s(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                i('Without any props '),
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
          l(h(t), {
            size: 'md',
            class: 'bg-green-500',
            src: 'https://i.pravatar.cc/150?img=1000000',
            placeholder: 'DK'
          }),
          a[2] || (a[2] = r('', 1))
        ])
      )
    }
  })
export { g as __pageData, m as default }
