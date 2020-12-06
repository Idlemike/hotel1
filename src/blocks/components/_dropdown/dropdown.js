modules.define("forms__input", function(provide, Forms__input) {

    provide(Forms__input.declMod({ modName: "select", modVal: "medium" }, {
        onSetMod: {
            js: {
                inited: function() {
		
		                const select = document.querySelector(".forms__input_select");
		
		                select.addEventListener("blur", () => selectEvent());
		                select.addEventListener("click", () => selectEvent());
		
		                const selectEvent = () => {
				                if (event.type === "click") {
						                if (select.classList.contains("forms__input_select_arrow-up")) {
								                select.classList.remove("forms__input_select_arrow-up");
						                } else {
								                select.classList.add("forms__input_select_arrow-up");
						                }
				                }
				                if (event.type === "blur") {
						                select.classList.remove("forms__input_select_arrow-up");
				                }
		                };
                  
                }
            }
        }
    }));

});

