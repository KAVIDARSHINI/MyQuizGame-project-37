class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz
    push();
    textSize(20);
    textFont("Franklin Gothic Heavy");
    fill(255, 198, 0);
    text("RESULT....",350,200);
    pop();

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      var displayAnswers = 230;
      push();
      fill(235, 235, 235);
      textSize(20);
      textFont("Kristen ITC");
      text("*NOTE : Contestant who answered correct are highlighted in green Color",10,370);
      pop();
      for(var plr in allContestants){
        var correctAns = "dictionary";
        if(correctAns === allContestants[plr].answer){
            // stroke("white");
            // strokeWeight(1);
             textFont("Jokerman");
             textSize(20);
             fill("green");
        }else {
             //stroke("white");
             //strokeWeight(1);
             textFont("Jokerman");
             textSize(20);
             fill("red");
        }
        displayAnswers += 30;
        text(allContestants[plr].name+" : "+allContestants[plr].answer, 250,displayAnswers);
      }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
