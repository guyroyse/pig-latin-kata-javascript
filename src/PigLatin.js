String.prototype.startsWithVowel = function() {
	var self = this;
	return ['a','e','i','o','u'].some(function(character) {
		return self[0] === character;
	});
};

String.prototype.startingConsonants = function() {
	return '';
}; 

String.prototype.postConsonants = function() {
	return '';
};

var piglatinize = function(text) {
	if (text.startsWithVowel()) return text + 'way';
	return text.postConsonants() + text.startingConsonants() + 'ay';
};
