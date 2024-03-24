function selectCourse(courseCode, courseName) {
  localStorage.setItem("selectedCourseCode", courseCode);
  localStorage.setItem("selectedCourseName", courseName);

  var nxtPg = "/" + courseCode + "/semesters";
  smoothChange(nxtPg);
}

function updatePageContent(content) {
  document.open();
  document.write(content);
  document.close();
}

function goBack() {
  window.history.back();
}

function smoothChange(url) {
  var nxtPg = url;
  var nxtpgReq = new XMLHttpRequest();
  nxtpgReq.open("GET", nxtPg, true);
  nxtpgReq.onreadystatechange = function () {
    if (
      nxtpgReq.readyState === XMLHttpRequest.DONE &&
      nxtpgReq.status === 200
    ) {
      updatePageContent(nxtpgReq.responseText);
      history.pushState({ path: nxtPg }, "", nxtPg);
    }
  };
  nxtpgReq.send();
}
