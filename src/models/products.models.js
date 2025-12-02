import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "../config/firebase.config.js"; // Instancia de Firestore

export function getProductsFromDB() {
  return new Promise(async (res, rej) => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productos = [];
      querySnapshot.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id });
      });
      res(productos);
    } catch (error) {
      console.error("Error al obtener productos de Firestore:", error);
      rej("Fallo en el servicio externo de datos:", error);
    }
  });
}

export function getProductByIdFromDB(id) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        res(docSnap.data());
      } else {
        res();
      }
    } catch (error) {
      console.error(`Error al obtener producto ID ${id} de Firestore:`, error);
      rej("Fallo en el servicio externo de datos:", error);
    }
  });
}

export function createProductInDB(productData) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, "products"), productData);
      res({ ...productData, id: docRef.id });
    } catch (error) {
      console.error("Error al crear producto en Firestore:", error);
      rej("Fallo en el servicio externo de datos:", error);
    }
  });
}

export function deleteProductFromDB(id) {
  return new Promise(async (res, rej) => {
    try {
      await deleteDoc(doc(db, "products", id));
      res();
    } catch (error) {
      console.error(`Error al eliminar producto ID ${id} de Firestore:`, error);
      rej("Fallo en el servicio externo de datos:", error);
    }
  });
}
