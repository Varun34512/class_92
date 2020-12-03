var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);
    char1 = word.charAt(1);
    console.log("First Character" + char1);
    center_pos = Math.floor(word.length / 2);
    console.log("center position = " + center_pos);
    char2 = word.charAt(center_pos);
    console.log("Second Character " + char2);
    last_pos = word.length - 1;
    char3 = word.charAt(last_pos);
    console.log("Third Character " + char3);
    remove_char1 = word.replace(char1, "_");
    console.log(remove_char1);
    remove_char2 = remove_char1.replace(char2, "_")
    console.log(remove_char2);
    remove_char3 = remove_char2.replace(char3, "_")
    console.log(remove_char3);
    question_word = "<h4 id= 'word_display'>Q. " + remove_char3 + "</h4>";
    input_box = "<br> Answer : <input type= 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
answer_turn = "player2" ;
question_turn = "player1" ;
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase - " + answer);
    if (answer == word) {
        console.log("words matched") ;
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn = "player1") {
        question_turn = "player2";
        answer_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    } else {
        question_turn = "player1";
        answer_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
}