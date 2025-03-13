import {
  af as Ln,
  ag as jn,
  d as _,
  L as xe,
  c as D,
  o as O,
  j,
  n as U,
  k as h,
  t as ne,
  r as F,
  V as Oe,
  h as k,
  p as C,
  ah as ut,
  b as R,
  e as oe,
  w as S,
  G as N,
  F as re,
  B as me,
  H as zn,
  Z as nt,
  ai as ct,
  aj as Ne,
  ak as Lo,
  K as J,
  a as an,
  al as jo,
  q as H,
  am as $e,
  P as V,
  an as ke,
  ao as Ke,
  ap as zo,
  aq as Ce,
  a0 as he,
  s as Y,
  ar as No,
  as as Nn,
  x as dt,
  at as Ho,
  au as Wo,
  av as Vo,
  aw as Uo,
  ax as ln,
  ay as Hn,
  v as ft,
  az as Ko,
  z as Jo,
  N as Wn,
  y as qo,
  aA as Vn,
  aB as Un,
  Y as Go,
  aC as Xo,
  D as Kn,
  S as Yo,
  aD as Be,
  aE as Qo,
  aF as Zo,
  aG as er,
  T as tr
} from './framework.D5jwEaSD.js'
const nr = _({
    __name: 'JiaHaoLoading',
    props: { type: { default: 'spinner' }, color: {}, size: { default: 'md' } },
    setup(e) {
      const t = e,
        n = k(() =>
          t.type
            ? {
                spinner: 'loading-spinner',
                dots: 'loading-dots',
                ring: 'loading-ring',
                ball: 'loading-ball',
                bars: 'loading-bars',
                infinity: 'loading-infinity'
              }[t.type]
            : ''
        ),
        o = k(() =>
          t.size
            ? { xs: 'loading-xs', sm: 'loading-sm', md: 'loading-md', lg: 'loading-lg' }[t.size]
            : ''
        ),
        r = k(() => {
          if (t.color)
            return {
              primary: 'text-primary',
              secondary: 'text-secondary',
              accent: 'text-accent',
              neutral: 'text-neutral',
              success: 'text-success',
              error: 'text-error',
              warning: 'text-warning',
              info: 'text-info'
            }[t.color]
        })
      return (a, i) => (
        O(), D('span', { class: U(['loading', [n.value, o.value, r.value]]) }, null, 2)
      )
    }
  }),
  hs = _({
    __name: 'JiaHaoButton',
    props: {
      active: { type: Boolean },
      circle: { type: Boolean },
      square: { type: Boolean },
      wide: { type: Boolean, default: !1 },
      loading: { type: Boolean },
      outline: { type: Boolean, default: !1 },
      glass: { type: Boolean },
      color: {},
      size: {}
    },
    setup(e) {
      const t = e,
        n = k(() =>
          t.color
            ? {
                neutral: 'btn-neutral',
                primary: 'btn-primary',
                secondary: 'btn-secondary',
                accent: 'btn-accent',
                error: 'btn-error',
                warning: 'btn-warning',
                success: 'btn-success',
                info: 'btn-info',
                ghost: 'btn-ghost',
                link: 'btn-link'
              }[t.color]
            : ''
        ),
        o = k(() =>
          t.size ? { xs: 'btn-xs', sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg' }[t.size] : ''
        ),
        r = k(() => ({
          'btn-active': t.active,
          'btn-circle': t.circle,
          'btn-square': t.square,
          'btn-wide': t.wide,
          'btn-outline': t.outline,
          glass: t.glass
        }))
      return (a, i) => (
        O(),
        D(
          'button',
          { class: U(['btn', [n.value, o.value, r.value]]) },
          [
            a.loading ? (O(), R(nr, { key: 0, size: a.size }, null, 8, ['size'])) : oe('', !0),
            F(a.$slots, 'default')
          ],
          2
        )
      )
    }
  }),
  gs = _({
    __name: 'JiaHaoTab',
    props: { name: {} },
    setup(e) {
      const t = e
      xe('JiaHaoVueTabsComponentRegisterTab', (r) => {})(t.name)
      const n = xe('JiaHaoVueTabsData', C({ activeTab: '' })),
        o = k(() => n.value.activeTab === t.name)
      return (r, a) => (
        O(),
        D(
          'div',
          { role: 'tabpanel', class: U(['tabpanel', { hidden: !o.value }]) },
          [F(r.$slots, 'default')],
          2
        )
      )
    }
  }),
  or = ['data-type'],
  rr = ['onClick', 'aria-label'],
  ar = _({
    __name: 'JiaHaoTabs',
    props: ct({ type: { default: 'lifted' } }, { activeTab: {}, activeTabModifiers: {} }),
    emits: ['update:activeTab'],
    setup(e) {
      const t = e,
        n = C([])
      function o(c) {
        n.value.includes(c) || (n.value.push(c), a.value || (a.value = c))
      }
      Oe('JiaHaoVueTabsComponentRegisterTab', o)
      const r = Ne(e, 'activeTab'),
        a = C(r.value)
      H(a, () => (r.value = a.value))
      const i = k(() => ({ activeTab: a.value }))
      Oe('JiaHaoVueTabsData', i)
      const l = k(
        () => ({ bordered: 'tabs-bordered', boxed: 'tabs-boxed', lifted: 'tabs-lifted' })[t.type]
      )
      return (c, d) => (
        O(),
        D(
          'div',
          { 'data-type': c.type },
          [
            j(
              'div',
              { role: 'tablist', class: U(['tabs', l.value]) },
              [
                (O(!0),
                D(
                  re,
                  null,
                  me(
                    n.value,
                    (s) => (
                      O(),
                      D(
                        'button',
                        {
                          key: s,
                          onClick: (u) => (a.value = s),
                          role: 'tab',
                          class: U(['tab', { 'tab-active': r.value === s }]),
                          'aria-label': s
                        },
                        ne(s),
                        11,
                        rr
                      )
                    )
                  ),
                  128
                ))
              ],
              2
            ),
            F(c.$slots, 'default', {}, void 0, !0)
          ],
          8,
          or
        )
      )
    }
  }),
  Jn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [o, r] of t) n[o] = r
    return n
  },
  ys = Jn(ar, [['__scopeId', 'data-v-cbb23dc3']]),
  ir = { class: 'border mockup-browser border-base-300' },
  lr = { class: 'mockup-browser-toolbar' },
  sr = { class: 'border input border-base-300' },
  ur = { class: 'flex justify-center px-4 py-16 border-t border-base-300' },
  bs = _({
    __name: 'JiaHaoBrowserMockup',
    props: { url: {} },
    setup(e) {
      return (t, n) => (
        O(),
        D('div', ir, [
          j('div', lr, [j('div', sr, ne(t.url), 1)]),
          j('div', ur, [F(t.$slots, 'default')])
        ])
      )
    }
  }),
  ws = _({
    __name: 'JiaHaoBadge',
    props: { color: {}, size: {}, outline: { type: Boolean } },
    setup(e) {
      const t = e,
        n = k(() =>
          t.color
            ? {
                primary: 'badge-primary',
                secondary: 'badge-secondary',
                neutral: 'badge-neutral',
                accent: 'badge-accent',
                success: 'badge-success',
                warning: 'badge-warning',
                error: 'badge-error',
                info: 'badge-info',
                ghost: 'badge-ghost'
              }[t.color]
            : ''
        ),
        o = k(() => (t.outline ? 'badge-outline' : '')),
        r = k(() =>
          t.size ? { xs: 'badge-xs', sm: 'badge-sm', md: 'badge-md', lg: 'badge-lg' }[t.size] : ''
        ),
        a = k(() => [n.value, o.value, r.value])
      return (i, l) => (
        O(), D('div', { class: U(['badge', a.value]) }, [F(i.$slots, 'default')], 2)
      )
    }
  })
function cr(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function sn(e, t) {
  ;(e.props = e.props || {}), (e.props.class = e.props.class || '')
  const n = ['half-1', 'half-2']
  if (typeof e.props.class == 'string') {
    e.props.class = e.props.class
      .split(' ')
      .filter((r) => !r.startsWith('mask-') || r === 'mask')
      .join(' ')
    const o = n.includes(t.arg ?? '') ? `mask-${t.arg}` : ''
    e.props.class += ` mask mask-${t.value} ${o}`
  }
  Array.isArray(e.props.class) &&
    ((e.props.class = e.props.class.filter((o) => !o.startsWith('mask-') || o === 'mask')),
    e.props.class.push(`mask-${t.value}`),
    e.props.class.push('mask'),
    n.includes(t.arg ?? '') && e.props.class.push(`mask-${t.arg}`)),
    cr(e.props.class) &&
      (Object.keys(e.props.class).forEach((o) => {
        o.startsWith('mask-') && e.props && delete e.props.class[o]
      }),
      (e.props.class.mask = !0),
      (e.props.class[`mask-${t.value}`] = !0),
      t.arg === 'half-1' && (e.props.class['mask-half-1'] = !0),
      t.arg === 'half-2' && (e.props.class['mask-half-2'] = !0))
}
const qn = {
    created(e, t, n) {
      sn(n, t)
    },
    beforeUpdate(e, t, n) {
      sn(n, t)
    }
  },
  dr = { key: 0, type: 'radio', class: 'hidden', checked: '' },
  fr = ['value'],
  xs = _({
    inheritAttrs: !1,
    __name: 'JiaHaoRating',
    props: ct(
      {
        size: { default: 'md' },
        mask: { default: 'star' },
        outOf: { default: 5 },
        allowHalf: { type: Boolean }
      },
      { modelValue: { default: 0 }, modelModifiers: {} }
    ),
    emits: ['update:modelValue'],
    setup(e) {
      const t = e,
        n = Ne(e, 'modelValue'),
        o = (l) => (t.allowHalf ? (l % 2 ? 'half-1' : 'half-2') : ''),
        r = k(() => (t.allowHalf ? t.outOf * 2 : t.outOf)),
        a = k(
          () => ({ xs: 'rating-xs', sm: 'rating-sm', md: 'rating-md', lg: 'rating-lg' })[t.size]
        ),
        i = k(() => [{ 'rating-half': t.allowHalf }, a.value])
      return (l, c) => (
        O(),
        D(
          'div',
          { class: U(['flex rating', i.value]) },
          [
            n.value === 0 ? (O(), D('input', dr)) : oe('', !0),
            (O(!0),
            D(
              re,
              null,
              me(r.value, (d) =>
                ut(
                  (O(),
                  D(
                    'input',
                    J({ key: d, type: 'radio', ref_for: !0 }, l.$attrs, {
                      value: l.allowHalf ? d / 2 : d,
                      'onUpdate:modelValue': c[0] || (c[0] = (s) => (n.value = s))
                    }),
                    null,
                    16,
                    fr
                  )),
                  [
                    [h(qn), l.mask, o(d)],
                    [Lo, n.value]
                  ]
                )
              ),
              128
            ))
          ],
          2
        )
      )
    }
  }),
  pr = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let vr = (e = 21) => {
  let t = '',
    n = crypto.getRandomValues(new Uint8Array((e |= 0)))
  for (; e--; ) t += pr[n[e] & 63]
  return t
}
const mr = { class: 'w-full join join-vertical' },
  Os = _({
    __name: 'JiaHaoAccordian',
    setup(e) {
      return Oe('accordianId', vr()), (t, n) => (O(), D('div', mr, [F(t.$slots, 'default')]))
    }
  }),
  hr = { class: 'join join-vertical w-full' },
  gr = { class: 'collapse collapse-arrow join-item border-base-300 border' },
  yr = ['name'],
  br = { class: 'collapse-title text-xl font-medium' },
  wr = { class: 'collapse-content' },
  ks = _({
    __name: 'JiaHaoAccordianPanel',
    props: { title: {} },
    setup(e) {
      const t = xe('accordianId', '')
      if (!t) throw new Error('JiaHaoAccodianPanel must be used inside a JiaHaoAccordian')
      return (n, o) => (
        O(),
        D('div', hr, [
          j('div', gr, [
            j('input', { type: 'radio', name: h(t), class: U('checked') }, null, 8, yr),
            j('div', br, ne(n.title), 1),
            j('div', wr, [F(n.$slots, 'default')])
          ])
        ])
      )
    }
  }),
  Gn = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  pt = (e, t, n, o = '') => {
    const r = e.split(':')
    if (e.slice(0, 1) === '@') {
      if (r.length < 2 || r.length > 3) return null
      o = r.shift().slice(1)
    }
    if (r.length > 3 || !r.length) return null
    if (r.length > 1) {
      const l = r.pop(),
        c = r.pop(),
        d = { provider: r.length > 0 ? r[0] : o, prefix: c, name: l }
      return t && !et(d) ? null : d
    }
    const a = r[0],
      i = a.split('-')
    if (i.length > 1) {
      const l = { provider: o, prefix: i.shift(), name: i.join('-') }
      return t && !et(l) ? null : l
    }
    if (n && o === '') {
      const l = { provider: o, prefix: '', name: a }
      return t && !et(l, n) ? null : l
    }
    return null
  },
  et = (e, t) => (e ? !!(((t && e.prefix === '') || e.prefix) && e.name) : !1),
  Xn = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  ot = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  vt = Object.freeze({ ...Xn, ...ot }),
  Pt = Object.freeze({ ...vt, body: '', hidden: !1 })
function xr(e, t) {
  const n = {}
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0)
  const o = ((e.rotate || 0) + (t.rotate || 0)) % 4
  return o && (n.rotate = o), n
}
function un(e, t) {
  const n = xr(e, t)
  for (const o in Pt)
    o in ot
      ? o in e && !(o in n) && (n[o] = ot[o])
      : o in t
        ? (n[o] = t[o])
        : o in e && (n[o] = e[o])
  return n
}
function Or(e, t) {
  const n = e.icons,
    o = e.aliases || Object.create(null),
    r = Object.create(null)
  function a(i) {
    if (n[i]) return (r[i] = [])
    if (!(i in r)) {
      r[i] = null
      const l = o[i] && o[i].parent,
        c = l && a(l)
      c && (r[i] = [l].concat(c))
    }
    return r[i]
  }
  return Object.keys(n).concat(Object.keys(o)).forEach(a), r
}
function kr(e, t, n) {
  const o = e.icons,
    r = e.aliases || Object.create(null)
  let a = {}
  function i(l) {
    a = un(o[l] || r[l], a)
  }
  return i(t), n.forEach(i), un(e, a)
}
function Yn(e, t) {
  const n = []
  if (typeof e != 'object' || typeof e.icons != 'object') return n
  e.not_found instanceof Array &&
    e.not_found.forEach((r) => {
      t(r, null), n.push(r)
    })
  const o = Or(e)
  for (const r in o) {
    const a = o[r]
    a && (t(r, kr(e, r, a)), n.push(r))
  }
  return n
}
const Ar = { provider: '', aliases: {}, not_found: {}, ...Xn }
function bt(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1
  return !0
}
function Qn(e) {
  if (typeof e != 'object' || e === null) return null
  const t = e
  if (typeof t.prefix != 'string' || !e.icons || typeof e.icons != 'object' || !bt(e, Ar))
    return null
  const n = t.icons
  for (const r in n) {
    const a = n[r]
    if (!r || typeof a.body != 'string' || !bt(a, Pt)) return null
  }
  const o = t.aliases || Object.create(null)
  for (const r in o) {
    const a = o[r],
      i = a.parent
    if (!r || typeof i != 'string' || (!n[i] && !o[i]) || !bt(a, Pt)) return null
  }
  return t
}
const cn = Object.create(null)
function Cr(e, t) {
  return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() }
}
function Re(e, t) {
  const n = cn[e] || (cn[e] = Object.create(null))
  return n[t] || (n[t] = Cr(e, t))
}
function Zn(e, t) {
  return Qn(t)
    ? Yn(t, (n, o) => {
        o ? (e.icons[n] = o) : e.missing.add(n)
      })
    : []
}
function Er(e, t, n) {
  try {
    if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0
  } catch {}
  return !1
}
let He = !1
function eo(e) {
  return typeof e == 'boolean' && (He = e), He
}
function Pr(e) {
  const t = typeof e == 'string' ? pt(e, !0, He) : e
  if (t) {
    const n = Re(t.provider, t.prefix),
      o = t.name
    return n.icons[o] || (n.missing.has(o) ? null : void 0)
  }
}
function Tr(e, t) {
  const n = pt(e, !0, He)
  if (!n) return !1
  const o = Re(n.provider, n.prefix)
  return t ? Er(o, n.name, t) : (o.missing.add(n.name), !0)
}
function _r(e, t) {
  if (typeof e != 'object') return !1
  if ((typeof t != 'string' && (t = e.provider || ''), He && !t && !e.prefix)) {
    let r = !1
    return (
      Qn(e) &&
        ((e.prefix = ''),
        Yn(e, (a, i) => {
          Tr(a, i) && (r = !0)
        })),
      r
    )
  }
  const n = e.prefix
  if (!et({ prefix: n, name: 'a' })) return !1
  const o = Re(t, n)
  return !!Zn(o, e)
}
const to = Object.freeze({ width: null, height: null }),
  no = Object.freeze({ ...to, ...ot }),
  Br = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  Sr = /^-?[0-9.]*[0-9]+[0-9.]*$/g
function dn(e, t, n) {
  if (t === 1) return e
  if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n
  if (typeof e != 'string') return e
  const o = e.split(Br)
  if (o === null || !o.length) return e
  const r = []
  let a = o.shift(),
    i = Sr.test(a)
  for (;;) {
    if (i) {
      const l = parseFloat(a)
      isNaN(l) ? r.push(a) : r.push(Math.ceil(l * t * n) / n)
    } else r.push(a)
    if (((a = o.shift()), a === void 0)) return r.join('')
    i = !i
  }
}
function Mr(e, t = 'defs') {
  let n = ''
  const o = e.indexOf('<' + t)
  for (; o >= 0; ) {
    const r = e.indexOf('>', o),
      a = e.indexOf('</' + t)
    if (r === -1 || a === -1) break
    const i = e.indexOf('>', a)
    if (i === -1) break
    ;(n += e.slice(r + 1, a).trim()), (e = e.slice(0, o).trim() + e.slice(i + 1))
  }
  return { defs: n, content: e }
}
function Dr(e, t) {
  return e ? '<defs>' + e + '</defs>' + t : t
}
function Fr(e, t, n) {
  const o = Mr(e)
  return Dr(o.defs, t + o.content + n)
}
const Rr = (e) => e === 'unset' || e === 'undefined' || e === 'none'
function Ir(e, t) {
  const n = { ...vt, ...e },
    o = { ...no, ...t },
    r = { left: n.left, top: n.top, width: n.width, height: n.height }
  let a = n.body
  ;[n, o].forEach((g) => {
    const v = [],
      y = g.hFlip,
      x = g.vFlip
    let w = g.rotate
    y
      ? x
        ? (w += 2)
        : (v.push(
            'translate(' + (r.width + r.left).toString() + ' ' + (0 - r.top).toString() + ')'
          ),
          v.push('scale(-1 1)'),
          (r.top = r.left = 0))
      : x &&
        (v.push('translate(' + (0 - r.left).toString() + ' ' + (r.height + r.top).toString() + ')'),
        v.push('scale(1 -1)'),
        (r.top = r.left = 0))
    let A
    switch ((w < 0 && (w -= Math.floor(w / 4) * 4), (w = w % 4), w)) {
      case 1:
        ;(A = r.height / 2 + r.top),
          v.unshift('rotate(90 ' + A.toString() + ' ' + A.toString() + ')')
        break
      case 2:
        v.unshift(
          'rotate(180 ' +
            (r.width / 2 + r.left).toString() +
            ' ' +
            (r.height / 2 + r.top).toString() +
            ')'
        )
        break
      case 3:
        ;(A = r.width / 2 + r.left),
          v.unshift('rotate(-90 ' + A.toString() + ' ' + A.toString() + ')')
        break
    }
    w % 2 === 1 &&
      (r.left !== r.top && ((A = r.left), (r.left = r.top), (r.top = A)),
      r.width !== r.height && ((A = r.width), (r.width = r.height), (r.height = A))),
      v.length && (a = Fr(a, '<g transform="' + v.join(' ') + '">', '</g>'))
  })
  const i = o.width,
    l = o.height,
    c = r.width,
    d = r.height
  let s, u
  i === null
    ? ((u = l === null ? '1em' : l === 'auto' ? d : l), (s = dn(u, c / d)))
    : ((s = i === 'auto' ? c : i), (u = l === null ? dn(s, d / c) : l === 'auto' ? d : l))
  const f = {},
    p = (g, v) => {
      Rr(v) || (f[g] = v.toString())
    }
  p('width', s), p('height', u)
  const m = [r.left, r.top, c, d]
  return (f.viewBox = m.join(' ')), { attributes: f, viewBox: m, body: a }
}
const $r = /\sid="(\S+)"/g,
  Lr = 'IconifyId' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16)
