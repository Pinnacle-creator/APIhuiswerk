    // stappenplan

    // 1. maak de zoek-knop en -veld in HTML
    // 2. maak een functie die verwijst naar de rest countries uri
    // 3.

    const dataFetchButton = document.getElementById("special-button");
    dataFetchButton.addEventListener("click", fetchData);

    const countryName = result.data.name
    console.log(result.data.name);

        async function fetchData() {
        try {
            const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
            const countryName = result.data.name
            console.log(result.data.name + "is situated in " + countryName)
            } catch (error) {
            console.error(error)

        }

    }



    //    fetchData();