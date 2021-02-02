const { config } = require('chai');

global.projectBasePath = process.cwd(),
  global.testDataFile = process.env.npm_package_config_testDataFile,
  global.testConfig = require(projectBasePath + '/src/Api/apiTestData/' + testDataFile + '.json'),
  global.testLib = require(projectBasePath + '/src/Api/library/Testlib'),
  global.apiRequest = require(projectBasePath + '/src/Api/library/Api').apiRequest,
  global.addContext = require('mochawesome/addContext'),
  global.expect = require('chai').expect,
  global.assert = require('chai').assert,
  global.mysql = require('mysql'),
  global.objectToCsv = require('objects-to-csv'),

  global.veriphone_apiHost = "https://veriphone.p.rapidapi.com",
  global.germanCompanyLookupActivityCheck_apiHost = "https://german-company-lookup-and-activity-check.p.rapidapi.com",
  
  
  global.tc_title = "",
  global.values = {},
  global.respInJson = '',
  global.invalidData = 'xxx',

  global.errorMessage = "",
  global.errorCode = "",
  global.successCode_200 = 200,
  global.errorCode_400 = 400,
  global.errorCode_500 = 500,

  global.successMsg = 'success',  
  global.invalid_phoneNo_errorMsg = 'Invalid phone number',
  global.status_error = 'error',
  global.missing_phoneNo_error_type = 'Missing Parameter',
  global.empty_or_missed_phoneNo_errorMsg = 'Required parameter phone is missing or empty',

  global.futureDate_yyyy_mm_dd = testLib.futurePreviousDate_yyyy_mm_dd(5),
  global.futureDate = testLib.futurePreviousDate(5),
  global.previousDate = testLib.futurePreviousDate_yyyy_mm_dd(-1),
  global.currentDate = testLib.currentDate(),
  global.currentDate_yyyy_mm_dd = testLib.currentDate_yyyy_mm_dd(),
  global.currentDate_mm_dd_yyyy = testLib.currentDate_mm_dd_yyyy(),
  
  global.phoneNo = testConfig.phoneNo,
  global.phone_valid_with_valid_phoneNo = testConfig.phone_valid_with_valid_phoneNo,
  global.phone_type = testConfig.phone_type,
  global.phone_region = testConfig.phone_region,
  global.country = testConfig.country,
  global.country_code = testConfig.country_code,
  global.country_prefix = testConfig.country_prefix,
  global.international_number = testConfig.international_number,
  global.local_number = testConfig.local_number,
  global.e164 = testConfig.e164,
  global.carrier = testConfig.carrier,

  global.phone_valid_with_invalid_phoneNo = testConfig.phone_valid_with_invalid_phoneNo,
  global.phone_type_with_invalid_phoneNo = testConfig.phone_type_with_invalid_phoneNo,
  global.phone_region_with_invalid_phoneNo = testConfig.phone_region_with_invalid_phoneNo,
  global.country_with_invalid_phoneNo = testConfig.country_with_invalid_phoneNo,
  global.country_code_with_invalid_phoneNo = testConfig.country_code_with_invalid_phoneNo,
  global.country_prefix_with_invalid_phoneNo = testConfig.country_prefix_with_invalid_phoneNo,
  global.international_number_with_invalid_phoneNo = testConfig.international_number_with_invalid_phoneNo,
  global.local_number_with_invalid_phoneNo = testConfig.local_number_with_invalid_phoneNo,
  global.e164_with_invalid_phoneNo = testConfig.e164_with_invalid_phoneNo,
  global.carrier_with_invalid_phoneNo = testConfig.carrier_with_invalid_phoneNo

afterEach("After Each test case...", function (done) {
  if (this.currentTest.state === 'passed') {
    var test = this.currentTest
    addContext(this, {
      title: tc_title,
      value: values
    });
  }
  done();
});