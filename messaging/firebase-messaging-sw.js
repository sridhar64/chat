// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDEuDXSpPujgK1uLgmQ5IP4WfVg38lqhyA",
    authDomain: "data-base-fe899.firebaseapp.com",
    databaseURL: "https://data-base-fe899.firebaseio.com",
    projectId: "data-base-fe899",
    storageBucket: "data-base-fe899.appspot.com",
    messagingSenderId: "374232160235",
    appId: "1:374232160235:web:a847f01a5157cc5f04abae",
    measurementId: "G-T070S7NPVY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



