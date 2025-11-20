import { constellations } from "../js/modals.js";

const widget_open = document.getElementById("widget-open");

let payment_amount = 0;
let payment_email = "";
let payment_Name = "";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidAmount(amount) {
  return /^[0-9]+$/.test(amount) && parseFloat(amount);
}

const pay = function () {
  var payments = new cp.CloudPayments({
    language: "ru-RU",
    email: "",
    applePaySupport: false,
    googlePaySupport: false,
    yandexPaySupport: false,
    tinkoffInstallmentSupport: false,
  });

  payments.pay(
    "auth",
    {
      publicId: "pk_ccdef71088be717d883027ce6ba12",
      description: "Зажги созвездие!",
      amount: payment_amount,
      currency: "RUB",
      accountId: payment_email,
      invoiceId: "1234567",
      email: payment_email,
      skin: "classic",
      requireEmail: false,
      autoClose: 5,
      data: JSON.stringify({
        utm_source: getParameterByName("utm_source"),
        utm_medium: getParameterByName("utm_medium"),
        utm_content: getParameterByName("utm_content"),
        utm_campaign: getParameterByName("utm_campaign"),
        utm_term: getParameterByName("utm_term"),
        Name: payment_Name,
      }),
    },
    {
      onSuccess: function (options) {
        constellations(payment_Name);
      },
      onFail: function (reason, options) {
        constellations(payment_Name);
      },
      onComplete: function (paymentResult, options) {},
    }
  );
};

widget_open.addEventListener("click", function (e) {
  e.preventDefault();

  payment_Name = document.getElementById("payment_Name").value;
  payment_amount = parseFloat(document.getElementById("payment_amount").value);
  payment_email = document.getElementById("payment_email").value;
  const agreementChecked = document.getElementById("payment_agreement").checked;
  const emailField = document.getElementById("payment_email");
  const emailError = document.getElementById("email-error");
  const amountField = document.getElementById("payment_amount");
  const amountError = document.getElementById("amount-error");

  const checkboxError = document.getElementById("checkbox-error");

  let hasError = false;

  if (!isValidEmail(payment_email)) {
    emailField.classList.add("invalid");
    emailError.style.display = "block";
    hasError = true;
  } else {
    emailField.classList.remove("invalid");
    emailError.style.display = "none";
  }

  if (!isValidAmount(payment_amount)) {
    amountField.classList.add("invalid");
    amountError.style.display = "block";
    hasError = true;
  } else {
    amountField.classList.remove("invalid");
    amountError.style.display = "none";
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
