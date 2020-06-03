window.onscroll = function() {
	var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;

    if(pageOffset >= 25) {
        document.getElementById('scroll-to-top').style.opacity="100%";
    } 
    else {
        document.getElementById('scroll-to-top').style.opacity="0";
    }
};