let jr = 0
function zr(e, t = Lr) {
  const n = []
  let o
  for (; (o = $r.exec(e)); ) n.push(o[1])
  if (!n.length) return e
  const r = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16)
  return (
    n.forEach((a) => {
      const i = typeof t == 'function' ? t(a) : t + (jr++).toString(),
        l = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      e = e.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', 'g'), '$1' + i + r + '$3')
    }),
    (e = e.replace(new RegExp(r, 'g'), '')),
    e
  )
}
const Tt = Object.create(null)
function Nr(e, t) {
  Tt[e] = t
}
function _t(e) {
  return Tt[e] || Tt['']
}
function jt(e) {
  let t
  if (typeof e.resources == 'string') t = [e.resources]
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null
  return {
    resources: t,
    path: e.path || '/',
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1
  }
}
const zt = Object.create(null),
  Ge = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
  Bt = []
for (; Ge.length > 0; )
  Ge.length === 1 || Math.random() > 0.5 ? Bt.push(Ge.shift()) : Bt.push(Ge.pop())
zt[''] = jt({ resources: ['https://api.iconify.design'].concat(Bt) })
function Hr(e, t) {
  const n = jt(t)
  return n === null ? !1 : ((zt[e] = n), !0)
}
function Nt(e) {
  return zt[e]
}
const Wr = () => {
  let e
  try {
    if (((e = fetch), typeof e == 'function')) return e
  } catch {}
}
let fn = Wr()
function Vr(e, t) {
  const n = Nt(e)
  if (!n) return 0
  let o
  if (!n.maxURL) o = 0
  else {
    let r = 0
    n.resources.forEach((i) => {
      r = Math.max(r, i.length)
    })
    const a = t + '.json?icons='
    o = n.maxURL - r - n.path.length - a.length
  }
  return o
}
function Ur(e) {
  return e === 404
}
const Kr = (e, t, n) => {
  const o = [],
    r = Vr(e, t),
    a = 'icons'
  let i = { type: a, provider: e, prefix: t, icons: [] },
    l = 0
  return (
    n.forEach((c, d) => {
      ;(l += c.length + 1),
        l >= r &&
          d > 0 &&
          (o.push(i), (i = { type: a, provider: e, prefix: t, icons: [] }), (l = c.length)),
        i.icons.push(c)
    }),
    o.push(i),
    o
  )
}
function Jr(e) {
  if (typeof e == 'string') {
    const t = Nt(e)
    if (t) return t.path
  }
  return '/'
}
const qr = (e, t, n) => {
    if (!fn) {
      n('abort', 424)
      return
    }
    let o = Jr(t.provider)
    switch (t.type) {
      case 'icons': {
        const a = t.prefix,
          i = t.icons.join(','),
          l = new URLSearchParams({ icons: i })
        o += a + '.json?' + l.toString()
        break
      }
      case 'custom': {
        const a = t.uri
        o += a.slice(0, 1) === '/' ? a.slice(1) : a
        break
      }
      default:
        n('abort', 400)
        return
    }
    let r = 503
    fn(e + o)
      .then((a) => {
        const i = a.status
        if (i !== 200) {
          setTimeout(() => {
            n(Ur(i) ? 'abort' : 'next', i)
          })
          return
        }
        return (r = 501), a.json()
      })
      .then((a) => {
        if (typeof a != 'object' || a === null) {
          setTimeout(() => {
            a === 404 ? n('abort', a) : n('next', r)
          })
          return
        }
        setTimeout(() => {
          n('success', a)
        })
      })
      .catch(() => {
        n('next', r)
      })
  },
  Gr = { prepare: Kr, send: qr }
function Xr(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null)
  e.sort((r, a) =>
    r.provider !== a.provider
      ? r.provider.localeCompare(a.provider)
      : r.prefix !== a.prefix
        ? r.prefix.localeCompare(a.prefix)
        : r.name.localeCompare(a.name)
  )
  let o = { provider: '', prefix: '', name: '' }
  return (
    e.forEach((r) => {
      if (o.name === r.name && o.prefix === r.prefix && o.provider === r.provider) return
      o = r
      const a = r.provider,
        i = r.prefix,
        l = r.name,
        c = n[a] || (n[a] = Object.create(null)),
        d = c[i] || (c[i] = Re(a, i))
      let s
      l in d.icons
        ? (s = t.loaded)
        : i === '' || d.missing.has(l)
          ? (s = t.missing)
          : (s = t.pending)
      const u = { provider: a, prefix: i, name: l }
      s.push(u)
    }),
    t
  )
}
function oo(e, t) {
  e.forEach((n) => {
    const o = n.loaderCallbacks
    o && (n.loaderCallbacks = o.filter((r) => r.id !== t))
  })
}
function Yr(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : []
      if (!t.length) return
      let n = !1
      const o = e.provider,
        r = e.prefix
      t.forEach((a) => {
        const i = a.icons,
          l = i.pending.length
        ;(i.pending = i.pending.filter((c) => {
          if (c.prefix !== r) return !0
          const d = c.name
          if (e.icons[d]) i.loaded.push({ provider: o, prefix: r, name: d })
          else if (e.missing.has(d)) i.missing.push({ provider: o, prefix: r, name: d })
          else return (n = !0), !0
          return !1
        })),
          i.pending.length !== l &&
            (n || oo([e], a.id),
            a.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), a.abort))
      })
    }))
}
let Qr = 0
function Zr(e, t, n) {
  const o = Qr++,
    r = oo.bind(null, n, o)
  if (!t.pending.length) return r
  const a = { id: o, icons: t, callback: e, abort: r }
  return (
    n.forEach((i) => {
      ;(i.loaderCallbacks || (i.loaderCallbacks = [])).push(a)
    }),
    r
  )
}
function ea(e, t = !0, n = !1) {
  const o = []
  return (
    e.forEach((r) => {
      const a = typeof r == 'string' ? pt(r, t, n) : r
      a && o.push(a)
    }),
    o
  )
}
var ta = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 }
function na(e, t, n, o) {
  const r = e.resources.length,
    a = e.random ? Math.floor(Math.random() * r) : e.index
  let i
  if (e.random) {
    let E = e.resources.slice(0)
    for (i = []; E.length > 1; ) {
      const P = Math.floor(Math.random() * E.length)
      i.push(E[P]), (E = E.slice(0, P).concat(E.slice(P + 1)))
    }
    i = i.concat(E)
  } else i = e.resources.slice(a).concat(e.resources.slice(0, a))
  const l = Date.now()
  let c = 'pending',
    d = 0,
    s,
    u = null,
    f = [],
    p = []
  typeof o == 'function' && p.push(o)
  function m() {
    u && (clearTimeout(u), (u = null))
  }
  function g() {
    c === 'pending' && (c = 'aborted'),
      m(),
      f.forEach((E) => {
        E.status === 'pending' && (E.status = 'aborted')
      }),
      (f = [])
  }
  function v(E, P) {
    P && (p = []), typeof E == 'function' && p.push(E)
  }
  function y() {
    return {
      startTime: l,
      payload: t,
      status: c,
      queriesSent: d,
      queriesPending: f.length,
      subscribe: v,
      abort: g
    }
  }
  function x() {
    ;(c = 'failed'),
      p.forEach((E) => {
        E(void 0, s)
      })
  }
  function w() {
    f.forEach((E) => {
      E.status === 'pending' && (E.status = 'aborted')
    }),
      (f = [])
  }
  function A(E, P, I) {
    const L = P !== 'success'
    switch (((f = f.filter((b) => b !== E)), c)) {
      case 'pending':
        break
      case 'failed':
        if (L || !e.dataAfterTimeout) return
        break
      default:
        return
    }
    if (P === 'abort') {
      ;(s = I), x()
      return
    }
    if (L) {
      ;(s = I), f.length || (i.length ? T() : x())
      return
    }
    if ((m(), w(), !e.random)) {
      const b = e.resources.indexOf(E.resource)
      b !== -1 && b !== e.index && (e.index = b)
    }
    ;(c = 'completed'),
      p.forEach((b) => {
        b(I)
      })
  }
  function T() {
    if (c !== 'pending') return
    m()
    const E = i.shift()
    if (E === void 0) {
      if (f.length) {
        u = setTimeout(() => {
          m(), c === 'pending' && (w(), x())
        }, e.timeout)
        return
      }
      x()
      return
    }
    const P = {
      status: 'pending',
      resource: E,
      callback: (I, L) => {
        A(P, I, L)
      }
    }
    f.push(P), d++, (u = setTimeout(T, e.rotate)), n(E, t, P.callback)
  }
  return setTimeout(T), y
}
function ro(e) {
  const t = { ...ta, ...e }
  let n = []
  function o() {
    n = n.filter((i) => i().status === 'pending')
  }
  function r(i, l, c) {
    const d = na(t, i, l, (s, u) => {
      o(), c && c(s, u)
    })
    return n.push(d), d
  }
  function a(i) {
    return n.find((l) => i(l)) || null
  }
  return {
    query: r,
    find: a,
    setIndex: (i) => {
      t.index = i
    },
    getIndex: () => t.index,
    cleanup: o
  }
}
function pn() {}
const wt = Object.create(null)
function oa(e) {
  if (!wt[e]) {
    const t = Nt(e)
    if (!t) return
    const n = ro(t),
      o = { config: t, redundancy: n }
    wt[e] = o
  }
  return wt[e]
}
function ra(e, t, n) {
  let o, r
  if (typeof e == 'string') {
    const a = _t(e)
    if (!a) return n(void 0, 424), pn
    r = a.send
    const i = oa(e)
    i && (o = i.redundancy)
  } else {
    const a = jt(e)
    if (a) {
      o = ro(a)
      const i = e.resources ? e.resources[0] : '',
        l = _t(i)
      l && (r = l.send)
    }
  }
  return !o || !r ? (n(void 0, 424), pn) : o.query(t, r, n)().abort
}
function vn() {}
function aa(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      ;(e.iconsLoaderFlag = !1), Yr(e)
    }))
}
function ia(e) {
  const t = [],
    n = []
  return (
    e.forEach((o) => {
      ;(o.match(Gn) ? t : n).push(o)
    }),
    { valid: t, invalid: n }
  )
}
function ze(e, t, n) {
  function o() {
    const r = e.pendingIcons
    t.forEach((a) => {
      r && r.delete(a), e.icons[a] || e.missing.add(a)
    })
  }
  if (n && typeof n == 'object')
    try {
      if (!Zn(e, n).length) {
        o()
        return
      }
    } catch (r) {
      console.error(r)
    }
  o(), aa(e)
}
function mn(e, t) {
  e instanceof Promise
    ? e
        .then((n) => {
          t(n)
        })
        .catch(() => {
          t(null)
        })
    : t(e)
}
function la(e, t) {
  e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1
        const { provider: n, prefix: o } = e,
          r = e.iconsToLoad
        if ((delete e.iconsToLoad, !r || !r.length)) return
        const a = e.loadIcon
        if (e.loadIcons && (r.length > 1 || !a)) {
          mn(e.loadIcons(r, o, n), (d) => {
            ze(e, r, d)
          })
          return
        }
        if (a) {
          r.forEach((d) => {
            const s = a(d, o, n)
            mn(s, (u) => {
              const f = u ? { prefix: o, icons: { [d]: u } } : null
              ze(e, [d], f)
            })
          })
          return
        }
        const { valid: i, invalid: l } = ia(r)
        if ((l.length && ze(e, l, null), !i.length)) return
        const c = o.match(Gn) ? _t(n) : null
        if (!c) {
          ze(e, i, null)
          return
        }
        c.prepare(n, o, i).forEach((d) => {
          ra(n, d, (s) => {
            ze(e, d.icons, s)
          })
        })
      }))
}
const sa = (e, t) => {
  const n = ea(e, !0, eo()),
    o = Xr(n)
  if (!o.pending.length) {
    let c = !0
    return (
      t &&
        setTimeout(() => {
          c && t(o.loaded, o.missing, o.pending, vn)
        }),
      () => {
        c = !1
      }
    )
  }
  const r = Object.create(null),
    a = []
  let i, l
  return (
    o.pending.forEach((c) => {
      const { provider: d, prefix: s } = c
      if (s === l && d === i) return
      ;(i = d), (l = s), a.push(Re(d, s))
      const u = r[d] || (r[d] = Object.create(null))
      u[s] || (u[s] = [])
    }),
    o.pending.forEach((c) => {
      const { provider: d, prefix: s, name: u } = c,
        f = Re(d, s),
        p = f.pendingIcons || (f.pendingIcons = new Set())
      p.has(u) || (p.add(u), r[d][s].push(u))
    }),
    a.forEach((c) => {
      const d = r[c.provider][c.prefix]
      d.length && la(c, d)
    }),
    t ? Zr(t, o, a) : vn
  )
}
function ua(e, t) {
  const n = { ...e }
  for (const o in t) {
    const r = t[o],
      a = typeof r
    o in to
      ? (r === null || (r && (a === 'string' || a === 'number'))) && (n[o] = r)
      : a === typeof n[o] && (n[o] = o === 'rotate' ? r % 4 : r)
  }
  return n
}
const ca = /[\s,]+/
function da(e, t) {
  t.split(ca).forEach((n) => {
    switch (n.trim()) {
      case 'horizontal':
        e.hFlip = !0
        break
      case 'vertical':
        e.vFlip = !0
        break
    }
  })
}
function fa(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, '')
  function o(r) {
    for (; r < 0; ) r += 4
    return r % 4
  }
  if (n === '') {
    const r = parseInt(e)
    return isNaN(r) ? 0 : o(r)
  } else if (n !== e) {
    let r = 0
    switch (n) {
      case '%':
        r = 25
        break
      case 'deg':
        r = 90
    }
    if (r) {
      let a = parseFloat(e.slice(0, e.length - n.length))
      return isNaN(a) ? 0 : ((a = a / r), a % 1 === 0 ? o(a) : 0)
    }
  }
  return t
}
function pa(e, t) {
  let n = e.indexOf('xlink:') === -1 ? '' : ' xmlns:xlink="http://www.w3.org/1999/xlink"'
  for (const o in t) n += ' ' + o + '="' + t[o] + '"'
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>'
}
function va(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ')
}
function ma(e) {
  return 'data:image/svg+xml,' + va(e)
}
function ha(e) {
  return 'url("' + ma(e) + '")'
}
const hn = { ...no, inline: !1 },
  ga = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': !0,
    role: 'img'
  },
  ya = { display: 'inline-block' },
  St = { backgroundColor: 'currentColor' },
  ao = { backgroundColor: 'transparent' },
  gn = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
  yn = { webkitMask: St, mask: St, background: ao }
