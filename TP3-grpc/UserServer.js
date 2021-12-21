const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader'); 
const packageDef = protoLoader.loadSync("User.proto",{}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage; 

const server = new grpc.Server(); 

server.bind('localhost:9000' , grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.User.service,{
	'CreateUser': CreateUser,
	'GetUsers' : GetUsers,
    'DeleteUser' : DeleteUser,
    'UpdateUser' : UpdateUser
	
}); 

server.start(); 

const users = []; 

function CreateUser (call , callback) {
	const user = { 
	   'id' : users.length +1, 
	   'name' : call.request.name
	}
	
    
	users.push(user);
	callback(null, user); 
	
}


function GetUsers(call , callback)
{
	callback(null , {
		'items': users 
		
	}); 
}

function DeleteUser(call , callback) {
	const user = { 
	   'id' : call.request.id,
       'name' : call.request.name
	}
    const index =users.findIndex(u => u.id == user.id  & u.name==user.name);
    console.log(index)
	users.splice(index,1);
	callback(null, {'items' :users}); 
	
}


function UpdateUser(call , callback) {
	const user = { 
        'id':call.request.id,
	    'name' : call.request.name,
       
	}
	index =users.findIndex(u => u.id == user.id);
	users[index].name=user.name;
	callback(null, {'items' :users}); 
	
}
