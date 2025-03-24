$(document).ready(function () {
    // Make doors start as open by adding the 'open' and 'revealed' classes
    $(".door").addClass("open");
    $(".door").parent().addClass("revealed");
  
    $(".door").on("click", function () {
        const $door = $(this);
  
        // Check if the door is already open
        if ($door.hasClass("open")) {
            // If open, close the door
            $door.removeClass("open");
            $door.parent().removeClass("revealed");
        } else {
            // If closed, open the door
            $door.addClass("open");
            $door.parent().addClass("revealed");
        }
    });
  });


/* Add symbol */

let symbol = null; // To keep track of the star element

document.addEventListener('click', function(event) {
    // If the star already exists and is clicked, remove it
    if (symbol && event.target === symbol) {
        symbol.remove();
        symbol = null; // Reset the symbol to allow a new one to be created
    } else if (!symbol) {
        // If no symbol exists, create a new one and place it at the click position
        const x = event.clientX;
        const y = event.clientY;

        symbol = document.createElement('span');
        symbol.textContent = '★'; // The symbol you want to add (e.g., a star)
        symbol.classList.add('symbol'); // Add class for styling
        symbol.style.left = `${x}px`;
        symbol.style.top = `${y}px`;

        // Append the symbol to the body of the document
        document.body.appendChild(symbol);

        // Add event listener to the symbol to handle its removal
        symbol.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the document click handler from firing
            symbol.remove(); // Remove the symbol when clicked
            symbol = null; // Reset the symbol so it can be placed again
        });
    }
});