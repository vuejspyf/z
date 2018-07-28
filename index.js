var cols=['#ff0000',"#cc00cc","#f4d03f","#ececec","#bcbcbc"];
var stars=520;
var txt="张国峰不清楚是不是把我吹了一遍，其实--------我很菜  2015年培训过几个月但是因为没有项目经验很多人都不要 一直没做过这个行业 也是偶然有空会写写";
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
