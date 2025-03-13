import { i as k, u as e } from './chunks/lib.1tMO2kGh.js'
import {
  d as n,
  c as E,
  o as d,
  j as i,
  G as t,
  a,
  w as l,
  k as h
} from './chunks/framework.D5jwEaSD.js'
const b = JSON.parse(
    '{"title":"Tabs","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md"}'
  ),
  r = { name: 'components/tabs.md' },
  f = n({
    ...r,
    setup(y) {
      return (p, s) => (
        d(),
        E('div', null, [
          s[12] ||
            (s[12] = i(
              'h1',
              { id: 'tabs', tabindex: '-1' },
              [
                a('Tabs '),
                i(
                  'a',
                  { class: 'header-anchor', href: '#tabs', 'aria-label': 'Permalink to "Tabs"' },
                  '​'
                )
              ],
              -1
            )),
          s[13] ||
            (s[13] = i(
              'h3',
              { id: 'lifted', tabindex: '-1' },
              [
                a('Lifted '),
                i(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#lifted',
                    'aria-label': 'Permalink to "Lifted"'
                  },
                  '​'
                )
              ],
              -1
            )),
          t(
            h(e),
            { type: 'lifted' },
            {
              default: l(() => [
                t(
                  h(k),
                  { name: 'Preview' },
                  {
                    default: l(() => [
                      t(
                        h(e),
                        { type: 'lifted' },
                        {
                          default: l(() => [
                            t(
                              h(k),
                              { name: 'Tab 1' },
                              { default: l(() => s[0] || (s[0] = [a('Tab 1 Content')])), _: 1 }
                            ),
                            t(
                              h(k),
                              { name: 'Tab 2' },
                              { default: l(() => s[1] || (s[1] = [a('Tab 2 Content')])), _: 1 }
                            ),
                            t(
                              h(k),
                              { name: 'Tab 3' },
                              { default: l(() => s[2] || (s[2] = [a('Tab 3 Content')])), _: 1 }
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                t(
                  h(k),
                  { name: 'Code' },
                  {
                    default: l(
                      () =>
                        s[3] ||
                        (s[3] = [
                          i(
                            'div',
                            { class: 'language-html vp-adaptive-theme' },
                            [
                              i('button', { title: 'Copy Code', class: 'copy' }),
                              i('span', { class: 'lang' }, 'html'),
                              i(
                                'pre',
                                {
                                  class: 'shiki shiki-themes github-light github-dark vp-code',
                                  tabindex: '0'
                                },
                                [
                                  i('code', null, [
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '<'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTabs'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' type'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"lifted"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 1"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 1 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 2"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 2 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 3"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 3 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTabs'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            -1
                          )
                        ])
                    ),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          ),
          s[14] ||
            (s[14] = i(
              'h3',
              { id: 'bordered', tabindex: '-1' },
              [
                a('Bordered '),
                i(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#bordered',
                    'aria-label': 'Permalink to "Bordered"'
                  },
                  '​'
                )
              ],
              -1
            )),
          t(
            h(e),
            { type: 'lifted' },
            {
              default: l(() => [
                t(
                  h(k),
                  { name: 'Preview' },
                  {
                    default: l(() => [
                      t(
                        h(e),
                        { type: 'bordered' },
                        {
                          default: l(() => [
                            t(
                              h(k),
                              { name: 'Tab 1' },
                              { default: l(() => s[4] || (s[4] = [a('Tab 1 Content')])), _: 1 }
                            ),
                            t(
                              h(k),
                              { name: 'Tab 2' },
                              { default: l(() => s[5] || (s[5] = [a('Tab 2 Content')])), _: 1 }
                            ),
                            t(
                              h(k),
                              { name: 'Tab 3' },
                              { default: l(() => s[6] || (s[6] = [a('Tab 3 Content')])), _: 1 }
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                t(
                  h(k),
                  { name: 'Code' },
                  {
                    default: l(
                      () =>
                        s[7] ||
                        (s[7] = [
                          i(
                            'div',
                            { class: 'language-html vp-adaptive-theme' },
                            [
                              i('button', { title: 'Copy Code', class: 'copy' }),
                              i('span', { class: 'lang' }, 'html'),
                              i(
                                'pre',
                                {
                                  class: 'shiki shiki-themes github-light github-dark vp-code',
                                  tabindex: '0'
                                },
                                [
                                  i('code', null, [
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '<'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTabs'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' type'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"bordered"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 1"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 1 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 2"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 2 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 3"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 3 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTabs'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            -1
                          )
                        ])
                    ),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          ),
          s[15] ||
            (s[15] = i(
              'h3',
              { id: 'boxed', tabindex: '-1' },
              [
                a('Boxed '),
                i(
                  'a',
                  { class: 'header-anchor', href: '#boxed', 'aria-label': 'Permalink to "Boxed"' },
                  '​'
                )
              ],
              -1
            )),
          t(
            h(e),
            { type: 'lifted' },
            {
              default: l(() => [
                t(
                  h(k),
                  { name: 'Preview' },
                  {
                    default: l(() => [
                      t(
                        h(e),
                        { type: 'boxed' },
                        {
                          default: l(() => [
                            t(
                              h(k),
                              { name: 'Tab 1' },
                              { default: l(() => s[8] || (s[8] = [a('Tab 1 Content')])), _: 1 }
                            ),
                            t(
                              h(k),
                              { name: 'Tab 2' },
                              { default: l(() => s[9] || (s[9] = [a('Tab 2 Content')])), _: 1 }
                            ),
                            t(
                              h(k),
                              { name: 'Tab 3' },
                              { default: l(() => s[10] || (s[10] = [a('Tab 3 Content')])), _: 1 }
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                t(
                  h(k),
                  { name: 'Code' },
                  {
                    default: l(
                      () =>
                        s[11] ||
                        (s[11] = [
                          i(
                            'div',
                            { class: 'language-html vp-adaptive-theme' },
                            [
                              i('button', { title: 'Copy Code', class: 'copy' }),
                              i('span', { class: 'lang' }, 'html'),
                              i(
                                'pre',
                                {
                                  class: 'shiki shiki-themes github-light github-dark vp-code',
                                  tabindex: '0'
                                },
                                [
                                  i('code', null, [
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '<'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTabs'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' type'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"boxed"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 1"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 1 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 2"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 2 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '  <'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#6F42C1',
                                            '--shiki-dark': '#B392F0'
                                          }
                                        },
                                        ' name'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '='
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#032F62',
                                            '--shiki-dark': '#9ECBFF'
                                          }
                                        },
                                        '"Tab 3"'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>Tab 3 Content</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTab'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ]),
                                    a(`
`),
                                    i('span', { class: 'line' }, [
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '</'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#B31D28',
                                            '--shiki-light-font-style': 'italic',
                                            '--shiki-dark': '#FDAEB7',
                                            '--shiki-dark-font-style': 'italic'
                                          }
                                        },
                                        'JiaHaoTabs'
                                      ),
                                      i(
                                        'span',
                                        {
                                          style: {
                                            '--shiki-light': '#24292E',
                                            '--shiki-dark': '#E1E4E8'
                                          }
                                        },
                                        '>'
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            -1
                          )
                        ])
                    ),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          )
        ])
      )
    }
  })
export { b as __pageData, f as default }
