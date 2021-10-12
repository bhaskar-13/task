// const favs = ["Anime", "Badminton", "Briyani", "Chess"];

// const list = document.createElement("ul");

// favs.forEach((fav) => {
//   // console.log(fav);
//   const listItem = document.createElement("li");
//   listItem.innerText = fav;
//   list.append(listItem);
// });

// document.body.append(list);

// array of objects
// Dont use HTML
// JS & CSS can be used to display the data
const countries = [
    {
        image: "https://flagpedia.net/data/flags/w580/in.png",
        country: "India",
        population: "1,3179,984,812",
        region: "Asia",
        capital: "New Delhi"
      },
  {
    image: "https://flagpedia.net/data/flags/w580/de.png",
    country: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/au.png",
    country: "Australia",
    population: "91,657,312",
    region: "Aus",
    capital: "Canberra"
  },
 
  {
    image: "https://flagpedia.net/data/flags/w580/kr.png",
    country: "South Korea",
    population: "40,400,000",
    region: "Asia",
    capital: "Seoul"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/us.png",
    country: "United States of America",
    population: "323,947,000",
    region: "North America",
    capital: "Washington,D.C"
  }
];

    //Creating main container
    let div1 = document.createElement('div');
    div1.className = "maincontainer";
    document.body.appendChild(div1);

    //creating Image container
    let imagediv = document.createElement('div');
    imagediv.className="imageContainer";
    div1.appendChild(imagediv);

    
     let divbottom=document.createElement('div');
     divbottom.className="bottomContainer";
     div1.appendChild(divbottom);
    
     let country=document.createElement('div');
     country.className="country";
     divbottom.appendChild(country);

    
    

     for(i=0;i<countries.length;i++)
     {   let img=document.createElement('img');
         img.setAttribute("src",countries[i].image);
         img.className="image1";
         img.append(countries[i]);

         const list1 = document.createElement("ul");
         list1.className="unorderedList"+i;

         const listItem1 = document.createElement("li");
         listItem1.innerText = "Country :"+countries[i].country;  
         list1.append(listItem1);

         const listItem2 = document.createElement("li");
         listItem2.innerText = "population :"+countries[i].population;   
         list1.append(listItem2);

         const listItem3 = document.createElement("li");
         listItem3.innerText = "region :"+countries[i].region;   
         list1.append(listItem3);

         const listItem4 = document.createElement("li");
         listItem4.innerText = "captial :"+countries[i].capital;   
         list1.append(listItem4);

         imagediv.appendChild(img);
         country.appendChild(list1);

     }

   




