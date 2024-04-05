"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(zn,$,n){n.d($,{Z:function(){return xn},f:function(){return C}});var rn=n(667294),C=rn.createContext(!1);function xn(){return rn.useContext(C)}},438746:function(zn,$,n){n.d($,{Z:function(){return v}});var rn=n(97857),C=n.n(rn),xn=n(952677),x=n.n(xn),w=n(805574),I=n.n(w),yn=n(385956),a=n(667294),J=n(302559);function E(R){return R.replace("-cn","").replace(/\/$/,"")}function v(){var R=(0,yn.useLocation)(),dn=R.search,cn=(0,J.default)(),d=I()(cn,2),o=d[1],c=a.useCallback(function(e,j){var f=E(e);if(o==="cn"&&(f="".concat(f,"-cn")),dn&&(f="".concat(f).concat(dn)),j){var T;x()(j)==="object"?T=j[o]:T=j,f="".concat(f,"#").concat(T)}return f},[o,dn]);return C()(C()({},R),{},{pathname:E(R.pathname),getLink:c})}},361446:function(zn,$,n){var rn=n(805574),C=n.n(rn),xn=n(719632),x=n.n(xn),w=n(9783),I=n.n(w),yn=n(168400),a=n.n(yn),J=n(667294),E=n(844183),v=n(566254),R=n(647759),dn=n(693967),cn=n.n(dn),d=n(385956),o=n(472638),c=n(438746),e=n(785893),j,f;function T(P){return P&&/^\d+\.\d+\.\d+$/.test(P)}var pn=(0,R.kc)(function(P){var M=P.css;return{link:M(j||(j=a()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:M(f||(f=a()([`
    margin-inline-end: 0;
  `])))}}),mn=function(M){var D=pn(),A=D.styles,F=M.before,z=M.after,Q=M.link,Y=M.title,L=M.subtitle,_=M.search,G=M.tag,H=M.className;return!F&&!z?(0,e.jsxs)(o.Z,{to:"".concat(Q).concat(_),className:cn()(H,I()({},A.link,G)),children:[(0,e.jsxs)("span",{children:[Y,L&&(0,e.jsx)("span",{className:"chinese",children:L})]}),G&&(0,e.jsx)(E.Z,{bordered:!1,className:cn()(A.tag),color:T(G)||G==="New"?"success":"processing",children:G.replace("VERSION",v.Z)})]}):(0,e.jsxs)(o.Z,{to:"".concat(Q).concat(_),className:H,children:[F,Y,L&&(0,e.jsx)("span",{className:"chinese",children:L}),z]})},s=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=(0,d.useFullSidebarData)(),A=(0,c.Z)(),F=A.pathname,z=A.search,Q=(0,d.useSidebarData)(),Y=M.before,L=M.after,_=(0,J.useMemo)(function(){var G,H=x()(Q!=null?Q:[]);if(F.startsWith("/docs/spec")){var Mn=H.splice(0,1);H.push.apply(H,x()(Mn))}if(F.startsWith("/docs/react")){var U,kn=(U=Object.entries(D).find(function(y){var m=C()(y,1),S=m[0];return S.startsWith("/changelog")}))===null||U===void 0?void 0:U[1];kn&&H.splice(1,0,kn[0])}if(F.startsWith("/changelog")){var k,u=(k=Object.entries(D).find(function(y){var m=C()(y,1),S=m[0];return S.startsWith("/docs/react")}))===null||k===void 0?void 0:k[1];u&&(H.unshift(u[0]),H.push.apply(H,x()(u.slice(1))))}return(G=H==null?void 0:H.reduce(function(y,m){if(m!=null&&m.title)if(F.startsWith("/docs/spec")){var S,X,q=m.children.reduce(function(h,B){var Z,nn,en=(Z=(nn=B.frontmatter)===null||nn===void 0?void 0:nn.type)!==null&&Z!==void 0?Z:"default";return h[en]||(h[en]=[]),h[en].push(B),h},{}),an=[];an.push.apply(an,x()((S=(X=q.default)===null||X===void 0?void 0:X.map(function(h){return{label:(0,e.jsxs)(o.Z,{to:"".concat(h.link).concat(z),children:[Y,h==null?void 0:h.title,L]}),key:h.link.replace(/(-cn$)/g,"")}}))!==null&&S!==void 0?S:[])),Object.entries(q).forEach(function(h){var B=C()(h,2),Z=B[0],nn=B[1];Z!=="default"&&an.push({type:"group",label:Z,key:Z,children:nn==null?void 0:nn.map(function(en){return{label:(0,e.jsxs)(o.Z,{to:"".concat(en.link).concat(z),children:[Y,en==null?void 0:en.title,L]}),key:en.link.replace(/(-cn$)/g,"")}})})}),y.push({label:m==null?void 0:m.title,key:m==null?void 0:m.title,children:an})}else{var gn;y.push({type:"group",label:m==null?void 0:m.title,key:m==null?void 0:m.title,children:(gn=m.children)===null||gn===void 0?void 0:gn.map(function(h){var B,Z;return{label:(0,e.jsx)(mn,{before:Y,after:L,link:h.link,title:h==null?void 0:h.title,subtitle:(B=h.frontmatter)===null||B===void 0?void 0:B.subtitle,search:z,tag:(Z=h.frontmatter)===null||Z===void 0?void 0:Z.tag}),key:h.link.replace(/(-cn$)/g,"")}})})}else{var hn=m.children||[];hn.every(function(h){var B;return h==null||(B=h.frontmatter)===null||B===void 0?void 0:B.date})&&hn.sort(function(h,B){var Z,nn;return((Z=h.frontmatter)===null||Z===void 0?void 0:Z.date)>((nn=B.frontmatter)===null||nn===void 0?void 0:nn.date)?-1:1}),y.push.apply(y,x()(hn.map(function(h){var B;return{label:(0,e.jsx)(mn,{before:Y,after:L,link:h.link,title:h==null?void 0:h.title,search:z,tag:(B=h.frontmatter)===null||B===void 0?void 0:B.tag}),key:h.link.replace(/(-cn$)/g,"")}})))}return y},[]))!==null&&G!==void 0?G:[]},[Q,D,F,z,M]);return[_,F]};$.Z=s},148050:function(zn,$,n){n.r($);var rn=n(168400),C=n.n(rn),xn=n(667294),x=n(639389),w=n.n(x),I=n(879587),yn=n(647759),a=n(785893),J,E="https://github.com/ant-design/ant-design/edit/master/",v=(0,yn.kc)(function(dn){var cn=dn.token,d=dn.css,o=cn.colorIcon,c=cn.colorText,e=cn.iconCls;return{editButton:d(J||(J=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,o,c)}}),R=function(cn){var d=cn.title,o=cn.filename,c=v(),e=c.styles;return(0,a.jsx)(I.Z,{title:d,children:(0,a.jsx)("a",{className:e.editButton,href:"".concat(E).concat(o),target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(x.EditOutlined,{})})})};$.default=R},787729:function(zn,$,n){n.r($),n.d($,{default:function(){return co}});var rn=n(805574),C=n.n(rn),xn=n(693967),x=n.n(xn),w=n(727484),I=n.n(w),yn=n(533852),a=n(667294),J=n(75529),E=n(715778),v=n(385956),R=n(302559),dn=n(438746),cn=n(168400),d=n.n(cn),o=n(370917),c=n(647759),e=n(785893),j,f={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},T=function(){var t=(0,c.Fg)(),r=function g(b){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(b,"-").concat(p,` {
  background: `).concat(t["".concat(b,"-").concat(p)],`;
}
`).concat(g(b,p+1),`
    `):""},i=function g(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return b<=13?`
