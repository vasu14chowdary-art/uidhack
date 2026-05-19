function validate(){
    let name=document.getElementById("name").value;
   let rollno=document.getElementById("rollno").value;
   let marks=document.getElementById("marks").value;
   let department=document.getElementById("dept").value;
    let namepattern=/^[A-Za-z0-9]{5,10}$/;
    let rollpattern=/^[A-Za-z0-9@#.-_]{10,20}$/;
    let markspattern=/^(100|[0-9]{1,2})$/;
    if(name==""){
        alert("please enter the name");
        return false;
    }
    if(!namepattern.test(name)){
        alert("name should contain 5-10 characters");
        return false;
    }
     if(rollno==""){
        alert("enter rollno with athe characters given");
        return false;
     }
     if(!rollpattern.test(rollno)){

        alert("Invalid rollno");
        return false;
    }
     if(marks==""){
        alert('please enetr marks between 0-100');
        return false;
     }
    if(!markspattern.test(marks)){

        alert("Enter marks between 0-100");
        return false;
    }
  let table=document.getElementById("table");
  let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = rollno;
    row.insertCell(2).innerHTML = marks;
    row.insertCell(3).innerHTML = department;
   alert("student added");
   
    return true;
    }

     function calculategrade(){
        let marks=Number(document.getElementById("marks").value);
    if(marks>=90){
        alert("A");
    }
    else if(marks>=75&&marks<=89){
        alert("B");
    }
    else if(marks>=50&&marks<=74){
        alert("C");
    }
    else {
alert("fail");
    }
    document.getElementById("name").value = "";

document.getElementById("rollno").value = "";

document.getElementById("marks").value = "";

document.getElementById("dept").value = "";
     }
