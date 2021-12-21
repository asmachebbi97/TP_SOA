package idl1;

import java.util.ArrayList;
import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
@WebService
public class Usercontroller {
	public List<User> listU=new ArrayList<>();

	@WebMethod
	public User add(@WebParam(name="u")User u ){
	listU.add(u);
		return u;
	}
	
	@WebMethod
	public List<User> delete(@WebParam(name="id")int id ){ //id is the index of the user to be deleted 
	listU.remove(id);
	
	return afficheruser();
	}
	
	@WebMethod
	public List<User> afficheruser(){

	return listU;
	}
}