for (const e in yn) {
  const t = yn[e]
  for (const n in gn) t[e + n] = gn[n]
}
const tt = {}
;['horizontal', 'vertical'].forEach((e) => {
  const t = e.slice(0, 1) + 'Flip'
  ;(tt[e + '-flip'] = t), (tt[e.slice(0, 1) + '-flip'] = t), (tt[e + 'Flip'] = t)
})
function bn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? 'px' : '')
}
const wn = (e, t) => {
  const n = ua(hn, t),
    o = { ...ga },
    r = t.mode || 'svg',
    a = {},
    i = t.style,
    l = typeof i == 'object' && !(i instanceof Array) ? i : {}
  for (let g in t) {
    const v = t[g]
    if (v !== void 0)
      switch (g) {
        case 'icon':
        case 'style':
        case 'onLoad':
        case 'mode':
        case 'ssr':
          break
        case 'inline':
        case 'hFlip':
        case 'vFlip':
          n[g] = v === !0 || v === 'true' || v === 1
          break
        case 'flip':
          typeof v == 'string' && da(n, v)
          break
        case 'color':
          a.color = v
          break
        case 'rotate':
          typeof v == 'string' ? (n[g] = fa(v)) : typeof v == 'number' && (n[g] = v)
          break
        case 'ariaHidden':
        case 'aria-hidden':
          v !== !0 && v !== 'true' && delete o['aria-hidden']
          break
        default: {
          const y = tt[g]
          y ? (v === !0 || v === 'true' || v === 1) && (n[y] = !0) : hn[g] === void 0 && (o[g] = v)
        }
      }
  }
  const c = Ir(e, n),
    d = c.attributes
  if ((n.inline && (a.verticalAlign = '-0.125em'), r === 'svg')) {
    ;(o.style = { ...a, ...l }), Object.assign(o, d)
    let g = 0,
      v = t.id
    return (
      typeof v == 'string' && (v = v.replace(/-/g, '_')),
      (o.innerHTML = zr(c.body, v ? () => v + 'ID' + g++ : 'iconifyVue')),
      he('svg', o)
    )
  }
  const { body: s, width: u, height: f } = e,
    p = r === 'mask' || (r === 'bg' ? !1 : s.indexOf('currentColor') !== -1),
    m = pa(s, { ...d, width: u + '', height: f + '' })
  return (
    (o.style = {
      ...a,
      '--svg': ha(m),
      width: bn(d.width),
      height: bn(d.height),
      ...ya,
      ...(p ? St : ao),
      ...l
    }),
    he('span', o)
  )
}
eo(!0)
Nr('', Gr)
if (typeof document < 'u' && typeof window < 'u') {
  const e = window
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = 'Invalid IconifyPreload syntax.'
    typeof t == 'object' &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((o) => {
        try {
          ;(typeof o != 'object' ||
            o === null ||
            o instanceof Array ||
            typeof o.icons != 'object' ||
            typeof o.prefix != 'string' ||
            !_r(o)) &&
            console.error(n)
        } catch {
          console.error(n)
        }
      })
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders
    if (typeof t == 'object' && t !== null)
      for (let n in t) {
        const o = 'IconifyProviders[' + n + '] is invalid.'
        try {
          const r = t[n]
          if (typeof r != 'object' || !r || r.resources === void 0) continue
          Hr(n, r) || console.error(o)
        } catch {
          console.error(o)
        }
      }
  }
}
const ba = { ...vt, body: '' },
  rt = _({
    inheritAttrs: !1,
    data() {
      return { _name: '', _loadingIcon: null, iconMounted: !1, counter: 0 }
    },
    mounted() {
      this.iconMounted = !0
    },
    unmounted() {
      this.abortLoading()
    },
    methods: {
      abortLoading() {
        this._loadingIcon && (this._loadingIcon.abort(), (this._loadingIcon = null))
      },
      getIcon(e, t, n) {
        if (typeof e == 'object' && e !== null && typeof e.body == 'string')
          return (this._name = ''), this.abortLoading(), { data: e }
        let o
        if (typeof e != 'string' || (o = pt(e, !1, !0)) === null) return this.abortLoading(), null
        let r = Pr(o)
        if (!r)
          return (
            (!this._loadingIcon || this._loadingIcon.name !== e) &&
              (this.abortLoading(),
              (this._name = ''),
              r !== null &&
                (this._loadingIcon = {
                  name: e,
                  abort: sa([o], () => {
                    this.counter++
                  })
                })),
            null
          )
        if ((this.abortLoading(), this._name !== e && ((this._name = e), t && t(e)), n)) {
          r = Object.assign({}, r)
          const i = n(r.body, o.name, o.prefix, o.provider)
          typeof i == 'string' && (r.body = i)
        }
        const a = ['iconify']
        return (
          o.prefix !== '' && a.push('iconify--' + o.prefix),
          o.provider !== '' && a.push('iconify--' + o.provider),
          { data: r, classes: a }
        )
      }
    },
    render() {
      this.counter
      const e = this.$attrs,
        t = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null
      if (!t) return wn(ba, e)
      let n = e
      return (
        t.classes &&
          (n = {
            ...e,
            class: (typeof e.class == 'string' ? e.class + ' ' : '') + t.classes.join(' ')
          }),
        wn({ ...vt, ...t.data }, n)
      )
    }
  }),
  xn = 500,
  wa = _({
    __name: 'JiaHaoAlert',
    props: { type: {}, dismissible: { type: Boolean, default: !1 } },
    emits: ['dismiss'],
    setup(e, { emit: t }) {
      Zo((d) => ({ '816cc850': a }))
      const n = e,
        o = k(() =>
          n.type
            ? `alert ${{ info: 'alert-info', success: 'alert-success', warning: 'alert-warning', error: 'alert-error' }[n.type]}`
            : ''
        ),
        r = k(() =>
          n.type
            ? {
                info: 'carbon:information',
                success: 'carbon:checkmark-outline',
                warning: 'carbon:warning',
                error: 'carbon:error'
              }[n.type]
            : 'carbon:information'
        ),
        a = `all ${xn}ms`,
        i = t,
        l = C(!1)
      function c() {
        ;(l.value = !0),
          setTimeout(() => {
            i('dismiss')
          }, xn)
      }
      return (d, s) => (
        O(),
        R(tr, null, {
          default: S(() => [
            ut(
              j(
                'div',
                { role: 'alert', class: U(['alert', o.value]) },
                [
                  N(h(rt), { icon: r.value, width: '1.5rem' }, null, 8, ['icon']),
                  j('span', null, [F(d.$slots, 'default', {}, void 0, !0)]),
                  d.dismissible
                    ? (O(),
                      D(
                        'button',
                        {
                          key: 0,
                          onClick: c,
                          type: 'button',
                          class: 'text-lg close',
                          'data-dismiss': 'alert',
                          'aria-label': 'Close'
                        },
                        s[0] || (s[0] = [j('span', { 'aria-hidden': 'true' }, '×', -1)])
                      ))
                    : oe('', !0)
                ],
                2
              ),
              [[er, !l.value]]
            )
          ]),
          _: 3
        })
      )
    }
  }),
  As = Jn(wa, [['__scopeId', 'data-v-f0b25920']]),
  xa = ['onClick'],
  Cs = _({
    __name: 'JiaHaoSteps',
    props: ct(
      { steps: {}, color: { default: 'primary' }, layout: { default: 'horizontal' } },
      { modelValue: { default: 1 }, modelModifiers: {} }
    ),
    emits: ['update:modelValue'],
    setup(e) {
      const t = e,
        n = Ne(e, 'modelValue'),
        o = k(
          () =>
            ({
              primary: 'step-primary',
              secondary: 'step-secondary',
              accent: 'step-accent',
              success: 'step-success',
              error: 'step-error',
              warning: 'step-warning',
              info: 'step-info',
              neutral: 'step-neutral'
            })[t.color]
        ),
        r = k(
          () =>
            ({
              horizontal: 'steps-horizontal',
              vertical: 'steps-vertical',
              responsive: 'steps-vertical lg:steps-horizontal'
            })[t.layout]
        )
      return (a, i) => (
        O(),
        D(
          'ul',
          { class: U(['steps', r.value]) },
          [
            (O(!0),
            D(
              re,
              null,
              me(
                a.steps,
                (l, c) => (
                  O(),
                  D(
                    'li',
                    {
                      key: l,
                      class: U(['step', c + 1 <= n.value ? o.value : '']),
                      onClick: (d) => (n.value = c + 1)
                    },
                    ne(l),
                    11,
                    xa
                  )
                )
              ),
              128
            ))
          ],
          2
        )
      )
    }
  }),
  Oa = ['src'],
  Es = _({
    __name: 'JiaHaoAvatar',
    props: { mask: { default: 'circle' }, src: {}, placeholder: {}, size: { default: 'md' } },
    setup(e) {
      const t = e,
        n = k(() => t.size),
        o = xe('JiaHaoAvatarSize', n),
        r = k(
          () => ({ xs: 'w-8 h-8', sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-24 h-24' })[o.value]
        ),
        a = k(() => ({ xs: 'text-xs', sm: 'text-base', md: 'text-lg', lg: 'text-3xl' })[o.value]),
        i = k(() => (t.placeholder ? 'placeholder' : '')),
        l = k(() => [r.value, i.value]),
        c = k(() => t.mask),
        d = xe('JiaHaoAvatarMask', c),
        s = C(!1)
      return (u, f) =>
        ut(
          (O(),
          D(
            'div',
            { class: U(['avatar', l.value]) },
            [
              (!u.src && u.placeholder) || (s.value && u.placeholder)
                ? (O(),
                  D('div', { key: 0, class: U(['text-center', a.value]) }, ne(u.placeholder), 3))
                : (O(),
                  D(
                    'img',
                    { key: 1, src: u.src, onError: f[0] || (f[0] = (p) => (s.value = !0)) },
                    null,
                    40,
                    Oa
                  ))
            ],
            2
          )),
          [[h(qn), h(d)]]
        )
    }
  }),
  Ps = _({
    __name: 'JiaHaoAvatarGroup',
    props: { size: { default: 'md' }, mask: {} },
    setup(e) {
      const t = e,
        n = k(() => t.size)
      Oe('JiaHaoAvatarSize', n)
      const o = k(() => t.mask)
      Oe('JiaHaoAvatarMask', o)
      const r = k(() => [
        { xs: '-space-x-3', sm: '-space-x-6', md: '-space-x-8', lg: '-space-x-10' }[n.value]
      ])
      return (a, i) => (
        O(), D('div', { class: U(['avatar-group', r.value]) }, [F(a.$slots, 'default')], 2)
      )
    }
  }),
  ka = { class: 'overflow-x-auto' },
  Aa = { key: 0 },
  Ca = { key: 1, class: 'inline-block w-5 h-5' },
  Ea = { key: 0 },
  Pa = ['value'],
  Ts = _({
    __name: 'JiaHaoTable',
    props: ct(
      {
        id: { default: 'id' },
        size: { default: 'md' },
        selectable: { type: Boolean, default: !0 },
        striped: { type: Boolean },
        columns: {}
      },
      { modelValue: { required: !0 }, modelModifiers: {}, select: {}, selectModifiers: {} }
    ),
    emits: ['update:modelValue', 'update:select'],
    setup(e) {
      const t = e,
        n = k(() => ({ xs: 'table-xs', sm: 'table-sm', md: 'table-md', lg: 'table-lg' })[t.size]),
        o = k(() => (t.striped ? 'table-zebra' : '')),
        r = k(() => [n.value, o.value]),
        a = C({ key: '', order: 'asc' })
      function i(s) {
        a.value &&
          ((a.value.key = s),
          l.value.sort((u, f) =>
            a.value
              ? a.value.order === 'asc'
                ? u[a.value.key] > f[a.value.key]
                  ? 1
                  : -1
                : u[a.value.key] < f[a.value.key]
                  ? 1
                  : -1
              : 0
          ),
          (a.value.order = a.value.order === 'asc' ? 'desc' : 'asc'))
      }
      const l = Ne(e, 'modelValue'),
        c = Ne(e, 'select'),
        d = k(() => t.selectable && c.value)
      return (s, u) => (
        O(),
        D('div', ka, [
          j(
            'table',
            { class: U(['table', r.value]) },
            [
              j('thead', null, [
                j('tr', null, [
                  (O(!0),
                  D(
                    re,
                    null,
                    me(
                      s.columns,
                      (f) => (
                        O(),
                        D('th', { key: f.key }, [
                          (O(),
                          R(
                            zn(f.sortable ? 'button' : 'div'),
                            {
                              onClick: (p) => (f.sortable ? i(f.key) : void 0),
                              class: 'flex items-center'
                            },
                            {
                              default: S(() => [
                                an(ne(f.label) + ' ', 1),
                                a.value && a.value.key === f.key
                                  ? (O(),
                                    D('span', Aa, [
                                      a.value.order === 'asc'
                                        ? (O(),
                                          R(h(rt), {
                                            key: 0,
                                            icon: 'mdi:chevron-up',
                                            class: 'w-5 h-5'
                                          }))
                                        : oe('', !0),
                                      a.value.order === 'desc'
                                        ? (O(),
                                          R(h(rt), {
                                            key: 1,
                                            icon: 'mdi:chevron-down',
                                            class: 'w-5 h-5'
                                          }))
                                        : oe('', !0)
                                    ]))
                                  : (O(), D('span', Ca))
                              ]),
                              _: 2
                            },
                            1032,
                            ['onClick']
                          ))
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ]),
              j('tbody', null, [
                (O(!0),
                D(
                  re,
                  null,
                  me(
                    l.value,
                    (f) => (
                      O(),
                      D('tr', { key: f[s.id] }, [
                        d.value
                          ? (O(),
                            D('th', Ea, [
                              ut(
                                j(
                                  'input',
                                  {
                                    value: f,
                                    class: 'checkbox',
                                    type: 'checkbox',
                                    'onUpdate:modelValue': u[0] || (u[0] = (p) => (c.value = p))
                                  },
                                  null,
                                  8,
                                  Pa
                                ),
                                [[jo, c.value]]
                              )
                            ]))
                          : oe('', !0),
                        (O(!0),
                        D(
                          re,
                          null,
                          me(
                            s.columns,
                            (p) => (
                              O(),
                              D('th', { key: p.key }, [
                                F(s.$slots, `item-${p.key}`, { item: f }, () => [
                                  an(ne(f[p.key]), 1)
                                ])
                              ])
                            )
                          ),
                          128
                        ))
                      ])
                    )
                  ),
                  128
                ))
              ])
            ],
            2
          )
        ])
      )
    }
  }),
  Ta = ['top', 'right', 'bottom', 'left'],
  ge = Math.min,
  q = Math.max,
  at = Math.round,
  Xe = Math.floor,
  ae = (e) => ({ x: e, y: e }),
  _a = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Ba = { start: 'end', end: 'start' }
function Mt(e, t, n) {
  return q(e, ge(t, n))
}
function ce(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function de(e) {
  return e.split('-')[0]
}
function Le(e) {
  return e.split('-')[1]
}
function Ht(e) {
  return e === 'x' ? 'y' : 'x'
}
function Wt(e) {
  return e === 'y' ? 'height' : 'width'
}
function ye(e) {
  return ['top', 'bottom'].includes(de(e)) ? 'y' : 'x'
}
function Vt(e) {
  return Ht(ye(e))
}
function Sa(e, t, n) {
  n === void 0 && (n = !1)
  const o = Le(e),
    r = Vt(e),
    a = Wt(r)
  let i =
    r === 'x' ? (o === (n ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top'
  return t.reference[a] > t.floating[a] && (i = it(i)), [i, it(i)]
}
function Ma(e) {
  const t = it(e)
  return [Dt(e), t, Dt(t)]
}
function Dt(e) {
  return e.replace(/start|end/g, (t) => Ba[t])
}
function Da(e, t, n) {
  const o = ['left', 'right'],
    r = ['right', 'left'],
    a = ['top', 'bottom'],
    i = ['bottom', 'top']
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? r : o) : t ? o : r
    case 'left':
    case 'right':
      return t ? a : i
    default:
      return []
  }
}
function Fa(e, t, n, o) {
  const r = Le(e)
  let a = Da(de(e), n === 'start', o)
  return r && ((a = a.map((i) => i + '-' + r)), t && (a = a.concat(a.map(Dt)))), a
}
function it(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _a[t])
}
function Ra(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function io(e) {
  return typeof e != 'number' ? Ra(e) : { top: e, right: e, bottom: e, left: e }
}
function lt(e) {
  const { x: t, y: n, width: o, height: r } = e
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n }
}
function On(e, t, n) {
  let { reference: o, floating: r } = e
  const a = ye(t),
    i = Vt(t),
    l = Wt(i),
    c = de(t),
    d = a === 'y',
    s = o.x + o.width / 2 - r.width / 2,
    u = o.y + o.height / 2 - r.height / 2,
    f = o[l] / 2 - r[l] / 2
  let p
  switch (c) {
    case 'top':
      p = { x: s, y: o.y - r.height }
      break
    case 'bottom':
      p = { x: s, y: o.y + o.height }
      break
    case 'right':
      p = { x: o.x + o.width, y: u }
      break
    case 'left':
      p = { x: o.x - r.width, y: u }
      break
    default:
      p = { x: o.x, y: o.y }
  }
  switch (Le(t)) {
    case 'start':
      p[i] -= f * (n && d ? -1 : 1)
      break
    case 'end':
      p[i] += f * (n && d ? -1 : 1)
      break
  }
  return p
}
const Ia = async (e, t, n) => {
  const { placement: o = 'bottom', strategy: r = 'absolute', middleware: a = [], platform: i } = n,
    l = a.filter(Boolean),
    c = await (i.isRTL == null ? void 0 : i.isRTL(t))
  let d = await i.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: s, y: u } = On(d, o, c),
    f = o,
    p = {},
    m = 0
  for (let g = 0; g < l.length; g++) {
    const { name: v, fn: y } = l[g],
      {
        x,
        y: w,
        data: A,
        reset: T
      } = await y({
        x: s,
        y: u,
        initialPlacement: o,
        placement: f,
        strategy: r,
        middlewareData: p,
        rects: d,
        platform: i,
        elements: { reference: e, floating: t }
      })
    ;(s = x ?? s),
      (u = w ?? u),
      (p = { ...p, [v]: { ...p[v], ...A } }),
      T &&
        m <= 50 &&
        (m++,
        typeof T == 'object' &&
          (T.placement && (f = T.placement),
          T.rects &&
            (d =
              T.rects === !0
                ? await i.getElementRects({ reference: e, floating: t, strategy: r })
                : T.rects),
          ({ x: s, y: u } = On(d, f, c))),
        (g = -1))
  }
  return { x: s, y: u, placement: f, strategy: r, middlewareData: p }
}
async function We(e, t) {
  var n
  t === void 0 && (t = {})
  const { x: o, y: r, platform: a, rects: i, elements: l, strategy: c } = e,
    {
      boundary: d = 'clippingAncestors',
      rootBoundary: s = 'viewport',
      elementContext: u = 'floating',
      altBoundary: f = !1,
      padding: p = 0
    } = ce(t, e),
    m = io(p),
    g = l[f ? (u === 'floating' ? 'reference' : 'floating') : u],
    v = lt(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n
            ? g
            : g.contextElement ||
              (await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating))),
        boundary: d,
        rootBoundary: s,
        strategy: c
      })
    ),
    y =
      u === 'floating'
        ? { x: o, y: r, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)),
    w = (await (a.isElement == null ? void 0 : a.isElement(x)))
      ? (await (a.getScale == null ? void 0 : a.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    A = lt(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: x,
            strategy: c
          })
        : y
    )
  return {
    top: (v.top - A.top + m.top) / w.y,
    bottom: (A.bottom - v.bottom + m.bottom) / w.y,
    left: (v.left - A.left + m.left) / w.x,
    right: (A.right - v.right + m.right) / w.x
  }
}
const $a = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: n, y: o, placement: r, rects: a, platform: i, elements: l, middlewareData: c } = t,
        { element: d, padding: s = 0 } = ce(e, t) || {}
      if (d == null) return {}
      const u = io(s),
        f = { x: n, y: o },
        p = Vt(r),
        m = Wt(p),
        g = await i.getDimensions(d),
        v = p === 'y',
        y = v ? 'top' : 'left',
        x = v ? 'bottom' : 'right',
        w = v ? 'clientHeight' : 'clientWidth',
        A = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        T = f[p] - a.reference[p],
        E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d))
      let P = E ? E[w] : 0
      ;(!P || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
        (P = l.floating[w] || a.floating[m])
      const I = A / 2 - T / 2,
        L = P / 2 - g[m] / 2 - 1,
        b = ge(u[y], L),
        B = ge(u[x], L),
        M = b,
        z = P - g[m] - B,
        $ = P / 2 - g[m] / 2 + I,
        Q = Mt(M, $, z),
        K =
          !c.arrow &&
          Le(r) != null &&
          $ !== Q &&
          a.reference[m] / 2 - ($ < M ? b : B) - g[m] / 2 < 0,
        te = K ? ($ < M ? $ - M : $ - z) : 0
      return {
        [p]: f[p] + te,
        data: { [p]: Q, centerOffset: $ - Q - te, ...(K && { alignmentOffset: te }) },
        reset: K
      }
    }
  }),
  La = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, o
          const {
              placement: r,
              middlewareData: a,
              rects: i,
              initialPlacement: l,
              platform: c,
              elements: d
            } = t,
            {
              mainAxis: s = !0,
              crossAxis: u = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = 'bestFit',
              fallbackAxisSideDirection: m = 'none',
              flipAlignment: g = !0,
              ...v
            } = ce(e, t)
          if ((n = a.arrow) != null && n.alignmentOffset) return {}
          const y = de(r),
            x = ye(l),
            w = de(l) === l,
            A = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)),
            T = f || (w || !g ? [it(l)] : Ma(l)),
            E = m !== 'none'
          !f && E && T.push(...Fa(l, g, m, A))
          const P = [l, ...T],
            I = await We(t, v),
            L = []
          let b = ((o = a.flip) == null ? void 0 : o.overflows) || []
          if ((s && L.push(I[y]), u)) {
            const $ = Sa(r, i, A)
            L.push(I[$[0]], I[$[1]])
          }
          if (((b = [...b, { placement: r, overflows: L }]), !L.every(($) => $ <= 0))) {
            var B, M
            const $ = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1,
              Q = P[$]
            if (Q) return { data: { index: $, overflows: b }, reset: { placement: Q } }
            let K =
              (M = b
                .filter((te) => te.overflows[0] <= 0)
                .sort((te, fe) => te.overflows[1] - fe.overflows[1])[0]) == null
                ? void 0
                : M.placement
            if (!K)
              switch (p) {
                case 'bestFit': {
                  var z
                  const te =
                    (z = b
                      .filter((fe) => {
                        if (E) {
                          const pe = ye(fe.placement)
                          return pe === x || pe === 'y'
                        }
                        return !0
                      })
                      .map((fe) => [
                        fe.placement,
                        fe.overflows.filter((pe) => pe > 0).reduce((pe, $o) => pe + $o, 0)
                      ])
                      .sort((fe, pe) => fe[1] - pe[1])[0]) == null
                      ? void 0
                      : z[0]
                  te && (K = te)
                  break
                }
                case 'initialPlacement':
                  K = l
                  break
              }
            if (r !== K) return { reset: { placement: K } }
          }
          return {}
        }
      }
    )
  }
