let selectedDiff;
let selectedDur;
let selectedType;

function getSelectValue(){
    selectedDiff = document.getElementById("difficulty_type").value;
    selectedDur = document.getElementById("length").value;
    selectedType = document.querySelector('input[name="assignment_group1"]:checked').value;
    console.log(selectedDiff + " " + selectedDur + " " + selectedType);
    if (selectedDur == "immediate") {
        window.location.href = "/fail.html";
    }

    if (selectedDur == "short" && selectedDiff == "easy" && selectedType == "narrative"){
        window.location.href = "/shortEssay.html";
    }else if(selectedDur == "long" && selectedDiff == "hard" && selectedType == "research"){
        window.location.href = "/researchPaper.html";
    }
}