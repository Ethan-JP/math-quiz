var player1=localStorage.getItem("player1")
var player2=localStorage.getItem("player2")
questionturn="p1"
answerturn="p2"
document.getElementById("p1name").innerHTML=player1
document.getElementById("p2name").innerHTML=player2
var p1score=0
var p2score=0
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("qturn").innerHTML="Question turn - "+player1
document.getElementById("aturn").innerHTML="Answer turn - "+player2

function send(){
 n1=document.getElementById("n1").value;
 n2=document.getElementById("n2").value
 qword=Number(n1)+Number(n2)
    console.log(qword)

   
//creating tags to show the question

qtag=`<h4>Q. ${n1} + ${n2}</h4> <br>`
//creating tags for getting the answers

atag=`A. <input type="text" id="answerinput"> <br> <br>`
buttontag=`<button onclick="check()" class="btn btn-primary">Check</button> `
document.getElementById("output").innerHTML=qtag+atag+buttontag

document.getElementById("n1").value=" ";
document.getElementById("n2").value=" ";
}
function check() {
answer=document.getElementById("answerinput").value;
    console.log(answer)
    if (answer==qword) {
        if (answerturn=="p1") {
            p1score=p1score+1
            document.getElementById("p1score").innerHTML=p1score
        }
        else{
            p2score=p2score+1
            document.getElementById("p2score").innerHTML=p2score
        }
    }
    //code for changing the question turn
    if (questionturn=="p1") {
        questionturn="p2"
        document.getElementById("qturn").innerHTML="Question turn - "+player2
    }
    else{
        questionturn="p1"  
          questionturn="p2"
          document.getElementById("qturn").innerHTML="Question turn - "+player1
    }
    //code for changing the answer turn
    if (answerturn=="p1") {
        answerturn="p2"
        document.getElementById("aturn").innerHTML="Answer turn - "+player2
        
    }
    else{
        answerturn="p1"
        document.getElementById("aturn").innerHTML="Answer turn - "+player1
    }
    document.getElementById("output").innerHTML=" "
}