function kn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  }
}
function An(e) {
  return Ta.some((t) => e[t] >= 0)
}
const ja = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: o = 'referenceHidden', ...r } = ce(e, t)
        switch (o) {
          case 'referenceHidden': {
            const a = await We(t, { ...r, elementContext: 'reference' }),
              i = kn(a, n.reference)
            return { data: { referenceHiddenOffsets: i, referenceHidden: An(i) } }
          }
          case 'escaped': {
            const a = await We(t, { ...r, altBoundary: !0 }),
              i = kn(a, n.floating)
            return { data: { escapedOffsets: i, escaped: An(i) } }
          }
          default:
            return {}
        }
      }
    }
  )
}
async function za(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    i = de(n),
    l = Le(n),
    c = ye(n) === 'y',
    d = ['left', 'top'].includes(i) ? -1 : 1,
    s = a && c ? -1 : 1,
    u = ce(t, e)
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof u == 'number'
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis }
  return (
    l && typeof m == 'number' && (p = l === 'end' ? m * -1 : m),
    c ? { x: p * s, y: f * d } : { x: f * d, y: p * s }
  )
}
const Na = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, o
          const { x: r, y: a, placement: i, middlewareData: l } = t,
            c = await za(t, e)
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (o = l.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + c.x, y: a + c.y, data: { ...c, placement: i } }
        }
      }
    )
  },
  Ha = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: a = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (v) => {
                  let { x: y, y: x } = v
                  return { x: y, y: x }
                }
              },
              ...c
            } = ce(e, t),
            d = { x: n, y: o },
            s = await We(t, c),
            u = ye(de(r)),
            f = Ht(u)
          let p = d[f],
            m = d[u]
          if (a) {
            const v = f === 'y' ? 'top' : 'left',
              y = f === 'y' ? 'bottom' : 'right',
              x = p + s[v],
              w = p - s[y]
            p = Mt(x, p, w)
          }
          if (i) {
            const v = u === 'y' ? 'top' : 'left',
              y = u === 'y' ? 'bottom' : 'right',
              x = m + s[v],
              w = m - s[y]
            m = Mt(x, m, w)
          }
          const g = l.fn({ ...t, [f]: p, [u]: m })
          return { ...g, data: { x: g.x - n, y: g.y - o, enabled: { [f]: a, [u]: i } } }
        }
      }
    )
  },
  Wa = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: a, middlewareData: i } = t,
            { offset: l = 0, mainAxis: c = !0, crossAxis: d = !0 } = ce(e, t),
            s = { x: n, y: o },
            u = ye(r),
            f = Ht(u)
          let p = s[f],
            m = s[u]
          const g = ce(l, t),
            v =
              typeof g == 'number'
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g }
          if (c) {
            const w = f === 'y' ? 'height' : 'width',
              A = a.reference[f] - a.floating[w] + v.mainAxis,
              T = a.reference[f] + a.reference[w] - v.mainAxis
            p < A ? (p = A) : p > T && (p = T)
          }
          if (d) {
            var y, x
            const w = f === 'y' ? 'width' : 'height',
              A = ['top', 'left'].includes(de(r)),
              T =
                a.reference[u] -
                a.floating[w] +
                ((A && ((y = i.offset) == null ? void 0 : y[u])) || 0) +
                (A ? 0 : v.crossAxis),
              E =
                a.reference[u] +
                a.reference[w] +
                (A ? 0 : ((x = i.offset) == null ? void 0 : x[u]) || 0) -
                (A ? v.crossAxis : 0)
            m < T ? (m = T) : m > E && (m = E)
          }
          return { [f]: p, [u]: m }
        }
      }
    )
  },
  Va = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, o
          const { placement: r, rects: a, platform: i, elements: l } = t,
            { apply: c = () => {}, ...d } = ce(e, t),
            s = await We(t, d),
            u = de(r),
            f = Le(r),
            p = ye(r) === 'y',
            { width: m, height: g } = a.floating
          let v, y
          u === 'top' || u === 'bottom'
            ? ((v = u),
              (y =
                f === ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((y = u), (v = f === 'end' ? 'top' : 'bottom'))
          const x = g - s.top - s.bottom,
            w = m - s.left - s.right,
            A = ge(g - s[v], x),
            T = ge(m - s[y], w),
            E = !t.middlewareData.shift
          let P = A,
            I = T
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (I = w),
            (o = t.middlewareData.shift) != null && o.enabled.y && (P = x),
            E && !f)
          ) {
            const b = q(s.left, 0),
              B = q(s.right, 0),
              M = q(s.top, 0),
              z = q(s.bottom, 0)
            p
              ? (I = m - 2 * (b !== 0 || B !== 0 ? b + B : q(s.left, s.right)))
              : (P = g - 2 * (M !== 0 || z !== 0 ? M + z : q(s.top, s.bottom)))
          }
          await c({ ...t, availableWidth: I, availableHeight: P })
          const L = await i.getDimensions(l.floating)
          return m !== L.width || g !== L.height ? { reset: { rects: !0 } } : {}
        }
      }
    )
  }
function mt() {
  return typeof window < 'u'
}
function Ee(e) {
  return Ut(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function G(e) {
  var t
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function le(e) {
  var t
  return (t = (Ut(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement
}
function Ut(e) {
  return mt() ? e instanceof Node || e instanceof G(e).Node : !1
}
function Z(e) {
  return mt() ? e instanceof Element || e instanceof G(e).Element : !1
}
function ie(e) {
  return mt() ? e instanceof HTMLElement || e instanceof G(e).HTMLElement : !1
}
function Cn(e) {
  return !mt() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof G(e).ShadowRoot
}
function Je(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = ee(e)
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !['inline', 'contents'].includes(r)
}
function Ua(e) {
  return ['table', 'td', 'th'].includes(Ee(e))
}
function ht(e) {
  return [':popover-open', ':modal'].some((t) => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}
function Kt(e) {
  const t = Jt(),
    n = Z(e) ? ee(e) : e
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((o) =>
      n[o] ? n[o] !== 'none' : !1
    ) ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((o) =>
      (n.willChange || '').includes(o)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((o) => (n.contain || '').includes(o))
  )
}
function Ka(e) {
  let t = be(e)
  for (; ie(t) && !Ie(t); ) {
    if (Kt(t)) return t
    if (ht(t)) return null
    t = be(t)
  }
  return null
}
function Jt() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none')
}
function Ie(e) {
  return ['html', 'body', '#document'].includes(Ee(e))
}
function ee(e) {
  return G(e).getComputedStyle(e)
}
function gt(e) {
  return Z(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
}
function be(e) {
  if (Ee(e) === 'html') return e
  const t = e.assignedSlot || e.parentNode || (Cn(e) && e.host) || le(e)
  return Cn(t) ? t.host : t
}
function lo(e) {
  const t = be(e)
  return Ie(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : ie(t) && Je(t) ? t : lo(t)
}
function Ve(e, t, n) {
  var o
  t === void 0 && (t = []), n === void 0 && (n = !0)
  const r = lo(e),
    a = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    i = G(r)
  if (a) {
    const l = Ft(i)
    return t.concat(i, i.visualViewport || [], Je(r) ? r : [], l && n ? Ve(l) : [])
  }
  return t.concat(r, Ve(r, [], n))
}
function Ft(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function so(e) {
  const t = ee(e)
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0
  const r = ie(e),
    a = r ? e.offsetWidth : n,
    i = r ? e.offsetHeight : o,
    l = at(n) !== a || at(o) !== i
  return l && ((n = a), (o = i)), { width: n, height: o, $: l }
}
function qt(e) {
  return Z(e) ? e : e.contextElement
}
function De(e) {
  const t = qt(e)
  if (!ie(t)) return ae(1)
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: a } = so(t)
  let i = (a ? at(n.width) : n.width) / o,
    l = (a ? at(n.height) : n.height) / r
  return (
    (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: i, y: l }
  )
}
const Ja = ae(0)
function uo(e) {
  const t = G(e)
  return !Jt() || !t.visualViewport
    ? Ja
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function qa(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== G(e)) ? !1 : t
}
function Ae(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1)
  const r = e.getBoundingClientRect(),
    a = qt(e)
  let i = ae(1)
  t && (o ? Z(o) && (i = De(o)) : (i = De(e)))
  const l = qa(a, n, o) ? uo(a) : ae(0)
  let c = (r.left + l.x) / i.x,
    d = (r.top + l.y) / i.y,
    s = r.width / i.x,
    u = r.height / i.y
  if (a) {
    const f = G(a),
      p = o && Z(o) ? G(o) : o
    let m = f,
      g = Ft(m)
    for (; g && o && p !== m; ) {
      const v = De(g),
        y = g.getBoundingClientRect(),
        x = ee(g),
        w = y.left + (g.clientLeft + parseFloat(x.paddingLeft)) * v.x,
        A = y.top + (g.clientTop + parseFloat(x.paddingTop)) * v.y
      ;(c *= v.x), (d *= v.y), (s *= v.x), (u *= v.y), (c += w), (d += A), (m = G(g)), (g = Ft(m))
    }
  }
  return lt({ width: s, height: u, x: c, y: d })
}
function Gt(e, t) {
  const n = gt(e).scrollLeft
  return t ? t.left + n : Ae(le(e)).left + n
}
function co(e, t, n) {
  n === void 0 && (n = !1)
  const o = e.getBoundingClientRect(),
    r = o.left + t.scrollLeft - (n ? 0 : Gt(e, o)),
    a = o.top + t.scrollTop
  return { x: r, y: a }
}
function Ga(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e
  const a = r === 'fixed',
    i = le(o),
    l = t ? ht(t.floating) : !1
  if (o === i || (l && a)) return n
  let c = { scrollLeft: 0, scrollTop: 0 },
    d = ae(1)
  const s = ae(0),
    u = ie(o)
  if ((u || (!u && !a)) && ((Ee(o) !== 'body' || Je(i)) && (c = gt(o)), ie(o))) {
    const p = Ae(o)
    ;(d = De(o)), (s.x = p.x + o.clientLeft), (s.y = p.y + o.clientTop)
  }
  const f = i && !u && !a ? co(i, c, !0) : ae(0)
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + s.x + f.x,
    y: n.y * d.y - c.scrollTop * d.y + s.y + f.y
  }
}
function Xa(e) {
  return Array.from(e.getClientRects())
}
function Ya(e) {
  const t = le(e),
    n = gt(e),
    o = e.ownerDocument.body,
    r = q(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    a = q(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight)
  let i = -n.scrollLeft + Gt(e)
  const l = -n.scrollTop
  return (
    ee(o).direction === 'rtl' && (i += q(t.clientWidth, o.clientWidth) - r),
    { width: r, height: a, x: i, y: l }
  )
}
function Qa(e, t) {
  const n = G(e),
    o = le(e),
    r = n.visualViewport
  let a = o.clientWidth,
    i = o.clientHeight,
    l = 0,
    c = 0
  if (r) {
    ;(a = r.width), (i = r.height)
    const d = Jt()
    ;(!d || (d && t === 'fixed')) && ((l = r.offsetLeft), (c = r.offsetTop))
  }
  return { width: a, height: i, x: l, y: c }
}
function Za(e, t) {
  const n = Ae(e, !0, t === 'fixed'),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    a = ie(e) ? De(e) : ae(1),
    i = e.clientWidth * a.x,
    l = e.clientHeight * a.y,
    c = r * a.x,
    d = o * a.y
  return { width: i, height: l, x: c, y: d }
}
function En(e, t, n) {
  let o
  if (t === 'viewport') o = Qa(e, n)
  else if (t === 'document') o = Ya(le(e))
  else if (Z(t)) o = Za(t, n)
  else {
    const r = uo(e)
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height }
  }
  return lt(o)
}
function fo(e, t) {
  const n = be(e)
  return n === t || !Z(n) || Ie(n) ? !1 : ee(n).position === 'fixed' || fo(n, t)
}
function ei(e, t) {
  const n = t.get(e)
  if (n) return n
  let o = Ve(e, [], !1).filter((l) => Z(l) && Ee(l) !== 'body'),
    r = null
  const a = ee(e).position === 'fixed'
  let i = a ? be(e) : e
  for (; Z(i) && !Ie(i); ) {
    const l = ee(i),
      c = Kt(i)
    !c && l.position === 'fixed' && (r = null),
      (
        a
          ? !c && !r
          : (!c && l.position === 'static' && r && ['absolute', 'fixed'].includes(r.position)) ||
            (Je(i) && !c && fo(e, i))
      )
        ? (o = o.filter((d) => d !== i))
        : (r = l),
      (i = be(i))
  }
  return t.set(e, o), o
}
function ti(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e
  const a = [...(n === 'clippingAncestors' ? (ht(t) ? [] : ei(t, this._c)) : [].concat(n)), o],
    i = a[0],
    l = a.reduce(
      (c, d) => {
        const s = En(t, d, r)
        return (
          (c.top = q(s.top, c.top)),
          (c.right = ge(s.right, c.right)),
          (c.bottom = ge(s.bottom, c.bottom)),
          (c.left = q(s.left, c.left)),
          c
        )
      },
      En(t, i, r)
    )
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top }
}
function ni(e) {
  const { width: t, height: n } = so(e)
  return { width: t, height: n }
}
function oi(e, t, n) {
  const o = ie(t),
    r = le(t),
    a = n === 'fixed',
    i = Ae(e, !0, a, t)
  let l = { scrollLeft: 0, scrollTop: 0 }
  const c = ae(0)
  if (o || (!o && !a))
    if (((Ee(t) !== 'body' || Je(r)) && (l = gt(t)), o)) {
      const f = Ae(t, !0, a, t)
      ;(c.x = f.x + t.clientLeft), (c.y = f.y + t.clientTop)
    } else r && (c.x = Gt(r))
  const d = r && !o && !a ? co(r, l) : ae(0),
    s = i.left + l.scrollLeft - c.x - d.x,
    u = i.top + l.scrollTop - c.y - d.y
  return { x: s, y: u, width: i.width, height: i.height }
}
function xt(e) {
  return ee(e).position === 'static'
}
function Pn(e, t) {
  if (!ie(e) || ee(e).position === 'fixed') return null
  if (t) return t(e)
  let n = e.offsetParent
  return le(e) === n && (n = n.ownerDocument.body), n
}
function po(e, t) {
  const n = G(e)
  if (ht(e)) return n
  if (!ie(e)) {
    let r = be(e)
    for (; r && !Ie(r); ) {
      if (Z(r) && !xt(r)) return r
      r = be(r)
    }
    return n
  }
  let o = Pn(e, t)
  for (; o && Ua(o) && xt(o); ) o = Pn(o, t)
  return o && Ie(o) && xt(o) && !Kt(o) ? n : o || Ka(e) || n
}
const ri = async function (e) {
  const t = this.getOffsetParent || po,
    n = this.getDimensions,
    o = await n(e.floating)
  return {
    reference: oi(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height }
  }
}
function ai(e) {
  return ee(e).direction === 'rtl'
}
const ii = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ga,
  getDocumentElement: le,
  getClippingRect: ti,
  getOffsetParent: po,
  getElementRects: ri,
  getClientRects: Xa,
  getDimensions: ni,
  getScale: De,
  isElement: Z,
  isRTL: ai
}
function vo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function li(e, t) {
  let n = null,
    o
  const r = le(e)
  function a() {
    var l
    clearTimeout(o), (l = n) == null || l.disconnect(), (n = null)
  }
  function i(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), a()
    const d = e.getBoundingClientRect(),
      { left: s, top: u, width: f, height: p } = d
    if ((l || t(), !f || !p)) return
    const m = Xe(u),
      g = Xe(r.clientWidth - (s + f)),
      v = Xe(r.clientHeight - (u + p)),
      y = Xe(s),
      x = {
        rootMargin: -m + 'px ' + -g + 'px ' + -v + 'px ' + -y + 'px',
        threshold: q(0, ge(1, c)) || 1
      }
    let w = !0
    function A(T) {
      const E = T[0].intersectionRatio
      if (E !== c) {
        if (!w) return i()
        E
          ? i(!1, E)
          : (o = setTimeout(() => {
              i(!1, 1e-7)
            }, 1e3))
      }
      E === 1 && !vo(d, e.getBoundingClientRect()) && i(), (w = !1)
    }
    try {
      n = new IntersectionObserver(A, { ...x, root: r.ownerDocument })
    } catch {
      n = new IntersectionObserver(A, x)
    }
    n.observe(e)
  }
  return i(!0), a
}
function si(e, t, n, o) {
  o === void 0 && (o = {})
  const {
      ancestorScroll: r = !0,
      ancestorResize: a = !0,
      elementResize: i = typeof ResizeObserver == 'function',
      layoutShift: l = typeof IntersectionObserver == 'function',
      animationFrame: c = !1
    } = o,
    d = qt(e),
    s = r || a ? [...(d ? Ve(d) : []), ...Ve(t)] : []
  s.forEach((y) => {
    r && y.addEventListener('scroll', n, { passive: !0 }), a && y.addEventListener('resize', n)
  })
  const u = d && l ? li(d, n) : null
  let f = -1,
    p = null
  i &&
    ((p = new ResizeObserver((y) => {
      let [x] = y
      x &&
        x.target === d &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var w
          ;(w = p) == null || w.observe(t)
        }))),
        n()
    })),
    d && !c && p.observe(d),
    p.observe(t))
  let m,
    g = c ? Ae(e) : null
  c && v()
  function v() {
    const y = Ae(e)
    g && !vo(g, y) && n(), (g = y), (m = requestAnimationFrame(v))
  }
  return (
    n(),
    () => {
      var y
      s.forEach((x) => {
        r && x.removeEventListener('scroll', n), a && x.removeEventListener('resize', n)
      }),
        u == null || u(),
        (y = p) == null || y.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m)
    }
  )
}
const ui = Na,
  ci = Ha,
  Tn = La,
  di = Va,
  fi = ja,
  pi = $a,
  vi = Wa,
  mi = (e, t, n) => {
    const o = new Map(),
      r = { platform: ii, ...n },
      a = { ...r.platform, _c: o }
    return Ia(e, t, { ...r, platform: a })
  }
