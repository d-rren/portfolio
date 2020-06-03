window.onscroll = function() {
	var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;

    if(pageOffset >= 25) {
        document.getElementById('scroll-to-top').style.opacity="75%";
    } 
    else {
        document.getElementById('scroll-to-top').style.opacity="0";
    }
};
