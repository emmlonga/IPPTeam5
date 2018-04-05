// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    modalTitle: 'Attention!',
    material: true
});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.

// Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
        // Do something here for "about" page

    })
    // Using page callback for page (for "index" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
    // Do something here for "index" page

})

/*rateCourseReview*/
/*Delete Tags*/
var $$ = Dom7;
$$('.chip-delete').on('click', function (e) {
    e.preventDefault();
    var chip = $$(this).parents('.chip');
    myApp.confirm('Do you want to delete this tiny demo Chip?', function () {
        chip.remove();
    });
});


/*Confirm Submit*/
$$('.confirm-ok').on('click', function () {

    myApp.confirm('Do you want to submit your rating?', function () {

        myApp.alert('You clicked Ok button');

    });
});


/*Slider scales*/
function scaleRating(value) {
    debugger;
    if (value == 0) {
        x = "Please grade higher than 0";
    } else if (value == 1) {
        x = "Very Bad";
    } else if (value == 2) {
        x = "Bad";
    } else if (value == 3) {
        x = "Average";
    } else if (value == 4) {
        x = "Good";
    } else {
        x = "Very Good"
    }
    return x
}

function goBack() {
    window.history.go(-1);
}
