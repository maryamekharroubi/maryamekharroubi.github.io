// NAVBAR 
let lastScrolltop=0;
navbar= document.getElementById('navbar');

window.addEventListener('scroll',function(){
    const scrolltop=window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if(scrolltop>lastScrolltop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrolltop=scrolltop;
});

//COMPTEUR LIVE
let compteur = 0;

$(window).scroll((function)() {
    const top = $('.counter').offset().top -
    window.innerHeight;

if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(fonction() {
        let $this = $(this),
        countTo = $this.attr('data-count');
        $({
            countNum:$this.text()
        }).animate ({
            countNum: countTo
        },
        {
            duration: 10000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete:function() {
                $this.text(this.countNum);
            }
        });
    });
        compteur = 1;
}
});
