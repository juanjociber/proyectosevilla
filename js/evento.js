/**EVENTO ELEMENTO CARD */
var card = document.getElementsByClassName('card');
for(var i = 0 ; i < card.length ; i++){
    card[i].onmouseover=function(){
        $(this).children('div').children('p').css('color','var(--blanco)');
    }
    card[i].onmouseout=function(){
        $(this).children('div').children('p').css('color','var(--amarillo)');
        
    }
}
/**EVENTO REDES */
var redes = document.getElementsByClassName('social');
for(var i = 0 ; i < redes.length ; i++ ){
    redes[i].onmouseover=function(){
        $(this).css('transform','scale(1.15)');
    }
    redes[i].onmouseout=function(){
        $(this).css('transform','scale(1)');
    }
}
$('.header').click(function(){
    $('main').children('aside').css('display','block');
    $('main').children('aside').children('h2').css('display','none');
})
$('.header').dblclick(function(){
    $('main').children('aside').css('display','none');
})