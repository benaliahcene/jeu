

   $("#form").on("submit",function(event){
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "game.php",
        data : $(event.target).serialize()
      })
    }) 
function s(){
  var selectElmt = document.getElementById("nv");
  var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
  var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
  console.log(selectElmt   +"    "+ valeurselectionnee  +"    "+textselectionne);
      if (valeurselectionnee=='nv1') {
      let cardArray = [ 
        { name: "fries", img: "img/001.jpg", }, 
        { name: "fries", img: "img/001.jpg", },
        { name: "pizza", img: "img/002.jpg", },
        { name: "pizza", img: "img/002.jpg", }, 
        { name: "milkshake", img: "img/003.jpg", },
        { name: "milkshake", img: "img/003.jpg", }, 
        { name: "ice-cream", img:"img/004.jpg", },
        { name: "ice-cream", img: "img/004.jpg", },
        
        ]; 
        console.log("test");
        //define variables and get DOM element
        
        let grid = document.querySelector(".grid");
        let audio = document.querySelector("audio")
        let source = document.querySelector("#source")
        let scoreBoard = document.querySelector(".scoreBoard"); 
        let popup = document.querySelector(".popup"); 
        let playAgain = document.querySelector(".playAgain"); 
        let clickBoard = document.querySelector(".clickBoard"); 
        let imgs; 
        let cardsId = []; 
        let cardsSelected = []; 
        let cardsWon = 0; 
        let clicks = 0;
        console.log("test");

        document.addEventListener("DOMContentLoaded", function () {
        //define functions 
       
        createBoard(grid, cardArray); 
        arrangeCard();
        playAgain.addEventListener("click", replay); 
       

        //add a click functions for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
        });
        console.log("test");

        //createBoard function
        console.log("test");

        function createBoard(grid, array) { 
        popup.style.display = "none"; 
        array.forEach((arr, index) => { 
        let img = document.createElement("img"); 
        img.setAttribute("src", "hidden.png");
        img.setAttribute("data-id", index); 
        grid.appendChild(img); 
        })
        }
        console.log("test");

        // arrangeCard function
        
        function arrangeCard() { 
        cardArray.sort(() => 0.5 - Math.random())
        }
        console.log("test");

        // flip Card function
        
        function flipCard() { 
        let selected = this.dataset.id;
          let clicked =cardArray[selected].name
        cardsSelected.push(clicked); 
          
           source.src=`${clicked}.mp3`
          audio.load()
          audio.play()
        
          
          
        cardsId.push(selected); 
        this.classList.add("flip"); 
        this.setAttribute("src", cardArray[selected].img); 
        if (cardsId.length === 2) { 
        setTimeout(checkForMatch, 500);
        } 
        }
        console.log("test");

        // checkForMatch function
        
        function checkForMatch() { 
        let imgs = document.querySelectorAll("img"); 
        let firstCard = cardsId[0];
        let secondCard = cardsId[1];
        if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
        
         // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
          //this below is used if you want to add sounds, you can comment it out if you dont want it
         
        cardsWon += 1; 
        scoreBoard.innerHTML = cardsWon; 
        setTimeout(checkWon,500) 
        } else { 
        imgs[firstCard].setAttribute("src", "hidden.png");
        imgs[secondCard].setAttribute("src", "hidden.png"); 
          source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
          audio.load()
          audio.play()
          imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
        } 
        cardsSelected = []; 
        cardsId = []; 
        clicks += 1; 
        clickBoard.innerHTML = clicks; 
        }
        console.log("test");

        function checkWon() {
        if (cardsWon == cardArray.length / 2) {
        alert("You won") 
        console.log(clicks);
        var t="MMe/mr vous avez terminé la partie avec "+clicks +" essai";
        var elem = document.getElementById('page_jeux');
        elem.parentNode.removeChild(elem);
        console.log(t);
        document.getElementById("resultat").innerHTML=t;
        
        setTimeout(()=> popup.style.display = "flex" ,300); 
        }
        }
        // The replay function
        console.log("test");

        function replay() { 
        arrangeCard(); 
        grid.innerHTML = "";
        createBoard(grid, cardArray);
        cardsWon = 0;
        clicks = 0; 
        clickBoard.innerHTML = 0; 
        scoreBoard.innerHTML = 0; 
        popup.style.display = "none"; 
        }        console.log("test");
        return false;
    }
     if(valeurselectionnee=='nv2'){
      let cardArray = [ 
        { name: "fries", img: "img/001.jpg", }, 
        { name: "fries", img: "img/001.jpg", },
        { name: "pizza", img: "img/002.jpg", },
        { name: "pizza", img: "img/002.jpg", }, 
        { name: "milkshake", img: "img/003.jpg", },
        { name: "milkshake", img: "img/003.jpg", }, 
        { name: "ice-cream", img:"img/004.jpg", },
        { name: "ice-cream", img: "img/004.jpg", },
        { name: "hotdog", img:"img/005.jpg", },
        { name: "hotdog", img:"img/005.jpg", },
        { name: "cheeseburger", img: "img/006.jpg", },
        { name: "cheeseburger", img:"img/006.jpg", }, 
       
        ]; 
        
        //define variables and get DOM element
        
        let grid = document.querySelector(".grid");
        let audio = document.querySelector("audio")
        let source = document.querySelector("#source")
        let scoreBoard = document.querySelector(".scoreBoard"); 
        let popup = document.querySelector(".popup"); 
        let playAgain = document.querySelector(".playAgain"); 
        let clickBoard = document.querySelector(".clickBoard"); 
        let imgs; 
        let cardsId = []; 
        let cardsSelected = []; 
        let cardsWon = 0; 
        let clicks = 0;
        document.addEventListener("DOMContentLoaded", function () {
        //define functions 
        
        createBoard(grid, cardArray); 
        arrangeCard();
        playAgain.addEventListener("click", replay); 
        
        //add a click functions for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
        });
        //createBoard function
        
        function createBoard(grid, array) { 
        popup.style.display = "none"; 
        array.forEach((arr, index) => { 
        let img = document.createElement("img"); 
        img.setAttribute("src", "hidden.png");
        img.setAttribute("data-id", index); 
        grid.appendChild(img); 
        })
        }
        
        // arrangeCard function
        
        function arrangeCard() { 
        cardArray.sort(() => 0.5 - Math.random())
        }
        
        // flip Card function
        
        function flipCard() { 
        let selected = this.dataset.id;
          let clicked =cardArray[selected].name
        cardsSelected.push(clicked); 
          
           source.src=`${clicked}.mp3`
          audio.load()
          audio.play()
        
          
          
        cardsId.push(selected); 
        this.classList.add("flip"); 
        this.setAttribute("src", cardArray[selected].img); 
        if (cardsId.length === 2) { 
        setTimeout(checkForMatch, 500);
        } 
        }
        // checkForMatch function
        
        function checkForMatch() { 
        let imgs = document.querySelectorAll("img"); 
        let firstCard = cardsId[0];
        let secondCard = cardsId[1];
        if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
        
         // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
          //this below is used if you want to add sounds, you can comment it out if you dont want it
         
        cardsWon += 1; 
        scoreBoard.innerHTML = cardsWon; 
        setTimeout(checkWon,500) 
        } else { 
        imgs[firstCard].setAttribute("src", "hidden.png");
        imgs[secondCard].setAttribute("src", "hidden.png"); 
          source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
          audio.load()
          audio.play()
          imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
        } 
        cardsSelected = []; 
        cardsId = []; 
        clicks += 1; 
        clickBoard.innerHTML = clicks; 
        }
        
        function checkWon() {
        if (cardsWon == cardArray.length / 2) {
        alert("You won") 
        console.log(clicks);
        var t="MMe/mr vous avez terminé la partie avec "+clicks +" essai";
        var elem = document.getElementById('page_jeux');
        elem.parentNode.removeChild(elem);
        console.log(t);
        document.getElementById("resultat").innerHTML=t;
        
        setTimeout(()=> popup.style.display = "flex" ,300); 
        }
        }
        // The replay function
        
        function replay() { 
        arrangeCard(); 
        grid.innerHTML = "";
        createBoard(grid, cardArray);
        cardsWon = 0;
        clicks = 0; 
        clickBoard.innerHTML = 0; 
        scoreBoard.innerHTML = 0; 
        popup.style.display = "none"; 
        } return false;
    } 
    if(valeurselectionnee=='nv3') {
      let cardArray = [ 
        { name: "fries", img: "img/001.jpg", }, 
        { name: "fries", img: "img/001.jpg", },
        { name: "pizza", img: "img/002.jpg", },
        { name: "pizza", img: "img/002.jpg", }, 
        { name: "milkshake", img: "img/003.jpg", },
        { name: "milkshake", img: "img/003.jpg", }, 
        { name: "ice-cream", img:"img/004.jpg", },
        { name: "ice-cream", img: "img/004.jpg", },
        { name: "hotdog", img:"img/005.jpg", },
        { name: "hotdog", img:"img/005.jpg", },
        { name: "cheeseburger", img: "img/006.jpg", },
        { name: "cheeseburger", img:"img/006.jpg", }, 
        { name: "cheeseburger", img: "img/007.jpg", },
        { name: "cheeseburger", img:"img/007.jpg", }, 
        { name: "cheeseburger", img: "img/008.jpg", },
        { name: "cheeseburger", img:"img/008.jpg", },
        ]; 
        
        //define variables and get DOM element
        
        let grid = document.querySelector(".grid");
        let audio = document.querySelector("audio")
        let source = document.querySelector("#source")
        let scoreBoard = document.querySelector(".scoreBoard"); 
        let popup = document.querySelector(".popup"); 
        let playAgain = document.querySelector(".playAgain"); 
        let clickBoard = document.querySelector(".clickBoard"); 
        let imgs; 
        let cardsId = []; 
        let cardsSelected = []; 
        let cardsWon = 0; 
        let clicks = 0;
        document.addEventListener("DOMContentLoaded", function () {
        //define functions 
        
        createBoard(grid, cardArray); 
        arrangeCard();
        playAgain.addEventListener("click", replay); 
        
        //add a click functions for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
        });
        //createBoard function
        
        function createBoard(grid, array) { 
        popup.style.display = "none"; 
        array.forEach((arr, index) => { 
        let img = document.createElement("img"); 
        img.setAttribute("src", "hidden.png");
        img.setAttribute("data-id", index); 
        grid.appendChild(img); 
        })
        }
        
        // arrangeCard function
        
        function arrangeCard() { 
        cardArray.sort(() => 0.5 - Math.random())
        }
        
        // flip Card function
        
        function flipCard() { 
        let selected = this.dataset.id;
          let clicked =cardArray[selected].name
        cardsSelected.push(clicked); 
          
           source.src=`${clicked}.mp3`
          audio.load()
          audio.play()
        
          
          
        cardsId.push(selected); 
        this.classList.add("flip"); 
        this.setAttribute("src", cardArray[selected].img); 
        if (cardsId.length === 2) { 
        setTimeout(checkForMatch, 500);
        } 
        }
        // checkForMatch function
        
        function checkForMatch() { 
        let imgs = document.querySelectorAll("img"); 
        let firstCard = cardsId[0];
        let secondCard = cardsId[1];
        if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
        
         // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
          //this below is used if you want to add sounds, you can comment it out if you dont want it
         
        cardsWon += 1; 
        scoreBoard.innerHTML = cardsWon; 
        setTimeout(checkWon,500) 
        } else { 
        imgs[firstCard].setAttribute("src", "hidden.png");
        imgs[secondCard].setAttribute("src", "hidden.png"); 
          source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
          audio.load()
          audio.play()
          imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
        } 
        cardsSelected = []; 
        cardsId = []; 
        clicks += 1; 
        clickBoard.innerHTML = clicks; 
        }
        
        function checkWon() {
        if (cardsWon == cardArray.length / 2) {
        alert("You won") 
        console.log(clicks);
        var t="MMe/mr vous avez terminé la partie avec "+clicks +" essai";
        var elem = document.getElementById('page_jeux');
        elem.parentNode.removeChild(elem);
        console.log(t);
        document.getElementById("resultat").innerHTML=t;
        
        setTimeout(()=> popup.style.display = "flex" ,300); 
        }
        }
        // The replay function
        
        function replay() { 
        arrangeCard(); 
        grid.innerHTML = "";
        createBoard(grid, cardArray);
        cardsWon = 0;
        clicks = 0; 
        clickBoard.innerHTML = 0; 
        scoreBoard.innerHTML = 0; 
        popup.style.display = "none"; 
        }
        return false;
    }
    }
    
    // var niveau

    // $(document).ready(function(){
    //   $("select.nv").change(function(){
    //     niveau = $(this).children("option:selected").val();
    //     alert("Vous avez sélectionné le langage : " + niveau);
       

    //   });
    // });

    // if (niveau==="nv1") {
    //   console.log(niveau);
      
    // }  












