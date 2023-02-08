import { addDoc, collection, onSnapshot } from "firebase/firestore";
import {app, auth, db} from "../firebase";
import getStripe from "./initializeStripe";

export async function createCheckoutSession(uid) {
  //const firestore = firebase.firestore();

  // Create a new checkout session in the subollection inside this users document
  const generalRef = collection(db, `users/${uid}/checkout_sessions`);

  const checkoutSessionRef = await addDoc(generalRef, {
    price: "price_1MVSVyF9GMZUpcRmIMZ0uxZm",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });
  /*const checkoutSessionRef = await db
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      // replace the price_XXX value with the correct value from your product in stripe.
      price: "price_1MVSVyF9GMZUpcRmIMZ0uxZm",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });*/

  // Wait for the CheckoutSession to get attached by the extension
  // checkoutSessionRef.onSnapshot(async (snap) => {
  //   console.log('onSnapshot');
  //   const { sessionId } = snap.data();
  //   if (sessionId) {
  //     // We have a session, let's redirect to Checkout
  //     // Init Stripe
  //     const stripe = await getStripe();
  //     stripe.redirectToCheckout({ sessionId });
  //   }
  // });

  //const q = query(collection(db, "cities"), where("state", "==", "CA"));
  const unsubscribe = onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });

}