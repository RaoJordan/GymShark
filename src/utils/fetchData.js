export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0f9dcc8754msh170c38840dd0b8bp150aa8jsn25f2a0a5663d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0f9dcc8754msh170c38840dd0b8bp150aa8jsn25f2a0a5663d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  