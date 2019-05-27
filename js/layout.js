var ENTER_KEY_CODE = 13;
var accessToken = "cfa29b9918fc447b95f31b95aa5f139c";
var baseUrl = "https://api.dialogflow.com/v1/";
var queryInput, resultDiv, accessTokenInput, queryResult;
var recognition, title, subtitle, map, list, speech, text, postback;
var x = "";
var y = "";
var z = "";
var try1, try2, try3, try4;


window.onload = init;

function init() {
    queryInput = document.getElementById("q");
    resultDiv = document.getElementById("result");
    accessTokenInput = document.getElementById("access_token");
    var setAccessTokenButton = document.getElementById("set_access_token");

    //Welcome message
    var node5 = document.createElement('div');
    node5.className = "clearfix left-align left card-panel white-text text-darken-2 hoverable";
    node5.innerHTML = "Hi, I am BigBlue. How can I help you?";
    node5.classList.add("mystyleleft");
    //responsiveVoice.speak("Welcome to Online Virginia Network.");
    var msg = new SpeechSynthesisUtterance("Hi, I am BigBlue. How can I help you?");
window.speechSynthesis.speak(msg);
    resultDiv.appendChild(node5);


    //Sample questions  
    try1 = document.createElement('div');
    try1.className = "clearfix right-align right card-panel white-text text-darken-2 hoverable";
    try1.innerHTML = "WAYS I CAN HELP";
    try1.classList.add("mystyle");
    resultDiv.appendChild(try1);


    try2 = document.createElement('div');
    try2.className = "clearfix right-align right card-panel white-text text-darken-2 hoverable";
    try2.innerHTML = "What is my today's schedule?";
    try2.classList.add("mystyleright");
    resultDiv.appendChild(try2);

    try3 = document.createElement('div');
    try3.className = "clearfix right-align right card-panel white-text text-darken-2 hoverable";
    try3.innerHTML = "Are my final grades out?";
    try3.classList.add("mystyleright");
    resultDiv.appendChild(try3);

    try4 = document.createElement('div');
    try4.className = "clearfix right-align right card-panel white-text text-darken-2 hoverable";
    try4.innerHTML = "How is the weather today?";
    try4.classList.add("mystyleright");
    resultDiv.appendChild(try4);

    queryInput.addEventListener("keypress", queryInputKeyDown);

    console.log('Finished Init');
}

focusMethod = function getFocus() {           
  document.getElementById("q").focus();
}


function scrolltobottom() {
    var objDiv = document.getElementById("result");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var element = document.getElementById("icn");
       
        //document.getElementById("btn").src="bot-voice.gif";
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function(e) {
            document.getElementById('q').value = e.results[0][0].transcript;
            setTimeout(function() {}, 500);
            recognition.stop();
            document.getElementById("q").focus();
            finishDictate();
        };
        recognition.onerror = function(e) {
            recognition.stop();
            focusMethod();
           
            
           // jQuery(".button").removeClass('active');
        }
    }
}

function send(val) {
    var text = val;
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20170712",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            Authorization: "Bearer " + accessToken
        },
        data: JSON.stringify({
            query: text,
            lang: "en",
            sessionId: "somerandomthing"
        }),
        success: function(data) {
            setResponse(JSON.stringify(data, undefined, 2));
        },
        error: function() {
            setResponse("Internal Server Error");
        }
    });
    //setResponse("Loading...");
}

function setResponse(val) {

    var res = JSON.parse(val);
    x = res.result.fulfillment.speech;

    if (x.length != 0) {
        try {
            z = res.result.fulfillment.messages[1].items[0].title;
        } catch (error) {
            console.error(error);
        }

        if (z.length != 0) {

            speech = res.result.fulfillment.speech;

            list = "";
            for (var i in res.result.fulfillment.messages[1].items) {

                list += "<b>" + res.result.fulfillment.messages[1].items[i].title + "</b>" + "<br>" + res.result.fulfillment.messages[1].items[i].description + "<br><br>";
            }

            createResponseNodeList(speech, list);
            z = "";
        } else {

            createResponseNode(x);
        }
    } else {
        try {
            title = res.result.fulfillment.messages[0].title;
            subtitle = res.result.fulfillment.messages[0].subtitle;
            map = res.result.fulfillment.messages[0].buttons[0].postback;
            //speech = res.result.fulfillment.messages[1].speech;

        } catch (error) {
            console.error(error);
        }

        if (subtitle == null) {
            postback = res.result.fulfillment.messages[0].buttons[0].postback;
            text = res.result.fulfillment.messages[1].speech;

            createResponseNodePassword(postback, text);
        } else {

            createResponseNodeCard(title, subtitle, map);
        }
    }

}