// $(document).ready(function(){ 
              
//   $("#btn1").click(function(){
//     var nom = document.getElementById("#firstname")
//  console.log(nom);
//  var prenom = document.getElementById("#lastname")
//  console.log(prenom);
//  if ((nom="" )|| (prenom="")) {
 
//     console.log("test");
//  }else {

//     console.log("test");


//  }


// });
 
// });


 


//  var nom = document.getElementById("#firstname")
//  console.log(nom);
//  var prenom = document.getElementById("#lastname")
//  console.log(prenom);
//  if ((nom="" )|| (prenom="")) {
//   $("#form").on("submit",function(event){
//     event.preventDefault(); })
//     console.log("test");
//  }else {
//   $("#form").on("submit",function(event){
//     event.preventDefault(); })
//     console.log("test");
//   $("#btn1").click(function(){
//     //   $("#01").remove();
//       $("#info").show();
// });
//  }




// let cardArray = [ 
//   { name: "fries", img: "img/001.jpg", }, 
//   { name: "fries", img: "img/001.jpg", },
//   { name: "pizza", img: "img/002.jpg", },
//   { name: "pizza", img: "img/002.jpg", }, 
//   { name: "milkshake", img: "img/003.jpg", },
//   { name: "milkshake", img: "img/003.jpg", }, 
//   { name: "ice-cream", img:"img/004.jpg", },
//   { name: "ice-cream", img: "img/004.jpg", },
//   { name: "hotdog", img:"img/005.jpg", },
//   { name: "hotdog", img:"img/005.jpg", },
//   { name: "cheeseburger", img: "img/006.jpg", },
//   { name: "cheeseburger", img:"img/006.jpg", }, 
//   ]; 
  
