$(document).ready(function() {
    //initilization of tutors and subjects
    var math = "MAT 005, 011, 012, 013";
    var english = "ENG 005, 080, 009";
    var tutors = ["Johnnie Andrews",
        "Grant Poole",
        "Bessie Curtis",
        "Clayton Hart",
        "Maram Abdullah",
        "Paul Herrera",
        "Geraldine Mitchell",
        "Ernesto Burke",
        "Sanjit Patel",
        "Concha Molina",
        "Corey Long"];
    var subjects = new Array();
    subjects["Johnnie Andrews"]=["Physics"];
    subjects["Grant Poole"]=["Physics","College Algebra",math];
    subjects["Bessie Curtis"]=["Calculus I",math,"Chemistry"];
    subjects["Clayton Hart"]=["Economics",math];
    subjects["Maram Abdullah"]=["College Algebra",math,"Calculus I","Biology","Physics","Chemistry","Writing",english];
    subjects["Paul Herrera"]=["Sciences","Biology","Anatomy","Microbiology",english];
    subjects["Geraldine Mitchell"]=[math,"Biology","Microbiology","Anatomy"];
    subjects["Ernesto Burke"]=[math,"College Algebra","Statistics"];
    subjects["Sanjit Patel"]=["U.S. Government","History","Political Science","Writing",english];
    subjects["Concha Molina"]=[english];
    subjects["Corey Long"]=["Accounting"];

    if ($('div.subjects').length == 0) {
        $('body').append("<div class='subjects'></div>");
        $('div.subjects').hide();
    }

    $(".event").mouseover(function(e){
        var tutorFound=false;
        var htmlString = "<dl>";
        for (i in subjects) {
            if (i == $(this).text()){
                tutorFound=true;
                htmlString += "<dt>" + i + "'s Subjects:</dt>";
                for (j in subjects[i]) {
                    htmlString += "<dd>" + subjects[i][j] + "</dd>";
                }}}
        if (!(tutorFound)){htmlString += "<dt>" + $(this).text() + ":</dt><dd>No subjects found!</dd>";}
        htmlString += "</dl>";
        $('div.subjects').html(htmlString);

        var pointerX = e.pageX+10+'px';
        var pointerY = e.pageY+10+'px';
        $(".subjects").css({"top":pointerY,"left":pointerX}).show();
        $(".event").mousemove(function(e){
            var pointerX = e.pageX+10+'px';
            var pointerY = e.pageY+10+'px';
            $(".subjects").css({"top":pointerY,"left":pointerX}).show();
        });
    });
    $(".event").mouseout(function(){
        $(".subjects").hide().html("");
    });
});