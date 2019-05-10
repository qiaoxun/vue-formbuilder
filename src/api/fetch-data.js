import {fetch} from "./index";

export default {
	getJsonData(url, params){
		return fetch(url, params);
	}
}
