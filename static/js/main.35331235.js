(()=>{"use strict";var e={56821:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(95004),a=n(3426),u=n(81232),i=n(4942),o=n(15861),s=n(29439),c=n(8070),l=n(57492),f=n(21263);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=n(54243),g=n(14584),v=n(22152),y=n(39385),m=n(78684),b=n(2629);const O=function(e){var t=(0,m.default)(),n=(0,r.useState)(window.innerHeight+1),a=(0,s.default)(n,2),u=a[0],i=a[1];return(0,r.useEffect)((function(){if(t&&"web"==v.default.OS){var e=function(e){i(window.innerHeight+1)};return g.default.addEventListener("change",e),function(){return g.default.removeEventListener("change",e)}}}),[t]),(0,b.jsx)(y.default,{style:{height:t&&"web"==v.default.OS?u:"100%"},children:e.children})};var w=n(94305),j=n(51641),S=n(56675),P=new j.QueryClient;function k(){var e=function(){var e=r.useState(!1),t=(0,s.default)(e,2),a=t[0],u=t[1];return r.useEffect((function(){function e(){return(e=(0,o.default)((function*(){try{f.preventAutoHideAsync(),yield l.loadAsync(p(p({},c.Ionicons.font),{},{"space-mono":n(76856)}))}catch(e){console.warn(e)}finally{u(!0),f.hideAsync()}}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a}(),t=(0,h.useInitColorScheme)(),i=r.lazy((function(){return Promise.all([n.e(129),n.e(787)]).then(n.bind(n,27378))}));return e&&t?(0,b.jsx)(u.SafeAreaProvider,{children:(0,b.jsx)(O,{children:(0,b.jsx)(w.AuthProvider,{children:(0,b.jsx)(j.QueryClientProvider,{client:P,children:(0,b.jsxs)(S.IntlProvider,{children:[(0,b.jsx)(r.Suspense,{fallback:(0,b.jsx)(b.Fragment,{}),children:(0,b.jsx)(i,{})}),(0,b.jsx)(a.default,{})]})})})})}):null}},93141:(e,t,n)=>{n.r(t),n.d(t,{FCM_API_KEY:()=>l,FCM_PUBLIC_VAPID_KEY:()=>c,TURN_SERVER:()=>f,accountURL:()=>a,baseURL:()=>u,websockerURL:()=>s});var r=n(29439),a="https://blacktokki.com/account/",u="https://blacktokki.com/messenger/",i="https://blacktokki.com".split("://"),o=(0,r.default)(i,2),s=("https"==o[0]?"wss":"ws")+"://"+o[1],c="BCCi7wopGYI8EhmFxMwIuB5L0hJOBkWh3Wx7VmilJYMhzd5y75JeNEQY1kdw9_n_WIawgmirphxOr4kmBp9-FnQ",l="AIzaSyAN2ydKUtznjBlg8DUAPrUPGIVbqdPzv88",f='{"urls": "turn:34.64.153.219:3478", "credential": "qwer1234", "username": "ydh051541"}'},94305:(e,t,n)=>{n.r(t),n.d(t,{AuthProvider:()=>p,default:()=>h});var r=n(29439),a=n(4942),u=n(95004),i=n(98735),o=n(22362),s=n(2629);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(0,u.createContext)({auth:{},dispatch:function(){}}),d=function(e,t){switch(t.type){case"LOGIN_REQUEST":return l(l({},e),{},{request:{username:t.username,password:t.password}});case"LOGIN_GUEST":return l(l({},e),{},{request:{username:"guest",password:"guest"}});case"LOGIN_SUCCESS":return l(l({},e),{},{user:t.user,request:void 0});case"LOGIN_FAILED":return l(l({},e),{},{request:void 0});case"LOGOUT_REQUEST":return l(l({},e),{},{request:null});case"LOGOUT_SUCCESS":return l(l({},e),{},{user:null,request:void 0});case"REFRESH":return l(l({},e),{},{user:void 0});default:throw new Error("Unhandled action type: "+t.type)}},p=function(e){var t=e.children,n=(0,u.useReducer)(d,{}),a=(0,r.default)(n,2),c=a[0],p=a[1],h=(0,u.useState)(),g=(0,r.default)(h,2),v=g[0],y=g[1],m=(0,u.useMemo)((function(){var e,t;return{user:c.user,groupId:null==(e=c.user)||null==(t=e.membership_set.find((function(e){return null==e.root_group_id})))?void 0:t.group}}),[c]);return(0,u.useEffect)((function(){void 0===c.user?(0,i.checkLogin)().then((function(e){p({type:"LOGIN_SUCCESS",user:e})})).catch((function(e){console.log(e),p({type:"LOGOUT_SUCCESS"})})):void 0!==c.user&&c.request?(0,i.login)(c.request.username,c.request.password).then((function(e){p({type:"LOGIN_SUCCESS",user:e})})).catch((function(e){var t,n;p({type:"LOGIN_FAILED"}),y(null==(t=e.response)||null==(n=t.data)?void 0:n.message)})):c.user&&null===c.request&&(0,o.getNotification)(c.user.id).then((function(e){e&&(0,o.putNotification)(l(l({},e),{},{token:""})).then((function(){(0,i.logout)().then((function(){return p({type:"LOGOUT_SUCCESS"})}))}))}))}),[c]),(0,s.jsx)(f.Provider,{value:{auth:m,error:v,dispatch:p},children:t})};const h=function(){return(0,u.useContext)(f)}},54243:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,setColorScheme:()=>c,useInitColorScheme:()=>s});var r=n(29439),a=n(90519),u=n(70434),i=n(95004),o=n(75043);function s(){var e=(0,i.useState)(!1),t=(0,r.default)(e,2),n=t[0],u=t[1];return(0,i.useEffect)((function(){n||a.default.getItem("color").then((function(e){o.Appearance.set({colorScheme:null==e?"no-preference":e}),u(!0)}))}),[n]),n}function c(e){a.default.setItem("color",e).then((function(){return o.Appearance.set({colorScheme:e})}))}function l(){var e=(0,u.default)().dark;return(0,i.useMemo)((function(){return e?"dark":"light"}),[e])}},78684:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(22152),a=n(91938),u=n.n(a);const i=function(){return u()().isMobile()||"android"==r.default.OS||"ios"==r.default.OS}},56675:(e,t,n)=>{n.r(t),n.d(t,{IntlProvider:()=>c,default:()=>l});var r=n(29439),a=n(95004),u=n(90519),i=n(74157),o=n(2629),s=(0,a.createContext)({locale:"auto",setLocale:function(){}}),c=function(e){var t=e.children,n=(0,a.useState)(!1),i=(0,r.default)(n,2),c=i[0],l=i[1],f=(0,a.useState)(),d=(0,r.default)(f,2),p=d[0],h=d[1];return(0,a.useEffect)((function(){u.default.getItem("locale").then((function(e){h(e||"auto"),l(!0)}))}),[]),c?(0,o.jsx)(s.Provider,{value:{locale:p,setLocale:h},children:t}):(0,o.jsx)(o.Fragment,{})};const l=function(){var e=(0,a.useContext)(s),t=e.locale,n=e.setLocale;return{lang:function(e,n){return"en"==t||0==e.length?e:void 0!=t&&"auto"!=t?i.translations[t][e]:i.default.formatMessage({id:e,defaultMessage:e},n).toString()},locale:t,setLocale:function(e){u.default.setItem("locale",e).then((function(){return n(e)}))}}}},74157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,translations:()=>s});var r,a=n(65281),u=n(5541),i=n(70362),o=n(36099),s={ko:n(6601)},c=null!=(r=o.findBestLanguageTag(Object.keys(s)))?r:{languageTag:"en",isRTL:!1},l=c.languageTag,f=c.isRTL;i.default.forceRTL(f);const d=(0,a.createIntl)({defaultLocale:"en",locale:l,messages:s[l]},(0,u.createIntlCache)())},8070:(e,t,n)=>{n.r(t),n.d(t,{AntDesign:()=>c,Entypo:()=>h,FontAwesome:()=>f,FontAwesome5:()=>p,Ionicons:()=>l,MaterialCommunityIcons:()=>v,MaterialIcons:()=>d,SimpleLineIcons:()=>g});var r=n(4942),a=n(95004),u=n(2629);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){var t=a.lazy((function(){return n.e(869).then(n.bind(n,24496)).then((function(t){return{default:t[e]}}))}));return function(e){return(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(t,o({},e))})}},c=s("AntDesign"),l=s("Ionicons"),f=s("FontAwesome"),d=s("MaterialIcons"),p=s("FontAwesome5"),h=s("Entypo"),g=s("SimpleLineIcons"),v=s("MaterialCommunityIcons")},64948:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f,getToken:()=>l,setToken:()=>c});var r=n(15861),a=n(23408),u=n(93141),i=n(90519),o={baseURL:u.baseURL,withCredentials:!0,headers:{}},s=a.default.create(o);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status?l().then(function(){var e=(0,r.default)((function*(e){if(e){var t=yield s.post("/api/v1/user/sso/refresh/",{token:e},{headers:{Authorization:""},baseURL:u.accountURL});200==t.status&&""!==t.data&&c(t.data)}}));return function(t){return e.apply(this,arguments)}}()).finally((function(){return Promise.reject(e)})):Promise.reject(e)}));var c=function(){var e=(0,r.default)((function*(e){s.defaults.headers.Authorization="JWT "+e,e?yield i.default.setItem("Authorization",e):i.default.removeItem("Authorization")}));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.default)((function*(){var e=yield i.default.getItem("Authorization");return s.defaults.headers.Authorization=e?"JWT "+e:null,e}));return function(){return e.apply(this,arguments)}}();const f=s},98735:(e,t,n)=>{n.r(t),n.d(t,{checkLogin:()=>l,deleteChannel:()=>P,deleteMessengerMember:()=>C,deleteUser:()=>h,getExternalMembershipList:()=>v,getMessengerChannelList:()=>O,getMessengerContentList:()=>E,getMessengerMemberList:()=>k,getNewMessengerContentList:()=>_,getTimerMessageContentList:()=>U,getToken:()=>a.getToken,getUserList:()=>f,getUserMembershipList:()=>g,guestLogin:()=>s,login:()=>i,logout:()=>o,patchMessengerContent:()=>T,patchUser:()=>p,postBulkMessengerMember:()=>L,postChannel:()=>w,postDirectChannel:()=>j,postMessage:()=>I,postUser:()=>d,putChannel:()=>S,setToken:()=>a.setToken});var r=n(15861),a=n(64948),u=n(93141),i=function(){var e=(0,r.default)((function*(e,t){e.endsWith(".guest")&&0==t.length&&(t="guest");var n=yield a.default.post("/api-token-auth/",{username:e,password:t});if(200==n.status)return yield(0,a.setToken)(n.data),yield l()}));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.default)((function*(){return yield(0,a.setToken)(null),yield a.default.get("/api-auth/logout/")}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.default)((function*(){return yield i("guest","guest")}));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.default)((function*(){var e,t=null==(e=yield a.default.get("/api/v1/users/memberships/?_self=true"))?void 0:e.data;return t&&t.length?t[0]:null}));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.default)((function*(){if(null===(yield(0,a.getToken)()))return null;try{return yield c()}catch(n){var e=n;if(void 0!==n.response&&401==n.response.status)try{return yield c()}catch(r){e=r}var t="ERR_NETWORK"==e.code||e.message&&e.message.startsWith("Cannot read");throw{error:e,isOffline:t}}}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.default)((function*(e){return(yield a.default.get("/api/v1/users/?group_id="+e)).data}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.default)((function*(e){yield a.default.post("/api/v1/user/",{imageUrl:e.imageUrl,inviteGroupId:e.inviteGroupId,isAdmin:e.is_staff,isGuest:e.is_guest,name:e.name,password:e.password,username:e.username},{baseURL:u.accountURL})}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.default)((function*(e){console.log(e),yield a.default.patch("/api/v1/user/",{ids:[e.id],updated:{name:e.name,isGuest:e.is_guest,username:e.username,password:e.password}},{baseURL:u.accountURL})}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.default)((function*(e){yield a.default.delete("/api/v1/user/"+e+"/",{baseURL:u.accountURL})}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.default)((function*(e){return(yield a.default.get("/api/v1/users/memberships/?group_id="+e)).data}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.default)((function*(e){return(yield a.default.get("/api/v1/users/memberships/?username="+e)).data}));return function(t){return e.apply(this,arguments)}}(),y=n(4942);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,y.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(){var e=(0,r.default)((function*(e){return void 0==e?Promise.resolve(null):(yield a.default.get("/api/v1/channels/messenger/?type=messenger&messenger_user_id="+e)).data}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.default)((function*(e){return(yield a.default.post("/api/v1/channels/",e)).data}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.default)((function*(e){return(yield a.default.post("/api/v1/channels/direct/",e)).data}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,r.default)((function*(e){return(yield a.default.put("/api/v1/channels/"+e.id+"/",e)).data}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,r.default)((function*(e){yield a.default.delete("/api/v1/channels/"+e+"/")}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=(0,r.default)((function*(e){try{return(yield a.default.get("/api/v1/messengermembers/?channel="+e)).data}catch(t){if(400==t.response.status||403==t.response.status)return Promise.resolve(null);throw t}}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,r.default)((function*(e){yield a.default.post("/api/v1/messengermembers/bulk/",{channel:e.channel_id,user_ids:e.user_ids})}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,r.default)((function*(e){yield a.default.delete("/api/v1/messengermembers/"+e+"/")}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=(0,r.default)((function*(e,t){var n=t?"&id_lt="+t:"";return(yield a.default.get("/api/v1/messengercontents/?limit=30&channel="+e+n)).data.results}));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.default)((function*(e,t){return(yield a.default.get("/api/v1/messengercontents/?channel="+e+"&with_archive=true&updated_gte="+t)).data}));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=(0,r.default)((function*(e,t){return(yield a.default.get("/api/v1/messengercontents/?channel="+e+"&timer_gt="+t)).data}));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=(0,r.default)((function*(e,t){if(e.file){var n=new FormData;n.append("file",e.file),Object.entries(e).forEach((function(e){n.append(e[0],""+e[1])}));var r=e.file.name;yield a.default.post("/api/v1/messengercontents/messages/",n,{headers:b(b({},a.default.defaults.headers),{},{"Content-Type":"multipart/form-data"}),onUploadProgress:function(n){null==t||t({channel:e.channel,filename:r,progress:n.loaded/(n.total||1)})}})}else yield a.default.post("/api/v1/messengercontents/messages/",e)}));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,r.default)((function*(e){return(yield a.default.patch("/api/v1/messengercontents/"+e.id+"/",e)).data}));return function(t){return e.apply(this,arguments)}}()},22362:(e,t,n)=>{n.r(t),n.d(t,{getNotification:()=>u,postNotification:()=>i,putNotification:()=>o});var r=n(15861),a=n(64948),u=function(){var e=(0,r.default)((function*(e){var t=(yield a.default.get("/api/v1/notifications/?type=WEB&user="+e)).data;return t.length?t[0]:void 0}));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.default)((function*(e){return(yield a.default.post("/api/v1/notifications/",e)).data}));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.default)((function*(e){return(yield a.default.put("/api/v1/notifications/"+e.id+"/",e)).data}));return function(t){return e.apply(this,arguments)}}()},76856:(e,t,n)=>{e.exports=n.p+"static/media/SpaceMono-Regular.8dc9dfb5a618f0d496e9.ttf"},6601:e=>{e.exports=JSON.parse('{"Sign in":"\ub85c\uadf8\uc778","Sign in as guest":"\uac8c\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778","home":"\ud648","chat":"\ucc44\ud305","channel":"\ucc44\ub110","New chat":"\uc0c8\ub85c\uc6b4 \ucc44\ud305","Chat Setting":"\ucc44\ud305 \uc124\uc815","setting":"\uc124\uc815","invite":"\ucd08\ub300","profile":"\ud504\ub85c\ud544","member":"\uba64\ubc84","Username":"\uc0ac\uc6a9\uc790\uba85(\uc544\uc774\ub514)","Password":"\ube44\ubc00\ubc88\ud638","Check Password":"\ube44\ubc00\ubc88\ud638 \ud655\uc778","Name":"\uc774\ub984","Group":"\uadf8\ub8f9","External members":"\uc678\ubd80 \uc0ac\uc6a9\uc790","+ New chat":"+ \uc0c8\ub85c\uc6b4 \ucc44\ud305","save":"\uc800\uc7a5","cancel":"\ucde8\uc18c","Channel Name":"\ucc44\ub110\uba85","Description":"\uc124\uba85","1:1 Chat":"1:1 \ucc44\ud305","Chat with me":"\ub098\uc640\uc758 \ucc44\ud305","sign out":"\ub85c\uadf8\uc544\uc6c3","leave":"\ub098\uac00\uae30","This screen doesn\'t exist.":"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","Go to home screen!":"\ub3cc\uc544\uac00\uae30","create":"\ucd94\uac00\ud558\uae30","invite link":"\ucd08\ub300 \ub9c1\ud06c","copied":"\ubcf5\uc0ac \uc644\ub8cc","Message":"\uba54\uc2dc\uc9c0","copy":"\ubcf5\uc0ac","delete":"\uc0ad\uc81c","delete timer":"\ud0c0\uc774\uba38 \uc0ad\uc81c","Unregistered user or incorrect password.":"\uac00\uc785\ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc774\uac70\ub098, \uc798\ubabb\ub41c \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4.","Guest users cannot reconnect after logging out. Please create an account or log in.":"\uac8c\uc2a4\ud2b8 \uc0ac\uc6a9\uc790\ub294 \ub85c\uadf8\uc544\uc6c3 \ud6c4 \ub2e4\uc2dc \uc811\uc18d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","* Notification Settings":"* \uc54c\ub9bc \uc124\uc815","* Language Settings":"* \uc5b8\uc5b4 \uc124\uc815","* Skin Settings":"* \uc2a4\ud0a8 \uc124\uc815","> Account Settings":"> \uacc4\uc815 \uc124\uc815","Auto":"\uc790\ub3d9","Light":"\ub77c\uc774\ud2b8","Dark":"\ub2e4\ud06c","On":"\ucf1c\uc9d0","Off":"\uaebc\uc9d0","config":"\uc124\uc815","File":"\ud30c\uc77c","Timer":"\ud0c0\uc774\uba38","Video Call":"\ud654\uc0c1 \ucc44\ud305","Date & Time":"\ub0a0\uc9dc & \uc2dc\uac04","Create User":"\uc0ac\uc6a9\uc790 \uc0dd\uc131","Edit User":"\uc0ac\uc6a9\uc790 \uc218\uc815","The username is already in use.":"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc0ac\uc6a9\uc790\uba85(\uc544\uc774\ub514)\uc785\ub2c8\ub2e4.","Set 10-64 characters.":"10-64\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.","Set 1-64 characters.":"1-64\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.","Set 10-64 characters with a combination of letters/numbers/valid special characters.":"10-64\uc790 \uc774\ub0b4\ub85c \uc601\ubb38/\uc22b\uc790/\uc720\ud6a8\ud55c \ud2b9\uc218\ubb38\uc790\uc758 \uc870\ud569\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.","Incorrect between password and check password.":"\uc791\uc131\ub41c \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","Manager Permission":"\uad00\ub9ac\uc790 \uad8c\ud55c","Yes":"\uc608","No":"\uc544\ub2c8\uc694","delete account":"\uacc4\uc815 \uc0ad\uc81c"}')}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var u=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,u)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,a,u]=e[l],o=!0,s=0;s<r.length;s++)(!1&u||i>=u)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(o=!1,u<i&&(i=u));if(o){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,a,u]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var u=Object.create(null);n.r(u);var i={};e=e||[null,t({}),t([]),t(t)];for(var o=2&a&&r;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(u,i),u}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+"."+{88:"c6ffbc1e",129:"9ab72696",164:"dd94b110",289:"5a5c97d6",787:"1d023d97",869:"f93a2a17"}[e]+".chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="web:";n.l=(r,a,u,i)=>{if(e[r])e[r].push(a);else{var o,s;if(void 0!==u)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+u){o=f;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+u),o.src=r),e[r]=[a];var d=(t,n)=>{o.onerror=o.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),s&&document.head.appendChild(o)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/tokki-tok/",(()=>{var e={179:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var u=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=u);var i=n.p+n.u(t),o=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",o.name="ChunkLoadError",o.type=u,o.request=i,a[1](o)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,u,[i,o,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(s)var l=s(n)}for(t&&t(r);c<i.length;c++)u=i[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(l)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[338],(()=>n(46271)));r=n.O(r)})();
//# sourceMappingURL=main.35331235.js.map