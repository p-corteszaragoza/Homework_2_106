var important = false;
var taskArray = [];
var index;

function toogleImportant() {
    console.log("Click on important icon");
    if(!important) {
        important = true;
        $("#iconImportant").removeClass("far").addClass("fas");
    } else { 
        important = false;
        $("#iconImportant").removeClass("fas").addClass("far");
    }
}

function saveTask() {
    console.log("Task has been saved");
    // Read values from controls
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let category = $("#selCategory").val();
    let location = $("#txtLocation").val();
    let date = $("#txtDueDate").val();
    let color = $("#txtColor").val();

    // Create an object
    let task = new Task(title, important, description, category, location, date, color);
    console.log("task " , task);
    
    // Send object to a backend server
    taskArray.push(task);
    console.log("Registro " , taskArray);
   
    //  Display the task
    let syntaxPart1 = `<div id="card-${index}" class="card line">`
    let syntaxPart2 =  `<h4 id="txt-${index}">`+ task.title;
    if(task.important) {
        syntaxPart2 += `<i class="fas fa-star"></i></h4>`;
    } else {
        syntaxPart2 += `<i class="far fa-star"></i></h4>`;
    }

    let syntaxPart3 =    `<div id="task-${index}" class="task card-body">` +
                            `<p>`+ "Description: " + task.description +  `</p>` +
                            `<p>`+ "Category: " + task.category +  `</p>` +
                            `<p>`+ "Location: " + task.location +  `</p>` +
                            `<p>`+ "Date: " + task.date +  `</p> 
                        </div>
                    </div>`;
    
    $("#todoContainer").append(syntaxPart1 + syntaxPart2 + syntaxPart3);   
    document.getElementById(`card-${index}`).style.borderBottom =".5rem solid "+task.color;
    document.getElementById(`card-${index}`).style.borderRight =".5rem solid "+task.color;
    console.log(color + `.card-${index}`);
    index++;
}

function init() {
    console.log("My task Manager");
    // Load data
    index = 0;
    // Hook events
    $("#iconImportant").click(toogleImportant);
    $("#btnSave").click(saveTask);
}

window.onload = init;