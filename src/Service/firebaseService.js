import { database } from "../Utils/fbUtils"
import { ref, push, onValue, remove, get, child, set } from "firebase/database"


export default class FirebaseService {

    static getAllData = (node, callback, size) => {
        const startRef = ref(database, node);
        onValue(startRef, (DataSnapshot) => {
            let items = []

            DataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

    }

    static getUniquData = (node, id, callback) => {

        const dbref = ref(database);

        let newData = [];

        get(child(dbref, `clientes/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const snap = snapshot.val();
                const keys = Object.keys(snap);

                keys.forEach((key=>{
                    newData[key]=snap[key];
                }));

                callback(newData);
            }
          }).catch((error) => {
            console.error(error);
          });
    }

    static insertData = (node, obj) => {
        const db = database;
        const dbref = ref(db, node)
        const dbPush = push(dbref, obj);
        const id = dbPush.key
        return id
    }
    static updateData = (node, id,obj) => {
        return set(ref(database, node + '/' + id),obj);
    }
    static deleteData = (node, id) => {
        return remove(ref(database, node + '/' + id));
    }
}