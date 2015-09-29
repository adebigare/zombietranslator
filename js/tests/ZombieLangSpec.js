define(['ZombieLang'], function(ZombieLang) {

	beforeEach(function(){
		var ZombieLang = {};
	})

	describe('ZombieLang', function () {
		describe('convert', function() {
			var convert = ZombieLang.convert;

			//r > rh
			it('should convert the r at the end of reader to an rh', function() {
				expect(convert('reader')).toMatch('readerh');
			});

			it('should NOT convert the r in origami to an rh', function(){
				expect(convert('origami')).toMatch('origami');
			});
			it('should ONLY convert the last r in grrr to an rh', function() {
				expect(convert('grrr')).toMatch('grrrh');
			});
			//a > hra 
			it('should convert the article a in a sentence to hra', function() {
				expect(convert('he is a dog')).toMatch('he is hra dog');
			});
			it('should NOT convert the a within a word to hra', function() {
				expect(convert('apple')).not.toMatch('hrapple');
			});
			it('should not convert a series of a\'s to a series of hra\'s', function() {
				expect(convert('aaaaaa')).toMatch('aaaaaa');
			});
		});
	});
});