names=[]
function SubmitNames(){
    var name1 = document.getElementById("name_student_1").value;
    var name2 = document.getElementById("name_student_2").value;
    var name3 = document.getElementById("name_student_3").value;
    var name4 = document.getElementById("name_student_4").value;
    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);
    console.log(names);
    document.getElementById("displaynames").innerHTML=names;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function SortNames(){
    names.sort();
    console.log(names);
    document.getElementById("displaynames").innerHTML=names;
}