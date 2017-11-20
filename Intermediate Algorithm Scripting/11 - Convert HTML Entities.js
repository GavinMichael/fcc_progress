/*
CHALLENGE :
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	var results = str.replace(/&|<|>|"|'/gi, function (x) {
  	switch (x) {
    	case '&':
      	return '&amp;';
      case '>':
      	return '&gt;';
      case '<':
      	return '&lt;';
      case '"':
      	return '&quot;';
      case "'":
      	return '&apos;';
      default:
      	return x;
    }
  });
	
	return results;
}

convertHTML("Dolce & Gabbana");
