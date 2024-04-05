function selectCourse(courseCode, courseName) {
    localStorage.setItem("selectedCourseCode", courseCode);
    localStorage.setItem("selectedCourseName", courseName);

    var Pg = "/" + courseCode + "/semesters";
    var sems = new XMLHttpRequest();
    sems.open("GET", Pg, true);
    sems.onreadystatechange = function() {
        if (sems.readyState === 4 && sems.status === 200) {
            var heading = document.getElementById("wlcmbit");
            var selectCourse = document.getElementById("selectcrs");
            selectCourse.innerHTML = courseName +"Semesters";
            heading.innerHTML = "<a id=\"goback\" onclick=\"smoothChange('/')\"> <i class=\"fas fa-arrow-left\" style=\"color: var(--fg); cursor: pointer;\"></i> <p>Select your semester</p>";

            var branches = JSON.parse(sems.responseText); 
            var branchesContent = "";
            branches.forEach(element => {
                branchesContent += "<a href='#' onclick='smoothChange(\""+courseCode + "/" + element + "\")'>" + element + "</a>";
            });
            var streams = document.getElementById("streams");
            streams.innerHTML = branchesContent;
        }
    };
    sems.send();
    console.info("worked!");
}


/*
<div id="streams">
            <% branches.forEach(function(branch) { %>
            <a href="#" onclick="selectCourse('<%= branch[0] %>', '<%= branch[1] %>')"><%= branch[1] %></a>
            <% }) %>
        </div>
*/

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

