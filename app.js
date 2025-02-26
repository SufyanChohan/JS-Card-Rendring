const data =[
    {
        name:"sufyan",
        desig : "web developer",
        desc : " Hello I am Sufyan Chohan I am Full Stack Developer and What about You",
        email : "Email",
        github :"Github",
    }
]

function adduser(){
    newuser={
        name:prompt("write name here"),
        desig : prompt("write Designation here") ,
        desc : prompt("write description here"),
        email : prompt("write email here"),
        github :prompt("write githublink here"),
    }
    data.push(newuser);
}


data.map((item)=>{
    const cardsSection= document.getElementById("main");

    const card= document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle=document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText=item.name

    const cardSubtitle=document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerText=item.desig;

    const cardText=document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText=item.desc;

    const cardlink1= document.createElement("a");
    cardlink1.classList.add("card-link");
    cardlink1.innerText=item.email;
    cardlink1.setAttribute("href"," ")

    const cardlink2= document.createElement("a");
    cardlink2.classList.add("card-link");
    cardlink2.innerText=item.github;
    cardlink2.setAttribute("href"," ")



    card.appendChild(cardBody);
    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardText);
    card.appendChild(cardlink1);
    card.appendChild(cardlink2);

cardsSection.appendChild(card);


})

   
adduser()
