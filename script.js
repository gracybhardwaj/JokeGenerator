document.addEventListener('click', event => {
    const jokeDisplay = document.getElementById('jokeDisplay');

    // Function to fetch jokes by category
    function fetchJokeByCategory(category) {
      const ENDPOINT_URL = `https://icanhazdadjoke.com/search?term=${category}`;
      const options = { 
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      };

      fetch(ENDPOINT_URL, options)
        .then(response => response.json())
        .then(data => {
          console.log(data);

          // Display a random joke from the category
          if (data.results && data.results.length > 0) {
            const randomJoke = data.results[Math.floor(Math.random() * data.results.length)];
            jokeDisplay.innerText = randomJoke.joke;
          } else {
            jokeDisplay.innerText = 'No jokes found for this category.';
          }
        })
        .catch(error => {
          console.error('Error fetching joke:', error);
        });
    }

    if (event.target.id === 'button') {
      // Fetch a random dad joke
      const ENDPOINT_URL = 'https://icanhazdadjoke.com/';
      const options = { 
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      };

      fetch(ENDPOINT_URL, options)
        .then(response => {
		    return response.json()
	    })
        .then(data => {
          console.log(data);
          jokeDisplay.innerText = data.joke;
        })
        .catch(error => {
          console.error('Error fetching joke:', error);
        });
    } 
    
    else if (event.target.id === 'hipsterButton') {
      // Fetch a hipster joke
      fetchJokeByCategory('hipster');
    } 
    
    else if (event.target.id === 'historyButton') {
      // Fetch a history joke
      fetchJokeByCategory('history');
    } 
    
    else if (event.target.id === 'beesButton') {
      // Fetch a bees joke
      fetchJokeByCategory('bees');
    }
  });