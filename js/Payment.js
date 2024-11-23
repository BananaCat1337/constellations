const widget_open = document.getElementById("widget-open")


let payment_amount = 0
let payment_email = ''
let payment_Name = ''

this.pay = function () {
    var widget = new cp.CloudPayments();
       widget.pay('auth', // или 'charge'
           { //options
               publicId: 'pk_ccdef71088be717d883027ce6ba12', //id из личного кабинета
               description: 'Зажгите созвездие', //назначение
               amount: 100, //сумма
               currency: 'RUB', //валюта
               accountId: payment_email, //идентификатор плательщика (необязательно)
               invoiceId: '1234567', //номер заказа  (необязательно)
               email: payment_email, //email плательщика (необязательно)
               skin: "mini", //дизайн виджета (необязательно)
               autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
               data: {
                   myProp: 'myProp value'
               },
               configuration: {
                   common: {
                       successRedirectUrl: "https://{ваш сайт}/success", // адреса для перенаправления 
                       failRedirectUrl: "https://{ваш сайт}/fail"        // при оплате по T-Pay
                   }
               },
               payer: { 
                   Name: payment_Name,
                   address: 'тестовый проезд дом тест',
               }
           },
           {
               onSuccess: function (options) { // success
                   //действие при успешной оплате
               },
               onFail: function (reason, options) { // fail
                console.log(reason);
                console.log(options);
                
                
                   //действие при неуспешной оплате
               },
               onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                   //например вызов вашей аналитики
               }
           }
       )
   };


widget_open.addEventListener('click', function (e) {

    payment_Name = document.getElementById("payment_Name").value;
    payment_amount = document.getElementById("payment_amount").value;
    payment_email = document.getElementById("payment_email").value;
    

    console.log(payment_amount, "Сумма");
    

    pay();
})

