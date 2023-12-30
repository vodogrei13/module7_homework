const student = {
    name: 'Harry',
    surname: 'Potter',
    faculty: 'Gryffindor',
    bestFriends: 2
  }
   
  function boy (student) {
    for (let [key, value] of Object.entries(student)) {
    console.log(`${key} ${value}`);
      }
    }
  boy(student)