// Function for increase love 
document.getElementById('tap-love-1')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-2')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-3')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-4')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-5')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-6')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-7')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-8')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
document.getElementById('tap-love-9')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let loveIncrease = parseInt(document.getElementById('love').innerText);
        loveIncrease++;
        document.getElementById('love').innerText = loveIncrease;
    });
// end of increase love 










// Start for main challenge
let coins = parseInt(document.getElementById("availableCoin").innerText);
function handleCall(serviceName, serviceNumber) {
    if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
    }


    coins -= 20;
    document.getElementById("availableCoin").innerText = coins;

    alert(`Calling ${serviceName} (${serviceNumber})`);


    const history = document.getElementById("call-history");
    const item = document.createElement("div");
    item.className = "flex justify-between items-center bg-white rounded-xl p-2 shadow";


    const leftSide = document.createElement("div");
    leftSide.innerHTML = `
   <div >
      <div class="w-[180px] ">
        <h1 class="font-bold">${serviceName}</h1>
      </div>
      <p>${serviceNumber}</p>
    </div>
  `;


    const rightSide = document.createElement("div");
    const now = new Date();
    const time = now.toLocaleTimeString();
    rightSide.innerHTML = `<p class="text-[12px]"> ${time}</p>`;

    item.appendChild(leftSide);
    item.appendChild(rightSide);

    history.appendChild(item);
}

// Clear history
document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("call-history").innerHTML = " ";
});



// Add event listeners by ID
document.getElementById('national-call-btn')
    .addEventListener('click', function () {
        handleCall("National Emergency Number", "999");
    });

document.getElementById('police-call-btn')
    .addEventListener('click', function () {
        handleCall("Police Helpline Number", "999");
    });

document.getElementById('fire-call-btn')
    .addEventListener('click', function () {
        handleCall("Fire Service Number", "999");
    });

document.getElementById('ambulance-call-btn')
    .addEventListener('click', function () {
        handleCall("Ambulance Service", "1994-999999");
    });

document.getElementById('women-child-call-btn')
    .addEventListener('click', function () {
        handleCall("Women & Child Helpline", "109");
    });

document.getElementById('anti-corruption-call-btn')
    .addEventListener('click', function () {
        handleCall("Anti-Corruption Helpline", "106");
    });

document.getElementById('electricity-call-btn')
    .addEventListener('click', function () {
        handleCall("Electricity Helpline", "16216");
    });

document.getElementById('brac-call-btn')
    .addEventListener('click', function () {
        handleCall("Brac Helpline", "16445");
    });

document.getElementById('bd-railway-call-btn')
    .addEventListener('click', function () {
        handleCall("Bangladesh Railway Helpline", "163");
    });






// Coppy Challange part for 10 marks


document.getElementById('national-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "999";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });


document.getElementById('police-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "999";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });



document.getElementById('fire-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "999";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });

document.getElementById('ambulance-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "1994-999999";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });

document.getElementById('women-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "109";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });

document.getElementById('anti-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "106";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });

document.getElementById('electricity-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "16216";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });

document.getElementById('brac-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "16445";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });

document.getElementById('bd-coppy-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        let coppyIncrease = parseInt(document.getElementById('coppy-btn').innerText);
        coppyIncrease++;
        document.getElementById('coppy-btn').innerText = coppyIncrease;

        const serviceNumber = "163";
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied number: ${serviceNumber}`);
            })
    });








