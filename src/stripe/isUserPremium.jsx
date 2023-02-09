import { doc, getDoc } from "firebase/firestore";
import {auth, db} from "../firebase";

const isUserPremium = async () => {
        
    await auth.currentUser?.getIdToken(true);
    const decodedToken = await auth.currentUser?.getIdTokenResult();

    const loguserid = auth?.currentUser?.uid;
    if(loguserid) {
        const loguserdocRef = doc(db, "users", loguserid);
        const loguserdocSnap = await getDoc(loguserdocRef);
       
        const logusrdata = loguserdocSnap.data();
        
        return (decodedToken?.claims?.stripeRole || logusrdata.isSubscribed) ? true : false;
    }
    
}

export default isUserPremium;