function fetchSems(CourseCode, CourseName) {
    localStorage.setItem("CourseCode", CourseCode);
    localStorage.setItem("CourseName", CourseName);
    var url = window.location.origin + "/" + CourseCode;

    $.ajax({
        url: url,
        method: "POST",
        success: function (data) {
            history.pushState(null, null, url);
            $("selectcrs").text("Select Your Semester");
            $('#streams').empty();

            data.boxes.semesters.forEach(function (semester) {
                var semesterLink = $('<a>').attr('href', url + '/' + semester.number).text(semester.name);
                $('#streams').append(semesterLink);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}


