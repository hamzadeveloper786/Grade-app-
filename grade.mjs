window.gradecheck();
function gradecheck(){
    let marks = document.querySelector("#marks").value;
    console.log("Marks", marks);

    let totalmarks = document.querySelector("#totalmarks").value;
    console.log("Totalmarks" ,totalmarks);

    let mulmark = (marks * 100);

    let per = (mulmark / totalmarks).toFixed(2);
    console.log("result:" , per)

    let check = ("Your grade is ");
    let sorry = ("Sorry!")

if(per > 100){
    check += 'Invalid obtained or total marks please enter correct obtained or total marks';
    console.log("Invalid obtained or total marks please enter correct obtained or total marks");
} else if(per === 100){
    check += 'A1';
    console.log("A1");
} else if(per > 80){
    check += 'A1';
    console.log ("A1");
}else if(per >70){
    check += 'A';
    console.log("A");
}else if(per > 60){
    check += 'B';
    console.log("B");
}else if(per > 50){
    check += 'C';
    console.log("C");
}else if(per > 45){
    check += 'D';
    console.log("D");
}else if(per >= 0){
    sorry += check += 'F'
    console.log("F");
}else{
    console.log("Invalid obtained or total marks please enter correct obtained or total marks")
}
document.querySelector("#percentage").innerHTML = (per);
document.querySelector("#grade").innerHTML = (check);
}