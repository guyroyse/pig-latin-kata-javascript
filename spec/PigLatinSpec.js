describe("Jasmine Test Runner", function() {

  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });

  describe("Pig Latin", function() {

    it("adds 'way' to the end of a single vowel word", function() {
			expect(piglatinize("a")).toEqual("away");
    });

		it("adds 'way' the end of a longer word that starts with a vowel", function() {
			expect(piglatinize("every")).toEqual("everyway");
		});

		it("moves a single consonants to end of word with 'ay' on the end", function() {
			expect(piglatinize("pig")).toEqual("igpay");
		});

		it("moves multiple consonants to the end of word with 'ay' on the end", function() {
			expect(piglatinize("school")).toEqual("oolschay");
		});
    
  });

});

