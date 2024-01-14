function changeLanguage(lang) {
    fetch('locales/' + lang + '.json')
        .then(response => response.json())
        .then(data => {
            // Apply translations to your page elements
            // Example: document.getElementById('description').innerText = data.description;
            // You need to have corresponding IDs in your HTML and keys in your JSON files

            // Loop through all keys in the data object
            for (const key in data) {
                // Check if the webpage has an element with an ID matching the key
                if (data.hasOwnProperty(key) && document.getElementById(key)) {
                    // Update the content of the element
                    document.getElementById(key).innerText = data[key];
                }
            }
        })
        .catch(error => {
            console.error('Error fetching language file:', error);
        });
}

// Example of how you might use this function:
// Assuming you have an HTML element with id="description"
// and your JSON file has a key "description" for each language

// Example JSON content (en.json):
// {
//     "description": "This is the apartment description in English."
// }

// The corresponding element in HTML:
// <div id="description">This is the apartment description in English.</div>

// When the user clicks to change the language, the content of 
// the div with id="description" will update to the value from the JSON file.

