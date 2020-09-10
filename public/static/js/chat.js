//Ryota Watanabe 2020/09/08

const send = document.getElementById("send");
const message = document.getElementById("message");
const msg = document.getElementById("messages");
const chatHistory = document.getElementById("messageBody");

var str = "";

const remove_comments = document.getElementById("remove_comments");

//コメントの投稿機能
send.addEventListener("click", function() {
  var now = new Date();
  //ゼロ埋め処理
  var yyyy = now.getFullYear();
  var mm = ("0" + (now.getMonth() + 1)).slice(-2);
  var dd = ("0" + now.getDate()).slice(-2);
  var hh = ("0" + now.getHours()).slice(-2);
  var mi = ("0" + now.getMinutes()).slice(-2);
  var ss = ("0" + now.getSeconds()).slice(-2);

  DataBase.ref("chat/" + roomId).push({
    comment: message.value,
    date: yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mi + ":" + ss,
    name: userName
  });

  message.value = "";
});

//コメントの削除
// remove_comments.addEventListener('click',function(){
//     console.log("remove all comments");
//     Object.keys(chatData).forEach(function(key){
//         //console.log("chat/"+roomId+"/"+key)
//         DataBase.ref("chat/"+roomId+"/"+key).update({
//             comment:null,
//             date:null,
//             name:null
//         })
//     })
//     commentSize=0;
// })

//コメントの初期表示
var chatRef = DataBase.ref("chat/" + roomId);
chatRef.once("value", function(snapshot) {
  str = "";
  chatData = snapshot.val();

  if (chatData == undefined) return;

  Object.keys(chatData).forEach(function(key) {
    AddComment(key);
  });
});

//コメントの表示更新機能
var chatRef = DataBase.ref("chat/" + roomId);
chatRef.on("value", function(snapshot) {
  chatData = snapshot.val();

  if (chatData == undefined) return;

  var AddedKey = Object.keys(chatData).slice(-1);
  AddComment(AddedKey);
});

function AddComment(ChatKey) {
  const msg = document.getElementById("messages");
  let str1 =
    "<div class='nameMessa'>" +
    "<div style='font-size:7px;position:relative;top:18px;display:flex;font-weight:bold;'>" +
    "<div style='width:150px;word-wrap:break-word;'>" +
    chatData[ChatKey]["name"] +
    "</div>" +
    "<div align='center' style='width:200px;color:#00008a;'>" +
    chatData[ChatKey]["date"] +
    "</div>" +
    "</div>" +
    "<p style='border-radius:10px;background-color:#f5f2f0;width:200px;padding:1em;display:inline-block;vertical-align:top;'>" +
    chatData[ChatKey]["comment"] +
    "</p>" +
    "</div>";
  str += str1;
  msg.innerHTML = str;
  //console.log("str1:"+str1)
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