.palette-gray-`.concat(b,` {
  background: `).concat(f[b],`;
}
`).concat(g(b+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(j||(j=d()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},pn=T,mn,s=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(mn||(mn=d()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},P,M=function(){var l=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(P||(P=d()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),l.colorText,l.fontSize,l.fontFamily,l.lineHeight,l.colorBgContainer)})},D,A=function(){var l=(0,c.Fg)(),t=l.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(D||(D=d()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},F=n(510274),z,Q=function(){var t=(0,c.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(z||(z=d()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new F.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new F.C(i).setAlpha(.75).toHexString(),r,r,new F.C(i).setAlpha(.75).toHexString(),r,r,r,r,new F.C(i).setAlpha(.6).toHexString(),r,r,r)})},Y=Q,L,_=function(){var l=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(L||(L=d()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),l.colorText,l.fontSize,l.borderRadius,l.colorText)})},G,H=function(){var t=(0,c.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(G||(G=d()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},Mn=H,U,kn=function(){var l=(0,c.Fg)(),t=l.antCls,r=l.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(U||(U=d()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,l.colorPrimary,r,t)})},k,u=function(){var l=(0,c.Fg)(),t=l.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(k||(k=d()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),l.colorIcon,l.colorIconHover,l.colorBorder,l.colorTextSecondary,t,l.colorLinkHover)})},y,m=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(y||(y=d()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},S,X=function(){var l=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(S||(S=d()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),l.screenLG,l.colorBgContainer,l.colorSplit,l.colorLink,l.colorBgContainer)})},q,an=function(){var l=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(q||(q=d()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),l.colorPrimary,l.colorPrimary,l.colorPrimary,l.colorPrimary,l.colorPrimary)})},gn,hn=function(){var l=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(gn||(gn=d()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),l.colorPrimary,l.colorError,l.colorText,l.colorTextSecondary,l.colorBgContainer,l.borderRadius,l.colorBgContainer,l.colorBgContainer)})},h,B="dumi-default-",Z=function(){var l=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(h||(h=d()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),B,l.colorText,l.colorBgContainer,l.colorBgContainer,l.colorTextPlaceholder,B,l.colorBgElevated,l.colorBgElevated,B,l.controlItemBgActive,l.controlItemBgHover,l.colorText,l.colorText)})},nn,en=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(nn||(nn=d()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Bn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(M,{}),(0,e.jsx)(A,{}),(0,e.jsx)(Y,{}),(0,e.jsx)(_,{}),(0,e.jsx)(Mn,{}),(0,e.jsx)(kn,{}),(0,e.jsx)(u,{}),(0,e.jsx)(m,{}),(0,e.jsx)(X,{}),(0,e.jsx)(an,{}),(0,e.jsx)(hn,{}),(0,e.jsx)(en,{}),(0,e.jsx)(pn,{}),(0,e.jsx)(s,{}),(0,e.jsx)(Z,{})]})},Pn=Bn,Fn=n(97857),N=n.n(Fn),tn=n(9783),Tn=n.n(tn),Sn=n(639389),Zn=n.n(Sn),Nn=n(469181),Vn=n(344682),Wn=n(11739),$n=n(709894),In=n(883458),ie=n(722449),le="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Gn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Xn=function(t){var r=t.direction;return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:r==="ltr"?le:Gn})})},se=function(t){return(0,e.jsx)(Zn(),N()(N()({},t),{},{component:function(){return(0,e.jsx)(Xn,{direction:t.direction})}}))},me=se,ot=n(840070),Ln=n(373638),ee=n(438199),ge,he,rt=(0,c.kc)(function(l){var t=l.token,r=l.css,i=t.headerHeight,g=t.colorTextHeading,b=t.fontFamily,p=t.mobileMaxWidth;return{logo:r(ge||(ge=d()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,g,b,i,g,p),title:r(he||(he=d()([`
      line-height: 32px;
    `])))}}),at=function(t){var r=t.isZhCN,i=(0,v.useLocation)(),g=i.search,b=rt(),p=b.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(v.Link,{to:Ln.J1("/",r,g),className:p.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:p.title,children:"Ant Design"})]})})},it=at,lt=n(719632),st=n.n(lt),fe=n(24768),Jn=n(472638),xe,ve,dt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},ct=(0,c.kc)(function(l){var t=l.token,r=t.antCls,i=t.iconCls,g=t.fontFamily,b=t.headerHeight,p=t.menuItemBorder,W=t.colorPrimary,O=t.colorText;return{nav:(0,c.iv)(xe||(xe=d()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: '';
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),g,r,r,r,40+12*2,b,b,p,O,r,i,r,W,r,r),popoverMenuNav:(0,c.iv)(ve||(ve=d()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),ut=function(t){var r,i,g=t.isZhCN,b=t.isMobile,p=t.responsive,W=t.directionText,O=t.onLangChange,ln=t.onDirectionChange,sn=(0,v.useLocation)(),jn=sn.pathname,on=sn.search,fn=(0,R.default)(dt),Cn=C()(fn,1),wn=Cn[0],V=(0,v.useFullSidebarData)(),vn=((r=V["/docs/blog"])===null||r===void 0||(r=r[0])===null||r===void 0?void 0:r.children)||[],K=ct(),En=K.styles,On=b?"inline":"horizontal",Rn=jn.split("/").filter(Boolean).slice(0,-1).join("/"),bn=Rn||"home";jn.startsWith("/changelog")?bn="docs/react":jn.startsWith("/docs/resources")&&(bn="docs/resources");var An,Hn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(v.FormattedMessage,{id:"app.header.lang"}),onClick:O,key:"switch-lang"},{label:W,onClick:ln,key:"switch-direction"}];b?An=Hn:p==="crowded"&&(An=[{label:(0,e.jsx)(Sn.MenuOutlined,{}),key:"additional",children:[].concat(Hn)}]);var Qn=[{label:(0,e.jsx)(Jn.Z,{to:Ln.J1("/docs/spec/introduce",g,on),children:wn.design}),key:"docs/spec"},{label:(0,e.jsx)(Jn.Z,{to:Ln.J1("/docs/react/introduce",g,on),children:wn.development}),key:"docs/react"},{label:(0,e.jsx)(Jn.Z,{to:Ln.J1("/components/overview/",g,on),children:wn.components}),key:"components"},vn.length?{label:(0,e.jsx)(Jn.Z,{to:Ln.J1(vn.sort(function(ue,oe){var Yn,_n;return((Yn=ue.frontmatter)===null||Yn===void 0?void 0:Yn.date)>((_n=oe.frontmatter)===null||_n===void 0?void 0:_n.date)?-1:1})[0].link,g,on),children:wn.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Jn.Z,{to:Ln.J1("/docs/resources",g,on),children:wn.resources}),key:"docs/resources"},g?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(st()((i=An)!==null&&i!==void 0?i:[]));return(0,e.jsx)(fe.Z,{mode:On,selectedKeys:[bn],className:En.nav,disabledOverflow:!0,items:Qn})},pt=ut,mt=n(879587),be,ye,we,je,Ce,Kn="1.2em",gt=(0,c.kc)(function(l){var t=l.token,r=l.css,i=t.colorText,g=t.colorBorder,b=t.colorBgContainer,p=t.colorBgTextHover,W=t.borderRadius,O=t.controlHeight,ln=t.motionDurationMid;return{btn:r(be||(be=d()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,g,O,O,W,ln,ln,p,Kn,Kn,Kn),innerDiv:r(ye||(ye=d()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Kn,Kn),labelStyle:r(we||(we=d()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Kn,i,i),label1Style:r(je||(je=d()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,b),label2Style:r(Ce||(Ce=d()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),ht=function(t){var r=t.label1,i=t.label2,g=t.tooltip1,b=t.tooltip2,p=t.value,W=t.pure,O=t.onClick,ln=gt(),sn=ln.styles,jn=sn.btn,on=sn.innerDiv,fn=sn.labelStyle,Cn=sn.label1Style,wn=sn.label2Style,V=(0,e.jsx)("button",{onClick:O,className:jn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[W&&(p===1?r:i),!W&&(0,e.jsxs)("div",{className:on,children:[(0,e.jsx)("span",{className:x()(fn,p===1?Cn:wn),children:r}),(0,e.jsx)("span",{className:x()(fn,p===1?wn:Cn),children:i})]})]})},"lang-button");return g||b?(0,e.jsx)(mt.Z,{title:p===1?g:b,children:V}):V},de=ht,Se,Ee,Me,ke,Te,Be,Le=1120,Pe=1200,ft={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},xt=(0,c.kc)(function(l){var t=l.token,r=l.css,i="#ced4d9";return{header:r(Se||(Se=d()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(Ee||(Ee=d()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: 12px;
      > * {
        flex: none;
        margin: 0;
        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(Me||(Me=d()([`
      width: 16px;
    `]))),popoverMenu:Tn()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(ke||(ke=d()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Te||(Te=d()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),t.mobileMaxWidth),versionSelect:r(Be||(Be=d()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `])))}}),vt=function(){var t=(0,R.default)(ft),r=C()(t,2),i=r[0],g=r[1],b=(0,v.useSiteData)(),p=b.pkg,W=(0,Ln.Is)(),O=(0,a.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),ln=C()(O,2),sn=ln[0],jn=ln[1],on=(0,a.useContext)(ee.Z),fn=on.direction,Cn=on.isMobile,wn=on.bannerVisible,V=on.updateSiteConfig,vn=(0,a.useRef)(null),K=(0,v.useLocation)(),En=K.pathname,On=K.search,Rn=xt(),bn=Rn.styles,An=(0,a.useCallback)(function(){jn(function(un){return N()(N()({},un),{},{menuVisible:!1})})},[]),Hn=(0,a.useCallback)(function(){jn(function(un){return N()(N()({},un),{},{windowWidth:window.innerWidth})})},[]),Qn=(0,a.useCallback)(function(){jn(function(un){return N()(N()({},un),{},{menuVisible:!0})})},[]),ue=(0,a.useCallback)(function(un){jn(function(Dn){return N()(N()({},Dn),{},{menuVisible:un})})},[]),oe=function(){V({direction:fn!=="rtl"?"rtl":"ltr"})},Yn=function(){V({bannerVisible:!1}),Ln.Fy()&&localStorage.setItem(ot.ANT_DESIGN_NOT_SHOW_BANNER,I()().toISOString())};(0,a.useEffect)(function(){An()},[K]),(0,a.useEffect)(function(){return Hn(),window.addEventListener("resize",Hn),function(){window.removeEventListener("resize",Hn),vn.current&&clearTimeout(vn.current)}},[]);var _n=(0,a.useCallback)(function(un){var Dn=window.location.href,ae=window.location.pathname;if(/overview/.test(ae)&&/0?[1-39][0-3]?x/.test(un)){window.location.href=Dn.replace(window.location.origin,un).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(un)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Dn.replace(window.location.origin,un));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),Je=(0,a.useCallback)(function(){var un="".concat(window.location.protocol,"//"),Dn=window.location.href.slice(un.length);Ln.Fy()&&localStorage.setItem("locale",Ln.KE(En)?"en-US":"zh-CN"),window.location.href=un+Dn.replace(window.location.pathname,Ln.J1(En,!Ln.KE(En),On).pathname)},[K]),uo=(0,a.useMemo)(function(){return fn!=="rtl"?"RTL":"LTR"},[fn]),po=(0,a.useMemo)(function(){return fn==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[fn]),mo=sn.menuVisible,re=sn.windowWidth,Qe=sn.searching,Ye=N()(Tn()({},p.version,p.version),W==null?void 0:W.docVersions),go=Object.keys(Ye).map(function(un){return{value:Ye[un],label:un}}),_e=["","index","index-cn"].includes(En),qe=g==="cn",ho=fn==="rtl",pe=null;re<Le?pe="crowded":re<Pe&&(pe="narrow");var fo=x()(bn.header,"clearfix",{"home-header":_e}),nt={isZhCN:qe,isRTL:ho},et=(0,e.jsx)(pt,N()(N()({},nt),{},{responsive:pe,isMobile:Cn,directionText:uo,onLangChange:Je,onDirectionChange:oe}),"nav"),qn=[et,(0,e.jsx)(Nn.Z,{size:"small",className:bn.versionSelect,defaultValue:p.version,onChange:_n,dropdownStyle:po,popupMatchSelectWidth:!1,getPopupContainer:function(Dn){return Dn.parentNode},options:go},"version"),(0,e.jsx)(de,{onClick:Je,value:Ln.KE(En)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(de,{onClick:oe,value:fn==="rtl"?2:1,label1:(0,e.jsx)(me,{className:bn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(me,{className:bn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(de,{value:1,label1:(0,e.jsx)(Sn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];re<Le?qn=Qe?[]:[et]:re<Pe&&(qn=Qe?[]:qn);var tt=_e?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:fo,children:[Cn&&(0,e.jsx)(Vn.Z,{overlayClassName:bn.popoverMenu,placement:"bottomRight",content:qn,trigger:"click",open:mo,arrow:{pointAtCenter:!0},onOpenChange:ue,children:(0,e.jsx)(Sn.MenuOutlined,{className:"nav-phone-icon",onClick:Qn})}),qe&&wn&&(0,e.jsx)(J.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Wn.Z,{className:bn.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:Cn?i.shortMessage:i.message}),(0,e.jsx)("a",{className:bn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Dn,ae;(Dn=(ae=window).gtag)===null||Dn===void 0||Dn.call(ae,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Yn})}),(0,e.jsxs)($n.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(In.Z,N()(N()({},tt[0]),{},{children:(0,e.jsx)(it,N()(N()({},nt),{},{location:K}))})),(0,e.jsxs)(In.Z,N()(N()({},tt[1]),{},{className:bn.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ie.ZP,{})}),!Cn&&qn]}))]})]})},bt=vt,xo=n(945462),Ae=n(777502),yt=function(t){var r=t.children,i=t.title,g=t.desc;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(v.Helmet,{children:[(0,e.jsx)("title",{children:i}),(0,e.jsx)("meta",{property:"og:title",content:i}),g&&(0,e.jsx)("meta",{name:"description",content:g})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(Ae.default,{})]})},wt=yt,jt=n(86198),De=n(700781),ze=n(49313),Ct=function(){var t=(0,v.useRouteMeta)(),r=a.useMemo(function(){var p;if(!t.frontmatter.subtitle&&!t.frontmatter.title)p="404 Not Found - Ant Design";else{var W;p="".concat(t.frontmatter.subtitle||""," ").concat(((W=t.frontmatter)===null||W===void 0?void 0:W.title)||""," - Ant Design")}var O=t.frontmatter.description||"";return[p,O]},[t]),i=C()(r,2),g=i[0],b=i[1];return(0,e.jsxs)(v.Helmet,{children:[(0,e.jsx)("title",{children:g}),(0,e.jsx)("meta",{property:"og:title",content:g}),b&&(0,e.jsx)("meta",{name:"description",content:b})]})},Oe=Ct,St=n(148050),Et=n(468990),Mt=n(823493),kt=n.n(Mt),Tt=n(658192),Fe,Ne,Ie,Re=["scroll","resize"],Bt=(0,c.kc)(function(l){var t=l.token,r=l.css,i=t.boxShadowSecondary,g=t.antCls;return{affixTabs:r(Fe||(Fe=d()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity 0.3s,
        transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,g,g,g),affixTabsFixed:r(Ne||(Ne=d()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Ie||(Ie=d()([`
      text-transform: capitalize;
    `])))}}),He=32,Lt=function(){var t=a.useRef(null),r=a.useRef([]),i=a.useState(!1),g=C()(i,2),b=g[0],p=g[1],W=a.useState(void 0),O=C()(W,2),ln=O[0],sn=O[1],jn=Bt(),on=jn.styles,fn=on.affixTabs,Cn=on.affixTabsFixed,wn=on.span;function V(K){var En=document.getElementById(K);if(En){var On=En.offsetTop-t.current.offsetHeight-He;(0,Tt.Z)(On)}}a.useEffect(function(){var K=document.querySelectorAll("h2[id]");r.current=Array.from(K).map(function(En){var On=En.id;return On}),p(!0)},[]),a.useEffect(function(){var K=decodeURIComponent((location.hash||"").slice(1));K&&V(K)},[b]);var vn=a.useMemo(function(){function K(){for(var En=window,On=En.scrollY,Rn=t.current.offsetHeight,bn=r.current.length-1;bn>=0;bn-=1){var An=r.current[bn],Hn=document.getElementById(An),Qn=Hn.offsetTop-Rn-He;if(Qn<=On){sn(An);return}}sn(void 0)}return kt()(K)},[]);return a.useEffect(function(){return Re.forEach(function(K){return window.addEventListener(K,vn)}),vn(),function(){Re.forEach(function(K){return window.removeEventListener(K,vn)})}},[]),(0,e.jsx)("div",{className:x()(fn,ln&&Cn),ref:t,children:(0,e.jsx)(Et.Z,{activeKey:ln,centered:!0,size:"large",onChange:V,items:r.current.map(function(K){return{key:K,label:(0,e.jsx)("span",{className:wn,children:K.replace(/-/g," ")})}})})})},Pt=Lt,Ze,We,$e,Ue=40,te=1208,ce=24,At=function(){var t=(0,ze.Z)();return(0,c.kc)(function(r){var i=r.token,g=r.css,b=i.antCls;return{resourcePage:g(Ze||(Ze=d()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-right: 0;
            padding-left: 0;
          }
        }
      `])),te),resourceContent:g(We||(We=d()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }

            `,`-col {
              padding-top: 16px !important;
              padding-bottom: 16px !important;
            }
          }
        }
      `])),Ue,te,ce,b),banner:g($e||($e=d()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: 16px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Ue,t?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",te,te,ce,ce)}})()},Dt=function(t){var r,i=t.children,g=At(),b=g.styles,p=(0,v.useRouteMeta)(),W=(0,ze.Z)(),O=(0,e.jsxs)(jt.Z,{children:[(0,e.jsx)(Oe,{}),(0,e.jsxs)("div",{id:"resources-page",className:b.resourcePage,children:[(0,e.jsx)(Pt,{}),(0,e.jsxs)("div",{className:b.banner,children:[(0,e.jsxs)(De.Z.Title,{style:{fontSize:30},children:[(r=p.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(St.default,{title:(0,e.jsx)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,e.jsx)("section",{children:p.frontmatter.description})]}),(0,e.jsx)("div",{className:b.resourceContent,children:i}),(0,e.jsx)(Ae.default,{})]})]});return W?O:(0,e.jsx)(J.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:O})},zt=Dt,Ot=n(106750),Ft=n(217187),Nt=n(340908),It=n(524229),Rt=n(548657),Ht=n(442708),Zt=function(t){var r=t.children,i=t.fallback,g=i===void 0?(0,e.jsx)(Rt.Z.Input,{active:!0,size:"small"}):i,b=t.delay,p=b===void 0?200:b;return(0,e.jsx)(Ht.df,{triggerOnce:!0,delay:p,children:function(O){var ln=O.inView,sn=O.ref;return(0,e.jsx)("div",{ref:sn,children:(0,e.jsx)(a.Suspense,{fallback:g,children:ln?r:(0,e.jsx)("span",{})})})}})},Un=Zt,Ve,Wt=a.lazy(function(){return Promise.all([n.e(3156),n.e(7721)]).then(n.bind(n,617721))}),$t=a.lazy(function(){return n.e(9148).then(n.bind(n,349148))}),Ut=a.lazy(function(){return n.e(8301).then(n.bind(n,368301))}),Vt=a.lazy(function(){return n.e(8598).then(n.bind(n,458598))}),Kt=a.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),Gt=a.lazy(function(){return n.e(6720).then(n.bind(n,366720))}),Xt=a.lazy(function(){return Promise.all([n.e(1249),n.e(9285),n.e(5557)]).then(n.bind(n,135557))}),Jt=a.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),Qt=(0,c.kc)(function(l){var t=l.token,r=l.css;return{articleWrapper:r(Ve||(Ve=d()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 48px;
      }
    }
  `])),t.screenLG)}}),Yt=function(t){var r,i,g,b=t.children,p=(0,v.useRouteMeta)(),W=(0,dn.Z)(),O=W.pathname,ln=W.hash,sn=(0,a.useContext)(ee.Z),jn=sn.direction,on=Qt(),fn=on.styles,Cn=(0,Ft.Z)(!1),wn=C()(Cn,2),V=wn[0],vn=wn[1],K=(0,a.useMemo)(function(){var bn;return((bn=p.toc)===null||bn===void 0?void 0:bn.filter(function(An){return An._debug_demo}).map(function(An){return An.id}))||[]},[p]),En=K.includes(ln.slice(1));(0,a.useLayoutEffect)(function(){vn(En)},[]);var On=(0,a.useMemo)(function(){return{showDebug:V,setShowDebug:vn}},[V,K]),Rn=jn==="rtl";return(0,e.jsx)(It.Z.Provider,{value:On,children:(0,e.jsxs)(In.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Ut,{showDebug:V,debugDemos:K})}),(0,e.jsxs)("article",{className:x()(fn.articleWrapper,{rtl:Rn}),children:[(r=p.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(De.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Ot.Z,{gap:"small",children:[(0,e.jsx)("div",{children:(i=p.frontmatter)===null||i===void 0?void 0:i.title}),(0,e.jsx)("div",{children:(g=p.frontmatter)===null||g===void 0?void 0:g.subtitle}),!O.startsWith("/components/overview")&&(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Jt,{title:(0,e.jsx)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),O.startsWith("/components/")&&(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Xt,{pathname:O})})]}):null,(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Vt,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,p.frontmatter.category==="Components"&&String(p.frontmatter.showImport)!=="false"&&(0,e.jsx)(Nt.Z,{source:!0,component:p.frontmatter.title,filename:p.frontmatter.filename,version:p.frontmatter.tag}),(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)",width:"calc(100% - 10px)"},children:b}),(0,e.jsx)(Un,{children:(0,e.jsx)($t,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,e.jsx)(Un,{fallback:(0,e.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,e.jsx)(Wt,{filename:p.frontmatter.filename})})]}),(0,e.jsx)(Un,{fallback:null,children:(0,e.jsx)(Gt,{rtl:Rn})}),(0,e.jsx)(Kt,{})]})})},_t=Yt,qt=n(650010),no=n(361446),Ke,Ge,eo=(0,c.kc)(function(l){var t=l.token,r=l.css,i=t.antCls,g=t.fontFamily,b=t.colorSplit;return{asideContainer:r(Ke||(Ke=d()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),g,i,i,i,i,i,i,b,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(Ge||(Ge=d()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),to=function(){var t=(0,v.useSidebarData)(),r=(0,a.useContext)(ee.Z),i=r.isMobile,g=r.theme,b=eo(),p=b.styles,W=(0,no.Z)(),O=C()(W,2),ln=O[0],sn=O[1],jn=g.includes("dark"),on=(0,c.Fg)(),fn=on.colorBgContainer,Cn=(0,e.jsx)(J.ZP,{theme:{components:{Menu:{itemBg:fn,darkItemBg:fn}}},children:(0,e.jsx)(fe.Z,{items:ln,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:jn?"dark":"light",selectedKeys:[sn],defaultOpenKeys:t==null?void 0:t.map(function(wn){var V=wn.title;return V}).filter(Boolean)})});return i?(0,e.jsx)(qt.Z,{children:Cn},"Mobile-menu"):(0,e.jsx)(In.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:Cn})})},oo=to,Xe,ro=(0,c.kc)(function(l){var t=l.css,r=l.token;return{main:t(Xe||(Xe=d()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),ao=function(t){var r=t.children,i=ro(),g=i.styles;return(0,e.jsxs)("main",{className:g.main,children:[(0,e.jsx)(Oe,{}),(0,e.jsx)(oo,{}),(0,e.jsx)(_t,{children:r})]})},io=ao,lo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},so=function(){var t=(0,v.useOutlet)(),r=(0,dn.Z)(),i=r.pathname,g=r.search,b=r.hash,p=(0,R.default)(lo),W=C()(p,2),O=W[0],ln=W[1],sn=(0,a.useRef)(null),jn=(0,a.useContext)(ee.Z),on=jn.direction,fn=(0,v.useSiteData)(),Cn=fn.loading;(0,a.useLayoutEffect)(function(){ln==="cn"?I().locale("zh-cn"):I().locale("en")},[]),(0,a.useEffect)(function(){var V=document.getElementById("nprogress-style");V&&(sn.current=setTimeout(function(){var vn;(vn=V.parentNode)===null||vn===void 0||vn.removeChild(V)},0))},[]),(0,a.useEffect)(function(){var V=b.replace("#","");if(V){var vn;(vn=document.getElementById(decodeURIComponent(V)))===null||vn===void 0||vn.scrollIntoView()}},[Cn,b]),(0,a.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+g)},[r]);var wn=a.useMemo(function(){return["","/"].some(function(V){return V===i})||["/index"].some(function(V){return i.startsWith(V)})?(0,e.jsx)(wt,{title:O.title,desc:O.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(zt,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(io,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(v.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:ln==="cn"?"zh-CN":ln,"data-direction":on,className:x()({rtl:on==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:O.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(J.ZP,{direction:on,locale:ln==="cn"?E.default:void 0,children:[(0,e.jsx)(Pn,{}),(0,e.jsx)(bt,{}),wn]})]})},co=so},840070:function(zn,$,n){n.r($),n.d($,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return A},default:function(){return Q}});var rn=n(97857),C=n.n(rn),xn=n(805574),x=n.n(xn),w=n(667294),I=n(900210),yn=n(368655),a=n(359020),J=n(965516),E=n(471232),v=n(385956),R=n(49313),dn=n(217187),cn=n(438746),d=n(513769),o=n.n(d),c=n(75529),e=n(647759),j=n(438199),f=n(785893),T=["children","theme"],pn=64,mn=38,s=function(L){var _=L.children,G=L.theme,H=o()(L,T),Mn=(0,w.useContext)(c.ZP.ConfigContext),U=Mn.getPrefixCls,kn=Mn.iconPrefixCls,k=U(),u=J.Z.useToken(),y=u.token,m=(0,w.useContext)(j.Z),S=m.bannerVisible;return w.useEffect(function(){c.ZP.config({theme:G})},[G]),(0,f.jsx)(e.f6,C()(C()({},H),{},{theme:G,customToken:{headerHeight:pn,bannerHeight:mn,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:y.colorFillTertiary,antCls:".".concat(k),iconCls:".".concat(kn),marginFarXS:y.marginXXL/6*7,marginFarSM:y.marginXXL/3*5,marginFar:y.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:pn+y.margin+(S?mn:0)},children:_}))},P=s,M=w.lazy(function(){return Promise.all([n.e(7898),n.e(4137),n.e(263)]).then(n.bind(n,531434))}),D=768,A="ANT_DESIGN_NOT_SHOW_BANNER",F=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return L.map(function(_){return _==="dark"?J.Z.darkAlgorithm:_==="compact"?J.Z.compactAlgorithm:null}).filter(Boolean)},z=function(){var L=(0,v.useOutlet)(),_=(0,cn.Z)(),G=_.pathname,H=(0,v.useSearchParams)(),Mn=x()(H,2),U=Mn[0],kn=Mn[1],k=(0,dn.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),u=x()(k,2),y=u[0],m=y.theme,S=m===void 0?[]:m,X=y.direction,q=y.isMobile,an=y.bannerVisible,gn=an===void 0?!1:an,hn=u[1],h=(0,w.useCallback)(function(tn){hn(function(Zn){return C()(C()({},Zn),tn)});var Tn=U.toString(),Sn=U;Object.entries(tn).forEach(function(Zn){var Nn=x()(Zn,2),Vn=Nn[0],Wn=Nn[1];if(Vn==="direction"&&(Wn==="rtl"?Sn.set("direction","rtl"):Sn.delete("direction")),Vn==="theme"){var $n;Sn=(0,v.createSearchParams)(C()(C()({},Sn),{},{theme:Wn.filter(function(In){return In!=="light"})})),($n=document.querySelector("html"))===null||$n===void 0||$n.setAttribute("data-prefers-color",Wn.includes("dark")?"dark":"light")}}),Sn.toString()!==Tn&&kn(Sn)},[U,kn]),B=function(){h({isMobile:window.innerWidth<D})};(0,w.useEffect)(function(){var tn=U.getAll("theme"),Tn=U.get("direction");return hn({theme:tn,direction:Tn==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",tn.includes("dark")?"dark":"light"),B(),window.addEventListener("resize",B),function(){window.removeEventListener("resize",B)}},[]);var Z=w.useMemo(function(){return{direction:X,updateSiteConfig:h,theme:S,isMobile:q,bannerVisible:gn}},[q,X,h,S,gn]),nn=w.useMemo(function(){return{algorithm:F(S),token:{motion:!S.includes("motion-off")},cssVar:!0,hashed:!1}},[S]),en=w.useState(function(){return(0,I.createCache)()}),Bn=x()(en,1),Pn=Bn[0];(0,v.useServerInsertedHTML)(function(){var tn=(0,I.extractStyle)(Pn,{plain:!0,types:"style"});return(0,f.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:tn}})}),(0,v.useServerInsertedHTML)(function(){var tn=(0,I.extractStyle)(Pn,{plain:!0,types:["cssVar","token"]});return(0,f.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:tn}})}),(0,v.useServerInsertedHTML)(function(){return(0,f.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,a.$Z)()}})});var Fn=G.startsWith("/~demos"),N=L;return Fn||(N=(0,f.jsxs)(E.Z,{children:[L,(0,f.jsx)(w.Suspense,{children:(0,f.jsx)(M,{value:S,onChange:function(Tn){return h({theme:Tn})}})})]})),(0,f.jsx)(R.f.Provider,{value:S.includes("dark"),children:(0,f.jsx)(I.StyleProvider,{cache:Pn,linters:[I.legacyNotSelectorLinter,I.parentSelectorLinter,I.NaNLinter],children:(0,f.jsx)(j.Z.Provider,{value:Z,children:(0,f.jsx)(P,{theme:nn,children:(0,f.jsx)(yn.HappyProvider,{disabled:!S.includes("happy-work"),children:N})})})})})},Q=z},777502:function(zn,$,n){n.r($),n.d($,{default:function(){return P}});var rn=n(805574),C=n.n(rn),xn=n(168400),x=n.n(xn),w=n(639389),I=n(510274),yn=n(647759),a=n(385956),J=n(391298),E=n(667294),v=n(630770),R=n(302559),dn=n(438746),cn=n(438199),d=n(693399),o=n(785893),c="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function j(){var M=(0,R.default)(e),D=C()(M,1),A=D[0],F=E.useState(!0),z=C()(F,2),Q=z[0],Y=z[1];return E.useEffect(function(){var L=document.createElement("p");L.className=c,L.style.position="fixed",L.style.pointerEvents="none",L.style.visibility="hidden",L.style.width="0",document.body.appendChild(L),(0,d.updateCSS)(`
:where(.`.concat(c,`) {
  content: "__CHECK__";
}
    `),c);var _=getComputedStyle(L),G=_.content;Y(String(G).includes("CHECK")),document.body.removeChild(L),(0,d.removeCSS)(c)},[]),Q?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[A.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:A.whereDocUrl,children:A.whereDocTitle})]})})}var f,T,pn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},mn=function(){var D=(0,E.useContext)(cn.Z),A=D.isMobile;return(0,yn.kc)(function(F){var z=F.token,Q=F.css,Y=new I.C((0,v.Z)("#f0f3fa","#fff")).onBackground(z.colorBgContainer).toHexString();return{holder:Q(f||(f=x()([`
      background: `,`;
    `])),Y),footer:Q(T||(T=x()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),Y,z.colorTextSecondary,z.colorText,A?60:0,A?20:0,z.marginXXL,z.fontSize)}})()},s=function(){var D=(0,dn.Z)(),A=(0,R.default)(pn),F=C()(A,2),z=F[0],Q=F[1],Y=mn(),L=Y.styles,_=D.getLink,G=E.useMemo(function(){var H=Q==="cn",Mn={title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:H?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:H?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:H?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},U={title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(w.AntDesignOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(w.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(w.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(w.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(w.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};H&&U.items.push({icon:(0,o.jsx)(w.UsergroupAddOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.work_with_us"}),url:_("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:a.Link});var kn={title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(w.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(w.HistoryOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.change-log"}),url:_("/changelog"),LinkComponent:a.Link},{icon:(0,o.jsx)(w.QuestionCircleOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.faq"}),url:_("/docs/react/faq"),LinkComponent:a.Link},{icon:(0,o.jsx)(w.BugOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(w.IssuesCloseOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(w.MessageOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(w.QuestionCircleOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(w.QuestionCircleOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},k={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(w.BgColorsOutlined,{}),title:(0,o.jsx)(a.FormattedMessage,{id:"app.footer.theme"}),url:_("/theme-editor"),LinkComponent:a.Link}]};return[Mn,U,kn,k]},[Q,D.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(J.Z,{columns:G,className:L.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:z.owner})]})}),(0,o.jsx)(j,{})]})},P=s},373638:function(zn,$,n){n.d($,{J1:function(){return E},Is:function(){return d},Fy:function(){return R},KE:function(){return J},qE:function(){return v}});var rn=n(661227),C=n(805574),xn=n(97857),x=n(385564),w=n(842348),I=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),yn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":I?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function a(o,c,e,j){var f=o.map(function(s){return s.meta}).filter(function(s){return!s.skip}),T=[],pn=function(P,M){return(P.order||0)-(M.order||0)};f.sort(pn).forEach(function(s){if(s.category&&(s.category=s.category[c]||s.category),s.type&&(s.type=s.type[c]||s.type),s!=null&&s.title&&(s.title=s.title[c]||s.title),!s.category){T.push(s);return}if(s.category==="Components"&&s.type){var P=T.find(function(A){return(A==null?void 0:A.title)===s.type});P||(P={type:"type",title:s.type,children:[],order:j[s.type]},T.push(P)),P.children=P.children||[],P.children.push(s);return}var M=T.find(function(A){return(A==null?void 0:A.title)===s.category});if(M||(M={type:"category",title:s.category,children:[],order:e[s.category]},T.push(M)),M.children=M.children||[],s.type){var D=M.children.filter(function(A){return(A==null?void 0:A.title)===s.type})[0];D||(D={type:"type",title:s.type,children:[],order:j[s.type]},M.children.push(D)),D.children=D.children||[],D.children.push(s)}else M.children.push(s)});function mn(s){return s.sort(pn).map(function(P){return P.children?_objectSpread(_objectSpread({},P),{},{children:mn(P.children)}):P})}return mn(T)}function J(o){return/-cn\/?$/.test(o)}function E(o,c,e,j){var f=o.startsWith("/")?o:"/".concat(o),T;if(c?f==="/"?T="/index-cn":f.endsWith("/")?T=f.replace(/\/$/,"-cn/"):(T="".concat(f,"-cn"),T=T.replace(/(-cn)+/,"-cn")):T=/\/?index-cn/.test(f)?"/":f.replace("-cn",""),j){var pn=j[c?"zhCN":"enUS"];T+="#".concat(pn)}return{pathname:T,search:e}}function v(o){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,j,f=function(pn){j||(j=!0,e.src="",o(pn))};return e.onload=function(){return f("responded")},e.onerror=function(){return f("error")},e.src=c,setTimeout(function(){return f("timeout")},1500)}function R(){var o="test",c=window.localStorage;try{return c.setItem(o,"1"),c.removeItem(o),!0}catch(e){return!1}}function dn(o){return new Promise(function(c,e){var j=document.createElement("script");j.type="text/javascript",j.src=o,j.onload=c,j.onerror=e,document.head.appendChild(j)})}function cn(o){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(j){if(Array.isArray(j)){var f=_slicedToArray(j,1),T=f[0];return T==="p"}return!1}).map(function(j){var f=flatten(j),T=_toArray(f),pn=T[0],mn=T.slice(1),s=mn.filter(function(P){return typeof P=="string"&&!c.includes(P)}).join("");return[pn,s]})).find(function(j){return j&&typeof j=="string"&&!c.includes(j)});return e}var d=function(){return yn}},647727:function(zn,$,n){n.d($,{Z:function(){return rn.Z}});var rn=n(843534)},471232:function(zn,$,n){n.d($,{Z:function(){return pn}});var rn=n(97857),C=n.n(rn),xn=n(805574),x=n.n(xn),w=n(667294),I=n(693967),yn=n.n(I),a=n(73287),J=n(215570),E=n(269924),v=n(890887),R=n(414466),dn=n(9783),cn=n.n(dn),d=n(286665),o=function(s){var P=s.componentCls,M=s.colorText,D=s.fontSize,A=s.lineHeight,F=s.fontFamily;return cn()({},P,{color:M,fontSize:D,lineHeight:A,fontFamily:F})},c=function(){return{}},e=(0,d.I$)("App",o,c),j=n(785893),f=function(){return w.useContext(R.Z)},T=function(s){var P=s.prefixCls,M=s.children,D=s.className,A=s.rootClassName,F=s.message,z=s.notification,Q=s.style,Y=s.component,L=Y===void 0?"div":Y,_=(0,w.useContext)(a.E_),G=_.getPrefixCls,H=G("app",P),Mn=e(H),U=x()(Mn,3),kn=U[0],k=U[1],u=U[2],y=yn()(k,H,D,A,u),m=(0,w.useContext)(R.J),S=w.useMemo(function(){return{message:C()(C()({},m.message),F),notification:C()(C()({},m.notification),z)}},[F,z,m.message,m.notification]),X=(0,J.Z)(S.message),q=x()(X,2),an=q[0],gn=q[1],hn=(0,v.Z)(S.notification),h=x()(hn,2),B=h[0],Z=h[1],nn=(0,E.Z)(),en=x()(nn,2),Bn=en[0],Pn=en[1],Fn=w.useMemo(function(){return{message:an,notification:B,modal:Bn}},[an,B,Bn]),N=L===!1?w.Fragment:L,tn={className:y,style:Q};return kn((0,j.jsx)(R.Z.Provider,{value:Fn,children:(0,j.jsx)(R.J.Provider,{value:S,children:(0,j.jsxs)(N,C()(C()({},L===!1?void 0:tn),{},{children:[Pn,gn,Z,M]}))})}))};T.useApp=f;var pn=T},86198:function(zn,$,n){n.d($,{Z:function(){return kn}});var rn=n(719632),C=n.n(rn),xn=n(9783),x=n.n(xn),w=n(805574),I=n.n(w),yn=n(513769),a=n.n(yn),J=n(97857),E=n.n(J),v=n(667294),R=n(693967),dn=n.n(R),cn=n(518475),d=n(73287),o=n(121790),c=n(45598),e=n(296708);function j(k,u,y){if(typeof y=="boolean")return y;if(k.length)return!0;var m=(0,c.default)(u);return m.some(function(S){return S.type===e.Z})}var f=n(900210),T=n(286665),pn=function(u){var y=u.componentCls,m=u.bodyBg,S=u.lightSiderBg,X=u.lightTriggerBg,q=u.lightTriggerColor;return x()({},"".concat(y,"-sider-light"),x()(x()({background:S},"".concat(y,"-sider-trigger"),{color:q,background:X}),"".concat(y,"-sider-zero-width-trigger"),{color:q,background:X,border:"1px solid ".concat(m),borderInlineStart:0}))},mn=pn,s=function(u){var y=u.antCls,m=u.componentCls,S=u.colorText,X=u.triggerColor,q=u.footerBg,an=u.triggerBg,gn=u.headerHeight,hn=u.headerPadding,h=u.headerColor,B=u.footerPadding,Z=u.triggerHeight,nn=u.zeroTriggerHeight,en=u.zeroTriggerWidth,Bn=u.motionDurationMid,Pn=u.motionDurationSlow,Fn=u.fontSize,N=u.borderRadius,tn=u.bodyBg,Tn=u.headerBg,Sn=u.siderBg;return x()(x()(x()(x()({},m,E()(E()(x()(x()(x()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:tn,"&, *":{boxSizing:"border-box"}},"&".concat(m,"-has-sider"),x()({flexDirection:"row"},"> ".concat(m,", > ").concat(m,"-content"),{width:0})),"".concat(m,"-header, &").concat(m,"-footer"),{flex:"0 0 auto"}),"".concat(m,"-sider"),{position:"relative",minWidth:0,background:Sn,transition:"all ".concat(Bn,", background 0s"),"&-children":x()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(y,"-menu").concat(y,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:Z},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:Z,color:X,lineHeight:(0,f.unit)(Z),textAlign:"center",background:an,cursor:"pointer",transition:"all ".concat(Bn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:gn,insetInlineEnd:u.calc(en).mul(-1).equal(),zIndex:1,width:en,height:nn,color:X,fontSize:u.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Sn,borderStartStartRadius:0,borderStartEndRadius:N,borderEndEndRadius:N,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Pn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Pn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:u.calc(en).mul(-1).equal(),borderStartStartRadius:N,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:N}}}}),mn(u)),{},{"&-rtl":{direction:"rtl"}})),"".concat(m,"-header"),x()({height:gn,padding:hn,color:h,lineHeight:(0,f.unit)(gn),background:Tn},"".concat(y,"-menu"),{lineHeight:"inherit"})),"".concat(m,"-footer"),{padding:B,color:S,fontSize:Fn,background:q}),"".concat(m,"-content"),{flex:"auto",color:S,minHeight:0})},P=function(u){var y=u.colorBgLayout,m=u.controlHeight,S=u.controlHeightLG,X=u.colorText,q=u.controlHeightSM,an=u.marginXXS,gn=u.colorTextLightSolid,hn=u.colorBgContainer,h=S*1.25;return{colorBgHeader:"#001529",colorBgBody:y,colorBgTrigger:"#002140",bodyBg:y,headerBg:"#001529",headerHeight:m*2,headerPadding:"0 ".concat(h,"px"),headerColor:X,footerPadding:"".concat(q,"px ").concat(h,"px"),footerBg:y,siderBg:"#001529",triggerHeight:S+an*2,triggerBg:"#002140",triggerColor:gn,zeroTriggerWidth:S,zeroTriggerHeight:S,lightSiderBg:hn,lightTriggerBg:hn,lightTriggerColor:X}},M=(0,T.I$)("Layout",function(k){return[s(k)]},P,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),D=n(785893),A=["prefixCls","suffixCls","className","tagName"],F=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function z(k){var u=k.suffixCls,y=k.tagName,m=k.displayName;return function(S){var X=v.forwardRef(function(q,an){return(0,D.jsx)(S,E()({ref:an,suffixCls:u,tagName:y},q))});return X}}var Q=v.forwardRef(function(k,u){var y=k.prefixCls,m=k.suffixCls,S=k.className,X=k.tagName,q=a()(k,A),an=v.useContext(d.E_),gn=an.getPrefixCls,hn=gn("layout",y),h=M(hn),B=I()(h,3),Z=B[0],nn=B[1],en=B[2],Bn=m?"".concat(hn,"-").concat(m):hn;return Z((0,D.jsx)(X,E()({className:dn()(y||Bn,S,nn,en),ref:u},q)))}),Y=v.forwardRef(function(k,u){var y=v.useContext(d.E_),m=y.direction,S=v.useState([]),X=I()(S,2),q=X[0],an=X[1],gn=k.prefixCls,hn=k.className,h=k.rootClassName,B=k.children,Z=k.hasSider,nn=k.tagName,en=k.style,Bn=a()(k,F),Pn=(0,cn.default)(Bn,["suffixCls"]),Fn=v.useContext(d.E_),N=Fn.getPrefixCls,tn=Fn.layout,Tn=N("layout",gn),Sn=j(q,B,Z),Zn=M(Tn),Nn=I()(Zn,3),Vn=Nn[0],Wn=Nn[1],$n=Nn[2],In=dn()(Tn,x()(x()({},"".concat(Tn,"-has-sider"),Sn),"".concat(Tn,"-rtl"),m==="rtl"),tn==null?void 0:tn.className,hn,h,Wn,$n),ie=v.useMemo(function(){return{siderHook:{addSider:function(Gn){an(function(Xn){return[].concat(C()(Xn),[Gn])})},removeSider:function(Gn){an(function(Xn){return Xn.filter(function(se){return se!==Gn})})}}}},[]);return Vn((0,D.jsx)(o.V.Provider,{value:ie,children:(0,D.jsx)(nn,E()(E()({ref:u,className:In,style:E()(E()({},tn==null?void 0:tn.style),en)},Pn),{},{children:B}))}))}),L=z({tagName:"div",displayName:"Layout"})(Y),_=z({suffixCls:"header",tagName:"header",displayName:"Header"})(Q),G=z({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Q),H=z({suffixCls:"content",tagName:"main",displayName:"Content"})(Q),Mn=L,U=Mn;U.Header=_,U.Footer=G,U.Content=H,U.Sider=e.Z,U._InternalSiderContext=e.D;var kn=U},715778:function(zn,$,n){n.r($),n.d($,{default:function(){return R}});var rn=n(174219),C=n(97857),xn=n.n(C),x=n(585369),w={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},I=w,yn={lang:xn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},x.Z),timePickerLocale:xn()({},I)};yn.lang.ok="\u786E\u5B9A";var a=yn,J=a,E="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",v={locale:"zh-cn",Pagination:rn.Z,DatePicker:a,TimePicker:I,Calendar:J,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:E,method:E,array:E,object:E,number:E,date:E,boolean:E,integer:E,float:E,regexp:E,email:E,url:E,hex:E},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},R=v}}]);
