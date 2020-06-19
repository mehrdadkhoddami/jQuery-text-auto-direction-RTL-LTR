/*!
* Auto Direction. (RTL To LTR)
* Mehrdad Khoddami (@mehrdadkhoddami) Under Licence MIT.
* Created at April 2019.
*/
$.fn.autoDirect = function(howMany) {
	howMany = howMany || 1;
	var reset = true;
	var input_txt = '';
	if ($(this).is("input") || $(this).is("textarea") || $(this).is("select")) {
		input_txt = $(this).val();
	} else {
		input_txt = $(this).html();
	}

	var cleaned_text = input_txt.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, ''); //replaced all special character

	if (cleaned_text.length == 0) {
		reset = false;
	} else {
		var lastChar = input_txt[input_txt.length -1];
		if (lastChar.match(/\s/g)) {
			return false;
		}
	}

	var final_text = cleaned_text.substr(0, howMany);

	if(!reset) { // reset ltr/rtl to default
		$(this).css('direction', '');
	} else if (rtlDirection(final_text)) { // use rtlDirection(cleaned_text) to detect text direction based on whole string
		$(this).css('direction', 'rtl');
	} else {
		$(this).css('direction', 'ltr');
	}

	return true;
};

function rtlDirection(str) {
	var letters = str.split(/(?!$)/u);
	var rtl = ltr = 0;

	for (var i = 0; i < str.length & i < 100; i++) { // for performance only check first 100 characters
		if (letters[i].match(/^[\u0600-\u06FF\s]?$/)) {
			rtl++;
		} else {
			ltr++;
		}
	}
	return (rtl>=ltr)?true:false;
}
