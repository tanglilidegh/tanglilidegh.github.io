function simple_template_add(data,$template,$contaniner)
{
  var reg;
  var temp_html=$template.html();
  _.each(data, function(item){
    var temp = temp_html;
    _.each(item,function(val,key){
       reg=new RegExp("{{"+key+"}}","gi");
       temp=temp.replace(reg,val);
    });  
    $contaniner.append(temp); 
  }); 
}


function build_struct($wraper){
  var items = [];
  var folder = $wraper.attr("data-folder");
  var thumblie_rule = "?imageMogr2/thumbnail/!260x260r/gravity/Center/crop/260x260";
  for(var i = $wraper.attr("data-from"); i <= $wraper.attr("data-to"); i++){
    items[items.length] = {
      small: "http://7xnh4i.com1.z0.glb.clouddn.com/"+folder+"/"+folder+"("+i+").jpg"+thumblie_rule,
      big: "http://7xnh4i.com1.z0.glb.clouddn.com/"+folder+"/"+folder+"("+i+").jpg"
    }
  }
  simple_template_add(items,$("#item-temp"),$wraper);
}


$(function(){
  $(".imgbox-wraper").each(function(){
    build_struct($(this))
  })

  $("img.lazy").lazyload();

  $('.fancybox').fancybox();

})
