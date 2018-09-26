var cols=['#ff0000',"#cc00cc","#f4d03f","#ececec","#bcbcbc"];
var stars=520;
var txt="挺想做程序员的但是如果真的差距太大 或者太难请不要犹豫 可以拒绝我就我说一声就可以了，期待你的回复";
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
