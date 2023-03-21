// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(Ralph){
  const cats = ["Milo","Otis","Garfield"];
  cats.push("Ralph")
  console.log(cats.length);

return cats["Milo","Otis","Garfield","Ralph"];
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat(Bob){
    const cats = ["Milo","Otis","Garfield"]
    cats.unshift("Bob")
    console.log(cats.length);

    return cats["Bob","Milo","Otis","Garfield"];
  }
  
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(Garfield){
    const cats = ["Milo","Otis","Garfield"];
    cats.pop("Garfield");
    console.log(cats.length);

    return cats["Milo","Otis"];
  }
  
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveFirstCat(Milo){
    const cats = ["Milo","Otis","Garfield"];
    cats.shift("Milo");
    console.log(cats.length);

    return cats["Otis","Garfield"]
  }
  
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function appendCat(Name){
    const cats=["Milo","Otis","Garfield"];
    cats.concat("Name");
    console.log(cats.length);

    return cats["Name","Milo","Otis","Garfield"];
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat(Name){
    const cats=["Milo","Otis","Garfield"];
    cats.concat("Name");
    console.log(cats.length);

    return cats["Milo", "Otis", "Garfield","Name"];
 }

 beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeLastCat(Garfield){
    const cats=["Milo","Otis","Garfield"];
    const newcats=cats.slice;
    console.log(newcats);

    return newcats["Milo","Otis"];
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat(Milo){
    const cats=["Milo","Otis","Garfield"];
    const newcats=cats.splice(0,1,"Milo");
    console.log(newcats);
    
    return newcats["Otis","Garfield"];

  }