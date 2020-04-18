var express = require("express");
var app = express();

app.get("/*", function(request, res){
     
    res.send(request.url + 'app listening on port 80');
});
app.listen(80, function (){
	console.log('Work');
});