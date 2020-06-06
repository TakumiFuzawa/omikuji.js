//変数宣言
var userName;

var userResult;

//アラート
userName = prompt("お名前を教えて下さい!");
document.getElementById("name").innerHTML = userName;

//乱数0~4を生成
var random = Math.floor(Math.random() * 5);
if (random == 0) {
    userResult = "大吉";
}