//   //define variables and get DOM element
  
//   let grid = document.querySelector(".grid");
//   let audio = document.querySelector("audio")
//   let source = document.querySelector("#source")
//   let scoreBoard = document.querySelector(".scoreBoard"); 
//   let popup = document.querySelector(".popup"); 
//   let playAgain = document.querySelector(".playAgain"); 
//   let clickBoard = document.querySelector(".clickBoard"); 
//   let imgs; 
//   let cardsId = []; 
//   let cardsSelected = []; 
//   let cardsWon = 0; 
//   let clicks = 0;
//   document.addEventListener("DOMContentLoaded", function () {
//   //define functions 
  
//   createBoard(grid, cardArray); 
//   arrangeCard();
//   playAgain.addEventListener("click", replay); 
  
//   //add a click functions for images 
  
//   imgs = document.querySelectorAll("img");
//   Array.from(imgs).forEach(img => 
//   img.addEventListener("click", flipCard)
//   ) 
//   });
//   //createBoard function
  
//   function createBoard(grid, array) { 
//   popup.style.display = "none"; 
//   array.forEach((arr, index) => { 
//   let img = document.createElement("img"); 
//   img.setAttribute("src", "hidden.png");
//   img.setAttribute("data-id", index); 
//   grid.appendChild(img); 
//   })
//   }
  
