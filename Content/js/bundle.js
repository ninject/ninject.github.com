(function (a) {
    a.fn.extend({
        hoverFade: function (b) {
            b = b || 500;
            return this.each(function () {
                var d = a(this);
                d.append("<span class='hover'></span>").each(function () {
                    var e = a("> span.hover", this);
                    e.css("opacity", 0).css("background-image", a(this).css("background-image"));
                    a(this).hover(function () {
                        e.stop().fadeTo(b, 1)
                    }, function () {
                        e.stop().fadeTo(b, 0)
                    })
                });
                return this
            })
        }
    });
    a(function () {
        a("a").filter(function () {
            return this.hostname && this.hostname !== location.hostname
        }).attr("rel", "external");
        a("a[rel='external']").addClass("external").attr("target", "_blank")
    })
})(jQuery);

function initializeDefaultLayout()
{
	$("#navigation li a,.enkari a").hoverFade("fast");

	$("#cards").cycle({
		fx: "scrollHorz",
		easing: "easeInOutBack",
		prev: ".prev",
		next: ".next",
		timeout: 10000,
		pause: true
	});

	$(".arrow").hoverFade("fast");
}