import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const createUser = functions.auth.user().onCreate((user) => {

    return admin.firestore().doc(`users/${user.uid}`).set({
        name: user.displayName,
        email: user.email
    });
});
