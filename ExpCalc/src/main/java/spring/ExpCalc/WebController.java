package spring.ExpCalc;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WebController {

	// @RequestMapping("/exp")
	// public Maple Exp(@RequestParam(defaultValue = "1") int stlvl, @RequestParam(defaultValue = "200") int endlvl, @RequestParam(defaultValue = "NONE") String type) {
	// 	Maple response = new Maple();
	// 	response.setexp();
	// 	return response;
	// }
	
	@RequestMapping(path = "/exp/{stlvl}/{endlvl}/{type}", method = RequestMethod.GET)
	public Maple Exp(@PathVariable int stlvl, @PathVariable int endlvl, @PathVariable String type) {
		Maple response = new Maple();
		response.setstlvl(stlvl);
		response.setendlvl(endlvl);
		response.settype(type);
		response.setexp();
		return response;
	}

	@RequestMapping(path = "/exp/{stlvl}/{endlvl}", method = RequestMethod.GET)
	public Maple Exp(@PathVariable int stlvl, @PathVariable int endlvl) {
		Maple response = new Maple();
		response.setstlvl(stlvl);
		response.setendlvl(endlvl);
		response.settype("NONE");
		response.setexp();
		return response;
	}
}
