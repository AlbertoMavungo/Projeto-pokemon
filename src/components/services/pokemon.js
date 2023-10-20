import { baseUrl } from "./variables";

const createPokemon = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results
}
createPokemon()
const getPokemon = async () => {
    const results = await createPokemon();
    const pokemonDetails = await Promise.all(results.map(async pokemon => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
    }));

    return pokemonDetails;
}
getPokemon()

const getDetailsPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data;
};

const getAbilityDetails = async (id) => {
    const results = await getDetailsPokemon(id);
    const abilities = results.abilities;
    const abilityDetails = await Promise.all(abilities.map(async (ability) => {
        const abilityResponse = await fetch(ability.ability.url);
        const abilityData = await abilityResponse.json();
        return abilityData;
    }));
    return abilityDetails;
}

export { getPokemon, getDetailsPokemon, getAbilityDetails }
