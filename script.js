const key = '9f0d5d7654dde8f0038067ec85c86a5b';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=9f0d5d7654dde8f0038067ec85c86a5b';

//  fetch(baseURL)
//    .then((data) =>{ console.log('response', data.json())
//    })
//    .catch((error) => {  
//        console.log(error);
//    });


  const requestCity = async (city) => {
      const baseURL ='http://api.openweathermap.org/data/2.5/weather'
      const query = `?q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query); 

      const data = await response.json();
      return data;
  }
  

