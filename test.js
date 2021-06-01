jQuery(function($))


//$('#test1').css("background-color", "red");

//var newVar = $('#test1').text();
//console.log(newVar);



//Utiliser la méthode windows.getSelection().
//Faire sur un événement montextarea.onSelect()

$("#btnBold").on("click", function getSelectionText(){
    var bolding = "";
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control"){
        text = document.selection.createRange().text;
    }
//alert(text);

bolding = text.bold();
console.log(bolding);
$('#id_textarea').html(bolding);


$("textarea")
  .change(function() {
    var str = "";
    $("select option:selected").each(function() {
      str += $( this ).tehtmlxt() + " ";
    });
    $("#id_textarea").html(str);
  })
});



//var valeur = jQuery(#text).val(); //La variable valeur reçoit le contenu de la textarea.

//bouton.addEventListenner('click', function(){
