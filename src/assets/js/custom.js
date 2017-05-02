$(document).ready(function() {
	
	$('[data-toggle="popover"]').popover({html:true});
	
	// Testimonials
	var slider = new MasterSlider();
		slider.setup('masterslider' , {
			loop:true,
			width:240,
			height:240,
			speed:20,
			//view:'flow',
			view:'fadeBasic',
			preload:0,
			space:0,
			space:45,
			wheel:false
		});
		slider.control('arrows');
		slider.control('slideinfo',{insertTo:'#testimonial-info'});
		
	

	// Arrow on Homepage Banner
   $('.btn-arrow').click(function() {
            $("#whytempal").velocity("scroll", {
                duration: 800, offset: -50
            });
        });
	

	// Date and time picker
	$('.datetimepicker').datetimepicker({
	format:'d/m/Y - H:i',
	ignoreReadonly: true
	});
	$('.readonlyjm').on('focus',function(){
		$(this).trigger('blur');
	});

	$(".cs-select").select2();
		
	$(".cs-select2").select2({
		 minimumResultsForSearch: Infinity
	});
		
    //Multiselect - Select2 plug-in
    $("#multi").val(["Jim", "Lucy"]).select2();
	
	//ios7 switch
	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
 
	elems.forEach(function(html) {
		var switchery = new Switchery(html, { size: 'small', color: '#9850bf', secondaryColor: '#e6e6e6', jackColor: '#fff' });
	});
	
	// Disabled links
	$("a.disabled").attr("disabled", "disabled").on("click", function() {
		return false; 
	});
	
	// Payment Radio Button on Booking Summary Page
	$('input[type="radio"]').click(function(){
        if($(this).attr("value")==="addpayment"){
            $(".box").not(".attached-form").hide();
            $(".attached-form").show();
        } else { $(".box").hide(); }
    });
	
	// Job title experience - create profile
	$('input[type="radio"]').click(function(){
        if($(this).attr("value")==="jobtitle"){
            $(".job-title").not(".desc").hide();
            $(".desc").show();
        } else { $(".job-title").hide(); }
    });
	
	// Initializes search overlay plugin.
        // Replace onSearchSubmit() and onKeyEnter() with 
        // your logic to perform a search and display results
        $('[data-pages="search"]').search({
            searchField: '#overlay-search',
            closeButton: '.overlay-close',
            suggestions: '#overlay-suggestions',
            brand: '.brand',
            onSearchSubmit: function(searchString) {
                console.log("Search for: " + searchString);
            },
            onKeyEnter: function(searchString) {
                console.log("Live search for: " + searchString);
                var searchField = $('#overlay-search');
                var searchResults = $('.search-results');
                clearTimeout($.data(this, 'timer'));
                searchResults.fadeOut("fast");
                var wait = setTimeout(function() {
                    searchResults.find('.result-name').each(function() {
                        if (searchField.val().length !== 0) {
                            $(this).html(searchField.val());
                            searchResults.fadeIn("fast");
                        }
                    });
                }, 500);
                $(this).data('timer', wait);
            }
        });
	
		//hourly rate range on refine page
		$("#raterange").ionRangeSlider({
			type: "double",
			min: 10,
			max: 25,
			from: 12,
			to: 15,
			prefix: "€",
			hide_min_max: true,
			hide_from_to: false,
			grid: false
		});
		$( "#raterange" ).prop( "disabled", true );
		
		//feedback range on feedback page
		$("#feedbackRange").ionRangeSlider({
			grid: false,
            from: 3,
			values: [
			"poor", "ok",
			"good", "very good",
			"excellent"
		]
        });
		$( "#feedbackRange" ).prop( "disabled", true );
		
		//distance willing to work
		$("#willingtowork").ionRangeSlider({
			min: 10,
    		max: 60,
    		from: 30,
			postfix: "km"
        });
		$( "#willingtowork" ).prop( "disabled", true );
	
	
		//star rating on refine page
		$('#example-fontawesome').barrating({
			theme: 'fontawesome-stars'
		  });
		 
		//Number of Bookings on refine page
		$('.btn-number').click(function(e){
		e.preventDefault();
		
		fieldName = $(this).attr('data-field');
		type      = $(this).attr('data-type');
		var input = $("input[name='"+fieldName+"']");
		var currentVal = parseInt(input.val());
		if (!isNaN(currentVal)) {
			if(type == 'minus') {
				
				if(currentVal > input.attr('min')) {
					input.val(currentVal - 1).change();
				} 
				if(parseInt(input.val()) === input.attr('min')) {
					$(this).attr('disabled', true);
				}
	
			} else if(type == 'plus') {
	
				if(currentVal < input.attr('max')) {
					input.val(currentVal + 1).change();
				}
				if(parseInt(input.val()) === input.attr('max')) {
					$(this).attr('disabled', true);
				}
	
			}
		} else {
			input.val(0);
		}
	});
	$('.input-number').focusin(function(){
	   $(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {
		
		minValue =  parseInt($(this).attr('min'));
		maxValue =  parseInt($(this).attr('max'));
		valueCurrent = parseInt($(this).val());
		
		name = $(this).attr('name');
		if(valueCurrent >= minValue) {
			$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled');
		} else {
			alert('Sorry, the minimum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		if(valueCurrent <= maxValue) {
			$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled');
		} else {
			alert('Sorry, the maximum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		
		
	});
	$(".input-number").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
				 // Allow: Ctrl+A
				(e.keyCode === 65 && e.ctrlKey === true) || 
				 // Allow: home, end, left, right
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 // let it happen, don't do anything
					 return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});
	
	// accordions
	function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-minus fa-plus');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

	var panelHeadClass = 'open-item',
		accordion = $('#accordion'),
		openPanel = accordion.find('.panel-collapse.collapse.in'),
		openPanelHead = openPanel.prev('.panel-heading').addClass(panelHeadClass);

	accordion.on('click', '.panel', function() {
		openPanelHead.removeClass(panelHeadClass);
	});
	
	// apply scrollbar
	$('.scrollbar-inner').scrollbar();
	
	// tooltips
	$('[data-toggle="tooltip"]').tooltip();
	
	// equal heights
	$('.eq-height').matchHeight();
	
	// Bookings Calendar
	dzscal_init("#traurora",{design_transitionDesc: 
		'tooltipDef',
	   design_transition: 'fade',
	   mode:'blogevents',
	   mode_blogevents_container:'#traurora-container'
    });
	
	// Availability
	$( ".availability-calendar td a, .btn-circle-outline" ).click(function() {
	  $( this ).toggleClass('unavailable');
	  return false;
	});
	
	// Select Sector
	$( ".select-sector a, .profile-languages span" ).click(function() {
	  $( this ).toggleClass('selected');
	  return false;
	});
	
	// File Upload
	$(".fileupload").click(function(){
		$("#upload-file").trigger('click');
	});
	
});