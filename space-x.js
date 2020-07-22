
const container = document.querySelector('.container');
console.log(container);

fetch('https://api.spacexdata.com/v3/capsules') //--> javascript function, then returns something
.then(response => {
    // console.log(response);
    return response.json();

})                    
.then(data => {
    //console.log(data);

    // const firstElement = data[0]; //talking about an array
    // //console.log(firstElement);

    // let capsuleId = firstElement.capsule_id;
    // console.log(capsuleId);

    // let details = firstElement.details;
    // console.log(details);

    // let landings = firstElement.landings;
    // console.log(landings);

    for (let i = 0; i < data.length; i++) {
        let eachCapsule = data[i];
        //console.log(eachCapsule);
        const obj = {
            capsuleId: eachCapsule.capsule_id, //eachCapsule was an object (went through it) data[i] is an obj
            //to get a key you use .capsule_id to get that key but you use eachCapsule b/c you name it like tht
            details: eachCapsule.details,
            landings: eachCapsule.landings
        };
        console.log(obj);


        const capsuleElement = document.createElement('P');
        capsuleElement.textContent = obj.capsuleId; //you refer back to your value obj (up top) and you ask for the key (capsuleID)
        container.appendChild(capsuleElement); 

    } 

    

})     