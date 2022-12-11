const loadPhone = () => {
  //   console.log("clicked");
  const searchField = document.getElementById("search-phone");
  const searchText = searchField.value;
  //   console.log(searchText);
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url).then(res => res.json()).then(data => displayPhone(data.data));
};

const displayPhone = phones => {
  //   console.log(phones);
  for (const phone of phones) {
    // console.log(phone);
  }
};
