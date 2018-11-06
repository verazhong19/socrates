function randomNoRep(studentList) {
    var i;
    //create array with available students
    const availableStudents = [];
    //calculate available students
    for(i=0;i<studentList.length;i++){
        if(studentList[i].counter === 0){
            availableStudents.push(studentList[i]);
        }
    }
    //if all students have been selected, unable to select
    if(availableStudents.length === 0){
        alert('There are no more available students.');
        alert('Good bye. ')
        return window.close();
    }
    // generate random index
    const randomIndex = Math.floor(Math.random() * availableStudents.length);

    // add 1 to counter after student has been chosen
    availableStudents[randomIndex].counter ++;
    //return the random index
    return availableStudents[randomIndex];
}

export default randomNoRep;
