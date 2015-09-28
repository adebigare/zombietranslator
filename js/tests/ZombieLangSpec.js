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
		});
	});
});