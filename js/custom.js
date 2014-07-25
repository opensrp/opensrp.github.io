/* custom.js */
$(document).ready(function(){
	
	var _top = $(window).scrollTop();
    var _direction;
	
    $(window).scroll(function(){
        var _cur_top = $(window).scrollTop();
		
        if(_top < _cur_top){
			$('.top-panel').addClass('zoom-in'); // down-scroll
        }
        else{
			$('.top-panel').removeClass('zoom-in'); // up-scroll
        }
        _top = _cur_top;
        console.log(_direction);
    });
});