let heading = document.getElementById("heading")

let paragraph = document.getElementById("paragraph")

let users = [

    {Name: "Wayne Barnett",
    Role: "Founder & CEO",
    Image: "wayne-barnett-founder-ceo.jpg"}, 

    {Name: "Angela",
    Role: "Chief Editor",
    Image: "angela-caroll-chief-editor.jpg"}, 

    {Name: "Waleter gordon",
    Role: "Chief Editor",
    Image: "walter-gordon-office-manager.jpg"}, 

    {Name: "Hernando Diaz",
    Role: "Social Media Manager",
    Image: "angela-lopez-social-media-manager.jpg"},

    {Name: "Scott Estrada",
    Role: "Developer",
    Image: "scott-estrada-developer.jpg"},

    {Name: "Barbara Ramos",
    Role: "Grafic designer",
    Image: "barbara-ramos-graphic-designer.jpg"},

]

for(let i = 0; i < users.length; i++){
    
    paragraph.innerHTML += 
    `<div class="card"> 

    <p class="name">${users[i].Name}</p>
    <br>
    <p class="role">${users[i].Role}</p>
    <br>
    <img class ="image" src="./img/${users[i].Image}">
    <br>

    </div>`
}
