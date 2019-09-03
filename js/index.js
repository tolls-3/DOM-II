// Your code goes here

//Mouse Over Event
let test = document.querySelectorAll('.nav-link');

test[0].addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

test[1].addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

test[2].addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

test[3].addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

//Keydown Event
document.addEventListener("keydown", function() {
    console.log(`Key has been pressed down.`);
  });

//Wheel Event
  document.addEventListener('wheel', function(event) {
    console.log(event.deltaX, event.deltaY);
});

//drag and drop
const testImg = document.querySelector(".intro img");
testImg.addEventListener("drag", () => {
  testImg.style.backgroundColor = "red";
  testImg.style.borderRadius = "50%";
  testImg.style.border = "2px dashed black";
});

//load
window.addEventListener('load', function() {
    console.log('Welcome, page is fully loaded');
    alert('Welcome, page is fully loaded');
  });

//focus
// const focusButton = document.querySelectorAll('.btn');

// focusButton.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';    
// });


//resize
window.addEventListener('resize', function(){
    console.log("Window resize report.")
    if (!this.document.body.style.opacity){
        this.document.body.style.opacity=1;
    }
    this.document.body.style.opacity= Number(this.document.body.style.opacity)*0.9;
});

//click
let heading = document.querySelector('.logo-heading')
heading.addEventListener('click', (event) => {
  event.target.style.display = 'none';
});
