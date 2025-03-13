import { c as n } from './chunks/lib.1tMO2kGh.js'
import {
  d as l,
  c as t,
  o as e,
  j as i,
  G as p,
  ae as h,
  a,
  w as k,
  k as o
} from './chunks/framework.D5jwEaSD.js'
const E = JSON.parse(
    '{"title":"Menu Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/menu.md","filePath":"components/menu.md"}'
  ),
  c = { name: 'components/menu.md' },
  m = l({
    ...c,
    setup(F) {
      return (d, s) => (
        e(),
        t('div', null, [
          s[1] ||
            (s[1] = i(
              'h1',
              { id: 'menu-component', tabindex: '-1' },
              [
                a('Menu Component '),
                i(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#menu-component',
                    'aria-label': 'Permalink to "Menu Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          s[2] ||
            (s[2] = i(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                a('Without any props '),
                i(
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
          p(
            o(n),
            {
              items: [
                {
                  label: 'Item 1',
                  action: () => {
                    console.log('Item 1 clicked')
                  }
                },
                {
                  label: 'Item 2',
                  action: () => {
                    console.log('Item 2 clicked')
                  },
                  children: [
                    {
                      label: 'Item 2.1',
                      action: () => {
                        console.log('Item 2.1 clicked')
                      }
                    },
                    {
                      label: 'Item 2.2',
                      action: () => {
                        console.log('Item 2.2 clicked')
                      }
                    }
                  ]
                },
                {
                  label: 'Item 3',
                  action: () => {
                    console.log('Item 3 clicked')
                  }
                }
              ]
            },
            {
              default: k(
                () =>
                  s[0] ||
                  (s[0] = [
                    i(
                      'div',
                      null,
                      'Some stuff going on here that needs a custom context menu.',
                      -1
                    ),
                    i('div', null, 'Right click me to see context menu', -1)
                  ])
              ),
              _: 1
            },
            8,
            ['items']
          ),
          s[3] || (s[3] = h('', 1))
        ])
      )
    }
  })
export { E as __pageData, m as default }
