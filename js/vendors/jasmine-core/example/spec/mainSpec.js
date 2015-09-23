describe("inputValue", function() {
	var inptVal = new inputValue();

	it("changes r to rh at the end of a word", function() {
		expect("reader").toBe("readerh");
	})
})