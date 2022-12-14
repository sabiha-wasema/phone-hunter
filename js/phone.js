const loadPhone = () => {
  //   console.log("clicked");
  const searchField = document.getElementById("search-phone");
  const searchText = searchField.value;
  //   console.log(searchText);
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  let letters = /^[A-Za-z]+$/;
  if (searchField.value.match(letters) || searchField.value == "") {
    fetch(url)
      .then(res => res.json())
      .then(data => displayPhone(data.data.slice(0, 20)));
  } else {
    alert("Search Field is empty or Invalid input");
  }
  searchField.value = "";
};

const displayPhone = phones => {
  //   console.log(phones);
  const phoneContainer = document.getElementById("display-phone");
  /* if (phones.length == 0) {
    alert("Search Field is empty or invalid input ");
  } */
  phoneContainer.textContent = "";
  for (const phone of phones) {
    // console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><span>Name: </span> ${phone.phone_name}</h5>
        <p class="card-text"><span>Brand Name: </span> ${phone.brand}</p>
      </div>
      <div class="card-footer">
       <button onclick="showDetails('${phone.slug}')">Details</button>
      </div>
    </div>
    `;
    phoneContainer.appendChild(div);
  }
};

const showDetails = phoneId => {
  //   console.log(phoneId);
  const detailShowContainer = document.getElementById("show-details");
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url).then(res => res.json()).then(data => detailContainer(data.data));
};

const detailContainer = id => {
  //   console.log(id);
  const showDetailContainer = document.getElementById("show-details");
  showDetailContainer.textContent = "";
  const div = document.createElement("div");
  div.classList.add("detail-card");
  div.innerHTML = `
     <img src="${id.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><span>Name: </span> ${id.name} </h5>
          <p class="card-text1"><span>Release Date:</span> ${id.releaseDate
            ? id.releaseDate
            : "Not Release Date Found"}</p>
        <p class="card-text"><span>Brand Name: </span> ${id.brand}</p>
        <h5><span>Storage:</span> ${id.mainFeatures.storage}</h5>
        <p><span>Display:</span> ${id.mainFeatures.displaySize}</p>
        <p><span>ChipSet: </span> ${id.mainFeatures.chipSet}</p>
        <ul class='sensors'><span>Sensors: </span>
        <li>${id.mainFeatures.sensors[0]},</li>
        <li>${id.mainFeatures.sensors[1]},</li>
        <li>${id.mainFeatures.sensors[2]},</li>
        <li>${id.mainFeatures.sensors[3]},</li>
        <li>${id.mainFeatures.sensors[4]},</li>
        <li>${id.mainFeatures.sensors[5]}</li>
        <ul>
        <p><span>Others(Bluetooth): </span>${id.others
          ? id.others.Bluetooth
          : "Not Found"}</p>
      </div>
  `;
  showDetailContainer.appendChild(div);
};
