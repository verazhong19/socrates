function randomRep(studentList) {
    const randomIndex = Math.floor(Math.random() * studentList.length);
    //return random index
    return studentList[randomIndex];
}

export default randomRep;
