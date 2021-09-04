let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeAJAXCall(methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log("State Changed Called. Ready State: " +xhr.readyState+ " Status: " +xhr.status);
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            } else if (xhr.status >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error.");
            }
        }
    }
    xhr.open(methodType, url, async);
    if(data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methodType+ " request sent to the server.");
}

const getURL = "http://localhost:3000/EmployeePayrollDB";
function getUserDetails(data) {
    console.log("Get User Data: " +data);
}
makeAJAXCall("GET", getURL, getUserDetails);

const deleteURL = "http://localhost:3000/EmployeePayrollDB/10";
function userDeleted(data) {
    console.log("User Deleted: " +data);
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);

const postURL = "http://localhost:3000/EmployeePayrollDB";
const emplData = {"id":4 ,
"_name": "Rahul Deshpande",
"_gender": "male",
"_department": [
  "Sales"
],
"_salary": "400000",
"_startDate": "29 june 2018",
"_note": "",
"_profilePic": "../assets/profile-images/Ellipse -7.png"};
function userAdded(data) {
    console.log("User Added: " +data);
}
makeAJAXCall("POST", postURL, userAdded, true, emplData);



/**
 * Execution steps:
     1. Open the NodeJS Command Prompt. Set the path to the file  directory.
     2. Initially install json-server: npm install -g json-server
     3. Start the server everytime to perform the AJAX operation: json-server --watch empDB.json
     4. Open gitbash terminal and set the path.
     5. To run the .js file and GET the value: node AjaxCallback.js
     6. To GET the data from .js file using curl command: curl -X GET -H "Content-Type: application/json" "http://localhost:3000/employees" -w "\n"
     7. To POST the data in .js file using curl command: curl -X POST -H "Content-Type: application/json" -d '{"name": "Harry","salary": "5000"}' "http://localhost:3000/employees" -w "\n"
     8. To DELETE the data from .js file using curl command: curl -X DELETE -H "Content-Type: application/json" "http://localhost:3000/employees/5" -w "\n"
     
    NOTE: Keep the json-server running while performing the HTTP operations.
 */