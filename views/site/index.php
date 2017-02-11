<?php

/* @var $this yii\web\View */

$this->title = 'Email Text Cleaner';

// $this->registerJsFile('js/myjsfile.js', ['position'=>$this::POS_READY]);

?>
<div class="site-index">

    <div class="jumbotron">
        <h2>Email Text Cleaner</h2>

        <p class="lead">Welcome to my email text cleaner! <br> This utility will clean out all those pesky &quot;&gt;&quot; symbols from forwarded email text !</p>

    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-6">
              <form>
                <div class="form-group">
                  <label for="comment">Forwarded Email Text:</label>
                  <textarea data-toggle="tooltip" title="Paste your text in here" class="form-control" rows="10" id="input"></textarea>
                </div>
              </form>
            </div>
            <div class="col-lg-6">
                <form>
                  <div class="form-group">
                    <label for="comment">Cleaned Email Text:</label>
                    <textarea readonly class="form-control" data-toggle="tooltip" title="Copy cleaned text from here" rows="10" id="output"></textarea>
                  </div>
                </form>
              </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
              <div class="col-lg-3">
                <p><a class="btn btn-lg btn-success" onclick="cleanText()" data-toggle="tooltip" title="Click me to clean up text" href="#">Clean Text</a></p>
              </div>

              <div class="col-lg-3">
                <p><a class="btn btn-lg btn-danger" onclick="clearInputText()" data-toggle="tooltip" title="Click me to clear text" href="#">Clear Text</a></p>
              </div>
            </div>
        </div>
    </div>
</div>
