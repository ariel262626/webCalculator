
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
let convert = {};



let counter = 0

//app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/calculate', function(req, res){
    var result = convert.calculateNextState(req.body.calculatorState, req.body.input);
    res.json(result);
})

//listen to port
app.listen(3000, () => console.log('NOT listening...'))

//app.listen(process.env.PORT, () => console.log('listening...'))
//set PORT = 3001
//then run.

convert.calculateNextState = function(jsonState, input) {
// jsonState {display: "5", lastState: "null", leftSide: 34, opererator: '+'}
var operators = ["+", "*", "-", "/"];
var opererations = {
                    "+": function(x,y) {return parseInt(x)+parseInt(y)}, 
                    '-' : function(x,y) {return parseInt(x)-parseInt(y)},
                    '*' : function(x,y) {return parseInt(x)*parseInt(y)},
                    '/' : function(x,y) {return parseInt(x)/parseInt(y)} 
                }

if(jsonState == null) {
    jsonState = {};
    jsonState["display"] = "";
    jsonState["display"] = input;
    jsonState["lastState"] = "";
    jsonState["leftSide"] = "";
    jsonState["operator"] = "";
    return jsonState;

}

else if(input === "=") {
    var result = opererations[jsonState.operator](jsonState.leftSide, jsonState.display)
    jsonState.display = result;
    jsonState.lastState = "=";
    jsonState.operator = "";
    jsonState.leftSide = "";
    return jsonState;

}
// IF INPUT WAS AN OPERATOR
else if(operators.includes(input)) {
    if(jsonState.leftSide != "") {
        var result = opererations[jsonState.operator](jsonState.leftSide, jsonState.display);
        jsonState.leftSide = result;
        
    } else{
    jsonState.leftSide = jsonState.display;
    }
    jsonState.operator = input;
}
// INPUT IS A NUMBER:
// LAST INPUT WAS OPERATOR
else if (operators.includes(jsonState.lastState)) {
    jsonState.display = input;
} else if(jsonState.lastState === "=") {
    jsonState.display = input;
    jsonState["lastState"] = "";
    jsonState["leftSide"] = "";
    jsonState["operator"] = "";
}
else{
    // LAST INPUT WAS A NUMBER
    var c = input;
    jsonState.display = jsonState.display.concat(c);
}
jsonState.lastState = input;
return jsonState;
}

module.exports = convert;
