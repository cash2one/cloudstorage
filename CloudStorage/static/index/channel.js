$('.channel-requirement').unbind('click').click(function(){
    $.cookie('newReq',true,{path:'/'});
    if($('#category_1').val()!=0)
        $.cookie('category_1',$('#category_1').val(),{path:'/'});
    else
        self.location='/session#/requirementPage';
    if($('#category_2').val()!=0)
        $.cookie('category_2',$('#category_2').val(),{path:'/'});
    self.location='/submit';
});