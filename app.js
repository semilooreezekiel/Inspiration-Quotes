//array of quotes
var quotes = ['"Life is wasted if we do not grasp the glory of the cross, cherish it for the treasure that it is, and cleave to it as the highest price of every pleasure and the deepest comfort in every pain. What was once foolishness to us—a crucified God—must become our wisdom and our power and our only boast in this world.” - John Piper',
    '"God loves each of us as if there were only one of us” - Augustine',
    '"God never said that the journey would be easy, but He did say that the arrival would be worthwhile" - Max Lucado',
    ' "God’s work done in God’s way will never lack God’s supplies." - Hudson Taylor',
    'God will meet you where you are in order to take you where He wants you to go."  - Tony Evans',
    'God will meet you where you are in order to take you where He wants you to go."  - Tony Evans',
    ' "Christ literally walked in our shoes." - Tim Keller',
    '"He is no fool who gives what he cannot keep, to gain what he cannot lose." - Jim Elliot',
    '"Remember who you are. Don’t compromise for anyone, for any reason. You are a child of the Almighty God. Live that truth." - Lysa TerkeurstThe tenth quotes',
];


//get random index number of the array and set to innerHTML
function getQuotes() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var newQuotes = document.getElementById("displayQuotes");
    newQuotes.innerText = quotes[randomNumber];
    //share to twitter 
    var quote = document.getElementById('displayQuotes').innerHTML;
    var url= "https://twitter.com/intent/tweet?text="+quote; 
    document.getElementById('tweet').setAttribute("href", url);
}

getQuotes();


    

