module.exports = function check(str, bracketsConfig) {
	var arr = [];
	var newStr = " ";	

	for (var i = 0; i < bracketsConfig.length; i++) {
		arr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);			
	}	

	while (true) {
		if (newStr.length != str.length) {
			newStr = str;
			for (var i = 0; i < arr.length; i++) {
				str = str.replace(arr[i], '');
			}	
		} else {
			break;
		}						
	}

	if (newStr.length == 0) {
		return true
	};

	return false; 
}

//console.log(check('((()))()', [['(', ')']]));


