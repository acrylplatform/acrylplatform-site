(function($) {
	"use strict"; // Start of use strict
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	jQuery(function() {
			var a=jQuery;
			a.cookiesDirective( {
					explicitConsent: !1, position: "bottom", duration: 9999, limit: 0, message: a("input[name=cookieData]").attr("data-cookie-text"), fontFamily: "Arial", fontColor: "#424a4d", fontSize: "13px", backgroundColor: "#eaeff1", backgroundOpacity: "80"
				}
			);
			a(".cookieText").find("a").css( {
					color: "#424a4d", "text-decoration": "underline"
				}
			);
			a("input[name=cookieData]").remove()
		}

	);
	function gaSendEvent(status, email) {
		ga('send', {
			hitType: 'event',
			eventCategory: 'User',
			eventAction: 'subscription',
			eventLabel: status
		});
		if (email !==""){
			ga('set', 'userId', email);
		}
	}
	function infoalert() {
		alert("Запуск сайта будет произведен в ближайшее время");
	}
	var encoded = "&bull;&nbsp;";
	var bull = $("<div/>").html(encoded).text();
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					});
				}
			}
		});

	$(document).ready(function() {
		//Create phone mask
		if($('input[type=tel]').length > 0){
			$('input[type=tel]').inputmask('+7 (999) 999-99-99');
			$("input[type=tel]").inputmask({ "clearIncomplete": true });
		}
		//Collect email
		$("#emailSubmit").click(function(){
            if (validateEmail($( "#userEmail" ).val()) === true && $('#emailCh1').is(":checked") === true && $('#emailCh2').is(":checked") === true) {
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdkE4gpCo5AN0aNXdSD_pifgFuy-Jot9g1-hv8fCsLJ4pRcFw/formResponse",
                    type: 'post',
                    data: {
                        "entry.785390124": $( "#userEmail" ).val()
                    },
                    crossDomain: true,
                    dataType: "jsonp"
                });
                try {
					gaSendEvent('Email Subscription', $( "#userEmail" ).val());
                    FS.setUserVars({
                        "displayName" : $( "#userEmail" ).val(),
                        "email" : $( "#userEmail" ).val()
                    });
                } catch (e) {}
                alert("Спасибо за подписку на новости: " + $( "#userEmail" ).val().toString() + "!");
                $( "#userEmail" ).val("");
            } else {
                var infoText = "";
                if (validateEmail($( "#userEmail" ).val()) === false){
                    infoText += bull + "Email указан не верно\n";
                }
                if ($('#emailCh1').is(":checked") === false){
                    infoText += bull + "Вы не согласились получать маркетинговую информацию\n";
                }
                if ($('#emailCh2').is(":checked") === false){
                    infoText += bull + "Вы не согласились с Политикой конфиденциальности\n";
                }
                alert(infoText);
            }
		});
		$("#maining").click(function() {
            window.open("https://acrylminer.com/", '_blank');
            try {
                gaSendEvent('GoTo', 'Miner site');
            } catch (e) {}
            return false;
		});
		$("#onlineclient").click(function() {
            window.open("https://client.acrylplatform.com/", '_blank');
            try {
                gaSendEvent('GoTo', 'Acryl client');
            } catch (e) {}
            return false;
		});

        $("#explorer").click(function() {
            window.open("https://explorer.acrylplatform.com/", '_blank');
            try {
                gaSendEvent('GoTo', 'Acryl explorer');
            } catch (e) {}
            return false;
        });

		$("#downloads").click(function() {
			infoalert()
		});
		$("#downloadclient").click(function() {
            window.open("https://client.acrylplatform.com/", '_blank');
            try {
                gaSendEvent('Download', 'Acryl client');
            } catch (e) {}
            return false;
		});
		$("#onlineclient2").click(function() {
            window.open("https://client.acrylplatform.com/", '_blank');
            try {
                gaSendEvent('Download', 'Acryl client');
            } catch (e) {}
            return false;
		});
		$("#aboutacrylnode").click(function() {
            window.open("https://acrylminer.com/", '_blank');
            try {
                gaSendEvent('GoTo', 'Miner site');
            } catch (e) {}
            return false;
		});
		$("#telegram").click(function() {
			window.open('https://t.me/Acrylplatform','_blank')
		});
		$("#facebok").click(function() {
			window.open('https://www.facebook.com/acrylplatformofficial','_blank')
		});
		$("#twitter").click(function() {
			window.open('https://twitter.com/acrylplatform','_blank')
		});
		$("#youtube").click(function() {
			window.open('https://www.youtube.com/channel/UCk5D9wlKQbD1sRkPXAxVIlQ','_blank')
		});
		$("#github").click(function() {
			window.open('https://github.com/acrylplatform','_blank')
		});
		$("#weisswaters").click(function() {
			infoalert()
		});
		$("#confidentiality").click(function() {
			infoalert()
		});
		$("#Politic").click(function() {
			infoalert()
		});
	});

})(jQuery); // End of use strict











