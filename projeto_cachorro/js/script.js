
var altura =400;
var largura =100;

$(Document).keydown(function(evento){

	  if(evento.which == 37) {
	     largura = largura - 30;
	     $("#cachorro").css("margin-left",largura+'px');
	  	
	  }
	  if(evento.which == 38) {
	  	altura = altura - 30;
	     $("#cachorro").css("margin-top",altura+'px');
	  }
	  if(evento.which == 39) {
	  	largura = largura + 30;
	     $("#cachorro").css("margin-left",largura+'px');
	  	
	  }
	  if(evento.which == 40) {
	  	altura = altura + 30;
	     $("#cachorro").css("margin-top",altura+'px');
	  	
	  }
});