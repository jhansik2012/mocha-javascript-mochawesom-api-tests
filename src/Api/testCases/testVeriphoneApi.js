describe('Veriphone Api validations .......', () => {

    it('Validate the success message of Get veriphone details.', async () => {

        let resp = await testLib.getVeriphone({
            phone: phoneNo
        });

        respInJson = testLib.jsonparse(resp);

        expect(successCode_200).to.equal(respInJson.statusCode);
        console.log("\n Validated the status code :  " + successCode_200);

        expect(successMsg).to.not.have.haveOwnProperty(respInJson.body.status);
        console.log("\n Validated the status : " + successMsg);

        expect(phoneNo).to.equal(respInJson.body.phone);
        console.log("\n Validated the phone number :  " + phoneNo);

        expect(phone_valid_with_valid_phoneNo).to.equal(respInJson.body.phone_valid);
        console.log("\n Validated the phone_valid :  " + phone_valid_with_valid_phoneNo);

        expect(phone_type).to.equal(respInJson.body.phone_type);
        console.log("\n Validated the phone_type :  " + phone_type);

        expect(phone_region).to.equal(respInJson.body.phone_region);
        console.log("\n Validated the phone_region :  " + phone_region);

        expect(country).to.equal(respInJson.body.country);
        console.log("\n Validated the country :  " + country);

        expect(country_code).to.equal(respInJson.body.country_code);
        console.log("\n Validated the country_code :  " + country_code);

        expect(country_prefix).to.equal(respInJson.body.country_prefix);
        console.log("\n Validated the country_prefix :  " + country_prefix);

        expect(international_number).to.equal(respInJson.body.international_number);
        console.log("\n Validated the international_number :  " + international_number);

        expect(local_number).to.equal(respInJson.body.local_number);
        console.log("\n Validated the local_number :  " + local_number);

        expect(e164).to.equal(respInJson.body.e164);
        console.log("\n Validated the e164 :  " + e164);

        expect(carrier).to.equal(respInJson.body.carrier);
        console.log("\n Validated the carrier :  " + carrier);

        tc_title = 'Validated the success message of Get veriphone details.';
        values = {
            StatusCode: successCode_200,
            SuccessMsg: successMsg,
            PhoneNumber: phoneNo,
            phone_valid: phone_valid_with_valid_phoneNo,
            phone_type: phone_type,
            phone_region: phone_region,
            country: country,
            country_code: country_code,
            country_prefix: country_prefix,
            international_number: international_number,
            local_number: local_number,
            e164: e164,
            carrier: carrier
        };
    }).timeout(200000);

    it('Validate the error message of get veriphone details with invalid phone.', async () => {

        let resp = await testLib.getVeriphone({
            phone: invalidData
        });

        respInJson = testLib.jsonparse(resp);

        expect(successCode_200).to.equal(respInJson.statusCode);
        console.log("\n Validated the status code :  " + successCode_200);

        expect(successMsg).to.not.have.haveOwnProperty(respInJson.body.status);
        console.log("\n Validated the status : " + successMsg);

        expect(invalidData).to.equal(respInJson.body.phone);
        console.log("\n Validated the phone number :  " + invalidData);

        expect(phone_valid_with_invalid_phoneNo).to.equal(respInJson.body.phone_valid);
        console.log("\n Validated the phone_valid :  " + phone_valid_with_invalid_phoneNo);

        expect(phone_type_with_invalid_phoneNo).to.equal(respInJson.body.phone_type);
        console.log("\n Validated the phone_type :  " + phone_type_with_invalid_phoneNo);

        expect(phone_region_with_invalid_phoneNo).to.equal(respInJson.body.phone_region);
        console.log("\n Validated the phone_region :  " + phone_region_with_invalid_phoneNo);

        expect(country_with_invalid_phoneNo).to.equal(respInJson.body.country);
        console.log("\n Validated the country :  " + country_with_invalid_phoneNo);

        expect(country_code_with_invalid_phoneNo).to.equal(respInJson.body.country_code);
        console.log("\n Validated the country_code :  " + country_code_with_invalid_phoneNo);

        expect(country_prefix_with_invalid_phoneNo).to.equal(respInJson.body.country_prefix);
        console.log("\n Validated the country_prefix :  " + country_prefix_with_invalid_phoneNo);

        expect(international_number_with_invalid_phoneNo).to.equal(respInJson.body.international_number);
        console.log("\n Validated the international_number :  " + international_number_with_invalid_phoneNo);

        expect(local_number_with_invalid_phoneNo).to.equal(respInJson.body.local_number);
        console.log("\n Validated the local_number :  " + local_number_with_invalid_phoneNo);

        expect(e164_with_invalid_phoneNo).to.equal(respInJson.body.e164);
        console.log("\n Validated the e164 :  " + e164_with_invalid_phoneNo);

        expect(carrier_with_invalid_phoneNo).to.equal(respInJson.body.carrier);
        console.log("\n Validated the carrier :  " + carrier_with_invalid_phoneNo);

        tc_title = 'Validated the error message of get veriphone details with invalid phone.';
        values = {
            StatusCode: successCode_200,
            SuccessMsg: successMsg,
            PhoneNumber: invalidData,
            Phone_valid: phone_valid_with_invalid_phoneNo,
            phone_type: phone_type_with_invalid_phoneNo,
            phone_region: phone_region_with_invalid_phoneNo,
            country: country_with_invalid_phoneNo,
            country_code: country_code_with_invalid_phoneNo,
            country_prefix: country_prefix_with_invalid_phoneNo,
            international_number: international_number_with_invalid_phoneNo,
            local_number: local_number_with_invalid_phoneNo,
            e164: e164_with_invalid_phoneNo,
            carrier: carrier_with_invalid_phoneNo
        };
    }).timeout(200000);

    it('Validate the error message of get veriphone details with missed phone.', async () => {

        let resp = await testLib.getVeriphone({
        });

        respInJson = testLib.jsonparse(resp);

        expect(errorCode_400).to.equal(respInJson.statusCode);
        console.log("\n Validated the status code :  " + errorCode_400);

        expect(status_error).to.equal(respInJson.body.status);
        console.log("\n Validated the error status : " + status_error);

        expect(errorCode_400).to.equal(respInJson.body.code);
        console.log("\n Validated the error code : " + errorCode_400);

        expect(missing_phoneNo_error_type).to.equal(respInJson.body.type);
        console.log("\n Validated the error type : " + missing_phoneNo_error_type);

        expect(empty_or_missed_phoneNo_errorMsg).to.equal(respInJson.body.message);
        console.log("\n Validated the error message : " + empty_or_missed_phoneNo_errorMsg);

        tc_title = 'Validated the error message of get veriphone details with missed phone.';
        values = {
            StatusCode: errorCode_400,
            Missed_phoneNo_error_status: status_error,
            Missed_phoneNo_errorCode: errorCode_400,
            Missed_phoneNo_error_type: missing_phoneNo_error_type,
            Missed_phoneNo_errorMsg: empty_or_missed_phoneNo_errorMsg
        };
    }).timeout(200000);

    it('Validate the error message of get veriphone details with empty phone.', async () => {

        let resp = await testLib.getVeriphone({
            phone: ''
        });

        respInJson = testLib.jsonparse(resp);

        expect(errorCode_400).to.equal(respInJson.statusCode);
        console.log("\n Validated the status code :  " + errorCode_400);

        expect(status_error).to.equal(respInJson.body.status);
        console.log("\n Validated the error status : " + status_error);

        expect(errorCode_400).to.equal(respInJson.body.code);
        console.log("\n Validated the error code : " + errorCode_400);

        expect(missing_phoneNo_error_type).to.equal(respInJson.body.type);
        console.log("\n Validated the error type : " + missing_phoneNo_error_type);

        expect(empty_or_missed_phoneNo_errorMsg).to.equal(respInJson.body.message);
        console.log("\n Validated the error message : " + empty_or_missed_phoneNo_errorMsg);

        tc_title = 'Validated the error message of get veriphone details with empty phone.';
        values = {
            StatusCode: errorCode_400,
            Empty_phoneNo_error_status: status_error,
            Empty_phoneNo_errorCode: errorCode_400,
            Empty_phoneNo_error_type: missing_phoneNo_error_type,
            Empty_phoneNo_errorMsg: empty_or_missed_phoneNo_errorMsg
        };
    }).timeout(200000);
});