function hi(e) {
  return e != null && typeof e == 'object' && '$el' in e
}
function Rt(e) {
  if (hi(e)) {
    const t = e.$el
    return Ut(t) && Ee(t) === '#comment' ? null : t
  }
  return e
}
function Me(e) {
  return typeof e == 'function' ? e() : h(e)
}
function gi(e) {
  return {
    name: 'arrow',
    options: e,
    fn(t) {
      const n = Rt(Me(e.element))
      return n == null ? {} : pi({ element: n, padding: e.padding }).fn(t)
    }
  }
}
function mo(e) {
  return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function _n(e, t) {
  const n = mo(e)
  return Math.round(t * n) / n
}
function yi(e, t, n) {
  n === void 0 && (n = {})
  const o = n.whileElementsMounted,
    r = k(() => {
      var P
      return (P = Me(n.open)) != null ? P : !0
    }),
    a = k(() => Me(n.middleware)),
    i = k(() => {
      var P
      return (P = Me(n.placement)) != null ? P : 'bottom'
    }),
    l = k(() => {
      var P
      return (P = Me(n.strategy)) != null ? P : 'absolute'
    }),
    c = k(() => {
      var P
      return (P = Me(n.transform)) != null ? P : !0
    }),
    d = k(() => Rt(e.value)),
    s = k(() => Rt(t.value)),
    u = C(0),
    f = C(0),
    p = C(l.value),
    m = C(i.value),
    g = Kn({}),
    v = C(!1),
    y = k(() => {
      const P = { position: p.value, left: '0', top: '0' }
      if (!s.value) return P
      const I = _n(s.value, u.value),
        L = _n(s.value, f.value)
      return c.value
        ? {
            ...P,
            transform: 'translate(' + I + 'px, ' + L + 'px)',
            ...(mo(s.value) >= 1.5 && { willChange: 'transform' })
          }
        : { position: p.value, left: I + 'px', top: L + 'px' }
    })
  let x
  function w() {
    if (d.value == null || s.value == null) return
    const P = r.value
    mi(d.value, s.value, { middleware: a.value, placement: i.value, strategy: l.value }).then(
      (I) => {
        ;(u.value = I.x),
          (f.value = I.y),
          (p.value = I.strategy),
          (m.value = I.placement),
          (g.value = I.middlewareData),
          (v.value = P !== !1)
      }
    )
  }
  function A() {
    typeof x == 'function' && (x(), (x = void 0))
  }
  function T() {
    if ((A(), o === void 0)) {
      w()
      return
    }
    if (d.value != null && s.value != null) {
      x = o(d.value, s.value, w)
      return
    }
  }
  function E() {
    r.value || (v.value = !1)
  }
  return (
    H([a, i, l, r], w, { flush: 'sync' }),
    H([d, s], T, { flush: 'sync' }),
    H(r, E, { flush: 'sync' }),
    Vn() && Un(A),
    {
      x: Be(u),
      y: Be(f),
      strategy: Be(p),
      placement: Be(m),
      middlewareData: Be(g),
      isPositioned: Be(v),
      floatingStyles: y,
      update: w
    }
  )
}
function se(e, t) {
  const n = typeof e == 'string' && !t ? `${e}Context` : t,
    o = Symbol(n)
  return [
    (r) => {
      const a = xe(o, r)
      if (a || a === null) return a
      throw new Error(
        `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(', ')}` : `\`${e}\``}`
      )
    },
    (r) => (Oe(o, r), r)
  ]
}
function ho(e, t, n) {
  const o = n.originalEvent.target,
    r = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r)
}
function bi(e, t) {
  var n
  const o = Kn()
  return (
    Y(
      () => {
        o.value = e()
      },
      { ...t, flush: (n = void 0) != null ? n : 'sync' }
    ),
    Yo(o)
  )
}
function Xt(e) {
  return Vn() ? (Un(e), !0) : !1
}
function wi(e) {
  let t = !1,
    n
  const o = jn(!0)
  return (...r) => (t || ((n = o.run(() => e(...r))), (t = !0)), n)
}
function go(e) {
  let t = 0,
    n,
    o
  const r = () => {
    ;(t -= 1), o && t <= 0 && (o.stop(), (n = void 0), (o = void 0))
  }
  return (...a) => ((t += 1), n || ((o = jn(!0)), (n = o.run(() => e(...a)))), Xt(r), n)
}
function Fe(e) {
  return typeof e == 'function' ? e() : h(e)
}
const we = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const xi = (e) => typeof e < 'u',
  Oi = Object.prototype.toString,
  ki = (e) => Oi.call(e) === '[object Object]',
  Ai = () => {},
  Bn = Ci()
function Ci() {
  var e, t
  return (
    we &&
    ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
  )
}
function Ei(e) {
  return Ce()
}
function Pi(e, t = 1e4) {
  return Xo((n, o) => {
    let r = Fe(e),
      a
    const i = () =>
      setTimeout(() => {
        ;(r = Fe(e)), o()
      }, Fe(t))
    return (
      Xt(() => {
        clearTimeout(a)
      }),
      {
        get() {
          return n(), r
        },
        set(l) {
          ;(r = l), o(), clearTimeout(a), (a = i())
        }
      }
    )
  })
}
function Ti(e, t) {
  Ei() && Go(e, t)
}
function Pe(e) {
  var t
  const n = Fe(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Yt = we ? window : void 0
function st(...e) {
  let t, n, o, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, o, r] = e), (t = Yt))
      : ([t, n, o, r] = e),
    !t)
  )
    return Ai
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o])
  const a = [],
    i = () => {
      a.forEach((s) => s()), (a.length = 0)
    },
    l = (s, u, f, p) => (s.addEventListener(u, f, p), () => s.removeEventListener(u, f, p)),
    c = H(
      () => [Pe(t), Fe(r)],
      ([s, u]) => {
        if ((i(), !s)) return
        const f = ki(u) ? { ...u } : u
        a.push(...n.flatMap((p) => o.map((m) => l(s, p, m, f))))
      },
      { immediate: !0, flush: 'post' }
    ),
    d = () => {
      c(), i()
    }
  return Xt(d), d
}
function _i(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Bi(...e) {
  let t,
    n,
    o = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (o = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (o = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const { target: r = Yt, eventName: a = 'keydown', passive: i = !1, dedupe: l = !1 } = o,
    c = _i(t)
  return st(
    r,
    a,
    (d) => {
      ;(d.repeat && Fe(l)) || (c(d) && n(d))
    },
    i
  )
}
function Si() {
  const e = C(!1),
    t = Ce()
  return (
    t &&
      ft(() => {
        e.value = !0
      }, t),
    e
  )
}
function Mi(e) {
  return JSON.parse(JSON.stringify(e))
}
function yt(e, t, n, o = {}) {
  var r, a, i
  const {
      clone: l = !1,
      passive: c = !1,
      eventName: d,
      deep: s = !1,
      defaultValue: u,
      shouldEmit: f
    } = o,
    p = Ce(),
    m =
      n ||
      (p == null ? void 0 : p.emit) ||
      ((r = p == null ? void 0 : p.$emit) == null ? void 0 : r.bind(p)) ||
      ((i = (a = p == null ? void 0 : p.proxy) == null ? void 0 : a.$emit) == null
        ? void 0
        : i.bind(p == null ? void 0 : p.proxy))
  let g = d
  t || (t = 'modelValue'), (g = g || `update:${t.toString()}`)
  const v = (w) => (l ? (typeof l == 'function' ? l(w) : Mi(w)) : w),
    y = () => (xi(e[t]) ? v(e[t]) : u),
    x = (w) => {
      f ? f(w) && m(g, w) : m(g, w)
    }
  if (c) {
    const w = y(),
      A = C(w)
    let T = !1
    return (
      H(
        () => e[t],
        (E) => {
          T || ((T = !0), (A.value = v(E)), V(() => (T = !1)))
        }
      ),
      H(
        A,
        (E) => {
          !T && (E !== e[t] || s) && x(E)
        },
        { deep: s }
      ),
      A
    )
  } else
    return k({
      get() {
        return y()
      },
      set(w) {
        x(w)
      }
    })
}
function Qt(e) {
  return e ? e.flatMap((t) => (t.type === re ? Qt(t.children) : [t])) : []
}
function X() {
  let e = document.activeElement
  if (e == null) return null
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement
  return e
}
const Di = ['INPUT', 'TEXTAREA']
function Fi(e, t, n, o = {}) {
  if (!t || (o.enableIgnoredElement && Di.includes(t.nodeName))) return null
  const {
      arrowKeyOptions: r = 'both',
      attributeName: a = '[data-radix-vue-collection-item]',
      itemsArray: i = [],
      loop: l = !0,
      dir: c = 'ltr',
      preventScroll: d = !0,
      focus: s = !1
    } = o,
    [u, f, p, m, g, v] = [
      e.key === 'ArrowRight',
      e.key === 'ArrowLeft',
      e.key === 'ArrowUp',
      e.key === 'ArrowDown',
      e.key === 'Home',
      e.key === 'End'
    ],
    y = p || m,
    x = u || f
  if (!g && !v && ((!y && !x) || (r === 'vertical' && x) || (r === 'horizontal' && y))) return null
  const w = n ? Array.from(n.querySelectorAll(a)) : i
  if (!w.length) return null
  d && e.preventDefault()
  let A = null
  return (
    x || y
      ? (A = yo(w, t, { goForward: y ? m : c === 'ltr' ? u : f, loop: l }))
      : g
        ? (A = w.at(0) || null)
        : v && (A = w.at(-1) || null),
    s && (A == null || A.focus()),
    A
  )
}
function yo(e, t, n, o = e.length) {
  if (--o === 0) return null
  const r = e.indexOf(t),
    a = n.goForward ? r + 1 : r - 1
  if (!n.loop && (a < 0 || a >= e.length)) return null
  const i = (a + e.length) % e.length,
    l = e[i]
  return l
    ? l.hasAttribute('disabled') && l.getAttribute('disabled') !== 'false'
      ? yo(e, l, n, o)
      : l
    : null
}
function Ot(e) {
  if (e === null || typeof e != 'object') return !1
  const t = Object.getPrototypeOf(e)
  return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === '[object Module]'
      : !0
}
function It(e, t, n = '.', o) {
  if (!Ot(t)) return It(e, {}, n)
  const r = Object.assign({}, t)
  for (const a in e) {
    if (a === '__proto__' || a === 'constructor') continue
    const i = e[a]
    i != null &&
      (Array.isArray(i) && Array.isArray(r[a])
        ? (r[a] = [...i, ...r[a]])
        : Ot(i) && Ot(r[a])
          ? (r[a] = It(i, r[a], (n ? `${n}.` : '') + a.toString()))
          : (r[a] = i))
  }
  return r
}
function Ri(e) {
  return (...t) => t.reduce((n, o) => It(n, o, ''), {})
}
const Ii = Ri(),
  [Zt, _s] = se('ConfigProvider')
let $i = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict',
  Li = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += $i[(Math.random() * 64) | 0]
    return t
  }
const ji = go(() => {
  const e = C(new Map()),
    t = C(),
    n = k(() => {
      for (const i of e.value.values()) if (i) return !0
      return !1
    }),
    o = Zt({ scrollBody: C(!0) })
  let r = null
  const a = () => {
    ;(document.body.style.paddingRight = ''),
      (document.body.style.marginRight = ''),
      (document.body.style.pointerEvents = ''),
      document.body.style.removeProperty('--scrollbar-width'),
      (document.body.style.overflow = t.value ?? ''),
      Bn && (r == null || r()),
      (t.value = void 0)
  }
  return (
    H(
      n,
      (i, l) => {
        var c
        if (!we) return
        if (!i) {
          l && a()
          return
        }
        t.value === void 0 && (t.value = document.body.style.overflow)
        const d = window.innerWidth - document.documentElement.clientWidth,
          s = { padding: d, margin: 0 },
          u =
            (c = o.scrollBody) != null && c.value
              ? typeof o.scrollBody.value == 'object'
                ? Ii(
                    {
                      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
                      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
                    },
                    s
                  )
                : s
              : { padding: 0, margin: 0 }
        d > 0 &&
          ((document.body.style.paddingRight =
            typeof u.padding == 'number' ? `${u.padding}px` : String(u.padding)),
          (document.body.style.marginRight =
            typeof u.margin == 'number' ? `${u.margin}px` : String(u.margin)),
          document.body.style.setProperty('--scrollbar-width', `${d}px`),
          (document.body.style.overflow = 'hidden')),
          Bn && (r = st(document, 'touchmove', (f) => Ni(f), { passive: !1 })),
          V(() => {
            ;(document.body.style.pointerEvents = 'none'), (document.body.style.overflow = 'hidden')
          })
      },
      { immediate: !0, flush: 'sync' }
    ),
    e
  )
})
function zi(e) {
  const t = Li(6),
    n = ji()
  n.value.set(t, e ?? !1)
  const o = k({ get: () => n.value.get(t) ?? !1, set: (r) => n.value.set(t, r) })
  return (
    Ti(() => {
      n.value.delete(t)
    }),
    o
  )
}
function bo(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !(n instanceof Element) || n.tagName === 'BODY' ? !1 : bo(n)
  }
}
function Ni(e) {
  const t = e || window.event,
    n = t.target
  return n instanceof Element && bo(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.cancelable && t.preventDefault(), !1)
}
const Hi = 'data-radix-vue-collection-item'
function Wi(e, t = Hi) {
  const n = Symbol()
  return {
    createCollection: (o) => {
      const r = C([])
      function a() {
        const i = Pe(o)
        return i
          ? (r.value = Array.from(i.querySelectorAll(`[${t}]:not([data-disabled])`)))
          : (r.value = [])
      }
      return (
        Ko(() => {
          r.value = []
        }),
        ft(a),
        Jo(a),
        H(() => (o == null ? void 0 : o.value), a, { immediate: !0 }),
        Oe(n, r),
        r
      )
    },
    injectCollection: () => xe(n, C([]))
  }
}
function en(e) {
  const t = Zt({ dir: C('ltr') })
  return k(() => {
    var n
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || 'ltr'
  })
}
function wo(e) {
  const t = Ce(),
    n = t == null ? void 0 : t.type.emits,
    o = {}
  return (
    (n != null && n.length) ||
      console.warn(
        `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
      ),
    n == null ||
      n.forEach((r) => {
        o[No(Nn(r))] = (...a) => e(r, ...a)
      }),
    o
  )
}
let kt = 0
function Vi() {
  Y((e) => {
    if (!we) return
    const t = document.querySelectorAll('[data-radix-focus-guard]')
    document.body.insertAdjacentElement('afterbegin', t[0] ?? Sn()),
      document.body.insertAdjacentElement('beforeend', t[1] ?? Sn()),
      kt++,
      e(() => {
        kt === 1 &&
          document.querySelectorAll('[data-radix-focus-guard]').forEach((n) => n.remove()),
          kt--
      })
  })
}
function Sn() {
  const e = document.createElement('span')
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  )
}
function Ui(e) {
  const t = Ce(),
    n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
      const i = (t == null ? void 0 : t.type.props[a]).default
      return i !== void 0 && (r[a] = i), r
    }, {}),
    o = Uo(e)
  return k(() => {
    const r = {},
      a = (t == null ? void 0 : t.vnode.props) ?? {}
    return (
      Object.keys(a).forEach((i) => {
        r[Nn(i)] = a[i]
      }),
      Object.keys({ ...n, ...r }).reduce(
        (i, l) => (o.value[l] !== void 0 && (i[l] = o.value[l]), i),
        {}
      )
    )
  })
}
function je(e, t) {
  const n = Ui(e),
    o = t ? wo(t) : {}
  return k(() => ({ ...n.value, ...o }))
}
function W() {
  const e = Ce(),
    t = C(),
    n = k(() => {
      var i, l
      return ['#text', '#comment'].includes((i = t.value) == null ? void 0 : i.$el.nodeName)
        ? (l = t.value) == null
          ? void 0
          : l.$el.nextElementSibling
        : Pe(t)
    }),
    o = Object.assign({}, e.exposed),
    r = {}
  for (const i in e.props)
    Object.defineProperty(r, i, { enumerable: !0, configurable: !0, get: () => e.props[i] })
  if (Object.keys(o).length > 0)
    for (const i in o)
      Object.defineProperty(r, i, { enumerable: !0, configurable: !0, get: () => o[i] })
  Object.defineProperty(r, '$el', { enumerable: !0, configurable: !0, get: () => e.vnode.el }),
    (e.exposed = r)
  function a(i) {
    ;(t.value = i),
      i &&
        (Object.defineProperty(r, '$el', {
          enumerable: !0,
          configurable: !0,
          get: () => (i instanceof Element ? i : i.$el)
        }),
        (e.exposed = r))
  }
  return { forwardRef: a, currentRef: t, currentElement: n }
}
var Ki = function (e) {
    if (typeof document > 'u') return null
    var t = Array.isArray(e) ? e[0] : e
    return t.ownerDocument.body
  },
  Se = new WeakMap(),
  Ye = new WeakMap(),
  Qe = {},
  At = 0,
  xo = function (e) {
    return e && (e.host || xo(e.parentNode))
  },
  Ji = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n
        var o = xo(n)
        return o && e.contains(o)
          ? o
          : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null)
      })
      .filter(function (n) {
        return !!n
      })
  },
  qi = function (e, t, n, o) {
    var r = Ji(t, Array.isArray(e) ? e : [e])
    Qe[n] || (Qe[n] = new WeakMap())
    var a = Qe[n],
      i = [],
      l = new Set(),
      c = new Set(r),
      d = function (u) {
        !u || l.has(u) || (l.add(u), d(u.parentNode))
      }
    r.forEach(d)
    var s = function (u) {
      !u ||
        c.has(u) ||
        Array.prototype.forEach.call(u.children, function (f) {
          if (l.has(f)) s(f)
          else
            try {
              var p = f.getAttribute(o),
                m = p !== null && p !== 'false',
                g = (Se.get(f) || 0) + 1,
                v = (a.get(f) || 0) + 1
              Se.set(f, g),
                a.set(f, v),
                i.push(f),
                g === 1 && m && Ye.set(f, !0),
                v === 1 && f.setAttribute(n, 'true'),
                m || f.setAttribute(o, 'true')
            } catch (y) {
              console.error('aria-hidden: cannot operate on ', f, y)
            }
        })
    }
    return (
      s(t),
      l.clear(),
      At++,
      function () {
        i.forEach(function (u) {
          var f = Se.get(u) - 1,
            p = a.get(u) - 1
          Se.set(u, f),
            a.set(u, p),
            f || (Ye.has(u) || u.removeAttribute(o), Ye.delete(u)),
            p || u.removeAttribute(n)
        }),
          At--,
          At || ((Se = new WeakMap()), (Se = new WeakMap()), (Ye = new WeakMap()), (Qe = {}))
      }
    )
  },
  Gi = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden')
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = Ki(e)
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll('[aria-live]'))), qi(o, r, n, 'aria-hidden'))
      : function () {
          return null
        }
  }
function Xi(e) {
  let t
  H(
    () => Pe(e),
    (n) => {
      n ? (t = Gi(n)) : t && t()
    }
  ),
    dt(() => {
      t && t()
    })
}
let Yi = 0
function Oo(e, t = 'radix') {
  const n = Zt({ useId: void 0 })
  return ln ? `${t}-${ln()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Yi}`
}
function Qi(e) {
  const t = C(),
    n = k(() => {
      var r
      return ((r = t.value) == null ? void 0 : r.width) ?? 0
    }),
    o = k(() => {
      var r
      return ((r = t.value) == null ? void 0 : r.height) ?? 0
    })
  return (
    ft(() => {
      const r = Pe(e)
      if (r) {
        t.value = { width: r.offsetWidth, height: r.offsetHeight }
        const a = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return
          const l = i[0]
          let c, d
          if ('borderBoxSize' in l) {
            const s = l.borderBoxSize,
              u = Array.isArray(s) ? s[0] : s
            ;(c = u.inlineSize), (d = u.blockSize)
          } else (c = r.offsetWidth), (d = r.offsetHeight)
          t.value = { width: c, height: d }
        })
        return a.observe(r, { box: 'border-box' }), () => a.unobserve(r)
      } else t.value = void 0
    }),
    { width: n, height: o }
  )
}
function Zi(e, t) {
  const n = C(e)
  function o(r) {
    return t[n.value][r] ?? n.value
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r)
    }
  }
}
const el = 'data-item-text'
function tl(e) {
  const t = Pi('', 1e3)
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o) return
      t.value = t.value + n
      const r = (e == null ? void 0 : e.value) ?? o,
        a = X(),
        i = r.map((u) => {
          var f
          return {
            ref: u,
            textValue:
              ((f = (u.querySelector(`[${el}]`) ?? u).textContent) == null ? void 0 : f.trim()) ??
              ''
          }
        }),
        l = i.find((u) => u.ref === a),
        c = i.map((u) => u.textValue),
        d = ol(c, t.value, l == null ? void 0 : l.textValue),
        s = i.find((u) => u.textValue === d)
      return s && s.ref.focus(), s == null ? void 0 : s.ref
    },
    resetTypeahead: () => {
      t.value = ''
    }
  }
}
function nl(e, t) {
  return e.map((n, o) => e[(t + o) % e.length])
}
function ol(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
    r = n ? e.indexOf(n) : -1
  let a = nl(e, Math.max(r, 0))
  o.length === 1 && (a = a.filter((l) => l !== n))
  const i = a.find((l) => l.toLowerCase().startsWith(o.toLowerCase()))
  return i !== n ? i : void 0
}
const tn = _({
    name: 'PrimitiveSlot',
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n }) {
      return () => {
        var o, r
        if (!n.default) return null
        const a = Qt(n.default()),
          i = a.findIndex((s) => s.type !== Ho)
        if (i === -1) return a
        const l = a[i]
        ;(o = l.props) == null || delete o.ref
        const c = l.props ? J(t, l.props) : t
        t.class && (r = l.props) != null && r.class && delete l.props.class
        const d = Wo(l, c)
        for (const s in c) s.startsWith('on') && (d.props || (d.props = {}), (d.props[s] = c[s]))
        return a.length === 1 ? d : ((a[i] = d), a)
      }
    }
  }),
  Te = _({
    name: 'Primitive',
    inheritAttrs: !1,
    props: {
      asChild: { type: Boolean, default: !1 },
      as: { type: [String, Object], default: 'div' }
    },
    setup(e, { attrs: t, slots: n }) {
      const o = e.asChild ? 'template' : e.as
      return typeof o == 'string' && ['area', 'img', 'input'].includes(o)
        ? () => he(o, t)
        : o !== 'template'
          ? () => he(e.as, t, { default: n.default })
          : () => he(tn, t, { default: n.default })
    }
  })
