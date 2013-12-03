$(img).attr("Id",imgId);
            img.setAttribute('src',name);
            img.setAttribute('style',"width:100%;height:100%");
            $(img).click(function(){clic(imgId);});


var val_imgarea = 'aaaaaa';
var imgId="my" + val_imgarea + "img";
$i = $('<img src="" style="width:100%;height:100%" id="'+imgId+'" />');
$i.click(function(){alert(this.id);});
$(parent).append($i);