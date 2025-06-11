import{r as T,c as M,aa as xe,a1 as it,d as se,a5 as dt,h as r,x as sn,aL as Rt,aq as Le,aM as dn,aN as un,a2 as Z,aO as rt,aH as $e,ag as ut,aP as cn,w as Ce,af as St,p as $,K as D,s as de,O as Ft,y as Ge,z as pe,aQ as fn,D as ve,B as Xe,az as Oe,aC as Tt,q as ie,$ as at,aj as hn,U as Ot,aR as vn,V as Ee,F as gn,aS as bn,as as pn,I as mn,J as wn,aT as yn,E as xn,aG as Cn}from"./app-DPl6UJDd.js";import{j as Rn,b as zt,c as ft}from"./fade-in-scale-up.cssr-D2RKleg9.js";import{c as Ue,b as It,i as ct,d as Sn,N as Fn,B as Tn,V as On,a as zn,u as st}from"./Popover-CXfgmnBS.js";import{V as ht,r as et,S as In,W as Mn,u as Pn,g as kn}from"./browser-CNyxWT1w.js";import{a as Bn}from"./Input-DgUciqbr.js";import{N as tt}from"./Tag-CKc8Hq-A.js";import{a as vt,r as _n,c as ce}from"./resolve-slot-mVWydDGJ.js";import{u as Mt}from"./use-locale-DJxQ3XtL.js";import{a as $n,c as En}from"./create-Co-OdYMQ.js";import{h as Ae}from"./happens-in-CM8LO42l.js";import{u as gt}from"./use-merged-state-DYeH2wCA.js";import{m as An}from"./index-DsSU6HIH.js";function bt(e){return e&-e}class Pt{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let i=0;i<n+1;++i)l[i]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:i}=this;for(n+=1;n<=l;)i[n]+=o,n+=bt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*l;for(;n>0;)c+=o[n],n-=bt(n);return c}getBound(n){let o=0,l=this.l;for(;l>o;){const i=Math.floor((o+l)/2),c=this.sum(i);if(c>n){l=i;continue}else if(c<n){if(o===i)return this.sum(o+1)<=n?o+1:i;o=i}else return i}return o}}let Ke;function Ln(){return typeof document>"u"?!1:(Ke===void 0&&("matchMedia"in window?Ke=window.matchMedia("(pointer:coarse)").matches:Ke=!1),Ke)}let nt;function pt(){return typeof document>"u"?1:(nt===void 0&&(nt="chrome"in window?window.devicePixelRatio:1),nt)}const kt="VVirtualListXScroll";function Nn({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const l=T(0),i=T(0),c=M(()=>{const p=e.value;if(p.length===0)return null;const h=new Pt(p.length,0);return p.forEach((C,x)=>{h.add(x,C.width)}),h}),g=xe(()=>{const p=c.value;return p!==null?Math.max(p.getBound(i.value)-1,0):0}),a=p=>{const h=c.value;return h!==null?h.sum(p):0},w=xe(()=>{const p=c.value;return p!==null?Math.min(p.getBound(i.value+l.value)+1,e.value.length-1):0});return it(kt,{startIndexRef:g,endIndexRef:w,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:a}),{listWidthRef:l,scrollLeftRef:i}}const mt=se({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:l,renderColRef:i,renderItemWithColsRef:c}=dt(kt);return{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:c,getLeft:l}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:i,getLeft:c,item:g}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:g,getLeft:c});if(l!=null){const a=[];for(let w=e;w<=n;++w){const p=o[w];a.push(l({column:p,left:c(w),item:g}))}return a}return null}}),Dn=Ue(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ue("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ue("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Vn=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Rt();Dn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:It,ssr:n}),Le(()=>{const{defaultScrollIndex:d,defaultScrollKey:m}=e;d!=null?j({index:d}):m!=null&&j({key:m})});let o=!1,l=!1;dn(()=>{if(o=!1,!l){l=!0;return}j({top:R.value,left:g.value})}),un(()=>{o=!0,l||(l=!0)});const i=xe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let d=0;return e.columns.forEach(m=>{d+=m.width}),d}),c=M(()=>{const d=new Map,{keyField:m}=e;return e.items.forEach((B,W)=>{d.set(B[m],W)}),d}),{scrollLeftRef:g,listWidthRef:a}=Nn({columnsRef:Z(e,"columns"),renderColRef:Z(e,"renderCol"),renderItemWithColsRef:Z(e,"renderItemWithCols")}),w=T(null),p=T(void 0),h=new Map,C=M(()=>{const{items:d,itemSize:m,keyField:B}=e,W=new Pt(d.length,m);return d.forEach((q,H)=>{const K=q[B],L=h.get(K);L!==void 0&&W.add(H,L)}),W}),x=T(0),R=T(0),y=xe(()=>Math.max(C.value.getBound(R.value-rt(e.paddingTop))-1,0)),E=M(()=>{const{value:d}=p;if(d===void 0)return[];const{items:m,itemSize:B}=e,W=y.value,q=Math.min(W+Math.ceil(d/B+1),m.length-1),H=[];for(let K=W;K<=q;++K)H.push(m[K]);return H}),j=(d,m)=>{if(typeof d=="number"){A(d,m,"auto");return}const{left:B,top:W,index:q,key:H,position:K,behavior:L,debounce:X=!0}=d;if(B!==void 0||W!==void 0)A(B,W,L);else if(q!==void 0)O(q,L,X);else if(H!==void 0){const u=c.value.get(H);u!==void 0&&O(u,L,X)}else K==="bottom"?A(0,Number.MAX_SAFE_INTEGER,L):K==="top"&&A(0,0,L)};let z,F=null;function O(d,m,B){const{value:W}=C,q=W.sum(d)+rt(e.paddingTop);if(!B)w.value.scrollTo({left:0,top:q,behavior:m});else{z=d,F!==null&&window.clearTimeout(F),F=window.setTimeout(()=>{z=void 0,F=null},16);const{scrollTop:H,offsetHeight:K}=w.value;if(q>H){const L=W.get(d);q+L<=H+K||w.value.scrollTo({left:0,top:q+L-K,behavior:m})}else w.value.scrollTo({left:0,top:q,behavior:m})}}function A(d,m,B){w.value.scrollTo({left:d,top:m,behavior:B})}function V(d,m){var B,W,q;if(o||e.ignoreItemResize||ae(m.target))return;const{value:H}=C,K=c.value.get(d),L=H.get(K),X=(q=(W=(B=m.borderBoxSize)===null||B===void 0?void 0:B[0])===null||W===void 0?void 0:W.blockSize)!==null&&q!==void 0?q:m.contentRect.height;if(X===L)return;X-e.itemSize===0?h.delete(d):h.set(d,X-e.itemSize);const v=X-L;if(v===0)return;H.add(K,v);const N=w.value;if(N!=null){if(z===void 0){const oe=H.sum(K);N.scrollTop>oe&&N.scrollBy(0,v)}else if(K<z)N.scrollBy(0,v);else if(K===z){const oe=H.sum(K);X+oe>N.scrollTop+N.offsetHeight&&N.scrollBy(0,v)}te()}x.value++}const J=!Ln();let U=!1;function ne(d){var m;(m=e.onScroll)===null||m===void 0||m.call(e,d),(!J||!U)&&te()}function re(d){var m;if((m=e.onWheel)===null||m===void 0||m.call(e,d),J){const B=w.value;if(B!=null){if(d.deltaX===0&&(B.scrollTop===0&&d.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),B.scrollTop+=d.deltaY/pt(),B.scrollLeft+=d.deltaX/pt(),te(),U=!0,Rn(()=>{U=!1})}}}function Q(d){if(o||ae(d.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(d.contentRect.height===p.value)return}else if(d.contentRect.height===p.value&&d.contentRect.width===a.value)return;p.value=d.contentRect.height,a.value=d.contentRect.width;const{onResize:m}=e;m!==void 0&&m(d)}function te(){const{value:d}=w;d!=null&&(R.value=d.scrollTop,g.value=d.scrollLeft)}function ae(d){let m=d;for(;m!==null;){if(m.style.display==="none")return!0;m=m.parentElement}return!1}return{listHeight:p,listStyle:{overflow:"auto"},keyToIndex:c,itemsStyle:M(()=>{const{itemResizable:d}=e,m=$e(C.value.sum());return x.value,[e.itemsStyle,{boxSizing:"content-box",width:$e(i.value),height:d?"":m,minHeight:d?m:"",paddingTop:$e(e.paddingTop),paddingBottom:$e(e.paddingBottom)}]}),visibleItemsStyle:M(()=>(x.value,{transform:`translateY(${$e(C.value.sum(y.value))})`})),viewportItems:E,listElRef:w,itemsElRef:T(null),scrollTo:j,handleListResize:Q,handleListScroll:ne,handleListWheel:re,handleItemResize:V}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return r(ht,{onResize:this.handleListResize},{default:()=>{var i,c;return r("div",sn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:g,renderItemWithCols:a}=this;return this.viewportItems.map(w=>{const p=w[n],h=o.get(p),C=g!=null?r(mt,{index:h,item:w}):void 0,x=a!=null?r(mt,{index:h,item:w}):void 0,R=this.$slots.default({item:w,renderedCols:C,renderedItemWithCols:x,index:h})[0];return e?r(ht,{key:p,onResize:y=>this.handleItemResize(p,y)},{default:()=>R}):(R.key=p,R)})}})]):(c=(i=this.$slots).empty)===null||c===void 0?void 0:c.call(i)])}})}}),he="v-hidden",Wn=Ue("[v-hidden]",{display:"none!important"}),wt=se({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=T(null),l=T(null);function i(g){const{value:a}=o,{getCounter:w,getTail:p}=e;let h;if(w!==void 0?h=w():h=l.value,!a||!h)return;h.hasAttribute(he)&&h.removeAttribute(he);const{children:C}=a;if(g.showAllItemsBeforeCalculate)for(const O of C)O.hasAttribute(he)&&O.removeAttribute(he);const x=a.offsetWidth,R=[],y=n.tail?p==null?void 0:p():null;let E=y?y.offsetWidth:0,j=!1;const z=a.children.length-(n.tail?1:0);for(let O=0;O<z-1;++O){if(O<0)continue;const A=C[O];if(j){A.hasAttribute(he)||A.setAttribute(he,"");continue}else A.hasAttribute(he)&&A.removeAttribute(he);const V=A.offsetWidth;if(E+=V,R[O]=V,E>x){const{updateCounter:J}=e;for(let U=O;U>=0;--U){const ne=z-1-U;J!==void 0?J(ne):h.textContent=`${ne}`;const re=h.offsetWidth;if(E-=R[U],E+re<=x||U===0){j=!0,O=U-1,y&&(O===-1?(y.style.maxWidth=`${x-re}px`,y.style.boxSizing="border-box"):y.style.maxWidth="");const{onUpdateCount:Q}=e;Q&&Q(ne);break}}}}const{onUpdateOverflow:F}=e;j?F!==void 0&&F(!0):(F!==void 0&&F(!1),h.setAttribute(he,""))}const c=Rt();return Wn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:It,ssr:c}),Le(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:l,sync:i}},render(){const{$slots:e}=this;return ut(()=>this.sync({showAllItemsBeforeCalculate:!1})),r("div",{class:"v-overflow",ref:"selfRef"},[cn(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Bt(e,n){n&&(Le(()=>{const{value:o}=e;o&&et.registerHandler(o,n)}),Ce(e,(o,l)=>{l&&et.unregisterHandler(l)},{deep:!1}),St(()=>{const{value:o}=e;o&&et.unregisterHandler(o)}))}function yt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ot(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const jn=se({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Hn=se({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Kn=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Un=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[D("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[de("+",[D("description",`
 margin-top: 8px;
 `)])]),D("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),D("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),qn=Object.assign(Object.assign({},pe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Gn=se({name:"Empty",props:qn,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:l}=Ge(e),i=pe("Empty","-empty",Un,fn,e,n),{localeRef:c}=Mt("Empty"),g=M(()=>{var h,C,x;return(h=e.description)!==null&&h!==void 0?h:(x=(C=l==null?void 0:l.value)===null||C===void 0?void 0:C.Empty)===null||x===void 0?void 0:x.description}),a=M(()=>{var h,C;return((C=(h=l==null?void 0:l.value)===null||h===void 0?void 0:h.Empty)===null||C===void 0?void 0:C.renderIcon)||(()=>r(Hn,null))}),w=M(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:C},self:{[ve("iconSize",h)]:x,[ve("fontSize",h)]:R,textColor:y,iconColor:E,extraTextColor:j}}=i.value;return{"--n-icon-size":x,"--n-font-size":R,"--n-bezier":C,"--n-text-color":y,"--n-icon-color":E,"--n-extra-text-color":j}}),p=o?Xe("empty",M(()=>{let h="";const{size:C}=e;return h+=C[0],h}),w,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:M(()=>g.value||c.value.description),cssVars:o?void 0:w,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),r("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${n}-empty__icon`},e.icon?e.icon():r(Ft,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${n}-empty__extra`},e.extra()):null)}}),xt=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=dt(ct);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:i}}=this,c=l==null?void 0:l(i),g=n?n(i,!1):Oe(i[this.labelField],i,!1),a=r("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),g);return i.render?i.render({node:a,option:i}):o?o({node:a,option:i,selected:!1}):a}});function Xn(e,n){return r(Tt,{name:"fade-in-scale-up-transition"},{default:()=>e?r(Ft,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>r(jn)}):null})}const Ct=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:i,renderLabelRef:c,renderOptionRef:g,labelFieldRef:a,valueFieldRef:w,showCheckmarkRef:p,nodePropsRef:h,handleOptionClick:C,handleOptionMouseEnter:x}=dt(ct),R=xe(()=>{const{value:z}=o;return z?e.tmNode.key===z.key:!1});function y(z){const{tmNode:F}=e;F.disabled||C(z,F)}function E(z){const{tmNode:F}=e;F.disabled||x(z,F)}function j(z){const{tmNode:F}=e,{value:O}=R;F.disabled||O||x(z,F)}return{multiple:l,isGrouped:xe(()=>{const{tmNode:z}=e,{parent:F}=z;return F&&F.rawNode.type==="group"}),showCheckmark:p,nodeProps:h,isPending:R,isSelected:xe(()=>{const{value:z}=n,{value:F}=l;if(z===null)return!1;const O=e.tmNode.rawNode[w.value];if(F){const{value:A}=i;return A.has(O)}else return z===O}),labelField:a,renderLabel:c,renderOption:g,handleMouseMove:j,handleMouseEnter:E,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:i,showCheckmark:c,nodeProps:g,renderOption:a,renderLabel:w,handleClick:p,handleMouseEnter:h,handleMouseMove:C}=this,x=Xn(o,e),R=w?[w(n,o),c&&x]:[Oe(n[this.labelField],n,o),c&&x],y=g==null?void 0:g(n),E=r("div",Object.assign({},y,{class:[`${e}-base-select-option`,n.class,y==null?void 0:y.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:c}],style:[(y==null?void 0:y.style)||"",n.style||""],onClick:ot([p,y==null?void 0:y.onClick]),onMouseenter:ot([h,y==null?void 0:y.onMouseenter]),onMousemove:ot([C,y==null?void 0:y.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},R));return n.render?n.render({node:E,option:n,selected:o}):a?a({node:E,option:n,selected:o}):E}}),Yn=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[D("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),D("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),D("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),D("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),D("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ie("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),de("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),de("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ie("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ie("pending",[de("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ie("selected",`
 color: var(--n-option-text-color-active);
 `,[de("&::before",`
 background-color: var(--n-option-color-active);
 `),ie("pending",[de("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ie("disabled",`
 cursor: not-allowed;
 `,[at("selected",`
 color: var(--n-option-text-color-disabled);
 `),ie("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),D("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[zt({enterScale:"0.5"})])])]),Zn=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ge(e),l=Ot("InternalSelectMenu",o,n),i=pe("InternalSelectMenu","-internal-select-menu",Yn,vn,e,Z(e,"clsPrefix")),c=T(null),g=T(null),a=T(null),w=M(()=>e.treeMate.getFlattenedNodes()),p=M(()=>$n(w.value)),h=T(null);function C(){const{treeMate:u}=e;let v=null;const{value:N}=e;N===null?v=u.getFirstAvailableNode():(e.multiple?v=u.getNode((N||[])[(N||[]).length-1]):v=u.getNode(N),(!v||v.disabled)&&(v=u.getFirstAvailableNode())),m(v||null)}function x(){const{value:u}=h;u&&!e.treeMate.getNode(u.key)&&(h.value=null)}let R;Ce(()=>e.show,u=>{u?R=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?C():x(),ut(B)):x()},{immediate:!0}):R==null||R()},{immediate:!0}),St(()=>{R==null||R()});const y=M(()=>rt(i.value.self[ve("optionHeight",e.size)])),E=M(()=>Ee(i.value.self[ve("padding",e.size)])),j=M(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=M(()=>{const u=w.value;return u&&u.length===0});function F(u){const{onToggle:v}=e;v&&v(u)}function O(u){const{onScroll:v}=e;v&&v(u)}function A(u){var v;(v=a.value)===null||v===void 0||v.sync(),O(u)}function V(){var u;(u=a.value)===null||u===void 0||u.sync()}function J(){const{value:u}=h;return u||null}function U(u,v){v.disabled||m(v,!1)}function ne(u,v){v.disabled||F(v)}function re(u){var v;Ae(u,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,u)}function Q(u){var v;Ae(u,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,u)}function te(u){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,u),!e.focusable&&u.preventDefault()}function ae(){const{value:u}=h;u&&m(u.getNext({loop:!0}),!0)}function d(){const{value:u}=h;u&&m(u.getPrev({loop:!0}),!0)}function m(u,v=!1){h.value=u,v&&B()}function B(){var u,v;const N=h.value;if(!N)return;const oe=p.value(N.key);oe!==null&&(e.virtualScroll?(u=g.value)===null||u===void 0||u.scrollTo({index:oe}):(v=a.value)===null||v===void 0||v.scrollTo({index:oe,elSize:y.value}))}function W(u){var v,N;!((v=c.value)===null||v===void 0)&&v.contains(u.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,u))}function q(u){var v,N;!((v=c.value)===null||v===void 0)&&v.contains(u.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,u)}it(ct,{handleOptionMouseEnter:U,handleOptionClick:ne,valueSetRef:j,pendingTmNodeRef:h,nodePropsRef:Z(e,"nodeProps"),showCheckmarkRef:Z(e,"showCheckmark"),multipleRef:Z(e,"multiple"),valueRef:Z(e,"value"),renderLabelRef:Z(e,"renderLabel"),renderOptionRef:Z(e,"renderOption"),labelFieldRef:Z(e,"labelField"),valueFieldRef:Z(e,"valueField")}),it(Sn,c),Le(()=>{const{value:u}=a;u&&u.sync()});const H=M(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:v},self:{height:N,borderRadius:oe,color:Re,groupHeaderTextColor:Se,actionDividerColor:fe,optionTextColorPressed:le,optionTextColor:Fe,optionTextColorDisabled:ge,optionTextColorActive:ze,optionOpacityDisabled:Ie,optionCheckColor:Me,actionTextColor:Pe,optionColorPending:me,optionColorActive:we,loadingColor:ke,loadingSize:Be,optionColorActivePending:_e,[ve("optionFontSize",u)]:Te,[ve("optionHeight",u)]:ye,[ve("optionPadding",u)]:ee}}=i.value;return{"--n-height":N,"--n-action-divider-color":fe,"--n-action-text-color":Pe,"--n-bezier":v,"--n-border-radius":oe,"--n-color":Re,"--n-option-font-size":Te,"--n-group-header-text-color":Se,"--n-option-check-color":Me,"--n-option-color-pending":me,"--n-option-color-active":we,"--n-option-color-active-pending":_e,"--n-option-height":ye,"--n-option-opacity-disabled":Ie,"--n-option-text-color":Fe,"--n-option-text-color-active":ze,"--n-option-text-color-disabled":ge,"--n-option-text-color-pressed":le,"--n-option-padding":ee,"--n-option-padding-left":Ee(ee,"left"),"--n-option-padding-right":Ee(ee,"right"),"--n-loading-color":ke,"--n-loading-size":Be}}),{inlineThemeDisabled:K}=e,L=K?Xe("internal-select-menu",M(()=>e.size[0]),H,e):void 0,X={selfRef:c,next:ae,prev:d,getPendingTmNode:J};return Bt(c,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:l,virtualListRef:g,scrollbarRef:a,itemSize:y,padding:E,flattenedNodes:w,empty:z,virtualListContainer(){const{value:u}=g;return u==null?void 0:u.listElRef},virtualListContent(){const{value:u}=g;return u==null?void 0:u.itemsElRef},doScroll:O,handleFocusin:W,handleFocusout:q,handleKeyUp:re,handleKeyDown:Q,handleMouseDown:te,handleVirtualListResize:V,handleVirtualListScroll:A,cssVars:K?void 0:H,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},X)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:i,onRender:c}=this;return c==null||c(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,i,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},vt(e.header,g=>g&&r("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},g)),this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(hn,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},_n(e.empty,()=>[r(Gn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):r(In,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?r(Vn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?r(xt,{key:g.key,clsPrefix:o,tmNode:g}):g.ignored?null:r(Ct,{clsPrefix:o,key:g.key,tmNode:g})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?r(xt,{key:g.key,clsPrefix:o,tmNode:g}):r(Ct,{clsPrefix:o,key:g.key,tmNode:g})))}),vt(e.action,g=>g&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},g),r(Kn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Jn=de([$("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),D("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),D("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[D("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[D("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[D("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[$("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[D("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),D("render-label",`
 color: var(--n-text-color);
 `)]),at("disabled",[de("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ie("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ie("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),ie("disabled","cursor: not-allowed;",[D("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),D("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[D("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),D("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ie(`${e}-status`,[D("state-border",`border: var(--n-border-${e});`),at("disabled",[de("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ie("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ie("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[D("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Qn=se({name:"InternalSelection",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ge(e),l=Ot("InternalSelection",o,n),i=T(null),c=T(null),g=T(null),a=T(null),w=T(null),p=T(null),h=T(null),C=T(null),x=T(null),R=T(null),y=T(!1),E=T(!1),j=T(!1),z=pe("InternalSelection","-internal-selection",Jn,bn,e,Z(e,"clsPrefix")),F=M(()=>e.clearable&&!e.disabled&&(j.value||e.active)),O=M(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),A=M(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),V=M(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function J(){var s;const{value:b}=i;if(b){const{value:G}=c;G&&(G.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=x.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function U(){const{value:s}=R;s&&(s.style.display="none")}function ne(){const{value:s}=R;s&&(s.style.display="inline-block")}Ce(Z(e,"active"),s=>{s||U()}),Ce(Z(e,"pattern"),()=>{e.multiple&&ut(J)});function re(s){const{onFocus:b}=e;b&&b(s)}function Q(s){const{onBlur:b}=e;b&&b(s)}function te(s){const{onDeleteOption:b}=e;b&&b(s)}function ae(s){const{onClear:b}=e;b&&b(s)}function d(s){const{onPatternInput:b}=e;b&&b(s)}function m(s){var b;(!s.relatedTarget||!(!((b=g.value)===null||b===void 0)&&b.contains(s.relatedTarget)))&&re(s)}function B(s){var b;!((b=g.value)===null||b===void 0)&&b.contains(s.relatedTarget)||Q(s)}function W(s){ae(s)}function q(){j.value=!0}function H(){j.value=!1}function K(s){!e.active||!e.filterable||s.target!==c.value&&s.preventDefault()}function L(s){te(s)}const X=T(!1);function u(s){if(s.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&L(b[b.length-1])}}let v=null;function N(s){const{value:b}=i;if(b){const G=s.target.value;b.textContent=G,J()}e.ignoreComposition&&X.value?v=s:d(s)}function oe(){X.value=!0}function Re(){X.value=!1,e.ignoreComposition&&d(v),v=null}function Se(s){var b;E.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,s)}function fe(s){var b;E.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,s)}function le(){var s,b;if(e.filterable)E.value=!1,(s=p.value)===null||s===void 0||s.blur(),(b=c.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:G}=a;G==null||G.blur()}else{const{value:G}=w;G==null||G.blur()}}function Fe(){var s,b,G;e.filterable?(E.value=!1,(s=p.value)===null||s===void 0||s.focus()):e.multiple?(b=a.value)===null||b===void 0||b.focus():(G=w.value)===null||G===void 0||G.focus()}function ge(){const{value:s}=c;s&&(ne(),s.focus())}function ze(){const{value:s}=c;s&&s.blur()}function Ie(s){const{value:b}=h;b&&b.setTextContent(`+${s}`)}function Me(){const{value:s}=C;return s}function Pe(){return c.value}let me=null;function we(){me!==null&&window.clearTimeout(me)}function ke(){e.active||(we(),me=window.setTimeout(()=>{V.value&&(y.value=!0)},100))}function Be(){we()}function _e(s){s||(we(),y.value=!1)}Ce(V,s=>{s||(y.value=!1)}),Le(()=>{pn(()=>{const s=p.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=E.value?-1:0)})}),Bt(g,e.onResize);const{inlineThemeDisabled:Te}=e,ye=M(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:b},self:{fontWeight:G,borderRadius:Ye,color:Ze,placeholderColor:Ne,textColor:De,paddingSingle:Ve,paddingMultiple:Je,caretColor:Qe,colorDisabled:We,textColorDisabled:be,placeholderColorDisabled:t,colorActive:f,boxShadowFocus:S,boxShadowActive:_,boxShadowHover:P,border:I,borderFocus:k,borderHover:Y,borderActive:ue,arrowColor:$t,arrowColorDisabled:Et,loadingColor:At,colorActiveWarning:Lt,boxShadowFocusWarning:Nt,boxShadowActiveWarning:Dt,boxShadowHoverWarning:Vt,borderWarning:Wt,borderFocusWarning:jt,borderHoverWarning:Ht,borderActiveWarning:Kt,colorActiveError:Ut,boxShadowFocusError:qt,boxShadowActiveError:Gt,boxShadowHoverError:Xt,borderError:Yt,borderFocusError:Zt,borderHoverError:Jt,borderActiveError:Qt,clearColor:en,clearColorHover:tn,clearColorPressed:nn,clearSize:on,arrowSize:ln,[ve("height",s)]:rn,[ve("fontSize",s)]:an}}=z.value,je=Ee(Ve),He=Ee(Je);return{"--n-bezier":b,"--n-border":I,"--n-border-active":ue,"--n-border-focus":k,"--n-border-hover":Y,"--n-border-radius":Ye,"--n-box-shadow-active":_,"--n-box-shadow-focus":S,"--n-box-shadow-hover":P,"--n-caret-color":Qe,"--n-color":Ze,"--n-color-active":f,"--n-color-disabled":We,"--n-font-size":an,"--n-height":rn,"--n-padding-single-top":je.top,"--n-padding-multiple-top":He.top,"--n-padding-single-right":je.right,"--n-padding-multiple-right":He.right,"--n-padding-single-left":je.left,"--n-padding-multiple-left":He.left,"--n-padding-single-bottom":je.bottom,"--n-padding-multiple-bottom":He.bottom,"--n-placeholder-color":Ne,"--n-placeholder-color-disabled":t,"--n-text-color":De,"--n-text-color-disabled":be,"--n-arrow-color":$t,"--n-arrow-color-disabled":Et,"--n-loading-color":At,"--n-color-active-warning":Lt,"--n-box-shadow-focus-warning":Nt,"--n-box-shadow-active-warning":Dt,"--n-box-shadow-hover-warning":Vt,"--n-border-warning":Wt,"--n-border-focus-warning":jt,"--n-border-hover-warning":Ht,"--n-border-active-warning":Kt,"--n-color-active-error":Ut,"--n-box-shadow-focus-error":qt,"--n-box-shadow-active-error":Gt,"--n-box-shadow-hover-error":Xt,"--n-border-error":Yt,"--n-border-focus-error":Zt,"--n-border-hover-error":Jt,"--n-border-active-error":Qt,"--n-clear-size":on,"--n-clear-color":en,"--n-clear-color-hover":tn,"--n-clear-color-pressed":nn,"--n-arrow-size":ln,"--n-font-weight":G}}),ee=Te?Xe("internal-selection",M(()=>e.size[0]),ye,e):void 0;return{mergedTheme:z,mergedClearable:F,mergedClsPrefix:n,rtlEnabled:l,patternInputFocused:E,filterablePlaceholder:O,label:A,selected:V,showTagsPanel:y,isComposing:X,counterRef:h,counterWrapperRef:C,patternInputMirrorRef:i,patternInputRef:c,selfRef:g,multipleElRef:a,singleElRef:w,patternInputWrapperRef:p,overflowRef:x,inputTagElRef:R,handleMouseDown:K,handleFocusin:m,handleClear:W,handleMouseEnter:q,handleMouseLeave:H,handleDeleteOption:L,handlePatternKeyDown:u,handlePatternInputInput:N,handlePatternInputBlur:fe,handlePatternInputFocus:Se,handleMouseEnterCounter:ke,handleMouseLeaveCounter:Be,handleFocusout:B,handleCompositionEnd:Re,handleCompositionStart:oe,onPopoverUpdateShow:_e,focus:Fe,focusInput:ge,blur:le,blurInput:ze,updateCounter:Ie,getCounter:Me,getTail:Pe,renderLabel:e.renderLabel,cssVars:Te?void 0:ye,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:i,maxTagCount:c,bordered:g,clsPrefix:a,ellipsisTagPopoverProps:w,onRender:p,renderTag:h,renderLabel:C}=this;p==null||p();const x=c==="responsive",R=typeof c=="number",y=x||R,E=r(Mn,null,{default:()=>r(Bn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,F;return(F=(z=this.$slots).arrow)===null||F===void 0?void 0:F.call(z)}})});let j;if(n){const{labelField:z}=this,F=d=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:d.value},h?h({option:d,handleClose:()=>{this.handleDeleteOption(d)}}):r(tt,{size:o,closable:!d.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(d)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>C?C(d,!0):Oe(d[z],d,!0)})),O=()=>(R?this.selectedOptions.slice(0,c):this.selectedOptions).map(F),A=i?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,V=x?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(tt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let J;if(R){const d=this.selectedOptions.length-c;d>0&&(J=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(tt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${d}`})))}const U=x?i?r(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:V,tail:()=>A}):r(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:V}):R&&J?O().concat(J):O(),ne=y?()=>r("div",{class:`${a}-base-selection-popover`},x?O():this.selectedOptions.map(F)):void 0,re=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},w):null,te=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,ae=i?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},U,x?null:A,E):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},U,E);j=r(gn,null,y?r(Fn,Object.assign({},re,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ae,default:ne}):ae,te)}else if(i){const z=this.pattern||this.isComposing,F=this.active?!z:!this.selected,O=this.active?!1:this.selected;j=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:yt(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,F?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,E)}else j=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:yt(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),E);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},j,g?r("div",{class:`${a}-base-selection__border`}):null,g?r("div",{class:`${a}-base-selection__state-border`}):null)}});function qe(e){return e.type==="group"}function _t(e){return e.type==="ignored"}function lt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function eo(e,n){return{getIsGroup:qe,getIgnored:_t,getKey(l){return qe(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function to(e,n,o,l){if(!n)return e;function i(c){if(!Array.isArray(c))return[];const g=[];for(const a of c)if(qe(a)){const w=i(a[l]);w.length&&g.push(Object.assign({},a,{[l]:w}))}else{if(_t(a))continue;n(o,a)&&g.push(a)}return g}return i(e)}function no(e,n,o){const l=new Map;return e.forEach(i=>{qe(i)?i[o].forEach(c=>{l.set(c[n],c)}):l.set(i[n],i)}),l}const oo=de([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[zt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),lo=Object.assign(Object.assign({},pe.props),{to:st.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),mo=se({name:"Select",props:lo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:i}=Ge(e),c=pe("Select","-select",oo,yn,e,n),g=T(e.defaultValue),a=Z(e,"value"),w=gt(a,g),p=T(!1),h=T(""),C=xn(e,["items","options"]),x=T([]),R=T([]),y=M(()=>R.value.concat(x.value).concat(C.value)),E=M(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:S}=e;return(_,P)=>{if(!P)return!1;const I=P[f];if(typeof I=="string")return lt(_,I);const k=P[S];return typeof k=="string"?lt(_,k):typeof k=="number"?lt(_,String(k)):!1}}),j=M(()=>{if(e.remote)return C.value;{const{value:t}=y,{value:f}=h;return!f.length||!e.filterable?t:to(t,E.value,f,e.childrenField)}}),z=M(()=>{const{valueField:t,childrenField:f}=e,S=eo(t,f);return En(j.value,S)}),F=M(()=>no(y.value,e.valueField,e.childrenField)),O=T(!1),A=gt(Z(e,"show"),O),V=T(null),J=T(null),U=T(null),{localeRef:ne}=Mt("Select"),re=M(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:ne.value.placeholder}),Q=[],te=T(new Map),ae=M(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:S}=e;return _=>({[f]:String(_),[S]:_})}return t===!1?!1:f=>Object.assign(t(f),{value:f})});function d(t){const f=e.remote,{value:S}=te,{value:_}=F,{value:P}=ae,I=[];return t.forEach(k=>{if(_.has(k))I.push(_.get(k));else if(f&&S.has(k))I.push(S.get(k));else if(P){const Y=P(k);Y&&I.push(Y)}}),I}const m=M(()=>{if(e.multiple){const{value:t}=w;return Array.isArray(t)?d(t):[]}return null}),B=M(()=>{const{value:t}=w;return!e.multiple&&!Array.isArray(t)?t===null?null:d([t])[0]||null:null}),W=Pn(e),{mergedSizeRef:q,mergedDisabledRef:H,mergedStatusRef:K}=W;function L(t,f){const{onChange:S,"onUpdate:value":_,onUpdateValue:P}=e,{nTriggerFormChange:I,nTriggerFormInput:k}=W;S&&ce(S,t,f),P&&ce(P,t,f),_&&ce(_,t,f),g.value=t,I(),k()}function X(t){const{onBlur:f}=e,{nTriggerFormBlur:S}=W;f&&ce(f,t),S()}function u(){const{onClear:t}=e;t&&ce(t)}function v(t){const{onFocus:f,showOnFocus:S}=e,{nTriggerFormFocus:_}=W;f&&ce(f,t),_(),S&&fe()}function N(t){const{onSearch:f}=e;f&&ce(f,t)}function oe(t){const{onScroll:f}=e;f&&ce(f,t)}function Re(){var t;const{remote:f,multiple:S}=e;if(f){const{value:_}=te;if(S){const{valueField:P}=e;(t=m.value)===null||t===void 0||t.forEach(I=>{_.set(I[P],I)})}else{const P=B.value;P&&_.set(P[e.valueField],P)}}}function Se(t){const{onUpdateShow:f,"onUpdate:show":S}=e;f&&ce(f,t),S&&ce(S,t),O.value=t}function fe(){H.value||(Se(!0),O.value=!0,e.filterable&&Ve())}function le(){Se(!1)}function Fe(){h.value="",R.value=Q}const ge=T(!1);function ze(){e.filterable&&(ge.value=!0)}function Ie(){e.filterable&&(ge.value=!1,A.value||Fe())}function Me(){H.value||(A.value?e.filterable?Ve():le():fe())}function Pe(t){var f,S;!((S=(f=U.value)===null||f===void 0?void 0:f.selfRef)===null||S===void 0)&&S.contains(t.relatedTarget)||(p.value=!1,X(t),le())}function me(t){v(t),p.value=!0}function we(){p.value=!0}function ke(t){var f;!((f=V.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(p.value=!1,X(t),le())}function Be(){var t;(t=V.value)===null||t===void 0||t.focus(),le()}function _e(t){var f;A.value&&(!((f=V.value)===null||f===void 0)&&f.$el.contains(kn(t))||le())}function Te(t){if(!Array.isArray(t))return[];if(ae.value)return Array.from(t);{const{remote:f}=e,{value:S}=F;if(f){const{value:_}=te;return t.filter(P=>S.has(P)||_.has(P))}else return t.filter(_=>S.has(_))}}function ye(t){ee(t.rawNode)}function ee(t){if(H.value)return;const{tag:f,remote:S,clearFilterAfterSelect:_,valueField:P}=e;if(f&&!S){const{value:I}=R,k=I[0]||null;if(k){const Y=x.value;Y.length?Y.push(k):x.value=[k],R.value=Q}}if(S&&te.value.set(t[P],t),e.multiple){const I=Te(w.value),k=I.findIndex(Y=>Y===t[P]);if(~k){if(I.splice(k,1),f&&!S){const Y=s(t[P]);~Y&&(x.value.splice(Y,1),_&&(h.value=""))}}else I.push(t[P]),_&&(h.value="");L(I,d(I))}else{if(f&&!S){const I=s(t[P]);~I?x.value=[x.value[I]]:x.value=Q}De(),le(),L(t[P],t)}}function s(t){return x.value.findIndex(S=>S[e.valueField]===t)}function b(t){A.value||fe();const{value:f}=t.target;h.value=f;const{tag:S,remote:_}=e;if(N(f),S&&!_){if(!f){R.value=Q;return}const{onCreate:P}=e,I=P?P(f):{[e.labelField]:f,[e.valueField]:f},{valueField:k,labelField:Y}=e;C.value.some(ue=>ue[k]===I[k]||ue[Y]===I[Y])||x.value.some(ue=>ue[k]===I[k]||ue[Y]===I[Y])?R.value=Q:R.value=[I]}}function G(t){t.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&le(),u(),f?L([],[]):L(null,null)}function Ye(t){!Ae(t,"action")&&!Ae(t,"empty")&&!Ae(t,"header")&&t.preventDefault()}function Ze(t){oe(t)}function Ne(t){var f,S,_,P,I;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=V.value)===null||f===void 0)&&f.isComposing)){if(A.value){const k=(S=U.value)===null||S===void 0?void 0:S.getPendingTmNode();k?ye(k):e.filterable||(le(),De())}else if(fe(),e.tag&&ge.value){const k=R.value[0];if(k){const Y=k[e.valueField],{value:ue}=w;e.multiple&&Array.isArray(ue)&&ue.includes(Y)||ee(k)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;A.value&&((_=U.value)===null||_===void 0||_.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;A.value?(P=U.value)===null||P===void 0||P.next():fe();break;case"Escape":A.value&&(An(t),le()),(I=V.value)===null||I===void 0||I.focus();break}}function De(){var t;(t=V.value)===null||t===void 0||t.focus()}function Ve(){var t;(t=V.value)===null||t===void 0||t.focusInput()}function Je(){var t;A.value&&((t=J.value)===null||t===void 0||t.syncPosition())}Re(),Ce(Z(e,"options"),Re);const Qe={focus:()=>{var t;(t=V.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=V.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=V.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=V.value)===null||t===void 0||t.blurInput()}},We=M(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),be=i?Xe("select",void 0,We,e):void 0;return Object.assign(Object.assign({},Qe),{mergedStatus:K,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:z,isMounted:Cn(),triggerRef:V,menuRef:U,pattern:h,uncontrolledShow:O,mergedShow:A,adjustedTo:st(e),uncontrolledValue:g,mergedValue:w,followerRef:J,localizedPlaceholder:re,selectedOption:B,selectedOptions:m,mergedSize:q,mergedDisabled:H,focused:p,activeWithoutMenuOpen:ge,inlineThemeDisabled:i,onTriggerInputFocus:ze,onTriggerInputBlur:Ie,handleTriggerOrMenuResize:Je,handleMenuFocus:we,handleMenuBlur:ke,handleMenuTabOut:Be,handleTriggerClick:Me,handleToggle:ye,handleDeleteOption:ee,handlePatternInput:b,handleClear:G,handleTriggerBlur:Pe,handleTriggerFocus:me,handleKeydown:Ne,handleMenuAfterLeave:Fe,handleMenuClickOutside:_e,handleMenuScroll:Ze,handleMenuKeydown:Ne,handleMenuMousedown:Ye,mergedTheme:c,cssVars:i?void 0:We,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(Tn,null,{default:()=>[r(On,null,{default:()=>r(Qn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),r(zn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===st.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Tt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),mn(r(Zn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[wn,this.mergedShow],[ft,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ft,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{mo as N};
