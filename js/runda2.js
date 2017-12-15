document.getElementById("kolo").addEventListener("click", function () {
    document.getElementById("losowanie").play();
    $.fn.animateRotate = function (angle, duration, easing, complete) {
        return this.each(function () {
            var $elem = $(this);

            $({
                deg: 0
            }).animate({
                deg: angle
            }, {
                duration: duration,
                easing: easing,
                step: function (now) {
                    $elem.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                },
                complete: complete || $.noop
            });
        });
    };
    $('#kolo').animateRotate(3000+Math.floor((Math.random() * 360) + 1), 12000);
});
