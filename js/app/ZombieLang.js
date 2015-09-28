define([], function() {
	var ZombieLang = {};
	
	ZombieLang.convert = function(inputValue) {

		var patterns = [
			{
				match : /r\b/g,
				replace : 'rh'
			}
		];

		for (var x = 0; x < patterns.length; x++) {
			var pattern = patterns[x];	
			inputValue = inputValue.replace(pattern.match, pattern.replace);

		}

		return inputValue;
	};
	return ZombieLang;
});