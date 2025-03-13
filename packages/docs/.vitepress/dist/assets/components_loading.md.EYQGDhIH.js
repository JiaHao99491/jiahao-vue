import { q as n } from './chunks/lib.1tMO2kGh.js'
import {
  d as o,
  c as s,
  o as i,
  j as e,
  G as p,
  ae as r,
  a as t,
  k as d
} from './chunks/framework.D5jwEaSD.js'
const u = JSON.parse(
    '{"title":"Loading Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md"}'
  ),
  l = { name: 'components/loading.md' },
  _ = o({
    ...l,
    setup(h) {
      return (m, a) => (
        i(),
        s('div', null, [
          a[0] ||
            (a[0] = e(
              'h1',
              { id: 'loading-component', tabindex: '-1' },
              [
                t('Loading Component '),
                e(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#loading-component',
                    'aria-label': 'Permalink to "Loading Component"'
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
          p(d(n)),
          a[2] ||
            (a[2] = r(
              '<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">JiaHaoLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>',
              1
            ))
        ])
      )
    }
  })
export { u as __pageData, _ as default }
