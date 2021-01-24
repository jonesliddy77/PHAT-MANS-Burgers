$('.addBurger-container').on('submit', function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
        name: $('#burger_name').val().trim(),
    };
    $.ajax('/burger/newBurger', {
        type: 'POST',
        data: newBurger,
    }).then(function (data) {
        // Reload the page to get the updated list
         location.reload();
    });
});

$('.eat_burger').on('submit', function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var burgerEaten = {
        id: event.target.id,
    };
    $.ajax('/burger/eat', {
        type: 'POST',
        data: burgerEaten,
    }).then(function (data) {
        // Reload the page to get the updated list
        location.reload();
    });
});
