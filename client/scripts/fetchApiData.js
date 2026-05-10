import axios from "axios";
import fs from "fs";

async function fetchNASA () {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=RL0TZD0VwpxRc5G8Hb2DtoqMMRzGWqwjN2qZSHwG`
        );

        fs.writeFileSync(
            "output/apiResults.json",
            JSON.stringify( response.data, null, 2 )
        );

        console.log( "NASA data saved!" );
    } catch ( error ) {
        console.error( "Error fetching NASA data:", error );
    }
}

fetchNASA();