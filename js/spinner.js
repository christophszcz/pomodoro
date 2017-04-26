/* Copyright 2017 The jQuery Foundation. jQuery License */
$(function() {
  var spinner = $( "#spinner" ).spinner();

  $( "#disable" ).on( "click", function() {
    if ( spinner.spinner( "option", "disabled" ) ) {
      spinner.spinner( "enable" );
    } else {
      spinner.spinner( "disable" );
    }
  });
  $( "#destroy" ).on( "click", function() {
    if ( spinner.spinner( "instance" ) ) {
      spinner.spinner( "destroy" );
    } else {
      spinner.spinner();
    }
  });
  $( "#getvalue" ).on( "click", function() {
    alert( spinner.spinner( "value" ) );
  });
  $( "#setvalue" ).on( "click", function() {
    spinner.spinner( "value", 5 );
  });

  $( "button" ).button();
});
