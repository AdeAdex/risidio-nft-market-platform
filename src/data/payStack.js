// paystack.js

import PaystackPop from "paystack";
import Swal from "sweetalert2";



const payWithPaystack = (subtotal) => {
  const amountInKobo = Math.round(subtotal * 100);
  let handler = PaystackPop.setup({
    key: "pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537",
    email: "adeoluamole@gmail.com",
    amount: amountInKobo,
    ref: "risidio" + Math.floor(Math.random() * 10000 + 1),
    onClose: function () {
      let message = "You just canceled this transaction";
      Swal.fire({
        icon: "error",
        title: "Dear Risidio customer",
        text: message,
        footer:
          "For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com",
      });
    },
    callback: function (response) {
      let message =
        "Payment completed! Your Reference Number is: " + response.reference;
      Swal.fire({
        icon: "success",
        title: "Thank You Risidio customer",
        text: message,
        footer: "",
      }).then((result) => {
        if (result.isConfirmed) {
          // Additional actions after payment confirmation
        }
      });
    },
  });

  handler.openIframe();
};

export default payWithPaystack;