function ko() {
  const e = C(),
    t = k(() => {
      var n, o
      return ['#text', '#comment'].includes((n = e.value) == null ? void 0 : n.$el.nodeName)
        ? (o = e.value) == null
          ? void 0
          : o.$el.nextElementSibling
        : Pe(e)
    })
  return { primitiveElement: e, currentElement: t }
}
function rl(e, t) {
  var n
  const o = C({}),
    r = C('none'),
    a = C(e),
    i = e.value ? 'mounted' : 'unmounted'
  let l
  const c = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Yt,
    { state: d, dispatch: s } = Zi(i, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' }
    }),
    u = (v) => {
      var y
      if (we) {
        const x = new CustomEvent(v, { bubbles: !1, cancelable: !1 })
        ;(y = t.value) == null || y.dispatchEvent(x)
      }
    }
  H(
    e,
    async (v, y) => {
      var x
      const w = y !== v
      if ((await V(), w)) {
        const A = r.value,
          T = Ze(t.value)
        v
          ? (s('MOUNT'), u('enter'), T === 'none' && u('after-enter'))
          : T === 'none' || ((x = o.value) == null ? void 0 : x.display) === 'none'
            ? (s('UNMOUNT'), u('leave'), u('after-leave'))
            : y && A !== T
              ? (s('ANIMATION_OUT'), u('leave'))
              : (s('UNMOUNT'), u('after-leave'))
      }
    },
    { immediate: !0 }
  )
  const f = (v) => {
      const y = Ze(t.value),
        x = y.includes(v.animationName),
        w = d.value === 'mounted' ? 'enter' : 'leave'
      if (v.target === t.value && x && (u(`after-${w}`), s('ANIMATION_END'), !a.value)) {
        const A = t.value.style.animationFillMode
        ;(t.value.style.animationFillMode = 'forwards'),
          (l =
            c == null
              ? void 0
              : c.setTimeout(() => {
                  var T
                  ;((T = t.value) == null ? void 0 : T.style.animationFillMode) === 'forwards' &&
                    (t.value.style.animationFillMode = A)
                }))
      }
      v.target === t.value && y === 'none' && s('ANIMATION_END')
    },
    p = (v) => {
      v.target === t.value && (r.value = Ze(t.value))
    },
    m = H(
      t,
      (v, y) => {
        v
          ? ((o.value = getComputedStyle(v)),
            v.addEventListener('animationstart', p),
            v.addEventListener('animationcancel', f),
            v.addEventListener('animationend', f))
          : (s('ANIMATION_END'),
            l !== void 0 && (c == null || c.clearTimeout(l)),
            y == null || y.removeEventListener('animationstart', p),
            y == null || y.removeEventListener('animationcancel', f),
            y == null || y.removeEventListener('animationend', f))
      },
      { immediate: !0 }
    ),
    g = H(d, () => {
      const v = Ze(t.value)
      r.value = d.value === 'mounted' ? v : 'none'
    })
  return (
    dt(() => {
      m(), g()
    }),
    { isPresent: k(() => ['mounted', 'unmountSuspended'].includes(d.value)) }
  )
}
function Ze(e) {
  return (e && getComputedStyle(e).animationName) || 'none'
}
const Ao = _({
    name: 'Presence',
    props: { present: { type: Boolean, required: !0 }, forceMount: { type: Boolean } },
    slots: {},
    setup(e, { slots: t, expose: n }) {
      var o
      const { present: r, forceMount: a } = $e(e),
        i = C(),
        { isPresent: l } = rl(r, i)
      n({ present: l })
      let c = t.default({ present: l })
      c = Qt(c || [])
      const d = Ce()
      if (c && (c == null ? void 0 : c.length) > 1) {
        const s =
          (o = d == null ? void 0 : d.parent) != null && o.type.name
            ? `<${d.parent.type.name} />`
            : 'component'
        throw new Error(
          [
            `Detected an invalid children for \`${s}\` for  \`Presence\` component.`,
            '',
            'Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.',
            'You can apply a few solutions:',
            [
              'Provide a single child element so that `presence` directive attach correctly.',
              'Ensure the first child is an actual element instead of a raw text node or comment node.'
            ].map((u) => `  - ${u}`).join(`
`)
          ].join(`
`)
        )
      }
      return () =>
        a.value || r.value || l.value
          ? he(t.default({ present: l })[0], {
              ref: (s) => {
                const u = Pe(s)
                return (
                  typeof (u == null ? void 0 : u.hasAttribute) > 'u' ||
                    (u != null && u.hasAttribute('data-radix-popper-content-wrapper')
                      ? (i.value = u.firstElementChild)
                      : (i.value = u)),
                  u
                )
              }
            })
          : null
    }
  }),
  al = _({
    __name: 'Teleport',
    props: { to: { default: 'body' }, disabled: { type: Boolean }, forceMount: { type: Boolean } },
    setup(e) {
      const t = Si()
      return (n, o) =>
        h(t) || n.forceMount
          ? (O(),
            R(Vo, { key: 0, to: n.to, disabled: n.disabled }, [F(n.$slots, 'default')], 8, [
              'to',
              'disabled'
            ]))
          : oe('', !0)
    }
  }),
  il = 'dismissableLayer.pointerDownOutside',
  ll = 'dismissableLayer.focusOutside'
function Co(e, t) {
  const n = t.closest('[data-dismissable-layer]'),
    o = e.dataset.dismissableLayer === '' ? e : e.querySelector('[data-dismissable-layer]'),
    r = Array.from(e.ownerDocument.querySelectorAll('[data-dismissable-layer]'))
  return !!((n && o === n) || r.indexOf(o) < r.indexOf(n))
}
function sl(e, t) {
  var n
  const o =
      ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ??
      (globalThis == null ? void 0 : globalThis.document),
    r = C(!1),
    a = C(() => {})
  return (
    Y((i) => {
      if (!we) return
      const l = async (d) => {
          const s = d.target
          if (t != null && t.value) {
            if (Co(t.value, s)) {
              r.value = !1
              return
            }
            if (d.target && !r.value) {
              let u = function () {
                ho(il, e, f)
              }
              const f = { originalEvent: d }
              d.pointerType === 'touch'
                ? (o.removeEventListener('click', a.value),
                  (a.value = u),
                  o.addEventListener('click', a.value, { once: !0 }))
                : u()
            } else o.removeEventListener('click', a.value)
            r.value = !1
          }
        },
        c = window.setTimeout(() => {
          o.addEventListener('pointerdown', l)
        }, 0)
      i(() => {
        window.clearTimeout(c),
          o.removeEventListener('pointerdown', l),
          o.removeEventListener('click', a.value)
      })
    }),
    { onPointerDownCapture: () => (r.value = !0) }
  )
}
function ul(e, t) {
  var n
  const o =
      ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ??
      (globalThis == null ? void 0 : globalThis.document),
    r = C(!1)
  return (
    Y((a) => {
      if (!we) return
      const i = async (l) => {
        t != null &&
          t.value &&
          (await V(),
          !(!t.value || Co(t.value, l.target)) &&
            l.target &&
            !r.value &&
            ho(ll, e, { originalEvent: l }))
      }
      o.addEventListener('focusin', i), a(() => o.removeEventListener('focusin', i))
    }),
    { onFocusCapture: () => (r.value = !0), onBlurCapture: () => (r.value = !1) }
  )
}
const ue = Ln({
    layersRoot: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  cl = _({
    __name: 'DismissableLayer',
    props: {
      disableOutsidePointerEvents: { type: Boolean, default: !1 },
      asChild: { type: Boolean },
      as: {}
    },
    emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'dismiss'],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        { forwardRef: r, currentElement: a } = W(),
        i = k(() => {
          var m
          return ((m = a.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document
        }),
        l = k(() => ue.layersRoot),
        c = k(() => (a.value ? Array.from(l.value).indexOf(a.value) : -1)),
        d = k(() => ue.layersWithOutsidePointerEventsDisabled.size > 0),
        s = k(() => {
          const m = Array.from(l.value),
            [g] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1),
            v = m.indexOf(g)
          return c.value >= v
        }),
        u = sl(async (m) => {
          const g = [...ue.branches].some((v) => (v == null ? void 0 : v.contains(m.target)))
          !s.value ||
            g ||
            (o('pointerDownOutside', m),
            o('interactOutside', m),
            await V(),
            m.defaultPrevented || o('dismiss'))
        }, a),
        f = ul((m) => {
          ;[...ue.branches].some((g) => (g == null ? void 0 : g.contains(m.target))) ||
            (o('focusOutside', m), o('interactOutside', m), m.defaultPrevented || o('dismiss'))
        }, a)
      Bi('Escape', (m) => {
        c.value === l.value.size - 1 && (o('escapeKeyDown', m), m.defaultPrevented || o('dismiss'))
      })
      let p
      return (
        Y((m) => {
          a.value &&
            (n.disableOutsidePointerEvents &&
              (ue.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((p = i.value.body.style.pointerEvents),
                (i.value.body.style.pointerEvents = 'none')),
              ue.layersWithOutsidePointerEventsDisabled.add(a.value)),
            l.value.add(a.value),
            m(() => {
              n.disableOutsidePointerEvents &&
                ue.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (i.value.body.style.pointerEvents = p)
            }))
        }),
        Y((m) => {
          m(() => {
            a.value &&
              (l.value.delete(a.value), ue.layersWithOutsidePointerEventsDisabled.delete(a.value))
          })
        }),
        (m, g) => (
          O(),
          R(
            h(Te),
            {
              ref: h(r),
              'as-child': m.asChild,
              as: m.as,
              'data-dismissable-layer': '',
              style: Wn({ pointerEvents: d.value ? (s.value ? 'auto' : 'none') : void 0 }),
              onFocusCapture: h(f).onFocusCapture,
              onBlurCapture: h(f).onBlurCapture,
              onPointerdownCapture: h(u).onPointerDownCapture
            },
            { default: S(() => [F(m.$slots, 'default')]), _: 3 },
            8,
            ['as-child', 'as', 'style', 'onFocusCapture', 'onBlurCapture', 'onPointerdownCapture']
          )
        )
      )
    }
  }),
  Ct = 'focusScope.autoFocusOnMount',
  Et = 'focusScope.autoFocusOnUnmount',
  Mn = { bubbles: !1, cancelable: !0 }
function dl(e, { select: t = !1 } = {}) {
  const n = X()
  for (const o of e) if ((ve(o, { select: t }), X() !== n)) return !0
}
function fl(e) {
  const t = Eo(e),
    n = Dn(t, e),
    o = Dn(t.reverse(), e)
  return [n, o]
}
function Eo(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === 'INPUT' && o.type === 'hidden'
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      }
    })
  for (; n.nextNode(); ) t.push(n.currentNode)
  return t
}
function Dn(e, t) {
  for (const n of e) if (!pl(n, { upTo: t })) return n
}
function pl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0
  for (; e; ) {
    if (t !== void 0 && e === t) return !1
    if (getComputedStyle(e).display === 'none') return !0
    e = e.parentElement
  }
  return !1
}
function vl(e) {
  return e instanceof HTMLInputElement && 'select' in e
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = X()
    e.focus({ preventScroll: !0 }), e !== n && vl(e) && t && e.select()
  }
}
const ml = wi(() => C([]))
function hl() {
  const e = ml()
  return {
    add(t) {
      const n = e.value[0]
      t !== n && (n == null || n.pause()), (e.value = Fn(e.value, t)), e.value.unshift(t)
    },
    remove(t) {
      var n
      ;(e.value = Fn(e.value, t)), (n = e.value[0]) == null || n.resume()
    }
  }
}
function Fn(e, t) {
  const n = [...e],
    o = n.indexOf(t)
  return o !== -1 && n.splice(o, 1), n
}
function gl(e) {
  return e.filter((t) => t.tagName !== 'A')
}
const yl = _({
    __name: 'FocusScope',
    props: {
      loop: { type: Boolean, default: !1 },
      trapped: { type: Boolean, default: !1 },
      asChild: { type: Boolean },
      as: {}
    },
    emits: ['mountAutoFocus', 'unmountAutoFocus'],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        { currentRef: r, currentElement: a } = W(),
        i = C(null),
        l = hl(),
        c = Ln({
          paused: !1,
          pause() {
            this.paused = !0
          },
          resume() {
            this.paused = !1
          }
        })
      Y((s) => {
        if (!we) return
        const u = a.value
        if (!n.trapped) return
        function f(v) {
          if (c.paused || !u) return
          const y = v.target
          u.contains(y) ? (i.value = y) : ve(i.value, { select: !0 })
        }
        function p(v) {
          if (c.paused || !u) return
          const y = v.relatedTarget
          y !== null && (u.contains(y) || ve(i.value, { select: !0 }))
        }
        function m(v) {
          u.contains(i.value) || ve(u)
        }
        document.addEventListener('focusin', f), document.addEventListener('focusout', p)
        const g = new MutationObserver(m)
        u && g.observe(u, { childList: !0, subtree: !0 }),
          s(() => {
            document.removeEventListener('focusin', f),
              document.removeEventListener('focusout', p),
              g.disconnect()
          })
      }),
        Y(async (s) => {
          const u = a.value
          if ((await V(), !u)) return
          l.add(c)
          const f = X()
          if (!u.contains(f)) {
            const p = new CustomEvent(Ct, Mn)
            u.addEventListener(Ct, (m) => o('mountAutoFocus', m)),
              u.dispatchEvent(p),
              p.defaultPrevented || (dl(gl(Eo(u)), { select: !0 }), X() === f && ve(u))
          }
          s(() => {
            u.removeEventListener(Ct, (g) => o('mountAutoFocus', g))
            const p = new CustomEvent(Et, Mn),
              m = (g) => {
                o('unmountAutoFocus', g)
              }
            u.addEventListener(Et, m),
              u.dispatchEvent(p),
              setTimeout(() => {
                p.defaultPrevented || ve(f ?? document.body, { select: !0 }),
                  u.removeEventListener(Et, m),
                  l.remove(c)
              }, 0)
          })
        })
      function d(s) {
        if ((!n.loop && !n.trapped) || c.paused) return
        const u = s.key === 'Tab' && !s.altKey && !s.ctrlKey && !s.metaKey,
          f = X()
        if (u && f) {
          const p = s.currentTarget,
            [m, g] = fl(p)
          m && g
            ? !s.shiftKey && f === g
              ? (s.preventDefault(), n.loop && ve(m, { select: !0 }))
              : s.shiftKey && f === m && (s.preventDefault(), n.loop && ve(g, { select: !0 }))
            : f === p && s.preventDefault()
        }
      }
      return (s, u) => (
        O(),
        R(
          h(Te),
          {
            ref_key: 'currentRef',
            ref: r,
            tabindex: '-1',
            'as-child': s.asChild,
            as: s.as,
            onKeydown: d
          },
          { default: S(() => [F(s.$slots, 'default')]), _: 3 },
          8,
          ['as-child', 'as']
        )
      )
    }
  }),
  bl = 'menu.itemSelect',
  $t = ['Enter', ' '],
  wl = ['ArrowDown', 'PageUp', 'Home'],
  Po = ['ArrowUp', 'PageDown', 'End'],
  xl = [...wl, ...Po],
  Ol = { ltr: [...$t, 'ArrowRight'], rtl: [...$t, 'ArrowLeft'] },
  kl = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] }
function To(e) {
  return e ? 'open' : 'closed'
}
function Al(e) {
  const t = X()
  for (const n of e) if (n === t || (n.focus(), X() !== t)) return
}
function Cl(e, t) {
  const { x: n, y: o } = e
  let r = !1
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const l = t[a].x,
      c = t[a].y,
      d = t[i].x,
      s = t[i].y
    c > o != s > o && n < ((d - l) * (o - c)) / (s - c) + l && (r = !r)
  }
  return r
}
function El(e, t) {
  if (!t) return !1
  const n = { x: e.clientX, y: e.clientY }
  return Cl(n, t)
}
function Ue(e) {
  return e.pointerType === 'mouse'
}
const [_o, Pl] = se('PopperRoot'),
  Bo = _({
    inheritAttrs: !1,
    __name: 'PopperRoot',
    setup(e) {
      const t = C()
      return (
        Pl({ anchor: t, onAnchorChange: (n) => (t.value = n) }), (n, o) => F(n.$slots, 'default')
      )
    }
  }),
  Tl = _({
    __name: 'PopperAnchor',
    props: { element: {}, asChild: { type: Boolean }, as: {} },
    setup(e) {
      const t = e,
        { forwardRef: n, currentElement: o } = W(),
        r = _o()
      return (
        Y(() => {
          r.onAnchorChange(t.element ?? o.value)
        }),
        (a, i) => (
          O(),
          R(
            h(Te),
            { ref: h(n), as: a.as, 'as-child': a.asChild },
            { default: S(() => [F(a.$slots, 'default')]), _: 3 },
            8,
            ['as', 'as-child']
          )
        )
      )
    }
  })
function _l(e) {
  return e !== null
}
function Bl(e) {
  return {
    name: 'transformOrigin',
    options: e,
    fn(t) {
      var n, o, r
      const { placement: a, rects: i, middlewareData: l } = t,
        c = ((n = l.arrow) == null ? void 0 : n.centerOffset) !== 0,
        d = c ? 0 : e.arrowWidth,
        s = c ? 0 : e.arrowHeight,
        [u, f] = Lt(a),
        p = { start: '0%', center: '50%', end: '100%' }[f],
        m = (((o = l.arrow) == null ? void 0 : o.x) ?? 0) + d / 2,
        g = (((r = l.arrow) == null ? void 0 : r.y) ?? 0) + s / 2
      let v = '',
        y = ''
      return (
        u === 'bottom'
          ? ((v = c ? p : `${m}px`), (y = `${-s}px`))
          : u === 'top'
            ? ((v = c ? p : `${m}px`), (y = `${i.floating.height + s}px`))
            : u === 'right'
              ? ((v = `${-s}px`), (y = c ? p : `${g}px`))
              : u === 'left' && ((v = `${i.floating.width + s}px`), (y = c ? p : `${g}px`)),
        { data: { x: v, y } }
      )
    }
  }
}
function Lt(e) {
  const [t, n = 'center'] = e.split('-')
  return [t, n]
}
const So = {
    side: 'bottom',
    sideOffset: 0,
    align: 'center',
    alignOffset: 0,
    arrowPadding: 0,
    avoidCollisions: !0,
    collisionBoundary: () => [],
    collisionPadding: 0,
    sticky: 'partial',
    hideWhenDetached: !1,
    updatePositionStrategy: 'optimized',
    prioritizePosition: !1
  },
  [Bs, Sl] = se('PopperContent'),
  Ml = _({
    inheritAttrs: !1,
    __name: 'PopperContent',
    props: Hn(
      {
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: { type: Boolean },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: { type: Boolean },
        updatePositionStrategy: {},
        prioritizePosition: { type: Boolean },
        asChild: { type: Boolean },
        as: {}
      },
      { ...So }
    ),
    emits: ['placed'],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        r = _o(),
        { forwardRef: a, currentElement: i } = W(),
        l = C(),
        c = C(),
        { width: d, height: s } = Qi(c),
        u = k(() => n.side + (n.align !== 'center' ? `-${n.align}` : '')),
        f = k(() =>
          typeof n.collisionPadding == 'number'
            ? n.collisionPadding
            : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }
        ),
        p = k(() =>
          Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]
        ),
        m = k(() => ({
          padding: f.value,
          boundary: p.value.filter(_l),
          altBoundary: p.value.length > 0
        })),
        g = bi(() => [
          ui({ mainAxis: n.sideOffset + s.value, alignmentAxis: n.alignOffset }),
          n.prioritizePosition && n.avoidCollisions && Tn({ ...m.value }),
          n.avoidCollisions &&
            ci({
              mainAxis: !0,
              crossAxis: !!n.prioritizePosition,
              limiter: n.sticky === 'partial' ? vi() : void 0,
              ...m.value
            }),
          !n.prioritizePosition && n.avoidCollisions && Tn({ ...m.value }),
          di({
            ...m.value,
            apply: ({ elements: b, rects: B, availableWidth: M, availableHeight: z }) => {
              const { width: $, height: Q } = B.reference,
                K = b.floating.style
              K.setProperty('--radix-popper-available-width', `${M}px`),
                K.setProperty('--radix-popper-available-height', `${z}px`),
                K.setProperty('--radix-popper-anchor-width', `${$}px`),
                K.setProperty('--radix-popper-anchor-height', `${Q}px`)
            }
          }),
          c.value && gi({ element: c.value, padding: n.arrowPadding }),
          Bl({ arrowWidth: d.value, arrowHeight: s.value }),
          n.hideWhenDetached && fi({ strategy: 'referenceHidden', ...m.value })
        ]),
        {
          floatingStyles: v,
          placement: y,
          isPositioned: x,
          middlewareData: w
        } = yi(r.anchor, l, {
          strategy: 'fixed',
          placement: u,
          whileElementsMounted: (...b) =>
            si(...b, { animationFrame: n.updatePositionStrategy === 'always' }),
          middleware: g
        }),
        A = k(() => Lt(y.value)[0]),
        T = k(() => Lt(y.value)[1])
      qo(() => {
        x.value && o('placed')
      })
      const E = k(() => {
          var b
          return ((b = w.value.arrow) == null ? void 0 : b.centerOffset) !== 0
        }),
        P = C('')
      Y(() => {
        i.value && (P.value = window.getComputedStyle(i.value).zIndex)
      })
      const I = k(() => {
          var b
          return ((b = w.value.arrow) == null ? void 0 : b.x) ?? 0
        }),
        L = k(() => {
          var b
          return ((b = w.value.arrow) == null ? void 0 : b.y) ?? 0
        })
      return (
        Sl({
          placedSide: A,
          onArrowChange: (b) => (c.value = b),
          arrowX: I,
          arrowY: L,
          shouldHideArrow: E
        }),
        (b, B) => {
          var M, z, $
          return (
            O(),
            D(
              'div',
              {
                ref_key: 'floatingRef',
                ref: l,
                'data-radix-popper-content-wrapper': '',
                style: Wn({
                  ...h(v),
                  transform: h(x) ? h(v).transform : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: P.value,
                  '--radix-popper-transform-origin': [
                    (M = h(w).transformOrigin) == null ? void 0 : M.x,
                    (z = h(w).transformOrigin) == null ? void 0 : z.y
                  ].join(' '),
                  ...((($ = h(w).hide) == null ? void 0 : $.referenceHidden) && {
                    visibility: 'hidden',
                    pointerEvents: 'none'
                  })
                })
              },
              [
                N(
                  h(Te),
                  J({ ref: h(a) }, b.$attrs, {
                    'as-child': n.asChild,
                    as: b.as,
                    'data-side': A.value,
                    'data-align': T.value,
                    style: { animation: h(x) ? void 0 : 'none' }
                  }),
                  { default: S(() => [F(b.$slots, 'default')]), _: 3 },
                  16,
                  ['as-child', 'as', 'data-side', 'data-align', 'style']
                )
              ],
              4
            )
          )
        }
      )
    }
  }),
  Dl = 'data-radix-vue-collection-item',
  [nn, Fl] = se('CollectionProvider')
