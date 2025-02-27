const data = [
    {
      name: "Sufyan",
      desig: "Web Developer",
      desc: "Hello I am Sufyan Chohan. I am a Full Stack Developer. What about you?",
      email: "Email",
      github: "Github",
    }
  ];
  
  const cardsSection = document.getElementById("main");
  
  function rendercard() {
    cardsSection.innerHTML = "";
  
    data.map((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
    
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
    
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = item.name;
  
    
      const cardSubtitle = document.createElement("h6");
      cardSubtitle.classList.add("card-subtitle");
      cardSubtitle.innerText = item.desig;
  
    
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerText = item.desc;
  
    
      const cardLink1 = document.createElement("a");
      cardLink1.classList.add("card-link");
      cardLink1.innerText = item.email;
      cardLink1.setAttribute("href", "#"); 
  
    
      const cardLink2 = document.createElement("a");
      cardLink2.classList.add("card-link");
      cardLink2.innerText = item.github;
      cardLink2.setAttribute("href", "#");

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardSubtitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink1);
      cardBody.appendChild(cardLink2);
  
      
      card.appendChild(cardBody);
  
     
      cardsSection.appendChild(card);
    });
  }
  
  rendercard();
  
  function adduser() {
    const newuser = {
      name: prompt("Write name here"),
      desig: prompt("Write Designation here"),
      desc: prompt("Write description here"),
      email: prompt("Email Here"),
      github: prompt("Write githublink here"),
    };
    data.push(newuser);
    rendercard();
  }
  