"use strict";(globalThis["webpackChunkastral"]=globalThis["webpackChunkastral"]||[]).push([[363],{85829:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Q});var a=t(59835),l=t(61957),o=t(86970);const n={id:"profile-header"},r={key:1},i={key:2},d={key:0},h={key:1,class:"flex column relative"},u={class:"q-pl-sm"},c={key:0},p={key:1,class:"flex column relative"},m={class:"q-pl-sm"},b={key:0},w={key:1,class:"flex column relative"},y={class:"q-pl-sm"};function f(e,s,t,f,g,k){const v=(0,a.up)("BaseUserCard"),x=(0,a.up)("q-tab"),U=(0,a.up)("q-tabs"),P=(0,a.up)("BaseButtonClear"),T=(0,a.up)("q-btn"),E=(0,a.up)("q-input"),q=(0,a.up)("q-form"),_=(0,a.up)("BasePostThread"),S=(0,a.up)("BaseButtonLoadMore"),$=(0,a.up)("q-tab-panel"),D=(0,a.up)("BaseRelayRecommend"),W=(0,a.up)("q-tab-panels"),Z=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(Z,null,{default:(0,a.w5)((()=>[(0,a._)("div",n,[e.hexPubkey?((0,a.wg)(),(0,a.j4)(v,{key:0,pubkey:e.hexPubkey,class:"user-card-header q-ma-sm","header-mode":!0,"show-following":!0,clickable:!1},null,8,["pubkey"])):(0,a.kq)("",!0)]),(0,a.Wm)(U,{modelValue:e.tab,"onUpdate:modelValue":s[0]||(s[0]=s=>e.tab=s),dense:"",outline:"",align:"left","active-color":"accent",breakpoint:0},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{name:"posts",label:"posts"}),(0,a.Wm)(x,{name:"follows",label:"follows"}),(0,a.Wm)(x,{name:"followers",label:"followers"}),(0,a.Wm)(x,{name:"relays",label:"relays"})])),_:1},8,["modelValue"]),(0,a.Wm)(W,{modelValue:e.tab,"onUpdate:modelValue":s[3]||(s[3]=s=>e.tab=s),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)($,{name:"posts",class:"no-padding"},{default:(0,a.w5)((()=>[e.threads.length?((0,a.wg)(),(0,a.j4)(q,{key:0,class:"q-pa-sm",onSubmit:e.search},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{modelValue:e.searchText,"onUpdate:modelValue":s[2]||(s[2]=s=>e.searchText=s),outlined:"",rounded:"",label:e.$t("searchPosts"),dense:"",autofocus:"",color:"secondary",class:"no-padding",loading:e.searching,onSubmit:e.search,onKeypress:(0,l.D2)((0,l.iM)(e.search,["ctrl"]),["enter"])},{append:(0,a.w5)((()=>[(0,a.Wm)(P,{"button-text":e.searchText,"button-class":"text-secondary",onClear:s[1]||(s[1]=s=>e.searchText="")},null,8,["button-text"]),(0,a.Wm)(T,{"text-color":"secondary",class:"q-pa-xs",icon:"search",type:"submit",unelevated:"",disable:e.searching,onClick:e.search},null,8,["disable","onClick"])])),_:1},8,["modelValue","label","loading","onSubmit","onKeypress"])])),_:1},8,["onSubmit"])):(0,a.kq)("",!0),e.searchResults.length?((0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.searchResults,(s=>((0,a.wg)(),(0,a.j4)(_,{key:s[0].id,events:s,onAddEvent:e.addEvent},null,8,["events","onAddEvent"])))),128))])):(0,a.kq)("",!0),e.searchText?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.threads,(s=>((0,a.wg)(),(0,a.j4)(_,{key:s[0].id,events:s,onAddEvent:e.addEvent},null,8,["events","onAddEvent"])))),128)),(0,a.Wm)(S,{"loading-more":e.loadingMore,"reached-end":e.reachedEnd,onClick:e.loadMore},null,8,["loading-more","reached-end","onClick"])]))])),_:1}),(0,a.Wm)($,{name:"follows",class:"no-padding"},{default:(0,a.w5)((()=>[e.follows?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.follows,(e=>((0,a.wg)(),(0,a.j4)(v,{key:e,pubkey:e,"show-following":!0},null,8,["pubkey"])))),128))])])):((0,a.wg)(),(0,a.iD)("div",d,(0,o.zw)(e.$t("noFollows")),1))])),_:1}),(0,a.Wm)($,{name:"followers",class:"no-padding"},{default:(0,a.w5)((()=>[e.followers?((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(e.followers),(e=>((0,a.wg)(),(0,a.j4)(v,{key:e,pubkey:e,"show-following":!0},null,8,["pubkey"])))),128))])])):((0,a.wg)(),(0,a.iD)("div",c,(0,o.zw)(e.$t("noFollowers")),1))])),_:1}),(0,a.Wm)($,{name:"relays",class:"no-padding"},{default:(0,a.w5)((()=>[e.relays?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(e.relays),(e=>((0,a.wg)(),(0,a.j4)(D,{key:e,url:e,"list-view":!0},null,8,["url"])))),128))])])):((0,a.wg)(),(0,a.iD)("div",b,(0,o.zw)(e.$t("noRelays")),1))])),_:1})])),_:1},8,["modelValue"])])),_:1})}t(40702),t(18964);var g=t(60899),k=t(22330),v=t(18933),x=t(14473),U=t(8072),P=t(34136),T=t(76877),E=t(80626),q=t(46973),_=t(31020);const S={title:"astral - profile",meta:{description:{name:"description",content:"Nostr user profile"},keywords:{name:"keywords",content:"nostr decentralized social media"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},$=(0,a.aZ)({name:"Profile",mixins:[v.Z,(0,_.Z)(S)],components:{BaseUserCard:U.Z,BaseRelayRecommend:T.Z,BaseButtonLoadMore:E.Z,BaseButtonClear:q.Z},data(){return{threads:[],eventsSet:new Set,sub:{},tab:"posts",followsEvent:null,follows:[],followers:[],relays:{},profilesUsed:new Set,loadingMore:!0,reachedEnd:!1,searchText:"",searching:!1,results:[],interval:null}},computed:{searchResults(){return this.searchText.length?this.results:[]},hexPubkey(){return this.$route.params.pubkey?this.bech32ToHex(this.$route.params.pubkey):""}},mounted(){this.hexPubkey.length?this.start():this.interval=setInterval((()=>{this.hexPubkey.length&&(this.start(),clearInterval(this.interval))}),500)},beforeUnmount(){this.stop()},methods:{async start(){this.loadingMore=!0;let e=await(0,P.NL)(this.hexPubkey);if(e){let s=(0,k.Wb)(e);this.$store.commit("addProfileToCache",s),this.$store.dispatch("useNip05",{metadata:s})}this.sub.streamUserProfile=await(0,P.ix)(this.hexPubkey,(async e=>{let s=(0,k.Wb)(e);this.$store.commit("addProfileToCache",s),this.$store.dispatch("useNip05",{metadata:s})}));let s=setTimeout((async()=>{this.loadMore()}),4e3);this.sub.streamUserNotes=await(0,P.pq)(this.hexPubkey,(e=>{s||this.processUserNotes([e],this.threads),s&&clearTimeout(s),s=setTimeout((async()=>{this.loadMore(),clearTimeout(s),s=null}),500)})),this.sub.dbStreamUserFollows=await(0,P.g2)(this.hexPubkey,(e=>{this.followsEvent&&e.created_at<this.followsEvent.created_at||(this.followsEvent=e,this.follows=e.tags.filter((([e,s])=>"p"===e&&s)).map((([e,s])=>s)),this.relays=e.content.length?JSON.parse(e.content):[],this.follows.length&&this.follows.forEach((e=>this.useProfile(e))))})),this.sub.dbStreamUserFollowers=await(0,P.E1)(this.hexPubkey,(e=>{this.followers[e.pubkey]=!0,this.useProfile(e.pubkey)}))},stop(){this.sub.streamUserProfile&&this.sub.streamUserProfile.cancel(),this.sub.streamUserNotes&&this.sub.streamUserNotes.cancel(),this.sub.dbStreamUserFollows&&this.sub.dbStreamUserFollows.cancel(),this.sub.dbStreamUserFollowers&&this.sub.dbStreamUserFollowers.cancel(),this.profilesUsed.forEach((e=>this.$store.dispatch("cancelUseProfile",{pubkey:e}))),this.interval&&clearInterval(this.interval)},processUserNotes(e,s,t=!0){for(let a of e)this.eventsSet.has(a.id)&&t||(this.interpolateEventMentions(a),t&&this.eventsSet.add(a.id),(0,x.c)(s,a))},useProfile(e){this.profilesUsed.has(e)||(this.profilesUsed.add(e),this.$store.dispatch("useProfile",{pubkey:e}))},addEvent(e){this.processUserNotes([e],this.threads)},async loadMore(){this.loadingMore=!0;let e=this.threads.length?this.threads[this.threads.length-1][0].created_at:Math.round(Date.now()/1e3),s=await(0,P.sM)(this.hexPubkey,e,50);s.length<50&&(this.reachedEnd=!0);let t=[];this.processUserNotes(s,t),this.threads=this.threads.concat(t),this.loadingMore=!1},async search(){this.searching=!0,this.results=[];let e=await(0,P.$d)(`\n        SELECT event\n        FROM nostr\n        WHERE json_extract(event,'$.kind') = 1 AND\n          json_extract(event,'$.pubkey') = '${this.hexPubkey}' AND\n          json_extract(event,'$.content') LIKE '%${this.searchText.replace(" ","%")}%'\n      `),s=e.map((e=>JSON.parse(e.event)));this.processUserNotes(s,this.results,!1),this.searching=!1},debouncedSearch(){(0,g.Z)(this.search(),1e3),console.log("debounced search")}}});var D=t(11639),W=t(69885),Z=t(47817),M=t(70900),N=t(89800),C=t(84106),B=t(8326),j=t(66611),F=t(24455),R=t(69984),V=t.n(R);const K=(0,D.Z)($,[["render",f],["__scopeId","data-v-d9211224"]]),Q=K;V()($,"components",{QPage:W.Z,QTabs:Z.Z,QTab:M.Z,QTabPanels:N.Z,QTabPanel:C.Z,QForm:B.Z,QInput:j.Z,QBtn:F.Z})}}]);