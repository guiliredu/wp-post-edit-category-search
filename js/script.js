jQuery(document).ready(function(){
	adminSearch.init();
});

var adminSearch = {
	init: function(){
		var itens = [];
		jQuery("#categorychecklist li").each(function(){
			var index = itens.length;
			jQuery(this).addClass('category-search-item-'+index).addClass('category-search-item');
			itens.push({index:index, text:jQuery(this).children('.selectit').text().trim()})
		});

		var input_search = '<input type="text" name="category-search" placeholder="Pesquisar categoria" style="width:100%;margin-top:5px;">';
		jQuery('#category-all').prepend(input_search);

		jQuery('body').on('keyup', 'input[name="category-search"]', function(e){
			e.preventDefault();
			
			var value = jQuery(this).val();

			if(value.length > 3){
				jQuery('.category-search-item').hide();
				for(var i = 0; i < itens.length; i++){
					if(itens[i].text.toUpperCase().match(value.toUpperCase())){
						jQuery('.category-search-item-'+itens[i].index).show();
						jQuery('.category-search-item-'+itens[i].index).parents('li').show();
					}
				}
			}else{
				jQuery('.category-search-item').show();
			}

		});
	}
};