"use strict";(self.webpackChunklocal_experiences_frontend=self.webpackChunklocal_experiences_frontend||[]).push([[412],{8412:(x,u,i)=>{i.r(u),i.d(u,{ActivateModule:()=>n});var l=i(6895),t=i(8256),r=i(6773),d=i(529);class s{constructor(e){this.client=e}activateUser(e){return console.log(e.token),this.client.post("http://localhost:8080/api/v1/activate",e,{observe:"response"})}}function v(a,e){if(1&a&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&a){const o=t.oxw();t.xp6(1),t.hij("Email address ",o.email," was activated! Welcome to the CULT.")}}function h(a,e){1&a&&(t.TgZ(0,"h3"),t._uU(1,"Token was expired! We resent verification link to your email address."),t.qZA())}s.\u0275fac=function(e){return new(e||s)(t.LFG(d.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac});class c{constructor(e,o,y){this.router=e,this.service=o,this.activatedRoute=y,this.isExpired=!1,this.isLoaded=!1}ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.service.activateUser({token:e.token}).subscribe({next:o=>{200===o.status&&(this.email=o.body.email,this.isExpired=!1,this.isLoaded=!0)},error:o=>{410===o.status?this.isExpired=!0:this.router.navigate(["error"],{queryParams:{code:o.status}})}})})}}c.\u0275fac=function(e){return new(e||c)(t.Y36(r.F0),t.Y36(s),t.Y36(r.gz))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-activate-layout"]],decls:6,vars:2,consts:[[1,"nb","bg-primary"],["routerLink","/"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0)(1,"h1")(2,"a",1),t._uU(3,"experiences.com"),t.qZA()()(),t.YNc(4,v,2,1,"h3",2),t.YNc(5,h,2,0,"h3",2)),2&e&&(t.xp6(4),t.Q6J("ngIf",o.isLoaded),t.xp6(1),t.Q6J("ngIf",o.isExpired))},dependencies:[l.O5,r.rH]});var m=i(990);const f=[{path:"",component:c}];class n{}n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[s],imports:[m.m,l.ez,r.Bz.forChild(f)]})}}]);