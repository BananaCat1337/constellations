import { sozvezdie } from "../js/modals.js";

const widget_open = document.getElementById("widget-open");

let payment_amount = 0;
let payment_email = "";
let payment_Name = "";
let agreementChecked = document.getElementById("payment_agreement").checked;

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidAmount(amount) {
  return /^[0-9]+$/.test(amount) && parseFloat(amount) >= 10;
}

const pay = function () {
  var payments = new cp.CloudPayments({
    language: "ru-RU",
    email: "",
    applePaySupport: false,
    googlePaySupport: false,
    yandexPaySupport: false,
    tinkoffPaySupport: true,
    tinkoffInstallmentSupport: false,
    sbpSupport: true,
  });

  payments
    .pay("charge", {
      // publicId: "pk_ccdef71088be717d883027ce6ba12", //Актуальный id
      publicId: "test_api_00000000000000000000002", //Тестовый id
      description: "Зажги созвездие!",
      amount: payment_amount,
      currency: "RUB",
      autoClose: 5,
      invoiceId: "123",
      accountId: "123",
      email: payment_email,
      skin: "classic",
      requireEmail: false,
    })
    .then((widgetResult) => {
        sozvezdie(payment_Name);
    })
    .catch(function (error) {
      console.log("error", error);
    });
};

widget_open.addEventListener("click", function (e) {
  e.preventDefault();

  payment_Name = document.getElementById("payment_Name").value;
  payment_amount = parseFloat(document.getElementById("payment_amount").value);
  payment_email = document.getElementById("payment_email").value;
  const agreementChecked = document.getElementById("payment_agreement").checked;
  const emailField = document.getElementById("payment_email");
  const emailError = document.getElementById("email-error");

  const checkboxError = document.getElementById("checkbox-error");

  let hasError = false;

  if (!isValidAmount(payment_amount)) {
    payment_amount = 10;
  }

  if (!isValidEmail(payment_email)) {
    emailField.classList.add("invalid");
    emailError.style.display = "block";
    hasError = true;
  } else {
    emailField.classList.remove("invalid");
    emailError.style.display = "none";
  }

  if (!agreementChecked) {
    checkboxError.style.display = "block";
    hasError = true;
  } else {
    checkboxError.style.display = "none";
  }

  if (hasError) {
    return;
  }
  pay();
});
