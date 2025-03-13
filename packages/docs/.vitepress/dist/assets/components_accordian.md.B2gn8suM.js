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
          i[4] ||
            (i[4] = r(
              `<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">JiaHaoAccordian</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">JiaHaoAccordianPanel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Panel 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Panel 1 Content&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">JiaHaoAccordianPanel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">JiaHaoAccordianPanel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Panel 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Panel 2 Content&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">JiaHaoAccordianPanel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">JiaHaoAccordian</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,
              1
            ))
        ])
      )
    }
  })
export { f as __pageData, m as default }
