"use strict";(self.webpackChunkcar_rental_service=self.webpackChunkcar_rental_service||[]).push([[770],{8770:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(4165),a=r(3433),s=r(5861),c=r(9439),i=r(2227),u=r(2791),l=r(1243);l.Z.defaults.baseURL="https://645a8c7c65bd868e931e4c89.mockapi.io";var o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/cars",{signal:t.signal});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=o,p=r(458),d=r(2906),Z=r(1751),g=r(117),h=r(5802),m=r(3500),x=r(4501),v=r(5218),j=r(184),k=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),r=t[0],o=t[1],k=(0,u.useState)([]),b=(0,c.Z)(k,2),S=b[0],y=b[1],F=(0,u.useState)(1),P=(0,c.Z)(F,2),w=P[0],C=P[1],I=(0,u.useState)(8),D=(0,c.Z)(I,1)[0],_=(0,u.useState)(!1),A=(0,c.Z)(_,2),E=A[0],L=A[1],M=(0,u.useState)([]),N=(0,c.Z)(M,2),R=N[0],z=N[1],H=(0,u.useState)(!1),K=(0,c.Z)(H,2),U=K[0],W=K[1],q=(0,u.useState)(""),B=(0,c.Z)(q,2),G=B[0],J=B[1],O=(0,u.useState)(""),Q=(0,c.Z)(O,2),T=Q[0],V=Q[1],X=(0,u.useState)(!1),Y=(0,c.Z)(X,2),$=Y[0],ee=Y[1],te=(0,u.useState)({min:"",max:""}),re=(0,c.Z)(te,2),ne=re[0],ae=re[1],se=(0,u.useState)("ascending"),ce=(0,c.Z)(se,2),ie=ce[0],ue=ce[1];(0,u.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var r,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(!0),t.next=4,f(e);case 4:r=t.sent,o(r),s=(0,a.Z)(new Set(r.map((function(e){return e.make})))),y(s),z(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),l.Z.isCancel(t.t0)?console.log("\u0417\u0430\u043f\u0438\u0442 \u0431\u0443\u043b\u043e \u0441\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u043e",t.t0.message):console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443",t.t0);case 14:return t.prev=14,L(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[]);var le=w*D,oe=(0,u.useCallback)((function(e){if(""!==G&&e.make!==G)return!1;var t=parseInt(e.rentalPrice.replace(/\D/g,""),10);return!(""!==T&&t>=parseInt(T,10))&&!(""!==ne.min&&e.mileage<ne.min||""!==ne.max&&e.mileage>ne.max)}),[G,T,ne]);(0,u.useEffect)((function(){if(U){var e=r.filter(oe);z(e),0===e.length?(ee(!0),v.ZP.error("No cars match your criteria. Please adjust your filters.")):ee(!1),W(!1)}}),[U,r,oe]);var fe=(0,a.Z)(R).sort((function(e,t){return"ascending"===ie?parseInt(e.rentalPrice.replace(/\D/g,""),10)-parseInt(t.rentalPrice.replace(/\D/g,""),10):parseInt(t.rentalPrice.replace(/\D/g,""),10)-parseInt(e.rentalPrice.replace(/\D/g,""),10)})).slice(0,le);return(0,j.jsxs)("section",{children:[E&&(0,j.jsx)(Z.Z,{}),(0,j.jsx)(v.x7,{}),(0,j.jsxs)(d.W2,{children:[(0,j.jsx)(g.Z,{makeFilter:G,priceFilter:T,mileageFilter:ne,setMakeFilter:J,setPriceFilter:V,setMileageFilter:ae,makes:S,handleReset:function(){J(""),V(""),ae({min:"",max:""}),W(!0),ee(!1)},onApplyFilters:function(){W(!0)},children:(0,j.jsx)(p.Kz,{type:"button","aria-label":"sorting-button",onClick:function(){ue((function(e){return"ascending"===e?"descending":"ascending"}))},children:"ascending"===ie?(0,j.jsx)(h.r,{}):(0,j.jsx)(m.r,{})})}),0===fe.length&&$&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(x.x,{children:"No cars match your criteria. Please adjust your filters."})}),(0,j.jsx)(p.Hg,{children:fe.map((function(e){return(0,j.jsx)("li",{children:(0,j.jsx)(i.Z,{car:e})},e.id)}))}),R.length>le&&(0,j.jsx)(p.CF,{type:"button",onClick:function(){return C((function(e){return e+1}))},children:"Load more"})]})]})}}}]);
//# sourceMappingURL=770.90644f24.chunk.js.map