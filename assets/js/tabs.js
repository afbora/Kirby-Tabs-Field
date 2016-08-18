(function($) {

/*************/
/* Constants */
/*************/
var PLACEHOLDER_SELECTOR = ".tab-placeholder"; // Selector for tab placeholder elements
var TABNAME_ATTR         = "data-tab-name";    // Data attribute that stores the tab name
var TABICON_ATTR         = "data-icon";        // Data attribute that stores the icon
var TAB_ACTIVE_CLASS     = "active";           // Class for the active tab
var TAB_NAV_CLASS        = "tab-nav";          // Class for the tab navigation element
var TAB_CONTAINER_CLASS  = "tab-container";    // Class for each tab container

/***********************/
/* Tab Field init      */
/***********************/
$.fn.tabs = function() {
   // sessionStorage key for the currently active tab
   var CURRENT_TAB_STORAGE  = "tabs" + window.location.pathname;

   /**********************************/
   /* Handle clicks on the tab links */
   /**********************************/
   var handleNavigationClick = function($tabLink, $tabContainer, tabName) {
      $tabLink.siblings().removeClass(TAB_ACTIVE_CLASS);
      $tabLink.addClass(TAB_ACTIVE_CLASS);

      $tabContainer.siblings().removeClass(TAB_ACTIVE_CLASS);
      $tabContainer.addClass(TAB_ACTIVE_CLASS);

      sessionStorage[CURRENT_TAB_STORAGE] = tabName;
   };


   return this.each(function() {
      var $placeholder  = $(this);    // The tab container placeholder
      var $tabContainer = $("<div>"); // The container for the tab content
      var $tabLink      = $("<li>");  // The tab navigation selector for this tab
      var $tabNav       = $placeholder.siblings("." + TAB_NAV_CLASS);   // The tab navigation container
      var $tabContent   = $placeholder.nextUntil(PLACEHOLDER_SELECTOR); // The elements that are part of this tab
      var tabName       = $placeholder.attr(TABNAME_ATTR);              // The name of this tab
      var icon          = $placeholder.attr(TABICON_ATTR);
      
      $tabLink.attr("data-name", tabName);
      
      // Setup the tabbing navigation if necessary
      if ($tabNav.length === 0) {
         $tabNav = $("<ul>").addClass(TAB_NAV_CLASS);
         $placeholder.parent().prepend($tabNav);

         // Since the navigation must be created, this is the first tab and should be
         // set to the active tab
         $tabLink     .addClass(TAB_ACTIVE_CLASS);
         $tabContainer.addClass(TAB_ACTIVE_CLASS);
      }

      // Setup the tab container
      $tabContainer.addClass(TAB_CONTAINER_CLASS);
      $tabContainer.attr("data-name", tabName);
      $tabContainer.append($tabContent);
      $placeholder .after($tabContainer);
      $placeholder .remove();

      // Setup the navigation link
      $tabLink.html((typeof icon !== "undefined" && icon !== null ? '<i class="fa fa-'+icon+'"></i>' : '')+tabName);
      $tabLink.on("click", handleNavigationClick.bind(null, $tabLink, $tabContainer, tabName));
      $tabNav.append($tabLink);

      // If this is the last saved tab, make it active
      if (sessionStorage[CURRENT_TAB_STORAGE] === tabName)
         $tabLink.trigger("click");
   });

};


}(jQuery));


$(document).ready(function(){
  
    $(window).load(function() {
      $("input").blur();
      $(".tab-container.active .input").first().focus();
    });
    
    $(document).on("DOMSubtreeModified", "header.topbar", function(){ 
        if ($(".message-is-alert").length && $(".field-with-error").length) {
          setTimeout(function()  {
              $(".tab-nav li").removeClass("active");
              $('.tab-nav li[data-name="' + $(".field-with-error").closest(".tab-container").data("name") + '"]').addClass("active");
              $(".tab-container").removeClass("active");
              $(".field-with-error").closest(".tab-container").addClass("active");
              $("input").blur();
              $(".tab-container.active .input").first().focus();    
              sessionStorage["tabs" + window.location.pathname] = $(".field-with-error").closest(".tab-container").data("name");
          }, 100);
        }
      
    });
    
});