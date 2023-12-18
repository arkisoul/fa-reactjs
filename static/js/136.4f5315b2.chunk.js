"use strict";(self.webpackChunktodoapp=self.webpackChunktodoapp||[]).push([[136],{136:(e,a,r)=>{r.r(a),r.d(a,{LoginComponent:()=>n,default:()=>d});r(791);var s=r(87),l=r(82),o=r(745),i=r(184);function n(e){let{handleEmailChange:a,handlePasswordChange:r,handleAuthSubmit:l,authState:o}=e;const{user:n,errors:d}=o;return(0,i.jsxs)("div",{className:"auth auth-login space",children:[(0,i.jsx)("h2",{children:"Welcome, back!"}),(0,i.jsxs)("form",{className:"space",children:[(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Username"}),(0,i.jsx)("input",{type:"email",className:"form-control",placeholder:"Your email address",id:"email",name:"email",autoComplete:"false",value:n.email,onChange:a}),d.email.required?(0,i.jsx)("small",{className:"form-error",children:d.email.required}):null,d.email.email?(0,i.jsx)("small",{className:"form-error",children:d.email.email}):null]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,i.jsx)("input",{type:"password",className:"form-control",placeholder:"Your password",id:"password",name:"password",autoComplete:"false",value:n.password,onChange:r}),d.password.required?(0,i.jsx)("small",{className:"form-error",children:d.password.required}):null]}),(0,i.jsx)("div",{className:"form-group form-actions",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",name:"login",disabled:d.email.required||d.email.email||d.password.required,onClick:l,children:"Login"})}),(0,i.jsx)("div",{children:(0,i.jsxs)("small",{children:["Do not have an account, ",(0,i.jsx)(s.rU,{to:"/register",children:"Register here"})]})})]})]})}const d=(0,l.P)(n,o.pH)},82:(e,a,r)=>{r.d(a,{P:()=>w});var s=r(791),l=r(420);const o=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,i=e=>o.test(e),n=e=>e&&"string"===typeof e&&e.trim().length>0;var d=r(689),t=r(184);const m={user:{email:"",password:""},errors:{email:"",password:""}},u="EMAIL",c="PASSWORD",p="ERRORS",h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return{...e,user:{...e.user,email:a.payload}};case c:return{...e,user:{...e.user,password:a.payload}};case p:return{...e,errors:{...e.errors,...a.payload}};default:return e}},w=(e,a)=>()=>{const[r,o]=(0,s.useReducer)(h,m),w=(0,l.I0)(),g=(0,d.s0)(),{user:f,errors:y}=r;return(0,t.jsx)(e,{handleAuthSubmit:async e=>{e.preventDefault(),y.email.required||y.email.email||y.password.required||w(a(f,g))},handleEmailChange:e=>{const a=e.target.value,r={};i(a)||(r.email="Invlaid email"),n(a)||(r.required="Email is required"),o((e=>({type:u,payload:e}))(a)),o({type:p,payload:{email:r}})},handlePasswordChange:e=>{const a=e.target.value,r={};n(a)||(r.required="Password is required"),o((e=>({type:c,payload:e}))(a)),o({type:p,payload:{password:r}})},authState:r})}}}]);
//# sourceMappingURL=136.4f5315b2.chunk.js.map