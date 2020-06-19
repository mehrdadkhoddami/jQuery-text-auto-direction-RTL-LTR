# jQuery text auto direction (RTL/LTR)
A simple jQuery based code to automate direction of text according to its characters

## Description

This jQuery code automatically apply text direction to html elements by its characters; even in under typing form elements. This code reads text (e.g. the first 100 characters), seperates Persian (Farsi) characters from English ones, counts on each language then decides to apply RTL or LTR direction to that elements.

### Dependencies

* jQuery


### How to use
You have 3 choices to use this code:
1. Automate direction by using a styling class name. e.g. auto-direction
* include to load this file 
* use below lines to run:
```
$(document).ready(function (e) {
	$('.auto-direction').each(function () {
		$(this).autoDirect()
	});

	$(document).on("keyup", "input[type=text].auto-direction, textarea.auto-direction", function (e) {
		$(this).autoDirect();
	});
});
```
By this method, you are able to auto direct every content of html elements; From form elements to DIV, Span, etc.


2. Automate direction by using a element type. e.g. input elements
* include to load this file 
* use below lines to run:
```
$(document).ready(function (e) {
	$('input.auto-direction').each(function () {
		$(this).autoDirect()
	});

	$(document).on("keyup", "input[type=text].auto-direction", function (e) {
		$(this).autoDirect();
	});
});
```


3. Automate direction for special element. e.g. input elements with "firstname" as its id name
* include to load this file 
* use below lines to run:
```

$(document).ready(function (e) {
	$('input#firstname').each(function () {
		$(this).autoDirect()
	});
});
```


## Author

* Mehrdad Khoddami
* [@MehrdadKhoddami](https://twitter.com/mehrdadkhoddami)

## Version History

* 1.0
    * Initial Release

## License

This project is licensed under the MIT License
