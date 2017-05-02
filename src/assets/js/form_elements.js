/* ============================================================
 * Form Elements
 * This file applies various jQuery plugins to form elements
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    var getBaseURL = function() {
        var url = document.URL;
        return url.substr(0, url.lastIndexOf('/'));
    }

    $(document).ready(function() {
		
        //Typehead Sample Code

        // Basic Sample using Bloodhound
        // constructs the suggestion engine

        var countries = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          prefetch: 'http://revox.io/json/countries-list.json'
        });

          var bestPictures = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: 'http://revox.io/json/drop-countries.json',
            remote: {
              url: 'http://revox.io/json/drop-countries.json',
              wildcard: '%QUERY'
            }
          });
        // passing in `null` for the `options` arguments will result in the default
        // options being used
        $('.sample-typehead').typeahead(null, {
          name: 'countries',
          source: countries
        });

        //Custom Template
        $('#custom-templates .typeahead').typeahead(null, {
              name: 'best-pictures',
              display: 'value',
              source: bestPictures,
              templates: {
                empty: [
                  '<div class="empty-message">',
                    'unable to find any Best Picture winners that match the current query',
                  '</div>'
                ].join('\n'),
                suggestion: Handlebars.compile('<div>{{value}}– {{year}}</div>')
              }
        });

        // disabling dates
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        //Input mask - Input helper
        $(function($) {
            $("#date").mask("99/99/9999");
            $("#phone").mask("(999) 999-9999");
            $("#tin").mask("99-9999999");
            $("#ssn").mask("999-99-9999");
        });
        //Autonumeric plug-in - automatic addition of dollar signs,etc controlled by tag attributes
        $('.autonumeric').autoNumeric('init');

        //Drag n Drop up-loader
        $("div#myId").dropzone({
            url: "/file/post"
        });
        //Single instance of tag inputs - can be initiated with simply using data-role="tagsinput" attribute in any input field
        $('.custom-tag-input').tagsinput({
        });
		
    });

})(window.jQuery);