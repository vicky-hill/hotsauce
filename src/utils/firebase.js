import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, getDoc, setDoc, updateDoc, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCT2vViP7h9WcVD998s8wt9bxZ4B0HaPdo",
    authDomain: "hot-sauce-9985c.firebaseapp.com",
    projectId: "hot-sauce-9985c",
    storageBucket: "hot-sauce-9985c.appspot.com",
    messagingSenderId: "787897816912",
    appId: "1:787897816912:web:cba26670642d785d127e55"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const store = getFirestore();

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   try {
//     const userRef = doc(store, 'users/' + userAuth.uid);
//     let snapshot = await getDoc(userRef);
//     let user;

//     if (!snapshot.exists()) {
//       const newUser = {
//         email: userAuth.email,
//         createdAt: new Date(),
//         userID: userAuth.uid,
//         ...additionalData
//       }

//       await setDoc(userRef, newUser);
//       snapshot = await getDoc(userRef);
//       user = snapshot.data();
//     }

//     user = snapshot.data();

//     return user;
//   } catch (err) {
//     console.log("error", err.message)
//   }
// };

export const authorization = {
  login: options => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      return signInWithEmailAndPassword(auth, options.email, options.password)
        .then(async (res) => {
          const { user } = res;
            console.log(user.email, user.uid)
          resolve(dispatch({
            type: success,
            // payload: snapshot
          }))
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err.message
          }))
        });
    }

    return new Promise(promise);
  },
  register: options => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      return createUserWithEmailAndPassword(auth, options.email, options.password)
        .then(async (res) => {
          const { user } = res;
          console.log(user.email, user.uid)
        //   delete options.email;
        //   delete options.password;
        //   delete options.types;
        //   const snapshot = await createUserProfileDocument(user, options);
          resolve(dispatch({
            type: success,
            payload: user
          }))
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err.message
          }))
        })
    }

    return new Promise(promise);
  },
  checkUserSession: options => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        unsubscribe();
        // createUserProfileDocument(userAuth)
        //   .then((snapshot) => {
        //     resolve(dispatch({
        //       type: success,
        //       payload: snapshot
        //     }))
        //   })
        //   .catch(err => {
        //     reject(dispatch({
        //       type: failure
        //     }))
        //   })
        resolve(userAuth);
      }, reject);
    }

    return new Promise(promise);
  },
  logout: options => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      auth.signOut()
        .then(res => {
          resolve(dispatch({
            type: success
          }));
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err.message
          }));
        });
    }

    return new Promise(promise);
  },
  resetPassword: (options, email) => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve(dispatch({
            type: success
          }));
        })
        .catch(err => {
          console.log(err)
          reject(dispatch({
            type: failure,
            payload: err.message
          }));
        });
    }

    return new Promise(promise);
  }
}

export const handleUsers = {
  getUserByID: (options, payload) => (dispatch) => {
    const [success, failure] = options.types;
    const promise = async (resolve, reject) => {
      const userRef = doc(store, 'users/' + payload);
      getDoc(userRef)
        .then(snapshot => {
          if(snapshot.exists()) {
            resolve(dispatch({
              type: success,
              payload: snapshot.data()
            }));
          }
        })
        .catch(err => {
          console.log(err)
          reject(dispatch({
            type: failure,
            payload: err.message
          }));
        });
    }

    return new Promise(promise);
  },
  updateUser: (options, payload) => (dispatch) => {
    const [success, failure] = options.types;
    const promise = async (resolve, reject) => {
      const { userID } = payload;
      const userRef = doc(store, 'users', userID);
      updateDoc(userRef, payload)
        .then(() => {
          getDoc(userRef)
            .then(user => {
              resolve(dispatch({
                type: success,
                payload: user.data()
              }))
            })
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err.message
          }))
        })
    }

    return new Promise(promise);
  }
}