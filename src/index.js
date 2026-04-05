async function getData(cidade) {
    try {
        const apiKey = "KW4EXQ3L6YWAHG5ERXRAEZRMA";
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cidade}?unitGroup=metric&key=${apiKey}&contentType=json`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        console.log("Dados completos da API:", result);
        console.log(`Clima atual em ${result.address}:`);
        console.log(`Temperatura: ${result.currentConditions.temp}`);
        console.log(`Condicao: ${result.currentConditions.conditions}`);
    } catch (error) {
        console.error(error.message);
    }
}

getData("Rio de Janeiro");
