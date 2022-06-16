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
  
  // console.log(first);
  // console.log(last);
  // console.log(location);
  // console.log(email);
  // console.log(phone);

  innerContainer.innerHTML = `
    <img class="image" src="${image}" alt="" />
        <p>
          <i class="fa-solid fa-user"></i> Name :
          <span class="name"> ${first}</span>
        </p>
        <p>
          <i class="fa-solid fa-user"></i> LastName :
          <span class="last-name"> ${last} </span>
        </p>
        <p>
          <i class="fa-solid fa-magnifying-glass-location"></i> Location :
          <span class="location"> ${location}</span>
        </p>
        <p>
          <i class="fa-solid fa-phone-flip"></i>Phone :
          <span class="phone"> ${phone}</span>
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i>Email :
          <span class="email"> ${email}</span>
        </p>
        `;
};