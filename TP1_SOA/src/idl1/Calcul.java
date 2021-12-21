package idl1;



import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public class Calcul {
	//expos� dans le web 
	@WebMethod
	public int somme(@WebParam(name="a")int a ,@WebParam(name="b") int b ){
		return a+b;
	}
	
	@WebMethod
	public int soustraction(@WebParam(name="a")int a ,@WebParam(name="b") int b ){
		return a-b;
	}

	@WebMethod
	public int multiplication(@WebParam(name="a")int a ,@WebParam(name="b") int b ){
		return a*b;
	}
	

	
}

