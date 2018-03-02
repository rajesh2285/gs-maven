var ecommTrainingOrders = Class.create();
ecommTrainingOrders.prototype = {
    initialize: function() {
    },
    restCall: function(file_sys_id){
	gs.log('run1'+ file_sys_id);
    try {
    gs.log('run2');
	var tableName = 'sc_req_item';
	//var sysIDOfRecord = file_sys_id;
	
	
	//Declare a new instance of GlideSysAttachment. 
	var gsa = new GlideSysAttachment();
	//Get the raw bytes in the file
	var bytesInFile = gsa.getBytes(tableName, '18ffea2d6db689b8058b432ab7c961943'); 
	
		gs.log('run3');
	//Convert that jive into a string using Java/Rhino. 
	//var dataAsString = String(Packages.java.lang.String(bytesInFile));
	
	//var dataAsString = Packages.java.lang.String(bytesInFile);
    //Re-convert to a string in Javascript, cause we don't trust Rhino.
    //dataAsString = String(dataAsString);
		
		gs.log('run4');
	//Re-convert to a string in Javascript, cause we don't trust Rhino.
	//dataAsString = String(dataAsString);
    gs.log('run5');
	var base64string = GlideStringUtil.base64Encode(bytesInFile);
	var gsu = (typeof GlideStringUtil != 'undefined') ? (GlideStringUtil) : (Packages.com.glide.util.StringUtil);
	var cAttachment = gsu.base64Encode(dataAsString);

	gs.log("BASE64:"+ cAttachment );
		gs.log('run6');
	var stringCons='{"message": "my commit message","committer": {    "name": "rajesh",    "email": "rajesh.mukkapati@walmart.com"}, "content":"';
	var string2=stringCons.toString();
	var string3=cAttachment.toString();
	var strQ='"}';
	var stri=strQ.toString();
	var body=string2+string3+stri;
	gs.log('run9' + body);

    var request = new sn_ws.RESTMessageV2();
	request.setMIDServer('US_TDEV_ORCH_1');
	
	    //var country_code = current.variables.country_box;
		gs.log('run7');
		
		//var country_code = 'country_us';
        request.setHttpMethod("PUT");
		request.setRequestHeader('Authorization','token a0831ce4c37c0393daf6ff6f2019382a3ef5899c');
			request.setEndpoint("https://gecgithub01.walmart.com/api/v3/repos/RT-Integrated-Fulfillment/OrderFulfillment-CICD-Configs/contents/US_GIF.csv");
			
		request.setRequestBody(body);
        var response = request.execute();
        var httpResponseStatus = response.getStatusCode();
        gs.log("http response status_code: " + httpResponseStatus);       
    }
    catch (ex) {
		gs.log('run8');
        var message = ex.getMessage();
        gs.log('rajeshtest'+message);
    }


    },
    type: 'ecommTrainingOrders'
};
