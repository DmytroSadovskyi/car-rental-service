"use strict";(self.webpackChunkcar_rental_service=self.webpackChunkcar_rental_service||[]).push([[152],{3152:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r,a=t(3433),i=t(9439),s=t(2227),c=t(9434),l=t(458),u=t(2906),f=t(2791),o=t(117),p=t(168),m=t(6487).ZP.p(r||(r=(0,p.Z)(["\n  position: absolute;\n  top: 80%;\n  left: 50%;\n  transform: translate(-50%, -80%);\n  font-family: Inter;\n  font-size: 20px;\n  min-width: 280px;\n  text-align: center;\n"]))),d=t(5802),g=t(3500),x=t(184),h=function(){var e=(0,c.v9)((function(e){return e.favorites})),n=(0,f.useState)([]),t=(0,i.Z)(n,2),r=t[0],p=t[1];(0,f.useEffect)((function(){var n=(0,a.Z)(new Set(e.map((function(e){return e.make}))));p(n),k(e)}),[e]);var h=(0,f.useState)(e),Z=(0,i.Z)(h,2),v=Z[0],k=Z[1],j=(0,f.useState)(!1),S=(0,i.Z)(j,2),b=S[0],F=S[1],I=(0,f.useState)(""),P=(0,i.Z)(I,2),D=P[0],w=P[1],y=(0,f.useState)(""),C=(0,i.Z)(y,2),_=C[0],z=C[1],E=(0,f.useState)({min:"",max:""}),M=(0,i.Z)(E,2),A=M[0],H=M[1],K=(0,f.useState)("ascending"),R=(0,i.Z)(K,2),T=R[0],W=R[1],q=(0,f.useCallback)((function(e){if(""!==D&&e.make!==D)return!1;var n=parseInt(e.rentalPrice.replace(/\D/g,""),10);return!(""!==_&&n<parseInt(_,10))&&!(""!==A.min&&e.mileage<A.min||""!==A.max&&e.mileage>A.max)}),[D,_,A]);(0,f.useEffect)((function(){if(b){var n=e.filter(q);k(n),F(!1)}}),[b,e,q]);var B=(0,a.Z)(v).sort((function(e,n){return"ascending"===T?parseInt(e.rentalPrice.replace(/\D/g,""),10)-parseInt(n.rentalPrice.replace(/\D/g,""),10):parseInt(n.rentalPrice.replace(/\D/g,""),10)-parseInt(e.rentalPrice.replace(/\D/g,""),10)}));return(0,x.jsx)("section",{children:(0,x.jsxs)(u.W2,{children:[(0,x.jsx)(o.Z,{makeFilter:D,priceFilter:_,mileageFilter:A,setMakeFilter:w,setPriceFilter:z,setMileageFilter:H,makes:r,handleReset:function(){w(""),z(0),H({min:"",max:""}),F(!0),k(e)},onApplyFilters:function(){F(!0)},children:(0,x.jsx)(l.Kz,{type:"button","aria-label":"sorting-button",onClick:function(){W((function(e){return"ascending"===e?"descending":"ascending"}))},children:"ascending"===T?(0,x.jsx)(d.r,{}):(0,x.jsx)(g.r,{})})}),B.length>0?(0,x.jsx)(l.Hg,{children:B.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(s.Z,{car:e})},e.id)}))}):(0,x.jsx)(m,{children:"There is no favorite cars yet"})]})})}}}]);
//# sourceMappingURL=152.66b083b7.chunk.js.map