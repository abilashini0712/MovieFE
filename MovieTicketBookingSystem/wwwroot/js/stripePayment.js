
// let stripe;
// let elements;
// let paymentElement;

// window.initializeStripePayment = async function (
//     clientSecret,
//     publishableKey
// ) {
//     stripe = Stripe(publishableKey);

//     const appearance = {
//         theme: "night",

//         variables: {
//             colorPrimary: "#D4A017",
//             colorBackground: "#121212",
//             colorText: "#FFFFFF",
//             colorDanger: "#DF1B41",
//             fontFamily: "Arial, sans-serif",
//             borderRadius: "8px"
//         }
//     };

//     elements = stripe.elements({
//         clientSecret: clientSecret,
//         appearance: appearance
//     });

//     paymentElement = elements.create("payment", {
//         layout: "tabs"
//     });

//     paymentElement.mount("#payment-element");
// };


// window.confirmStripePayment = async function () {

//     const { error, paymentIntent } =
//         await stripe.confirmPayment({
//             elements: elements,

//             confirmParams: {
//                 return_url:
//                     window.location.origin + "/paymentResult"
//             },

//             redirect: "if_required"
//         });

//     if (error) {
//         return {
//             success: false,
//             message: error.message,
//             paymentIntentId: ""
//         };
//     }

//     if (paymentIntent) {
//         return {
//             success: paymentIntent.status === "succeeded",
//             message: paymentIntent.status,
//             paymentIntentId: paymentIntent.id
//         };
//     }

//     return {
//         success: false,
//         message: "Payment confirmation is pending.",
//         paymentIntentId: ""
//     };
// };
