$(function() {

    var get = getQueryVariable('string');
    if ( get.length > 0 ){
        console.log(get)
        $('.search-field').val( get );
        $('.search-field').simpleJekyllSearch({ stringa: get });
    } else {
        $('.search-field').focus().simpleJekyllSearch();
    }
    
    // CHECK STRING ON PARAM
    function getQueryVariable(variable)
    {
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == variable){return pair[1];}
           }
           return(false);
    }

});