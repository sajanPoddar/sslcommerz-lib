const SSLCOMMERZ = require('./sslcommerz-lib');
let setings = {
    storeId: 'testbox',
    storePass: 'qwerty',
    issandbox: true,
};
let sslcommersettings = new SSLCOMMERZ(setings);


let post_body = {};
post_body['total_amount'] = 100.26;
post_body['currency'] = "BDT";
post_body['tran_id'] = "12345";
post_body['success_url'] = "your success url";
post_body['fail_url'] = "your fail url";
post_body['cancel_url'] = "your cancel url";
post_body['emi_option'] = 0;
post_body['cus_name'] = "test";
post_body['cus_email'] = "test@test.com";
post_body['cus_phone'] = "01700000000";
post_body['cus_add1'] = "customer address";
post_body['cus_city'] = "Dhaka";
post_body['cus_country'] = "Bangladesh";
post_body['shipping_method'] = "NO";
post_body['multi_card_name'] = ""
post_body['num_of_item'] = 1;
post_body['product_name'] = "Test";
post_body['product_category'] = "Test Category";
post_body['product_profile'] = "general";

// sslcommersettings.createSSlSession(post_body).then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })


sslcommersettings.validate_transaction_order('1709162025351ElIuHtUtFReBwE').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});