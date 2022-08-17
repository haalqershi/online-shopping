// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  signUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
  signUpUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
  resetPwdUrl: "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=",
  firebaseConfig : {
    apiKey: "AIzaSyCiBz0GEQX5DoteSVZEVtWIqIaMuvF6yQA",
    authDomain: "online-shopping-fe43b.firebaseapp.com",
    databaseURL: "https://online-shopping-fe43b-default-rtdb.firebaseio.com",
    projectId: "online-shopping-fe43b",
    storageBucket: "online-shopping-fe43b.appspot.com",
    messagingSenderId: "73002938786",
    appId: "1:73002938786:web:840e4d57f87c439e7802fb"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
