import{A as c,o as m,f as u,b as i,w as f,d as _,z as g,B as b,u as o,t as w,q as V,F as v,C as x,D as L}from"./index-DQeH2y-C.js";import{_ as p}from"./IInput-D6EJa9ex.js";import{_ as S}from"./IButton-C4fl-L9z.js";import{u as y}from"./useMutation-9d0EoMp8.js";const B={__name:"LoginForm",props:{isLoading:{default:!1,type:Boolean}},emits:["submit"],setup(d,{emit:l}){const n=d,s=l,e=c({email:"",password:""});return(r,a)=>(m(),u("form",{onSubmit:a[2]||(a[2]=g(t=>s("submit",b(e)),["prevent"]))},[i(p,{class:"mb-4",label:"Електронна пошта",placeholder:"email@email.com",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=t=>e.email=t)},null,8,["modelValue"]),i(p,{class:"mb-4",label:"Пароль",placeholder:"*************",type:"password",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=t=>e.password=t)},null,8,["modelValue"]),i(S,{class:"mt-5 w-full",variant:"gradient",type:"submit","is-loading":n.isLoading},{default:f(()=>[_(" Увійти ")]),_:1},8,["is-loading"])],32))}},F={key:0,class:"text-red-500"},D={__name:"LoginView",setup(d){const l=x(),{isLoading:n,error:s,mutation:e}=y({mutationFn:r=>{L.login(r)},onSuccess:()=>{l.replace("/map")}});return(r,a)=>(m(),u(v,null,[i(B,{onSubmit:o(e),"is-loading":o(n)},null,8,["onSubmit","is-loading"]),o(s)?(m(),u("div",F,w(o(s).message),1)):V("",!0)],64))}};export{D as default};