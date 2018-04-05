// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    modalTitle: 'Attention!'
    , animatePages: false
, });
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {});
// Now we need to run the code that will be executed only for About page.
// Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
        // Do something here for "about" page
    })
    /** App initialization**/
$(document).ready(function () {
    console.log("App is initialized");
    $('.navProgress').finish()
    updateUserCourse();
    listCards();
    printNumber(-1);
    printDegree(degree_Ergonomics)
});
// Using page callback for page (for "index" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
        updateUserCourse();
        listCards();
        printNumber(-1);
        printDegree(degree_Ergonomics)
    })
    // Using page callback for page (for "detailed course view" page in this case) (recommended way):
myApp.onPageInit('detailedCourseView', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    if (selectedNumber == -1) {
        printDegree(all_Courses);
    }
    listCourseElement(currentDegree);
    updateProgress(currentDegree);
    resetFilter("#sortForm");
    resetFilter("#filterForm");
})
myApp.onPageInit('listCourses', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    if (selectedNumber == -1) {
        printDegree(all_Courses);
        $("#backGeneral").attr('href', 'index.html');
        $('.center').html('Search All Courses');
    }
    listListElement(currentDegree, myApp.formToData("#sortForm").myradio);
})
myApp.onPageInit('courseSummary', function (page) {
        console.log(page.name + ' initialized');
        $("#summaryTitle").html(currentCourse.name);
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

function goBack() {
    window.history.go(-1);
}
/**EMMANUEL STARTS HERE*/
// Open Links popover
function createPopover() {
    var a = -1;
    var popoverHTML = '<div class="popover popover-links">' + '<div class="popover-inner">' + '<div class="list-block">' + '<ul>' + '<li onclick="printNumber(' + "-1" + ');listCourseElement(' + "all_Courses" + ')"><a href="detailedCourseView.html" class="item-link list-button close-popover">My Courses</li>' + '<li><a href="#" class="item-link list-button">My Ratings</li>' + '<li><a href="#" class="item-link list-button">Sign out</li>' + '</ul>' + '</div>' + '</div>' + '</div>';
    myApp.popover(popoverHTML, ".fa-ellipsis-v");
    $(".popover-links").attr("style", "display:block; width:160px; top:56px; right: 6px");
}

function updateUserCourse() {
    for (i in user_Courses) {
        for (j in user_Courses[i]) {
            user_Courses[i][j].progress = i;
        };
    }
}

function progressBarValues(courseType) {
    var total = parseInt(courseType[1]);
    var completed = 0;
    var attending = 0;
    for (i in courseType[2]) {
        if (courseType[2][i].progress == 0) {
            completed = completed + courseType[2][i].ECTS;
        }
        else if (courseType[2][i].progress == 1) {
            attending = attending + courseType[2][i].ECTS;
        }
    }
    var completedPercent = completed / total * 100 + "%";
    var attendingPercent = attending / total * 100 + "%";
    var remaining = total - attending - completed;
    var remainingPercent = remaining / total * 100 + "%";
    return [completed, completedPercent, attending, attendingPercent, remaining, remainingPercent];
}

function createProgressBar(messageObject) {
    return '<div class="progress" style="margin:6px 0px 0px 0px;">' + '<div class="progress-bar progress-bar-success" role="progressbar" style="width:' + progressBarValues(messageObject)[1] + ';color:black;overflow:hidden">' + progressBarValues(messageObject)[0] + '</div>' + '<div class="progress-bar progress-bar-info" role="progressbar" style="width:' + progressBarValues(messageObject)[3] + ';color:black;overflow:hidden">' + progressBarValues(messageObject)[2] + '</div>' + '<div class="progress-bar progress-bar-danger" role="progressbar" style="width:' + progressBarValues(messageObject)[5] + ';background-color:transparent;color:black;overflow:hidden">' + progressBarValues(messageObject)[4] + '</div></div>';
}

function createProgressBar(messageObject) {
    return '<div class="progress" style="margin:6px 0px 0px 0px;">' + '<div class="progress-bar progress-bar-success" role="progressbar" style="width:' + progressBarValues(messageObject)[1] + ';color:black;overflow:hidden;background-color:#2E7D32">' + progressBarValues(messageObject)[0] + '</div>' + '<div class="progress-bar progress-bar-info" role="progressbar" style="width:' + progressBarValues(messageObject)[3] + ';color:black;overflow:hidden;background-color:#4CAF50">' + progressBarValues(messageObject)[2] + '</div>' + '<div class="progress-bar progress-bar-danger" role="progressbar" style="width:' + progressBarValues(messageObject)[5] + ';background-color:transparent;color:black;overflow:hidden">' + progressBarValues(messageObject)[4] + '</div></div>';
}

function createProgressBarCaption(messageObject) {
    return '<div class="progress caption" style="background-color:transparent;box-shadow:none;margin-bottom:0px;"><div class="progress-bar" role="progressbar" style="width:' + progressBarValues(messageObject)[1] + ';background-color:transparent;box-shadow:none;overflow:hidden;text-overflow: ellipsis">' + 'Completed' + '</div><div class="progress-bar" role="progressbar" style="width:' + progressBarValues(messageObject)[3] + ';background-color:transparent;box-shadow:none;overflow:hidden;text-overflow: ellipsis">' + 'Attending' + '</div><div class="progress-bar" role="progressbar" style="width:' + progressBarValues(messageObject)[5] + ';background-color:transparent;box-shadow:none;overflow:hidden;text-overflow: ellipsis">' + 'Remaining' + '</div></div>'
}

function createCardElement(messageObject) {
    return '<a href="detailedCourseView.html" class="link">' + '<div class="card demo-card-header-pic cardEdit">' + '<div class="card-header color-black no-border"><span>' + messageObject[0] + '</span></div><div class="cardSubtitle">Your ECTS Progress' + createProgressBar(messageObject) + createProgressBarCaption(messageObject) + '</div></div></a>'
}

function listCards() {
    $("#card-list").empty()
    var a;
    for (a in degree_Ergonomics) {
        var card = '<a href="detailedCourseView.html" class="link no-animation" onclick="printNumber(' + a + ')">' + '<div class="card demo-card-header-pic blueCard">' + '<div class="card-header cardEdit color-black no-border"><span>' + degree_Ergonomics[a][0] + '</span></div><div class="cardSubtitle">Your ECTS Progress' + createProgressBar(degree_Ergonomics[a]) + createProgressBarCaption(degree_Ergonomics[a]) + '</div></div></a>';
        $("#card-list").append(card);
    }
}
//*DETAILED COURSE VIEW//
function createCourseElement(course) {
    if (course.rated) {
        return '<li class="swipeout"><div class="swipeout-content"><a href="courseReviewNew.html" onclick="storeIndex(' + course.code + ')"><div class="item-inner" style="margin-left:8px"><div class="item-title-row">' + '<div class="item-title">' + course.code + '</div>' + '<div class="item-after">ECTS:' + course.ECTS + '</div>' + '</div><div class="item-subtitle" style="margin:0px 12px"><b>' + course.name + '</b></div><div class="item-text" style=""    ><span>' + '<i class="material-icons" style="padding:0px 8px">' + (course.rated ? "verified_user" : "new_releases") + '</i><div style="text-align:center"> Rated</div></span></div></div></a></div><div class="swipeout-actions-right" ><a href="javascript:storeIndex(' + course.code + ');signInCourse(1);" class="action1 bg-green"><i class="fa fa-check-circle" aria-hidden="true" style="font-size:24px"></i><span style="color:transparent">a</span>Mark as Completed</a></div><div class="swipeout-actions-left"><a href="#" class="swipeout-overswipe swipeout-delete" data-confirm="Are you sure want to delete this item?" data-confirm-title="Delete?"><i class="material-icons">delete_forever</i></a></div></li>'
    }
    else {
        return '<li class="swipeout"><div class="swipeout-content"><a href="courseReviewNew.html" onclick="storeIndex(' + course.code + ')"><div class="item-inner" style="margin-left:8px"><div class="item-title-row">' + '<div class="item-title">' + course.code + '</div>' + '<div class="item-after">ECTS:' + course.ECTS + '</div>' + '</div><div class="item-subtitle" style="margin:0px 12px"><b>' + course.name + '</b></div><div class="item-text" style=""    ><span>' + '<i class="material-icons" style="padding:0px 8px">' + (course.rated ? "verified_user" : "new_releases") + '</i><div style="text-align:center">Rate!</div></span></div></div></a></div><div class="swipeout-actions-right" ><a href="rateCourseView.html" class="action1 bg-green" onclick="storeIndex(' + course.code + ')"><i class="material-icons">rate_review</i><span style="color:transparent">a</span>Rate</a></div><div class="swipeout-actions-left"><a href="#" class="swipeout-overswipe swipeout-delete" data-confirm="Are you sure want to delete this item?" data-confirm-title="Delete?"><i class="material-icons">delete_forever</i></a></div></li>'
    }
}

function printNumber(asa) {
    selectedNumber = asa;
}

function printDegree(asa) {
    currentDegree = asa;
}

function listCourseElement(degree) {
    if (degree === all_Courses) {
        var courseType = degree[0];
    }
    else {
        var courseType = degree[selectedNumber];
    };
    $("#pageTitle").html(courseType[0]);
    $("#completed").empty();
    $("#attending").empty();
    var i;
    for (i in courseType[2]) {
        if (courseType[2][i].progress == 0) {
            $("#completed").append(createCourseElement(courseType[2][i]));
        }
        else if (courseType[2][i].progress == 1) {
            $("#attending").append(createCourseElement(courseType[2][i]));
        }
    };
    $("#completed .action1").html("Read Reviews")
    $("#completed .action1").attr('href', 'courseReviewNew.html')
}

function updateProgress(degree) {
    $("#detailedBar").empty();
    if (selectedNumber == -1) {
        $("#detailedBar").append(createProgressBar(degree[0]));;
    }
    else {
        $("#detailedBar").append(createProgressBar(degree[selectedNumber]));
    }
}
//*LIST COURSE VIEW//
function createListElement(course) {
    var elementList = '<li class="swipeout"><div class="swipeout-content"><a href="courseReviewNew.html" onclick="storeIndex(' + course.code + ')" style="color:black"><div class="item-inner ' + (course.starred == "yes" ? "favorited" : "") + '" style="margin-left:12px"><div class="item-title-row" style="margin-right: 5px;">' + '<div class="item-title">' + course.code + '</div>' + '<div class="item-after">ECTS:' + course.ECTS + '</div>' + '</div><div class="item-subtitle"><b>' + course.name + '</b></div><div class="item-text" style="min-width:70.3px"><span class="flag-icon flag-icon-' + course.language + '" style="margin:0px 8px"></span>' + '<span style="margin:0px 8px">' + course.rating + '</span></div></div></a></div><div class="swipeout-actions-right"><a href="javascript:makeFavorite(' + course.code + ');" class="action1 bg-green forward"><i class="material-icons">favorite</i><span style="color:transparent">a</span>Favorite</a> <a href="javascript:storeIndex(' + course.code + ');signInCourse(0);" class="action2 bg-lightgreen forward"><i class="fa fa-sign-in" style="font-size:24px"></i><span style="color:transparent">a</span>Add Course</a> </div><div class="swipeout-actions-left">                                            <a href="#" class="swipeout-delete swipeout-overswipe" data-confirm="Are you sure want to hide this item?" data-confirm-title="Hide?"><i class="material-icons">visibility_off</i></a></div></li>';
    return elementList;
}

function listListElement(degree, criterion) {
    if (selectedNumber == -1) {
        var courseType = degree[0];
    }
    else {
        var courseType = degree[selectedNumber];
    }
    $("#courseList").empty();
    if (criterion == "Alphabetical") {
        courseType[2].sort(compareAlphabetical);
    }
    else if (criterion == "ECTS") {
        courseType[2].sort(compareECTS);
    }
    else if (criterion == "Language") {
        courseType[2].sort(compareLanguage);
    }
    else if (criterion == "Rating") {
        courseType[2].sort(compareRating);
    }
    var i;
    for (i in courseType[2]) {
        if (courseType[2][i].progress == 2) {
            $("#courseList").append(createListElement(courseType[2][i]));
        }
        else if (selectedNumber == -1 && !filterAttended()) {
            $(createListElement(courseType[2][i])).appendTo("#courseList").addClass('notRemaining');
            $(".notRemaining .action2").remove()
        }
    }
    $('.favorited').append('<i class="material-icons">favorite</i>');
}
//just for backup//
function listListElementOLD(degree, criterion) {
    var courseType = degree[selectedNumber];
    $("#courseList").empty();
    if (criterion == "Alphabetical") {
        courseType[2].sort(compareAlphabetical);
    }
    else if (criterion == "ECTS") {
        courseType[2].sort(compareECTS);
    }
    else if (criterion == "Language") {
        courseType[2].sort(compareLanguage);
    }
    else if (criterion == "Rating") {
        courseType[2].sort(compareRating);
    }
    var i;
    for (i in courseType[2]) {
        if (courseType[2][i].progress == 2) {
            $("#courseList").append(createListElement(courseType[2][i]));
        }
    }
    $('.favorited').append('<i class="material-icons">favorite</i>');
}
/*Compare functions*/
function compareAlphabetical(a, b) {
    if (b.name > a.name) {
        return -1;
    }
    else if (b.name < a.name) {
        return 1;
    }
    else {
        return 0
    }
}

function compareECTS(a, b) {
    return (b.ECTS - a.ECTS)
}

function compareLanguage(a, b) {
    if (b.language > a.language) {
        return -1;
    }
    else if (b.language < a.language) {
        return 1;
    }
    else {
        return 0
    }
}

function compareRating(a, b) {
    return (b.rating - a.rating)
}

function compareFavorites(a, b) {
    if (a.starred & !b.starred) {
        return -1;
    }
    else if (!a.starred & b.starred) {
        return 1;
    }
    else {
        return 0
    }
}
/*COURSE REVIEW*/
//function Rating(text) {
// copy my location
//this.createdBy = user.name;
//this.createdOn = new Date() //now
//this.text = text;
//this.comment = "HELLO"
//this.
// own message
//this.own = true;}
//
/*Slider scales*/
function scaleRating(value) {
    var qualityName = {};
    if (value == 0) {
        qualityName = "very bad";
        x = "0";
    }
    else if (value == 1) {
        qualityName = "bad";
        x = "1";
    }
    else if (value == 2) {
        qualityName = "average";
        x = "2";
    }
    else if (value == 3) {
        qualityName = "good";
        x = "3";
    }
    else if (value == 4) {
        qualityName = "very good";
        x = "4";
    }
    return qualityName, x
}

function filterECTS(value) {
    var lim = parseInt(myApp.formToData("#filterForm").ECTS)
    if (myApp.formToData("#filterForm").limit == "equal") {
        return value.ECTS == lim;
    }
    else {
        return value.ECTS >= lim;
    }
}

function filterRating(value) {
    var lim = parseInt(myApp.formToData("#filterForm").Rating)
    return value.rating >= lim;
}

function filterLanguage(value) {
    var lim = myApp.formToData("#filterForm").Language;
    if (lim == "all") {
        return value.language;
    }
    else {
        return value.language == lim;
    }
}

function filterFavorites(value) {
    var lim = myApp.formToData("#filterForm").viewFavorites[0];
    if (lim == "yes") {
        return value.starred == lim;
    }
    else {
        return value.starred;
    }
}

function filterAttended() {
    var lim = myApp.formToData("#filterForm").hideAttended[0];
    if (lim == "yes") {
        return true;
    }
    else {
        return false;
    }
}


function filterList(asa) {
    var inner = selectedNumber;
    if (inner == -1) {
        inner = 0
    };
    var a = asa[inner][2];
    var a = a.filter(filterECTS);
    var a = a.filter(filterLanguage);
    var a = a.filter(filterFavorites);
    var a = a.filter(filterRating);
    i = asa.length;
    b = Array(i);
    while (i--) {
        if (i == inner) {
            b[i] = [0, 1, 2];
            b[i][0] = asa[i][0];
            b[i][1] = asa[i][1];
            b[i][2] = a;
        }
        else {
            b[i] = asa[i];
        };
    }
    return b
}

function resetFilter(id) {
    $(id).each(function () {
        this.reset();
    });
}
//*SWIPING OUT COMMANDS*//
function LoadCommand() {
    $$('.swipeout-actions-right').on('opened', function () {
        myApp.alert('Item removed');
    });
}

function makeFavorite(b) {
    if (b.starred == "no") {
        b.starred = "yes";
        console.log(b.name + " is now Favorite");
    }
    else {
        b.starred = "no";
        console.log(b.name + " is no longer Favorite");
    }
    listListElement(filterList(degree_Ergonomics), myApp.formToData('#sortForm').myradio);
}

function storeIndex(b) {
    currentCourse = b;
}
//**CHRISTOPH'S JS*//
//DECLARATION OF VARIABLES
var courseButtonIdent = 0;
/*REBECCA*/
function rateModal() {
    myApp.modal({
        title: 'Sucess!'
        , text: 'You have successfully added "' + currentCourse.name + '" to your completed courses list.' + '<br>' + '<br>' + 'Please rate your course experience!'
        , buttons: [
            {
                text: 'Close'
                , onClick: function () {}
      }
            , {
                text: 'Rate'
                , bold: true
                , onClick: function () {
                    mainView.router.loadPage('rateCourseView.html')
                }
      }
    , ]
    })
};

function signInCourse(buttonIdent) {
    courseButtonIdent = buttonIdent;
    if (buttonIdent == 0) {
        if (currentCourse.progress == 2) {
            myApp.confirm('Do you want to add "' + currentCourse.name + '" to your attending courses?', function () {
                currentCourse.progress = 1;
                myApp.alert('You have successfully added "' + currentCourse.name + '" to your attending course list!')
                if (mainView.activePage.name == "courseReviewNew") {
                    document.getElementById("goToCoursesII").click();
                }
                mainView.router.refreshPage();
            });
        }
    }
    else if (buttonIdent == 1) {
        if (currentCourse.progress == 0) {
            myApp.confirm('Do you want to add "' + currentCourse.name + '" to your already completed courses?', function () {
                currentCourse.progress = 0;
                document.getElementById("goToRating").click();
                rateModal();
            });
        }
        else if (currentCourse.progress == 1) {
            myApp.confirm('Do you want to move "' + currentCourse.name + '" to your completed courses?', function () {
                currentCourse.progress = 0;
                if (currentCourse.rated) {
                    myApp.alert('You have successfully moved "' + currentCourse.name + '" to your completed courses list!')
                    mainView.router.refreshPage();
                }
                else {
                    document.getElementById("goToRating").click();
                    rateModal();
                    mainView.router.refreshPage();
                }
            });
        }
        else if (currentCourse.progress == 2) {
            myApp.confirm('Do you want to move "' + currentCourse.name + '" to your completed courses?', function () {
                currentCourse.progress = 0;
                document.getElementById("goToRating").click();
                rateModal();
                mainView.router.refreshPage();
            });
        }
    }
    else if (buttonIdent == 2) {
        if (currentCourse.progress == 1) {
            myApp.confirm('Do you want to drop out of "' + currentCourse.name + '"? The course will be deleted from your Attending Courses.', function () {
                currentCourse.progress = 2;
                myApp.alert('You have successfully deleted "' + currentCourse.name + '". Please rate your course experience!')
                document.getElementById("goToRating").click();
            });
        }
        else if (currentCourse.progress == 0) {
            myApp.confirm('Do you want to remove "' + currentCourse.name + '"? to your completed courses? The course will be deleted from your Completed Courses.', function () {
                currentCourse.progress = 2;
                myApp.alert('You have successfully deleted "' + currentCourse.name + '". Please rate your course experience!')
                document.getElementById("goToRating").click();
            });
        }
    }
    else if (buttonIdent == 3) {
        if (currentCourse.progress == 1 || currentCourse.progress == 2) {
            myApp.confirm('Do you want to rate "' + currentCourse.name + '"?', function () {
                document.getElementById("goToRating").click();
                mainView.router.loadPage('rateCourseView.html');
            });
        }
    }
    mainView.router.refreshPage();
};
var statusCheck = 0;
var courseNumber;
var $$ = Dom7;
var i;
var userFeedback;
var tagCollection;
var qualityName;
var qualityNumber;
var courseStatus;
var courseStatusName;
var etags = [];
var ntags = [];
var ptags = [];
var finalQuality;
//var feedLength;
var difficultyName;
var difficultyNumber;
var takeAgain;
var individualFeedback = {};
var newExamTags = [];
var newPositiveTags = [];
var newNegativeTags = [];
var tagsAtBoot = [["Manageable", "Multiple-Choice", "Difficult"]
                  , ["Interesting", "Useful", "Entertaining"]
                  , ["Demanding", "Time-Consuming", "Boring"]];
//FRAMEWORK7 STUFF
var mainView = myApp.addView('.view-main', {});
$$('.chip-delete').on('click', function (e) {
    e.preventDefault();
    var chip = $$(this).parents('.chip');
    myApp.confirm('Do you want to delete this tiny demo Chip?', function () {
        chip.remove();
    });
});
//INITIALISING OF RATING PAGE, NEEDS INFORMATION OF COURSE NAME
myApp.onPageInit('rateCourseView', function (page, currentCourse) {
    console.log(page.name + ' initialized');
    // Do something here for "index" page
    if (typeof currentCourse == 'undefined') {
        currentCourse = MW2033;
    }
    for (var i = 0; i < tagsAtBoot[0].length; i++) {
        var newTag = '<div id="exam' + tagsAtBoot[0][i] + '" class="chip listView" onclick="examChangeClass(this.id)"><div class="chip-media bg-blue"><i class="fa fa-book"></i></div><div class="chip-label"><a href="#" class="link color-black">' + tagsAtBoot[0][i] + '</a></div></div>';
        $$('#examTag').append(newTag);
    };
    for (var i = 0; i < tagsAtBoot[1].length; i++) {
        var newTag = '<div id="positive' + tagsAtBoot[1][i] + '" class="chip listView" onclick="positiveChangeClass(this.id)"><div class="chip-media bg-green"><i class="fa fa-plus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + tagsAtBoot[1][i] + '</a></div></div>';
        $$('#positiveTag').append(newTag);
    };
    for (var i = 0; i < tagsAtBoot[2].length; i++) {
        var newTag = '<div id="negative' + tagsAtBoot[2][i] + '" class="chip listView" onclick="negativeChangeClass(this.id)"><div class="chip-media bg-red"><i class="fa fa-minus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + tagsAtBoot[2][i] + '</a></div></div>';
        $$('#negativeTag').append(newTag);
    };
    if (courseButtonIdent == 0) {
        buttonChange(1, 1);
        statusCheck = -1;
    }
    else if (courseButtonIdent == 1 || courseButtonIdent == 3) {
        buttonChange(0, 1);
        statusCheck = 0;
    }
    else if (courseButtonIdent == 2) {
        buttonChange(2, 1);
        statusCheck = 1;
    };
    console.log(page.name + ' initialized');
});
//INITIALIZING COURSEREVIEWNEW PAGE, NEEDS INFORMATION OF COURSE NAME, TOO//
myApp.onPageInit('courseReviewNew', function (page) {
    console.log(page.name + ' initialized');
    if (typeof currentCourse == 'undefined') {
        currentCourse = MW2033;
    }
    /*REBECCA*/
    if (currentCourse.progress == 2) {
        $$('#speedDial').append('<a href="#" class="floating-button"><i class="icon icon-plus"></i><i class="icon icon-close"></i></a><div class="speed-dial-buttons"><form target="_blank"><a id="goToRating" href="rateCourseView.html" class="button" style="display:none"></a></form><form target="_blank"><a id="goToCoursesII" href="rateCourseView.html" class="button" style="display:none"></a></form><a href="#" onclick="signInCourse(0)"><i class="fa fa-sign-in" style="font-size: 1.2em;"></i></a><a id="speedDialLogIn" href="#" onclick=signInCourse(1)><i class="fa fa-check-circle" style="font-size: 1.2em;"></i></a><a href="#" onclick=signInCourse(3)<i class="material-icons" style="font-size: 1.2em;">rate_review</i></a></div>');
    }
    else if (currentCourse.progress == 1) {
        $$('#speedDial').append('<a href="#" class="floating-button"><i class="icon icon-plus"></i><i class="icon icon-close"></i></a><form target="_blank"><a id="goToRating" href="rateCourseView.html" class="button" style="display:none"></a></form><div class="speed-dial-buttons"><a href="#" onclick="signInCourse(2)"><i class="material-icons" style="font-size: 1.2em;">delete_forever</i></a><a id="speedDialLogIn" href="#" onclick=signInCourse(1)><i class="fa fa-check-circle" style="font-size: 1.2em;"></i></a><a href="#" onclick=signInCourse(3)><i class="fa fa-star-o" style="font-size: 1.2em;"></i></a></div>');
    };
    var feedLength = currentCourse.feedback.length //courses[0].feedback.length
    if (currentCourse.progress == 0) {
        $("#courseSituationII").append('<i class="fa fa-check-circle" style="margin-left: 5px; color:#2E7D32">');
        $("#courseSituation").html("Completed");
        $("#courseSituation").css({
            color: "#2E7D32"
        });
    }
    else if (currentCourse.progress == 1) {
        $("#courseSituation").html("Attending");
        $("#courseSituation").css({
            color: "#4CAF50"
        });
        $("#courseSituationII").append('<i class="fa fa-check-circle-o" style="margin-left: 5px; color:#4CAF50">');
    }
    else if (currentCourse.progress == 2) {
        $("#courseSituation").html("Not Attending");
    };
    $("#pageTitleReview").empty();
    $("#pageTitleReview").html(currentCourse.name);
    $("#courseStatus").html(currentCourse.name);
    $("#courseDescriptionOverview").empty();
    $('#courseDescriptionOverview').html(currentCourse.courseDesc);
    $("#courseDescriptionOverview").attr("readonly", "readonly")
    $("#courseTime").empty();
    $('#courseTime').html(currentCourse.courseTime);
    $("#courseRoom").empty();
    $('#courseRoom').html(currentCourse.courseRoom);
    $("#courseECTS").empty();
    $('#courseECTS').html(currentCourse.ECTS);
    $("#courseTerm").empty();
    $('#courseTerm').html(currentCourse.term);
    $("#courseLanguage").empty();
    $('#courseLanguage').html(currentCourse.language);
    $("#courseTest").empty();
    $('#courseTest').html(currentCourse.courseTest);
    $("#courseLecturer").empty();
    $('#courseLecturer').html(currentCourse.courseLecturer);
    if (feedLength == 0) {
        return;
        //Put in solution for no feedback yet!
    }
    //FINDING THE CONTROL VARIABLE TO ADDRESS THE CORRECT COURSE, SAME AS ABOVE
    var qualityCalc = 0;
    var difficultyCalc = 0;
    var statusCalc = 0;
    var recommendationCalc = 0;
    var examTopTag = [];
    var positiveTopTag = [];
    var negativeTopTag = [];
    var recYes = 0;
    var recNo = 0;
    //Loop to find all selected tags, and to sum up all rating conditions (quality, difficulty, etc.)
    for (var i = 0; i < feedLength; i++) {
        var examCalc = [];
        var positiveCalc = [];
        var negativeCalc = [];
        qualityCalc += parseInt(currentCourse.feedback[i].quality);
        difficultyCalc += parseInt(currentCourse.feedback[i].difficulty.number);
        statusCalc += parseInt(currentCourse.feedback[i].status.number);
        if (currentCourse.feedback[i].recommendation == 1) {
            recYes += 1;
        };
        if (currentCourse.feedback[i].recommendation == -1) {
            recNo += 1;
        };
        recommendationCalc += parseInt(currentCourse.feedback[i].recommendation);
        //get amount of available exam tags
        for (var k = 0; k < currentCourse.feedback[i].exam.length; k++) {
            examCalc.push(0);
        };
        //get amount of selected exam tags
        for (var j = 0; j < currentCourse.feedback[i].exam.length; j++) {
            if (currentCourse.feedback[i].exam[j].status == true) examCalc[j] = examCalc[j] + 1;
        };
        for (var a = 0; a < examCalc.length; a++) {
            if (examCalc[a] == 1) {
                examTopTag.push(currentCourse.feedback[i].exam[a].name)
            };
        };
        //get amount of available positive tags
        for (var k = 0; k < currentCourse.feedback[i].positive.length; k++) {
            positiveCalc.push(0);
        };
        //get amount of selected positive tags
        for (var j = 0; j < currentCourse.feedback[i].positive.length; j++) {
            if (currentCourse.feedback[i].positive[j].status == true) positiveCalc[j] = positiveCalc[j] + 1;
        };
        for (var a = 0; a < positiveCalc.length; a++) {
            if (positiveCalc[a] == 1) {
                positiveTopTag.push(currentCourse.feedback[i].positive[a].name)
            };
        };
        //get amount of available negative tags
        for (var k = 0; k < currentCourse.feedback[i].negative.length; k++) {
            negativeCalc.push(0);
        };
        //get amount of selected negative tags
        for (var j = 0; j < currentCourse.feedback[i].negative.length; j++) {
            if (currentCourse.feedback[i].negative[j].status == true) negativeCalc[j] = negativeCalc[j] + 1;
        };
        for (var a = 0; a < negativeCalc.length; a++) {
            if (negativeCalc[a] == 1) {
                negativeTopTag.push(currentCourse.feedback[i].negative[a].name)
            };
        };
    }
    var frequency = {}; // array of frequency.
    var max = 0; // holds the max frequency.
    var result; // holds the max frequency element.
    for (var v in examTopTag) {
        frequency[examTopTag[v]] = (frequency[examTopTag[v]] || 0) + 1; // increment frequency.
        if (frequency[examTopTag[v]] > max) { // is this frequency > max so far ?
            max = frequency[examTopTag[v]]; // update max.
            result = examTopTag[v]; // update result.
        }
    };
    /*var examHighNumber = Math.max(...examCalc);
    var examHighCoordinates = examCalc.indexOf(examHighNumber);
    var examHighName = currentCourse.feedback[0].exam[examHighCoordinates].name;*/
    $("#examHigh1").empty();
    $('#examHigh1').text(max);
    $("#examHigh2").empty();
    $('#examHigh2').text(result);
    console.log(result);
    //MOST OFTEN SELECTED POSITIVE TAG
    var frequency = {}; // array of frequency.
    var max = 0; // holds the max frequency.
    var result = ""; // holds the max frequency element.
    for (var v in positiveTopTag) {
        frequency[positiveTopTag[v]] = (frequency[positiveTopTag[v]] || 0) + 1; // increment frequency.
        if (frequency[positiveTopTag[v]] > max) { // is this frequency > max so far ?
            max = frequency[positiveTopTag[v]]; // update max.
            result = positiveTopTag[v]; // update result.
        }
    };
    /*var positiveHighNumber = Math.max(...positiveCalc);
    var positiveHighCoordinates = positiveCalc.indexOf(positiveHighNumber);
    var positiveHighName = currentCourse.feedback[0].positive[positiveHighCoordinates].name;*/
    $("#positiveHigh1").empty();
    $('#positiveHigh1').html(max);
    $("#positiveHigh2").empty();
    $('#positiveHigh2').html(result);
    console.log(result);
    //MOST OFTEN SELECTED NEGATIVE TAG
    var frequency = {}; // array of frequency.
    var max = 0; // holds the max frequency.
    var result = ""; // holds the max frequency element.
    for (var v in negativeTopTag) {
        frequency[negativeTopTag[v]] = (frequency[negativeTopTag[v]] || 0) + 1; // increment frequency.
        if (frequency[negativeTopTag[v]] > max) { // is this frequency > max so far ?
            max = frequency[negativeTopTag[v]]; // update max.
            result = negativeTopTag[v]; // update result.
        }
    };
    /*var negativeHighNumber = Math.max(...negativeCalc);
    var negativeHighCoordinates = negativeCalc.indexOf(negativeHighNumber);
    var negativeHighName = currentCourse.feedback[0].negative[negativeHighCoordinates].name;*/
    $("#negativeHigh1").empty();
    $('#negativeHigh1').html(max);
    $("#negativeHigh2").empty();
    $('#negativeHigh2').html(result);
    console.log(result);
    //Get final divisor, so an average can be calculated. final divisor is array.lenght - 1 as the first entry of the
    //feedback array serves as template
    //if no entry exists, later here will be the entry to decide what to do
    var finalDivisor = feedLength;
    if (finalDivisor == 0) {
        finalDivisor = 1;
    }
    //final quality calculation to display it on the screen
    finalQuality = (((qualityCalc / finalDivisor) / 4) * 100);
    //append progress-bar, DOES NOT WORK YET
    $("#courseQuality").empty();
    $$('#courseQuality').append('<div data-progress="' + finalQuality + '" class="progressbar color-green"></div>');
    $("#courseQualityPercentage").empty();
    $("#courseQualityPercentage").html(finalQuality + "%");
    /*$('#courseQuality').html(finalQuality);*/
    //this might not be necessary, the scale for rating will be 1 to 5 if kept like this, without "+1" it will be 0 to 4
    currentCourse.rating = (qualityCalc / feedLength) + 1;
    //calculate the difficulty and add the respective description
    var finalDifficultyNumber = Math.round(difficultyCalc / finalDivisor) + 1;
    $('#courseDifficultyNumber').html(" (" + finalDifficultyNumber + "/5)");
    finalDifficultyNumber -= 1;
    if (finalDifficultyNumber == 0) {
        $('#courseDifficultyName').html("easy");
    };
    if (finalDifficultyNumber == 1) {
        $('#courseDifficultyName').html("manageable");
    };
    if (finalDifficultyNumber == 2) {
        $('#courseDifficultyName').html("medium");
    };
    if (finalDifficultyNumber == 3) {
        $('#courseDifficultyName').html("difficult");
    };
    if (finalDifficultyNumber == 4) {
        $('#courseDifficultyName').html("tough");
    };
    //recommendation scale is yes:1, unsure:0, no:-1, if only unsure and no was selected, if condition needs to be tested
    var finalRecommendation = (recYes / (recYes + recNo)) * 100;
    if (isNaN(finalRecommendation)) {
        finalRecommendation = 0;
    }
    finalRecommendation = finalRecommendation.toFixed(2);
    $('#courseRecommendation').html(finalRecommendation + "%");
    //calculation of dropout, scale is successful:0, enrolled:0, dropped out:1
    var finalStatus = (statusCalc / finalDivisor) * 100 * (-1);
    finalStatus = finalStatus.toFixed(2);
    $('#courseStatusNum').html(finalStatus + "%");
    $("#courseVotes").empty();
    $('#courseVotes').html(feedLength);
    listReviewCards(feedLength);
    /*
        if (newExamTags != 'undefined') {
            for (var i = 0; i < newExamTags.length; i++) {
                newExamTags[i].status = false;
            }
        };
        if (newPositiveTags != 'undefined') {
            for (var i = 0; i < newPositiveTags.length; i++) {
                newPositiveTags[i].status = false;;
            }
        };
        if (newNegativeTags != 'undefined') {
            for (var i = 0; i < newNegativeTags.length; i++) {
                newNegativeTags[i].status = false;;
            }
        };*/
    console.log(page.name + ' initialized');
});
//LOAD IN CARDS//
function listReviewCards(test) {
    //Clear UserComment section
    $("#userFeedback").empty()
        //loop from first to last entry of courses feedback length. NEEDS ADJUSTMENT WHEN FINISHED, i=1, because first feedback ist TEMPLATE
        //-1 Needs to be DELETED AS SOON AS COURSES VARIABLE DOES NOT CARRY ANY FEEDBACK TEMPLATE ANYMORE!!!!!
        //feedLength = courses[0].feedback.length
    for (i = 0; i < test; i++) {
        if (currentCourse.feedback[i].comment.status == false) {
            continue;
        }
        console.log(currentCourse.feedback.length);
        $$('#userFeedback').append(createFeedbackCardStartUp(i));
        tagCollection = "";
    };
};
//ADD QUALITY TO PROGRESS BAR, IS NOT WORKING YET
function createQualityProgressStartUp() {
    '<div data-progress="' + finalQuality + '" class="progressbar color-green"></div>'
}
//CARD INFRASTRUCTURE, WHEN COURSE REVIEW PAGE IS OPENED, THOSE CARD WILL BE ADDED//
function createFeedbackCardStartUp() {
    //load the card with the repective information
    return '<div class="card courseOverview"><div class="card-header"><a href="#" class="color-black">' + user.alias + '</a><div>rated: ' + currentCourse.feedback[i].quality / 4 * 100 + '%</div></div><div class="card-content"><div class="card-content-inner"><div class="content-block"><div class="row no-gutter"><div class="col-90 "><div class="list-block"><ul><div class="item-content"><div class="item-input writtenFeedback"><textarea class="font-size" disabled>' + currentCourse.feedback[i].comment.content + '</textarea></div></div></ul></div></div><div class="col-5"><div class="upDownVote"><p id="up' + i + '" class="buttons-row voting up" onclick="voteUp(' + i + ')"><a href="#" class="button button-raised color-green fa fa-chevron-up  voting-up"></a></p><p id="down' + i + '" class="buttons-row voting" onclick="voteDown(' + i + ')"><a href="#" class="button button-raised color-red fa fa-chevron-down voting-down"></a></p><p id="voteNumber' + i + '" class="buttons-row number-margin count">0</p></div></div></div></div></div><div class="commentPadding">' + tagsAddStartUp(i) + '</div></div><div class="card-footer"> <a href="#" class="color-gray">Report...</a>' + currentCourse.feedback[i].date + '</div></div>'
};
//TAG INFRASTRUCTURE AT STARTUP//
function tagsAddStartUp() {
    tagCollection = "";
    //load all available tags for the comment
    for (var j = 0; j < currentCourse.feedback[i].exam.length; j++) {
        if (currentCourse.feedback[i].exam[j].status == true) {
            tagCollection += ('<div class="chip listView"><div class="chip-media bg-blue"><i class="fa fa-book"></i></div><div class="chip-label"><a href="#" class="link color-black">' + currentCourse.feedback[i].exam[j].name + '</a></div></div>');
        }
    };
    for (var j = 0; j < currentCourse.feedback[i].positive.length; j++) {
        if (currentCourse.feedback[i].positive[j].status == true) {
            tagCollection += ('<div class="chip listView"><div class="chip-media bg-green"><i class="fa fa-plus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + currentCourse.feedback[i].positive[j].name + '</a></div></div>');
        }
    };
    for (var j = 0; j < currentCourse.feedback[i].negative.length; j++) {
        if (currentCourse.feedback[i].negative[j].status == true) {
            tagCollection += ('<div class="chip listView"><div class="chip-media bg-red"><i class="fa fa-minus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + currentCourse.feedback[i].negative[j].name + '</a></div></div>');
        }
    }
    if (typeof tagCollection == 'undefined') {
        return ""
    }
    return tagCollection;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RATECOURSEVIEW
//SUBMIT BUTTON RATECOURSEREVIEW/
//$$('.confirm-ok').on('click', function () {
function submit() {
    myApp.confirm('Do you want to submit your rating?', function () {
        if (typeof currentCourse == 'undefined') {
            currentCourse = MW2033;
        }
        var exam = [];
        for (var i = 0; i < tagsAtBoot[0].length; i++) {
            exam.push({
                name: tagsAtBoot[0][i]
                , status: false
            });
        };
        var positive = [];
        for (var i = 0; i < tagsAtBoot[1].length; i++) {
            positive.push({
                name: tagsAtBoot[1][i]
                , status: false
            });
        };
        var negative = [];
        for (var i = 0; i < tagsAtBoot[2].length; i++) {
            negative.push({
                name: tagsAtBoot[2][i]
                , status: false
            });
        };
        individualFeedback = {
            date: "DD-MM-JJJJ MM:HH"
            , quality: 2
            , difficulty: {
                term: "Medium"
                , number: 2
            }
            , status: {
                term: "Successful"
                , number: 0
            }
            , recommendation: 1
            , exam: []
            , positive: []
            , negative: []
            , comment: {
                content: ""
                , status: false
            , }
        };
        for (var i = 0; i < exam.length; i++) {
            individualFeedback.exam.push(exam[i]);
        };
        for (var i = 0; i < positive.length; i++) {
            individualFeedback.positive.push(positive[i]);
        };
        for (var i = 0; i < negative.length; i++) {
            individualFeedback.negative.push(negative[i]);
        };
        if (typeof difficultyName != 'undefined') {
            individualFeedback.difficulty.term = difficultyName;
        };
        if (typeof difficultyNumber != 'undefined') {
            individualFeedback.difficulty.number = difficultyNumber;
        };
        if (typeof qualityNumber != 'undefined') {
            individualFeedback.quality = qualityNumber;
        };
        if (statusCheck != 'undefined' || typeof courseStatusName != 'undefined') {
            if (statusCheck == 1 || typeof courseStatusName == 'Dropped') {
                individualFeedback.status.number = -1;
                individualFeedback.status.term = "Dropped";
                currentCourse.progress = 2;
            }
            else if (statusCheck == -1 || typeof courseStatusName == 'Enrolled') {
                individualFeedback.status.number = 0;
                individualFeedback.status.term = "Enrolled";
                currentCourse.progress = 1;
            }
            else if (statusCheck == 0 || typeof courseStatusName == 'Successful') {
                individualFeedback.status.number = 0;
                individualFeedback.status.term = "Successful";
                currentCourse.progress = 0;
            }
        };
        /*
                } else {
                    if (typeof courseStatusName != 'undefined') {
                        individualFeedback.status.term = courseStatusName;
                    }
                };
                if (typeof courseStatus != 'undefined') {
                    individualFeedback.status.number = courseStatus;
                    if (courseStatus == -1) {
                        currentCourse.progress = -1;
                    } else if (courseStatus == 0) {
                        currentCourse.progress = 2;
                    } else {
                        currentCourse.progress = 1;
                    };
                };*/
        if (typeof takeAgain != 'undefined') {
            individualFeedback.recommendation = takeAgain;
        };
        var newDate = new Date();
        day = newDate.getDate();
        month = newDate.getMonth();
        month = month + 1;
        if ((String(day)).length == 1) day = '0' + day;
        if ((String(month)).length == 1) month = '0' + month;
        individualFeedback.date = day + '.' + month + '.' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes();
        individualFeedback.comment.content = document.getElementById("rateComment").value;
        if (individualFeedback.comment.content != "") {
            individualFeedback.comment.status = true;
        }
        if (typeof etags != 'undefined') {
            for (var i = 0; i < etags.length; i++) {
                for (var j = 0; j < individualFeedback.exam.length; j++) {
                    var nameKey = individualFeedback.exam[j].name;
                    if (etags[i] == nameKey) {
                        individualFeedback.exam[j].status = true;
                    }
                };
            };
            for (var i = 0; i < ptags.length; i++) {
                for (var j = 0; j < individualFeedback.positive.length; j++) {
                    var nameKey = individualFeedback.positive[j].name;
                    if (ptags[i] == nameKey) {
                        individualFeedback.positive[j].status = true;
                    }
                }
            };
            for (var i = 0; i < ntags.length; i++) {
                for (var j = 0; j < individualFeedback.negative.length; j++) {
                    var nameKey = individualFeedback.negative[j].name;
                    if (ntags[i] == nameKey) {
                        individualFeedback.negative[j].status = true;
                    }
                }
            };
        };
        currentCourse.feedback.unshift(individualFeedback);
        tags = [];
        document.getElementById("goToReview").click();
        //Rebecca
    });
};
//GET QUALITY OF QUALITY-SLIDER
function getQuality() {
    if (document.getElementById("qualityRange").value == "0") {
        qualityName = "very bad";
        qualityNumber = "0";
    }
    else if (document.getElementById("qualityRange").value == "1") {
        qualityName = "bad";
        qualityNumber = "1";
    }
    else if (document.getElementById("qualityRange").value == "2") {
        qualityName = "average";
        qualityNumber = "2";
    }
    else if (document.getElementById("qualityRange").value == "3") {
        qualityName = "good";
        qualityNumber = "3";
    }
    else if (document.getElementById("qualityRange").value == "4") {
        qualityName = "very good";
        qualityNumber = "4";
    }
};
//GET QUALITY OF DIFFICULTY-SLIDER
function getDifficulty() {
    if (document.getElementById("difficultyRange").value == "0") {
        difficultyName = "easy";
        difficultyNumber = "0";
    }
    else if (document.getElementById("difficultyRange").value == "1") {
        difficultyName = "manageable";
        difficultyNumber = "1";
    }
    else if (document.getElementById("difficultyRange").value == "2") {
        difficultyName = "medium";
        difficultyNumber = "2";
    }
    else if (document.getElementById("difficultyRange").value == "3") {
        difficultyName = "difficult";
        difficultyNumber = "3";
    }
    else if (document.getElementById("difficultyRange").value == "4") {
        difficultyName = "tough";
        difficultyNumber = "4";
    }
};
//CHANGE BUTTON COLOR WHEN SELECTED 
function buttonChange(button, question) {
    if (question == 1) {
        if (button == 0) {
            $('#rateSuccess').addClass("button-fill");
            $('#rateEnrolled').removeClass("button-fill");
            $('#rateDropped').removeClass("button-fill");
            courseStatus = "0";
            courseStatusName = "Successful";
            console.log(courseStatus);
        }
        else if (button == 1) {
            $('#rateSuccess').removeClass("button-fill");
            $('#rateEnrolled').addClass("button-fill");
            $('#rateDropped').removeClass("button-fill");
            courseStatus = "-1";
            courseStatusName = "Enrolled";
            console.log(courseStatus);
        }
        else if (button == 2) {
            $('#rateSuccess').removeClass("button-fill");
            $('#rateEnrolled').removeClass("button-fill");
            $('#rateDropped').addClass("button-fill");
            courseStatus = "1";
            courseStatusName = "Dropped";
            console.log(courseStatus);
        };
    }
    else {
        if (button == 0) {
            $('#rateYes').addClass("button-fill");
            $('#rateUnsure').removeClass("button-fill");
            $('#rateNo').removeClass("button-fill");
            takeAgain = "1";
            console.log(takeAgain);
        }
        else if (button == 1) {
            $('#rateYes').removeClass("button-fill");
            $('#rateUnsure').addClass("button-fill");
            $('#rateNo').removeClass("button-fill");
            takeAgain = "0";
            console.log(takeAgain);
        }
        else if (button == 2) {
            $('#rateYes').removeClass("button-fill");
            $('#rateUnsure').removeClass("button-fill");
            $('#rateNo').addClass("button-fill");
            takeAgain = "-1";
            console.log(takeAgain);
        };
    }
}
var exaCheck = 0;
var posCheck = 0;
var negCheck = 0;
//EXAM TAG SELECTED FUNCTION
function examChangeClass(id) {
    if ($('#' + id).hasClass('selected')) {
        {
            $('#' + id).removeClass('selected');
            var res = id.replace('exam', '');
            var i = etags.indexOf(res)
            etags.splice(i, 1);
            console.log(etags);
            exaCheck -= 1;
        }
    }
    else {
        exaCheck += 1;
        if (exaCheck > 3) {
            window.alert("You only can add a maximum of 3 Tags!")
        }
        else {
            $('#' + id).addClass('selected');
            var res = id.replace('exam', '');
            etags.push(res);
            console.log(etags)
        }
    }
};

function positiveChangeClass(id) {
    if ($('#' + id).hasClass('selected')) {
        {
            $('#' + id).removeClass('selected');
            var res = id.replace('positive', '');
            var i = ptags.indexOf(res)
            ptags.splice(i, 1);
            console.log(ptags);
            posCheck -= 1;
        }
    }
    else {
        posCheck += 1;
        if (posCheck > 3) {
            window.alert("You only can add a maximum of 3 Tags!")
        }
        else {
            $('#' + id).addClass('selected');
            var res = id.replace('positive', '');
            ptags.push(res);
            console.log(ptags);
        }
    }
};

function negativeChangeClass(id) {
    if ($('#' + id).hasClass('selected')) {
        {
            $('#' + id).removeClass('selected');
            var res = id.replace('negative', '');
            var i = ntags.indexOf(res);
            ntags.splice(i, 1);
            console.log(ntags);
            negCheck -= 1;
        }
    }
    else {
        negCheck += 1;
        if (negCheck > 3) {
            window.alert("You only can add a maximum of 3 Tags!")
        }
        else {
            $('#' + id).addClass('selected');
            var res = id.replace('negative', '');
            ntags.push(res);
            console.log(ntags)
        }
    }
};
//VOTE UP, DOWN ONCE FOR COMMENTS
function voteUp(cardNumber) {
    $('#up' + cardNumber).addClass("disabled");
    var voteNumber = parseInt(document.getElementById("voteNumber" + cardNumber).innerHTML);
    voteNumber += 1;
    document.getElementById("voteNumber" + cardNumber).innerHTML = voteNumber;
}

function voteDown(cardNumber) {
    $('#down' + cardNumber).addClass("disabled");
    var voteNumber = parseInt(document.getElementById("voteNumber" + cardNumber).innerHTML);
    voteNumber -= 1;
    document.getElementById("voteNumber" + cardNumber).innerHTML = voteNumber;
}
//MESSAGE FOR LEAVE VOTING PAGE
function leavePage() {
    myApp.confirm('Do you want to leave this page?', function () {
        document.getElementById("goToCourses").click();
    });
};
//ACTIVATE SUBMIT BUTTON FOR NEW TAG
//ADD NEW TAG
//CANCEL NEW TAG ENTRY
function cancelTag(location) {
    if (location == 0) {
        document.getElementById("inputTag" + location).value = "";
    }
    else if (location == 1) {
        document.getElementById("inputTag" + location).value = "";
    }
    else {
        document.getElementById("inputTag" + location).value = "";
    };
};

function capitalizeFirstLetter(newTagName) {
    return newTagName.charAt(0).toUpperCase() + newTagName.slice(1);
}

function addTag(location) {
    var newTagName = document.getElementById("inputTag" + location).value;
    if (newTagName != '') {
        newTagName = newTagName.charAt(0).toUpperCase() + newTagName.slice(1)
        var myButtonClasses = document.getElementById("tagButton" + location).classList;
        var arraycheck = false;
        if (tagsAtBoot.length >= 10) {
            window.alert("The maximum amount of tags has been reached. Please use the already provided tags to describe the course.")
        };
        if (location == 0 && tagsAtBoot[0].indexOf(newTagName) == -1) {
            if (exaCheck >= 3) {
                window.alert("You only can add a maximum of 3 Tags!")
            }
            else {
                var newTag = '<div id="exam' + newTagName + '" class="chip listView" onclick="examChangeClass(this.id)"><div class="chip-media bg-blue"><i class="fa fa-book"></i></div><div class="chip-label"><a href="#" class="link color-black">' + newTagName + '</a></div></div>';
                $$('#examTag').append(newTag);
                for (var i = 0; i < tagsAtBoot[0].length; i++) {
                    if (newTagName == tagsAtBoot[0][i]) {
                        arraycheck = true;
                    }
                };
                if (arraycheck != true) {
                    tagsAtBoot[0].push(newTagName);
                };
                examChangeClass('exam' + newTagName)
                    /*newExamTags.push({
                        name: newTagName,
                        status: false
                    });*/
                document.getElementById("inputTag" + location).value = "";
            }
        }
        else if (location == 1 && tagsAtBoot[1].indexOf(newTagName) == -1) {
            if (posCheck >= 3) {
                window.alert("You only can add a maximum of 3 Tags!")
            }
            else {
                var newTag = '<div id="positive' + newTagName + '" class="chip listView" onclick="positiveChangeClass(this.id)"><div class="chip-media bg-green"><i class="fa fa-plus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + newTagName + '</a></div></div>';
                $$('#positiveTag').append(newTag);
                for (var i = 0; i < tagsAtBoot[1].length; i++) {
                    if (newTagName == tagsAtBoot[1][i]) {
                        arraycheck = true;
                    }
                };
                if (arraycheck != true) {
                    tagsAtBoot[1].push(newTagName);
                };
                positiveChangeClass('positive' + newTagName)
                    /*newPositiveTags.push({
                        name: name,
                        status: false,
                    });*/
                document.getElementById("inputTag" + location).value = "";
            }
        }
        else if (location == 2 && tagsAtBoot[2].indexOf(newTagName) == -1) {
            if (negCheck >= 3) {
                window.alert("You only can add a maximum of 3 Tags!")
            }
            else {
                var newTag = '<div id="negative' + newTagName + '" class="chip listView" onclick="negativeChangeClass(this.id)"><div class="chip-media bg-red"><i class="fa fa-minus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + newTagName + '</a></div></div>';
                $$('#negativeTag').append(newTag);
                for (var i = 0; i < tagsAtBoot[2].length; i++) {
                    if (newTagName == tagsAtBoot[2][i]) {
                        arraycheck = true;
                    }
                };
                if (arraycheck != true) {
                    tagsAtBoot[2].push(newTagName);
                };
                /*newNegativeTags.push({
                    name: name,
                    status: false,
                });*/
                negativeChangeClass('negative' + newTagName)
                document.getElementById("inputTag" + location).value = "";
            }
        }
        else {
            window.alert("This Tag already exists!");
            document.getElementById("inputTag" + location).value = "";
        }
    }
    else {
        window.alert("Please Name Your Tag Before Submitting!")
    }
};
//NOT NEEDED, BUT KEPT, IF THE NEED ARISES
/*
function createFeedbackCard() {
    
    return '<div class="card courseOverview"><div class="card-header"><a href="#" class="color-black">' + user.name + '</a><div>rated: ' + test[0].quality / 4 * 100 + '%</div></div><div class="card-content"><div class="card-content-inner"><div class="content-block"><div class="row no-gutter"><div class="col-90 "><div class="list-block"><ul><div class="item-content"><div class="item-input writtenFeedback"><textarea class="font-size">' + test[0].comment + '</textarea></div></div></ul></div></div><div class="col-5"><div class="upDownVote"><p class="buttons-row voting up"><a href="#" class="button button-raised color-green fa fa-chevron-up voting-up"></a></p><p class="buttons-row voting"><a href="#" class="button button-raised color-red fa fa-chevron-down voting-down"></a></p><p class="buttons-row number-margin count">0</p></div></div></div></div></div><div class="commentPadding">' + tagsAdd() + '</div></div><div class="card-footer"> <a href="#" class="color-gray">Report...</a>' + test[0].date + '</div></div>'
};


function tagsAdd() {
    for (var i = 0; i < test[0].exam.length; i++) {
        if (test[0].exam[i].status == true) {
            tagCollection = tagCollection + ('<div class="chip listView"><div class="chip-media bg-blue"><i class="fa fa-book"></i></div><div class="chip-label"><a href="#" class="link color-black">' + test[0].exam[i].name + '</a></div></div>');
        }
    };
    for (var i = 0; i < test[0].positive.length; i++) {
        if (test[0].positive[i].status == true) {
            tagCollection = tagCollection + ('<div class="chip listView"><div class="chip-media bg-green"><i class="fa fa-plus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + test[0].positive[i].name + '</a></div></div>');
        }
    };
    for (var i = 0; i < test[0].negative.length; i++) {
        if (test[0].negative[i].status == true) {
            tagCollection = tagCollection + ('<div class="chip listView"><div class="chip-media bg-red"><i class="fa fa-minus"></i></div><div class="chip-label"><a href="#" class="link color-black">' + test[0].negative[i].name + '</a></div></div>');
        }
    }
    return tagCollection;
};

//COURSE STATUS: CHECKS, WHAT BUTTON IS CLICKED//
/*$('#rateSuccess').click(function () {
    $('#rateSuccess').addClass("button-fill");
    $('#rateEnrolled').removeClass("button-fill");
    $('#rateDropped').removeClass("button-fill");
    courseStatus = "0";
    courseStatusName = "Successful";
    console.log(courseStatus);
});
$('#rateEnrolled').click(function () {
    $('#rateSuccess').removeClass("button-fill");
    $('#rateEnrolled').addClass("button-fill");
    $('#rateDropped').removeClass("button-fill");
    courseStatus = "0";
    courseStatusName = "Enrolled";
    console.log(courseStatus);
});
$('#rateDropped').click(function () {
    $('#rateSuccess').removeClass("button-fill");
    $('#rateEnrolled').removeClass("button-fill");
    $('#rateDropped').addClass("button-fill");
    courseStatus = "1";
    courseStatusName = "Dropped";
    console.log(courseStatus);
});
//TAKE AGAIN LECTURE, CHECKS INPUT//
$('#rateYes').click(function () {
    $('#rateYes').addClass("button-fill");
    $('#rateUnsure').removeClass("button-fill");
    $('#rateNo').removeClass("button-fill");
    takeAgain = "1";
    console.log(takeAgain);
});
$('#rateUnsure').click(function () {
    $('#rateYes').removeClass("button-fill");
    $('#rateUnsure').addClass("button-fill");
    $('#rateNo').removeClass("button-fill");
    takeAgain = "0";
    console.log(takeAgain);
});
$('#rateNo').click(function () {
    $('#rateYes').removeClass("button-fill");
    $('#rateUnsure').removeClass("button-fill");
    $('#rateNo').addClass("button-fill");
    takeAgain = "-1";
    console.log(takeAgain);
});
//UP/DOWNVOTE FUNCTION
/*$(function () {
    $(".voting").click(function () {
        var count = parseInt($("~ .buttons-row.number-margin.count", this).text());
        
        if ($(this).hasClass("up")) {
            var count = count + 1;
            $("~ .count", this).text(count);
            $(this).addClass('disabled');
        } else {
            var count = count - 1;
            $("~ .count", this).text(count);
            $(this).addClass('disabled');
        }
    });
});
*/