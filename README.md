# Purpose of this application
The purpose of this application is to remove 'forwarded email characters (>)' from email text.
i.e. '> This is an example of forwarded text' => 'This is an example of forwarded text'


I had used the Yii Framework (Yii 2), and used Javascript on the client-side to process the data from the user.

To setup Yii, I had followed this documentation - http://www.yiiframework.com/doc-2.0/guide-start-installation.html and used composer to install it.

### Approach to cleaning '>' characters

## Core Processing Module:
Please refer to `email-cleaner/web/js/text_processor_module.js` for the source of this module.

I had thought of the following (potential) solutions:
* replace all ‘>’ characters with an empty character ‘’
* search for the first valid text character (non ‘>’ and non <space>), get the substring of input string, starting from position 0, till the first valid character, and then replace all occurrences of the substring within the input string with an empty character
* A more refined approach…

The issue that I found with (1) was - if I had replaced all ‘>’ characters, important information within the message would be truncated…
and the issue with (2) was - within a long email thread, the pattern of “>” characters is not the same, sometimes it is “>” and sometimes it is “>>>”, etc.

I solved the above problem by:
* Splitting the entire input string blob into an array of strings, delimited by a newline (A real email message contains newlines!)
* for each string within the array, look for the first VALID* character, get its position, and then get the pattern to be removed (substring), and then replace the pattern with an empty character.
* Valid Character - I used RegEx for this, my expression looked for ‘>’ and <space> characters, and then I negated the expression, which gave me the first VALID character. 
There is an exception case to this technique– if the regEx returns -1 (no valid character) – it would mean, blank line, so the cleaned string would ofcourse, be a blank line!
* After processing the entire array of strings, I joined them back


# Testing

There were 4 main tests that I had carried out (refer to refer to `email-cleaner/web/js/text_processor_module.js` lines 63 – 79)
* Testing the original test sample given in the assignment (single and multi-line)
* A single empty blank line
* A single ‘>’ character
* Two ‘>’ characters
* And finally, a real-world test case, which I pulled from my email, this had multiline, as well as blank lines

