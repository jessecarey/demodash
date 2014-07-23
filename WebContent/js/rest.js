function makeHeader(headerType, headerValue)
{
	var myHeader = new Object();
	myHeader.header = headerType;
	myHeader.value = headerValue;
	return myHeader;
}

function sendRequest(url, actionMethod, httpMethod, headers, data)
{
	var req = createRequest(); // defined above
	req.onreadystatechange = function() {
	  if (req.readyState != 4) return; // Not there yet
	  if (req.status == 204) {
		  actionMethod();
	  }
	  if (req.status != 200) {
	    return;
	  }
	  var resp = req.responseText;
	  actionMethod(resp);
	}
	req.open(httpMethod, url, true);
	for(var i = 0; i < headers.length; i++)
	{
		req.setRequestHeader(headers[i].header, headers[i].value);
	}
	if(data == null)
	{
		req.send();	
	}
	else
	{
		req.send(data);			
	}
}
function createRequest() {
	var result = null;
	if (window.XMLHttpRequest) {
		result = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		result = new ActiveXObject("Microsoft.XMLHTTP");
	} 
	return result;
}