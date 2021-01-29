var headers = {}
export const getVeriphone = async (filters) => {
   console.log('Get veriphone... ');
   headers = {
      "x-rapidapi-key": "020a376fc7mshe7657db96f6a5bep10391cjsn667089873ac4",
      "x-rapidapi-host": "veriphone.p.rapidapi.com",
      "useQueryString": true
   }
   var resp = await apiRequest(global.veriphone_apiHost, 'GET', '/verify', headers, filters);
   console.log("-----------------------------------------------resp-----------------------------------------------\n")
   console.log(JSON.stringify(resp))
   console.log("-----------------------------------------------resp-----------------------------------------------\n")
   return resp
}

export const germanCompanyLookupActivityCheck = async (params) => {
   console.log('German Company Lookup and Activity Check... ');
   headers = {
      "content-type": "application/json",
      "accept": "application/json",
      "x-rapidapi-key": "020a376fc7mshe7657db96f6a5bep10391cjsn667089873ac4",
      "x-rapidapi-host": "german-company-lookup-and-activity-check.p.rapidapi.com",
      "useQueryString": true
   }
   var resp = await apiRequest(germanCompanyLookupActivityCheck_apiHost, 'POST', '/lookup', headers, params);
   console.log("-----------------------------------------------resp-----------------------------------------------\n")
   console.log(JSON.stringify(resp))
   console.log("\n---------------------------------------------resp-----------------------------------------------\n")
   return resp
}

//******************************************************************************** */

// export const getVeriphone = async () => {
//    console.log('Get veriphone... ');
//    return await apiRequest(global.veriphone_apiHost,'GET');
// }
//******************************************************************************** */

export const postDispute = async (params) => {
   console.log('create Dispute, Edit Dispute. ... ');
   return await apiRequest('POST', '/xoms-api', params);
}

export const getDispute = async (filters) => {
   console.log('Get Dispute, List Dispute. ... ');
   return await apiRequest('GET', '/xoms-api' + getQstring(filters));
}

export const getJobDetails = async (jobId) => {
   console.log('getJobDetails.jobId', jobId);
   var resp = await apiRequest('GET', `/jobs/${jobId}`);
   return resp;
}

//******************************************************************************** */

/**
 * Convert JSON string to Object.
 * Parse ony if it is valid JSON string else return same string.
 */
export const jsonparse = (s) => {

   // If already object or null or undefined, return as it is.
   if (typeof s !== 'string') return s;
   if (!s) return s;

   try {
      let obj = JSON.parse(s);
      return obj;
   } catch (e) {
      return s;
   }
}


/**
 * JSON stringify better formatted for human consumption.
 */
export const jsonstringify = (s) => {
   // indent spaces: 2
   if (typeof s === 'string') return s;
   return JSON.stringify(s, null, 2);
}

/**
 * Get current date
 */
export const currentDate = () => {
   var today = new Date();
   var dd = String(today.getDate());
   var mm = String(today.getMonth() + 1); //January is 0!
   var yyyy = today.getFullYear();
   var today = mm + '/' + dd + '/' + yyyy;
   return today
}

/**
 * Get future or previous date
 */
export const futurePreviousDate = (NumberOfdays) => {
   var today = new Date();
   today.setDate(today.getDate() + NumberOfdays);
   var dd = String(today.getDate());
   var mm = String(today.getMonth() + 1);
   var yyyy = today.getFullYear();
   var targetDate = mm + '/' + dd + '/' + yyyy;
   return targetDate
}

/**
 * Get current time
 */
export const currentTime = () => {
   var today = new Date();
   var time = today.getHours() + ":"
      + today.getMinutes() + ":" + today.getSeconds();
   return time
}

/**
 * Get current date yyyy_mm_dd
 */
export const currentDate_yyyy_mm_dd = () => {
   var today = new Date();
   var dd = String(today.getDate());
   var mm = String(today.getMonth() + 1); //January is 0!
   var yyyy = today.getFullYear();
   today = yyyy + '-' + mm + '-' + dd;
   return today
}

/**
 * Get current date mm/dd/yyyy
 */
export const currentDate_mm_dd_yyyy = () => {
   var today = new Date();
   var dd = String(today.getDate());
   var mm = String(today.getMonth() + 1); //January is 0!
   var yyyy = today.getFullYear();


   var mmChars = mm.split('');
   var ddChars = dd.split('');

   // var today = yyyy + '-' + mm + '-' + dd;
   var today = (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + yyyy;

   return today
}

/**
 * Get future or previous date with format yyyy_mm_dd
 */
export const futurePreviousDate_yyyy_mm_dd = (NumberOfdays) => {
   var today = new Date();
   today.setDate(today.getDate() + NumberOfdays);
   var dd = String(today.getDate());
   var mm = String(today.getMonth() + 1);
   var yyyy = today.getFullYear();

   var mmChars = mm.split('');
   var ddChars = dd.split('');

   // var targetDate = yyyy + '-' + mm + '-' + dd;
   var targetDate = yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
   return targetDate
}