//変数宣言
var userName;

//アラート
userName = prompt("お名前を教えて下さい!");
document.getElementById("name").innerHTML = userName;

//乱数0~4を生成
//大吉、吉、中吉、小吉、末吉、凶、大凶
//メソッド
function touchedButton() {
    var userResult = Math.floor(Math.random() * 7);
    switch (userResult) {
        case 0: resultText = "大凶"; break;
        case 1: resultText = "凶"; break;
        case 2: resultText = "末吉"; break;
        case 3: resultText = "小吉"; break;
        case 4: resultText = "中吉"; break;
        case 5: resultText = "吉"; break;
        default: resultText = "大吉"; break;
    };

    document.getElementById("result").textContent = resultText;

}
