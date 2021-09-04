const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");

test("zookeeper object is created", () => {
  const zookeeper = createNewZookeeper(
    { name: "Emmy", id: "7" },
    zookeepers
  );

  expect(zookeeper.name).toBe("Emmy");
  expect(zookeeper.id).toBe("7");
});

test("filters by query", () => {
  const startingZookeepers = [
    {
    id: "8",
    name: "Lernantino",
    age: 19,
    favoriteAnimal: "Business Cat"
    },
    {
    id: "6",
    name: "Amiko",
    age: 43,
    favoriteAnimal: "Quokkas"
    },
  ];

  const updatedZookeepers = filterByQuery({ age: 19 }, startingZookeepers);

  expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
  const startingZookeepers = [
    {
    id: "8",
    name: "Lernantino",
    age: 19,
    favoriteAnimal: "Business Cat"
    },
    {
    id: "6",
    name: "Amiko",
    age: 43,
    favoriteAnimal: "Quokkas"
    },
  ];

  const result = findById("8", startingZookeepers);

  expect(result.name).toBe("Lernantino");
});

test("validates age", () => {
    const zookeeper = {
        id: "8",
        name: "Lernantino",
        age: 19,
        favoriteAnimal: "Business Cat",
    };

    const invalidZookeeper = {
        id: "8",
        name: "Lernantino",
        age: "19",
        favoriteAnimal: "Business Cat",
    };

  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});