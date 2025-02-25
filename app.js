const data =[
    {
        name:"sufyan",
        desig : "web developer",
        desc : " Hello I am Sufyan Chohan I am Full Stack Developer and What about You",
        email : "",
        github :"",
    }
]
function addcard(){

   const cardsSection= document.getElementById("main");

    const card= document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle=document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText="Card Title"

    const cardSubtitle=document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerText="Card subTitle";

    const cardText=document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText="Some quick example text to build on the card title and make up the bulk of the card's content.";

    const cardlink1= document.createElement("a");
    cardlink1.classList.add("card-link");
    cardlink1.innerText="card Link";
    cardlink1.setAttribute("href","")

    const cardlink2= document.createElement("a");
    cardlink2.classList.add("card-link");
    cardlink2.innerText="card anoterLink";
    cardlink1.setAttribute("href","");


    card.appendChild(cardBody);
    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardText);
    card.appendChild(cardlink1);
    card.appendChild(cardlink2);

cardsSection.appendChild(card);

}
addcard()