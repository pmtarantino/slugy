;(function(global, undefined) {
	"use strict";

	if (!global.jQuery) {
		return false;
	}

	var $ = global.jQuery,

		DEFAULTS = {
			on_edit: false,
			placeholder: true,
			max_chars: false,
			common_words: false
		};

	$.fn.slugy = function(options) {

		DEFAULTS.slug_id = this.attr('id')+'-slug';
		options = $.extend(true, {}, DEFAULTS, options);

		var str_to_slug = function(str){
			str = str.replace(/[^a-zA-Z0-9\s]/g,"");
			str = str.toLowerCase();
			
			var common_words = ["a", "an", "as", "at", "before", "but", "by", "for", "from",
	                  "is", "in", "into", "like", "of", "off", "on", "onto", "per",
	                  "since", "than", "the", "this", "that", "to", "up", "via",
	                  "with"];
			var r = new RegExp('\\b(' + common_words.join('|') + ')\\b', 'gi');

	        if (options.common_words){
			    str = str.replace(r, '');
			}

		    str = str.replace(/\s{2,}/g,' ')
		    str = str.replace(/\s/g,'-');

		    if(options.max_chars){
		    	str = str.substring(0,options.max_chars);
		    }

			return str;
		}
		

		var slug_element = $('#'+options.slug_id);
		if(options.placeholder){
			slug_element.attr('placeholder', str_to_slug($(this).attr('placeholder')) );
		}

		if(options.on_edit == true || slug_element.val() == ''){

			this.on('keypress change focus blur',function(){
				var str = str_to_slug( $(this).val() );
				slug_element.val(str);
			});

		}

	}

}(this));