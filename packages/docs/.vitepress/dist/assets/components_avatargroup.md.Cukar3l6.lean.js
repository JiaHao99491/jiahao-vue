import { B as t, D as k } from './chunks/lib.1tMO2kGh.js'
import {
  d as n,
  c as p,
  o as e,
  j as l,
  G as s,
  ae as r,
  a as h,
  w as E,
  k as a
} from './chunks/framework.D5jwEaSD.js'
const F = JSON.parse(
    '{"title":"AvatarGroup Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatargroup.md","filePath":"components/avatargroup.md"}'
  ),
  o = { name: 'components/avatargroup.md' },
  u = n({
    ...o,
    setup(d) {
      return (g, i) => (
        e(),
        p('div', null, [
          i[0] ||
            (i[0] = l(
              'h1',
              { id: 'avatargroup-component', tabindex: '-1' },
              [
                h('AvatarGroup Component '),
                l(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#avatargroup-component',
                    'aria-label': 'Permalink to "AvatarGroup Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          i[1] ||
            (i[1] = l(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                h('Without any props '),
                l(
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
          s(
            a(k),
            { mask: 'circle', size: 'md' },
            {
              default: E(() => [
                s(a(t), { src: 'https://i.pravatar.cc/300?u=1' }),
                s(a(t), { placeholder: 'DK', class: 'bg-red-600' }),
                s(a(t), { src: 'https://i.pravatar.cc/300?u=3' }),
                s(a(t), { src: 'https://i.pravatar.cc/300?u=4' }),
                s(a(t), { placeholder: '99+', class: 'bg-gray-500' })
              ]),
              _: 1
            }
          ),
          i[2] || (i[2] = r('', 1))
        ])
      )
    }
  })
export { F as __pageData, u as default }
