import {
  d as m,
  c as u,
  r as c,
  n as N,
  o as a,
  a as z,
  t as M,
  b as k,
  w as f,
  T as ce,
  e as h,
  _ as b,
  u as Ce,
  i as Ee,
  f as Fe,
  g as ue,
  h as $,
  j as p,
  k as r,
  l as W,
  m as ae,
  p as T,
  q as D,
  s as Q,
  v as O,
  x as de,
  y as ve,
  z as De,
  A as Oe,
  F as I,
  B,
  C as q,
  D as ye,
  E as X,
  G as _,
  H as E,
  I as Pe,
  J as Z,
  K as j,
  L as x,
  M as Ge,
  N as Le,
  O as Ue,
  P as Ve,
  Q as Se,
  R as ee,
  S as je,
  U as Te,
  V as Ne,
  W as ze,
  X as We,
  Y as qe,
  Z as Ke,
  $ as Re,
  a0 as be
} from './framework.D5jwEaSD.js'
const Je = m({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(s) {
      return (e, t) => (
        a(),
        u(
          'span',
          { class: N(['VPBadge', e.type]) },
          [c(e.$slots, 'default', {}, () => [z(M(e.text), 1)])],
          2
        )
      )
    }
  }),
  Ye = { key: 0, class: 'VPBackdrop' },
  Qe = m({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(s) {
      return (e, t) => (
        a(),
        k(
          ce,
          { name: 'fade' },
          { default: f(() => [e.show ? (a(), u('div', Ye)) : h('', !0)]), _: 1 }
        )
      )
    }
  }),
  Xe = b(Qe, [['__scopeId', 'data-v-f0302812']]),
  P = Ce
