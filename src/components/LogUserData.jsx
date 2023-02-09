import { doc, getDoc } from "firebase/firestore";
import {auth, db} from "../firebase";

const LogUSerData = async () => {
        
    const loguserid = auth?.currentUser?.uid;
    if(loguserid) {
        const loguserdocRef = doc(db, "users", loguserid);
        const loguserdocSnap = await getDoc(loguserdocRef);
       
        const logusrdata = loguserdocSnap.data();
        
        return (logusrdata) ? logusrdata : '';
    }
    
}

export default LogUSerData;