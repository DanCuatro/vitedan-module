import"./index-DJO9vBfz.js";const{useParameter:f,addons:p,useEffect:R,useMemo:N}=__STORYBOOK_MODULE_PREVIEW_API__;var O=Object.defineProperty,v=(e,t)=>{for(var r in t)O(e,r,{get:t[r],enumerable:!0})},A={};v(A,{initializeThemeState:()=>_,pluckThemeFromContext:()=>T,useThemeParameters:()=>h});var c="themes",M=`storybook/${c}`,L="theme",P={},g={REGISTER_THEMES:`${M}/REGISTER_THEMES`};function T({globals:e}){return e[L]||""}function h(){return f(c,P)}function _(e,t){p.getChannel().emit(g.REGISTER_THEMES,{defaultTheme:t,themes:e})}var k="html",m=e=>e.split(" ").filter(Boolean),D=({themes:e,defaultTheme:t,parentSelector:r=k})=>(_(Object.keys(e),t),(u,d)=>{let{themeOverride:s}=h(),o=T(d);return R(()=>{let E=s||o||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([n])=>n!==E).forEach(([n,S])=>{let i=m(S);i.length>0&&a.classList.remove(...i)});let l=m(e[E]);l.length>0&&a.classList.add(...l)},[s,o]),u()});const b={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[D({themes:{light:"",dark:"dark"},defaultTheme:"light"})]};export{b as default};