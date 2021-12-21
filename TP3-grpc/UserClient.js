const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader'); 
const packageDef = protoLoader.loadSync("User.proto",{}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage; 

const client = new todoPackage.User('localhost:9000' , grpc.credentials.createInsecure()); 



client.UpdateUser({
    'id':1,
    'name':"asma2"
} , (err, response ) => { 
      console.log('Received from server --------------> User updated ---> actual liste : ' + JSON.stringify(response)); 
}) 


client.GetUsers({} , (err , response ) => {
	console.log('Liste de users : ', JSON.stringify(response));
}) 

client.CreateUser({
    'id':2,
    'name' :'sahar'
} , (err, response ) => { 
      console.log('Received from server  --------> User created : ' + JSON.stringify(response)); 
}) 

client.CreateUser({
    'id':1,
    'name' :'asma'
} , (err, response ) => { 
      console.log('Received from server  --------> User created : ' + JSON.stringify(response)); 
}) 
//node server .js 

//node client .js