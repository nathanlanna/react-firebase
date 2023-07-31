import { database } from "../Utils/fbUtils"
import {ref,push,onValue} from "firebase/database"


export default class FirebaseService {

    static getAllData =(node,callback,size)=>{
        const startRef = ref(database,node);
        onValue(startRef, (DataSnapshot)=>{
            let items =[]

            DataSnapshot.forEach(childSnapshot=>{
                let item =childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });
       
    }

    static insertData = (node,obj)=>{
        const db = database;
        const dbref = ref(db,node)
        const dbPush = push(dbref,obj);
        const id = dbPush.key
        return id
    }
}