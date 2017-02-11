// Javascript processor to process input text, and output clean text.

// function that processes multiple lines (including new line char) of string text 
function process_string_blob(input_string_blob) {
	
	// split the input string blob (which contains newlines), into
	// an array of strings without the newline
	var input_string_array = input_string_blob.split(/\r?\n/);


	for(var i=0; i<input_string_array.length; i++) {
		// console.log("before processing :" + input_string_array[i]);
		input_string_array[i] = process_string(input_string_array[i]);
		// console.log("after processing :" + input_string_array[i]);
	}

	input_string_cleaned =  input_string_array.join("\n");
	// console.log(input_string_cleaned);
	return input_string_cleaned;
}


// function that contains the logic to process the input string (single line)
function process_string(input_string) {

	var array_of_newlines_input_string = input_string.split(/\r?\n/);

	// console.log("The input string is :" + input_string);
 
	// RegEx pattern to search for characters that we are NOT looking for
	var pattern = "/[^>|\s]/";
	
	// get the position of character that is not a 'space' or a '>' character 
	// i.e. where "real" content starts
	// N.B. => string.search() will return -1 if no search found; and if search was
	// found at position 0 it will return 0 (duh!)
    var position = input_string.search(/[^>|\s]/);
	// console.log("position of first, non-space or non-grt, character :" + position);

    // get the character pattern of the string we need to replace
    // i.e. characters from the start (position 0) of the string till 
    // the first non-space or non-'>' char
    
    var fw_char_pattern;
    var clean_string;

    if ( position == -1 ) { // exception case; if input string has no good text
		clean_string = "";
	} else {
		fw_char_pattern = input_string.substring(0, position);
		// console.log("The character pattern is :" + fw_char_pattern);

		// Replace all occurences in the input string 
		// of the forwarded char pattern with an empty char ('')
		clean_string = input_string.replace(fw_char_pattern, '');
	}

	// console.log("The processed string is :" + clean_string);
	return clean_string;
}


// Test cases
// ------------
// Process string that will pass the test
v_input_string = "> This is bad text";	// position is 2
// process_string(v_input_string);

// Process string that will fail the test
i_input_string = ">>>>>>>>>>>>>>>>>>> This is an example of \n" +
				 ">>>>>>>>>>>>>>>>> forwarded text";

// identified another test that would fail				 
i_2 = ">";

i_3 = ">>";

// real world test case
real_test_string = "> Hi J,\n>\n> Gah, I'm pretty terrible with emails. I'm performing next week and have\n> practice tomorrow";
// ------------


// Test the string processor
console.log(process_string_blob(real_test_string));