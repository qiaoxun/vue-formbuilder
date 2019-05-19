import {fetch} from "./index";

export default {
	getJsonData(url, params){
		return fetch(url, params);
	},
	fetchOptionsData(url, labelField, valueField, params) {
		let promise = fetch(url, params).then((data) => {
			if (data && data.length > 0) {
				let options = [];
				data.forEach((ele) => {
					let obj = {};
					obj.optionLabel = ele[labelField];
					obj.optionValue = ele[valueField];
					obj.disabled = ele.disabled;
					options.push(obj);
				});
				return options;
			}
		});
		return promise;
	}
}
