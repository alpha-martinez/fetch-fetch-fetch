
    const body = document.querySelector('body');




fetch( 'https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => {
    return response.json();

})
.then(data => {
    console.log(data);
    
    let pokeName = data.name;
    //console.log(name);

    let abilities = data.abilities;
    //console.log(abilities);

    let static = abilities[1].ability.name;
    //console.log(static);

    let weight = data.weight;
    //console.log(weight);

    let height = data.height;
    //console.log(height);

    let sprites = data.sprites;
    //console.log(sprites);

    let profilePic = sprites.front_default;
    //console.log(profilePic);

    let type = data.types[0].type.name;
    //console.log(type);


    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    console.log(card);
    
    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = name;
    console.log(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    console.log(cardBody);

    
    let firstLetter = pokeName.charAt(0).toUpperCase(); //should give us back the first letter
    let otherLetters = pokeName.slice(1); //console log to see what you get back
    let finalName = firstLetter + otherLetters;
    console.log(finalName);
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = finalName;
    console.log(cardTitle);

    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardAbilities = document.createElement('p');
    const cardType = document.createElement('p');


    cardWeight.classList.add('card-text');
    cardHeight.classList.add('card-text');
    cardAbilities.classList.add('card-text');
    cardType.classList.add('card-text');

    cardWeight.textContent = "Weight: " + weight;
    cardHeight.textContent = "Height: " + height;
    cardAbilities.textContent = "Ability: " + static;
    cardType.textContent = "Type: " + type;

    // console.log(cardWeight);
    // console.log(cardHeight);
    // console.log(cardAbilities);
    // console.log(cardType);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardAbilities);
    cardBody.appendChild(cardType);


    console.log(cardBody); //to check everything is getting append into body

    card.appendChild(image);
    card.appendChild(cardBody);

    body.appendChild(card);


})



// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>