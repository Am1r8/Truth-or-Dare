const ran_spl = null
var truth_list = ["If you could be invisible, what is the first thing you would do?", "What is a secret you kept from your parents?", "What is the most embarrassing music you listen to?", "What is one thing you wish you could change about yourself?","Who is your secret crush?","Who is the last person you creeped on social media?","When was the last time you wet the bed?","If a genie granted you three wishes, what would you ask for?","What is your biggest regret?","Where is the weirdest place you've ever gone to the bathroom?","What is the most food you've ever eaten in a single sitting?","Which player would survive a zombie apocalypse and which would be the first to go?","Reveal all the details of your first kiss.","What excuse have you used before to get out plans with a friend?","What's the longest you've ever slept?","Read the last thing you sent your best friend or significant other out loud.","What's your biggest pet peeve?","When was the last time you lied?","What five things would you bring to a desert island?","What's the most embarrassing thing you ever did on a date?","What is the craziest pickup line you've ever used?","What animal do you think you most look like?","How many selfies do you take a day?","What is one thing you would stand in line for an hour for?","When was the last time you cried?","What's the longest time you've ever gone without showering?","What was your favorite childhood show?","If you could be a fictional character for a day, who would you choose?","What's your biggest fear?"]
var dare_list = ["Let another person post a status on your behalf.","Hand over your phone to another player who can send a single text saying anything they want to anyone they want.","Let the other players go through your phone for one minute.","Eat a bite of a banana peel.","Do an impression of another player until someone can figure out who it is.","Act like a chicken until your next turn.","Talk in a British accent until your next turn.","Call a friend, pretend it's their birthday, and sing them Happy Birthday to You.","Name a famous person that looks like each player in the room.","Show us your best dance moves.","Eat a packet of hot sauce straight.","Let another person draw a tattoo on your back with a permanent marker.","Put on a blindfold and touch the other players' faces until you can figure out who's who.","Serenade the person to your right for a full minute.","Let the other players redo your hairstyle.","Gulp down a raw egg.","Dump out your purse, backpack, or pockets and do a show and tell of what's inside.","Let the player to your right redo your makeup.","Let the player to your right redo your makeup.","Do a prank call on one of your family members.","Let someone give you a wedgie.","Bark like a dog.","Draw your favorite movie and have the other person guess it","Repeat everything the person to your right says until your next turn.","Play air guitar for one minute.","Empty a glass of cold water onto your head outside.","Lay on the floor and act like a sizzling piece of bacon.","Eat a teaspoon of mustard."]
var spl = null



function random_item(items) {  
    return items[Math.floor(Math.random()*items.length)];
}

function splitnames() {
    var input = document.getElementById("player-names").value;
    var name = document.getElementById("player-names");
    var game_tit = document.getElementById("game-tittle");
    var subm = document.getElementById("submit-ls");
    document.getElementById("truthdare").style.display = "block";
    var str = input;
    spl = str.split(",");
    if (name.style.display === "none") {
        name.style.display = "block";
      } else {
        name.style.display = "none";
      }
    if (game_tit.style.display === "none") {
        game_tit.style.display = "block";
    } else {
        game_tit.style.display = "none";
    }
    if (subm.style.display === "none") {
        subm.style.display = "block";
    } else {
        subm.style.display = "none";
    }
    
    var ask = random_item(spl)
    var answer = random_item(spl)
    if(ask == answer){
        answer = random_item(spl)
        if(ask == answer){
            answer = random_item(spl)
            if(ask == answer){
                answer = random_item(spl)
            }
        }
    }
    document.getElementById('players').innerHTML = ask + " ask Truth or Dare from " + answer;
}


function truth(){
    var text = document.getElementById("players");
    var truth = document.getElementById("truth");
    var dare = document.getElementById("dare");
    var change = document.getElementById("changepla");
    document.getElementById("truthls").style.display = "block";
    if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    if (truth.style.display === "none") {
        truth.style.display = "block";
    } else {
        truth.style.display = "none";
    }
    if (dare.style.display === "none") {
        dare.style.display = "block";
    } else {
        dare.style.display = "none";
    }
    if (change.style.display === "none") {
        change.style.display = "block";
    } else {
        change.style.display = "none";
    }
    var question = random_item(truth_list);
    document.getElementById('questiontruth').innerHTML = question;
}

function dare(){
    var text = document.getElementById("players");
    var truth = document.getElementById("truth");
    var dare = document.getElementById("dare");
    var change = document.getElementById("changepla");
    document.getElementById("darels").style.display = "block";
    if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    if (truth.style.display === "none") {
        truth.style.display = "block";
    } else {
        truth.style.display = "none";
    }
    if (dare.style.display === "none") {
        dare.style.display = "block";
    } else {
        dare.style.display = "none";
    }
    if (change.style.display === "none") {
        change.style.display = "block";
    } else {
        change.style.display = "none";
    }
    var question = random_item(dare_list);
    document.getElementById('questiondare').innerHTML = question;


}
function chqued(){
    var question = random_item(dare_list);
    document.getElementById('questiondare').innerHTML = question;
}
function chquet(){
    var question = random_item(truth_list);
    document.getElementById('questiontruth').innerHTML = question;
}

function cheplayer(){
    var ask = random_item(spl)
    var answer = random_item(spl)
    if(ask == answer){
        answer = random_item(spl)
        if(ask == answer){
            answer = random_item(spl)
            if(ask == answer){
                answer = random_item(spl)
            }
        }
    }
    document.getElementById('players').innerHTML = ask + " ask Truth or Dare from " + answer;
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}