function Rl(e = Dl) {
  const t = C(new Map()),
    n = C(),
    o = Fl({ collectionRef: n, itemMap: t, attrName: e }),
    { getItems: r } = Ll(o),
    a = k(() => Array.from(o.itemMap.value.values())),
    i = k(() => o.itemMap.value.size)
  return { getItems: r, reactiveItems: a, itemMapSize: i }
}
const Il = _({
    name: 'CollectionSlot',
    setup(e, { slots: t }) {
      const n = nn(),
        { primitiveElement: o, currentElement: r } = ko()
      return (
        H(r, () => {
          n.collectionRef.value = r.value
        }),
        () => he(tn, { ref: o }, t)
      )
    }
  }),
  $l = _({
    name: 'CollectionItem',
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(e, { slots: t, attrs: n }) {
      const o = nn(),
        { primitiveElement: r, currentElement: a } = ko()
      return (
        Y((i) => {
          if (a.value) {
            const l = Qo(a.value)
            o.itemMap.value.set(l, { ref: a.value, value: e.value }),
              i(() => o.itemMap.value.delete(l))
          }
        }),
        () => he(tn, { ...n, [o.attrName]: '', ref: r }, t)
      )
    }
  })
function Ll(e) {
  const t = e ?? nn()
  return {
    getItems: () => {
      const n = t.collectionRef.value
      if (!n) return []
      const o = Array.from(n.querySelectorAll(`[${t.attrName}]`))
      return Array.from(t.itemMap.value.values()).sort(
        (r, a) => o.indexOf(r.ref) - o.indexOf(a.ref)
      )
    }
  }
}
const Mo = _({
  __name: 'MenuAnchor',
  props: { element: {}, asChild: { type: Boolean }, as: {} },
  setup(e) {
    const t = e
    return (n, o) => (
      O(), R(h(Tl), ke(Ke(t)), { default: S(() => [F(n.$slots, 'default')]), _: 3 }, 16)
    )
  }
})
function jl() {
  const e = C(!1)
  return (
    ft(() => {
      st(
        'keydown',
        () => {
          e.value = !0
        },
        { capture: !0, passive: !0 }
      ),
        st(
          ['pointerdown', 'pointermove'],
          () => {
            e.value = !1
          },
          { capture: !0, passive: !0 }
        )
    }),
    e
  )
}
const zl = go(jl),
  [_e, Do] = se(['MenuRoot', 'MenuSub'], 'MenuContext'),
  [qe, Nl] = se('MenuRoot'),
  Hl = _({
    __name: 'MenuRoot',
    props: { open: { type: Boolean, default: !1 }, dir: {}, modal: { type: Boolean, default: !0 } },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        { modal: r, dir: a } = $e(n),
        i = en(a),
        l = yt(n, 'open', o),
        c = C(),
        d = zl()
      return (
        Do({
          open: l,
          onOpenChange: (s) => {
            l.value = s
          },
          content: c,
          onContentChange: (s) => {
            c.value = s
          }
        }),
        Nl({
          onClose: () => {
            l.value = !1
          },
          isUsingKeyboardRef: d,
          dir: i,
          modal: r
        }),
        (s, u) => (O(), R(h(Bo), null, { default: S(() => [F(s.$slots, 'default')]), _: 3 }))
      )
    }
  }),
  Wl = 'rovingFocusGroup.onEntryFocus',
  Vl = { bubbles: !1, cancelable: !0 }
