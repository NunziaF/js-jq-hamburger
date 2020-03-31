// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

$('.header-right').click(
  function(){
    $('.hamburger-menu').show();
  }
);

$('.hamburger-menu').click(
  function(){
    $('.hamburger-menu').hide();
  }
);
