function Show(val) {
    var idElement = $("#show-" + val);
    var classElements = $(".accordeon__content");
    var idArray = $('.fas.fa-minus');
    var flag = $('#' + val);
    if (idElement.css('display') == 'none') {
        
		classElements.each((i, obj) => {
			obj.style.display = 'none';
		});
		idArray.each((i, obj) => {
			obj.className = 'fas fa-plus';
		});
        
        idElement.css('display','block');
        flag.attr('class', 'fas fa-minus');
    } else {
        idElement.css('display','none');
        flag.attr('class', 'fas fa-plus');
    }
}

function ShowSearch() {
    var id = $('#search__input');
    if (id.css('display') == 'none') {
        id.css('display','flex');
    } else {
        id.css('display','none');
    }
}