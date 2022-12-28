import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

const firebaseAuth = auth();
const db = firestore();
const dbStorage = storage();

export const createUserWithEmailPassword = async (
  email: string,
  password: string,
) => {
  return new Promise((resolve, reject) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(confirmResult => {
        resolve(confirmResult);
        confirmResult?.user
          .sendEmailVerification()
          .then(() => console.log('Email send'))
          .catch(err => console.log('email not send :', err));
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const storeDataIntoDatabase = async (
  collectionName: string,
  documentName: string,
  storeData: any,
) => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
      .doc(documentName)
      .set(storeData)
      .then(confirmResult => resolve(confirmResult))
      .catch(err => {
        reject(err);
      });
  });
};

export const signInWithEmailPassword = async (
  email: string,
  password: string,
) => {
  return new Promise((resolve, reject) => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(confirmResult => {
        resolve(confirmResult);
      })
      .catch(err => {
        reject(err);
      });
  });
};
