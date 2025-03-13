import { M as e } from './chunks/lib.1tMO2kGh.js'
import {
  d as n,
  c as p,
  o,
  j as t,
  G as l,
  ae as h,
  a,
  k as r
} from './chunks/framework.D5jwEaSD.js'
const m = JSON.parse(
    '{"title":"Steps Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps.md","filePath":"components/steps.md"}'
  ),
  k = { name: 'components/steps.md' },
  y = n({
    ...k,
    setup(d) {
      const i = ['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']
      return (E, s) => (
        o(),
        p('div', null, [
          s[0] ||
            (s[0] = t(
              'h1',
              { id: 'steps-component', tabindex: '-1' },
              [
                a('Steps Component '),
                t(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#steps-component',
                    'aria-label': 'Permalink to "Steps Component"'
                  },
                  '​'
                )
              ],
              -1
            )),
          s[1] ||
            (s[1] = t(
              'h2',
              { id: 'without-any-props', tabindex: '-1' },
              [
                a('Without any props '),
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
          l(r(e), { steps: i, layout: 'horizontal', color: 'primary' }),
          s[2] ||
            (s[2] = h(
              '<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">JiaHaoSteps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">steps</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;horizontal&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>',
              1
            ))
        ])
      )
    }
  })
export { m as __pageData, y as default }
