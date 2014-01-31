$(function() {

    $().UItoTop({ easingType: 'easeOutQuart' });
    
    var perm = $('#pagepermalink').html();
    var listItems = $("ul.menu li");
    listItems.each( function (index,e) {
        var url = $("a",e).attr('href');
        if ( url == perm ) $(e).addClass('active');
    });

});