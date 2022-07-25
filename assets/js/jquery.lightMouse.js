(function($){
	
	$.fn.lightMouse = function(pOptions){
		
		// valeurs par défauts
		var defaults = {
			couleur:'#fff',
			largeur:16,
			hauteur:16
		};
		var options = $.extend(defaults,pOptions);
		
		return this.each(function(){
			
			// this = that
			var that = $(this);
			
			// variables
			var posX, posY, boule, timerCreeBoule, overThis;
			
			// écoute mouvement souris
			$(this).on('mousemove',function(e){
				posX = e.pageX;
				posY = e.pageY;
			});
			
			// la boule est crée si dessus
			$(this).on('mouseover',function(){ overThis = true; });
			$(this).on('mouseout',function(){ overThis = false; });
			
			// création boule
			timerCreeBoule = setInterval(creeBoule,24);
			function creeBoule(){
				if (overThis){
					boule = $('<div></div>')
					.css({
						'position':'absolute',
						'width':options.largeur,
						'height':options.hauteur,
						'border-radius':'50%',
						'background':options.couleur,
						'box-shadow':'0 0 10px' + options.couleur +', 0 0 10px' + options.couleur + ', 0 0 10px'  + options.couleur + ', 0 0 10px'  + options.couleur,
						'top':posY + 'px',
						'left':posX + 'px'
					}).appendTo(that)
					.fadeOut('slow',function(){
						$(this).remove();
					});
				}
			}
			
		});
		
	};
	
})(jQuery);
