(function($) {

  var Tab = function(element) {

    var self = this;

    // basic elements and stuff
    this.tab = $(element);

    // init
    this.init = function () {

		if ($('.fieldset input.tabfield').length)
		{
		  if ($(".fieldset").length)
		  {
			$('.fieldset').first().removeClass("fieldset-fixed");
			$(".fieldset").first().prepend($("<ul></ul>").addClass("tabs"));
		  }

		  else{
			$('.fieldset .input.tabfield').first().closest('.field-grid-item').prepend($("<ul></ul>").addClass("tabs"));
		  }

		  $('.fieldset label.tabfield').each(function() {
		  	var name = $(this).children()[0].name;
		  	$('[name="'+name+'"]').each(function(i,v) {
		  		if(i!==0) {
		  			$(this).remove();
		  		}
		  	});
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

    };

    // start the plugin
    return this.init();

  };

  // jquery helper for the tab plugin
  $.fn.tabfield = function() {

    return this.each(function(i,v) {
      if($(this).data('tabfield')) {
        return $(this).data('tabfield');
      } else {
        var tab = new Tab(this);
        $(this).data('tabfield', tab);
        return tab;
      }

    });

  };

})(jQuery);
