    // stappenplan

    // 1. maak de zoek-knop en -veld in HTML
    // 2. maak een functie die verwijst naar de rest countries uri
    // 3.

    const dataFetchButton = document.getElementById("special-button");
    dataFetchButton.addEventListener("click", fetchData);


        async function fetchData() {
        try {
            const result = await axios.get('https://restcountries.eu/rest/v2/name/aruba');

            console.log(result.data[0]);
            console.log(result.data[0].name + " is situated in " + result.data[0].subregion + ". It has a population of " + result.data[0].population + " people. The capital is " + result.data[0].capital +".");
            const currencies = valuta(result.data[0].currencies);
            console.log(currencies);
            } catch (error) {
            console.error(error)

        }

    }


    // const banaan = ["Euro", "Dollar"]

    // 1. declareer een functie
    // 2. functie verwacht een array met valuta's
    // 3. de functie maakt een string van de valuta's ongeacht of het er een of twee zijn.
    // 4. zorg dat de string gereturned wordt
    // 5. test of de functie werkt door hem aan te roepen en te loggen in de  console

    function valuta (array) {

        if (array.length === 1) {
            return "And you can pay with " + array[0].symbol;
        } else return "And you can pay with " + array[0].symbol + " and " + array[1].symbol;
    }
    // const result = valuta(banaan);
        // console.log(result);


    //    fetchData();