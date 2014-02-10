$(function() {

    // HIGHLIGHT ACTIVE MENU LINK
    var perm = $('#pagepermalink').html();
    var listItems = $("nav ul li");
    listItems.each( function (index,e) {
        var url = $("a",e).attr('href');
        if ( url == perm ) $(e).addClass('active');
    });

});