(self.webpackChunkfrost_flow_client=self.webpackChunkfrost_flow_client||[]).push([["src_app_core_layouts_default_default_component_ts"],{8253:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DefaultComponent:()=>E,DefaultLayoutModule:()=>R});var o=n(9713);(0,o.X$)("routeAnimations",[(0,o.eR)("* <=> *",[(0,o.oB)({position:"relative"}),(0,o.IO)(":enter, :leave",[(0,o.oB)({position:"absolute",top:0,left:0,width:"100%"})]),(0,o.IO)(":enter",[(0,o.oB)({left:"-100%"})]),(0,o.IO)(":leave",(0,o.pV)(),{optional:!0}),(0,o.ru)([(0,o.IO)(":leave",[(0,o.jt)("300ms ease-out",(0,o.oB)({left:"100%"}))],{optional:!0}),(0,o.IO)(":enter",[(0,o.jt)("300ms ease-out",(0,o.oB)({left:"0%"}))])]),(0,o.IO)(":enter",(0,o.pV)())]),(0,o.eR)("* <=> FilterPage",[(0,o.oB)({position:"relative"}),(0,o.IO)(":enter, :leave",[(0,o.oB)({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),(0,o.IO)(":enter",[(0,o.oB)({left:"-100%"})],{optional:!0}),(0,o.IO)(":leave",(0,o.pV)()),(0,o.ru)([(0,o.IO)(":leave",[(0,o.jt)("200ms ease-out",(0,o.oB)({left:"100%"}))],{optional:!0}),(0,o.IO)(":enter",[(0,o.jt)("300ms ease-out",(0,o.oB)({left:"0%"}))],{optional:!0})]),(0,o.IO)(":enter",(0,o.pV)())])]);const i=(0,o.X$)("routeAnimations",[(0,o.eR)("* <=> *",[(0,o.IO)(":enter",[(0,o.oB)({opacity:0})],{optional:!0}),(0,o.IO)(":leave",[(0,o.oB)({opacity:1}),(0,o.jt)("0.3s",(0,o.oB)({opacity:0}))],{optional:!0}),(0,o.IO)(":enter",[(0,o.oB)({opacity:0}),(0,o.jt)("0.3s",(0,o.oB)({opacity:1}))],{optional:!0})])]),a=((0,o.X$)("routeAnimations",[(0,o.eR)("* <=> *",[(0,o.IO)(":enter, :leave",[(0,o.oB)({position:"absolute",left:0,width:"100%",opacity:0,transform:"scale(0) translateY(100%)"})]),(0,o.IO)(":enter",[(0,o.jt)("600ms ease",(0,o.oB)({opacity:1,transform:"scale(1) translateY(0)"}))])])]),(0,o.X$)("toggleLeft",[(0,o.eR)(":enter",[(0,o.oB)({transform:"translateX(-100%)",opacity:.5}),(0,o.jt)("0.25s linear",(0,o.oB)({transform:"!",opacity:"!"}))]),(0,o.eR)(":leave",[(0,o.jt)("0.25s linear",(0,o.oB)({transform:"translateX(-100%)",opacity:.5}))])])),r=(0,o.X$)("toggleRight",[(0,o.eR)(":enter",[(0,o.oB)({"min-width":"0px",width:"0px",opacity:0,overflow:"hidden"}),(0,o.jt)("0.25s linear",(0,o.oB)({width:"!",opacity:1}))]),(0,o.eR)(":leave",[(0,o.jt)("0.25s ease-in",(0,o.oB)({"min-width":"0px",width:"0px",opacity:0,overflow:"hidden"}))])]),s=[{name:"entry",options:{order:5},menuItems:[{displayName:"Entry",name:"entry",route:""}]},{name:"episode",options:{order:5},menuItems:[{displayName:"Episode",name:"episode",menu:[{displayName:"Workspace",name:"workspace",route:"episode/workspace"}]}]},{name:"inventory",options:{order:7},menuItems:[{displayName:"Inventory",name:"inventory",menu:[{displayName:"Portal",name:"portal",route:"inv/portal"},{displayName:"Manager",name:"manager",route:"inv/manager"},{displayName:"Interface",name:"interface",route:"inv/interface"},{displayName:"Options",name:"options",route:"inv/options"}]}]}];var c=n(1116),l=n(91),u=n(3316);let p=(()=>{class t{constructor(){this.navigationLeftOpen=!1,this.navigationRightOpen=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n(9718),d=n(9666);let m=(()=>{class t{constructor(){this.menu=[],this.menu$=new d.x,this.menu$.subscribe(t=>{this.menu.some(e=>e.name==t.name)||(this.menu.push(t),this.menu.sort((t,e)=>{var n,o;return((null===(n=null==t?void 0:t.options)||void 0===n?void 0:n.order)||Number.MAX_SAFE_INTEGER)-((null===(o=null==e?void 0:e.options)||void 0===o?void 0:o.order)||Number.MAX_SAFE_INTEGER)}))})}add(t){this.menu$.next(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=n(8070);const f=["subMenu"];function h(t,e){1&t&&u._UZ(0,"hr")}const y=function(){return{"height.em":"1.2","width.em":"1.2"}};function x(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"span",7),u.TgZ(1,"svg-icon",8),u.NdJ("click",function(){u.CHM(t);const e=u.oxw(),n=e.$implicit,o=e.index;return u.oxw().toggleMenu(n,o)}),u.qZA(),u.qZA()}if(2&t){const t=u.oxw().$implicit,e=u.oxw();u.Tol(e.toggleStates[t.name]?"toggle expanded":"toggle"),u.xp6(1),u.Q6J("svgStyle",u.DdM(3,y))}}function O(t,e){if(1&t&&(u.TgZ(0,"div",9,10),u._UZ(2,"app-menu",11),u.qZA()),2&t){const t=u.oxw().$implicit,e=u.oxw();u.uIk("data-menu-name",t.name),u.xp6(2),u.Q6J("depth",e.depth+1)("menu",t.menu)}}function w(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div",2),u.TgZ(1,"div",3),u.YNc(2,x,2,4,"span",4),u.TgZ(3,"span",5),u.NdJ("click",function(){const e=u.CHM(t),n=e.$implicit,o=e.index;return u.oxw().action(n,o)}),u._uU(4),u.qZA(),u.qZA(),u.YNc(5,O,3,3,"div",6),u.qZA()}if(2&t){const t=e.$implicit;u.xp6(2),u.Q6J("ngIf",t.menu),u.xp6(2),u.hij(" ",t.displayName," "),u.xp6(1),u.Q6J("ngIf",t.menu)}}let b=(()=>{class t{constructor(t){this.router=t,this.depth=0,this.toggleStates={}}ngOnInit(){0!=this.depth&&this.depth++;const t=this.loadSectionState();for(const e in t)this.toggleStates[e]=t[e]}ngAfterViewInit(){this.initMenuState()}initMenuState(){const t=this.subMenus.toArray().map(t=>t.nativeElement);if(t.length>0){const e=this.loadSectionState();t.forEach(t=>{const n=t.getAttribute("data-menu-name"),o=e[n];o&&1==o?(t.style.height="auto",t.setAttribute("data-collapsed","false")):(t.style.height="0px",t.setAttribute("data-collapsed","true"))})}}toggleMenu({name:t},e){const n=this.subMenus.toArray()[e].nativeElement;"true"===n.getAttribute("data-collapsed")?(this.expandSection(n),this.saveSectionState(t),this.toggleStates[t]=!0):(this.collapseSection(n),this.saveSectionState(t),this.toggleStates[t]=!1)}action({route:t,routeParams:e,routeQuery:n},o){void 0!==t&&(""===t?this.router.navigate([t]):this.router.navigate([t,e||{}],{queryParams:n}))}collapseSection(t){const e=t.scrollHeight,n=t.style.transition;t.style.transition="",requestAnimationFrame(()=>{t.style.height=e+"px",t.style.transition=n,requestAnimationFrame(()=>{t.style.height="0px"})}),t.setAttribute("data-collapsed","true")}expandSection(t){t.style.height=t.scrollHeight+"px",t.ontransitionend=()=>{t.style.height="auto",t.ontransitionend=null},t.setAttribute("data-collapsed","false")}saveSectionState(t){let e=localStorage.getItem("navMenuState");e=e?JSON.parse(e):{},e[t]=!e[t]||!e[t],localStorage.setItem("navMenuState",JSON.stringify(e))}loadSectionState(){let t=localStorage.getItem("navMenuState");return t=t?JSON.parse(t):{},t}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(l.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-menu"]],viewQuery:function(t,e){if(1&t&&u.Gf(f,5),2&t){let t;u.iGM(t=u.CRH())&&(e.subMenus=t)}},inputs:{menu:"menu",depth:"depth"},decls:2,vars:2,consts:[[4,"ngIf"],["class","menu",4,"ngFor","ngForOf"],[1,"menu"],[1,"menu-item"],["class","icon interactive",3,"class",4,"ngIf"],[1,"text",3,"click"],["class","sub-menu",4,"ngIf"],[1,"icon","interactive"],["src","assets/svg/chevron-right-solid.svg",3,"svgStyle","click"],[1,"sub-menu"],["subMenu",""],[3,"depth","menu"]],template:function(t,e){1&t&&(u.YNc(0,h,1,0,"hr",0),u.YNc(1,w,6,3,"div",1)),2&t&&(u.Q6J("ngIf",0==e.depth),u.xp6(1),u.Q6J("ngForOf",e.menu))},directives:[c.O5,c.sg,v.bk,t],styles:["hr[_ngcontent-%COMP%]{width:100%;border:hsla(0,0%,100%,.5);border-bottom:2px solid hsla(0,0%,100%,.5)}.menu[_ngcontent-%COMP%]{flex-flow:column nowrap;overflow:hidden;height:auto;justify-content:flex-start;align-items:flex-start;box-sizing:border-box}.menu[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{display:flex;width:100%}.menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{align-items:stretch;justify-content:stretch;cursor:pointer}.menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:.25em}.menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.15)}.menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{padding-left:1em;width:100%;transition:height .25s ease-in-out}.menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu-content[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start}.icon[_ngcontent-%COMP%]{display:grid;place-items:center;border-radius:.2em}.icon.toggle[_ngcontent-%COMP%]{transform:rotate(0deg);transition:transform 1s linear}.icon.toggle.expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:grid;place-items:center}.icon.interactive[_ngcontent-%COMP%]{cursor:pointer;transition:all .05s linear;color:rgba(var(--txt-color-1))}.icon.interactive[_ngcontent-%COMP%]:active{box-shadow:0 0 2px 2px rgba(var(--txt-color-1),.5) inset}.text[_ngcontent-%COMP%]{display:grid;place-items:center start;width:100%;-webkit-user-select:none;user-select:none;padding:.5em}"]}),t})();function _(t,e){1&t&&u._UZ(0,"app-menu",5),2&t&&u.Q6J("menu",e.$implicit.menuItems)}const M=function(){return{"height.px":"35","width.px":"35"}};let S=(()=>{class t{constructor(t,e,n,o){this.defaultLayoutService=t,this.brandService=e,this.menuService=n,this.elementRef=o,this.navTitle="",this.menu=this.menuService.menu,this.nativeElement=this.elementRef.nativeElement}ngOnInit(){}onClick(t){t.composedPath().some(t=>!(t!=this.nativeElement))||(this.defaultLayoutService.navigationLeftOpen=!1)}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p),u.Y36(g.c),u.Y36(m),u.Y36(u.SBq))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-nav-left"]],hostBindings:function(t,e){1&t&&u.NdJ("touchstart",function(t){return e.onClick(t)},!1,u.Jf7)("mousedown",function(t){return e.onClick(t)},!1,u.Jf7)},decls:6,vars:5,consts:[[1,"title-wrapper"],[1,"icon"],[3,"src","svgStyle"],[1,"text"],[3,"menu",4,"ngFor","ngForOf"],[3,"menu"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"span",1),u._UZ(2,"svg-icon",2),u.qZA(),u.TgZ(3,"span",3),u._uU(4),u.qZA(),u.qZA(),u.YNc(5,_,1,1,"app-menu",4)),2&t&&(u.xp6(2),u.Q6J("src",e.brandService.logoPath)("svgStyle",u.DdM(4,M)),u.xp6(2),u.hij(" ",e.brandService.navTitle," "),u.xp6(1),u.Q6J("ngForOf",e.menu))},directives:[v.bk,c.sg,b],styles:["[_nghost-%COMP%]{grid-row:1/3;grid-column:1;position:absolute;height:100%;z-index:999;background-color:rgba(var(--bg-nav-top-1));border-right:2px solid rgba(var(--border-nav-top-1));min-width:15em;max-width:75vw}.title-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;padding:1em 1.5em 1em .5em}.icon[_ngcontent-%COMP%]{margin:.25em;padding:.25em}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:grid;place-items:center}.icon.interactive[_ngcontent-%COMP%]{cursor:pointer;transition:all .1s linear;color:rgba(var(--txt-color-1))}.icon.interactive[_ngcontent-%COMP%]:active{box-shadow:0 0 3px 3px rgba(var(--txt-color-1),.5) inset}.text[_ngcontent-%COMP%]{font-size:2em;-webkit-user-select:none;user-select:none}"]}),t})(),Z=(()=>{class t{constructor(t){this.defaultLayoutService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-nav-right"]],decls:3,vars:0,template:function(t,e){1&t&&(u.TgZ(0,"div"),u.TgZ(1,"p"),u._uU(2,"nav-right works!"),u.qZA(),u.qZA())},styles:["[_nghost-%COMP%]{position:absolute;z-index:9;right:0;bottom:0;height:var(--view-height);background-color:rgba(var(--bg-nav-top-1));border-left:2px solid rgba(var(--border-nav-top-1));min-width:15em;max-width:75vw}"]}),t})();const C=function(){return{"height.px":"30","width.px":"30"}},I=function(){return{"height.px":"35","width.px":"35"}};let P=(()=>{class t{constructor(t,e){this.defaultLayoutService=t,this.brandService=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p),u.Y36(g.c))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-nav-top-left"]],decls:7,vars:6,consts:[["tabindex","1",1,"icon",3,"click"],["title","Menu","src","assets/svg/bars-solid.svg",3,"svgStyle"],["routerLink",""],["tabindex","1",1,"icon"],["title","User profile",3,"src","svgStyle"],[1,"text"]],template:function(t,e){1&t&&(u.TgZ(0,"span",0),u.NdJ("click",function(){return e.defaultLayoutService.navigationLeftOpen=!0}),u._UZ(1,"svg-icon",1),u.qZA(),u.TgZ(2,"a",2),u.TgZ(3,"span",3),u._UZ(4,"svg-icon",4),u.qZA(),u.qZA(),u.TgZ(5,"span",5),u._uU(6),u.qZA()),2&t&&(u.xp6(1),u.Q6J("svgStyle",u.DdM(4,C)),u.xp6(3),u.Q6J("src",e.brandService.logoPath)("svgStyle",u.DdM(5,I)),u.xp6(2),u.hij(" ",e.brandService.navTitle,"\n"))},directives:[v.bk,l.yS],styles:["[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}.icon[_ngcontent-%COMP%]{margin:.25em;padding:.25em;cursor:pointer;color:rgba(var(--txt-color-1))}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:grid;place-items:center}.text[_ngcontent-%COMP%]{font-size:2em;-webkit-user-select:none;user-select:none}"]}),t})(),A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-nav-top-center"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),t})();var k=n(3796);const J=function(){return{"width.px":"20"}};function N(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button"),u.TgZ(1,"span",2),u.NdJ("click",function(){u.CHM(t);const e=u.oxw();return e.defaultLayoutService.navigationRightOpen=!e.defaultLayoutService.navigationRightOpen}),u._UZ(2,"svg-icon",3),u.qZA(),u.qZA()}2&t&&(u.xp6(2),u.Q6J("svgStyle",u.DdM(1,J)))}function T(t,e){1&t&&(u.TgZ(0,"button"),u.TgZ(1,"span",4),u._UZ(2,"svg-icon",5),u.qZA(),u.qZA()),2&t&&(u.xp6(2),u.Q6J("svgStyle",u.DdM(1,J)))}function q(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",6),u.NdJ("click",function(){return u.CHM(t),u.oxw().authService.logout()}),u.TgZ(1,"span",7),u._uU(2,"Logout"),u.qZA(),u.qZA()}}function L(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",6),u.NdJ("click",function(){return u.CHM(t),u.oxw().authService.login()}),u.TgZ(1,"span",7),u._uU(2,"Login"),u.qZA(),u.qZA()}}let B=(()=>{class t{constructor(t,e){this.authService=t,this.defaultLayoutService=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(k.e),u.Y36(p))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-nav-top-right"]],decls:8,vars:12,consts:[[4,"ngIf"],[3,"click",4,"ngIf"],[1,"icon",3,"click"],["title","Help","src","assets/svg/question-solid.svg",3,"svgStyle"],[1,"icon"],["title","User profile","src","assets/svg/user-solid.svg",3,"svgStyle"],[3,"click"],[1,"text"]],template:function(t,e){1&t&&(u.YNc(0,N,3,2,"button",0),u.ALo(1,"async"),u.YNc(2,T,3,2,"button",0),u.ALo(3,"async"),u.YNc(4,q,3,0,"button",1),u.ALo(5,"async"),u.YNc(6,L,3,0,"button",1),u.ALo(7,"async")),2&t&&(u.Q6J("ngIf",u.lcZ(1,4,e.authService.isLoggedIn)),u.xp6(2),u.Q6J("ngIf",u.lcZ(3,6,e.authService.isLoggedIn)),u.xp6(2),u.Q6J("ngIf",u.lcZ(5,8,e.authService.isLoggedIn)),u.xp6(2),u.Q6J("ngIf",!u.lcZ(7,10,e.authService.isLoggedIn)))},directives:[c.O5,v.bk],pipes:[c.Ov],styles:["[_nghost-%COMP%]{display:grid;grid-column-gap:.5em;column-gap:.5em;grid-auto-columns:auto}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{grid-row:1}button[_ngcontent-%COMP%]{display:grid;place-items:center;margin:.25em;padding:.25em;background:none;border:none;color:inherit;cursor:pointer}.text[_ngcontent-%COMP%]{font-size:1.5em;-webkit-user-select:none;user-select:none}.icon[_ngcontent-%COMP%]{cursor:pointer;color:rgba(var(--txt-color-1))}.icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:grid;place-items:center}"]}),t})(),Y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-nav-top"]],decls:3,vars:0,template:function(t,e){1&t&&(u._UZ(0,"app-nav-top-left"),u._UZ(1,"app-nav-top-center"),u._UZ(2,"app-nav-top-right"))},directives:[P,A,B],styles:["[_nghost-%COMP%]{grid-row:1;grid-column:1/4;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding:.2em;height:var(--nav-top-height);background-color:rgba(var(--bg-nav-top-1));border-bottom:2px solid rgba(var(--border-nav-top-1))}"]}),t})();function Q(t,e){1&t&&u._UZ(0,"app-nav-left"),2&t&&u.Q6J("@toggleLeft",void 0)}function U(t,e){1&t&&u._UZ(0,"app-nav-right"),2&t&&u.Q6J("@toggleRight",void 0)}let E=(()=>{class t{constructor(t,e){this.defaultLayoutService=t,this.menuService=e,this.routeAnimation=t=>{var e;return(null===(e=null==t?void 0:t.activatedRouteData)||void 0===e?void 0:e.animation)||void 0}}ngOnInit(){s.forEach(t=>this.menuService.add(t))}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p),u.Y36(m))},t.\u0275cmp=u.Xpm({type:t,selectors:[["layout-default"]],decls:7,vars:3,consts:[[1,"layout-wrapper"],[4,"ngIf"],[1,"main-wrapper"],["outlet","outlet"]],template:function(t,e){if(1&t&&(u.TgZ(0,"div",0),u._UZ(1,"app-nav-top"),u.YNc(2,Q,1,1,"app-nav-left",1),u.YNc(3,U,1,1,"app-nav-right",1),u.TgZ(4,"div",2),u._UZ(5,"router-outlet",null,3),u.qZA(),u.qZA()),2&t){const t=u.MAs(6);u.xp6(2),u.Q6J("ngIf",e.defaultLayoutService.navigationLeftOpen),u.xp6(1),u.Q6J("ngIf",e.defaultLayoutService.navigationRightOpen),u.xp6(1),u.Q6J("@routeAnimations",e.routeAnimation(t))}},directives:function(){return[Y,c.O5,l.lC,S,Z]},styles:[".layout-wrapper{display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr;height:100%;width:100%}.main-wrapper{position:relative;grid-row:2;grid-column:1;height:var(--view-height)}router-outlet~*{position:absolute;overflow:hidden;height:100%;width:100%}"],encapsulation:2,data:{animation:[a,r,i]}}),t})(),R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[c.ez,l.Bz,v._J]]}),t})()}}]);