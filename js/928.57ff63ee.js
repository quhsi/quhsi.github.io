"use strict";(globalThis["webpackChunkastral"]=globalThis["webpackChunkastral"]||[]).push([[928],{20467:(e,a,t)=>{t.r(a),t.d(a,{default:()=>je});t(40702);var s=t(59835),l=t(86970),o=t(61957);const i=e=>((0,s.dD)("data-v-369f3058"),e=e(),(0,s.Cn)(),e),n={key:0,class:"flex justify-between",style:{display:"flex",gap:".2rem"}},r={class:"text-bold flex justify-between no-wrap",style:{"font-size":"1.1rem"}},c={key:0,class:"section"},d={key:0,class:"flex justify-between",style:{display:"flex",gap:".2rem"}},u={class:"text-bold flex justify-between no-wrap",style:{"font-size":"1.1rem"}},m={class:"text-normal flex row no-wrap",style:{"font-size":".9rem",gap:".4rem"}},y={class:"text-bold flex justify-between no-wrap",style:{"font-size":"1rem"}},p={key:1,style:{"padding-left":".2rem",gap:"1rem"},class:"flex row"},g=["for"],f=["id","name","value","disabled","onInput"],h=["onClick"],k={class:"text-bold flex justify-between no-wrap",style:{"font-size":"1rem"}},b=["onClick"],w=["href"],v={class:"section"},S={key:0,class:"flex justify-between",style:{display:"flex",gap:".2rem"}},C={class:"text-bold flex justify-between no-wrap",style:{"font-size":"1.1rem"}},x={class:"text-normal flex row no-wrap",style:{"font-size":".9rem",gap:".4rem"}},R={key:1},_={key:2},P={class:"flex no-wrap items-center",style:{gap:".6rem"}},M={class:"flex row no-wrap q-mx-sm q-mt-sm",id:"new-relay-input"},$={style:{"max-height":"6.75rem"}},q={class:"relay-list"},D=(0,s.Uk)("              "),W=["onClick"],z=(0,s.Uk)("\n                "),j={class:"flex row justify-between no-wrap"},U=(0,s.Uk)("\n                  "),O={style:{overflow:"auto"}},T=(0,s.Uk)("\n                  "),V=(0,s.Uk)("\n                "),A=(0,s.Uk)("\n              "),N=(0,s.Uk)("\n            "),B={class:"text-bold flex justify-between no-wrap full-width",style:{"font-size":"1.1rem"}},Z={class:"flex no-wrap section",style:{gap:".2rem"}},F={class:"text-lg text-bold tracking-wide leading-relaxed py-2"},I=(0,s.Uk)(" Your keys "),K={key:0},Q={key:1},L=i((()=>(0,s._)("div",{class:"mt-1 text-xs"}," Posts are published using your private key. Others can see your posts or follow you using only your public key. ",-1))),H=i((()=>(0,s._)("p",null,"Private Key:",-1))),Y=i((()=>(0,s._)("p",null,"Public Key:",-1)));function E(e,a,t,i,E,J){const G=(0,s.up)("BaseHeader"),X=(0,s.up)("q-btn"),ee=(0,s.up)("q-icon"),ae=(0,s.up)("q-input"),te=(0,s.up)("BaseUserAvatar"),se=(0,s.up)("q-form"),le=(0,s.up)("q-separator"),oe=(0,s.up)("BaseSelect"),ie=(0,s.up)("q-toggle"),ne=(0,s.up)("q-item"),re=(0,s.up)("q-list"),ce=(0,s.up)("BaseSelectMultiple"),de=(0,s.up)("BaseInformation"),ue=(0,s.up)("q-card-section"),me=(0,s.up)("q-expansion-item"),ye=(0,s.up)("q-card-actions"),pe=(0,s.up)("q-card"),ge=(0,s.up)("q-dialog"),fe=(0,s.up)("q-page"),he=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(fe,{id:"settings-page",onClick:J.closeSelects},{default:(0,s.w5)((()=>[(0,s.Wm)(G,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.$t("settings")),1)])),_:1}),(0,s.Wm)(se,{class:"q-gutter-md section",onSubmit:J.setMetadata},{default:(0,s.w5)((()=>[E.editingMetadata?((0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(X,{label:"save",color:"primary",outline:"",size:"sm",type:"submit"}),(0,s.Wm)(X,{label:"cancel",color:"negative",outline:"",size:"sm",onClick:a[0]||(a[0]=e=>J.cancel("metadata"))})])):(0,s.kq)("",!0),(0,s._)("div",r,[(0,s.Uk)((0,l.zw)(e.$t("profile"))+" ",1),E.editingMetadata?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(X,{key:0,label:"edit",color:"primary",outline:"",size:"sm",disable:!e.$store.getters.canSignEventsAutomatically,onClick:a[1]||(a[1]=e=>E.editingMetadata=!0)},null,8,["disable"]))]),(0,s.Wm)(ae,{modelValue:E.metadata.name,"onUpdate:modelValue":a[2]||(a[2]=e=>E.metadata.name=e),dense:"",filled:"",type:"text",label:"Name",disable:!E.editingMetadata},{before:(0,s.w5)((()=>[(0,s.Wm)(ee,{name:"alternate_email"})])),_:1},8,["modelValue","disable"]),(0,s.Wm)(ae,{modelValue:E.metadata.about,"onUpdate:modelValue":a[3]||(a[3]=e=>E.metadata.about=e),disable:!E.editingMetadata,filled:"",autogrow:"",dense:"",type:"text",label:"About (in 150 chars)",maxlength:"300"},null,8,["modelValue","disable"]),(0,s.Wm)(ae,{modelValue:E.metadata.picture,"onUpdate:modelValue":a[4]||(a[4]=e=>E.metadata.picture=e),modelModifiers:{trim:!0},disable:!E.editingMetadata,filled:"",dense:"",type:"text",label:"Picture URL",maxlength:"150"},{after:(0,s.w5)((()=>[E.metadata.picture?((0,s.wg)(),(0,s.j4)(te,{key:0,pubkey:e.$store.state.keys.pub,rounded:""},null,8,["pubkey"])):(0,s.kq)("",!0)])),_:1},8,["modelValue","disable"]),(0,s.Wm)(ae,{modelValue:E.metadata.nip05,"onUpdate:modelValue":a[5]||(a[5]=e=>E.metadata.nip05=e),modelModifiers:{trim:!0},disable:!E.editingMetadata,filled:"",dense:"",type:"text",label:"NIP-05 Identifier",maxlength:"100"},null,8,["modelValue","disable"])])),_:1},8,["onSubmit"]),(0,s.Wm)(le,{color:"accent"}),Object.keys(E.preferences).length?((0,s.wg)(),(0,s.iD)("div",c,[E.editingPreferences?((0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(X,{label:"save",color:"primary",outline:"",size:"sm",onClick:J.savePreferences},null,8,["onClick"]),(0,s.Wm)(X,{label:"cancel",color:"negative",outline:"",size:"sm",onClick:a[6]||(a[6]=e=>J.cancel("preferences"))})])):(0,s.kq)("",!0),(0,s._)("div",u,[(0,s.Uk)((0,l.zw)(e.$t("preferences"))+" ",1),(0,s._)("div",m,[E.editingPreferences?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(X,{key:0,label:"edit",color:"primary",outline:"",size:"sm",onClick:a[7]||(a[7]=e=>E.editingPreferences=!0)}))])]),(0,s._)("div",y,(0,l.zw)(e.$t("colors")),1),E.preferences.color?((0,s.wg)(),(0,s.iD)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(E.preferences.color),((e,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,class:"flex column items-center"},[(0,s._)("label",{for:e},(0,l.zw)(e),9,g),(0,s._)("input",{type:"color",id:e,name:e,value:E.preferences.color[e],disabled:!E.editingPreferences,onInput:a=>J.updateColor(a.target.value,e)},null,40,f)])))),128)),(0,s.Wm)(oe,{"allow-selection":E.editingPreferences,selecting:E.choosingTheme,style:{width:"200px"},onToggle:a[8]||(a[8]=e=>E.choosingTheme=!E.choosingTheme)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)("choose a theme..."),1)])),"list-items":(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(E.themes),((e,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a,onClick:(0,o.iM)((a=>J.updateTheme(E.themes[e])),["stop"])},[(0,s._)("span",null,(0,l.zw)(e),1)],8,h)))),128))])),_:1},8,["allow-selection","selecting"])])):(0,s.kq)("",!0),(0,s._)("div",k,(0,l.zw)(e.$t("font")),1),E.preferences.font?((0,s.wg)(),(0,s.j4)(oe,{key:2,"allow-selection":E.editingPreferences,selecting:E.choosingFont,style:{width:"200px"},onToggle:a[9]||(a[9]=e=>E.choosingFont=!E.choosingFont)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(E.preferences.font),1)])),"list-items":(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(E.fonts,((e,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a,class:"font-item",onClick:(0,o.iM)((a=>J.updateFont(e)),["stop"])},[(0,s._)("link",{href:`https://fonts.googleapis.com/css2?family=${J.googleFontsName(e)}`,rel:"stylesheet"},null,8,w),(0,s._)("span",{style:(0,l.j5)(`font-family: '${e}';`)},(0,l.zw)(e),5)],8,b)))),128))])),_:1},8,["allow-selection","selecting"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s.Wm)(le,{color:"accent"}),(0,s._)("div",v,[E.editingRelays?((0,s.wg)(),(0,s.iD)("div",S,[(0,s.Wm)(X,{label:"save",color:"primary",outline:"",size:"sm",onClick:J.saveRelays},null,8,["onClick"]),(0,s.Wm)(X,{label:"cancel",color:"negative",outline:"",size:"sm",onClick:a[10]||(a[10]=e=>J.cancel("relays"))})])):(0,s.kq)("",!0),(0,s._)("div",C,[(0,s.Uk)((0,l.zw)(e.$t("relays"))+" ",1),(0,s._)("div",x,[E.editingRelays?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(X,{key:0,label:"edit",color:"primary",outline:"",size:"sm",disable:!e.$store.getters.canSignEventsAutomatically,onClick:a[11]||(a[11]=e=>E.editingRelays=!0)},null,8,["disable"])),E.editingRelays?((0,s.wg)(),(0,s.iD)("div",R,"read")):(0,s.kq)("",!0),E.editingRelays?((0,s.wg)(),(0,s.iD)("div",_,"write")):(0,s.kq)("",!0)])]),(0,s.Wm)(re,{class:"flex column q-pt-xs",style:{gap:".2rem"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(E.relays),(a=>((0,s.wg)(),(0,s.j4)(ne,{key:a,class:"flex justify-between items-center no-wrap no-padding",style:{"min-height":"1.2rem"}},{default:(0,s.w5)((()=>[(0,s._)("div",null,[E.editingRelays||!E.relays[a].read&&!E.relays[a].write?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(X,{key:0,color:"secondary",outline:"",size:"sm",label:"Share",disable:E.hasJustSharedRelay||!e.$store.getters.canSignEventsAutomatically,onClick:e=>J.shareRelay(a)},null,8,["disable","onClick"])),E.editingRelays?((0,s.wg)(),(0,s.j4)(X,{key:1,color:"negative",label:"remove",outline:"",size:"sm",onClick:e=>J.removeRelay(a)},null,8,["onClick"])):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,l.zw)(a),1)]),(0,s._)("div",P,[E.editingRelays?((0,s.wg)(),(0,s.j4)(ie,{key:0,modelValue:E.relays[a].read,"onUpdate:modelValue":e=>E.relays[a].read=e,color:"primary",size:"sm",dense:"",class:"no-padding",disable:!e.$store.getters.canSignEventsAutomatically},null,8,["modelValue","onUpdate:modelValue","disable"])):(0,s.kq)("",!0),E.editingRelays?((0,s.wg)(),(0,s.j4)(ie,{key:1,modelValue:E.relays[a].write,"onUpdate:modelValue":e=>E.relays[a].write=e,color:"primary",size:"sm",dense:"",class:"no-padding",disable:!e.$store.getters.canSignEventsAutomatically},null,8,["modelValue","onUpdate:modelValue","disable"])):(0,s.kq)("",!0)])])),_:2},1024)))),128))])),_:1}),E.editingRelays?((0,s.wg)(),(0,s.j4)(se,{key:1,class:"q-py-xs",onSubmit:J.addRelay},{default:(0,s.w5)((()=>[(0,s._)("div",M,[(0,s.Wm)(ae,{modelValue:E.newRelay,"onUpdate:modelValue":a[12]||(a[12]=e=>E.newRelay=e),placeholder:"add a relay...",autofocus:"",class:"full-width","input-style":"padding: 0;",onKeypress:(0,o.D2)(J.addRelay,["enter"]),dense:"",borderless:""},null,8,["modelValue","onKeypress"]),(0,s.Wm)(X,{icon:"add",color:"positive",size:"sm",flat:"",dense:"",onClick:(0,o.iM)(J.addRelay,["stop"])},null,8,["onClick"])]),(0,s.Wm)(ce,null,{options:(0,s.w5)((()=>[(0,s._)("div",$,[(0,s._)("pre",q,[D,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(J.optionalRelays,((e,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a+"-"+e,class:"relay-item",onClick:(0,o.iM)((a=>E.relays[e]={read:!0,write:!0}),["stop"])},[z,(0,s._)("div",j,[U,(0,s._)("span",O,(0,l.zw)(e),1),T,(0,s.Wm)(ee,{name:"add",size:"xs",color:"positive",flat:""}),V]),A],8,W)))),128)),N])])])),_:1})])),_:1},8,["onSubmit"])):(0,s.kq)("",!0)]),(0,s.Wm)(le,{color:"accent"}),(0,s.Wm)(me,{dense:"","expand-icon":"help","expanded-icon":"expand_less",class:"full-width items-center","header-class":"items-center"},{header:(0,s.w5)((()=>[(0,s._)("div",B,(0,l.zw)(e.$t("faq")),1)])),default:(0,s.w5)((()=>[(0,s.Wm)(ue,null,{default:(0,s.w5)((()=>[(0,s.Wm)(de)])),_:1})])),_:1}),(0,s.Wm)(le,{color:"accent"}),(0,s._)("div",Z,[(0,s.Wm)(X,{label:"View your keys",color:"primary",outline:"",onClick:a[13]||(a[13]=e=>E.keysDialog=!0)}),(0,s.Wm)(X,{label:"logout",color:"primary",outline:"",onClick:J.logout},null,8,["onClick"]),(0,s.Wm)(X,{label:"Delete Local Data",color:"negative",outline:"",onClick:J.hardReset},null,8,["onClick"]),(0,s.Wm)(X,{label:"dev tools",color:"secondary",outline:"",to:{name:"devTools"}})]),(0,s.Wm)(ge,{modelValue:E.keysDialog,"onUpdate:modelValue":a[16]||(a[16]=e=>E.keysDialog=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(pe,{class:"px-4 py-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(ue,null,{default:(0,s.w5)((()=>[(0,s._)("div",F,[I,(0,s.Wm)(ee,{name:"vpn_key"})]),e.$store.state.keys.priv?((0,s.wg)(),(0,s.iD)("p",K,"Make sure you back up your private key!")):((0,s.wg)(),(0,s.iD)("p",Q,"Your private key is not here!")),L])),_:1}),(0,s.Wm)(ue,null,{default:(0,s.w5)((()=>[H,(0,s.Wm)(ae,{modelValue:J.nsecKey,"onUpdate:modelValue":a[14]||(a[14]=e=>J.nsecKey=e),class:"mb-2",readonly:"",filled:""},null,8,["modelValue"]),Y,(0,s.Wm)(ae,{modelValue:J.npubKey,"onUpdate:modelValue":a[15]||(a[15]=e=>J.npubKey=e),readonly:"",filled:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(ye,{align:"right",class:"text-primary"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(X,{outline:"",label:"Close"},null,512),[[he]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["onClick"])}t(46727),t(18964);var J=t(63703),G=t(74827),X=t(18933),ee=t(34136),ae=t(57674);const te={style:{cursor:"pointer","padding-left":".2rem"},class:"relative-position"},se={class:"q-pl-sm"},le={key:0,class:"base-select-list",style:{position:"absolute",top:"1.3rem","z-index":"1","max-height":"15rem","overflow-y":"auto",width:"100%"}},oe={class:"",style:{display:"block","margin-block-start":".5rem","margin-block-end":".5rem","padding-inline-start":".5rem"}};function ie(e,a,t,i,n,r){const c=(0,s.up)("q-icon");return(0,s.wg)(),(0,s.iD)("div",te,[(0,s._)("div",{class:"flex justify-between base-select",style:(0,l.j5)(e.allowSelection?"cursor: pointer; opacity: 1;":"cursor: not-allowed; opacity: .5;"),onClick:a[0]||(a[0]=(0,o.iM)(((...a)=>e.toggle&&e.toggle(...a)),["stop"]))},[(0,s._)("span",se,[(0,s.WI)(e.$slots,"default",{},void 0,!0)]),(0,s.Wm)(c,{name:e.selecting?"arrow_drop_up":"arrow_drop_down",size:"xs"},null,8,["name"])],4),e.selecting&&e.allowSelection?((0,s.wg)(),(0,s.iD)("div",le,[(0,s._)("ul",oe,[(0,s.WI)(e.$slots,"list-items",{},void 0,!0)])])):(0,s.kq)("",!0)])}const ne=(0,s.aZ)({name:"BaseSelect",emits:["toggle"],props:{allowSelection:{type:Boolean,default:!0},selecting:{type:Boolean,default:!1}},methods:{toggle(){this.allowSelection&&this.$emit("toggle")}}});var re=t(11639),ce=t(22857),de=t(69984),ue=t.n(de);const me=(0,re.Z)(ne,[["render",ie],["__scopeId","data-v-f265975c"]]),ye=me;ue()(ne,"components",{QIcon:ce.Z});var pe=t(67903),ge=t(37844),fe=t(31020);const he={title:"astral - settings",meta:{description:{name:"description",content:"Nostr and astral user configuration"},keywords:{name:"keywords",content:"nostr decentralized social media"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},ke={name:"Settings",mixins:[X.Z,(0,fe.Z)(he)],emits:["update-font"],components:{BaseSelect:ye,BaseSelectMultiple:pe.Z,BaseInformation:ge.Z},data(){const{name:e,picture:a,about:t,nip05:s}=this.$store.state.profilesCache[this.$store.state.keys.pub]||{};return{keysDialog:!1,editingMetadata:!1,metadata:{name:e,picture:a,about:t,nip05:s},relays:{},editingRelays:!1,editingPreferences:!1,choosingFont:!1,choosingTheme:!1,preferences:{},newRelay:"",unsubscribe:null,hasJustSharedRelay:!1,themes:{astral:{primary:"#d671ea",secondary:"#5af2e0",accent:"#ecc865",background:"#1f1f1f"},mono:{primary:"#ffffff",secondary:"#aaaaaa",accent:"#777777",background:"#1f1f1f"},"zen lisa frank":{primary:"#14c5d2",secondary:"#9c45f2",accent:"#f943c9",background:"#c7c7c7"},dusk:{primary:"#ff5100",secondary:"#b86bff",accent:"#8373ff",background:"#000082"},camo:{primary:"#67983e",secondary:"#686512",accent:"#030c06",background:"#c5c7b2"},warm:{primary:"#f07575",secondary:"#ffb042",accent:"#ead04d",background:"#756168"},cool:{primary:"#83eefc",secondary:"#42a4ff",accent:"#a27aff",background:"#4a4d59"},southwest:{primary:"#719f9f",secondary:"#d27014",accent:"#994a00",background:"#e8d9b0"},dracula:{primary:"#50fa7b",secondary:"#8be9fd",accent:"#6272a4",background:"#282a36"},poimandres:{primary:"#5de4c7",secondary:"#5fa3b4",accent:"#acd7ff",background:"#1c1e28"}},fonts:["Roboto","Open Sans","Noto Sans JP","Montserrat","Lato","Poppins","Roboto Condensed","Source Sans Pro","Oswald","Roboto Mono","Raleway","Inter","Noto Sans","Ubuntu","Nunito","Roboto Slab","Nunito Sans","Playfair Display","Merriweather","PT Sans","Rubik","Noto Sans KR","Mukta","Lora","Kanit","Work Sans","Fira Sans","Barlow","Noto Sans TC","Nanum Gothic","Mulish","Quicksand","Titillium Web","PT Serif","Hind Siliguri","Heebo","Libre Franklin","DM Sans","Noto Serif","IBM Plex Sans","Karla","Josefin Sans","Arimo","Oxygen","Dosis","Inconsolata","Libre Baskerville","Anton","Manrope","Cairo","PT Sans Narrow","Secular One","Signika Negative","Source Serif Pro","Bebas Neue","Bitter","Cabin","Dancing Script","Abel","Hind","Barlow Condensed","Source Code Pro","Prompt","EB Garamond","Lobster","Varela Round","Comfortaa","Exo 2","Fjalla One","Pacifico","Crimson Text","Noto Sans SC","Noto Serif JP","Slabo 27px","Maven Pro","Teko","Asap","Overpass","Archivo","Caveat","Arvo","Jost","Merriweather Sans","Shadows Into Light","Abril Fatface","Assistant","Public Sans","M PLUS Rounded 1c","Rajdhani","Tajawal","Space Grotesk","Cormorant Garamond","Yanone Kaffeesatz","Saira Condensed","Catamaran","Questrial","Hind Madurai","Indie Flower","Fira Sans Condensed","IBM Plex Serif","Noto Sans HK","Alfa Slab One","Barlow Semi Condensed","Zilla Slab","Red Hat Display","IBM Plex Mono","M PLUS 1p","Play","Exo","Patrick Hand","Nanum Myeongjo","Domine","Signika","Chakra Petch","Satisfy","Permanent Marker","Acme","Fredoka One","Archivo Narrow","Sarabun","Bree Serif","Amatic SC","Noto Sans Arabic","Alegreya Sans","Righteous","Russo One","Alegreya","Vollkorn","Didact Gothic","ABeeZee","Almarai","Archivo Black","Cinzel","Baloo 2","Encode Sans","Kalam","Frank Ruhl Libre","Changa","Tinos","Yantramanav","DM Serif Display","Noto Serif TC","Asap Condensed","Amiri","Crete Round","Ubuntu Condensed","Lobster Two","Martel","Spectral","Noto Kufi Arabic","Cormorant","Courgette","Patua One","Passion One","Alata","Space Mono","Great Vibes","Cardo","Prata","Rokkitt","Sora","Fira Sans Extra Condensed","Ropa Sans","Noticia Text","Francois One","Old Standard TT","Michroma","IBM Plex Sans Arabic","PT Sans Caption","Montserrat Alternates","Orbitron","Kaushan Script","Saira","Faustina","Concert One","Antic Slab","Noto Sans Display","Yellowtail","Unna","Chivo","Marcellus","Gelasio","Covered By Your Grace","Gothic A1","Crimson Pro","Sawarabi Mincho","Urbanist","Carter One","Cookie","Gloria Hallelujah","Pathway Gothic One","Mali","Rubik Mono One","Lexend Deca","Press Start 2P","News Cycle","Sacramento","Quattrocento Sans","Philosopher"]}},watch:{"$store.state.relays"(e,a){e!==a&&this.cloneRelays()}},computed:{optionalRelays(){let e=this.$store.state.optionalRelaysList.filter((e=>!(this.newRelay.length&&!e.toLowerCase().includes(this.newRelay.toLowerCase()))&&!this.relays[e]));return e},npubKey(){return this.$store.state.keys.pub?this.hexToBech32(this.$store.state.keys.pub,"npub"):null},nsecKey(){return this.$store.state.keys.priv?this.hexToBech32(this.$store.state.keys.priv,"nsec"):null}},mounted(){this.$store.state.keys.pub||this.$router.push("/"),this.$store.state.keys.pub&&this.$route.params.initUser&&(0,s.Y3)((()=>{setTimeout((()=>{this.keysDialog=!0}),1e3)})),this.unsubscribe=this.$store.subscribe(((e,a)=>{switch(e.type){case"addProfileToCache":if(e.payload.pubkey!==a.keys.pub)return;(0,s.Y3)((()=>{setTimeout((()=>{this.cloneMetadata()}),1)}));break}})),this.cloneRelays(),this.clonePreferences()},beforeUnmount(){this.unsubscribe&&this.unsubscribe()},methods:{cloneMetadata(){this.metadata=JSON.parse(JSON.stringify(this.$store.state.profilesCache[this.$store.state.keys.pub]))},cloneRelays(){this.relays=Object.assign({},Object.keys(this.$store.state.relays).length?this.$store.state.relays:this.$store.state.defaultRelays)},async setMetadata(){""===this.metadata.nip05&&(this.metadata.nip05=void 0),this.metadata.nip05&&await(0,G.x)(this.metadata.nip05)!==this.$store.state.keys.pub?this.$q.notify({message:"Failed to verify NIP05 identifier on server.",color:"warning"}):(Object.keys(this.$store.state.relays).length||this.saveRelays(),this.$store.dispatch("setMetadata",this.metadata),this.editingMetadata=!1)},clonePreferences(){this.preferences=JSON.parse(JSON.stringify(this.$store.state.config.preferences))},addRelay(){this.newRelay&&this.newRelay.length&&(this.relays[this.newRelay]={read:!0,write:!0}),this.newRelay=""},removeRelay(e){delete this.relays[e]},saveRelays(){Object.keys(this.relays).length?(this.$store.getters.canSignEventsAutomatically&&this.$store.commit("saveRelays",this.relays),this.editingRelays=!1):this.$q.dialog({title:"no relays saved!",message:"you must have at least one relay selected to save. please add a relay.",ok:{color:"accent"}}).onOk((()=>{}))},savePreferences(){this.$store.commit("setConfig",{key:"preferences",value:this.preferences}),this.editingPreferences=!1},updateColor(e,a){(0,ae.Z)(a,e),this.preferences.color[a]=e,"background"===a&&this.$q.dark.set("dark"===this.lightOrDark(e))},updateTheme(e){for(let a of Object.keys(e))this.updateColor(e[a],a)},updateFont(e){this.preferences.font=e,this.$emit("update-font",e)},cancel(e){if("metadata"===e)return this.editingMetadata=!1,void this.cloneMetadata();if("relays"===e)return this.editingRelays=!1,void this.cloneRelays();if("preferences"!==e);else{this.editingPreferences=!1,this.clonePreferences();for(let[e,a]of Object.entries(this.preferences.color))this.updateColor(a,e);this.updateFont(this.preferences.font)}},shareRelay(e){this.hasJustSharedRelay=!0,this.$store.dispatch("recommendRelay",e),setTimeout((()=>{this.hasJustSharedRelay=!1}),5e3)},async logout(){this.$q.dialog({title:"logout?",message:"this will not delete your local nostr database but will allow you to login as another user. continue?",cancel:{color:"accent"},ok:{color:"accent"}}).onOk((async()=>{J.Z.clear(),window.location.reload()}))},async hardReset(){this.$q.dialog({title:"delete all data?",message:"do you really want to delete all data from this device?",cancel:{color:"accent"},ok:{color:"accent"}}).onOk((async()=>{J.Z.clear(),await(0,ee.UD)(),window.location.reload()}))},lightOrDark(e){var a,t,s,l;return e.match(/^rgb/)?(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),a=e[1],t=e[2],s=e[3]):(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")),a=e>>16,t=e>>8&255,s=255&e),l=Math.sqrt(a*a*.299+t*t*.587+s*s*.114),l>127.5?"light":"dark"},googleFontsName(e){try{return e.replace(" ","+")}catch(a){console.log("error for font ",e)}},closeSelects(e){this.choosingFont=!1,this.choosingTheme=!1}}};var be=t(69885),we=t(8326),ve=t(24455),Se=t(66611),Ce=t(50926),xe=t(13246),Re=t(490),_e=t(23175),Pe=t(61123),Me=t(63190),$e=t(87743),qe=t(44458),De=t(11821),We=t(62146);const ze=(0,re.Z)(ke,[["render",E],["__scopeId","data-v-369f3058"]]),je=ze;ue()(ke,"components",{QPage:be.Z,QForm:we.Z,QBtn:ve.Z,QInput:Se.Z,QIcon:ce.Z,QSeparator:Ce.Z,QList:xe.Z,QItem:Re.Z,QToggle:_e.Z,QExpansionItem:Pe.Z,QCardSection:Me.Z,QDialog:$e.Z,QCard:qe.Z,QCardActions:De.Z}),ue()(ke,"directives",{ClosePopup:We.Z})}}]);