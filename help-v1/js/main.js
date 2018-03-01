/* ======================================================================
On load, snap Android's viewport to 640 depending on device orientation (Portrait=320, Landscape=480; zoom: .5, zoom: .75 */
(function(){
	if(/Android/.test(navigator.userAgent)) {
		var metas = document.getElementsByTagName('meta'), view, i=0, l=metas.length;
		for(;i<l;i++) {
			if(metas[i].name == 'viewport') {
				view = metas[i];
				break;
			}
		}
		adjustment = (screen.width/640/window.devicePixelRatio).toFixed(2) + ';';
		view.content += ' initial-scale=' + (/90/.test(window.orientation) ? adjustment : '.5;');
		view.content += ' maximum-scale=' + adjustment;
		view.content += ' minimum-scale=' + '.5;';
		//alert(screen.height);
		/*alert(screen.width);
		alert(window.devicePixelRatio);
		alert(adjustment);*/
	}
})();

$(document).ready(function(){
	/* ======================================================================
	Scroll past the URL/toolbar: */
	addEventListener("load", function()
    {
		setTimeout(updateLayout, 0);
    }, false);
 	
 	addEventListener("orientationchange", function()
 	{
		setTimeout(updateLayout, 0);
 	}, false);
 
 	// Window.orientation will be multiples of 90, this ensures that we scroll past the toolbar onload and when the screen is flipped
    var currentOrient = 10;
	
    function updateLayout()
    {
        if (window.orientation != currentOrient)
        {
            currentOrient = window.orientation;
            setTimeout(function()
            {
            	/*if ($('#wrapper').height() > screen.height && !(/Android/.test(navigator.userAgent)))*/
            	if ($('#wrapper').height() > screen.height)
	                window.scrollTo(0, 1);
            }, 50);
        }
    }
    setInterval(updateLayout, 50);
    /*
    /Scroll past the URL/toolbar */

})