const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader'); 
const packageDef = protoLoader.loadSync("Calc.proto",{}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage; 

const server = new grpc.Server(); 

server.bind('localhost:9000' , grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.Calc.service,{
	'Add': Add,
    'Multi': Multi,
    'Soustraction': Soustraction,
    'Div': Div,
	
	
}); 

server.start(); 



function Add (call , callback) {
    //console.log(call.request.x);
	const response = { 
	   'res' : call.request.x+call.request.y
    }
	callback(null, response); 
	
}


function Soustraction(call , callback) {
    //console.log(call.request.x);
	const response = { 
	   'res' : call.request.x-call.request.y
    }
	callback(null, response); 
	
}

function Multi(call , callback) {
    //console.log(call.request.x);
	const response = { 
	   'res' : call.request.x*call.request.y
    }
	callback(null, response); 
	
}


function Div(call , callback) {
    //console.log(call.request.x);
    if(call.request.y!=0){
	const response = { 
	   'res' : call.request.x/call.request.y
    }  
    callback(null, response); }
    else {
        const response = { 
            'err' : "division impossible"
         }
         callback(null, response);
    }

	
	
}

