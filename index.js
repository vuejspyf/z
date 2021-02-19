var cols=['#ff0000',"#cc00cc","#f4d03f","#ececec","#bcbcbc"];
var stars=520;
var txt="....该从何说起我之前就有过想认识你。但是我还是太自卑而且性格缺陷太多，一直一直没有行动，加上你太漂亮了，很多人想追求你，至少当时我们部门的森宝就是一个。当时至少我和森宝比还真没有什么优势，他比我帅而且性格也比我"";
var index=0;
for(var i=0;i<=stars;i++){
var size=Math.random()*3;//生成随机数0-1
var color=cols[parseInt(Math.random()*6)];//parsein化整
var span='<span style="width:'+size+'px;height:'+size+'px;top:'+Math.random()*100+'%;left:'+Math.random()*100+'%;background:'+color+';box-shadow:0 0 '+Math.random()*10+'px'+color+';"></span>';
//console.log(span);
$("#starbox").prepend(span);
}

setTimeout(function() {
  $("#starbox span").each(function(){
      $(this).css('top',Math.random()*100+'%').css('left',Math.random()*100+'%');
  })
},1);
 typing=function(){
var love=$(".love p");
if(index<=txt.length){
    love.text(txt.slice(0,index++));
    setTimeout('typing()',300)
    console.log(index)
}

}
typing();
