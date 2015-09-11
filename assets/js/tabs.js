(function($) {
  $(document).ready(function() {

    if (app && typeof app == 'object') {
      $(app.main).on('view:load', initModalModules);
    }

    function initModalModules() 
	{  
		if ($('.fieldset input.tabfield').length)
		{
		  if ($(".fieldset").length)
		  {
			  $('.fieldset').removeClass("fieldset-fixed");
			  $(".fieldset").prepend($("<ul></ul>").addClass("tabs"));
		  }

		  else{
			$('.fieldset .input.tabfield').first().closest('.field-grid-item').prepend($("<ul></ul>").addClass("tabs"));
		  }

		  $('.fieldset label.tabfield').each(function() {
			var title = "<li class='tab' href='" + $(this).attr('name') + "'>" + $(this).closest(".field-grid-item").text().trim() + "</li>";
			$(".tabs").append(title);
		  });
		  
		  $('.fieldset label.tabfield').each(function() {
			$(this).closest(".field-grid-item").addClass("group-title");
		  });
		  
		  $('.fieldset .group-title').each(function() {
			$(this).nextUntil(".fieldset .group-title").andSelf().wrapAll('<div class="group" />');
		  });

		  $('.fieldset .group').each(function() {
			var id = $(this).find(".group-title label.tabfield").attr('name');
			$(this).attr('id', id);
		  });

		  if (!$('.fieldset .group.current').length) {
			$('.tabs li').first().addClass('current');
			var first_group = $('.group').first();
			first_group.addClass('current');
			first_group.find('input.tabfield').attr('checked', true);
		  }

		  $('.fieldset .tabs li').click(function() {
			$(this).addClass("current");
			$(this).siblings().removeClass("current");
			var tab_id = $(this).attr('href');
			$('.group').removeClass('current');
			$("#" + tab_id).addClass('current');
			$("#" + tab_id).find('input.tabfield').prop('checked', true);
			$("#" + tab_id).siblings().find('input.tabfield').prop('checked', false);
		  });
		
		}
    }


  });
}(jQuery));