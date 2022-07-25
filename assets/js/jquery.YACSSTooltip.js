/**
* @license MIT
* Yet Another CSS Tooltip jQuery Plugin - Adds a CSS tooltip for the images in a jQuery selection set
* version @VERSION@
* by JM Alarcon (https://github.com/jmalarcon/)
*
*https://github.com/jmalarcon/jquery.YACSSTooltip
*/
(function($){
    $.fn.extend({
        addTooltip: function() {
            /*  This element will be the tooltip that is shown.
                There is only one per page.
             */
            if (window.jQuery_YACSSTooltip_TT == undefined) {
                window.jQuery_YACSSTooltip_TT =  $('<div id="' + 'CSSTooltip' + Math.floor(Math.random()*(9999-999+1)+999) + '" class="YACSSTooltip" style="display: none; position: absolute; border: 1px solid #333; background-color: #161616; border-radius: 5px; padding: 5px; color: #fff; font-size: 12px Arial;max-width:250px;line-break:auto;word-break:normal;word-break:break-word;overflow-wrap: break-word;word-spacing:0px;white-space:normal;text-align:center;overflow-wrap:normal;"></div>');
                $("body").append(window.jQuery_YACSSTooltip_TT);
            }

            var ttShown = false;
            this.hover(//On hover...
                function() {
                    //The "title" or "alt" attribute values are used for the tooltip, in that order of precedence (first "title" if available, then "alt")
                    var alt = $(this).attr('alt'),
                        title = $(this).attr('title'),
                        ttText = title || alt;
                    if (!ttText)    //If there's no text to be shown in the tooltip just don't do anything...
                        return;

                    //Remove title to prevent native tooltip to be shown, keeping old title to be restored after hiding CSTooltip
                    if(title)
                        $(this).removeAttr('title').data('title', title);
                    //Add tooltip
                    ttShown = true;
                    window.jQuery_YACSSTooltip_TT.text(ttText).show();
                },
                //On mouse exit
                function() {
                    ttShown = false;
                    window.jQuery_YACSSTooltip_TT.hide();    //Hide the tooltip
                    //Restore the title if needed
                    var title = $(this).data('title');
                    if (title)
                        $(this).attr('title', title).data('title', '');
                }).mousemove(function (e) {//On mouse move position the tooltip next to the pointer

                    if (!ttShown) return;
                    //Get X coordinates
                    var mousex = e.pageX + 20;
                    //Get Y coordinates
                    var mousey = e.pageY + 10;
                    //Check if it's inside the boundaries
                    var $tooltip = window.jQuery_YACSSTooltip_TT,
                        wW = $(window).scrollLeft() + $(window).width(),
                        wH = $(window).scrollTop() + $(window).height();
                    if(mousex + $tooltip.outerWidth() > wW)
                        mousex = wW - $tooltip.outerWidth();
                    if(mousey + $tooltip.outerHeight() > wH)
                        mousey = e.pageY - $tooltip.outerHeight() -10;
                    //Show tooltip
                    window.jQuery_YACSSTooltip_TT.css({
                        top: mousey,
                        left: mousex
                    })
                });
        return this;
        }
    });
})(jQuery);