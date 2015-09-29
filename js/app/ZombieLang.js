define([], function() {
	var ZombieLang = {};
	
	ZombieLang.convert = function(inputValue) {

		var patterns = [
			{
				// 1. lower-case "r" at the end of words replaced with "rh".
				match : /r\b/g,
				replace : 'rh'

			},
			{
				// 2. an "a" or "A" by itself will be replaced with "hra".
				match: /\s(a|A)\s/,
				replace: ' hra '
			},
			{
				// 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
				//   ".!?", followed by a space, followed by a letter.)
				match: 
				replace:
			},
			{
			// 	// 4. "e" or "E" is replaced by "rr"
			// 	match: 
			// 	replace:
			// },
			// {
			// 	// 5. "i" or "I" is replaced by "rrRr"
			// 	match: 
			// 	replace:
			// },
			// {
			// 	// 6. "o" or "O" is replaced by "rrrRr"
			// 	match: 
			// 	replace:
			// },
			// {
			// 	// 7. "u" or "U" is replaced by "rrrrRr"
			// 	match: 
			// 	replace:
			// },
			// {
			// 	// 8. "r" or "R' is replaced by "RR"
			// 	match: 
			// 	replace:
			// },
			// {
			// 	match: 
			// 	replace:
			// },
			// {
			// 	match: 
			// 	replace:
			// }
		];

		for (var x = 0; x < patterns.length; x++) {
			var pattern = patterns[x];	
			inputValue = inputValue.replace(pattern.match, pattern.replace);

		}

		return inputValue;
	};
	return ZombieLang;
});

