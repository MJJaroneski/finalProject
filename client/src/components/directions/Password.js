 // time things//
 var startDate = new Date (1605862800);
 //Print results
 console.log(startDate.toTimeString());

 var endDate = new Date (1582099200);
 //print results
 console.log(endDate.toTimeString());

var currentDate = Math.floor(Date.now()/1000);
console.log(currentDate);

function passWord() {
    console.warn('Console that shit 💩')

    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
        while (testV < 3) {
            if (!pass1)
                window.history.go(-1);
            if (pass1.toLowerCase() === "letmein" && startDate <= currentDate){
                alert('You Got it Right!');
                console.log("you're golden");
                window.open("../html/hiddenpage.html");
                console.log("you're golden");
                break;
            }if(currentDate <= endDate){
                alert('You Got it Right!');
                console.log("you're golden");
                window.open("../html/hiddenpage.html");
                console.log("you're golden");
                break;
            }else if(startDate >= currentDate){
                alert("you're too early");
                break;
            } else if(endDate <= currentDate){
                alert("you're too late");
                break;
            }
        testV +=1;
          pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
            };
        if (pass1.toLowerCase()!=="password" & testV ===3){
        window.history.go(-1);
        return " ";
        };
    }

    export default passWord;