function Ul(e, t = !1) {
  const n = X()
  for (const o of e) if (o === n || (o.focus({ preventScroll: t }), X() !== n)) return
}
const [Ss, Kl] = se('RovingFocusGroup'),
  Jl = _({
    __name: 'RovingFocusGroup',
    props: {
      orientation: { default: void 0 },
      dir: {},
      loop: { type: Boolean, default: !1 },
      currentTabStopId: {},
      defaultCurrentTabStopId: {},
      preventScrollOnEntryFocus: { type: Boolean, default: !1 },
      asChild: { type: Boolean },
      as: {}
    },
    emits: ['entryFocus', 'update:currentTabStopId'],
    setup(e, { expose: t, emit: n }) {
      const o = e,
        r = n,
        { loop: a, orientation: i, dir: l } = $e(o),
        c = en(l),
        d = yt(o, 'currentTabStopId', r, {
          defaultValue: o.defaultCurrentTabStopId,
          passive: o.currentTabStopId === void 0
        }),
        s = C(!1),
        u = C(!1),
        f = C(0),
        { getItems: p } = Rl()
      function m(v) {
        const y = !u.value
        if (v.currentTarget && v.target === v.currentTarget && y && !s.value) {
          const x = new CustomEvent(Wl, Vl)
          if ((v.currentTarget.dispatchEvent(x), r('entryFocus', x), !x.defaultPrevented)) {
            const w = p()
                .map((P) => P.ref)
                .filter((P) => P.dataset.disabled !== ''),
              A = w.find((P) => P.getAttribute('data-active') === 'true'),
              T = w.find((P) => P.id === d.value),
              E = [A, T, ...w].filter(Boolean)
            Ul(E, o.preventScrollOnEntryFocus)
          }
        }
        u.value = !1
      }
      function g() {
        setTimeout(() => {
          u.value = !1
        }, 1)
      }
      return (
        t({ getItems: p }),
        Kl({
          loop: a,
          dir: c,
          orientation: i,
          currentTabStopId: d,
          onItemFocus: (v) => {
            d.value = v
          },
          onItemShiftTab: () => {
            s.value = !0
          },
          onFocusableItemAdd: () => {
            f.value++
          },
          onFocusableItemRemove: () => {
            f.value--
          }
        }),
        (v, y) => (
          O(),
          R(h(Il), null, {
            default: S(() => [
              N(
                h(Te),
                {
                  tabindex: s.value || f.value === 0 ? -1 : 0,
                  'data-orientation': h(i),
                  as: v.as,
                  'as-child': v.asChild,
                  dir: h(c),
                  style: { outline: 'none' },
                  onMousedown: y[0] || (y[0] = (x) => (u.value = !0)),
                  onMouseup: g,
                  onFocus: m,
                  onBlur: y[1] || (y[1] = (x) => (s.value = !1))
                },
                { default: S(() => [F(v.$slots, 'default')]), _: 3 },
                8,
                ['tabindex', 'data-orientation', 'as', 'as-child', 'dir']
              )
            ]),
            _: 3
          })
        )
      )
    }
  }),
  [on, ql] = se('MenuContent'),
  rn = _({
    __name: 'MenuContentImpl',
    props: Hn(
      {
        loop: { type: Boolean },
        disableOutsidePointerEvents: { type: Boolean },
        disableOutsideScroll: { type: Boolean },
        trapFocus: { type: Boolean },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: { type: Boolean },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: { type: Boolean },
        updatePositionStrategy: {},
        prioritizePosition: { type: Boolean },
        asChild: { type: Boolean },
        as: {}
      },
      { ...So }
    ),
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'entryFocus',
      'openAutoFocus',
      'closeAutoFocus',
      'dismiss'
    ],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        r = _e(),
        a = qe(),
        { trapFocus: i, disableOutsidePointerEvents: l, loop: c } = $e(n)
      Vi(), zi(l.value)
      const d = C(''),
        s = C(0),
        u = C(0),
        f = C(null),
        p = C('right'),
        m = C(0),
        g = C(null),
        { createCollection: v } = Wi(),
        { forwardRef: y, currentElement: x } = W(),
        w = v(x)
      H(x, (b) => {
        r.onContentChange(b)
      })
      const { handleTypeaheadSearch: A } = tl(w)
      dt(() => {
        window.clearTimeout(s.value)
      })
      function T(b) {
        var B, M
        return (
          p.value === ((B = f.value) == null ? void 0 : B.side) &&
          El(b, (M = f.value) == null ? void 0 : M.area)
        )
      }
      async function E(b) {
        var B
        o('openAutoFocus', b),
          !b.defaultPrevented &&
            (b.preventDefault(), (B = x.value) == null || B.focus({ preventScroll: !0 }))
      }
      function P(b) {
        if (b.defaultPrevented) return
        const B = b.target.closest('[data-radix-menu-content]') === b.currentTarget,
          M = b.ctrlKey || b.altKey || b.metaKey,
          z = b.key.length === 1,
          $ = Fi(b, X(), x.value, {
            loop: c.value,
            arrowKeyOptions: 'vertical',
            dir: a == null ? void 0 : a.dir.value,
            focus: !0,
            attributeName: '[data-radix-vue-collection-item]:not([data-disabled])'
          })
        if ($) return $ == null ? void 0 : $.focus()
        if (
          b.code === 'Space' ||
          (B && (b.key === 'Tab' && b.preventDefault(), !M && z && A(b.key)),
          b.target !== x.value) ||
          !xl.includes(b.key)
        )
          return
        b.preventDefault()
        const Q = w.value
        Po.includes(b.key) && Q.reverse(), Al(Q)
      }
      function I(b) {
        var B, M
        ;((M = (B = b == null ? void 0 : b.currentTarget) == null ? void 0 : B.contains) != null &&
          M.call(B, b.target)) ||
          (window.clearTimeout(s.value), (d.value = ''))
      }
      function L(b) {
        var B
        if (!Ue(b)) return
        const M = b.target,
          z = m.value !== b.clientX
        if ((B = b == null ? void 0 : b.currentTarget) != null && B.contains(M) && z) {
          const $ = b.clientX > m.value ? 'right' : 'left'
          ;(p.value = $), (m.value = b.clientX)
        }
      }
      return (
        ql({
          onItemEnter: (b) => !!T(b),
          onItemLeave: (b) => {
            var B
            T(b) || ((B = x.value) == null || B.focus(), (g.value = null))
          },
          onTriggerLeave: (b) => !!T(b),
          searchRef: d,
          pointerGraceTimerRef: u,
          onPointerGraceIntentChange: (b) => {
            f.value = b
          }
        }),
        (b, B) => (
          O(),
          R(
            h(yl),
            {
              'as-child': '',
              trapped: h(i),
              onMountAutoFocus: E,
              onUnmountAutoFocus: B[7] || (B[7] = (M) => o('closeAutoFocus', M))
            },
            {
              default: S(() => [
                N(
                  h(cl),
                  {
                    'as-child': '',
                    'disable-outside-pointer-events': h(l),
                    onEscapeKeyDown: B[2] || (B[2] = (M) => o('escapeKeyDown', M)),
                    onPointerDownOutside: B[3] || (B[3] = (M) => o('pointerDownOutside', M)),
                    onFocusOutside: B[4] || (B[4] = (M) => o('focusOutside', M)),
                    onInteractOutside: B[5] || (B[5] = (M) => o('interactOutside', M)),
                    onDismiss: B[6] || (B[6] = (M) => o('dismiss'))
                  },
                  {
                    default: S(() => [
                      N(
                        h(Jl),
                        {
                          'current-tab-stop-id': g.value,
                          'onUpdate:currentTabStopId': B[0] || (B[0] = (M) => (g.value = M)),
                          'as-child': '',
                          orientation: 'vertical',
                          dir: h(a).dir.value,
                          loop: h(c),
                          onEntryFocus:
                            B[1] ||
                            (B[1] = (M) => {
                              o('entryFocus', M),
                                h(a).isUsingKeyboardRef.value || M.preventDefault()
                            })
                        },
                        {
                          default: S(() => [
                            N(
                              h(Ml),
                              {
                                ref: h(y),
                                role: 'menu',
                                as: b.as,
                                'as-child': b.asChild,
                                'aria-orientation': 'vertical',
                                'data-radix-menu-content': '',
                                'data-state': h(To)(h(r).open.value),
                                dir: h(a).dir.value,
                                side: b.side,
                                'side-offset': b.sideOffset,
                                align: b.align,
                                'align-offset': b.alignOffset,
                                'avoid-collisions': b.avoidCollisions,
                                'collision-boundary': b.collisionBoundary,
                                'collision-padding': b.collisionPadding,
                                'arrow-padding': b.arrowPadding,
                                'prioritize-position': b.prioritizePosition,
                                sticky: b.sticky,
                                'hide-when-detached': b.hideWhenDetached,
                                onKeydown: P,
                                onBlur: I,
                                onPointermove: L
                              },
                              { default: S(() => [F(b.$slots, 'default')]), _: 3 },
                              8,
                              [
                                'as',
                                'as-child',
                                'data-state',
                                'dir',
                                'side',
                                'side-offset',
                                'align',
                                'align-offset',
                                'avoid-collisions',
                                'collision-boundary',
                                'collision-padding',
                                'arrow-padding',
                                'prioritize-position',
                                'sticky',
                                'hide-when-detached'
                              ]
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['current-tab-stop-id', 'dir', 'loop']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['disable-outside-pointer-events']
                )
              ]),
              _: 3
            },
            8,
            ['trapped']
          )
        )
      )
    }
  }),
  Fo = _({
    inheritAttrs: !1,
    __name: 'MenuItemImpl',
    props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
    setup(e) {
      const t = e,
        n = on(),
        { forwardRef: o } = W(),
        r = C(!1)
      async function a(l) {
        if (!l.defaultPrevented && Ue(l)) {
          if (t.disabled) n.onItemLeave(l)
          else if (!n.onItemEnter(l)) {
            const c = l.currentTarget
            c == null || c.focus({ preventScroll: !0 })
          }
        }
      }
      async function i(l) {
        await V(), !l.defaultPrevented && Ue(l) && n.onItemLeave(l)
      }
      return (l, c) => (
        O(),
        R(
          h($l),
          { value: { textValue: l.textValue } },
          {
            default: S(() => [
              N(
                h(Te),
                J({ ref: h(o), role: 'menuitem', tabindex: '-1' }, l.$attrs, {
                  as: l.as,
                  'as-child': l.asChild,
                  'data-radix-vue-collection-item': '',
                  'aria-disabled': l.disabled || void 0,
                  'data-disabled': l.disabled ? '' : void 0,
                  'data-highlighted': r.value ? '' : void 0,
                  onPointermove: a,
                  onPointerleave: i,
                  onFocus:
                    c[0] ||
                    (c[0] = async (d) => {
                      await V(), !(d.defaultPrevented || l.disabled) && (r.value = !0)
                    }),
                  onBlur:
                    c[1] ||
                    (c[1] = async (d) => {
                      await V(), !d.defaultPrevented && (r.value = !1)
                    })
                }),
                { default: S(() => [F(l.$slots, 'default')]), _: 3 },
                16,
                ['as', 'as-child', 'aria-disabled', 'data-disabled', 'data-highlighted']
              )
            ]),
            _: 3
          },
          8,
          ['value']
        )
      )
    }
  }),
  Gl = _({
    __name: 'MenuItem',
    props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
    emits: ['select'],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        { forwardRef: r, currentElement: a } = W(),
        i = qe(),
        l = on(),
        c = C(!1)
      async function d() {
        const s = a.value
        if (!n.disabled && s) {
          const u = new CustomEvent(bl, { bubbles: !0, cancelable: !0 })
          o('select', u), await V(), u.defaultPrevented ? (c.value = !1) : i.onClose()
        }
      }
      return (s, u) => (
        O(),
        R(
          Fo,
          J(n, {
            ref: h(r),
            onClick: d,
            onPointerdown:
              u[0] ||
              (u[0] = () => {
                c.value = !0
              }),
            onPointerup:
              u[1] ||
              (u[1] = async (f) => {
                var p
                await V(),
                  !f.defaultPrevented && (c.value || (p = f.currentTarget) == null || p.click())
              }),
            onKeydown:
              u[2] ||
              (u[2] = async (f) => {
                const p = h(l).searchRef.value !== ''
                s.disabled ||
                  (p && f.key === ' ') ||
                  (h($t).includes(f.key) && (f.currentTarget.click(), f.preventDefault()))
              })
          }),
          { default: S(() => [F(s.$slots, 'default')]), _: 3 },
          16
        )
      )
    }
  }),
  Xl = _({
    __name: 'MenuRootContentModal',
    props: {
      loop: { type: Boolean },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: { type: Boolean },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: { type: Boolean },
      updatePositionStrategy: {},
      prioritizePosition: { type: Boolean },
      asChild: { type: Boolean },
      as: {}
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'entryFocus',
      'openAutoFocus',
      'closeAutoFocus'
    ],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        r = je(n, o),
        a = _e(),
        { forwardRef: i, currentElement: l } = W()
      return (
        Xi(l),
        (c, d) => (
          O(),
          R(
            rn,
            J(h(r), {
              ref: h(i),
              'trap-focus': h(a).open.value,
              'disable-outside-pointer-events': h(a).open.value,
              'disable-outside-scroll': !0,
              onDismiss: d[0] || (d[0] = (s) => h(a).onOpenChange(!1)),
              onFocusOutside: d[1] || (d[1] = nt((s) => o('focusOutside', s), ['prevent']))
            }),
            { default: S(() => [F(c.$slots, 'default')]), _: 3 },
            16,
            ['trap-focus', 'disable-outside-pointer-events']
          )
        )
      )
    }
  }),
  Yl = _({
    __name: 'MenuRootContentNonModal',
    props: {
      loop: { type: Boolean },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: { type: Boolean },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: { type: Boolean },
      updatePositionStrategy: {},
      prioritizePosition: { type: Boolean },
      asChild: { type: Boolean },
      as: {}
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'entryFocus',
      'openAutoFocus',
      'closeAutoFocus'
    ],
    setup(e, { emit: t }) {
      const n = je(e, t),
        o = _e()
      return (r, a) => (
        O(),
        R(
          rn,
          J(h(n), {
            'trap-focus': !1,
            'disable-outside-pointer-events': !1,
            'disable-outside-scroll': !1,
            onDismiss: a[0] || (a[0] = (i) => h(o).onOpenChange(!1))
          }),
          { default: S(() => [F(r.$slots, 'default')]), _: 3 },
          16
        )
      )
    }
  }),
  Ql = _({
    __name: 'MenuContent',
    props: {
      forceMount: { type: Boolean },
      loop: { type: Boolean },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: { type: Boolean },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: { type: Boolean },
      updatePositionStrategy: {},
      prioritizePosition: { type: Boolean },
      asChild: { type: Boolean },
      as: {}
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'entryFocus',
      'openAutoFocus',
      'closeAutoFocus'
    ],
    setup(e, { emit: t }) {
      const n = je(e, t),
        o = _e(),
        r = qe()
      return (a, i) => (
        O(),
        R(
          h(Ao),
          { present: a.forceMount || h(o).open.value },
          {
            default: S(() => [
              h(r).modal.value
                ? (O(),
                  R(
                    Xl,
                    ke(J({ key: 0 }, { ...a.$attrs, ...h(n) })),
                    { default: S(() => [F(a.$slots, 'default')]), _: 3 },
                    16
                  ))
                : (O(),
                  R(
                    Yl,
                    ke(J({ key: 1 }, { ...a.$attrs, ...h(n) })),
                    { default: S(() => [F(a.$slots, 'default')]), _: 3 },
                    16
                  ))
            ]),
            _: 3
          },
          8,
          ['present']
        )
      )
    }
  }),
  Zl = _({
    __name: 'MenuPortal',
    props: { to: {}, disabled: { type: Boolean }, forceMount: { type: Boolean } },
    setup(e) {
      const t = e
      return (n, o) => (
        O(), R(h(al), ke(Ke(t)), { default: S(() => [F(n.$slots, 'default')]), _: 3 }, 16)
      )
    }
  }),
  [Ro, es] = se('MenuSub'),
  ts = _({
    __name: 'MenuSub',
    props: { open: { type: Boolean, default: void 0 } },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        o = yt(n, 'open', t, { defaultValue: !1, passive: n.open === void 0 }),
        r = _e(),
        a = C(),
        i = C()
      return (
        Y((l) => {
          ;(r == null ? void 0 : r.open.value) === !1 && (o.value = !1), l(() => (o.value = !1))
        }),
        Do({
          open: o,
          onOpenChange: (l) => {
            o.value = l
          },
          content: i,
          onContentChange: (l) => {
            i.value = l
          }
        }),
        es({
          triggerId: '',
          contentId: '',
          trigger: a,
          onTriggerChange: (l) => {
            a.value = l
          }
        }),
        (l, c) => (O(), R(h(Bo), null, { default: S(() => [F(l.$slots, 'default')]), _: 3 }))
      )
    }
  }),
  ns = _({
    __name: 'MenuSubContent',
    props: {
      forceMount: { type: Boolean },
      loop: { type: Boolean },
      sideOffset: {},
      alignOffset: {},
      avoidCollisions: { type: Boolean },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: { type: Boolean },
      updatePositionStrategy: {},
      prioritizePosition: { type: Boolean, default: !0 },
      asChild: { type: Boolean },
      as: {}
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'entryFocus',
      'openAutoFocus',
      'closeAutoFocus'
    ],
    setup(e, { emit: t }) {
      const n = je(e, t),
        o = _e(),
        r = qe(),
        a = Ro(),
        { forwardRef: i, currentElement: l } = W()
      return (
        a.contentId || (a.contentId = Oo(void 0, 'radix-vue-menu-sub-content')),
        (c, d) => (
          O(),
          R(
            h(Ao),
            { present: c.forceMount || h(o).open.value },
            {
              default: S(() => [
                N(
                  rn,
                  J(h(n), {
                    id: h(a).contentId,
                    ref: h(i),
                    'aria-labelledby': h(a).triggerId,
                    align: 'start',
                    side: h(r).dir.value === 'rtl' ? 'left' : 'right',
                    'disable-outside-pointer-events': !1,
                    'disable-outside-scroll': !1,
                    'trap-focus': !1,
                    onOpenAutoFocus:
                      d[0] ||
                      (d[0] = nt(
                        (s) => {
                          var u
                          h(r).isUsingKeyboardRef.value && ((u = h(l)) == null || u.focus())
                        },
                        ['prevent']
                      )),
                    onCloseAutoFocus: d[1] || (d[1] = nt(() => {}, ['prevent'])),
                    onFocusOutside:
                      d[2] ||
                      (d[2] = (s) => {
                        s.defaultPrevented ||
                          (s.target !== h(a).trigger.value && h(o).onOpenChange(!1))
                      }),
                    onEscapeKeyDown:
                      d[3] ||
                      (d[3] = (s) => {
                        h(r).onClose(), s.preventDefault()
                      }),
                    onKeydown:
                      d[4] ||
                      (d[4] = (s) => {
                        var u, f
                        const p = (u = s.currentTarget) == null ? void 0 : u.contains(s.target),
                          m = h(kl)[h(r).dir.value].includes(s.key)
                        p &&
                          m &&
                          (h(o).onOpenChange(!1),
                          (f = h(a).trigger.value) == null || f.focus(),
                          s.preventDefault())
                      })
                  }),
                  { default: S(() => [F(c.$slots, 'default')]), _: 3 },
                  16,
                  ['id', 'aria-labelledby', 'side']
                )
              ]),
              _: 3
            },
            8,
            ['present']
          )
        )
      )
    }
  }),
  os = _({
    __name: 'MenuSubTrigger',
    props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
    setup(e) {
      const t = e,
        n = _e(),
        o = qe(),
        r = Ro(),
        a = on(),
        i = C(null)
      r.triggerId || (r.triggerId = Oo(void 0, 'radix-vue-menu-sub-trigger'))
      function l() {
        i.value && window.clearTimeout(i.value), (i.value = null)
      }
      dt(() => {
        l()
      })
      function c(u) {
        !Ue(u) ||
          a.onItemEnter(u) ||
          (!t.disabled &&
            !n.open.value &&
            !i.value &&
            (a.onPointerGraceIntentChange(null),
            (i.value = window.setTimeout(() => {
              n.onOpenChange(!0), l()
            }, 100))))
      }
      async function d(u) {
        var f, p
        if (!Ue(u)) return
        l()
        const m = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect()
        if (m != null && m.width) {
          const g = (p = n.content.value) == null ? void 0 : p.dataset.side,
            v = g === 'right',
            y = v ? -5 : 5,
            x = m[v ? 'left' : 'right'],
            w = m[v ? 'right' : 'left']
          a.onPointerGraceIntentChange({
            area: [
              { x: u.clientX + y, y: u.clientY },
              { x, y: m.top },
              { x: w, y: m.top },
              { x: w, y: m.bottom },
              { x, y: m.bottom }
            ],
            side: g
          }),
            window.clearTimeout(a.pointerGraceTimerRef.value),
            (a.pointerGraceTimerRef.value = window.setTimeout(
              () => a.onPointerGraceIntentChange(null),
              300
            ))
        } else {
          if (a.onTriggerLeave(u)) return
          a.onPointerGraceIntentChange(null)
        }
      }
      async function s(u) {
        var f
        const p = a.searchRef.value !== ''
        t.disabled ||
          (p && u.key === ' ') ||
          (Ol[o.dir.value].includes(u.key) &&
            (n.onOpenChange(!0),
            await V(),
            (f = n.content.value) == null || f.focus(),
            u.preventDefault()))
      }
      return (u, f) => (
        O(),
        R(
          Mo,
          { 'as-child': '' },
          {
            default: S(() => [
              N(
                Fo,
                J(t, {
                  id: h(r).triggerId,
                  ref: (p) => {
                    var m
                    ;(m = h(r)) == null || m.onTriggerChange(p == null ? void 0 : p.$el)
                  },
                  'aria-haspopup': 'menu',
                  'aria-expanded': h(n).open.value,
                  'aria-controls': h(r).contentId,
                  'data-state': h(To)(h(n).open.value),
                  onClick:
                    f[0] ||
                    (f[0] = async (p) => {
                      t.disabled ||
                        p.defaultPrevented ||
                        (p.currentTarget.focus(), h(n).open.value || h(n).onOpenChange(!0))
                    }),
                  onPointermove: c,
                  onPointerleave: d,
                  onKeydown: s
                }),
                { default: S(() => [F(u.$slots, 'default')]), _: 3 },
                16,
                ['id', 'aria-expanded', 'aria-controls', 'data-state']
              )
            ]),
            _: 3
          }
        )
      )
    }
  }),
  [Io, rs] = se('ContextMenuRoot'),
  as = _({
    inheritAttrs: !1,
    __name: 'ContextMenuRoot',
    props: { dir: {}, modal: { type: Boolean, default: !0 } },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        { dir: r, modal: a } = $e(n)
      W()
      const i = en(r),
        l = C(!1)
      return (
        rs({
          open: l,
          onOpenChange: (c) => {
            l.value = c
          },
          dir: i,
          modal: a
        }),
        H(l, (c) => {
          o('update:open', c)
        }),
        (c, d) => (
          O(),
          R(
            h(Hl),
            {
              open: l.value,
              'onUpdate:open': d[0] || (d[0] = (s) => (l.value = s)),
              dir: h(i),
              modal: h(a)
            },
            { default: S(() => [F(c.$slots, 'default')]), _: 3 },
            8,
            ['open', 'dir', 'modal']
          )
        )
      )
    }
  })
function Rn(e) {
  return e.pointerType !== 'mouse'
}
const is = _({
    inheritAttrs: !1,
    __name: 'ContextMenuTrigger',
    props: {
      disabled: { type: Boolean, default: !1 },
      asChild: { type: Boolean },
      as: { default: 'span' }
    },
    setup(e) {
      const t = e,
        { disabled: n } = $e(t),
        { forwardRef: o } = W(),
        r = Io(),
        a = C({ x: 0, y: 0 }),
        i = k(() => ({
          getBoundingClientRect: () => ({
            width: 0,
            height: 0,
            left: a.value.x,
            right: a.value.x,
            top: a.value.y,
            bottom: a.value.y,
            ...a.value
          })
        })),
        l = C(0)
      function c() {
        window.clearTimeout(l.value)
      }
      function d(p) {
        ;(a.value = { x: p.clientX, y: p.clientY }), r.onOpenChange(!0)
      }
      async function s(p) {
        n.value || (await V(), p.defaultPrevented || (c(), d(p), p.preventDefault()))
      }
      async function u(p) {
        n.value ||
          (await V(),
          Rn(p) && !p.defaultPrevented && (c(), (l.value = window.setTimeout(() => d(p), 700))))
      }
      async function f(p) {
        n.value || (await V(), Rn(p) && !p.defaultPrevented && c())
      }
      return (p, m) => (
        O(),
        D(
          re,
          null,
          [
            N(h(Mo), { as: 'template', element: i.value }, null, 8, ['element']),
            N(
              h(Te),
              J(
                {
                  ref: h(o),
                  as: p.as,
                  'as-child': p.asChild,
                  'data-state': h(r).open.value ? 'open' : 'closed',
                  'data-disabled': h(n) ? '' : void 0,
                  style: { WebkitTouchCallout: 'none' }
                },
                p.$attrs,
                {
                  onContextmenu: s,
                  onPointerdown: u,
                  onPointermove: f,
                  onPointercancel: f,
                  onPointerup: f
                }
              ),
              { default: S(() => [F(p.$slots, 'default')]), _: 3 },
              16,
              ['as', 'as-child', 'data-state', 'data-disabled']
            )
          ],
          64
        )
      )
    }
  }),
  In = _({
    __name: 'ContextMenuPortal',
    props: { to: {}, disabled: { type: Boolean }, forceMount: { type: Boolean } },
    setup(e) {
      const t = e
      return (n, o) => (
        O(), R(h(Zl), ke(Ke(t)), { default: S(() => [F(n.$slots, 'default')]), _: 3 }, 16)
      )
    }
  }),
  ls = _({
    __name: 'ContextMenuContent',
    props: {
      forceMount: { type: Boolean },
      loop: { type: Boolean },
      alignOffset: { default: 0 },
      avoidCollisions: { type: Boolean, default: !0 },
      collisionBoundary: { default: () => [] },
      collisionPadding: { default: 0 },
      sticky: { default: 'partial' },
      hideWhenDetached: { type: Boolean, default: !1 },
      prioritizePosition: { type: Boolean },
      asChild: { type: Boolean },
      as: {}
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'closeAutoFocus'
    ],
    setup(e, { emit: t }) {
      const n = je(e, t)
      W()
      const o = Io(),
        r = C(!1)
      return (a, i) => (
        O(),
        R(
          h(Ql),
          J(h(n), {
            side: 'right',
            'side-offset': 2,
            align: 'start',
            style: {
              '--radix-context-menu-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-context-menu-content-available-width': 'var(--radix-popper-available-width)',
              '--radix-context-menu-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
              '--radix-context-menu-trigger-height': 'var(--radix-popper-anchor-height)'
            },
            onCloseAutoFocus:
              i[0] ||
              (i[0] = (l) => {
                !l.defaultPrevented && r.value && l.preventDefault(), (r.value = !1)
              }),
            onInteractOutside:
              i[1] ||
              (i[1] = (l) => {
                !l.defaultPrevented && !h(o).modal.value && (r.value = !0)
              })
          }),
          { default: S(() => [F(a.$slots, 'default')]), _: 3 },
          16
        )
      )
    }
  }),
  $n = _({
    __name: 'ContextMenuItem',
    props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
    emits: ['select'],
    setup(e, { emit: t }) {
      const n = e,
        o = wo(t)
      return (
        W(),
        (r, a) => (
          O(),
          R(
            h(Gl),
            ke(Ke({ ...n, ...h(o) })),
            { default: S(() => [F(r.$slots, 'default')]), _: 3 },
            16
          )
        )
      )
    }
  }),
  ss = _({
    __name: 'ContextMenuSub',
    props: { defaultOpen: { type: Boolean }, open: { type: Boolean, default: void 0 } },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        o = t
      W()
      const r = yt(n, 'open', o, { defaultValue: n.defaultOpen, passive: n.open === void 0 })
      return (a, i) => (
        O(),
        R(
          h(ts),
          { open: h(r), 'onUpdate:open': i[0] || (i[0] = (l) => (zo(r) ? (r.value = l) : null)) },
          { default: S(() => [F(a.$slots, 'default', { open: h(r) })]), _: 3 },
          8,
          ['open']
        )
      )
    }
  }),
  us = _({
    __name: 'ContextMenuSubContent',
    props: {
      forceMount: { type: Boolean },
      loop: { type: Boolean },
      sideOffset: {},
      alignOffset: {},
      avoidCollisions: { type: Boolean },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: { type: Boolean },
      updatePositionStrategy: {},
      prioritizePosition: { type: Boolean },
      asChild: { type: Boolean },
      as: {}
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'entryFocus',
      'openAutoFocus',
      'closeAutoFocus'
    ],
    setup(e, { emit: t }) {
      const n = je(e, t)
      return (
        W(),
        (o, r) => (
          O(),
          R(
            h(ns),
            J(h(n), {
              style: {
                '--radix-context-menu-content-transform-origin':
                  'var(--radix-popper-transform-origin)',
                '--radix-context-menu-content-available-width':
                  'var(--radix-popper-available-width)',
                '--radix-context-menu-content-available-height':
                  'var(--radix-popper-available-height)',
                '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
                '--radix-context-menu-trigger-height': 'var(--radix-popper-anchor-height)'
              }
            }),
            { default: S(() => [F(o.$slots, 'default')]), _: 3 },
            16
          )
        )
      )
    }
  }),
  cs = _({
    __name: 'ContextMenuSubTrigger',
    props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
    setup(e) {
      const t = e
      return (
        W(),
        (n, o) => (
          O(), R(h(os), ke(Ke(t)), { default: S(() => [F(n.$slots, 'default')]), _: 3 }, 16)
        )
      )
    }
  })
function ds() {
  if (typeof matchMedia == 'function')
    return matchMedia('(pointer:coarse)').matches ? 'coarse' : 'fine'
}
ds()
const fs = ['onClick'],
  ps = { class: 'flex items-center justify-between' },
  vs = ['onClick'],
  Ms = _({
    __name: 'JiaHaoMenu',
    props: { items: {} },
    setup(e) {
      return (t, n) => (
        O(),
        R(h(as), null, {
          default: S(() => [
            N(h(is), null, { default: S(() => [F(t.$slots, 'default')]), _: 3 }),
            N(h(In), null, {
              default: S(() => [
                N(
                  h(ls),
                  { class: 'w-56 rounded menu bg-base-200', 'side-offset': 5 },
                  {
                    default: S(() => [
                      j('ul', null, [
                        (O(!0),
                        D(
                          re,
                          null,
                          me(
                            t.items,
                            (o) => (
                              O(),
                              D('li', { key: o.label }, [
                                (O(),
                                R(
                                  zn(o.children ? h(ss) : h($n)),
                                  null,
                                  {
                                    default: S(() => [
                                      o.children
                                        ? oe('', !0)
                                        : (O(),
                                          D(
                                            'button',
                                            { key: 0, onClick: o.action },
                                            ne(o.label),
                                            9,
                                            fs
                                          )),
                                      o.children
                                        ? (O(),
                                          R(
                                            h(cs),
                                            { key: 1, class: 'block w-full' },
                                            {
                                              default: S(() => [
                                                j('div', null, [
                                                  j('div', ps, [
                                                    j('span', null, ne(o.label), 1),
                                                    j('span', null, [
                                                      N(h(rt), {
                                                        icon: 'radix-icons:chevron-right'
                                                      })
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              _: 2
                                            },
                                            1024
                                          ))
                                        : oe('', !0),
                                      o.children
                                        ? (O(),
                                          R(
                                            h(In),
                                            { key: 2 },
                                            {
                                              default: S(() => [
                                                N(
                                                  h(us),
                                                  {
                                                    class: 'w-56 pl-5 rounded menu bg-base-200',
                                                    'side-offset': 0,
                                                    'align-offset': 0
                                                  },
                                                  {
                                                    default: S(() => [
                                                      (O(!0),
                                                      D(
                                                        re,
                                                        null,
                                                        me(
                                                          o.children,
                                                          (r) => (
                                                            O(),
                                                            D('li', { key: r.label }, [
                                                              N(
                                                                h($n),
                                                                null,
                                                                {
                                                                  default: S(() => [
                                                                    j(
                                                                      'button',
                                                                      {
                                                                        onClick: nt(r.action, [
                                                                          'stop'
                                                                        ])
                                                                      },
                                                                      ne(r.label),
                                                                      9,
                                                                      vs
                                                                    )
                                                                  ]),
                                                                  _: 2
                                                                },
                                                                1024
                                                              )
                                                            ])
                                                          )
                                                        ),
                                                        128
                                                      ))
                                                    ]),
                                                    _: 2
                                                  },
                                                  1024
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1024
                                          ))
                                        : oe('', !0)
                                    ]),
                                    _: 2
                                  },
                                  1024
                                ))
                              ])
                            )
                          ),
                          128
                        ))
                      ])
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            })
          ]),
          _: 3
        })
      )
    }
  }),
  Ds = ['primary', 'secondary', 'accent', 'neutral'],
  Fs = ['success', 'warning', 'error', 'info'],
  Rs = ['xs', 'sm', 'md', 'lg']
export {
  Es as B,
  Ps as D,
  Cs as M,
  Rs as R,
  As as S,
  ks as T,
  Os as _,
  Ds as a,
  Fs as b,
  Ms as c,
  xs as d,
  gs as i,
  Ts as j,
  bs as m,
  nr as q,
  hs as r,
  ys as u,
  ws as v
}
