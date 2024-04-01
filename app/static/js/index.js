function selectCourse(courseCode, courseName) {
    localStorage.setItem("selectedCourseCode", courseCode);
    localStorage.setItem("selectedCourseName", courseName);

    var nxtPg = "/" + courseCode + "/semesters";
    smoothChange(nxtPg);
}

function updatePageContent(content) {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
    document.open();
    document.write(content);
    document.close();
    executeInlineScripts();
}

function executeInlineScripts() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (!script.src) {
            var newScript = document.createElement('script');
            newScript.text = script.textContent;
            document.body.appendChild(newScript);
            script.parentNode.removeChild(script);
        }
    }
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
            history.pushState({path: nxtPg}, "", nxtPg);
        }
    };
    nxtpgReq.send();
}

function loadnavbar() {
    console.info("fetching navbar")
    var navbarcontent = new XMLHttpRequest();
    navbarcontent.open("GET", "/navbar", true);
    navbarcontent.onreadystatechange = function () {

        console.log("Got the nav bar!")
        document.getElementById("nav").innerHTML = navbarcontent.responseText


    };
    navbarcontent.send();
}

