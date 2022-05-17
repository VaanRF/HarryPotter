function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText 
}

function criaLinha(characters) {
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdSpecies = document.createElement("td");
    tdGender = document.createElement("td");
    tdHouse = document.createElement("td");
    tdDateOfBirth = document.createElement("td");
    tdPatronus = document.createElement("td");
    tdActor = document.createElement("td");
    tdNome.innerHTML = characters.name
    tdSpecies.innerHTML = characters.species
    tdGender.innerHTML = characters.gender
    tdHouse.innerHTML = characters.house
    tdDateOfBirth.innerHTML = characters.dateOfBirth
    tdPatronus.innerHTML = characters.patronus
    tdActor.innerHTML = characters.actor


    
    linha.appendChild(tdNome);
    linha.appendChild(tdSpecies);
    linha.appendChild(tdGender);
    linha.appendChild(tdHouse);
    linha.appendChild(tdDateOfBirth);
    linha.appendChild(tdPatronus);
    linha.appendChild(tdActor);
    return linha;
}

function main () {
    let data = fazGet("http://hp-api.herokuapp.com/api/characters")
    let characters = JSON.parse(data);
    console.log(characters)
    let tabela = document.getElementById("tabela");

    characters.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    //para cada usuario, uma linha

}
main()
