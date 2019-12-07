const fetch = require('node-fetch');

class SSLCOMMERZ {

    constructor(config) {
        this.storeId = 'testbox';
        this.storePass = 'qwerty';
        this.mode = (config.issandbox || config.issandbox == 'undefiend') ? 'sandbox' : 'securepay';
        this.createSessionUrl = "https://" + this.mode + ".sslcommerz.com/gwprocess/v4/api.php";
        this.validation_url = "https://" + this.mode + ".sslcommerz.com/validator/api/validationserverAPI.php";
        this.transaction_url = "https://" + this.mode + ".sslcommerz.com/validator/api/merchantTransIDvalidationAPI.php"
    }

    async createSSlSession(post_body) {
        post_body['store_id'] = this.storeId;
        post_body['store_passwd'] = this.storePass;
        return this.callPostMethod(this.createSessionUrl, post_body);
    }


    async validate_transaction_order(validation_id) {
        var query = {
            val_id: validation_id,
            store_id: this.storeId,
            store_passwd: this.storePass,
            format: 'json'
        }
        return this.callGetMethod(this.validation_url, query);
    }

    async init_refund(bank_tran_id, refund_amount, refund_remarks) {
        var query = {
            bank_tran_id: bank_tran_id,
            refund_amount: refund_amount,
            refund_remarks: refund_remarks,
            store_id: this.storeId,
            store_passwd: this.storePass,
            format: 'json'
        }
        return this.callGetMethod(this.transaction_url, query)
    }

    async query_refund_status(refund_ref_id) {
        var query = {
            refund_ref_id: refund_ref_id,
            store_id: this.storeId,
            store_passwd: this.storePass,
            format: 'json'
        }
        return this.callGetMethod(this.transaction_url, query)
    }

    async transaction_query_session(sessionkey) {
        var query = {
            sessionkey: sessionkey,
            store_id: this.storeId,
            store_passwd: this.storePass,
            format: 'json'
        }
        return this.callGetMethod(this.transaction_url, query);
    }


    async transaction_query_tranid(tran_id) {
        var query = {
            tran_id: tran_ids,
            store_id: this.storeId,
            store_passwd: this.storePass,
            format: 'json'
        }
        return this.callGetMethod(this.transaction_url, query);
    }

    async apiCall(method, url, query, post_body) {
        try {
            const options = {
                method: method,
                body: post_body,
                redirect: 'follow',
                timeout: 0
            }
            if (query) {
                const paramString = new URLSearchParams(query);
                url = url + '?' + paramString;
            }
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    async callPostMethod(url, post_body) {

        return this.apiCall('POST', url, null, post_body);
    }

    async callGetMethod(url, query) {
        return this.apiCall('GET', url, query, null);
    }
}
module.exports = SSLCOMMERZ;