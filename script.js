var wrapperEle = document.body.querySelector(".wrapper");
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];

for (var i = 0; i < warriors.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = warriors[i].name+" -- damage: "+warriors[i].damage+", health: "+warriors[i].health+", warrior: "+warriors[i].warrior;
  
  ele.style.color = warriors[i].color;
  
  if(warriors[i].name.includes("a")){
     ele.style.color="red";
     }

  
   wrapperEle.appendChild(ele);
}