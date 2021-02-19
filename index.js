var cols=['#ff0000',"#cc00cc","#f4d03f","#ececec","#bcbcbc"];
var stars=520;
var txt="....该从何说起我之前就有过想认识你。但是我还是太自卑，觉得自己很丑，有时候都不敢见你，一直一直没有行动，加上你太漂亮了，很多人想追求你，至少当时我们部门的森宝就是一个。当时至少我和森宝比还真没有什么优势，他比我帅而且性格也比好我,有很一段时间我其实还是叫自己忘记你的，但是还是没有做到，现在发现其实喜欢就是喜欢。我经常在想我是不是一个外貌协会，以前我有一个比较亲近的同事，天天和他一起的时候我也经常问他：如果你不是这么漂亮的话我还会喜欢你吗？当时他的回答是：当然不会啊，你以为你有多高尚啊，都不认识还不是那个漂亮那个来。 后面我也想他说得挺对的，我还是不了解你的。只是前几天我才知道你已经离职后。我忽然心里有点失落...，有想和你说电话的冲动就写了这些。不过你既然离开了我也清楚后面就没有机会了，只是还是想说点什么吧。如果对我没意思或者已经有男朋友的话就不用回我信息了，这样的话我就有点打搅你了，最后我大概觉得也不会收到回信了吧，一会可能也不会见到面了，祝你每天都开开心心心，平安喜乐。";
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
