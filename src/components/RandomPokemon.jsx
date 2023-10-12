function RandomPokemon() {
    const randomNum = Math.floor((Math.random() * 151)+1)
    const pokemonUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`
    return (
        <div className='container'>
            <h1> Pokemon Number: {randomNum} </h1>
            <img src={pokemonUrl} alt='Pokemon'></img>
        </div>
    )

}

export default RandomPokemon;