//   // arrangeCard function
  
//   function arrangeCard() { 
//   cardArray.sort(() => 0.5 - Math.random())
//   }
  
//   // flip Card function
  
//   function flipCard() { 
//   let selected = this.dataset.id;
//     let clicked =cardArray[selected].name
//   cardsSelected.push(clicked); 
    
//      source.src=`${clicked}.mp3`
//     audio.load()
//     audio.play()
  
    
    
//   cardsId.push(selected); 
//   this.classList.add("flip"); 
//   this.setAttribute("src", cardArray[selected].img); 
//   if (cardsId.length === 2) { 
//   setTimeout(checkForMatch, 500);
//   } 
//   }
//   // checkForMatch function
  
//   function checkForMatch() { 
//   let imgs = document.querySelectorAll("img"); 
//   let firstCard = cardsId[0];
//   let secondCard = cardsId[1];
//   if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
  
//    // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
//     //this below is used if you want to add sounds, you can comment it out if you dont want it
   
//   cardsWon += 1; 
//   scoreBoard.innerHTML = cardsWon; 
//   setTimeout(checkWon,500) 
//   } else { 
//   imgs[firstCard].setAttribute("src", "hidden.png");
//   imgs[secondCard].setAttribute("src", "hidden.png"); 
//     source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
//     audio.load()
//     audio.play()
//     imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
//   } 
//   cardsSelected = []; 
//   cardsId = []; 
//   clicks += 1; 
//   clickBoard.innerHTML = clicks; 
//   }
  
//   function checkWon() {
//   if (cardsWon == cardArray.length / 2) {
//   alert("You won") 
//   console.log(clicks);
//   var t="MMe/mr vous avez terminé la partie avec "+clicks +" essai";
//   var elem = document.getElementById('page_jeux');
//   elem.parentNode.removeChild(elem);
//   console.log(t);
//   document.getElementById("resultat").innerHTML=t;
  
//   setTimeout(()=> popup.style.display = "flex" ,300); 
//   }
//   }
//   // The replay function
  
//   function replay() { 
//   arrangeCard(); 
//   grid.innerHTML = "";
//   createBoard(grid, cardArray);
//   cardsWon = 0;
//   clicks = 0; 
//   clickBoard.innerHTML = 0; 
//   scoreBoard.innerHTML = 0; 
//   popup.style.display = "none"; 
//   }