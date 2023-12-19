// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDItgHq24H-lQFpso5e5ije0o0ACZL2dug",
  authDomain: "menu-api-c810f.firebaseapp.com",
  databaseURL: "https://menu-api-c810f-default-rtdb.firebaseio.com",
  projectId: "menu-api-c810f",
  storageBucket: "menu-api-c810f.appspot.com",
  messagingSenderId: "266757480008",
  appId: "1:266757480008:web:988cd2a69409214f5b827d",
  measurementId: "G-CTXT23W37S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Sử dụng Realtime Database
const database = getDatabase(app);
const dbRef = ref(database);
set(child(dbRef, `menu/1`), {
  id: 678,
  name: "Pancake",
  img: "/images/modelview/pancake.glb",
  price: "3.50$",
});
set(child(dbRef, `menu/2`), {
  id: 456,
  name: "Croissant",
  img: "/images/modelview/croissant.glb",
  price: "3.00$",
});
set(child(dbRef, `menu/3`), {
  id: 123,
  name: "Bread",
  img: "/images/modelview/bread_scan.glb",
  price: "3.00$",
});
set(child(dbRef, `menu/4`), {
  id: 789,
  name: "Waffles",
  img: "/images/modelview/waffles.glb",
  price: "4.00$",
});
set(child(dbRef, `menu/5`), {
  id: 324,
  name: "Tacos",
  img: "/images/modelview/taco.glb",
  price: "4.00$",
});
set(child(dbRef, `menu/6`), {
  id: 600,
  name: "Cupcake",
  img: "/images/modelview/cupcake.glb",
  price: "4.50$",
});
set(child(dbRef, `menu/7`), {
  id: 700,
  name: "Doughnut",
  img: "/images/modelview/doughnut.glb",
  price: "5.00$",
});

export { app, database };
