import { sozvezdie } from "../js/modals.js";

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
  console.log(
    decodeURIComponent(results[2].replace(/\+/g, " ")),
    'decodeURIComponent(results[2].replace(/+/g, " "))',
    name,
    (url = window.location.href),
    "name, url = window.location.href"
  );

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidAmount(amount) {
  return /^[0-9]+$/.test(amount) && parseFloat(amount);
}
var data = {};
data.CloudPayments = {
  babay:'babay',
  recurrent: {
  zazay:'zazay',

    interval: "Month",
    period: 1,
    customerReceipt: "wq", //чек для регулярных платежей
  },
};

const pay = function () {
  var payments = new cp.CloudPayments({
    language: "ru-RU",
    email: "",
    applePaySupport: false,
    googlePaySupport: false,
    yandexPaySupport: false,
    tinkoffPaySupport: false,
    tinkoffInstallmentSupport: false,
    sbpSupport: true,
    data: data,
  });

  payments
    .pay("auth", {
      // publicId: "pk_ccdef71088be717d883027ce6ba12", //Актуальный id
      publicId: "test_api_00000000000000000000002", //Тестовый id
      data: data,
      myProp: "myProp value",
      description: "Зажги созвездие!45454",
      amount: payment_amount,
      currency: "RUB",
      autoClose: 5,
      invoiceId: "123",
      accountId: "123",
      email: payment_email,
      skin: "classic",
      requireEmail: false,

      // data: {
      //   customKey:'babay,',
      //   utm_source: getParameterByName("utm_source"),
      //   utm_medium: getParameterByName("utm_medium"),
      //   utm_content: getParameterByName("utm_content"),
      //   utm_campaign: getParameterByName("utm_campaign"),
      //   utm_term: getParameterByName("utm_term"),
      // },
    })
    .charge({
      // options
      publicId: "test_api_00000000000000000000001", //id из личного кабинета
      description: "Подписка на ежемесячный доступ к сайту example.com", //назначение
      amount: 1000, //сумма
      currency: "RUB", //валюта
      invoiceId: "1234567", //номер заказа  (необязательно)
      accountId: "user@example.com", //идентификатор плательщика (обязательно для создания подписки)
      data: data,
  zazay:'aggay',
      
    })
    .then((widgetResult) => {
      if (widgetResult.status === "success") {
        console.log(
          getParameterByName("utm_source"),
          getParameterByName("utm_medium"),
          getParameterByName("utm_content"),
          getParameterByName("utm_campaign"),
          getParameterByName("utm_term"),
          ` getParameterByName("utm_source"),
 getParameterByName("utm_medium"),
 getParameterByName("utm_content"),
 getParameterByName("utm_campaign"),
 getParameterByName("utm_term"),`
        );
        console.log(1336);
        sozvezdie(payment_Name);
        console.log(1337);
      }
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
