import { useState, useEffect } from "react";
import {auth} from "../firebase";
import isUserPremium from "./isUserPremium";

const usePremiumStatus = (user = auth.currentUser) => {
  const [premiumStatus, setPremiumStatus] = useState(false);

  useEffect(() => {
    if (user) {
      const checkPremiumStatus = async function () {
        setPremiumStatus(await isUserPremium());
      };
      checkPremiumStatus();
    }
  }, [user]);

  return premiumStatus;
}
export default usePremiumStatus;