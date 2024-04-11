// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/1.jpg?v=1710436124808", 
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/2.jpg?v=1710436489387", 
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/3.jpg?v=1710436497107", 
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/4.jpg?v=1710436503160",


"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/6.jpg?v=1710436509036", 
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/7.jpg?v=1710436513665", 
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/8.jpg?v=1710436523925", 
"https://cdn.glitch.global/c6a68a94-bb53-41f5-bd25-f29e6473f1a8/5.jpg?v=1710954811383", 


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck


// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});