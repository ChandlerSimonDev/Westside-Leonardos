/* ============================================================
   WESTSIDE LEONARDO'S — script.js
   ============================================================
   JavaScript makes the page DO things. The pattern you'll use
   over and over:

     1. FIND an element      → document.getElementById("...")
     2. LISTEN for an event  → element.addEventListener("click", ...)
     3. CHANGE something     → add a class, change text, show/hide

   Tip: press F12 in Chrome/Edge to open DevTools. The "Console"
   tab shows errors from this file and anything you console.log().
   ============================================================ */


/* ---------- 1. FIND the elements we need ----------
   "const" makes a variable that won't be reassigned. */
const chefButton = document.getElementById("chef-button");
const secretSection = document.getElementById("secret");
const chefBubble = chefButton.querySelector(".chef-bubble");
// querySelector uses CSS selectors. This one means:
// "inside chefButton, find the first thing with class chef-bubble".


/* ---------- 2. The function that opens/closes the secret menu ----------
   A function is a named, reusable chunk of code. Nothing inside it
   runs until something calls it. */
function toggleSecretMenu() {

  // Is the secret section hidden right now? (true or false)
  const isHidden = secretSection.hidden;

  if (isHidden) {
    // SHOW IT
    secretSection.hidden = false;              // un-hide the section
    secretSection.classList.add("revealed");   // play the CSS pop-in animation
    chefButton.classList.add("opened");
    chefButton.setAttribute("aria-expanded", "true"); // tell screen readers it's open
    chefBubble.textContent = "Shhh… don't tell!";

    // Scroll smoothly to the secret menu so people see what happened
    secretSection.scrollIntoView({ behavior: "smooth", block: "start" });

  } else {
    // HIDE IT AGAIN
    secretSection.hidden = true;
    secretSection.classList.remove("revealed");
    chefButton.classList.remove("opened");
    chefButton.setAttribute("aria-expanded", "false");
    chefBubble.textContent = "Psst! Secret menu?";
  }
}


/* ---------- 3. LISTEN for clicks on the chef ----------
   Read this as: "When chefButton is clicked, run toggleSecretMenu".
   Notice there are no () after toggleSecretMenu. We're handing the
   function over to be run LATER, not running it right now. */
chefButton.addEventListener("click", toggleSecretMenu);


/* ---------- 4. Bonus: a secret link ----------
   If someone visits the site with #secret on the end of the address
   (e.g. yoursite.github.io/westside-leonardos/#secret), open the secret
   menu automatically. Handy for sharing on Facebook! */
if (window.location.hash === "#secret") {
  toggleSecretMenu();
}


/* ---------- 5. Click a menu photo to enlarge it ----------
   Rules:
     • Click a card         → it grows a little
     • Click it again       → it goes back to normal
     • Click another card   → the first one shrinks, the new one grows
     • Click anywhere else  → it goes back to normal

   querySelectorAll finds EVERY match (querySelector finds only the
   first) and gives back a list we can loop through. */
const allCards = document.querySelectorAll(".card");

// Shrink every card back to normal
function shrinkAllCards() {
  allCards.forEach(function (card) {
    card.classList.remove("enlarged");
    card.setAttribute("aria-pressed", "false");
  });
}

function toggleCard(card) {
  // Remember whether THIS card was already big before we reset everything
  const wasEnlarged = card.classList.contains("enlarged");

  shrinkAllCards();

  if (!wasEnlarged) {   // "!" means NOT
    // Grow toward the middle of the screen so a card at the edge of a
    // phone screen doesn't get pushed off it. getBoundingClientRect()
    // tells us where the card is on screen, in pixels.
    const box = card.getBoundingClientRect();
    const cardMiddle = box.left + box.width / 2;
    const screenWidth = window.innerWidth;

    if (cardMiddle < screenWidth / 3) {
      card.style.transformOrigin = "left center";    // card is on the left → grow rightward
    } else if (cardMiddle > (screenWidth * 2) / 3) {
      card.style.transformOrigin = "right center";   // card is on the right → grow leftward
    } else {
      card.style.transformOrigin = "center center";
    }

    card.classList.add("enlarged");
    card.setAttribute("aria-pressed", "true");
  }
}

// forEach runs the code inside once for every card
allCards.forEach(function (card) {
  // Make each card act like a button for keyboard and screen-reader users:
  // tabindex="0" lets you reach it with the Tab key.
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-pressed", "false");

  card.addEventListener("click", function (event) {
    // Stop this click from also reaching the "click anywhere else"
    // listener below, which would shrink the card straight away.
    event.stopPropagation();
    toggleCard(card);
  });

  // Enter or Space on a focused card does the same as a click
  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();   // stop Space from scrolling the page
      toggleCard(card);
    }
  });
});

// Click anywhere that isn't a card → shrink everything
document.addEventListener("click", shrinkAllCards);

// Escape key → shrink everything
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    shrinkAllCards();
  }
});


/* ---------- 6. Keep the footer year current ----------
   new Date().getFullYear() gives this year, so the © updates itself
   every January and you never have to edit it. */
document.getElementById("year").textContent = new Date().getFullYear();
