//https://swapi.dev/api/people/

const getPeopleStarWars = async (id) => {
  const url = "https://swapi.dev/api/people/" + id;
  const result = await fetch(url).then((request) => request.json());
  return {
    name: result.name,
    skinColor: result.skin_color,
    hairColor: result.hair_color,
    height: result.height,
  };
};

const get10PeopleStarWars = async () => {
  const people = [];
  for (let i = 1; i <= 10; i++) {
    people.push(await getPeopleStarWars(i));
  }
  console.log(people);
};

get10PeopleStarWars();
