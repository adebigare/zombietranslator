define([], function() {
	var ZombieLang = {};
	ZombieLang.convert = function(inputValue) {
		return inputValue;
	}
	return ZombieLang;
// 	var ZombieLang = function(englishVal) {
// 		this.englishVal = englishVal;
// 		this.zombify = zombify; 
// 	}

// 	ZombieLang.prototype.zombify = function() {
// 		this.pattern = new RegExp(/r\b/g);
// 	}

// 	return ZombieLang;
});

//  var pattern = new RegExp(/r\b/g);
//         var newVal = inputValue.replace(pattern, "rh");
//         var result = pattern.test(inputValue);