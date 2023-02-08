import { loadStripe } from "@stripe/stripe-js";

//let stripePromise: Stripe | null;
let stripePromise;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51MVRkfF9GMZUpcRmaNGXXXfqoaGa78CVsVqNLhWCxvYUPwcyQRhTOfHrAPypHtYZMtEzORFCVo9vOWBOpeEFRZtF00d0kEftik"
    );
  }
  return stripePromise;
};
export default initializeStripe;