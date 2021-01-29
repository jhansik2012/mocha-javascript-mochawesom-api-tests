describe('German Company Lookup and Activity Check Api validations .......', () => {

    it('Validate the success message of German Company Lookup and Activity Check.', async () => {

        let resp = await testLib.germanCompanyLookupActivityCheck({
            "active": true,
            "city": "Berlin",
            "ebid": "2501100133998",
            "email": "hello@implisense.com",
            "hrCourt": "Berlin (Charlottenburg)",
            "hrNumber": "153069",
            "hrType": "HRB",
            "lei": "7LTWFZYICNSX8D621K86",
            "name": "Implisense GmbH",
            "query": "Implisense Berlin",
            "street": "Spiekermannstraße 31a",
            "url": "implisense.com",
            "zip": "13189"
        });

        respInJson = testLib.jsonparse(resp);

        expect(successCode_200).to.equal(respInJson.statusCode);
        console.log("\n Validated the status code :  " + successCode_200);

        expect(successMsg).to.not.have.haveOwnProperty(respInJson.body.status);
        console.log("\n Validated the status : " + successMsg);

        tc_title = 'Validated the success message of German Company Lookup and Activity Check.';
        values = {
            StatusCode: successCode_200,
            SuccessMsg: successMsg
        };
    }).timeout(200000);
});