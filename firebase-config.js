/**
 * Firebase Admin/Client config for GitHub Pages (no build step).
 * Usage:
 *  - In each HTML: add  <script type="module"> ... import { initFirebase } from './firebase-config.js' ...</script>
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDPgQ9tHiIJbaQWKt16v7QTLWPL3GjRBiY",
  authDomain: "kenangankelas-8e5db.firebaseapp.com",
  projectId: "kenangankelas-8e5db",
  storageBucket: "kenangankelas-8e5db.firebasestorage.app",
  messagingSenderId: "1093065167485",
  appId: "1:1093065167485:web:537b2ba196f9405aeb1714"
};

let _app;
let _db;

export function initFirebase() {
  if (!_app) _app = initializeApp(firebaseConfig);
  if (!_db) _db = getFirestore(_app);
  return _db;
}

export {
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
};
 
