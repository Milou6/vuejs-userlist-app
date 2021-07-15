(function(e){function t(t){for(var n,a,c=t[0],l=t[1],i=t[2],d=0,b=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vuejs-userlist-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0764":function(e,t,r){"use strict";r("1c47")},"1c47":function(e,t,r){},9042:function(e,t,r){},a766:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"app-wrapper",class:"relative flex flex-col items-center bg-gray-100 h-screen dark:bg-gray-800 "},s={class:"h-64 bg-gradient-to-r from-green-400 to-blue-500 text-gray-700 mb-8 py-4 w-full text-5xl font-extrabold dark:from-indigo-900 dark:to-green-500 dark:text-gray-200"},a=Object(n["e"])(" User List "),c=Object(n["f"])("div",{class:"absolute top-56 transform -skew-y-6 bg-gray-100 h-32 w-full dark:bg-gray-800"},null,-1),l={class:"flex flex-col z-10 absolute top-44 gap-y-8 p-8 items-center justify-center bg-white rounded border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600"};function i(e,t,r,i,u,d){var b=Object(n["m"])("font-awesome-icon"),f=Object(n["m"])("ToggleMode"),m=Object(n["m"])("AddUser"),g=Object(n["m"])("UsersList");return Object(n["i"])(),Object(n["d"])("div",o,[Object(n["f"])("h1",s,[a,Object(n["f"])(b,{icon:"user-friends",size:"2x"})]),c,Object(n["f"])(f,{onToggleTheme:e.toggleTheme,toggled:e.isDarkThemeOn},null,8,["onToggleTheme","toggled"]),Object(n["f"])("div",l,[Object(n["f"])(m,{onAddUser:e.addUser},null,8,["onAddUser"]),Object(n["f"])(g,{onSortUsers:e.sortUsers,users:e.users},null,8,["onSortUsers","users"]),Object(n["f"])("button",{id:"delete-btn",onClick:t[1]||(t[1]=function(){return e.deleteLastUser&&e.deleteLastUser.apply(e,arguments)}),class:"btn bg-gray-400 dark:bg-green-600"}," Delete Last User ")])])}var u=r("2909"),d=r("1da1"),b=(r("96cf"),r("99af"),r("fb6a"),r("4e82"),r("bc3a")),f=r.n(b),m=(r("b0c0"),Object(n["s"])("data-v-45b7c3a0"));Object(n["k"])("data-v-45b7c3a0");var g={id:"usersTable",class:"max-h-40 border rounded-xl overflow-y-auto overscroll-contain dark:border-opacity-0"},h={class:"table-auto relative dark:bg-gray-100 "},p={class:"sticky top-0 bg-white dark:bg-gray-300 dark:text-black"},O=Object(n["e"])(" Name "),j=Object(n["e"])(" Username ");Object(n["j"])();var v=m((function(e,t,r,o,s,a){var c=Object(n["m"])("User");return Object(n["i"])(),Object(n["d"])("div",g,[Object(n["f"])("table",h,[Object(n["f"])("thead",p,[Object(n["f"])("tr",null,[Object(n["f"])("th",{onClick:t[1]||(t[1]=function(t){return e.sortUsers("name")}),class:"cursor-pointer"},[O,Object(n["f"])("span",null,Object(n["n"])(e.getSortingTip("name")),1)]),Object(n["f"])("th",{onClick:t[2]||(t[2]=function(t){return e.sortUsers("username")}),class:"cursor-pointer"},[j,Object(n["f"])("span",null,Object(n["n"])(e.getSortingTip("username")),1)])])]),Object(n["f"])("tbody",null,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["l"])(e.users,(function(e,t){return Object(n["i"])(),Object(n["d"])(c,{key:t,name:e.name,username:e.username},null,8,["name","username"])})),128))])])])})),y={class:"border-b border-t border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-200"},k={class:"border-r text-left py-1 px-2 "},x={class:" text-left py-1 px-2"};function w(e,t,r,o,s,a){return Object(n["i"])(),Object(n["d"])("tr",y,[Object(n["f"])("td",k,Object(n["n"])(e.name),1),Object(n["f"])("td",x,Object(n["n"])(e.username),1)])}var U=Object(n["g"])({name:"User",props:{name:String,username:String}});U.render=w;var T=U,S=Object(n["g"])({name:"UsersList",components:{User:T},props:{users:Array},data:function(){return{sortingCol:"",sortingOrder:""}},methods:{sortUsers:function(e){this.sortingCol===e?this.sortingOrder="asc"===this.sortingOrder?"desc":"asc":(this.sortingCol=e,this.sortingOrder="asc"),""===this.sortingCol&&(this.sortingCol=e,this.sortingOrder="asc"),this.$emit("sort-users",this.sortingCol,this.sortingOrder)},getSortingTip:function(e){return e===this.sortingCol&&"asc"===this.sortingOrder?"▲":"▼"}}});r("cd82");S.render=v,S.__scopeId="data-v-45b7c3a0";var L=S,M=Object(n["s"])("data-v-e377e2fa");Object(n["k"])("data-v-e377e2fa");var C={class:"flex px-2"},A=Object(n["f"])("div",{class:"flex flex-col justify-around"},[Object(n["f"])("label",null,"Name"),Object(n["f"])("label",null,"Username")],-1),_={class:"flex flex-col flex-grow"},D=Object(n["f"])("input",{type:"submit",value:"Add",class:"btn"},null,-1);Object(n["j"])();var I=M((function(e,t,r,o,s,a){return Object(n["i"])(),Object(n["d"])("form",{onSubmit:t[3]||(t[3]=Object(n["r"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"])),class:"w-full dark:text-gray-200"},[Object(n["f"])("div",C,[A,Object(n["f"])("div",_,[Object(n["q"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),name:"name",placeholder:" John...",class:"w-full rounded border ml-2 mb-2 border-gray-200 focus:border-green-200 focus:border-2 focus:outline-none dark:text-gray-600"},null,512),[[n["o"],e.name]]),Object(n["q"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.username=t}),name:"username",placeholder:" Doe...",class:"w-full rounded border ml-2 mb-2 border-gray-200 focus:border-green-200 focus:border-2 focus:outline-none dark:text-gray-600"},null,512),[[n["o"],e.username]])])]),D],32)})),E=Object(n["g"])({name:"AddUser",data:function(){return{name:"",username:""}},methods:{onSubmit:function(){var e=this;if(this.name&&this.username){var t={name:this.name,username:this.username};f.a.post("https://jsonplaceholder.typicode.com/users",t).then((function(r){console.log(r),201===r.status&&(e.$emit("add-user",t),e.name="",e.username="")}))}}}});E.render=I,E.__scopeId="data-v-e377e2fa";var P=E,$={class:"mr-4 absolute right-0 top-6"},B={class:"transform hover:scale-125"};function J(e,t,r,o,s,a){return Object(n["i"])(),Object(n["d"])("div",$,[Object(n["f"])("div",B,[Object(n["f"])("label",{onClick:t[1]||(t[1]=function(){return e.toggleMode&&e.toggleMode.apply(e,arguments)}),for:"mode",class:"cursor-pointer text-2xl"},Object(n["n"])(e.themeIcon),1)]),Object(n["f"])("input",{onClick:t[2]||(t[2]=function(){return e.toggleMode&&e.toggleMode.apply(e,arguments)}),type:"checkbox",name:"mode",id:"checkbox",checked:e.toggled,class:"invisible"},null,8,["checked"])])}var q=Object(n["g"])({name:"ToggleMode",props:{toggled:Boolean},computed:{themeIcon:function(){return this.toggled?"☀️":"🌙"}},methods:{toggleMode:function(){this.toggled?this.$emit("toggle-theme","light"):this.$emit("toggle-theme","dark")}}});q.render=J;var z=q,N=r("ecee"),R=r("c074"),V=r("ad3d");N["c"].add(R["a"]);var F=Object(n["g"])({name:"App",components:{UsersList:L,AddUser:P,ToggleMode:z,FontAwesomeIcon:V["a"]},data:function(){return{users:[],isDarkThemeOn:!1}},mounted:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.users=t.data})).catch((function(e){return console.log(e)}));var t=localStorage.getItem("theme");t?(this.isDarkThemeOn="dark"===t,"dark"===t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),this.isDarkThemeOn=!0):(document.documentElement.classList.remove("dark"),this.isDarkThemeOn=!1)},methods:{toggleTheme:function(e){"light"===e?(this.isDarkThemeOn=!1,document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(this.isDarkThemeOn=!0,document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))},addUser:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=[].concat(Object(u["a"])(t.users),[e]),t.users=n,r.next=4,t.users;case 4:o=document.getElementById("usersTable"),o.scrollBy({top:999,behavior:"smooth"});case 6:case"end":return r.stop()}}),r)})))()},deleteLastUser:function(){var e=this;if(confirm("Are you sure you want to delete last User?")){var t=this.users[this.users.length-1].id;f.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(t){if(console.log(t),200===t.status){var r=e.users.slice(0,-1);e.users=r}})).catch((function(e){return console.log(e)}))}},sortUsers:function(e,t){var r=Object(u["a"])(this.users);r.sort((function(t,r){var n=t[e],o=r[e];return n<o?-1:n>o?1:0})),"desc"===t&&r.reverse(),this.users=r}}});r("0764");F.render=i;var G=F;r("a766");Object(n["c"])(G).mount("#app")},cd82:function(e,t,r){"use strict";r("9042")}});
//# sourceMappingURL=app.3d738bfc.js.map