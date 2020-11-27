      var readlineSync = require('readline-sync');
        const chalk = require('chalk');
        score = 0;
        var userName = readlineSync.question(chalk.yellow('please! give us your name:: '));
        console.log("                  ");
        console.log(chalk.yellow('HELLO' +" "+  userName + '!\n'));
        console.log("team CRIC DIARIES welcomes you for the quiz.....\n");
        var QSTN =readlineSync.question("do you want to play a quiz based on cricket::");
        console.log("                            ")
        if(QSTN==="yes")
        {
            console.log(chalk.green("let's get started!!!\n\n"));
            console.log("---------------------------\n\n");

        //console.log("let's get started!!!\n");
        function quiz(ques,ans)
        {
        var yourans = readlineSync.question(ques);
        
          if (yourans === ans)
        {
          console.log(chalk.green("yaay!!you are correct\n"));
          score = score + 1;
          
        }
        else
        {
          console.log(chalk.green("you were wrong! hota hai yaar kabhi kabhi...\n" + "And the correct answer is:: " + chalk.blue(ans)));
          score = score - 1;
        }

        // console.log(chalk.white("***YOUR SCORE IS...***" , score));
          console.log("----------------------\n")
        };
        var q1 = 
        {
          ques : chalk.yellow("1)what does LBW stand for?\n" + chalk.white( "a)leg before wicket\nb)leg beyond wicket\nc)leg beside wicket\n"+  chalk.green("enter your answer::"))),
          ans  : "a"

        }

        var q2 =
        {
          ques :chalk.yellow( '2)who won the 2019 ODI worldcup?' + chalk.white('\na)srilanka\nb)australia\nc)india\nd)england\n'+  chalk.green("enter your answer::"))),
          ans  : 'd'
        }

        var q3 = 
        {
          ques :chalk.yellow("3)number of ODI world-cup's won by indian cricket team?" + chalk.white("\na)3\nb)2\nC)5\n"+  chalk.green("enter your answer::"))),
          
          ans  : "b"
        }

        var q4 = 
        {
          ques : chalk.yellow("4)what is the highest run chase ever in ODI\n" + chalk.white("a)456\nb)485\nc)438\nd)441\n"+  chalk.green("enter your answer::"))),
        
          ans  : "c"
        }
        var q5 = 
        {
          ques : chalk.yellow("5)The ASHES series is between the teams?\n" + chalk.white ("a)australia and england\nb)india and australia\nc)srilanka and pakistan\nd)australia and west indies\n"+  chalk.green("enter your answer::"))),
        
          ans  : "a" 
        }
        var q6 =
        {
          ques :chalk.yellow( "6)who is the captain of Indian cricket team in 2011 WorldCup\n" + chalk.white("a)sachin\nb)ganguly\nc)M.s.dhoni\nd)virat kohli\n"+  chalk.green("enter your answer::"))),
        
          ans:"c"
        }
        var q7 =
        {
          ques:chalk.yellow("7)number of over's get played by a team in an ODI match \n" + chalk.white("a)20\nb)50\nc)60\nd)100\n"+  chalk.green("enter your answer::"))),
          
          ans: "b"
        }
        var q8 =
        {
          ques : chalk.yellow("8)who is the wicket keeper for indian team in 2011 WC\n" + chalk.white("a)M.s.dhoni\nb)dravid\nc)sachin tendulkar\n" +  chalk.green("enter your answer::"))),
        
          ans : "a"
        }

        var q = [q1,q2,q3,q4,q5,q6,q7,q8];
        for (var i =0;i < q.length;i++)
        {
          var Question = q[i];
          quiz(Question.ques,Question.ans);
        }

        console.log(chalk.green("YOUR TOTAL SCORE IS::" + score));
        console.log("                 ");
        

        if (score >=5)
        {
          console.log(chalk.red("bahut acha kaam kiya tum ne..!!!!\n"))
        }
        else if(score===0)
        {
          console.log(chalk.red("GOLDEN DUCK OUT ..haha..."));

        }
        else
        {
          console.log(chalk.yellow("better luck next time !!!!!!\n"))
          console.log("-----------------------\n")

        }
        console.log("HIGH SCORERS ARE::\n\n malli       :   4\n kedhar nadh :   6\n");
  
        console.log("-----------------------\n")
        console.log(chalk.yellow("send me the screen shot of your score\n"));
        }
        else if(QSTN==="no")
        {
          console.log(chalk.green("exit karo yaar\n"));
          console.log(chalk.green("seekhne ke baad aao fir\n"));
        }
        else
        {
          console.log(chalk.green("please!enter the proper response\n"));
        }
        console.log("thanks! for playing the quiz.....\n");
        console.log(chalk.green("stay home........stay safe........."));