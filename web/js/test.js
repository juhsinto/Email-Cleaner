require("text_processor.js");




function cleanText() {
  // sayMeow();  // this is called from text_processor
  var input = document.getElementById('input').value;
  var processed_string = process_string_blob(input);

  document.getElementById("output").value = processed_string;
}


function clearInputText() {
  document.getElementById("input").value = '';
}


function copyText() {
  var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

  copyTextareaBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('.js-copytextarea');
    copyTextarea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      // console.log('Copying text command was ' + msg);
    } catch (err) {
      // console.log('Oops, unable to copy');
      alert("Unable to copy text, please do it manually!");
    }
  });
}