function Ze(s, e) {
  let t,
    o = !1
  return () => {
    t && clearTimeout(t),
      o ? (t = setTimeout(s, e)) : (s(), (o = !0) && setTimeout(() => (o = !1), e))
  }
}
function re(s) {
  return s.startsWith('/') ? s : `/${s}`
}
function pe(s) {
  const { pathname: e, search: t, hash: o, protocol: n } = new URL(s, 'http://a.com')
  if (Ee(s) || s.startsWith('#') || !n.startsWith('http') || !Fe(e)) return s
  const { site: i } = P(),
    l =
      e.endsWith('/') || e.endsWith('.html')
        ? s
        : s.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(/(\.md)?$/, i.value.cleanUrls ? '' : '.html')}${t}${o}`
          )
  return ue(l)
}
function R({ correspondingLink: s = !1 } = {}) {
  const { site: e, localeIndex: t, page: o, theme: n, hash: i } = P(),
    l = $(() => {
      var v, y
      return {
        label: (v = e.value.locales[t.value]) == null ? void 0 : v.label,
        link:
          ((y = e.value.locales[t.value]) == null ? void 0 : y.link) ||
          (t.value === 'root' ? '/' : `/${t.value}/`)
      }
    })
  return {
    localeLinks: $(() =>
      Object.entries(e.value.locales).flatMap(([v, y]) =>
        l.value.label === y.label
          ? []
          : {
              text: y.label,
              link:
                xe(
                  y.link || (v === 'root' ? '/' : `/${v}/`),
                  n.value.i18nRouting !== !1 && s,
                  o.value.relativePath.slice(l.value.link.length - 1),
                  !e.value.cleanUrls
                ) + i.value
            }
      )
    ),
    currentLang: l
  }
}
function xe(s, e, t, o) {
  return e
    ? s.replace(/\/$/, '') +
        re(t.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, o ? '.html' : ''))
    : s
}
const et = { class: 'NotFound' },
  tt = { class: 'code' },
  nt = { class: 'title' },
  ot = { class: 'quote' },
  st = { class: 'action' },
  at = ['href', 'aria-label'],
  rt = m({
    __name: 'NotFound',
    setup(s) {
      const { theme: e } = P(),
        { currentLang: t } = R()
      return (o, n) => {
        var i, l, d, v, y
        return (
          a(),
          u('div', et, [
            p('p', tt, M(((i = r(e).notFound) == null ? void 0 : i.code) ?? '404'), 1),
            p('h1', nt, M(((l = r(e).notFound) == null ? void 0 : l.title) ?? 'PAGE NOT FOUND'), 1),
            n[0] || (n[0] = p('div', { class: 'divider' }, null, -1)),
            p(
              'blockquote',
              ot,
              M(
                ((d = r(e).notFound) == null ? void 0 : d.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
              ),
              1
            ),
            p('div', st, [
              p(
                'a',
                {
                  class: 'link',
                  href: r(ue)(r(t).link),
                  'aria-label': ((v = r(e).notFound) == null ? void 0 : v.linkLabel) ?? 'go to home'
                },
                M(((y = r(e).notFound) == null ? void 0 : y.linkText) ?? 'Take me home'),
                9,
                at
              )
            ])
          ])
        )
      }
    }
  }),
  it = b(rt, [['__scopeId', 'data-v-2a67a047']])
function Me(s, e) {
  if (Array.isArray(s)) return J(s)
  if (s == null) return []
  e = re(e)
  const t = Object.keys(s)
      .sort((n, i) => i.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(re(n))),
    o = t ? s[t] : []
  return Array.isArray(o) ? J(o) : J(o.items, o.base)
}
function lt(s) {
  const e = []
  let t = 0
  for (const o in s) {
    const n = s[o]
    if (n.items) {
      t = e.push(n)
      continue
    }
    e[t] || e.push({ items: [] }), e[t].items.push(n)
  }
  return e
}
function ct(s) {
  const e = []
  function t(o) {
    for (const n of o)
      n.text && n.link && e.push({ text: n.text, link: n.link, docFooterText: n.docFooterText }),
        n.items && t(n.items)
  }
  return t(s), e
}
function ie(s, e) {
  return Array.isArray(e)
    ? e.some((t) => ie(s, t))
    : W(s, e.link)
      ? !0
      : e.items
        ? ie(s, e.items)
        : !1
}
function J(s, e) {
  return [...s].map((t) => {
    const o = { ...t },
      n = o.base || e
    return n && o.link && (o.link = n + o.link), o.items && (o.items = J(o.items, n)), o
  })
}
function G() {
  const { frontmatter: s, page: e, theme: t } = P(),
    o = ae('(min-width: 960px)'),
    n = T(!1),
    i = $(() => {
      const H = t.value.sidebar,
        S = e.value.relativePath
      return H ? Me(H, S) : []
    }),
    l = T(i.value)
  D(i, (H, S) => {
    JSON.stringify(H) !== JSON.stringify(S) && (l.value = i.value)
  })
  const d = $(() => s.value.sidebar !== !1 && l.value.length > 0 && s.value.layout !== 'home'),
    v = $(() =>
      y ? (s.value.aside == null ? t.value.aside === 'left' : s.value.aside === 'left') : !1
    ),
    y = $(() =>
      s.value.layout === 'home'
        ? !1
        : s.value.aside != null
          ? !!s.value.aside
          : t.value.aside !== !1
    ),
    L = $(() => d.value && o.value),
    g = $(() => (d.value ? lt(l.value) : []))
  function V() {
    n.value = !0
  }
  function w() {
    n.value = !1
  }
  function A() {
    n.value ? w() : V()
  }
  return {
    isOpen: n,
    sidebar: l,
    sidebarGroups: g,
    hasSidebar: d,
    hasAside: y,
    leftAside: v,
    isSidebarEnabled: L,
    open: V,
    close: w,
    toggle: A
  }
}
function ut(s, e) {
  let t
  Q(() => {
    t = s.value ? document.activeElement : void 0
  }),
    O(() => {
      window.addEventListener('keyup', o)
    }),
    de(() => {
      window.removeEventListener('keyup', o)
    })
  function o(n) {
    n.key === 'Escape' && s.value && (e(), t == null || t.focus())
  }
}
function dt(s) {
  const { page: e, hash: t } = P(),
    o = T(!1),
    n = $(() => s.value.collapsed != null),
    i = $(() => !!s.value.link),
    l = T(!1),
    d = () => {
      l.value = W(e.value.relativePath, s.value.link)
    }
  D([e, s, t], d), O(d)
  const v = $(() => (l.value ? !0 : s.value.items ? ie(e.value.relativePath, s.value.items) : !1)),
    y = $(() => !!(s.value.items && s.value.items.length))
  Q(() => {
    o.value = !!(n.value && s.value.collapsed)
  }),
    ve(() => {
      ;(l.value || v.value) && (o.value = !1)
    })
  function L() {
    n.value && (o.value = !o.value)
  }
  return {
    collapsed: o,
    collapsible: n,
    isLink: i,
    isActiveLink: l,
    hasActiveLink: v,
    hasChildren: y,
    toggle: L
  }
}
function vt() {
  const { hasSidebar: s } = G(),
    e = ae('(min-width: 960px)'),
    t = ae('(min-width: 1280px)')
  return { isAsideEnabled: $(() => (!t.value && !e.value ? !1 : s.value ? t.value : e.value)) }
}
const pt = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,
  le = []
function we(s) {
  return (
    (typeof s.outline == 'object' && !Array.isArray(s.outline) && s.outline.label) ||
    s.outlineTitle ||
    'On this page'
  )
}
function fe(s) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const o = Number(t.tagName[1])
      return { element: t, title: ft(t), link: '#' + t.id, level: o }
    })
  return ht(e, s)
}
function ft(s) {
  let e = ''
  for (const t of s.childNodes)
    if (t.nodeType === 1) {
      if (pt.test(t.className)) continue
      e += t.textContent
    } else t.nodeType === 3 && (e += t.textContent)
  return e.trim()
}
function ht(s, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [o, n] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  return kt(s, o, n)
}
function mt(s, e) {
  const { isAsideEnabled: t } = vt(),
    o = Ze(i, 100)
  let n = null
  O(() => {
    requestAnimationFrame(i), window.addEventListener('scroll', o)
  }),
    De(() => {
      l(location.hash)
    }),
    de(() => {
      window.removeEventListener('scroll', o)
    })
  function i() {
    if (!t.value) return
    const d = window.scrollY,
      v = window.innerHeight,
      y = document.body.offsetHeight,
      L = Math.abs(d + v - y) < 1,
      g = le
        .map(({ element: w, link: A }) => ({ link: A, top: _t(w) }))
        .filter(({ top: w }) => !Number.isNaN(w))
        .sort((w, A) => w.top - A.top)
    if (!g.length) {
      l(null)
      return
    }
    if (d < 1) {
      l(null)
      return
    }
    if (L) {
      l(g[g.length - 1].link)
      return
    }
    let V = null
    for (const { link: w, top: A } of g) {
      if (A > d + Oe() + 4) break
      V = w
    }
    l(V)
  }
  function l(d) {
    n && n.classList.remove('active'),
      d == null ? (n = null) : (n = s.value.querySelector(`a[href="${decodeURIComponent(d)}"]`))
    const v = n
    v
      ? (v.classList.add('active'),
        (e.value.style.top = v.offsetTop + 39 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'))
  }
}
function _t(s) {
  let e = 0
  for (; s !== document.body; ) {
    if (s === null) return NaN
    ;(e += s.offsetTop), (s = s.offsetParent)
  }
  return e
}
function kt(s, e, t) {
  le.length = 0
  const o = [],
    n = []
  return (
    s.forEach((i) => {
      const l = { ...i, children: [] }
      let d = n[n.length - 1]
      for (; d && d.level >= l.level; ) n.pop(), (d = n[n.length - 1])
      if (l.element.classList.contains('ignore-header') || (d && 'shouldIgnore' in d)) {
        n.push({ level: l.level, shouldIgnore: !0 })
        return
      }
      l.level > t ||
        l.level < e ||
        (le.push({ element: l.element, link: l.link }),
        d ? d.children.push(l) : o.push(l),
        n.push(l))
    }),
    o
  )
}
const bt = ['href', 'title'],
  gt = m({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(s) {
      function e({ target: t }) {
        const o = t.href.split('#')[1],
          n = document.getElementById(decodeURIComponent(o))
        n == null || n.focus({ preventScroll: !0 })
      }
      return (t, o) => {
        const n = q('VPDocOutlineItem', !0)
        return (
          a(),
          u(
            'ul',
            { class: N(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              u(
                I,
                null,
                B(
                  t.headers,
                  ({ children: i, link: l, title: d }) => (
                    a(),
                    u('li', null, [
                      p('a', { class: 'outline-link', href: l, onClick: e, title: d }, M(d), 9, bt),
                      i != null && i.length
                        ? (a(), k(n, { key: 0, headers: i }, null, 8, ['headers']))
                        : h('', !0)
                    ])
                  )
                ),
                256
              ))
            ],
            2
          )
        )
      }
    }
  }),
  Ie = b(gt, [['__scopeId', 'data-v-a1fb6a95']]),
  $t = { class: 'content' },
  yt = { 'aria-level': '2', class: 'outline-title', id: 'doc-outline-aria-label', role: 'heading' },
  Pt = m({
    __name: 'VPDocAsideOutline',
    setup(s) {
      const { frontmatter: e, theme: t } = P(),
        o = ye([])
      X(() => {
        o.value = fe(e.value.outline ?? t.value.outline)
      })
      const n = T(),
        i = T()
      return (
        mt(n, i),
        (l, d) => (
          a(),
          u(
            'nav',
            {
              'aria-labelledby': 'doc-outline-aria-label',
              class: N(['VPDocAsideOutline', { 'has-outline': o.value.length > 0 }]),
              ref_key: 'container',
              ref: n
            },
            [
              p('div', $t, [
                p('div', { class: 'outline-marker', ref_key: 'marker', ref: i }, null, 512),
                p('div', yt, M(r(we)(r(t))), 1),
                _(Ie, { headers: o.value, root: !0 }, null, 8, ['headers'])
              ])
            ],
            2
          )
        )
      )
    }
  }),
  Lt = b(Pt, [['__scopeId', 'data-v-bcd7fc84']]),
  Vt = { class: 'VPDocAsideCarbonAds' },
  St = m({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(s) {
      const e = () => null
      return (t, o) => (
        a(), u('div', Vt, [_(r(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads'])])
      )
    }
  }),
  Tt = { class: 'VPDocAside' },
  Nt = m({
    __name: 'VPDocAside',
    setup(s) {
      const { theme: e } = P()
      return (t, o) => (
        a(),
        u('div', Tt, [
          c(t.$slots, 'aside-top', {}, void 0, !0),
          c(t.$slots, 'aside-outline-before', {}, void 0, !0),
          _(Lt),
          c(t.$slots, 'aside-outline-after', {}, void 0, !0),
          o[0] || (o[0] = p('div', { class: 'spacer' }, null, -1)),
          c(t.$slots, 'aside-ads-before', {}, void 0, !0),
          r(e).carbonAds
            ? (a(), k(St, { key: 0, 'carbon-ads': r(e).carbonAds }, null, 8, ['carbon-ads']))
            : h('', !0),
          c(t.$slots, 'aside-ads-after', {}, void 0, !0),
          c(t.$slots, 'aside-bottom', {}, void 0, !0)
        ])
      )
    }
  }),
  Mt = b(Nt, [['__scopeId', 'data-v-68aa5e79']])
function wt() {
  const { theme: s, page: e } = P()
  return $(() => {
    const { text: t = 'Edit this page', pattern: o = '' } = s.value.editLink || {}
    let n
    return (
      typeof o == 'function' ? (n = o(e.value)) : (n = o.replace(/:path/g, e.value.filePath)),
      { url: n, text: t }
    )
  })
}
function It() {
  const { page: s, theme: e, frontmatter: t } = P()
  return $(() => {
    var y, L, g, V, w, A, H, S
    const o = Me(e.value.sidebar, s.value.relativePath),
      n = ct(o),
      i = At(n, (C) => C.link.replace(/[?#].*$/, '')),
      l = i.findIndex((C) => W(s.value.relativePath, C.link)),
      d =
        (((y = e.value.docFooter) == null ? void 0 : y.prev) === !1 && !t.value.prev) ||
        t.value.prev === !1,
      v =
        (((L = e.value.docFooter) == null ? void 0 : L.next) === !1 && !t.value.next) ||
        t.value.next === !1
    return {
      prev: d
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                  ? t.value.prev.text
                  : void 0) ??
              ((g = i[l - 1]) == null ? void 0 : g.docFooterText) ??
              ((V = i[l - 1]) == null ? void 0 : V.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((w = i[l - 1]) == null ? void 0 : w.link)
          },
      next: v
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                  ? t.value.next.text
                  : void 0) ??
              ((A = i[l + 1]) == null ? void 0 : A.docFooterText) ??
              ((H = i[l + 1]) == null ? void 0 : H.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((S = i[l + 1]) == null ? void 0 : S.link)
          }
    }
  })
}
function At(s, e) {
  const t = new Set()
  return s.filter((o) => {
    const n = e(o)
    return t.has(n) ? !1 : t.add(n)
  })
}
const F = m({
    __name: 'VPLink',
    props: { tag: {}, href: {}, noIcon: { type: Boolean }, target: {}, rel: {} },
    setup(s) {
      const e = s,
        t = $(() => e.tag ?? (e.href ? 'a' : 'span')),
        o = $(() => (e.href && Pe.test(e.href)) || e.target === '_blank')
      return (n, i) => (
        a(),
        k(
          E(t.value),
          {
            class: N([
              'VPLink',
              { link: n.href, 'vp-external-link-icon': o.value, 'no-icon': n.noIcon }
            ]),
            href: n.href ? r(pe)(n.href) : void 0,
            target: n.target ?? (o.value ? '_blank' : void 0),
            rel: n.rel ?? (o.value ? 'noreferrer' : void 0)
          },
          { default: f(() => [c(n.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  }),
  Ht = { class: 'VPLastUpdated' },
  Bt = ['datetime'],
  Ct = m({
    __name: 'VPDocFooterLastUpdated',
    setup(s) {
      const { theme: e, page: t, lang: o } = P(),
        n = $(() => new Date(t.value.lastUpdated)),
        i = $(() => n.value.toISOString()),
        l = T('')
      return (
        O(() => {
          Q(() => {
            var d, v, y
            l.value = new Intl.DateTimeFormat(
              (v = (d = e.value.lastUpdated) == null ? void 0 : d.formatOptions) != null &&
              v.forceLocale
                ? o.value
                : void 0,
              ((y = e.value.lastUpdated) == null ? void 0 : y.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short'
              }
            ).format(n.value)
          })
        }),
        (d, v) => {
          var y
          return (
            a(),
            u('p', Ht, [
              z(
                M(
                  ((y = r(e).lastUpdated) == null ? void 0 : y.text) ||
                    r(e).lastUpdatedText ||
                    'Last updated'
                ) + ': ',
                1
              ),
              p('time', { datetime: i.value }, M(l.value), 9, Bt)
            ])
          )
        }
      )
    }
  }),
  Et = b(Ct, [['__scopeId', 'data-v-a35cd775']]),
  Ft = { key: 0, class: 'VPDocFooter' },
  Dt = { key: 0, class: 'edit-info' },
  Ot = { key: 0, class: 'edit-link' },
  Gt = { key: 1, class: 'last-updated' },
  Ut = { key: 1, class: 'prev-next', 'aria-labelledby': 'doc-footer-aria-label' },
  jt = { class: 'pager' },
  zt = ['innerHTML'],
  Wt = ['innerHTML'],
  qt = { class: 'pager' },
  Kt = ['innerHTML'],
  Rt = ['innerHTML'],
  Jt = m({
    __name: 'VPDocFooter',
    setup(s) {
      const { theme: e, page: t, frontmatter: o } = P(),
        n = wt(),
        i = It(),
        l = $(() => e.value.editLink && o.value.editLink !== !1),
        d = $(() => t.value.lastUpdated),
        v = $(() => l.value || d.value || i.value.prev || i.value.next)
      return (y, L) => {
        var g, V, w, A
        return v.value
          ? (a(),
            u('footer', Ft, [
              c(y.$slots, 'doc-footer-before', {}, void 0, !0),
              l.value || d.value
                ? (a(),
                  u('div', Dt, [
                    l.value
                      ? (a(),
                        u('div', Ot, [
                          _(
                            F,
                            { class: 'edit-link-button', href: r(n).url, 'no-icon': !0 },
                            {
                              default: f(() => [
                                L[0] ||
                                  (L[0] = p(
                                    'span',
                                    { class: 'vpi-square-pen edit-link-icon' },
                                    null,
                                    -1
                                  )),
                                z(' ' + M(r(n).text), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['href']
                          )
                        ]))
                      : h('', !0),
                    d.value ? (a(), u('div', Gt, [_(Et)])) : h('', !0)
                  ]))
                : h('', !0),
              ((g = r(i).prev) != null && g.link) || ((V = r(i).next) != null && V.link)
                ? (a(),
                  u('nav', Ut, [
                    L[1] ||
                      (L[1] = p(
                        'span',
                        { class: 'visually-hidden', id: 'doc-footer-aria-label' },
                        'Pager',
                        -1
                      )),
                    p('div', jt, [
                      (w = r(i).prev) != null && w.link
                        ? (a(),
                          k(
                            F,
                            { key: 0, class: 'pager-link prev', href: r(i).prev.link },
                            {
                              default: f(() => {
                                var H
                                return [
                                  p(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((H = r(e).docFooter) == null ? void 0 : H.prev) ||
                                        'Previous page'
                                    },
                                    null,
                                    8,
                                    zt
                                  ),
                                  p(
                                    'span',
                                    { class: 'title', innerHTML: r(i).prev.text },
                                    null,
                                    8,
                                    Wt
                                  )
                                ]
                              }),
                              _: 1
                            },
                            8,
                            ['href']
                          ))
                        : h('', !0)
                    ]),
                    p('div', qt, [
                      (A = r(i).next) != null && A.link
                        ? (a(),
                          k(
                            F,
                            { key: 0, class: 'pager-link next', href: r(i).next.link },
                            {
                              default: f(() => {
                                var H
                                return [
                                  p(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((H = r(e).docFooter) == null ? void 0 : H.next) ||
                                        'Next page'
                                    },
                                    null,
                                    8,
                                    Kt
                                  ),
                                  p(
                                    'span',
                                    { class: 'title', innerHTML: r(i).next.text },
                                    null,
                                    8,
                                    Rt
                                  )
                                ]
                              }),
                              _: 1
                            },
                            8,
                            ['href']
                          ))
                        : h('', !0)
                    ])
                  ]))
                : h('', !0)
            ]))
          : h('', !0)
      }
    }
  }),
  Yt = b(Jt, [['__scopeId', 'data-v-2f17c167']]),
  Qt = { class: 'container' },
  Xt = { class: 'aside-container' },
  Zt = { class: 'aside-content' },
  xt = { class: 'content' },
  en = { class: 'content-container' },
  tn = { class: 'main' },
  nn = m({
    __name: 'VPDoc',
    setup(s) {
      const { theme: e } = P(),
        t = Z(),
        { hasSidebar: o, hasAside: n, leftAside: i } = G(),
        l = $(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (d, v) => {
        const y = q('Content')
        return (
          a(),
          u(
            'div',
            { class: N(['VPDoc', { 'has-sidebar': r(o), 'has-aside': r(n) }]) },
            [
              c(d.$slots, 'doc-top', {}, void 0, !0),
              p('div', Qt, [
                r(n)
                  ? (a(),
                    u(
                      'div',
                      { key: 0, class: N(['aside', { 'left-aside': r(i) }]) },
                      [
                        v[0] || (v[0] = p('div', { class: 'aside-curtain' }, null, -1)),
                        p('div', Xt, [
                          p('div', Zt, [
                            _(Mt, null, {
                              'aside-top': f(() => [c(d.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': f(() => [
                                c(d.$slots, 'aside-bottom', {}, void 0, !0)
                              ]),
                              'aside-outline-before': f(() => [
                                c(d.$slots, 'aside-outline-before', {}, void 0, !0)
                              ]),
                              'aside-outline-after': f(() => [
                                c(d.$slots, 'aside-outline-after', {}, void 0, !0)
                              ]),
                              'aside-ads-before': f(() => [
                                c(d.$slots, 'aside-ads-before', {}, void 0, !0)
                              ]),
                              'aside-ads-after': f(() => [
                                c(d.$slots, 'aside-ads-after', {}, void 0, !0)
                              ]),
                              _: 3
                            })
                          ])
                        ])
                      ],
                      2
                    ))
                  : h('', !0),
                p('div', xt, [
                  p('div', en, [
                    c(d.$slots, 'doc-before', {}, void 0, !0),
                    p('main', tn, [
                      _(
                        y,
                        {
                          class: N([
                            'vp-doc',
                            [l.value, r(e).externalLinkIcon && 'external-link-icon-enabled']
                          ])
                        },
                        null,
                        8,
                        ['class']
                      )
                    ]),
                    _(Yt, null, {
                      'doc-footer-before': f(() => [
                        c(d.$slots, 'doc-footer-before', {}, void 0, !0)
                      ]),
                      _: 3
                    }),
                    c(d.$slots, 'doc-after', {}, void 0, !0)
                  ])
                ])
              ]),
              c(d.$slots, 'doc-bottom', {}, void 0, !0)
            ],
            2
          )
        )
      }
    }
  }),
  on = b(nn, [['__scopeId', 'data-v-7ff5bfe4']]),
  sn = m({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {}
    },
    setup(s) {
      const e = s,
        t = $(() => e.href && Pe.test(e.href)),
        o = $(() => e.tag || (e.href ? 'a' : 'button'))
      return (n, i) => (
        a(),
        k(
          E(o.value),
          {
            class: N(['VPButton', [n.size, n.theme]]),
            href: n.href ? r(pe)(n.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0)
          },
          { default: f(() => [z(M(n.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  }),
  an = b(sn, [['__scopeId', 'data-v-06ec2577']]),
  rn = ['src', 'alt'],
  ln = m({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(s) {
      return (e, t) => {
        const o = q('VPImage', !0)
        return e.image
          ? (a(),
            u(
              I,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    u(
                      'img',
                      j(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string' ? e.$attrs : { ...e.image, ...e.$attrs },
                        {
                          src: r(ue)(typeof e.image == 'string' ? e.image : e.image.src),
                          alt: e.alt ?? (typeof e.image == 'string' ? '' : e.image.alt || '')
                        }
                      ),
                      null,
                      16,
                      rn
                    ))
                  : (a(),
                    u(
                      I,
                      { key: 1 },
                      [
                        _(
                          o,
                          j({ class: 'dark', image: e.image.dark, alt: e.image.alt }, e.$attrs),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                        _(
                          o,
                          j({ class: 'light', image: e.image.light, alt: e.image.alt }, e.$attrs),
                          null,
                          16,
                          ['image', 'alt']
                        )
                      ],
                      64
                    ))
              ],
              64
            ))
          : h('', !0)
      }
    }
  }),
  Y = b(ln, [['__scopeId', 'data-v-7058b0b7']]),
  cn = { class: 'container' },
  un = { class: 'main' },
  dn = { class: 'heading' },
  vn = ['innerHTML'],
  pn = ['innerHTML'],
  fn = ['innerHTML'],
  hn = { key: 0, class: 'actions' },
  mn = { key: 0, class: 'image' },
  _n = { class: 'image-container' },
  kn = m({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(s) {
      const e = x('hero-image-slot-exists')
      return (t, o) => (
        a(),
        u(
          'div',
          { class: N(['VPHero', { 'has-image': t.image || r(e) }]) },
          [
            p('div', cn, [
              p('div', un, [
                c(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                c(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    p('h1', dn, [
                      t.name
                        ? (a(),
                          u('span', { key: 0, innerHTML: t.name, class: 'name clip' }, null, 8, vn))
                        : h('', !0),
                      t.text
                        ? (a(),
                          u('span', { key: 1, innerHTML: t.text, class: 'text' }, null, 8, pn))
                        : h('', !0)
                    ]),
                    t.tagline
                      ? (a(),
                        u('p', { key: 0, innerHTML: t.tagline, class: 'tagline' }, null, 8, fn))
                      : h('', !0)
                  ],
                  !0
                ),
                c(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    u('div', hn, [
                      (a(!0),
                      u(
                        I,
                        null,
                        B(
                          t.actions,
                          (n) => (
                            a(),
                            u('div', { key: n.link, class: 'action' }, [
                              _(
                                an,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: n.theme,
                                  text: n.text,
                                  href: n.link,
                                  target: n.target,
                                  rel: n.rel
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel']
                              )
                            ])
                          )
                        ),
                        128
                      ))
                    ]))
                  : h('', !0),
                c(t.$slots, 'home-hero-actions-after', {}, void 0, !0)
              ]),
              t.image || r(e)
                ? (a(),
                  u('div', mn, [
                    p('div', _n, [
                      o[0] || (o[0] = p('div', { class: 'image-bg' }, null, -1)),
                      c(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              k(Y, { key: 0, class: 'image-src', image: t.image }, null, 8, [
                                'image'
                              ]))
                            : h('', !0)
                        ],
                        !0
                      )
                    ])
                  ]))
                : h('', !0)
            ])
          ],
          2
        )
      )
    }
  }),
  bn = b(kn, [['__scopeId', 'data-v-b054726d']]),
  gn = m({
    __name: 'VPHomeHero',
    setup(s) {
      const { frontmatter: e } = P()
      return (t, o) =>
        r(e).hero
          ? (a(),
            k(
              bn,
              {
                key: 0,
                class: 'VPHomeHero',
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions
              },
              {
                'home-hero-info-before': f(() => [c(t.$slots, 'home-hero-info-before')]),
                'home-hero-info': f(() => [c(t.$slots, 'home-hero-info')]),
                'home-hero-info-after': f(() => [c(t.$slots, 'home-hero-info-after')]),
                'home-hero-actions-after': f(() => [c(t.$slots, 'home-hero-actions-after')]),
                'home-hero-image': f(() => [c(t.$slots, 'home-hero-image')]),
                _: 3
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : h('', !0)
    }
  }),
  $n = { class: 'box' },
  yn = { key: 0, class: 'icon' },
  Pn = ['innerHTML'],
  Ln = ['innerHTML'],
  Vn = ['innerHTML'],
  Sn = { key: 4, class: 'link-text' },
  Tn = { class: 'link-text-value' },
  Nn = m({
    __name: 'VPFeature',
    props: { icon: {}, title: {}, details: {}, link: {}, linkText: {}, rel: {}, target: {} },
    setup(s) {
      return (e, t) => (
        a(),
        k(
          F,
          {
            class: 'VPFeature',
            href: e.link,
            rel: e.rel,
            target: e.target,
            'no-icon': !0,
            tag: e.link ? 'a' : 'div'
          },
          {
            default: f(() => [
              p('article', $n, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    u('div', yn, [
                      _(
                        Y,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      )
                    ]))
                  : typeof e.icon == 'object'
                    ? (a(),
                      k(
                        Y,
                        {
                          key: 1,
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      ))
                    : e.icon
                      ? (a(), u('div', { key: 2, class: 'icon', innerHTML: e.icon }, null, 8, Pn))
                      : h('', !0),
                p('h2', { class: 'title', innerHTML: e.title }, null, 8, Ln),
                e.details
                  ? (a(), u('p', { key: 3, class: 'details', innerHTML: e.details }, null, 8, Vn))
                  : h('', !0),
                e.linkText
                  ? (a(),
                    u('div', Sn, [
                      p('p', Tn, [
                        z(M(e.linkText) + ' ', 1),
                        t[0] ||
                          (t[0] = p('span', { class: 'vpi-arrow-right link-text-icon' }, null, -1))
                      ])
                    ]))
                  : h('', !0)
              ])
            ]),
            _: 1
          },
          8,
          ['href', 'rel', 'target', 'tag']
        )
      )
    }
  }),
  Mn = b(Nn, [['__scopeId', 'data-v-27f085f3']]),
  wn = { key: 0, class: 'VPFeatures' },
  In = { class: 'container' },
  An = { class: 'items' },
  Hn = m({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(s) {
      const e = s,
        t = $(() => {
          const o = e.features.length
          if (o) {
            if (o === 2) return 'grid-2'
            if (o === 3) return 'grid-3'
            if (o % 3 === 0) return 'grid-6'
            if (o > 3) return 'grid-4'
          } else return
        })
      return (o, n) =>
        o.features
          ? (a(),
            u('div', wn, [
              p('div', In, [
                p('div', An, [
                  (a(!0),
                  u(
                    I,
                    null,
                    B(
                      o.features,
                      (i) => (
                        a(),
                        u(
                          'div',
                          { key: i.title, class: N(['item', [t.value]]) },
                          [
                            _(
                              Mn,
                              {
                                icon: i.icon,
                                title: i.title,
                                details: i.details,
                                link: i.link,
                                'link-text': i.linkText,
                                rel: i.rel,
                                target: i.target
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text', 'rel', 'target']
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]))
          : h('', !0)
    }
  }),
  Bn = b(Hn, [['__scopeId', 'data-v-c08d7989']]),
  Cn = m({
    __name: 'VPHomeFeatures',
    setup(s) {
      const { frontmatter: e } = P()
      return (t, o) =>
        r(e).features
          ? (a(),
            k(Bn, { key: 0, class: 'VPHomeFeatures', features: r(e).features }, null, 8, [
              'features'
            ]))
          : h('', !0)
    }
  }),
  En = m({
    __name: 'VPHomeContent',
    setup(s) {
      const { width: e } = Ge({ initialWidth: 0, includeScrollbar: !1 })
      return (t, o) => (
        a(),
        u(
          'div',
          {
            class: 'vp-doc container',
            style: Le(r(e) ? { '--vp-offset': `calc(50% - ${r(e) / 2}px)` } : {})
          },
          [c(t.$slots, 'default', {}, void 0, !0)],
          4
        )
      )
    }
  }),
  Fn = b(En, [['__scopeId', 'data-v-571a0cca']]),
  Dn = m({
    __name: 'VPHome',
    setup(s) {
      const { frontmatter: e, theme: t } = P()
      return (o, n) => {
        const i = q('Content')
        return (
          a(),
          u(
            'div',
            { class: N(['VPHome', { 'external-link-icon-enabled': r(t).externalLinkIcon }]) },
            [
              c(o.$slots, 'home-hero-before', {}, void 0, !0),
              _(gn, null, {
                'home-hero-info-before': f(() => [
                  c(o.$slots, 'home-hero-info-before', {}, void 0, !0)
                ]),
                'home-hero-info': f(() => [c(o.$slots, 'home-hero-info', {}, void 0, !0)]),
                'home-hero-info-after': f(() => [
                  c(o.$slots, 'home-hero-info-after', {}, void 0, !0)
                ]),
                'home-hero-actions-after': f(() => [
                  c(o.$slots, 'home-hero-actions-after', {}, void 0, !0)
                ]),
                'home-hero-image': f(() => [c(o.$slots, 'home-hero-image', {}, void 0, !0)]),
                _: 3
              }),
              c(o.$slots, 'home-hero-after', {}, void 0, !0),
              c(o.$slots, 'home-features-before', {}, void 0, !0),
              _(Cn),
              c(o.$slots, 'home-features-after', {}, void 0, !0),
              r(e).markdownStyles !== !1
                ? (a(), k(Fn, { key: 0 }, { default: f(() => [_(i)]), _: 1 }))
                : (a(), k(i, { key: 1 }))
            ],
            2
          )
        )
      }
    }
  }),
  On = b(Dn, [['__scopeId', 'data-v-61db664d']]),
  Gn = {},
  Un = { class: 'VPPage' }
function jn(s, e) {
  const t = q('Content')
  return a(), u('div', Un, [c(s.$slots, 'page-top'), _(t), c(s.$slots, 'page-bottom')])
}
const zn = b(Gn, [['render', jn]]),
  Wn = m({
    __name: 'VPContent',
    setup(s) {
      const { page: e, frontmatter: t } = P(),
        { hasSidebar: o } = G()
      return (n, i) => (
        a(),
        u(
          'div',
          {
            class: N(['VPContent', { 'has-sidebar': r(o), 'is-home': r(t).layout === 'home' }]),
            id: 'VPContent'
          },
          [
            r(e).isNotFound
              ? c(n.$slots, 'not-found', { key: 0 }, () => [_(it)], !0)
              : r(t).layout === 'page'
                ? (a(),
                  k(
                    zn,
                    { key: 1 },
                    {
                      'page-top': f(() => [c(n.$slots, 'page-top', {}, void 0, !0)]),
                      'page-bottom': f(() => [c(n.$slots, 'page-bottom', {}, void 0, !0)]),
                      _: 3
                    }
                  ))
                : r(t).layout === 'home'
                  ? (a(),
                    k(
                      On,
                      { key: 2 },
                      {
                        'home-hero-before': f(() => [
                          c(n.$slots, 'home-hero-before', {}, void 0, !0)
                        ]),
                        'home-hero-info-before': f(() => [
                          c(n.$slots, 'home-hero-info-before', {}, void 0, !0)
                        ]),
                        'home-hero-info': f(() => [c(n.$slots, 'home-hero-info', {}, void 0, !0)]),
                        'home-hero-info-after': f(() => [
                          c(n.$slots, 'home-hero-info-after', {}, void 0, !0)
                        ]),
                        'home-hero-actions-after': f(() => [
                          c(n.$slots, 'home-hero-actions-after', {}, void 0, !0)
                        ]),
                        'home-hero-image': f(() => [
                          c(n.$slots, 'home-hero-image', {}, void 0, !0)
                        ]),
                        'home-hero-after': f(() => [
                          c(n.$slots, 'home-hero-after', {}, void 0, !0)
                        ]),
                        'home-features-before': f(() => [
                          c(n.$slots, 'home-features-before', {}, void 0, !0)
                        ]),
                        'home-features-after': f(() => [
                          c(n.$slots, 'home-features-after', {}, void 0, !0)
                        ]),
                        _: 3
                      }
                    ))
                  : r(t).layout && r(t).layout !== 'doc'
                    ? (a(), k(E(r(t).layout), { key: 3 }))
                    : (a(),
                      k(
                        on,
                        { key: 4 },
                        {
                          'doc-top': f(() => [c(n.$slots, 'doc-top', {}, void 0, !0)]),
                          'doc-bottom': f(() => [c(n.$slots, 'doc-bottom', {}, void 0, !0)]),
                          'doc-footer-before': f(() => [
                            c(n.$slots, 'doc-footer-before', {}, void 0, !0)
                          ]),
                          'doc-before': f(() => [c(n.$slots, 'doc-before', {}, void 0, !0)]),
                          'doc-after': f(() => [c(n.$slots, 'doc-after', {}, void 0, !0)]),
                          'aside-top': f(() => [c(n.$slots, 'aside-top', {}, void 0, !0)]),
                          'aside-outline-before': f(() => [
                            c(n.$slots, 'aside-outline-before', {}, void 0, !0)
                          ]),
                          'aside-outline-after': f(() => [
                            c(n.$slots, 'aside-outline-after', {}, void 0, !0)
                          ]),
                          'aside-ads-before': f(() => [
                            c(n.$slots, 'aside-ads-before', {}, void 0, !0)
                          ]),
                          'aside-ads-after': f(() => [
                            c(n.$slots, 'aside-ads-after', {}, void 0, !0)
                          ]),
                          'aside-bottom': f(() => [c(n.$slots, 'aside-bottom', {}, void 0, !0)]),
                          _: 3
                        }
                      ))
          ],
          2
        )
      )
    }
  }),
  qn = b(Wn, [['__scopeId', 'data-v-6d17dbb7']]),
  Kn = { class: 'container' },
  Rn = ['innerHTML'],
  Jn = ['innerHTML'],
  Yn = m({
    __name: 'VPFooter',
    setup(s) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = G()
      return (n, i) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            u(
              'footer',
              { key: 0, class: N(['VPFooter', { 'has-sidebar': r(o) }]) },
              [
                p('div', Kn, [
                  r(e).footer.message
                    ? (a(),
                      u(
                        'p',
                        { key: 0, class: 'message', innerHTML: r(e).footer.message },
                        null,
                        8,
                        Rn
                      ))
                    : h('', !0),
                  r(e).footer.copyright
                    ? (a(),
                      u(
                        'p',
                        { key: 1, class: 'copyright', innerHTML: r(e).footer.copyright },
                        null,
                        8,
                        Jn
                      ))
                    : h('', !0)
                ])
              ],
              2
            ))
          : h('', !0)
    }
  }),
  Qn = b(Yn, [['__scopeId', 'data-v-e6858224']])
function Xn() {
  const { theme: s, frontmatter: e } = P(),
    t = ye([]),
    o = $(() => t.value.length > 0)
  return (
    X(() => {
      t.value = fe(e.value.outline ?? s.value.outline)
    }),
    { headers: t, hasLocalNav: o }
  )
}
const Zn = { class: 'menu-text' },
  xn = { class: 'header' },
  eo = { class: 'outline' },
  to = m({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(s) {
      const e = s,
        { theme: t } = P(),
        o = T(!1),
        n = T(0),
        i = T(),
        l = T()
      function d(g) {
        var V
        ;((V = i.value) != null && V.contains(g.target)) || (o.value = !1)
      }
      D(o, (g) => {
        if (g) {
          document.addEventListener('click', d)
          return
        }
        document.removeEventListener('click', d)
      }),
        Ue('Escape', () => {
          o.value = !1
        }),
        X(() => {
          o.value = !1
        })
      function v() {
        ;(o.value = !o.value),
          (n.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function y(g) {
        g.target.classList.contains('outline-link') &&
          (l.value && (l.value.style.transition = 'none'),
          Ve(() => {
            o.value = !1
          }))
      }
      function L() {
        ;(o.value = !1), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (g, V) => (
        a(),
        u(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: Le({ '--vp-vh': n.value + 'px' }),
            ref_key: 'main',
            ref: i
          },
          [
            g.headers.length > 0
              ? (a(),
                u(
                  'button',
                  { key: 0, onClick: v, class: N({ open: o.value }) },
                  [
                    p('span', Zn, M(r(we)(r(t))), 1),
                    V[0] || (V[0] = p('span', { class: 'vpi-chevron-right icon' }, null, -1))
                  ],
                  2
                ))
              : (a(),
                u(
                  'button',
                  { key: 1, onClick: L },
                  M(r(t).returnToTopLabel || 'Return to top'),
                  1
                )),
            _(
              ce,
              { name: 'flyout' },
              {
                default: f(() => [
                  o.value
                    ? (a(),
                      u(
                        'div',
                        { key: 0, ref_key: 'items', ref: l, class: 'items', onClick: y },
                        [
                          p('div', xn, [
                            p(
                              'a',
                              { class: 'top-link', href: '#', onClick: L },
                              M(r(t).returnToTopLabel || 'Return to top'),
                              1
                            )
                          ]),
                          p('div', eo, [_(Ie, { headers: g.headers }, null, 8, ['headers'])])
                        ],
                        512
                      ))
                    : h('', !0)
                ]),
                _: 1
              }
            )
          ],
          4
        )
      )
    }
  }),
  no = b(to, [['__scopeId', 'data-v-5a998d74']]),
  oo = { class: 'container' },
  so = ['aria-expanded'],
  ao = { class: 'menu-text' },
  ro = m({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(s) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = G(),
        { headers: n } = Xn(),
        { y: i } = Se(),
        l = T(0)
      O(() => {
        l.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')
        )
      }),
        X(() => {
          n.value = fe(t.value.outline ?? e.value.outline)
        })
      const d = $(() => n.value.length === 0),
        v = $(() => d.value && !o.value),
        y = $(() => ({ VPLocalNav: !0, 'has-sidebar': o.value, empty: d.value, fixed: v.value }))
      return (L, g) =>
        r(t).layout !== 'home' && (!v.value || r(i) >= l.value)
          ? (a(),
            u(
              'div',
              { key: 0, class: N(y.value) },
              [
                p('div', oo, [
                  r(o)
                    ? (a(),
                      u(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': L.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: g[0] || (g[0] = (V) => L.$emit('open-menu'))
                        },
                        [
                          g[1] ||
                            (g[1] = p('span', { class: 'vpi-align-left menu-icon' }, null, -1)),
                          p('span', ao, M(r(e).sidebarMenuLabel || 'Menu'), 1)
                        ],
                        8,
                        so
                      ))
                    : h('', !0),
                  _(no, { headers: r(n), navHeight: l.value }, null, 8, ['headers', 'navHeight'])
                ])
              ],
              2
            ))
          : h('', !0)
    }
  }),
  io = b(ro, [['__scopeId', 'data-v-3231a7a0']])
function lo() {
  const s = T(!1)
  function e() {
    ;(s.value = !0), window.addEventListener('resize', n)
  }
  function t() {
    ;(s.value = !1), window.removeEventListener('resize', n)
  }
  function o() {
    s.value ? t() : e()
  }
  function n() {
    window.outerWidth >= 768 && t()
  }
  const i = Z()
  return D(() => i.path, t), { isScreenOpen: s, openScreen: e, closeScreen: t, toggleScreen: o }
}
const co = {},
  uo = { class: 'VPSwitch', type: 'button', role: 'switch' },
  vo = { class: 'check' },
  po = { key: 0, class: 'icon' }
function fo(s, e) {
  return (
    a(),
    u('button', uo, [
      p('span', vo, [
        s.$slots.default
          ? (a(), u('span', po, [c(s.$slots, 'default', {}, void 0, !0)]))
          : h('', !0)
      ])
    ])
  )
}
const ho = b(co, [
    ['render', fo],
    ['__scopeId', 'data-v-293a3b68']
  ]),
  mo = m({
    __name: 'VPSwitchAppearance',
    setup(s) {
      const { isDark: e, theme: t } = P(),
        o = x('toggle-appearance', () => {
          e.value = !e.value
        }),
        n = T('')
      return (
        ve(() => {
          n.value = e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme'
        }),
        (i, l) => (
          a(),
          k(
            ho,
            { title: n.value, class: 'VPSwitchAppearance', 'aria-checked': r(e), onClick: r(o) },
            {
              default: f(
                () =>
                  l[0] ||
                  (l[0] = [
                    p('span', { class: 'vpi-sun sun' }, null, -1),
                    p('span', { class: 'vpi-moon moon' }, null, -1)
                  ])
              ),
              _: 1
            },
            8,
            ['title', 'aria-checked', 'onClick']
          )
        )
      )
    }
  }),
  he = b(mo, [['__scopeId', 'data-v-f95f1104']]),
  _o = { key: 0, class: 'VPNavBarAppearance' },
  ko = m({
    __name: 'VPNavBarAppearance',
    setup(s) {
      const { site: e } = P()
      return (t, o) =>
        r(e).appearance && r(e).appearance !== 'force-dark' && r(e).appearance !== 'force-auto'
          ? (a(), u('div', _o, [_(he)]))
          : h('', !0)
    }
  }),
  bo = b(ko, [['__scopeId', 'data-v-3bde8795']]),
  me = T()
let Ae = !1,
  se = 0
function go(s) {
  const e = T(!1)
  if (ee) {
    !Ae && $o(), se++
    const t = D(me, (o) => {
      var n, i, l
      o === s.el.value || ((n = s.el.value) != null && n.contains(o))
        ? ((e.value = !0), (i = s.onFocus) == null || i.call(s))
        : ((e.value = !1), (l = s.onBlur) == null || l.call(s))
    })
    de(() => {
      t(), se--, se || yo()
    })
  }
  return je(e)
}
function $o() {
  document.addEventListener('focusin', He), (Ae = !0), (me.value = document.activeElement)
}
function yo() {
  document.removeEventListener('focusin', He)
}
function He() {
  me.value = document.activeElement
}
const Po = { class: 'VPMenuLink' },
  Lo = ['innerHTML'],
  Vo = m({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(s) {
      const { page: e } = P()
      return (t, o) => (
        a(),
        u('div', Po, [
          _(
            F,
            {
              class: N({
                active: r(W)(
                  r(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch
                )
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
              'no-icon': t.item.noIcon
            },
            { default: f(() => [p('span', { innerHTML: t.item.text }, null, 8, Lo)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel', 'no-icon']
          )
        ])
      )
    }
  }),
  te = b(Vo, [['__scopeId', 'data-v-ef9efad4']]),
  So = { class: 'VPMenuGroup' },
  To = { key: 0, class: 'title' },
  No = m({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        u('div', So, [
          e.text ? (a(), u('p', To, M(e.text), 1)) : h('', !0),
          (a(!0),
          u(
            I,
            null,
            B(
              e.items,
              (o) => (
                a(),
                u(
                  I,
                  null,
                  ['link' in o ? (a(), k(te, { key: 0, item: o }, null, 8, ['item'])) : h('', !0)],
                  64
                )
              )
            ),
            256
          ))
        ])
      )
    }
  }),
  Mo = b(No, [['__scopeId', 'data-v-c2a401d1']]),
  wo = { class: 'VPMenu' },
  Io = { key: 0, class: 'items' },
  Ao = m({
    __name: 'VPMenu',
    props: { items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        u('div', wo, [
          e.items
            ? (a(),
              u('div', Io, [
                (a(!0),
                u(
                  I,
                  null,
                  B(
                    e.items,
                    (o) => (
                      a(),
                      u(
                        I,
                        { key: JSON.stringify(o) },
                        [
                          'link' in o
                            ? (a(), k(te, { key: 0, item: o }, null, 8, ['item']))
                            : 'component' in o
                              ? (a(),
                                k(E(o.component), j({ key: 1, ref_for: !0 }, o.props), null, 16))
                              : (a(),
                                k(Mo, { key: 2, text: o.text, items: o.items }, null, 8, [
                                  'text',
                                  'items'
                                ]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ]))
            : h('', !0),
          c(e.$slots, 'default', {}, void 0, !0)
        ])
      )
    }
  }),
  Ho = b(Ao, [['__scopeId', 'data-v-68f858a8']]),
  Bo = ['aria-expanded', 'aria-label'],
  Co = { key: 0, class: 'text' },
  Eo = ['innerHTML'],
  Fo = { key: 1, class: 'vpi-more-horizontal icon' },
  Do = { class: 'menu' },
  Oo = m({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(s) {
      const e = T(!1),
        t = T()
      go({ el: t, onBlur: o })
      function o() {
        e.value = !1
      }
      return (n, i) => (
        a(),
        u(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: i[1] || (i[1] = (l) => (e.value = !0)),
            onMouseleave: i[2] || (i[2] = (l) => (e.value = !1))
          },
          [
            p(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': n.label,
                onClick: i[0] || (i[0] = (l) => (e.value = !e.value))
              },
              [
                n.button || n.icon
                  ? (a(),
                    u('span', Co, [
                      n.icon
                        ? (a(), u('span', { key: 0, class: N([n.icon, 'option-icon']) }, null, 2))
                        : h('', !0),
                      n.button
                        ? (a(), u('span', { key: 1, innerHTML: n.button }, null, 8, Eo))
                        : h('', !0),
                      i[3] || (i[3] = p('span', { class: 'vpi-chevron-down text-icon' }, null, -1))
                    ]))
                  : (a(), u('span', Fo))
              ],
              8,
              Bo
            ),
            p('div', Do, [
              _(
                Ho,
                { items: n.items },
                { default: f(() => [c(n.$slots, 'default', {}, void 0, !0)]), _: 3 },
                8,
                ['items']
              )
            ])
          ],
          544
        )
      )
    }
  }),
  _e = b(Oo, [['__scopeId', 'data-v-a7be76b1']]),
  Go = ['href', 'aria-label', 'innerHTML'],
  Uo = m({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(s) {
      const e = s,
        t = T()
      O(async () => {
        var i
        await Ve()
        const n = (i = t.value) == null ? void 0 : i.children[0]
        n instanceof HTMLElement &&
          n.className.startsWith('vpi-social-') &&
          (getComputedStyle(n).maskImage || getComputedStyle(n).webkitMaskImage) === 'none' &&
          n.style.setProperty(
            '--icon',
            `url('https://api.iconify.design/simple-icons/${e.icon}.svg')`
          )
      })
      const o = $(() =>
        typeof e.icon == 'object' ? e.icon.svg : `<span class="vpi-social-${e.icon}"></span>`
      )
      return (n, i) => (
        a(),
        u(
          'a',
          {
            ref_key: 'el',
            ref: t,
            class: 'VPSocialLink no-icon',
            href: n.link,
            'aria-label': n.ariaLabel ?? (typeof n.icon == 'string' ? n.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: o.value
          },
          null,
          8,
          Go
        )
      )
    }
  }),
  jo = b(Uo, [['__scopeId', 'data-v-4c25a489']]),
  zo = { class: 'VPSocialLinks' },
  Wo = m({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(s) {
      return (e, t) => (
        a(),
        u('div', zo, [
          (a(!0),
          u(
            I,
            null,
            B(
              e.links,
              ({ link: o, icon: n, ariaLabel: i }) => (
                a(),
                k(jo, { key: o, icon: n, link: o, ariaLabel: i }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel'
                ])
              )
            ),
            128
          ))
        ])
      )
    }
  }),
  ke = b(Wo, [['__scopeId', 'data-v-c1465495']]),
  qo = { key: 0, class: 'group translations' },
  Ko = { class: 'trans-title' },
  Ro = { key: 1, class: 'group' },
  Jo = { class: 'item appearance' },
  Yo = { class: 'label' },
  Qo = { class: 'appearance-action' },
  Xo = { key: 2, class: 'group' },
  Zo = { class: 'item social-links' },
  xo = m({
    __name: 'VPNavBarExtra',
    setup(s) {
      const { site: e, theme: t } = P(),
        { localeLinks: o, currentLang: n } = R({ correspondingLink: !0 }),
        i = $(() => (o.value.length && n.value.label) || e.value.appearance || t.value.socialLinks)
      return (l, d) =>
        i.value
          ? (a(),
            k(
              _e,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: f(() => [
                  r(o).length && r(n).label
                    ? (a(),
                      u('div', qo, [
                        p('p', Ko, M(r(n).label), 1),
                        (a(!0),
                        u(
                          I,
                          null,
                          B(r(o), (v) => (a(), k(te, { key: v.link, item: v }, null, 8, ['item']))),
                          128
                        ))
                      ]))
                    : h('', !0),
                  r(e).appearance &&
                  r(e).appearance !== 'force-dark' &&
                  r(e).appearance !== 'force-auto'
                    ? (a(),
                      u('div', Ro, [
                        p('div', Jo, [
                          p('p', Yo, M(r(t).darkModeSwitchLabel || 'Appearance'), 1),
                          p('div', Qo, [_(he)])
                        ])
                      ]))
                    : h('', !0),
                  r(t).socialLinks
                    ? (a(),
                      u('div', Xo, [
                        p('div', Zo, [
                          _(ke, { class: 'social-links-list', links: r(t).socialLinks }, null, 8, [
                            'links'
                          ])
                        ])
                      ]))
                    : h('', !0)
                ]),
                _: 1
              }
            ))
          : h('', !0)
    }
  }),
  es = b(xo, [['__scopeId', 'data-v-4f2c3ff1']]),
  ts = ['aria-expanded'],
  ns = m({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(s) {
      return (e, t) => (
        a(),
        u(
          'button',
          {
            type: 'button',
            class: N(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (o) => e.$emit('click'))
          },
          t[1] ||
            (t[1] = [
              p(
                'span',
                { class: 'container' },
                [
                  p('span', { class: 'top' }),
                  p('span', { class: 'middle' }),
                  p('span', { class: 'bottom' })
                ],
                -1
              )
            ]),
          10,
          ts
        )
      )
    }
  }),
  os = b(ns, [['__scopeId', 'data-v-c5e40e5f']]),
  ss = ['innerHTML'],
  as = m({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(s) {
      const { page: e } = P()
      return (t, o) => (
        a(),
        k(
          F,
          {
            class: N({
              VPNavBarMenuLink: !0,
              active: r(W)(
                r(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch
              )
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            tabindex: '0'
          },
          { default: f(() => [p('span', { innerHTML: t.item.text }, null, 8, ss)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel', 'no-icon']
        )
      )
    }
  }),
  rs = b(as, [['__scopeId', 'data-v-d655ed07']]),
  is = m({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(s) {
      const e = s,
        { page: t } = P(),
        o = (i) =>
          'component' in i
            ? !1
            : 'link' in i
              ? W(t.value.relativePath, i.link, !!e.item.activeMatch)
              : i.items.some(o),
        n = $(() => o(e.item))
      return (i, l) => (
        a(),
        k(
          _e,
          {
            class: N({
              VPNavBarMenuGroup: !0,
              active: r(W)(r(t).relativePath, i.item.activeMatch, !!i.item.activeMatch) || n.value
            }),
            button: i.item.text,
            items: i.item.items
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      )
    }
  }),
  ls = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  cs = m({
    __name: 'VPNavBarMenu',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).nav
          ? (a(),
            u('nav', ls, [
              o[0] ||
                (o[0] = p(
                  'span',
                  { id: 'main-nav-aria-label', class: 'visually-hidden' },
                  ' Main Navigation ',
                  -1
                )),
              (a(!0),
              u(
                I,
                null,
                B(
                  r(e).nav,
                  (n) => (
                    a(),
                    u(
                      I,
                      { key: JSON.stringify(n) },
                      [
                        'link' in n
                          ? (a(), k(rs, { key: 0, item: n }, null, 8, ['item']))
                          : 'component' in n
                            ? (a(),
                              k(E(n.component), j({ key: 1, ref_for: !0 }, n.props), null, 16))
                            : (a(), k(is, { key: 2, item: n }, null, 8, ['item']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : h('', !0)
    }
  }),
  us = b(cs, [['__scopeId', 'data-v-a6a20ec8']])
function ds(s) {
  const { localeIndex: e, theme: t } = P()
  function o(n) {
    var A, H, S
    const i = n.split('.'),
      l = (A = t.value.search) == null ? void 0 : A.options,
      d = l && typeof l == 'object',
      v =
        (d &&
          ((S = (H = l.locales) == null ? void 0 : H[e.value]) == null
            ? void 0
            : S.translations)) ||
        null,
      y = (d && l.translations) || null
    let L = v,
      g = y,
      V = s
    const w = i.pop()
    for (const C of i) {
      let U = null
      const K = V == null ? void 0 : V[C]
      K && (U = V = K)
      const ne = g == null ? void 0 : g[C]
      ne && (U = g = ne)
      const oe = L == null ? void 0 : L[C]
      oe && (U = L = oe), K || (V = U), ne || (g = U), oe || (L = U)
    }
    return (
      (L == null ? void 0 : L[w]) ??
      (g == null ? void 0 : g[w]) ??
      (V == null ? void 0 : V[w]) ??
      ''
    )
  }
  return o
}
const vs = ['aria-label'],
  ps = { class: 'DocSearch-Button-Container' },
  fs = { class: 'DocSearch-Button-Placeholder' },
  ge = m({
    __name: 'VPNavBarSearchButton',
    setup(s) {
      const t = ds({ button: { buttonText: 'Search', buttonAriaLabel: 'Search' } })
      return (o, n) => (
        a(),
        u(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': r(t)('button.buttonAriaLabel')
          },
          [
            p('span', ps, [
              n[0] || (n[0] = p('span', { class: 'vp-icon DocSearch-Search-Icon' }, null, -1)),
              p('span', fs, M(r(t)('button.buttonText')), 1)
            ]),
            n[1] ||
              (n[1] = p(
                'span',
                { class: 'DocSearch-Button-Keys' },
                [
                  p('kbd', { class: 'DocSearch-Button-Key' }),
                  p('kbd', { class: 'DocSearch-Button-Key' }, 'K')
                ],
                -1
              ))
          ],
          8,
          vs
        )
      )
    }
  }),
  hs = { class: 'VPNavBarSearch' },
  ms = { id: 'local-search' },
  _s = { key: 1, id: 'docsearch' },
  ks = m({
    __name: 'VPNavBarSearch',
    setup(s) {
      const e = () => null,
        t = () => null,
        { theme: o } = P(),
        n = T(!1),
        i = T(!1)
      O(() => {})
      function l() {
        n.value || ((n.value = !0), setTimeout(d, 16))
      }
      function d() {
        const L = new Event('keydown')
        ;(L.key = 'k'),
          (L.metaKey = !0),
          window.dispatchEvent(L),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || d()
          }, 16)
      }
      const v = T(!1),
        y = ''
      return (L, g) => {
        var V
        return (
          a(),
          u('div', hs, [
            r(y) === 'local'
              ? (a(),
                u(
                  I,
                  { key: 0 },
                  [
                    v.value
                      ? (a(), k(r(e), { key: 0, onClose: g[0] || (g[0] = (w) => (v.value = !1)) }))
                      : h('', !0),
                    p('div', ms, [_(ge, { onClick: g[1] || (g[1] = (w) => (v.value = !0)) })])
                  ],
                  64
                ))
              : r(y) === 'algolia'
                ? (a(),
                  u(
                    I,
                    { key: 1 },
                    [
                      n.value
                        ? (a(),
                          k(
                            r(t),
                            {
                              key: 0,
                              algolia:
                                ((V = r(o).search) == null ? void 0 : V.options) ?? r(o).algolia,
                              onVnodeBeforeMount: g[2] || (g[2] = (w) => (i.value = !0))
                            },
                            null,
                            8,
                            ['algolia']
                          ))
                        : h('', !0),
                      i.value ? h('', !0) : (a(), u('div', _s, [_(ge, { onClick: l })]))
                    ],
                    64
                  ))
                : h('', !0)
          ])
        )
      }
    }
  }),
  bs = m({
    __name: 'VPNavBarSocialLinks',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).socialLinks
          ? (a(),
            k(ke, { key: 0, class: 'VPNavBarSocialLinks', links: r(e).socialLinks }, null, 8, [
              'links'
            ]))
          : h('', !0)
    }
  }),
  gs = b(bs, [['__scopeId', 'data-v-cd84a39d']]),
  $s = ['href', 'rel', 'target'],
  ys = ['innerHTML'],
  Ps = { key: 2 },
  Ls = m({
    __name: 'VPNavBarTitle',
    setup(s) {
      const { site: e, theme: t } = P(),
        { hasSidebar: o } = G(),
        { currentLang: n } = R(),
        i = $(() => {
          var v
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (v = t.value.logoLink) == null
              ? void 0
              : v.link
        }),
        l = $(() => {
          var v
          return typeof t.value.logoLink == 'string' || (v = t.value.logoLink) == null
            ? void 0
            : v.rel
        }),
        d = $(() => {
          var v
          return typeof t.value.logoLink == 'string' || (v = t.value.logoLink) == null
            ? void 0
            : v.target
        })
      return (v, y) => (
        a(),
        u(
          'div',
          { class: N(['VPNavBarTitle', { 'has-sidebar': r(o) }]) },
          [
            p(
              'a',
              { class: 'title', href: i.value ?? r(pe)(r(n).link), rel: l.value, target: d.value },
              [
                c(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                r(t).logo
                  ? (a(), k(Y, { key: 0, class: 'logo', image: r(t).logo }, null, 8, ['image']))
                  : h('', !0),
                r(t).siteTitle
                  ? (a(), u('span', { key: 1, innerHTML: r(t).siteTitle }, null, 8, ys))
                  : r(t).siteTitle === void 0
                    ? (a(), u('span', Ps, M(r(e).title), 1))
                    : h('', !0),
                c(v.$slots, 'nav-bar-title-after', {}, void 0, !0)
              ],
              8,
              $s
            )
          ],
          2
        )
      )
    }
  }),
  Vs = b(Ls, [['__scopeId', 'data-v-af59213c']]),
  Ss = { class: 'items' },
  Ts = { class: 'title' },
  Ns = m({
    __name: 'VPNavBarTranslations',
    setup(s) {
      const { theme: e } = P(),
        { localeLinks: t, currentLang: o } = R({ correspondingLink: !0 })
      return (n, i) =>
        r(t).length && r(o).label
          ? (a(),
            k(
              _e,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: r(e).langMenuLabel || 'Change language'
              },
              {
                default: f(() => [
                  p('div', Ss, [
                    p('p', Ts, M(r(o).label), 1),
                    (a(!0),
                    u(
                      I,
                      null,
                      B(r(t), (l) => (a(), k(te, { key: l.link, item: l }, null, 8, ['item']))),
                      128
                    ))
                  ])
                ]),
                _: 1
              },
              8,
              ['label']
            ))
          : h('', !0)
    }
  }),
  Ms = b(Ns, [['__scopeId', 'data-v-4c483500']]),
  ws = { class: 'wrapper' },
  Is = { class: 'container' },
  As = { class: 'title' },
  Hs = { class: 'content' },
  Bs = { class: 'content-body' },
  Cs = m({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(s) {
      const e = s,
        { y: t } = Se(),
        { hasSidebar: o } = G(),
        { frontmatter: n } = P(),
        i = T({})
      return (
        ve(() => {
          i.value = {
            'has-sidebar': o.value,
            home: n.value.layout === 'home',
            top: t.value === 0,
            'screen-open': e.isScreenOpen
          }
        }),
        (l, d) => (
          a(),
          u(
            'div',
            { class: N(['VPNavBar', i.value]) },
            [
              p('div', ws, [
                p('div', Is, [
                  p('div', As, [
                    _(Vs, null, {
                      'nav-bar-title-before': f(() => [
                        c(l.$slots, 'nav-bar-title-before', {}, void 0, !0)
                      ]),
                      'nav-bar-title-after': f(() => [
                        c(l.$slots, 'nav-bar-title-after', {}, void 0, !0)
                      ]),
                      _: 3
                    })
                  ]),
                  p('div', Hs, [
                    p('div', Bs, [
                      c(l.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      _(ks, { class: 'search' }),
                      _(us, { class: 'menu' }),
                      _(Ms, { class: 'translations' }),
                      _(bo, { class: 'appearance' }),
                      _(gs, { class: 'social-links' }),
                      _(es, { class: 'extra' }),
                      c(l.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      _(
                        os,
                        {
                          class: 'hamburger',
                          active: l.isScreenOpen,
                          onClick: d[0] || (d[0] = (v) => l.$emit('toggle-screen'))
                        },
                        null,
                        8,
                        ['active']
                      )
                    ])
                  ])
                ])
              ]),
              d[1] ||
                (d[1] = p('div', { class: 'divider' }, [p('div', { class: 'divider-line' })], -1))
            ],
            2
          )
        )
      )
    }
  }),
  Es = b(Cs, [['__scopeId', 'data-v-d29813af']]),
  Fs = { key: 0, class: 'VPNavScreenAppearance' },
  Ds = { class: 'text' },
  Os = m({
    __name: 'VPNavScreenAppearance',
    setup(s) {
      const { site: e, theme: t } = P()
      return (o, n) =>
        r(e).appearance && r(e).appearance !== 'force-dark' && r(e).appearance !== 'force-auto'
          ? (a(), u('div', Fs, [p('p', Ds, M(r(t).darkModeSwitchLabel || 'Appearance'), 1), _(he)]))
          : h('', !0)
    }
  }),
  Gs = b(Os, [['__scopeId', 'data-v-27aa94ca']]),
  Us = ['innerHTML'],
  js = m({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(s) {
      const e = x('close-screen')
      return (t, o) => (
        a(),
        k(
          F,
          {
            class: 'VPNavScreenMenuLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            onClick: r(e)
          },
          { default: f(() => [p('span', { innerHTML: t.item.text }, null, 8, Us)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick']
        )
      )
    }
  }),
  zs = b(js, [['__scopeId', 'data-v-24e96b81']]),
  Ws = ['innerHTML'],
  qs = m({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(s) {
      const e = x('close-screen')
      return (t, o) => (
        a(),
        k(
          F,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            onClick: r(e)
          },
          { default: f(() => [p('span', { innerHTML: t.item.text }, null, 8, Ws)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick']
        )
      )
    }
  }),
  Be = b(qs, [['__scopeId', 'data-v-72fc92f8']]),
  Ks = { class: 'VPNavScreenMenuGroupSection' },
  Rs = { key: 0, class: 'title' },
  Js = m({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        u('div', Ks, [
          e.text ? (a(), u('p', Rs, M(e.text), 1)) : h('', !0),
          (a(!0),
          u(
            I,
            null,
            B(e.items, (o) => (a(), k(Be, { key: o.text, item: o }, null, 8, ['item']))),
            128
          ))
        ])
      )
    }
  }),
  Ys = b(Js, [['__scopeId', 'data-v-3be33ad2']]),
  Qs = ['aria-controls', 'aria-expanded'],
  Xs = ['innerHTML'],
  Zs = ['id'],
  xs = { key: 0, class: 'item' },
  ea = { key: 1, class: 'item' },
  ta = { key: 2, class: 'group' },
  na = m({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(s) {
      const e = s,
        t = T(!1),
        o = $(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function n() {
        t.value = !t.value
      }
      return (i, l) => (
        a(),
        u(
          'div',
          { class: N(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            p(
              'button',
              { class: 'button', 'aria-controls': o.value, 'aria-expanded': t.value, onClick: n },
              [
                p('span', { class: 'button-text', innerHTML: i.text }, null, 8, Xs),
                l[0] || (l[0] = p('span', { class: 'vpi-plus button-icon' }, null, -1))
              ],
              8,
              Qs
            ),
            p(
              'div',
              { id: o.value, class: 'items' },
              [
                (a(!0),
                u(
                  I,
                  null,
                  B(
                    i.items,
                    (d) => (
                      a(),
                      u(
                        I,
                        { key: JSON.stringify(d) },
                        [
                          'link' in d
                            ? (a(), u('div', xs, [_(Be, { item: d }, null, 8, ['item'])]))
                            : 'component' in d
                              ? (a(),
                                u('div', ea, [
                                  (a(),
                                  k(
                                    E(d.component),
                                    j({ ref_for: !0 }, d.props, { 'screen-menu': '' }),
                                    null,
                                    16
                                  ))
                                ]))
                              : (a(),
                                u('div', ta, [
                                  _(Ys, { text: d.text, items: d.items }, null, 8, [
                                    'text',
                                    'items'
                                  ])
                                ]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ],
              8,
              Zs
            )
          ],
          2
        )
      )
    }
  }),
  oa = b(na, [['__scopeId', 'data-v-26b008e6']]),
  sa = { key: 0, class: 'VPNavScreenMenu' },
  aa = m({
    __name: 'VPNavScreenMenu',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).nav
          ? (a(),
            u('nav', sa, [
              (a(!0),
              u(
                I,
                null,
                B(
                  r(e).nav,
                  (n) => (
                    a(),
                    u(
                      I,
                      { key: JSON.stringify(n) },
                      [
                        'link' in n
                          ? (a(), k(zs, { key: 0, item: n }, null, 8, ['item']))
                          : 'component' in n
                            ? (a(),
                              k(
                                E(n.component),
                                j({ key: 1, ref_for: !0 }, n.props, { 'screen-menu': '' }),
                                null,
                                16
                              ))
                            : (a(),
                              k(oa, { key: 2, text: n.text || '', items: n.items }, null, 8, [
                                'text',
                                'items'
                              ]))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : h('', !0)
    }
  }),
  ra = m({
    __name: 'VPNavScreenSocialLinks',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).socialLinks
          ? (a(),
            k(ke, { key: 0, class: 'VPNavScreenSocialLinks', links: r(e).socialLinks }, null, 8, [
              'links'
            ]))
          : h('', !0)
    }
  }),
  ia = { class: 'list' },
  la = m({
    __name: 'VPNavScreenTranslations',
    setup(s) {
      const { localeLinks: e, currentLang: t } = R({ correspondingLink: !0 }),
        o = T(!1)
      function n() {
        o.value = !o.value
      }
      return (i, l) =>
        r(e).length && r(t).label
          ? (a(),
            u(
              'div',
              { key: 0, class: N(['VPNavScreenTranslations', { open: o.value }]) },
              [
                p('button', { class: 'title', onClick: n }, [
                  l[0] || (l[0] = p('span', { class: 'vpi-languages icon lang' }, null, -1)),
                  z(' ' + M(r(t).label) + ' ', 1),
                  l[1] || (l[1] = p('span', { class: 'vpi-chevron-down icon chevron' }, null, -1))
                ]),
                p('ul', ia, [
                  (a(!0),
                  u(
                    I,
                    null,
                    B(
                      r(e),
                      (d) => (
                        a(),
                        u('li', { key: d.link, class: 'item' }, [
                          _(
                            F,
                            { class: 'link', href: d.link },
                            { default: f(() => [z(M(d.text), 1)]), _: 2 },
                            1032,
                            ['href']
                          )
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ],
              2
            ))
          : h('', !0)
    }
  }),
  ca = b(la, [['__scopeId', 'data-v-4106dc68']]),
  ua = { class: 'container' },
  da = m({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(s) {
      const e = T(null),
        t = Te(ee ? document.body : null)
      return (o, n) => (
        a(),
        k(
          ce,
          {
            name: 'fade',
            onEnter: n[0] || (n[0] = (i) => (t.value = !0)),
            onAfterLeave: n[1] || (n[1] = (i) => (t.value = !1))
          },
          {
            default: f(() => [
              o.open
                ? (a(),
                  u(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: e, id: 'VPNavScreen' },
                    [
                      p('div', ua, [
                        c(o.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        _(aa, { class: 'menu' }),
                        _(ca, { class: 'translations' }),
                        _(Gs, { class: 'appearance' }),
                        _(ra, { class: 'social-links' }),
                        c(o.$slots, 'nav-screen-content-after', {}, void 0, !0)
                      ])
                    ],
                    512
                  ))
                : h('', !0)
            ]),
            _: 3
          }
        )
      )
    }
  }),
  va = b(da, [['__scopeId', 'data-v-8d6a723a']]),
  pa = { key: 0, class: 'VPNav' },
  fa = m({
    __name: 'VPNav',
    setup(s) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: o } = lo(),
        { frontmatter: n } = P(),
        i = $(() => n.value.navbar !== !1)
      return (
        Ne('close-screen', t),
        Q(() => {
          ee && document.documentElement.classList.toggle('hide-nav', !i.value)
        }),
        (l, d) =>
          i.value
            ? (a(),
              u('header', pa, [
                _(
                  Es,
                  { 'is-screen-open': r(e), onToggleScreen: r(o) },
                  {
                    'nav-bar-title-before': f(() => [
                      c(l.$slots, 'nav-bar-title-before', {}, void 0, !0)
                    ]),
                    'nav-bar-title-after': f(() => [
                      c(l.$slots, 'nav-bar-title-after', {}, void 0, !0)
                    ]),
                    'nav-bar-content-before': f(() => [
                      c(l.$slots, 'nav-bar-content-before', {}, void 0, !0)
                    ]),
                    'nav-bar-content-after': f(() => [
                      c(l.$slots, 'nav-bar-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen']
                ),
                _(
                  va,
                  { open: r(e) },
                  {
                    'nav-screen-content-before': f(() => [
                      c(l.$slots, 'nav-screen-content-before', {}, void 0, !0)
                    ]),
                    'nav-screen-content-after': f(() => [
                      c(l.$slots, 'nav-screen-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['open']
                )
              ]))
            : h('', !0)
      )
    }
  }),
  ha = b(fa, [['__scopeId', 'data-v-3693cf42']]),
  ma = ['role', 'tabindex'],
  _a = { key: 1, class: 'items' },
  ka = m({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(s) {
      const e = s,
        {
          collapsed: t,
          collapsible: o,
          isLink: n,
          isActiveLink: i,
          hasActiveLink: l,
          hasChildren: d,
          toggle: v
        } = dt($(() => e.item)),
        y = $(() => (d.value ? 'section' : 'div')),
        L = $(() => (n.value ? 'a' : 'div')),
        g = $(() => (d.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p')),
        V = $(() => (n.value ? void 0 : 'button')),
        w = $(() => [
          [`level-${e.depth}`],
          { collapsible: o.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': i.value },
          { 'has-active': l.value }
        ])
      function A(S) {
        ;('key' in S && S.key !== 'Enter') || (!e.item.link && v())
      }
      function H() {
        e.item.link && v()
      }
      return (S, C) => {
        const U = q('VPSidebarItem', !0)
        return (
          a(),
          k(
            E(y.value),
            { class: N(['VPSidebarItem', w.value]) },
            {
              default: f(() => [
                S.item.text
                  ? (a(),
                    u(
                      'div',
                      j(
                        { key: 0, class: 'item', role: V.value },
                        ze(S.item.items ? { click: A, keydown: A } : {}, !0),
                        { tabindex: S.item.items && 0 }
                      ),
                      [
                        C[1] || (C[1] = p('div', { class: 'indicator' }, null, -1)),
                        S.item.link
                          ? (a(),
                            k(
                              F,
                              {
                                key: 0,
                                tag: L.value,
                                class: 'link',
                                href: S.item.link,
                                rel: S.item.rel,
                                target: S.item.target
                              },
                              {
                                default: f(() => [
                                  (a(),
                                  k(
                                    E(g.value),
                                    { class: 'text', innerHTML: S.item.text },
                                    null,
                                    8,
                                    ['innerHTML']
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['tag', 'href', 'rel', 'target']
                            ))
                          : (a(),
                            k(
                              E(g.value),
                              { key: 1, class: 'text', innerHTML: S.item.text },
                              null,
                              8,
                              ['innerHTML']
                            )),
                        S.item.collapsed != null && S.item.items && S.item.items.length
                          ? (a(),
                            u(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: H,
                                onKeydown: We(H, ['enter']),
                                tabindex: '0'
                              },
                              C[0] ||
                                (C[0] = [
                                  p('span', { class: 'vpi-chevron-right caret-icon' }, null, -1)
                                ]),
                              32
                            ))
                          : h('', !0)
                      ],
                      16,
                      ma
                    ))
                  : h('', !0),
                S.item.items && S.item.items.length
                  ? (a(),
                    u('div', _a, [
                      S.depth < 5
                        ? (a(!0),
                          u(
                            I,
                            { key: 0 },
                            B(
                              S.item.items,
                              (K) => (
                                a(),
                                k(U, { key: K.text, item: K, depth: S.depth + 1 }, null, 8, [
                                  'item',
                                  'depth'
                                ])
                              )
                            ),
                            128
                          ))
                        : h('', !0)
                    ]))
                  : h('', !0)
              ]),
              _: 1
            },
            8,
            ['class']
          )
        )
      }
    }
  }),
  ba = b(ka, [['__scopeId', 'data-v-d81687f5']]),
  ga = m({
    __name: 'VPSidebarGroup',
    props: { items: {} },
    setup(s) {
      const e = T(!0)
      let t = null
      return (
        O(() => {
          t = setTimeout(() => {
            ;(t = null), (e.value = !1)
          }, 300)
        }),
        qe(() => {
          t != null && (clearTimeout(t), (t = null))
        }),
        (o, n) => (
          a(!0),
          u(
            I,
            null,
            B(
              o.items,
              (i) => (
                a(),
                u(
                  'div',
                  { key: i.text, class: N(['group', { 'no-transition': e.value }]) },
                  [_(ba, { item: i, depth: 0 }, null, 8, ['item'])],
                  2
                )
              )
            ),
            128
          )
        )
      )
    }
  }),
  $a = b(ga, [['__scopeId', 'data-v-47855da8']]),
  ya = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1'
  },
  Pa = m({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(s) {
      const { sidebarGroups: e, hasSidebar: t } = G(),
        o = s,
        n = T(null),
        i = Te(ee ? document.body : null)
      D(
        [o, n],
        () => {
          var d
          o.open ? ((i.value = !0), (d = n.value) == null || d.focus()) : (i.value = !1)
        },
        { immediate: !0, flush: 'post' }
      )
      const l = T(0)
      return (
        D(
          e,
          () => {
            l.value += 1
          },
          { deep: !0 }
        ),
        (d, v) =>
          r(t)
            ? (a(),
              u(
                'aside',
                {
                  key: 0,
                  class: N(['VPSidebar', { open: d.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick: v[0] || (v[0] = Ke(() => {}, ['stop']))
                },
                [
                  v[2] || (v[2] = p('div', { class: 'curtain' }, null, -1)),
                  p('nav', ya, [
                    v[1] ||
                      (v[1] = p(
                        'span',
                        { class: 'visually-hidden', id: 'sidebar-aria-label' },
                        ' Sidebar Navigation ',
                        -1
                      )),
                    c(d.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(), k($a, { items: r(e), key: l.value }, null, 8, ['items'])),
                    c(d.$slots, 'sidebar-nav-after', {}, void 0, !0)
                  ])
                ],
                2
              ))
            : h('', !0)
      )
    }
  }),
  La = b(Pa, [['__scopeId', 'data-v-24e1e7c6']]),
  Va = m({
    __name: 'VPSkipLink',
    setup(s) {
      const { theme: e } = P(),
        t = Z(),
        o = T()
      D(
        () => t.path,
        () => o.value.focus()
      )
      function n({ target: i }) {
        const l = document.getElementById(decodeURIComponent(i.hash).slice(1))
        if (l) {
          const d = () => {
            l.removeAttribute('tabindex'), l.removeEventListener('blur', d)
          }
          l.setAttribute('tabindex', '-1'),
            l.addEventListener('blur', d),
            l.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (i, l) => (
        a(),
        u(
          I,
          null,
          [
            p('span', { ref_key: 'backToTop', ref: o, tabindex: '-1' }, null, 512),
            p(
              'a',
              { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: n },
              M(r(e).skipToContentLabel || 'Skip to content'),
              1
            )
          ],
          64
        )
      )
    }
  }),
  Sa = b(Va, [['__scopeId', 'data-v-69475686']]),
  Ta = m({
    __name: 'Layout',
    setup(s) {
      const { isOpen: e, open: t, close: o } = G(),
        n = Z()
      D(() => n.path, o), ut(e, o)
      const { frontmatter: i } = P(),
        l = Re(),
        d = $(() => !!l['home-hero-image'])
      return (
        Ne('hero-image-slot-exists', d),
        (v, y) => {
          const L = q('Content')
          return r(i).layout !== !1
            ? (a(),
              u(
                'div',
                { key: 0, class: N(['Layout', r(i).pageClass]) },
                [
                  c(v.$slots, 'layout-top', {}, void 0, !0),
                  _(Sa),
                  _(Xe, { class: 'backdrop', show: r(e), onClick: r(o) }, null, 8, [
                    'show',
                    'onClick'
                  ]),
                  _(ha, null, {
                    'nav-bar-title-before': f(() => [
                      c(v.$slots, 'nav-bar-title-before', {}, void 0, !0)
                    ]),
                    'nav-bar-title-after': f(() => [
                      c(v.$slots, 'nav-bar-title-after', {}, void 0, !0)
                    ]),
                    'nav-bar-content-before': f(() => [
                      c(v.$slots, 'nav-bar-content-before', {}, void 0, !0)
                    ]),
                    'nav-bar-content-after': f(() => [
                      c(v.$slots, 'nav-bar-content-after', {}, void 0, !0)
                    ]),
                    'nav-screen-content-before': f(() => [
                      c(v.$slots, 'nav-screen-content-before', {}, void 0, !0)
                    ]),
                    'nav-screen-content-after': f(() => [
                      c(v.$slots, 'nav-screen-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  }),
                  _(io, { open: r(e), onOpenMenu: r(t) }, null, 8, ['open', 'onOpenMenu']),
                  _(
                    La,
                    { open: r(e) },
                    {
                      'sidebar-nav-before': f(() => [
                        c(v.$slots, 'sidebar-nav-before', {}, void 0, !0)
                      ]),
                      'sidebar-nav-after': f(() => [
                        c(v.$slots, 'sidebar-nav-after', {}, void 0, !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['open']
                  ),
                  _(qn, null, {
                    'page-top': f(() => [c(v.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': f(() => [c(v.$slots, 'page-bottom', {}, void 0, !0)]),
                    'not-found': f(() => [c(v.$slots, 'not-found', {}, void 0, !0)]),
                    'home-hero-before': f(() => [c(v.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info-before': f(() => [
                      c(v.$slots, 'home-hero-info-before', {}, void 0, !0)
                    ]),
                    'home-hero-info': f(() => [c(v.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-info-after': f(() => [
                      c(v.$slots, 'home-hero-info-after', {}, void 0, !0)
                    ]),
                    'home-hero-actions-after': f(() => [
                      c(v.$slots, 'home-hero-actions-after', {}, void 0, !0)
                    ]),
                    'home-hero-image': f(() => [c(v.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': f(() => [c(v.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': f(() => [
                      c(v.$slots, 'home-features-before', {}, void 0, !0)
                    ]),
                    'home-features-after': f(() => [
                      c(v.$slots, 'home-features-after', {}, void 0, !0)
                    ]),
                    'doc-footer-before': f(() => [
                      c(v.$slots, 'doc-footer-before', {}, void 0, !0)
                    ]),
                    'doc-before': f(() => [c(v.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': f(() => [c(v.$slots, 'doc-after', {}, void 0, !0)]),
                    'doc-top': f(() => [c(v.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': f(() => [c(v.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'aside-top': f(() => [c(v.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-bottom': f(() => [c(v.$slots, 'aside-bottom', {}, void 0, !0)]),
                    'aside-outline-before': f(() => [
                      c(v.$slots, 'aside-outline-before', {}, void 0, !0)
                    ]),
                    'aside-outline-after': f(() => [
                      c(v.$slots, 'aside-outline-after', {}, void 0, !0)
                    ]),
                    'aside-ads-before': f(() => [c(v.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': f(() => [c(v.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    _: 3
                  }),
                  _(Qn),
                  c(v.$slots, 'layout-bottom', {}, void 0, !0)
                ],
                2
              ))
            : (a(), k(L, { key: 1 }))
        }
      )
    }
  }),
  Na = b(Ta, [['__scopeId', 'data-v-c0589ad1']]),
  $e = {
    Layout: Na,
    enhanceApp: ({ app: s }) => {
      s.component('Badge', Je)
    }
  }
function Ma() {
  if (document) {
    let s = function () {
      e.classList.contains('dark')
        ? e.setAttribute('data-theme', 'dark')
        : e.setAttribute('data-theme', 'light')
    }
    const e = document.querySelector('html')
    s()
    const t = { attributes: !0 },
      o = (i, l) => {
        for (const d of i) d.attributeName === 'class' && s()
      }
    new MutationObserver(o).observe(e, t)
  }
}
const Ia = {
  extends: $e,
  Layout: () =>
    be(
      m({
        setup() {
          return (
            O(() => {
              Ma()
            }),
            () => be($e.Layout, null, {})
          )
        }
      })
    ),
  enhanceApp({ app: s, router: e, siteData: t }) {}
}
export { Ia as R }
