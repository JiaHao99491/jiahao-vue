import { _ as n } from './chunks/lib.DxdC4lfY.js'
import {
  d as o,
  c as s,
  o as i,
  j as e,
  G as r,
  ae as p,
  a as t,
  k as c
} from './chunks/framework.D5jwEaSD.js'
const u = JSON.parse(
    '{"title":"Accordian Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/accordian.md","filePath":"components/accordian.md"}'
  ),
  d = { name: 'components/accordian.md' },
  k = o({
    ...d,
    setup(l) {
      return (h, a) => (
        i(),
        s('div', null, [
          a[0] ||
            (a[0] = e(
              'h1',
              { id: 'accordian-component', tabindex: '-1' },
              [
                t('Accordian Component '),
                e(
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
          r(c(n)),
          a[2] ||
            (a[2] = p(
              '<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">JiaHaoAccordian</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>',
              1
            ))
        ])
      )
    }
  })
export { u as __pageData, k as default }
