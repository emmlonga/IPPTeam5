// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    modalTitle: 'Attention!'
});



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
    updateUserCourse();
    listCards();
});

// Using page callback for page (for "index" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    updateUserCourse();
    listCards();
})

// Using page callback for page (for "index" page in this case) (recommended way):
myApp.onPageInit('detailedCourseView', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listCourseElement(degree_Ergonomics);
    updateProgress(degree_Ergonomics);
    resetFilter("#sortForm");resetFilter("#filterForm");
})

myApp.onPageInit('listCourses', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listListElement(degree_Ergonomics,myApp.formToData("#sortForm").myradio);
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
        } else if (courseType[2][i].progress == 1) {
            attending = attending + courseType[2][i].ECTS;
        }
    }
    var completedPercent = completed / total * 100 + "%";
    var attendingPercent = attending / total * 100 + "%";
    var remaining = total - attending - completed;
    var remainingPercent = remaining / total * 100 + "%";
    return [completed, completedPercent, attending, attendingPercent, remaining, remainingPercent];
}

<<<<<<< HEAD
function createProgressBar(messageObject) {
    return '<div class="progress" style="margin:0px 1vw;">' + '<div class="progress-bar progress-bar-success" role="progressbar" style="width:' + progressBarValues(messageObject)[1] + ';color:black;overflow:hidden">' + progressBarValues(messageObject)[0] + '</div>' + '<div class="progress-bar progress-bar-info" role="progressbar" style="width:' + progressBarValues(messageObject)[3] + ';color:black;overflow:hidden">' + progressBarValues(messageObject)[2] + '</div>' + '<div class="progress-bar progress-bar-danger" role="progressbar" style="width:' + progressBarValues(messageObject)[5] + ';background-color:transparent;color:black;overflow:hidden">' + progressBarValues(messageObject)[4] + '</div></div>';
=======
function createProgressBar(messageObject){
     return '<div class="progress" style="margin:0px 1vw;">'
     + '<div class="progress-bar progress-bar-success" role="progressbar" style="width:'+progressBarValues(messageObject)[1]+';color:black;overflow:hidden;background-color:#2E7D32">'
     + progressBarValues(messageObject)[0] +'</div>'
     + '<div class="progress-bar progress-bar-info" role="progressbar" style="width:'+progressBarValues(messageObject)[3]+';color:black;overflow:hidden;background-color:#4CAF50">'
     + progressBarValues(messageObject)[2] +'</div>'
     + '<div class="progress-bar progress-bar-danger" role="progressbar" style="width:'+progressBarValues(messageObject)[5]+';background-color:transparent;color:black;overflow:hidden">'
     + progressBarValues(messageObject)[4] +'</div></div>';
>>>>>>> origin/gh-pages
}

function createProgressBarCaption(messageObject) {
    return '<div class="progress caption" style="background-color:transparent;box-shadow:none;margin-bottom:0px;"><div class="progress-bar" role="progressbar" style="width:' + progressBarValues(messageObject)[1] + ';background-color:transparent;box-shadow:none;overflow:hidden;text-overflow: ellipsis">' + 'Completed' + '</div><div class="progress-bar" role="progressbar" style="width:' + progressBarValues(messageObject)[3] + ';background-color:transparent;box-shadow:none;overflow:hidden;text-overflow: ellipsis">' + 'Attending' + '</div><div class="progress-bar" role="progressbar" style="width:' + progressBarValues(messageObject)[5] + ';background-color:transparent;box-shadow:none;overflow:hidden;text-overflow: ellipsis">' + 'Remaining' + '</div></div>'
}

function createCardElement(messageObject) {
    debugger;
    return '<a href="detailedCourseView.html" class="link">' + '<div class="card demo-card-header-pic">' + '<div class="card-header color-white no-border"><span>' + messageObject[0] + '</span></div>Your ECTS Progress' + createProgressBar(messageObject) + createProgressBarCaption(messageObject) + '</div></a>'
}

function listCards() {
    $("#card-list").empty()
    var a;
    for (a in degree_Ergonomics) {
        var card = '<a href="detailedCourseView.html" class="link" onclick="printNumber(' + a + ')">' + '<div class="card demo-card-header-pic">' + '<div class="card-header color-white no-border"><span>' + degree_Ergonomics[a][0] + '</span></div>Your ECTS Progress' + createProgressBar(degree_Ergonomics[a]) + createProgressBarCaption(degree_Ergonomics[a]) + '</div></a>';

        $("#card-list").append(card);
    }
}


//*DETAILED COURSE VIEW//

function createCourseElement(course) {
<<<<<<< HEAD
    return '<li class="swipeout"><div class="swipeout-content"><a href="#"><div class="item-inner" style="margin-left:8px"><div class="item-title-row">' + '<div class="item-title">' + course.code + '</div>' + '<div class="item-after">ECTS:' + course.ECTS + '</div>' + '</div><div class="item-subtitle" style="margin:0px 12px"><b>' + course.name + '</b></div><div class="item-text"><span>Rated?</span></div></div></a></div><div class="swipeout-actions-right"><a href="rateCourseView.html" class="swipeout-overswipe bg-deeppurple"><i class="material-icons">insert_comment</i><span style="color:transparent">a</span>Rate</a></div><div class="swipeout-actions-left"><a href="#" class="swipeout-overswipe swipeout-delete" data-confirm="Are you sure want to delete this item?" data-confirm-title="Delete?"><i class="material-icons">delete_forever</i></a></div></li>'
=======
    return '<li class="swipeout"><div class="swipeout-content"><a href="courseSummary.html" onclick="storeIndex('+course.code+')"><div class="item-inner" style="margin-left:8px"><div class="item-title-row">'
    +'<div class="item-title">'+course.code+'</div>'
    +'<div class="item-after">ECTS:'+course.ECTS+'</div>'
    +'</div><div class="item-subtitle" style="margin:0px 12px"><b>'+course.name
    +'</b></div><div class="item-text"><span>Rated?</span></div></div></a></div><div class="swipeout-actions-right"><a href="rateCourseView.html" class="swipeout-overswipe bg-deeppurple"><i class="material-icons">insert_comment</i><span style="color:transparent">a</span>Rate</a></div><div class="swipeout-actions-left"><a href="#" class="swipeout-overswipe swipeout-delete" data-confirm="Are you sure want to delete this item?" data-confirm-title="Delete?"><i class="material-icons">delete_forever</i></a></div></li>'
>>>>>>> origin/gh-pages
}

function printNumber(asa) {
    selectedNumber = asa;
}

function listCourseElement(degree) {
    var courseType = degree[selectedNumber];
    $("#pageTitle").html(courseType[0]);
    $("#completed").empty();
    $("#attending").empty();
    var i;
    for (i in courseType[2]) {
        if (courseType[2][i].progress == 0) {
            $("#completed").append(createCourseElement(courseType[2][i]));
        } else if (courseType[2][i].progress == 1) {
            $("#attending").append(createCourseElement(courseType[2][i]));
        }
    };
    $("#completed li div a div").addClass("completed");
    $("#attending li div a div").addClass("attending");

}


function updateProgress(degree) {
    $("#detailedBar").empty();
    $("#detailedBar").append(createProgressBar(degree[selectedNumber]));

}

//*LIST COURSE VIEW//

function createListElement(course) {
<<<<<<< HEAD
    return '<li class="swipeout"><div class="swipeout-content"><a href="#" style="color:black"><div class="item-inner" style="margin-left:12px"><div class="item-title-row">' + '<div class="item-title">' + course.code + '</div>' + '<div class="item-after">ECTS:' + course.ECTS + '</div>' + '</div><div class="item-subtitle"><b>' + course.name + '</b></div><div class="item-text"><span class="flag-icon flag-icon-' + course.language + '" style="margin:0px 8px"></span>' + '<span style="margin:0px 8px">' + course.rating + '</span></div></div></a></div><div class="swipeout-actions-right"><a href="#" class="swipeout-overswipe bg-indigo forward"><i class="material-icons">favorite</i><span style="color:transparent">a</span>Favorite</a></div><div class="swipeout-actions-left">                                            <a href="#" class="swipeout-delete swipeout-overswipe" data-confirm="Are you sure want to hide this item?" data-confirm-title="Hide?"><i class="material-icons">visibility_off</i></a></div></li>'
}

function listListElement(degree) {
    var courseType = degree[selectedNumber];
=======
    return '<li class="swipeout"><div class="swipeout-content"><a href="courseSummary.html" onclick="storeIndex('+course.code+')" style="color:black"><div class="item-inner" style="margin-left:12px"><div class="item-title-row">'
    +'<div class="item-title">'+course.code+'</div>'
    +'<div class="item-after">ECTS:'+course.ECTS+'</div>'
    +'</div><div class="item-subtitle"><b>'+course.name
    +'</b></div><div class="item-text"><span class="flag-icon flag-icon-'+course.language+'" style="margin:0px 8px"></span>'
        +'<span style="margin:0px 8px">'+course.rating+'</span></div></div></a></div><div class="swipeout-actions-right"><a href="javascript:makeFavorite('+course.code+');" class="swipeout-overswipe bg-indigo forward"><i class="material-icons">favorite</i><span style="color:transparent">a</span>Favorite</a></div><div class="swipeout-actions-left">                                            <a href="#" class="swipeout-delete swipeout-overswipe" data-confirm="Are you sure want to hide this item?" data-confirm-title="Hide?"><i class="material-icons">visibility_off</i></a></div></li>'
}

/*Compare functions*/
function compareAlphabetical(a,b){
    if (b.name > a.name){
        return -1;
    } else if (b.name < a.name){
        return 1;
    } else {return 0}
}

function compareECTS(a,b){
    return (b.ECTS-a.ECTS)
}

function compareLanguage(a,b){
    if (b.language > a.language){
        return -1;
    } else if (b.language < a.language){
        return 1;
    } else {return 0}
}

function compareRating(a,b){
    return (b.rating-a.rating)
}

function compareFavorites(a,b){
    if (a.starred & !b.starred){
        return -1;
    } else if (!a.starred & b.starred){
        return 1;
    } else {return 0}
        
}


function listListElement(degree,criterion) {
    var courseType=degree[selectedNumber];
>>>>>>> origin/gh-pages
    $("#courseList").empty();
    
    if (criterion=="Alphabetical") {
        courseType[2].sort(compareAlphabetical);
    } else if (criterion=="ECTS") {
        courseType[2].sort(compareECTS);
    } else if (criterion=="Language") {
        courseType[2].sort(compareLanguage);
    } else if (criterion=="Rating") {
        courseType[2].sort(compareRating);
    } 
    
    var i;
    for (i in courseType[2]) {
<<<<<<< HEAD
        if (courseType[2][i].progress == 2) {
            console.log(courseType[2][i].name);
            $("#courseList").append(createListElement(courseType[2][i]));
        }
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
//this.own = true;
} //

/*Slider scales*/
function scaleRating(value) {
    debugger;
    var qualityName = {};


    if (value == 0) {
        qualityName = "very bad";
        x = "0";
    } else if (value == 1) {
        qualityName = "bad";
        x = "1";
    } else if (value == 2) {
        qualityName = "average";
        x = "2";
    } else if (value == 3) {
        qualityName = "good";
        x = "3";
    } else(value == 4) {
        qualityName = "very good";
        x = "4";
    }
    return qualityName, x
}

function createRatingCard(newRatingCard) {

    newRatingCard.element = $( //'<div class="message' +
        //(newRatingCard.own ? ' own' : '')//
        //this dynamically adds #own to the #message, based on the
        //ternary operator. We need () in order not to disrupt the return.
        //+'">' +//
        '<div class="card courseOverview"><div class="card-header"><a href="#" class="color-black">' + user.name + '</a><div>rated: <span>' + rating.quality + '</span></div></div><div class="card-content"><div class="card-content-inner"><div class="content-block"><div class="row no-gutter"><div class="col-90 "><div class="list-block"><ul><div class="item-content"><div class="item-input writtenFeedback"><textarea class="font-size">' + rating.comment + '</textarea></div></div></ul></div></div><div class="col-5"><p class="buttons-row"><a href="#" class="button button-raised color-green fa fa-chevron-up voting-up"></a></p><p class="buttons-row number-margin"><a href="#" class="button disabled color-black number-size">' + rating.feedback + '</a></p><p class="buttons-row"><a href="#" class="button button-raised color-red fa fa-chevron-down voting-down"></a></p></div></div></div></div><div class="commentPadding">' + rating.tags + '</div></div><div class="card-footer"> <a href="#" class="color-gray">Report...</a><span>' + rating.createdOn + '</span></div></div>'

        return newRatingCard.element;
    }
=======
        if (courseType[2][i].progress==2){
            $("#courseList").append(createListElement(courseType[2][i]));
        } 
    }}


function filterECTS(value) {
    var lim = parseInt(myApp.formToData("#filterForm").ECTS)
    if (myApp.formToData("#filterForm").limit == "equal"){return value.ECTS == lim;}
    else {return value.ECTS >= lim;}
}

function filterRating(value) {
    var lim = parseInt(myApp.formToData("#filterForm").Rating)
    return value.rating >= lim;
}

function filterLanguage(value) {
    var lim = myApp.formToData("#filterForm").Language;
    if (lim == "all"){return value.language;}
    else {return value.language == lim;}
}

function filterFavorites(value) {
    var lim = myApp.formToData("#filterForm").viewFavorites[0];
    if (lim == "yes"){return value.starred == lim;}
    else {return value.starred;}
}

function filterList(asa){
    var a = asa[selectedNumber][2];
    var a = a.filter(filterECTS);
    var a = a.filter(filterLanguage);
    var a = a.filter(filterFavorites);
    var a = a.filter(filterRating);
    
    i = asa.length;
    b = Array(i);
    while(i--){
        if (i==selectedNumber){
            b[i]=[0,1,2];
            b[i][0]=asa[i][0]; b[i][1]=asa[i][1]; b[i][2]=a;}
        else {b[i] = asa[i];};
    }
    return b}

function resetFilter(id){
    $(id).each (function(){
  this.reset();
});
}

//*SWIPING OUT COMMANDS*//
function LoadCommand(){
$$('.swipeout-actions-right').on('opened', function () {
  myApp.alert('Item removed');});
}

function makeFavorite(b){
    if (b.starred=="no") {b.starred="yes"; console.log(b.name+" is now Favorite");}
    else {b.starred="no"; console.log(b.name+" is no longer Favorite");}
}

function storeIndex(b){
    currentCourse=b;
}
>>>>>>> origin/gh-pages
