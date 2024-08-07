let searchable = 
    {'Bcomp':'Bachalor of computing',
    'BIT':'Bacholor of information technology',
    'DIT':'Deploma of IT',
    'CIT':'Certificate of IT'}
  

  let keys = Object.keys(searchable);
  let courses = Object.values(searchable);
  let arr = Object.entries(searchable);
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    
  
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = arr.filter((item) => {
        return item[1].toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li><a href='course.html#${item[0]}' target="_top">${item[1]}</a></li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }

 