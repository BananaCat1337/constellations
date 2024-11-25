const widget_open = document.getElementById("widget-open")


let payment_amount = 0
let payment_email = ''
let payment_Name = ''



this.pay = function () {
    var payments = new cp.CloudPayments({
        language: "ru-RU",
        email: "",
        applePaySupport: false,
        googlePaySupport: false,
        yandexPaySupport: false,
        tinkoffPaySupport: false,
        tinkoffInstallmentSupport: false,
        sbpSupport: true
    })
    
    payments.pay("charge", {
        publicId: "pk_ccdef71088be717d883027ce6ba12",
        description: "Тестовая оплата",
        amount: payment_amount,
        currency: "RUB",
        invoiceId: "123",
        accountId: "123",
        email: payment_email,
        skin: "classic",
        requireEmail: false,
    }).then(function(widgetResult) {
        console.log('result', widgetResult);
    }).catch(function(error) {
        console.log('error', error);
    });
   };
 

widget_open.addEventListener('click', function (e) {

    payment_Name = document.getElementById("payment_Name").value;
    payment_amount = parseFloat(document.getElementById("payment_amount").value);
    payment_email = document.getElementById("payment_email").value;
    

    console.log(payment_amount, "Сумма");
    

    pay();
})

