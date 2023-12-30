const obj = {
  name: 'Harry',
  surname: 'Potter',
  faculty: 'Gryffindor',
  bestFriends: 2
}
const str = 'faculty'
const hasString = (obj, str) => {
    return str in obj;
  }
  console.log(hasString(obj, str));