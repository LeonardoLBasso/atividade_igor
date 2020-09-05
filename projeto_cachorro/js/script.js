var altura = 400;
var largura = 100;
var pointPlayer = 0;

const addPlayerPonts = () => {
    $("#points").text(`Pontuação:  ${++pointPlayer}`);
};

// Verificando se a div tem colisão com a outra
const hasCollision = (firstElement, secondElement) => {
    const firstElementAxisX = firstElement.offset().left;
    const firstElementAxisY = firstElement.offset().top;

    const secondElementAxisX = secondElement.offset().left;
    const secondElementAxisY = secondElement.offset().top;

    return (
        firstElementAxisX >= secondElementAxisX - 100 && 
        firstElementAxisX <= secondElementAxisX + 100
    ) && (
        firstElementAxisY >= secondElementAxisY - 100 && 
        firstElementAxisY <= secondElementAxisY + 100
    )
}

$(document).keydown(function (evento) {
    if (hasCollision($("#cachorro"), $("#casa"))) {
        addPlayerPonts();
    }
        if (evento.which == 37) {
            largura = largura - 30;
            $("#cachorro").css("margin-left", largura + "px");
        }
        if (evento.which == 38) {
            altura = altura - 30;
            $("#cachorro").css("margin-top", altura + "px");
        }
        if (evento.which == 39) {
            largura = largura + 30;
            $("#cachorro").css("margin-left", largura + "px");
        }
        if (evento.which == 40) {
            altura = altura + 30;
            $("#cachorro").css("margin-top", altura + "px");
        }
});
