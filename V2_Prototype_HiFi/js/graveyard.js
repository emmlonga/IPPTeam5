var courses = [{
        name: "Ergonomics (HFE)",
        code: "MW2033",
        ECTS: 8,
        language: "de",
        term: "both",
        /** "ws","ss","both" */
        progress: "2",
        /** options: "completed=0", "attending=1", "remaining=2". "remaing is standard" */
        starred: "no",
        rated: false,
        rating: 4.1,
        /**this should be a [] with the overall rating information in it */
        feedback: []
}
    , {
        name: "Ergonomics (HFE)",
        code: "MW2033",
        ECTS: 8,
        language: "de",
        term: "both",
        /** "ws","ss","both"  */
        progress: "2",
        /** options: "completed=0", "attending=1", "remaining=2". "remaing is standard" */
        starred: "no",
        rated: false,
        rating: 4.1,
        /**this should be a [] with the overall rating information in it */
        feedback: [
            {}, ]
},






];
var test = [{
    date: "DD-MM-JJJJ MM:HH",
    quality: 2,
    difficulty: {
        term: "Medium",
        number: 2
    }, //STATUS: SUCCESSFULLY FINISHED, ENROLLED, DROPPED OUT//:
    status: {
        term: "Successful",
        number: 0
    }
    //WOULD YOU TAKE THE COURSE AGAIN?//

    ,
    recommendation: 1
        //TAGS//

    ,
    exam: [
           // { // das erkläre ich dir, wenn wir uns das nächste mal sehen
            //    tag1: 
        {
            name: "Difficult",
            status: false
                }
           , //     , tag2: 
        {
            name: "Multiple-Choice",
            status: false
                }
       , //         , tag3: 
        {
            name: "Manageable",
            status: false
                }
          //  }
        ],
    positive: [
            // {
              //   tag1: 
        {
            name: "Interesting",
            status: false
                }
             , //    , tag1: 
        {
            name: "Useful",
            status: false
                }
          , //       , tag1: 
        {
            name: "Entertaining",
            status: false
                },

           //  }
        ],
    negative: [
              //   {
                  //   tag1: 
            {
                name: "Demanding",
                status: false
                    }
                 , //    , tag1:
            {
                name: "Time-Consuming",
                status: false
                    }
                 , //    , tag1: 
            {
                name: "Boring",
                status: false
                    }
           //  }


        ]
        //COMMENT FROM USER//

    ,
    comment: "Nothing here yet"
}];