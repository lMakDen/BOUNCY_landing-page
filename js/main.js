;(function () {
	
	// function MibileValues () {
	// 	var open = false;
	// 	this.changeValues = function (event) {
	// 		var nav__item = document.getElementsByClassName("nav__item");
	// 		if (!open) {
	// 			header__logo.style.display = "none";
	// 			nav.style.display = "block";
	// 			nav.style.float = "none";
	// 			nav.style.backgroundColor = "rgba(0,0,0,0.5)";
	// 			for (var i = 0; i < nav__item.length; i++) {
	// 				console.log(nav__item[i].style);
	// 				nav__item[i].style.display = "block";
	// 				nav__item[i].style.marginTop = "7vh";
	// 				nav__item[i].style.paddingBottom = "5vh";
	// 				nav__item[i].style.textAlign = "center";
	// 			}
	// 		}
	// 		else{
	// 			nav.style.display = "none";
	// 			header__logo.style.display = "block";
	// 		}
	// 		open = !open;
	// 	}
	// }
	// var v = new MibileValues();
	// header__btn.addEventListener("click", v.changeValues);
	





	function MibileValues () {
		var open = false;
		
		this.changeValues = function (event) {
			if (!open) {
				$("#nav").addClass("navMobile");
				$(".nav__item").each(function () {
					$(this).addClass("nav__itemMobile");	
				});
				
			}
			else{
				$("#nav").removeClass("navMobile");
				$(".nav__item").each(function () {
					$(this).removeClass("nav__itemMobile");
				});
				
			}


			open = !open;

		}
		
	}
	var v = new MibileValues();

	$('#header__btn').click(v.changeValues);

























































})()