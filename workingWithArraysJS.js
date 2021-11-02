const eternalsData = [
    {
        eternalName: "Ikaris",
        power: "all powers",
        weightInPounds: 230,
        age: 20000,
        pic: "imagess\\Ikaris.png"
    },
    {
        eternalName: "Sersi",
        power: "manipulate's matter",
        weightInPounds: 140, 
        age: 5000,
        pic: "imagess\\Sersi.png"
    },
    {
        eternalName: "Kingo",
        power: "skilled swordsman",
        weightInPounds: "unknown",
        age: 779,
        pic: "imagess\\Kingo.png"
    },
    {
        eternalName: "Gilgamesh",
        power: "super strength",
        weightInPounds: 260,
        age: 5000,
        pic: "imagess\\Gilgamesh.png"
    },

    {
        eternalName: "Phastos",
        power:"creating technology and weapons",
        weightInPounds: 410,
        age: 1000000,
        pic: "imagess\\Phastos.png"
    }
];

const showEternals = () => {

    let eternalNumber = document.querySelector("#eternalNum").value;
    eternalNumber = parseInt(eternalNumber) - 1;
    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");
    let eternal = eternalsData[eternalNumber];

    selectedEternalInfo.textContent = `${eternal.eternalName} has the power of ${eternal.power} `;
    let eternalPic = document.querySelector(".selectedEternalPic");
    eternalPic.src = eternal.pic;

}

let eternalsList = document.querySelector(".eternalsList");

let allEternalsList = `<ol>`;
eternalsData.forEach((index) => {
allEternalsList += `<li> ${index.eternalName} with the power of ${index.power}</li>`;
});
allEternalsList += `</ol>`;

eternalsList.innerHTML = allEternalsList;

