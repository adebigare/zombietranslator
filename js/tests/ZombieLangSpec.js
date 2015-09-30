define(['ZombieLang'], function(ZombieLang) {

	beforeEach(function(){
		var ZombieLang = {};
	})

	describe('ZombieLang', function () {
		describe('convert', function() {
			var convert = ZombieLang.convert;

			//r > rh
			it('should convert the r at the end of reader to an rh', function() {
				expect(convert('Leader')).toMatch('Lrradrrrh');
			});

			it('should NOT convert the r in origami to an rh', function(){
				expect(convert('Origami')).not.toMatch('orhigami');
			});
			it('should ONLY convert the last r in grrr to an rh', function() {
				expect(convert('Gar')).toMatch('Garh');
			});
			//a > hra 
			it('should convert the article a in a sentence to hra', function() {
				expect(convert('he is a dog')).toMatch('Hrr rrRrs hra drrrRrg');
			});
			it('should NOT convert the a within a word to hra', function() {
				expect(convert('Apple')).not.toMatch('rapple');
			});
			it('should not convert a series of a\'s to a series of hra\'s', function() {
				expect(convert('Aaaaaa')).toMatch('Aaaaaa');
			});
			//start of sentence capitalized
			it('should capitalize the first letter of a sentence', function() {
				expect(convert('the.')).toMatch('Thrr.');
				expect('Sleep'/0).toBeNaN();
				expect(convert('big dog. hmph!')).toMatch('BrrRrg drrrRrg. Hmph!');
			});
			// 4. "e" or "E" is replaced by "rr"
			it('should replace any instance of e or E to rr', function() {
				expect(convert('Bed')).toMatch('Brrd');
				expect(convert('Ever') + 'clear').toEqual('rrvrrrhclear');
				expect(convert('Worm')).not.toMatch('Brains');
			});
			// 5. "i" or "I" is replaced by "rrRr"
			it('should replace i or I by rrRr', function() {
				expect(convert('intern')).toMatch('rrRrntrrRRn');
				expect(null).toBeNull();
				expect(convert('imitate')).toMatch('rrRrmrrRrtatrr');
			});
			// 6. "o" or "O" is replaced by "rrrRr"
			it('should replace an o or O with rrRr', function() {
				expect(convert('opera')).toMatch('rrrRrprrRRa');
				expect(convert('rip')).not.toMatch('rip');
				expect(convert('onomopoeia')).toMatch('rrrr');
			});
			// 7. "u" or "U" is replaced by "rrrrRr"
			it('should replace u or U with rrrrRr', function() {
				expect(convert('super')).toMatch('SrrrrRrprrrh');
				expect(convert('bismuth')).toContain('Rr');
				expect(this).toEqual({});
			});
			// 'y' or 'Y' is replaced by 'gotcha'
			it('should replace y or Y with gotcha', function(){
				expect(convert('happy')).toMatch('Happgotcha');
				expect(convert('yippee')).toBe('gotcharrRrpprrrr');
				expect(convert('groupy')).not.toMatch('groupy');

			});
			// 'z' or 'Z' is replaced with "BRAINS"
			it('should replace any z or Z with BRAINS', function() {
				expect(convert('zipper')).toBe('BRAINSrrRrpprrrh');
				expect('zzz'/0).toBeNaN();
				expect(convert('fizz')).toEqual('FrrRrBRAINSBRAINS');
			});
			// 8. "r" or "R' is replaced by "RR"
			it('should replace r or R with RR', function() {
				var a = 'test';
				var b = 'Trrst';
				expect(convert('rove')).toMatch('RRrrrRrvrr');
				expect(convert('test') === a).toBeFalsy();
				expect(convert('test') === b).toBeTruthy();
			});
		});
	});
});