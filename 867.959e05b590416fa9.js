"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[867],{1867:(v,u,n)=>{n.r(u),n.d(u,{AuthModule:()=>i});var m=n(6895),a=n(3060),o=n(4650),g=n(6518),d=n(4859),p=n(782);class r{constructor(t,l){this.router=t,this.authService=l}login(){this.authService.login().subscribe(t=>{console.log(t),t.id&&this.router.navigate(["./heroes"])})}}r.\u0275fac=function(t){return new(t||r)(o.Y36(a.F0),o.Y36(g.e))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-login"]],decls:4,vars:0,consts:[["cols","1"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,l){1&t&&(o.TgZ(0,"mat-grid-list",0)(1,"mat-grid-tile")(2,"button",1),o.NdJ("click",function(){return l.login()}),o._uU(3," Ingresar "),o.qZA()()())},dependencies:[d.lW,p.Il,p.DX],encapsulation:2});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-registro"]],decls:2,vars:0,template:function(t,l){1&t&&(o.TgZ(0,"p"),o._uU(1,"registro works!"),o.qZA())},encapsulation:2});const h=[{path:"",children:[{path:"login",component:r},{path:"registro",component:c},{path:"**",redirectTo:"login"}]}];class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[a.Bz.forChild(h),a.Bz]});var f=n(898);class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[m.ez,s,f.q]})}}]);