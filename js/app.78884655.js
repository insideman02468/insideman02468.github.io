(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),i=a.n(n);i.a},1356:function(t,e,a){},"235f":function(t,e,a){"use strict";var n=a("fc27"),i=a.n(n);i.a},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c5","./az.js":"485c5","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return a(e)}function r(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="4678"},"46ca":function(t){t.exports=[["Tokyo","Seoul","Shanghai","Delhi","Bangkok","Beijing","Bengaluru","Guangzhou","Hanoi","Hong Kong","Jakarta","Karachi","Kolkata","Kuala Lumpur","Manila","Mumbai","Nanjing","Osaka","Singapore","Taipei","Wuhan","Yokohama"],["35.689487","37.566536","31.230391","28.70406","13.756331","39.904202","12.971599","23.12911","23.12911","22.396427","-6.17511","24.860735","22.572645","3.139003","14.599512","19.075983","32.060253","34.693737","1.352083","25.032969","30.59285","35.443707"],["139.691711","126.977966","121.473701","77.102493","100.501762","116.407394","77.594566","113.264381","113.264381","114.109497","106.865036","67.001137","88.363892","101.686852","120.984222","72.877655","118.796875","135.502167","103.819839","121.565414","114.305542","139.638031"]]},4795:function(t){t.exports=["Tokyo","Seoul","Shanghai","Delhi","Bangkok","Beijing","Bengaluru","Guangzhou","Hanoi","Hong Kong","Jakarta","Karachi","Kolkata","Kuala Lumpur","Manila","Mumbai","Nanjing","Osaka","Singapore","Taipei","Wuhan","Yokohama"]},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("bb71");a("da64");n["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"gray lighten-4"},[a("Navbar",{attrs:{fixed:""}}),a("v-content",{attrs:{xs12:"",sm12:"",md12:""}},[a("div",{staticClass:"backgroundStyle"},[a("div",{staticClass:"transmission"},[a("router-view")],1)])])],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-toolbar",{attrs:{flat:"",app:""}},[a("v-toolbar-side-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("Visualize ")]),a("span",[t._v("Techno-economic")])]),a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"green--text"},on:{click:function(e){return t.GoToLabsite()}}},[a("span",[t._v("Our Lab Website")]),a("v-icon",{attrs:{right:""}},[t._v("arrow_right_alt")])],1)],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.links,function(e){return a("v-list-tile",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-tile-action",[a("v-icon",{staticClass:"black--text"},[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"black--text"},[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},c=[],l={data:function(){return{drawer:!1,links:[{icon:"home",text:"home",route:"/"},{icon:"insert_chart",text:"charts",route:"/charts"}]}},methods:{GoToLabsite:function(){location.href="http://farzaneh-lab.kyushu-u.ac.jp/index.html"}}},u=l,d=a("2877"),f=a("6544"),h=a.n(f),p=a("8336"),m=a("132d"),_=a("8860"),b=a("ba95"),v=a("40fe"),g=a("5d23"),j=a("f774"),y=a("9910"),x=a("71d9"),k=a("706c"),w=a("2a7f"),S=Object(d["a"])(u,o,c,!1,null,null,null),z=S.exports;h()(S,{VBtn:p["a"],VIcon:m["a"],VList:_["a"],VListTile:b["a"],VListTileAction:v["a"],VListTileContent:g["a"],VListTileTitle:g["b"],VNavigationDrawer:j["a"],VSpacer:y["a"],VToolbar:x["a"],VToolbarSideIcon:k["a"],VToolbarTitle:w["a"]});var O={name:"App",components:{Navbar:z},data:function(){return{}}},C=O,T=(a("034f"),a("7496")),V=a("549c"),D=Object(d["a"])(C,r,s,!1,null,null,null),M=D.exports;h()(D,{VApp:T["a"],VContent:V["a"]});var H=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{staticClass:"my-5"},[a("v-card",{staticClass:"pa-3",attrs:{flat:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",[a("h2",[t._v("Header")]),a("p",[t._v("test")])])])],1)],1)],1)],1)},K=[],A={data:function(){return{}}},$=A,G=a("b0af"),B=a("a523"),U=a("0e8f"),E=a("a722"),P=Object(d["a"])($,I,K,!1,null,null,null),W=P.exports;h()(P,{VCard:G["a"],VContainer:B["a"],VFlex:U["a"],VLayout:E["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts"},[a("v-app",[a("Input_Data")],1)],1)},J=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test_json"},[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md3:""}},[a("v-card",{attrs:{width:"100%"}},[a("v-subheader",[t._v("Selected city from bottm select box")]),a("v-btn",{attrs:{block:""}},[a("select",{staticStyle:{width:"100%","text-align":"center"},on:{change:t.select_city}},t._l(t.input_cities,function(e){return a("option",{key:e,attrs:{large:""},domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])],1),a("div",{staticStyle:{height:"350px",width:"100%",overflow:"auto"}},[a("l-map",{attrs:{zoom:t.zoom,center:t.selected_city_geodata.slice(1.3),attribution:t.attribution,options:{zoomControl:!0}}},[a("l-tile-layer",{attrs:{url:t.url}}),a("l-marker",{attrs:{"lat-lng":t.selected_city_geodata.slice(1.3)}},[a("l-tooltip",[t._v(t._s(t.selected_city_geodata))])],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md3:""}},[a("v-subheader",[t._v("Rader chart in "+t._s(t.selected_city_column[0]))]),a("apexchart",{attrs:{type:"radar",height:"350px",options:t.radar_chartOptions,series:t.radar_series}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("div",{staticStyle:{height:"460px",width:"100%",overflow:"auto"}},[a("v-subheader",[t._v("Selected city: "+t._s(t.selected_city_column[0]))]),a("v-card",{staticStyle:{padding:"5%"}},[a("v-list",{attrs:{"three-line":""}},t._l(t.first_column_input_data.slice(1,18),function(e,n){return a("v-list-tile",{key:e.id},[a("div",{staticStyle:{width:"100%"}},[a("v-subheader",[t._v(t._s(t.first_column_input_data[n+1]))])],1),a("div",{staticStyle:{width:"100%"}},[a("v-slider",{attrs:{min:"0",step:"0.1","thumb-label":"always","thumb-size":24},model:{value:t.selected_city_column[n+1],callback:function(e){t.$set(t.selected_city_column,n+1,e)},expression:"selected_city_column[index+1]"}})],1),a("div",{staticStyle:{padding:"5%",width:"30%"}},[a("v-text-field",{model:{value:t.selected_city_column[n+1],callback:function(e){t.$set(t.selected_city_column,n+1,e)},expression:"selected_city_column[index+1]"}},[t._v("\n                    "+t._s(t.selected_city_column[n+1]))])],1)])}),1)],1)],1)])],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("div",{staticStyle:{height:"500px",width:"100%",overflow:"auto"}},[a("h2",[t._v("Input data")]),a("hot-table",{ref:"input_data_ref",staticStyle:{width:"auto",height:"auto",overflow:"auto"},attrs:{data:t.input_data,autoWrapRow:!1,colHeaders:!0,rowHeaders:!0,readOnly:!1,licenseKey:"non-commercial-and-evaluation"},model:{value:t.input_data,callback:function(e){t.input_data=e},expression:"input_data"}})],1),a("div",{staticClass:"box14",staticStyle:{height:"200px",width:"100%",overflow:"auto"}},[a("h2",[t._v("Raws")]),a("p",[t._v("selected_city: "+t._s(t.selected_city))]),a("p",[t._v("selected_city_column: "+t._s(t.selected_city_column))]),a("p",[t._v("first_column_input_data: "+t._s(t.first_column_input_data))]),a("p",[t._v("Max_column:"+t._s(t.Max_column))]),a("p",[t._v("Min_column:"+t._s(t.Min_column))]),a("p",[t._v("GHG:"+t._s(t.GHG))]),a("p",[t._v("mu:"+t._s(t.mu))]),a("p",[t._v("Social_Welfare:"+t._s(t.Social_Welfare))]),a("p",[t._v("radar_series:"+t._s(t.radar_series))])]),a("div",{staticStyle:{height:"auto",width:"100%",overflow:"auto"}},[a("h2",[t._v("Input geodata")]),a("hot-table",{ref:"input_geodata_ref",staticStyle:{width:"auto",height:"auto",overflow:"auto"},attrs:{data:t.input_geodata,colHeaders:!0,rowHeaders:!0,readOnly:!0,licenseKey:"non-commercial-and-evaluation"}})],1),a("h2",[t._v("Input calculation")]),a("hot-table",{ref:"input_calculation_ref",staticStyle:{width:"auto",height:"auto",overflow:"auto"},attrs:{data:t.input_calculation,readOnly:!0,colHeaders:!0,rowHeaders:!0,licenseKey:"non-commercial-and-evaluation"}}),a("h2",[t._v("Input graph")]),a("hot-table",{ref:"input_graph_ref",staticStyle:{width:"auto",height:"auto",overflow:"auto"},attrs:{data:t.input_graph,readOnly:!0,colHeaders:!0,rowHeaders:!0,licenseKey:"non-commercial-and-evaluation"}})],1)],1)],1)],1)},F=[],Y=(a("20d6"),a("bd86")),q=(a("c5f6"),a("7618")),Q=a("b304"),X=a("4795"),Z=a("fb9a"),tt=a("6343"),et=a("46ca"),at=a("0594"),nt=(a("f22c"),a("2699")),it=a("a40a"),rt=a("4e2b"),st=a("31dc"),ot=a("fbba");function ct(t,e,a){if(1!=a&&(a=0),0==a)for(var n=0;n<e.length;n++)t.push(e[n]);else for(n=0;n<t.length;n++)Array.prototype.push.apply(t[n],e[n]);return t}function lt(t,e){for(var a=0;a<t.length;a++)e[a]>t[a]&&(t[a]=e[a]);return t}function ut(t,e){for(var a=0;a<t.length;a++)e[a]<t[a]&&(t[a]=e[a]);return t}var dt=function(t){return t[0].map(function(e,a){return t.map(function(t){return t[a]})})},ft=a("f22c");function ht(t,e){for(var a=[],n=0;n<t.length;n++)a.push(t[n][e]);return a}var pt=function(t){if("object"!==Object(q["a"])(t)||0===t.length)return!1;var e,a=0;for(e in t)a+=Number(t[e]);return a/t.length};function mt(t,e,a){return(t-e)/(a-e)}function _t(t,e){return t*e*.5}var bt={components:{HotTable:at["a"],LMap:nt["a"],LTileLayer:it["a"],LMarker:rt["a"],LTooltip:st["a"],LIcon:ot["a"]},data:function(){var t;return t={input_data:Q,input_cities:X,input_calculation:Z,input_graph:tt,input_geodata:et,table:0,selected_city:"",selected_data:Q,selected_city_geodata:["Tokyo","35.689487","139.691711"],selected_city_column:["Tokyo",4.8,40,6,33,1,0,1,100,100,11,1,100,100,100,4,1,1],matrix:[],before_matrix:[],after_matrix:[],merged_matrix:[],check1:[],check2:[],check3:[],max_column:[10,86,57.3,100,14.8,0,1,100,100,100,1,100,100,100,14,.9,1],min_column:[.5,18.5,5.7,27,1.2,0,0,0,0,0,0,0,1e3,8900,2.2,.3,.2],avarage_column:[4.6,46.7,22.5,107.8,6,0,1,.599,70.1,38.6,.17,82.8,9800,52e3,5,.791,.856259512],attribution:"<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",url:"https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",zoom:3,icon:L.icon({iconUrl:"static/images/baseball-marker.png",iconSize:[32,37],iconAnchor:[16,37]})},Object(Y["a"])(t,"url","http://{s}.tile.osm.org/{z}/{x}/{y}.png"),Object(Y["a"])(t,"radar_series",[{name:"Selected City",data:[.5,.5,.5,.5]},{name:"Average 22 cities",data:[.65,.22,.33,.5]}]),Object(Y["a"])(t,"radar_chartOptions",{labels:["Energy and Climate","City Plannig","Economic","Social Welfare"],title:{text:""},dropShadow:{enabled:!0,blur:1,left:1,top:1},yaxis:{show:!0,showAlways:!0,tickAmount:5,min:0,max:1,forceNiceScale:!1,floating:!1}}),t},methods:{select_city:function(t){console.log(t.target.value),console.log(t),this.selected_city=t.target.value,this.selected_city_column=this.$refs.input_data_ref.table.getDataAtCol(2+this.input_cities.findIndex(function(e){return e===t.target.value})),this.selected_city_geodata=this.$refs.input_geodata_ref.table.getDataAtCol(this.input_cities.findIndex(function(e){return e===t.target.value})),this.radar_series[0].name=t.target.value,this.radar_series[0].data=this.$refs.input_graph_ref.table.getDataAtCol(this.input_cities.findIndex(function(e){return e===t.target.value})),this.radar_series[0].data=this.radar_series[0].data.slice(1,5).map(function(t){return t.toFixed(2)})}},computed:{first_column_input_data:function(){return ht(this.input_data,0)},Max_column:function(){return ht(this.input_data,24)},Min_column:function(){return ht(this.input_data,25)},GHG:function(){return mt(4.6,10,.5)},mu:function(){return ft([.55,.69,1,.98,1])},Social_Welfare:function(){return _t(.79,.8)}},watch:{selected_city_column:{handler:function(t,e){var a=this;this.matrix=dt(this.input_data),this.matrix=this.matrix[2+this.input_cities.findIndex(function(t){return t===a.selected_city_column[0]})],this.max_column=lt(this.max_column,this.selected_city_column.slice(1,18)),this.min_column=ut(this.min_column,this.selected_city_column.slice(1,18)),this.before_matrix=this.$refs.input_data_ref.table.getData(0,0,17,1+this.input_cities.findIndex(function(t){return t===a.selected_city_column[0]})),this.after_matrix=this.$refs.input_data_ref.table.getData(0,3+this.input_cities.findIndex(function(t){return t===a.selected_city_column[0]}),17,23),this.merged_matrix=ct(this.before_matrix,dt([this.selected_city_column]),1),this.merged_matrix=ct(this.merged_matrix,this.after_matrix,1);for(var n=[],i=1;i<18;i++)n.push(pt(this.merged_matrix[i].slice(2,24)).toFixed(2));this.merged_matrix=ct(ct(dt([dt(this.merged_matrix)[0]]),dt([["Average 22 cities"].concat(n.map(function(t){return String(t)}))]),1),this.$refs.input_data_ref.table.getData(0,2,17,23),1),this.$refs.input_data_ref.table.loadData(this.merged_matrix),this.merged_matrix=ct(this.merged_matrix,dt([["Max"].concat(this.max_column)]),1),this.merged_matrix=ct(this.merged_matrix,dt([["Min"].concat(this.min_column)]),1)},deep:!0}}},vt=bt,gt=(a("235f"),a("ba0d")),jt=a("e0c7"),yt=a("2677"),xt=Object(d["a"])(vt,R,F,!1,null,null,null),kt=xt.exports;h()(xt,{VBtn:p["a"],VCard:G["a"],VContainer:B["a"],VFlex:U["a"],VLayout:E["a"],VList:_["a"],VListTile:b["a"],VSlider:gt["a"],VSubheader:jt["a"],VTextField:yt["a"]});var wt={components:{Input_Data:kt},data:function(){return{}}},St=wt,zt=Object(d["a"])(St,N,J,!1,null,null,null),Ot=zt.exports;h()(zt,{VApp:T["a"]}),n["a"].use(H["a"]);var Ct=new H["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:W},{path:"/charts",name:"charts",component:Ot}]}),Tt=a("2f62");n["a"].use(Tt["a"]);var Vt=new Tt["a"].Store({state:{},mutations:{},actions:{}}),Dt=a("cb43"),Mt=a("1321"),Ht=a.n(Mt),It=a("e11e");a("6cc5");delete It["Icon"].Default.prototype._getIconUrl,It["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),n["a"].use(Dt["default"]),n["a"].use(Ht.a),n["a"].component("apexchart",Ht.a),n["a"].config.productionTip=!1,new n["a"]({router:Ct,store:Vt,render:function(t){return t(M)}}).$mount("#app")},6343:function(t){t.exports=[["Cities","Average 22 cities","Tokyo","Seoul","Shanghai","Delhi","Bangkok","Beijing","Bengaluru","Guangzhou","Hanoi","Hong Kong","Jakarta","Karachi","Kolkata","Kuala Lumpur","Manila","Mumbai","Nanjing","Osaka","Singapore","Taipei","Wuhan","Yokohama"],["Energy and Climate",.645738268,.819999841,.614672229,.274522982,.329569212,.65031088,.355747952,.555603275,.305640061,.690412352,.724960385,.590928087,.539545212,.673986693,.671296272,.869392012,.606392586,.488495032,.655455334,.721529768,.794865252,.445074012,.76643207],["City Planning ",.22139781,.987701176,.879020018,.504180561,.427280069,.197911015,.390487152,.248772011,.473922989,.079621434,.734901728,.104945949,.05392535,.07304873,.208504509,.05304566,.276102152,.31415088,.987701176,1,.780666344,.34773512,.987305779],["Economic ",.329063931,.938354241,.472591938,.314640226,.136840182,.224350422,.299707419,.06175581,.341770273,.092277445,.540932744,.201692515,.098895455,.082363715,.371790904,.033295011,.063954621,.264565877,.7824372,.797884868,.289031727,.275462653,.673548327],["Social Welfare",.802860579,.969117361,.94766813,.754971784,.576792688,.727350768,.723914408,.554481182,.723914408,.519383077,.989346059,.651507564,.364968568,.364968568,.800566562,.478673674,.364968568,.293523976,.969117361,1,.651507564,.723914408,.969117361],["USDI",.499765147,.928793155,.728488079,.462078888,.367620538,.449980771,.442464233,.35515307,.461311933,.345423577,.747535229,.387268529,.264333646,.298591926,.513039562,.358601589,.327854482,.340183941,.848677768,.879853659,.629017722,.448046548,.849100884]]},b304:function(t){t.exports=[["Cities","Average 22 cities","Tokyo","Seoul","Shanghai","Delhi","Bangkok","Beijing","Bengaluru","Guangzhou","Hanoi","Hong Kong","Jakarta","Karachi","Kolkata","Kuala Lumpur","Manila","Mumbai","Nanjing","Osaka","Singapore","Taipei","Wuhan","Yokohama","Max","Min"],["CO2 emissions per person (tonnes/person)","4.6","4.8","3.7","9.7","2.4","6.7","8.2","0.5","9.2","1.9","5.4","1.2","3.1","1.5","7.2","1.6","1","5.7","7.6","7.4","4.2","5.1","5.2","10","0.5"],["Daily nitrogen dioxide levels (ug/m3)","46.7","39.5","71.4","53","47","42.7","53","41","56","20","50","18.5","59.5","61.4","40.1","33.7","86","48","45.1","22","45.7","54","39.5","86","18.5"],["Daily sulphur dioxide levels (ug/m3)","22.5","5.7","17.2","35","7","12.6","34","15.1","39","25","14","52.7","57.3","7.1","6.2","7.3","34","35","14.3","9","8.6","44","14.3","57.3","5.7"],["Daily suspended particulate matter levels (ug/m3)","107.8","33.1","55","81","384","48.1","121","343","70","110","47","42.6","180.4","189.6","44","48","202","100","35.3","56","50.2","105","27","390","27"],["Energy consumption per US$ GDP (MJ/US$)","6","1.2","3.2","14.8","7.7","6.1","12.3","4.6","11.7","9.5","1.5","2.4","7.8","4","5","4","6.5","10.5","1.6","2.9","1.4","10","2.4","14.8","1.2"],["Water ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["Water Accessibility","1","1","1","1","0.9","1","1","1","0.787367223","0.8","1","1","0.8","0.8","1","0.7","0.836","0.639425893","1","1","0.888888889","0.935587189","1","1","0"],["Share of wastewater treated (%)","0.599","100","82","78","55","12.2","80.3","42.4","74.1","1","98","1","1","1","0","1","67.6","86","100","100","77.4","90.4","100","100","0"],["Population with access to sanitation (%)","70.1","100","100","72.5","54","51","70.4","53","79","40","93","67","57","52","70","12","42","64.7","100","100","99","66.5","99.8","100","0"],["Green spaces per person (m2/person)","38.6","10.6","23.4","18.1","18.8","3.3","88.4","41","166.3","11.2","105.3","2.3","17","1.8","43.9","4.5","6.6","108.4","4.5","66.2","49.6","20.9","37.4","166.3","0"],["Superior public transport network , covering trams, light rail, subway and BRT (km/km2)","0.17","0.94","0.64","0.07","0.08","0.04","0.02","0.01","0.07","0.01","0.24","0.19","0.01","0.05","0.27","0.05","0.01","0.01","0.94","1","0.55","0.01","0.94","1","0"],["Share of waste collected and adequately disposed (%)","82.8","100","100","82.3","66.6","12.2","80.3","42.4","74.1","10","98","1","1","1","1","1","67.6","86","100","100","77.4","90.4","100","100","0"],["GDP per person (current prices) (US$)","9800","70759.6","19597.1","11463.7","2004.1","9095.4","10136.7","2066.3","16834.1","1739.6","29990","7636.4","5379","1414.1","12365","5365.3","2184.3","7284.9","70927.4","36519.6","48400","8093.9","30211.7","70927.4","1000"],["Average per-worker labor productivity level (US$)","52000","118000","68000","38000","37000","25000","38000","13500","38000","8900","104000","23000","13500","37000","54500","17000","13500","38000","72000","125000","15000","38000","100000","125000","8900"],["Annual Rate of Unemployment (%)","5","3.6","4.8","4.2","5.3","5.7","4.3","9.4","5.7","4.5","8.5","5.6","9.4","9.4","4.5","13.9","9.4","4.3","3.6","2.2","6","4.3","3","14","2.2"],["HDI","0.791","0.90346208","0.90099213","0.73768059","0.623558794","0.74","0.73768059","0.623558794","0.73768059","0.6","0.917157319","0.68884703","0.497","0.497","0.789449738","0.681798894","0.497","0.45","0.90346208","0.924865933","0.68884703","0.73768059","0.90346208","0.924865933","0.3"],["Health Index ","0.856259512","0.978","0.947","0.851","0.714","0.801051882","0.798541116","0.675003981","0.798541116","0.649501526","0.992825131","0.745678663","0.538003764","0.538003764","0.85458135","0.5","0.538003764","0.487126145","0.978","1","0.745678663","0.798541116","0.978","1","0.2"]]},fb9a:function(t){t.exports=[["Calculation","Average 22 cities","Tokyo","Seoul","Shanghai","Delhi","Bangkok","Beijing","Bengaluru","Guangzhou","Hanoi","Hong Kong","Jakarta","Karachi","Kolkata","Kuala Lumpur","Manila","Mumbai","Nanjing","Osaka","Singapore","Taipei","Wuhan","Yokohama"],["GHG Emission",.568421053,.547368421,.663157895,.031578947,.8,.347368421,.189473684,1,.084210526,.852631579,.484210526,.926315789,.726315789,.894736842,.294736842,.884210526,.947368421,.452631579,.252631579,.273684211,.610526316,.515789474,.505263158],["Nox",.582222222,.688888889,.216296296,.488888889,.577777778,.641481481,.488888889,.666666667,.444444444,.977777778,.533333333,1,.392592593,.364444444,.68,.774814815,0,.562962963,.605925926,.948148148,.597037037,.474074074,.688888889],["SOx",.674418605,1,.777131783,.432170543,.974806202,.86627907,.451550388,.817829457,.354651163,.625968992,.839147287,.089147287,0,.972868217,.990310078,.968992248,.451550388,.432170543,.833333333,.936046512,.94379845,.257751938,.833333333],["PM",.777410468,.983195592,.922865014,.851239669,.016528926,.941873278,.741046832,.129476584,.8815427,.771349862,.944903581,.957024793,.577410468,.552066116,.953168044,.94214876,.517906336,.798898072,.977134986,.920110193,.936088154,.785123967,1],["EI",.647058824,1,.852941176,0,.522058824,.639705882,.183823529,.75,.227941176,.389705882,.977941176,.911764706,.514705882,.794117647,.720588235,.794117647,.610294118,.316176471,.970588235,.875,.985294118,.352941176,.911764706],["Energy and Climate",.645738268,.819999841,.614672229,.274522982,.329569212,.65031088,.355747952,.555603275,.305640061,.690412352,.724960385,.590928087,.539545212,.673986693,.671296272,.869392012,.606392586,.488495032,.655455334,.721529768,.794865252,.445074012,.76643207],["Water Accessibility",.9,1,1,1,.9,1,1,1,.787367223,.8,1,1,.8,.8,1,.7,.836,.639425893,1,1,.888888889,.935587189,1],["Share of wastewater treated (%)",.00599,1,.82,.78,.55,.122,.803,.424,.741,.01,.98,.01,.01,.01,0,.01,.676,.86,1,1,.774,.904,1],["Population with access to sanitation (%)",.701,1,1,.725,.54,.51,.704,.53,.79,.4,.93,.67,.57,.52,.7,.12,.42,.647,1,1,.99,.665,.998],["Transport network",.17,.94,.64,.07,.08,.04,.02,.01,.07,.01,.24,.19,.01,.05,.27,.05,.01,.01,.94,1,.55,.01,.94],["Share of waste collected and adequately disposed (%)",.828,1,1,.823,.666,.122,.803,.424,.741,.1,.98,.01,.01,.01,.01,.01,.676,.86,1,1,.774,.904,1],["City Planning ",.22139781,.987701176,.879020018,.504180561,.427280069,.197911015,.390487152,.248772011,.473922989,.079621434,.734901728,.104945949,.05392535,.07304873,.208504509,.05304566,.276102152,.31415088,.987701176,1,.780666344,.34773512,.987305779],["GDP per person (current prices) (US$)",.125844805,.997600368,.265948684,.149636623,.014359178,.11576864,.130659799,.015248672,.226436275,.010576684,.414572828,.094904143,.062622091,.005921856,.162525705,.062426173,.016936137,.089877502,1,.507949674,.67784588,.101446643,.417743259],["Average per-worker labor productivity level (US$)",.371231697,.939707149,.509043928,.250645995,.24203273,.138673557,.250645995,.039621016,.250645995,0,.819121447,.121447028,.039621016,.24203273,.392764858,.069767442,.039621016,.250645995,.543496985,1,.052540913,.250645995,.784668389],["Annual Rate of Unemployment (%)",.762711864,.881355932,.779661017,.830508475,.737288136,.703389831,.822033898,.389830508,.703389831,.805084746,.466101695,.711864407,.389830508,.389830508,.805084746,.008474576,.389830508,.822033898,.881355932,1,.677966102,.822033898,.93220339],["Economic ",.329063931,.938354241,.472591938,.314640226,.136840182,.224350422,.299707419,.06175581,.341770273,.092277445,.540932744,.201692515,.098895455,.082363715,.371790904,.033295011,.063954621,.264565877,.7824372,.797884868,.289031727,.275462653,.673548327],["HDI",.785768553,.965746488,.961793719,.700439194,.517805144,.704151046,.700439194,.517805144,.700439194,.480102986,.987663571,.622288734,.315267627,.315267627,.783287602,.611009297,.315267627,.240051493,.965746488,1,.622288734,.700439194,.965746488],["Health Index ",.82032439,.9725,.93375,.81375,.6425,.751314853,.748176394,.593754976,.748176394,.561876908,.991031413,.682098328,.422504705,.422504705,.818226687,.375,.422504705,.358907681,.9725,1,.682098328,.748176394,.9725],["Social Welfare",.802860579,.969117361,.94766813,.754971784,.576792688,.727350768,.723914408,.554481182,.723914408,.519383077,.989346059,.651507564,.364968568,.364968568,.800566562,.478673674,.364968568,.293523976,.969117361,1,.651507564,.723914408,.969117361],["USDI",.499765147,.928793155,.728488079,.462078888,.367620538,.449980771,.442464233,.35515307,.461311933,.345423577,.747535229,.387268529,.264333646,.298591926,.513039562,.358601589,.327854482,.340183941,.848677768,.879853659,.629017722,.448046548,.849100884]]},fc27:function(t,e,a){}});
//# sourceMappingURL=app.78884655.js.map