function finishDictate() {

    var value = queryInput.value;
    queryInput.value = "";

    send(value);
    createQueryNode(value);
    window.scrollTo(0, document.body.scrollHeight);
    resultDiv.removeChild(try1);
    resultDiv.removeChild(try2);
    resultDiv.removeChild(try3);
    resultDiv.removeChild(try4);
}

function queryInputKeyDown(event) {
    if (event.which !== ENTER_KEY_CODE) {
        return;
    }

    var value = queryInput.value;
    queryInput.value = "";

    send(value);
    createQueryNode(value);
    window.scrollTo(0, document.body.scrollHeight);
    resultDiv.removeChild(try1);
    resultDiv.removeChild(try2);
    resultDiv.removeChild(try3);
    resultDiv.removeChild(try4);
}

function createQueryNode(query) {
    var node = document.createElement('div');
    node.className = "clearfix right-align right card-panel white-text text-darken-2 hoverable";
    node.innerHTML = query;
    node.classList.add("mystyleright");
    resultDiv.appendChild(node);
}

function createResponseNode(val) {

    var node = document.createElement('div');
    node.className = "clearfix left-align left card-panel white-text text-darken-2 hoverable";
    node.innerHTML = val;
    node.classList.add("mystyleleft");
    //responsiveVoice.speak(val);
    var msg = new SpeechSynthesisUtterance(val);
window.speechSynthesis.speak(msg);
    resultDiv.appendChild(node);
    return node;
}

function createResponseNodeCard(t, s, m) {


    var node1 = document.createElement('div');
    node1.className = "clearfix left-align left card-panel white-text text-darken-2 hoverable";
    node1.innerHTML = sp;
    node1.classList.add("mystyleleft");
    //responsiveVoice.speak(sp);
    var msg = new SpeechSynthesisUtterance(s);
window.speechSynthesis.speak(msg);

    var node2 = document.createElement('div');
    node2.className = "clearfix left-align left card-panel white-text text-darken-2 hoverable";
    node2.innerHTML = "<a href="+m+">Get Directions</a>";
    node2.classList.add("mystyleleft");
    //responsiveVoice.speak(s);
    //var msg = new SpeechSynthesisUtterance(s);
//window.speechSynthesis.speak(msg);

   // var node3 = document.createElement('div');
   // node3.className = "clearfix left-align left card-panel white-text text-darken-2 hoverable";
   // node3.innerHTML = "<a href=" + m + ">Click here</a>";
   // node3.classList.add("mystyleleftlink");

    resultDiv.appendChild(node1);
    resultDiv.appendChild(node2);
    //resultDiv.appendChild(node3);


}

function createResponseNodeList(s,l) {
    
      
    var node1 = document.createElement('div');
    node1.className = "clearfix left-align left card-panel blue-text text-darken-2 hoverable";
    node1.innerHTML = s;
      var msg = new SpeechSynthesisUtterance(s);
window.speechSynthesis.speak(msg);
      
    var node2 = document.createElement('div');
    node2.className = "clearfix left-align left card-panel blue-text text-darken-2 hoverable";
    node2.innerHTML = l;
      
    resultDiv.appendChild(node1);
    resultDiv.appendChild(node2);
    
  }

function createResponseNodePassword(p,t) {
      
    var node1 = document.createElement('div');
    node1.className = "clearfix left-align left card-panel blue-text text-darken-2 hoverable";
    node1.innerHTML = t;
      var msg = new SpeechSynthesisUtterance(t);
window.speechSynthesis.speak(msg);
      
    var node2 = document.createElement('div');
    node2.className = "clearfix left-align left card-panel blue-text text-darken-2 hoverable";
    node2.innerHTML = "<a href="+p+">Click Here</a>";
      
    resultDiv.appendChild(node1);
    resultDiv.appendChild(node2);
    
  }
