import firebase_app from "../../../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(colllection, id) {
    let docRef = doc(db, colllection, id)
    let result = null;
    let error = null;

    try {
        result = await setDoc(docRef);
    } catch (error) {
        error = error;
    }

    return { result, error };
}