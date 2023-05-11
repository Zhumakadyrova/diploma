// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsqF8jPvPAnuE5xqnGJInU4mtr7oLQ4wo",
  authDomain: "diploma-5fd9c.firebaseapp.com",
  projectId: "diploma-5fd9c",
  storageBucket: "diploma-5fd9c.appspot.com",
  messagingSenderId: "365501856568",
  appId: "1:365501856568:web:0bb46803a2d95967d19fcd",
  measurementId: "G-260W9F9F1G",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db, 'products');
export const orderCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

  // отправка фотографии и получение ее url
export const uploadProductPhoto = async (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;
};