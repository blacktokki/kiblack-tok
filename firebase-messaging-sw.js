importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"),importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"),importScripts("./firebase-config.js");const key=firebaseConfig.messagingSenderId,apiKey=(firebaseConfig.encrypted.match(/.{1,2}/g)||[]).map((e,s)=>String.fromCharCode(parseInt(e,16)^key.charCodeAt(s))).join("");firebase.initializeApp({...firebaseConfig,apiKey:apiKey});const messaging=firebase.messaging();messaging.onBackgroundMessage(e=>{console.log("[firebase-messaging-sw.js] Received background message ",e);const s=JSON.parse(e.data.message_set)[0];self.registration.showNotification(e.data.channel_name,{body:`${e.data.name}: ${s.content}`})});