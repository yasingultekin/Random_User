const button = document.querySelector("#btn");
const innerContainer = document.querySelector(".inner-container");
// https://randomuser.me/api

button.addEventListener("click", () => {
  const getPersonData = async () => {
    try {
      const url = `https://randomuser.me/api`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      createPerson(data);
    } catch (error) {
      alert(error);
    }
  };
  getPersonData();
});

const createPerson = (data) => {
  let { first, last } = data.results[0].name;
  // let name = data.results[0];
  // let { country } = data.results[0].location;
  let location = data.results[0].location.country;
  let { email, phone } = data.results[0];
  let image = data.results[0].picture.medium;
  
}