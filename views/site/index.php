<?php

/* @var $this yii\web\View */

$this->title = 'Email Cleaner';

$this->registerJsFile('js/myjsfile.js', ['position'=>$this::POS_READY]);

?>
<div class="site-index">

    <div class="jumbotron">
        <h2>Email Cleaner</h2>

        <p class="lead">Welcome to my email text cleaner! <br> This utility will clean out all those pesky &quot;&gt;&quot; symbols from your email text !</p>

    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-6">
              <form>
                <div class="form-group">
                  <label for="comment">Forwarded Email Text:</label>
                  <textarea class="form-control" rows="10" id="input"></textarea>
                </div>
              </form>
            </div>
            <div class="col-lg-6">
                <form>
                  <div class="form-group">
                    <label for="comment">Cleaned Email Text:</label>
                    <textarea class="form-control js-copytextarea" rows="10" id="output"></textarea>
                  </div>
                </form>
              </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
              <div class="col-lg-3">
                <p><a class="btn btn-lg btn-success" onclick="cleanText()" href="#">Clean Text</a></p>
              </div>

              <div class="col-lg-3">
                <p><a class="btn btn-lg btn-danger" onclick="clearInputText()" href="#">Clear Text</a></p>
              </div>
            </div>

            <div class="col-lg-6">
              <p><a class="btn btn-lg btn-primary js-textareacopybtn"  onclick="copyText()" href="#">Copy Text</a></p>
            </div>
        </div>
    </div>
</div>
