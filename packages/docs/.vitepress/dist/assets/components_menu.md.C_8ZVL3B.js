import { c as n } from './chunks/lib.DxdC4lfY.js'
import {
  d as s,
  c as o,
  o as i,
  j as a,
  G as p,
  ae as r,
  a as t,
  k as l
} from './chunks/framework.D5jwEaSD.js'
const _ = JSON.parse(
    '{"title":"Menu Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/menu.md","filePath":"components/menu.md"}'
  ),
  d = { name: 'components/menu.md' },
  k = s({
    ...d,
    setup(m) {
      return (u, e) => (
        i(),
        o('div', null, [
          e[0] ||
            (e[0] = a(
              'h1',
              { id: 'menu-component', tabindex: '-1' },
              [
                t('Menu Component '),
                a(
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
          e[1] ||
            (e[1] = a(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                t('Without any props '),
                a(
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
          p(l(n)),
          e[2] ||
            (e[2] = r(
              '<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">JiaHaoMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>',
              1
            ))
        ])
      )
    }
  })
export { _ as __pageData, k as default }
