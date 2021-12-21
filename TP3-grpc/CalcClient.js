const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader'); 
const packageDef = protoLoader.loadSync("Calc.proto",{}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage; 

const client = new todoPackage.Calc('localhost:9000' , grpc.credentials.createInsecure()); 
x=6;
y=0;
client.Add({
	'x' : x, 
	'y' : y
} , (err, response ) => { 
       console.log('somme de ' + x + " + " + y + " = " + JSON.stringify(response)); 
}) 

client.Soustraction({
	'x' : x, 
	'y' : y
} , (err, response ) => { 
       console.log('somme de ' + x + " - " + y + " = " + JSON.stringify(response)); 
}) 

client.Multi({
	'x' : x, 
	'y' : y
} , (err, response ) => { 
       console.log('somme de ' + x + " * " + y + " = " + JSON.stringify(response)); 
}) 

client.Div({
	'x' : x, 
	'y' : y
} , (err, response ) => { 
       console.log('somme de ' + x + " / " + y + " = " + JSON.stringify(response)); 
}) 



//node server .js 

//node client .js