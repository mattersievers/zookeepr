const fs = require('fs');

const{
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal
} = require("../lib/animals");

const {animals} = require("../data/animals");

jest.mock('fs');

test("animal object created", () =>{
    const animal = createNewAnimal(
        {name: "Doofus", id: "rt25djaja943"},
        animals
    );

    expect(animal.name).toBe("Doofus");
    expect(animal.id).toBe("rt25djaja943");
});

test("filters by query", () => {
    const startingAnimals = [
      {
        id: "pf98",
        name: "Robert",
        species: "aardvark",
        diet: "omnivore",
        personalityTraits: ["loving", "goofy"],
      },
      {
        id: "prgt24",
        name: "Samuel",
        species: "tiger",
        diet: "carnivore",
        personalityTraits: ["zany", "hungry", "anxious"],
      },
    ];
  
    const updatedAnimals = filterByQuery({ species: "aardvark" }, startingAnimals);
  
    expect(updatedAnimals.length).toEqual(1);
  });
  
test("finds by id", () => {
const startingAnimals = [
    {
        id: "pf98",
        name: "Robert",
        species: "aardvark",
        diet: "omnivore",
        personalityTraits: ["loving", "goofy"],
    },
    {
        id: "prgt24",
        name: "Samuel",
        species: "tiger",
        diet: "carnivore",
        personalityTraits: ["zany", "hungry", "anxious"],
    },
];
  
    const result = findById("pf98", startingAnimals);
  
    expect(result.name).toBe("Robert");
  });
  
  test("validates personality traits", () => {
    const animal = {
        id: "pf98",
        name: "Robert",
        species: "aardvark",
        diet: "omnivore",
        personalityTraits: ["loving", "goofy"],
    };
  
    const invalidAnimal = {
        id: "pf98",
        name: "Robert",
        species: "aardvark",
        diet: "omnivore",
    };
  
    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });