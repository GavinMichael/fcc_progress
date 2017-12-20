/*
CHALLENGE :
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/


function truthCheck(obj, pre) {
	// Is everyone being true?
	// loop through the obj and 
	for (var i = 0; i < obj.length; i++) {
		// check if all objects have the given property
		if (obj[i].hasOwnProperty(pre)) {
			// if yes, is it null/ undefined, '', etc
			if (!obj[i][pre]) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
