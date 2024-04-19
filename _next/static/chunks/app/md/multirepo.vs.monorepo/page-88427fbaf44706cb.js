(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{74556:function(e,r,n){Promise.resolve().then(n.bind(n,96575))},96575:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return d}});var t=n(18038),s=n(81389),o=n(27597);function c(e){let r={code:"code",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{children:"MultiRepo VS MonoRepo"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"场景"}),(0,s.jsx)("th",{children:"MultiRepo"}),(0,s.jsx)("th",{children:"MonoRepo"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"代码可见性"}),(0,s.jsxs)("td",{children:["✅ 代码隔离，研发者只需关注自己负责的仓库",(0,s.jsx)("br",{}),"❌ 包管理按照各自owner划分，当出现问题时，需要到依赖包中进行判断并解决。"]}),(0,s.jsxs)("td",{children:["✅ 一个仓库中多个相关项目，很容易看到整个代码库的变化趋势，更好的团队协作。",(0,s.jsx)("br",{}),"❌ 增加了非owner改动代码的风险"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"依赖管理"}),(0,s.jsx)("td",{children:"❌ 多个仓库都有自己的 node_modules，存在依赖重复安装情况，占用磁盘内存大。"}),(0,s.jsx)("td",{children:"✅ 多项目代码都在一个仓库中，相同版本依赖提升到顶层只安装一次，节省磁盘内存"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"代码权限"}),(0,s.jsx)("td",{children:"✅ 各项目单独仓库，不会出现代码被误改的情况，单个项目出现问题不会影响其他项目。"}),(0,s.jsx)("td",{children:"❌ 多个项目代码都在一个仓库中，没有项目粒度的权限管控，一个项目出问题，可能影响所有项目。"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"开发迭代"}),(0,s.jsxs)("td",{children:["✅ 仓库体积小，模块划分清晰，可维护性强。",(0,s.jsx)("br",{}),"❌ 多仓库来回切换（编辑器及命令行），项目多的话效率很低。多仓库见存在依赖时，需要手动 ",(0,s.jsx)(r.code,{children:"npm link"}),"，操作繁琐。",(0,s.jsx)("br",{}),"❌ 依赖管理不便，多个依赖可能在多个仓库中存在不同版本，重复安装，npm link 时不同项目的依赖会存在冲突。"]}),(0,s.jsxs)("td",{children:["✅ 多个项目都在一个仓库中，可看到相关项目全貌，编码非常方便。",(0,s.jsx)("br",{}),"✅ 代码复用高，方便进行代码重构。",(0,s.jsx)("br",{}),"❌ 多项目在一个仓库中，代码体积多大几个 G，",(0,s.jsx)(r.code,{children:"git clone"}),"时间较长。",(0,s.jsx)("br",{}),"✅ 依赖调试方便，依赖包迭代场景下，借助工具自动 npm link，直接使用最新版本依赖，简化了操作流程。"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"工程配置"}),(0,s.jsx)("td",{children:"❌ 各项目构建、打包、代码校验都各自维护，不一致时会导致代码差异或构建差异。"}),(0,s.jsx)("td",{children:"✅ 多项目在一个仓库，工程配置一致，代码质量标准及风格也很容易一致。"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"构建部署"}),(0,s.jsx)("td",{children:"❌ 多个项目间存在依赖，部署时需要手动到不同的仓库根据先后顺序去修改版本及进行部署，操作繁琐效率低。"}),(0,s.jsx)("td",{children:"✅ 构建性 Monorepo 工具可以配置依赖项目的构建优先级，可以实现一次命令完成所有的部署。"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["综合如上 Monorepo VS MultiRepo，",(0,s.jsx)(r.strong,{children:"中大型项目"}),"，",(0,s.jsx)(r.strong,{children:"多模块项目"}),"，更适合用 MonoRepo 方式管理代码，在开发、协作效率、代码一致性方面都能受益。"]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function d(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"container md",children:(0,t.jsx)(i,{})})})}n(90007)},90007:function(){},83952:function(e,r,n){"use strict";var t=n(719),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},18038:function(e,r,n){"use strict";e.exports=n(83952)},80046:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=n(719),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},81389:function(e,r,n){"use strict";e.exports=n(80046)},27597:function(e,r,n){"use strict";n.d(r,{a:function(){return o}});var t=n(719);let s=t.createContext({});function o(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}}},function(e){e.O(0,[120,543,744],function(){return e(e.s=74556)}),_N_E=e.O()}]);