var j=Object.defineProperty,A=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var M=(e,s,o)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,C=(e,s)=>{for(var o in s||(s={}))F.call(s,o)&&M(e,o,s[o]);if(O)for(var o of O(s))R.call(s,o)&&M(e,o,s[o]);return e},I=(e,s)=>A(e,N(s));import{o as l,c as r,a as g,p as S,b as H,d as t,r as b,n as f,e as h,f as W,g as v,w,T as k,h as P,i as u,F as L,j as Z,t as U,k as $,l as B}from"./vendor.1fadb2e3.js";const D=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};D();var x=(e,s)=>{const o=e.__vccOpts||e;for(const[p,i]of s)o[p]=i;return o};const z={props:{contactOpenUser:{type:Boolean,default:!1}},methods:{openCloseHeader(){this.$emit("open-close-header")}}},V=e=>(S("data-v-47043f6b"),e=e(),H(),e),G={key:0,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},J=V(()=>t("path",{d:"M16.5303 8.53033C16.8232 8.23744 16.8232 7.76256 16.5303 7.46967C16.2374 7.17678 15.7626 7.17678 15.4697 7.46967L16.5303 8.53033ZM7.46967 15.4697C7.17678 15.7626 7.17678 16.2374 7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303L7.46967 15.4697ZM8.53034 7.46967C8.23745 7.17678 7.76257 7.17678 7.46968 7.46967C7.17678 7.76256 7.17678 8.23744 7.46968 8.53033L8.53034 7.46967ZM15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303C16.8232 16.2374 16.8232 15.7626 16.5303 15.4697L15.4697 16.5303ZM15.4697 7.46967L7.46967 15.4697L8.53033 16.5303L16.5303 8.53033L15.4697 7.46967ZM7.46968 8.53033L15.4697 16.5303L16.5303 15.4697L8.53034 7.46967L7.46968 8.53033ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z",fill:"#aee5fa"},null,-1)),Q=[J],q={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=V(()=>t("path",{d:"M19.25 21C19.25 21.4142 19.5858 21.75 20 21.75C20.4142 21.75 20.75 21.4142 20.75 21H19.25ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM9 11.75C9.41421 11.75 9.75 11.4142 9.75 11C9.75 10.5858 9.41421 10.25 9 10.25V11.75ZM4 10.25C3.58579 10.25 3.25 10.5858 3.25 11C3.25 11.4142 3.58579 11.75 4 11.75V10.25ZM19.25 9C19.25 9.41421 19.5858 9.75 20 9.75C20.4142 9.75 20.75 9.41421 20.75 9H19.25ZM8 21.75C8.41421 21.75 8.75 21.4142 8.75 21C8.75 20.5858 8.41421 20.25 8 20.25V21.75ZM15.75 3C15.75 2.58579 15.4142 2.25 15 2.25C14.5858 2.25 14.25 2.58579 14.25 3H15.75ZM14.25 7C14.25 7.41421 14.5858 7.75 15 7.75C15.4142 7.75 15.75 7.41421 15.75 7H14.25ZM9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 7C8.25 7.41421 8.58579 7.75 9 7.75C9.41421 7.75 9.75 7.41421 9.75 7H8.25ZM17.25 13C17.25 13.6904 16.6904 14.25 16 14.25V15.75C17.5188 15.75 18.75 14.5188 18.75 13H17.25ZM16 14.25C15.3096 14.25 14.75 13.6904 14.75 13H13.25C13.25 14.5188 14.4812 15.75 16 15.75V14.25ZM14.75 13C14.75 12.3096 15.3096 11.75 16 11.75V10.25C14.4812 10.25 13.25 11.4812 13.25 13H14.75ZM16 11.75C16.6904 11.75 17.25 12.3096 17.25 13H18.75C18.75 11.4812 17.5188 10.25 16 10.25V11.75ZM14 18.75H18V17.25H14V18.75ZM19.25 20V21H20.75V20H19.25ZM12.75 21V20H11.25V21H12.75ZM18 18.75C18.6904 18.75 19.25 19.3096 19.25 20H20.75C20.75 18.4812 19.5188 17.25 18 17.25V18.75ZM14 17.25C12.4812 17.25 11.25 18.4812 11.25 20H12.75C12.75 19.3096 13.3096 18.75 14 18.75V17.25ZM9 10.25H4V11.75H9V10.25ZM4.75 19V7H3.25V19H4.75ZM6 20.25C5.30964 20.25 4.75 19.6904 4.75 19H3.25C3.25 20.5188 4.48122 21.75 6 21.75V20.25ZM6 4.25C4.48122 4.25 3.25 5.48122 3.25 7H4.75C4.75 6.30964 5.30964 5.75 6 5.75V4.25ZM20.75 9V7H19.25V9H20.75ZM18 5.75C18.6904 5.75 19.25 6.30964 19.25 7H20.75C20.75 5.48122 19.5188 4.25 18 4.25V5.75ZM18 4.25H6V5.75H18V4.25ZM6 21.75H8V20.25H6V21.75ZM14.25 3V7H15.75V3H14.25ZM8.25 3V7H9.75V3H8.25Z",fill:"#aee5fa"},null,-1)),X=[K];function Y(e,s,o,p,i,a){return l(),r("div",{class:"fixed",onClick:s[0]||(s[0]=(...m)=>a.openCloseHeader&&a.openCloseHeader(...m))},[o.contactOpenUser?(l(),r("svg",G,Q)):o.contactOpenUser?g("",!0):(l(),r("svg",q,X))])}var tt=x(z,[["render",Y],["__scopeId","data-v-47043f6b"]]),et="/portfolio/assets/tj-icon.22afb52b.svg",st="/portfolio/assets/port.e2114c2d.jpg";const it={components:{ContactButton:tt},created(){window.addEventListener("resize",this.windowResizeHandler),this.windowInnerWidth=window.innerWidth,window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()},mounted(){},data(){return{contactOpenMediaQ:!1,contactOpenUser:!1,windowInnerWidth:0}},watch:{initialHeaderStyle(e,s){e!=s&&window.removeEventListener("resize",this.windowResizeHandler)}},methods:{windowResizeHandler(e){},getWindowWidth(){this.windowInnerWidth=window.innerWidth,window.innerWidth>=790&&this.contactOpenUser?(this.contactOpenMediaQ=!0,this.contactOpenUser=!1):window.innerWidth<=790&&!this.contactOpenUser&&(this.contactOpenMediaQ=!1,this.contactOpenUser=!1)},openCloseHeader(){this.contactOpenUser=!this.contactOpenUser,console.log("thisthis2",this.contactOpenUser)}},computed:{currentItem(){return this.$store.state.currentItem},isFirstItem(){return this.currentItem!=0&&this.windowInnerWidth>=790?{opacity:"0.2"}:{opacity:"1"}},isFullscreen(){return this.contactOpenUser?{"background-color":"#070131","padding-top":"30%","padding-left":"20%",height:"100%"}:{"padding-top":"unset","padding-left":"10px"}},initialHeaderStyle(){return this.$store.state.initialHeaderStyle}},destroyed(){window.removeEventListener("resize",this.windowResizeHandler),window.removeEventListener("resize",this.getWindowWidth)}},_=e=>(S("data-v-7703ef29"),e=e(),H(),e),at={class:"top-contact"},nt=_(()=>t("span",{class:"presentation"},"TOBIAS JOHNSSON",-1)),lt=_(()=>t("span",{class:"presentation"},"DEVELOPER APP | WEB",-1)),rt=[nt,lt],ot=_(()=>t("span",null,"E-MAIL",-1)),ct=_(()=>t("span",null,"tobb-on@hotmail.com",-1)),dt=[ot,ct],ht=_(()=>t("span",null,"PHONE",-1)),pt=_(()=>t("span",null,"0704249358",-1)),mt=[ht,pt];function gt(e,s,o,p,i,a){const m=b("ContactButton");return l(),r("header",{class:f([a.initialHeaderStyle?"header-default":"initial-header"]),style:h(a.isFullscreen)},[t("div",at,[t("img",{ref:"logo",class:f(a.initialHeaderStyle?"logo-size":"logo-size-initial"),style:h(a.isFirstItem),src:et},null,6),this.windowInnerWidth<=790?(l(),W(m,{key:0,onOpenCloseHeader:a.openCloseHeader,contactOpenUser:i.contactOpenUser},null,8,["onOpenCloseHeader","contactOpenUser"])):g("",!0)]),this.windowInnerWidth>=790||i.contactOpenUser?(l(),r("div",{key:0,class:f("logo-message direction-flex"),style:h(a.isFirstItem)},rt,4)):g("",!0),this.windowInnerWidth>=790||i.contactOpenUser?(l(),r("div",{key:1,class:"in-columns mail",style:h(a.isFirstItem)},dt,4)):g("",!0),this.windowInnerWidth>=790||i.contactOpenUser?(l(),r("div",{key:2,class:"in-columns tel",style:h(a.isFirstItem)},mt,4)):g("",!0),this.windowInnerWidth>=790||i.contactOpenUser?(l(),r("div",{key:3,class:"in-columns tel",style:h(a.isFirstItem)},[t("img",{class:f(a.initialHeaderStyle?"":"toppi"),style:{"border-radius":"50%",width:"40px"},src:st},null,2)],4)):g("",!0)],6)}var ut=x(it,[["render",gt],["__scopeId","data-v-7703ef29"]]),n="/portfolio/assets/arrow-btn-forward.c5f01bce.svg",ft="/portfolio/assets/react-icon.38fc13c7.svg",vt="/portfolio/assets/vue-icon.c3be6e65.svg",_t="/portfolio/assets/css-icon.951c4e3d.svg",xt="/portfolio/assets/swift-icon.037fb0d9.svg",yt="/portfolio/assets/mobile-icon.b5b0c1d7.svg",wt="/portfolio/assets/desktop-icon.0cf553ba.svg",kt="/portfolio/assets/screen-icon.6e481aef.svg",bt="/portfolio/assets/linkedin.48824dbc.svg",T="/portfolio/assets/arrow-btn-back.6f7078d6.svg",d="/portfolio/assets/git-icon.027aa9d4.svg";const Ct={components:{},data(){return{fullScreenIndex:0,carouselPositions:null,fullScreenContainer:0,onFirstItem:!0,iUpdate:null,isOnLastItem:!1,clickMove:!1,s:null,direction:"next",windowInnerWidth:0,latestProjects:!0,appAndOtherProjects:!0}},watch:{currentItem(e,s){this.initialHeaderStyleOnce()},fromNav(e,s){e.fromNav&&this.changeFullPageClickFromNav(e.itemIndex)}},methods:{initialHeaderStyleOnce(){this.initialHeaderStyle||this.$store.commit("changeHeaderStyleOnce")},getWindowWidth(){this.windowInnerWidth=window.innerWidth},getFullPagePositions(){let e=[];for(const s in this.$refs)s.includes("fullscreen")&&e.push([this.$refs[s].offsetTop,this.$refs[s].offsetTop+this.$refs[s].offsetHeight]);this.fullScreenContainer=this.$refs.container.offsetHeight-1,this.carouselPositions=e},getFullPageElements(){let e=[];return Object.keys(this.$refs).forEach(s=>{s.includes("animate")&&e.push(this.$refs[s])}),e},changeFullPageClickFromNav(e){clearTimeout(this.s),this.clickMove=!0,this.$store.commit("changeCurrentItem",e);let s=this.getFullPageElements();s[e].classList.value!="animateup"&&(s[e].classList.value="animateup"),this.scrollTo(e),this.disableBtnsHandler(e),this.s=setTimeout(()=>{this.clickMove=!1},1e3)},changeFullPageClick(e){clearTimeout(this.s),this.clickMove=!0;let o=this.$refs.container.scrollTop+this.fullScreenContainer;for(let p=0;p<this.carouselPositions.length;p++)if(o>this.carouselPositions[p][0]&&o<this.carouselPositions[p][1]){if(e==="next"&&this.currentItem<=this.carouselPositions.length-1){this.$store.commit("changeCurrentItem",this.currentItem+1);let i=this.getFullPageElements();i[this.currentItem].classList.value!="animateup"&&this.currentItem!=0&&(i[this.currentItem].classList.value="animateup"),this.scrollTo(this.currentItem)}else if(e==="previous"&&this.currentItem>=0){this.$store.commit("changeCurrentItem",this.currentItem-1),this.scrollTo(this.currentItem);let i=this.getFullPageElements();i[this.currentItem].classList.value!="animateup"&&this.currentItem!=0&&(i[this.currentItem].classList.value="animateup")}this.disableBtnsHandler(this.currentItem)}this.s=setTimeout(()=>{this.clickMove=!1},800)},changeFullPageScroll(e){if(!this.clickMove){let o=this.$refs.container.scrollTop+this.fullScreenContainer;for(let p=0;p<this.carouselPositions.length;p++)if(o>this.carouselPositions[p][0]&&o<this.carouselPositions[p][1]){this.$store.commit("changeCurrentItem",p);let i=this.getFullPageElements();i[this.currentItem].classList.value!=="animateup"&&this.currentItem!=0&&(i[this.currentItem].classList.value="animateup"),this.iUpdate=this.currentItem,this.disableBtnsHandler(this.currentItem)}}},disableBtnsHandler(e){this.isOnLastItem=!1,this.onFirstItem=!1,e>=this.carouselPositions.length-1&&(this.isOnLastItem=!0),e<=0&&(this.onFirstItem=!0)},scrollTo(e){this.$refs.container.scrollTo({top:this.carouselPositions[e][0],behavior:"smooth"})},scrollHandler(e){window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(()=>{let s=this.$refs.container.scrollTop;this.oldScrollValue-s<0?this.direction="next":this.oldScrollValue-s>0&&(this.direction="previous"),this.oldScrollValue=s,this.changeFullPageScroll(this.direction)},20)}},computed:{currentItem(){return this.$store.state.currentItem},fromNav(){return this.$store.state.fromNavObj},initialHeaderStyle(){return this.$store.state.initialHeaderStyle},topMarginStyles(){return this.initialHeaderStyle?this.windowInnerWidth<=790?{"margin-top":"12vh"}:{"margin-top":"20vh"}:this.windowInnerWidth<=790?{"margin-top":"18vh"}:{"margin-top":"15vh","padding-top":"65px"}}},mounted(){this.getFullPageElements(),this.getFullPagePositions(),window.addEventListener("resize",this.getFullPagePositions),this.$refs.container.addEventListener("scroll",this.scrollHandler,!1)},created(){this.windowInnerWidth=window.innerWidth,window.addEventListener("resize",this.getWindowWidth)},destroyed(){window.removeEventListener("resize",this.getFullPagePositions),window.removeEventListener("resize",this.getWindowWidth),this.$refs.container.removeEventListener("scroll",this.scrollHandler,!1)}},c=e=>(S("data-v-1fd83658"),e=e(),H(),e),It=["fill"],St=["fill"],Ht={class:"container y mandatory-scroll-snapping",ref:"container"},Pt={class:"fullscreen-0",ref:"fullscreen0"},Et={class:"screen-0"},Ot={ref:"animate0"},Mt=P('<div class="first-page-header" data-v-1fd83658><h1 data-v-1fd83658>SKILLS &amp; INFO</h1></div><div class="quote" data-v-1fd83658>Hard working and creativeperson with a keen eye for details</div><a href="https://github.com/tjn06/portfolio/raw/main/assets/tobias-johnsson-cv.pdf" data-v-1fd83658><span class="quote" data-v-1fd83658>Download my CV ( PDF )</span><img style="height:10px;margin-left:8px;margin-top:2px;" src="'+n+'" data-v-1fd83658></a>',3),Lt=P('<li class="flex-item" data-v-1fd83658>SwiftUI/UIKit</li><li class="flex-item" data-v-1fd83658>React Native</li><li class="flex-item" data-v-1fd83658>XCode</li><li class="flex-item" data-v-1fd83658>Android Studio</li><li class="flex-item" data-v-1fd83658>Javascript</li><li class="flex-item" data-v-1fd83658>Vue</li><li class="flex-item" data-v-1fd83658>React</li><li class="flex-item" data-v-1fd83658>Next</li><li class="flex-item" data-v-1fd83658>Redux</li><li class="flex-item" data-v-1fd83658>Git</li><li class="flex-item" data-v-1fd83658>Scrum</li><li class="flex-item" data-v-1fd83658>Agile</li><li class="flex-item" data-v-1fd83658>Prototypes</li><li class="flex-item" data-v-1fd83658>Jira</li><li class="flex-item" data-v-1fd83658>Figma</li><li class="flex-item" data-v-1fd83658>Illustrator</li><li class="flex-item" data-v-1fd83658>Photoshop</li><li class="flex-item" data-v-1fd83658>Jira</li><li class="flex-item" data-v-1fd83658>E-mail-templates</li><li class="flex-item" data-v-1fd83658>Illustrator</li><li class="flex-item" data-v-1fd83658>Photoshop</li><li class="flex-item" data-v-1fd83658>Photoshop</li><li class="flex-item" data-v-1fd83658>Ajax</li><li class="flex-item" data-v-1fd83658>Axios</li><li class="flex-item" data-v-1fd83658>MERN-stack</li><li class="flex-item" data-v-1fd83658>JAVA</li><li class="flex-item" data-v-1fd83658>C#</li><li class="flex-item" data-v-1fd83658>HTML/CSS</li><li class="flex-item" data-v-1fd83658>MongoDB</li><li class="flex-item" data-v-1fd83658>SQL</li><li class="flex-item" data-v-1fd83658>Firebase</li>',31),Vt=[Lt],Tt={class:"skill-item-container"},jt=c(()=>t("span",{class:"skill-title"},"FAVOURITES",-1)),At={class:"skill-item-flex"},Nt={class:"skill-item-container"},Ft=c(()=>t("span",{class:"skill-title"},"RESPONSIVENESS",-1)),Rt={class:"skill-item-flex"},Wt={ref:"fullscreen1"},Zt={class:"screen-1"},Ut={class:"initial-hidden",ref:"animate1"},$t=P('<div class="top-header-container" data-v-1fd83658><h1 style="margin-bottom:5px;" data-v-1fd83658>EXPERIENCE</h1><div data-v-1fd83658></div></div><a href="https://www.linkedin.com/in/tobias-johnsson-4758711a2/" target="_blanc" class="sub-header-container" data-v-1fd83658><span class="check" data-v-1fd83658>Visit my LinkedIn for more info</span><img style="width:20px;margin-left:8px;" src="'+bt+'" data-v-1fd83658><img style="height:10px;margin-left:8px;margin-top:2px;" src="'+n+'" data-v-1fd83658></a><ul data-v-1fd83658><li data-v-1fd83658><span data-v-1fd83658>ICT Scandinavia </span><span class="extra-intern" data-v-1fd83658> *INTERNSHIP </span><div class="date" data-v-1fd83658> oct. 2020\u2013dec. 2020</div><div class="tasks" data-v-1fd83658>React Native(Expo)</div></li><li data-v-1fd83658><span data-v-1fd83658>Aplication Dev Android, Iphone </span><span class="extra-edu" data-v-1fd83658> *EDUCATION</span><div class="date" data-v-1fd83658> aug. 2021\u2013ongoing</div><div class="tasks" data-v-1fd83658>IT-H\xF6gskolan </div></li><li data-v-1fd83658><span data-v-1fd83658>Oljemagasinet </span><span class="extra-intern" data-v-1fd83658> *INTERNSHIP </span><div class="date" data-v-1fd83658> oct. 2020\u2013dec. 2020</div><div class="tasks" data-v-1fd83658>Vue.js , BootstrapVue, Adobe Illustrator, Photoshop...</div></li><li data-v-1fd83658><span data-v-1fd83658>Kvdbil </span><span class="extra-intern" data-v-1fd83658> *INTERNSHIP </span><div class="date" data-v-1fd83658> okt. 2020\u2013dec. 2020</div><div class="tasks" data-v-1fd83658>React, Next.js, GraphQL</div></li><li data-v-1fd83658><span data-v-1fd83658> Front-end </span><span class="extra-intern" data-v-1fd83658> *EDUCATION</span><div class="date" data-v-1fd83658> sep. 2019\u2013june 2021</div><div class="tasks" data-v-1fd83658>NBI/Handelsakademin(EC)</div></li></ul>',3),Bt=[$t],Dt={ref:"fullscreen2"},zt={class:"screen-2"},Gt={class:"initial-hidden",ref:"animate2"},Jt={class:"top-header-container"},Qt=c(()=>t("h1",{style:{"margin-bottom":"5px"}},"WEB PROJECTS",-1)),qt={key:0},Kt={key:1},Xt={key:2,style:{height:"12px","margin-left":"8px"},src:n},Yt={key:3,style:{height:"11px","margin-left":"8px"},src:T},te=c(()=>t("a",{href:"https://github.com/tjn06",target:"_blanc",class:"sub-header-container"},[t("span",{class:"check"},"Visit my github for more projects"),t("img",{style:{width:"20px","margin-left":"8px"},src:d}),t("img",{style:{height:"12px","margin-left":"8px","margin-top":"2px"},src:n})],-1)),ee={key:0},se=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://timata2022.github.io/#/",target:"_blank"},[u("Timata"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"}," *IN PROGRESS ")]),t("a",{href:"https://github.com/ehildingg/workout-app",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"VUE"),t("div",{class:"tasks"},"Workout-app")],-1)),ie=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://tjn06.github.io/hockey/#/",target:"_blank"},[u("JUST NHL STATS"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/hockey",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"VUE"),t("div",{class:"tasks"},"NHL player stats")],-1)),ae=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://lackraklor.vercel.app/",target:"_blank"},[u("L\xE4ckra Klor"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"}," *IN PROGRESS ")]),t("a",{href:"https://github.com/tjn06/lackraklor",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"NEXT(React)"),t("div",{class:"tasks"},"Nail salon")],-1)),ne=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://tjn06.github.io/skiapp/",target:"_blank"},[u("SKI-GUIDE"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/skiapp",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"REACT"),t("div",{class:"tasks"},"Guide to choosing ski length")],-1)),le=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://tjn06.github.io/cities-api/",target:"_blank"},[u("Cities-API"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/cities-api",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"VUE"),t("div",{class:"tasks"},"Api-requests. GET,POST,PUT,DELETE")],-1)),re=[se,ie,ae,ne,le],oe={key:0},ce=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://hannamollergren.github.io/Projektarbete-HTML-CSS/",target:"_blank"},[u("ISS"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/Projektarbete-HTML-CSS",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"VANILLA JS"),t("div",{class:"tasks"},"Fantasy space-shop")],-1)),de=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://tjn06.github.io/Starwars/",target:"_blank"},[u("STARWARS database"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/Starwars",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"REACT"),t("div",{class:"tasks"},"Starwars data")],-1)),he=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://agustin-martinez.github.io/GameOfGlenn/",target:"_blank"},[u("Game of Glenn"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/GameOfGlenn",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"REACT"),t("div",{class:"tasks"},"Fantasy-world with characters")],-1)),pe=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://tjn06.github.io/library/",target:"_blank"},[u("CMS drag and drop"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"}," *IN PROGRESS ")]),t("a",{href:"https://github.com/tjn06/library",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"REACT"),t("div",{class:"tasks"},"Redigera/edit av/p\xE5 in bottom")],-1)),me=c(()=>t("li",null,[t("div",{class:"separator"},[t("div",null,[t("span",null,[t("a",{href:"https://tjn06.github.io/codesnippets/",target:"_blank"},[u("Coding-snippets"),t("img",{style:{height:"10px",margin:"2px 4px 0 4px"},src:n})])]),t("span",{class:"extra-intern"})]),t("a",{href:"https://github.com/tjn06/codesnippets",target:"_blank"},[t("img",{style:{width:"15px"},src:d}),t("img",{style:{height:"14px",margin:"0px 0 0 4px"},src:n})])]),t("div",{class:"date"},"VUE"),t("div",{class:"tasks"},"Add, report, delete vote on snippets")],-1)),ge=[ce,de,he,pe,me],ue={ref:"fullscreen3"},fe={class:"screen-3"},ve={class:"initial-hidden",ref:"animate3"},_e={class:"top-header-container"},xe={key:0,style:{"margin-bottom":"5px"}},ye={key:1,style:{"margin-bottom":"5px"}},we={key:0},ke={key:1},be={key:2,style:{height:"11px","margin-left":"8px"},src:n},Ce={key:3,style:{height:"11px","margin-left":"8px"},src:T},Ie=c(()=>t("a",{href:"https://github.com/tjn06",target:"_blanc",class:"sub-header-container"},[t("span",{class:"check"},"Visit my github for more projects"),t("img",{style:{width:"20px","margin-left":"8px"},src:d}),t("img",{style:{height:"10px","margin-left":"8px","margin-top":"2px"},src:n})],-1)),Se={key:0},He=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/justnhlstats",target:"_blank"},[t("span",null,"Just NHL stats"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"REACT NATIVE/CROSSPLATFORM"),t("div",{class:"tasks"},"Nhl player stats")],-1)),Pe=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/EducationSwiftUI",target:"_blank"},[t("span",null,"Westcoast education 1.1"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"SWIFT/UI"),t("div",{class:"tasks"},"Simple app, lists, images")],-1)),Ee=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/Westcoast-Education",target:"_blank"},[t("span",null,"Westcoast education 1.0 "),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"SWIFT"),t("div",{class:"tasks"},"Simple app, lists, images")],-1)),Oe=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/Moriawe/Smultronstallen",target:"_blank"},[t("span",null,"Smultronst\xE4llen"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"ANDROID/JAVA"),t("div",{class:"tasks"},"Find, add, delete places on map")],-1)),Me=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/Hangman",target:"_blank"},[t("span",null,"Hangman"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"ANDROID/JAVA"),t("div",{class:"tasks"},"Simple hangman-game")],-1)),Le=[He,Pe,Ee,Oe,Me],Ve={key:0},Te=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/dice-game-java",target:"_blank"},[t("span",null,"Dice-game"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"JAVA"),t("div",{class:"tasks"},"Text based dice-game")],-1)),je=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/fantasy-game-java",target:"_blank"},[t("span",null,"Fantasy-game"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"JAVA"),t("div",{class:"tasks"},"Text based adventure")],-1)),Ae=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/database",target:"_blank"},[t("span",null,"Database-stuff"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"MONGODB/SQL"),t("div",{class:"tasks"},"Mongodb-querys, SQL-querys, EA-diagram")],-1)),Ne=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://www.figma.com/file/pi2b7jXMMV9jm4FPiRoHB9/EEZER?node-id=0%3A1",target:"_blank"},[t("span",null,"Ezeer Prototype"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"Figma"),t("div",{class:"tasks"},"Prototype/wirefram figma")],-1)),Fe=c(()=>t("li",null,[t("a",{class:"items-row",href:"https://github.com/tjn06/Boatshop",target:"_blank"},[t("span",null,"Boatshop"),t("img",{style:{width:"15px",margin:"0px 5px 0 5px"},src:d}),t("img",{style:{height:"12px",margin:"0px 0px 0 0px"},src:n})]),t("div",{class:"date"},"MONGODB/VANILLA-JS"),t("div",{class:"tasks"},"MongoDB with frontend")],-1)),Re=[Te,je,Ae,Ne,Fe];function We(e,s,o,p,i,a){return l(),r("div",null,[(l(),r("svg",{style:h({pointerEvents:i.onFirstItem?"none":"auto",cursor:i.isOnLastItem?"auto":"pointer"}),onClick:s[0]||(s[0]=m=>a.changeFullPageClick("previous","frombtn",!1)),class:"up-arrow",width:"39",height:"25",viewBox:"0 0 39 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M19.5 -1.2214e-06L-6.84596e-07 25C-6.84596e-07 25 11.729 20.7483 19.5 20.7483C27.271 20.7483 39 25 39 25L19.5 -1.2214e-06Z",fill:i.onFirstItem?"#6F747E20":"#aee5fa"},null,8,It)],4)),(l(),r("svg",{style:h({pointerEvents:i.isOnLastItem?"none":"auto",cursor:i.isOnLastItem?"auto":"pointer"}),onClick:s[1]||(s[1]=m=>a.changeFullPageClick("next","frombtn",!1)),class:"down-arrow",width:"39",height:"25",viewBox:"0 0 39 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M19.5 25L39 -8.48791e-06C39 -8.48791e-06 27.271 4.25169 19.5 4.25169C11.729 4.2517 -4.65639e-06 -1.66893e-06 -4.65639e-06 -1.66893e-06L19.5 25Z",fill:i.isOnLastItem?"#6F747E20":"#aee5fa"},null,8,St)],4)),t("div",Ht,[t("section",Pt,[t("div",Et,[t("div",{style:h(a.topMarginStyles),class:f(a.initialHeaderStyle?"fullscreen-content":"initial-desktop")},[t("article",Ot,[Mt,t("ul",{class:"flex-container wrap",style:h(a.initialHeaderStyle?{"margin-bottom":"2vh","margin-top":"1rem"}:{"margin-bottom":"0vh","margin-top":"3.5rem"})},Vt,4),t("div",{class:"skills",style:h(a.initialHeaderStyle?{"margin-bottom":"8vh","margin-top":"2.8rem"}:{"margin-bottom":"8vh","margin-top":"2.3rem"})},[t("div",Tt,[jt,t("div",At,[t("img",{src:ft,style:h({height:"25px",opacity:"0.7"})},null,4),t("img",{src:vt,style:h({height:"25px",opacity:"0.7"})},null,4),t("img",{src:_t,style:h({height:"25px",opacity:"0.7"})},null,4),t("img",{src:xt,style:h({height:"25px",opacity:"0.7"})},null,4)])]),t("div",Nt,[Ft,t("div",Rt,[t("img",{src:yt,style:h({height:"25px",opacity:"0.7"})},null,4),t("img",{src:wt,style:h({height:"25px",opacity:"0.7"})},null,4),t("img",{src:kt,style:h({height:"25px",opacity:"0.7"})},null,4)])])],4)],512)],6)])],512),t("section",Wt,[t("div",Zt,[t("div",{style:h(a.topMarginStyles),class:f("fullscreen-content")},[t("article",Ut,Bt,512)],4)])],512),t("section",Dt,[t("div",zt,[t("div",{style:h(a.topMarginStyles),class:f("fullscreen-content")},[t("article",Gt,[t("div",Jt,[Qt,t("div",{onClick:s[2]||(s[2]=()=>this.latestProjects=!this.latestProjects),class:"forward-back-btn"},[i.latestProjects?(l(),r("span",qt,"OLD")):(l(),r("span",Kt,"LATEST")),i.latestProjects?(l(),r("img",Xt)):(l(),r("img",Yt))])]),te,v(k,{name:"fade"},{default:w(()=>[i.latestProjects?(l(),r("ul",ee,re)):g("",!0)]),_:1}),v(k,{name:"fade"},{default:w(()=>[i.latestProjects?g("",!0):(l(),r("ul",oe,ge))]),_:1})],512)],4)])],512),t("section",ue,[t("div",fe,[t("div",{style:h(a.topMarginStyles),class:f("fullscreen-content")},[t("article",ve,[t("div",_e,[i.appAndOtherProjects?(l(),r("h1",xe,"APP PROJECTS")):(l(),r("h1",ye,"OTHER PROJECTS")),t("div",{onClick:s[3]||(s[3]=()=>this.appAndOtherProjects=!this.appAndOtherProjects),class:"forward-back-btn"},[i.appAndOtherProjects?(l(),r("span",we,"OTHER")):(l(),r("span",ke,"APP")),i.appAndOtherProjects?(l(),r("img",be)):(l(),r("img",Ce))])]),Ie,v(k,{name:"fade"},{default:w(()=>[i.appAndOtherProjects?(l(),r("ul",Se,Le)):g("",!0)]),_:1}),v(k,{name:"fade"},{default:w(()=>[i.appAndOtherProjects?g("",!0):(l(),r("ul",Ve,Re))]),_:1})],512)],4)])],512)],512)])}var Ze=x(Ct,[["render",We],["__scopeId","data-v-1fd83658"]]);const Ue={props:{},data(){return{categories:["HOME","EXPERIENCE","WEB","APP/OTHER"]}},methods:{scrollToPage(e,s){this.$store.commit("changeCurrentItemFromNav",{index:e,fromNav:s})}},computed:{currentItem(){return this.$store.state.currentItem}}},$e={class:"nav-content"},Be={class:"nav-item-column"},De=["onClick"];function ze(e,s,o,p,i,a){return l(),r("nav",null,[t("div",$e,[(l(!0),r(L,null,Z(i.categories,(m,y)=>(l(),r("div",Be,[t("span",{onClick:E=>a.scrollToPage(y,!0),class:f(["nav-title",a.currentItem===y?"nav-active":"nav-unactive"])},U(m),11,De)]))),256))])])}var Ge=x(Ue,[["render",ze],["__scopeId","data-v-fa7be98c"]]);const Je={components:{Header:ut,MainContent:Ze,Footer:Ge}};function Qe(e,s,o,p,i,a){const m=b("Header"),y=b("MainContent"),E=b("Footer");return l(),r(L,null,[v(m,{msg:"Hello World!"}),v(y),v(E)],64)}var qe=x(Je,[["render",Qe]]);const Ke={changeCurrentItemFromNav(e,s){e.fromNavObj=I(C({},e.fromNavOb),{itemIndex:s.index,fromNav:s.fromNav})},changeCurrentItem(e,s){e.currentItem=s,e.fromNavObj=I(C({},e.currentItem),{itemIndex:s,fromNav:!1})},changeHeaderStyleOnce(e){e.initialHeaderStyle=!0}},Xe={currentItem:0,fromNavObj:{itemIndex:0,fromNav:!1},initialHeaderStyle:!1},Ye={};var ts=$({mutations:Ke,state:Xe,getters:Ye,strict:!0});B(qe).use(ts).mount("#app");
