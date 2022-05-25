function Search(mass, whatToSearch, isShortFilm) {
  let result = [];
  whatToSearch.toLowerCase().toString();
  mass.forEach((i) => {
    if (!i.nameRU) {
      return;
    } else if (i.nameRU.toString().toLowerCase().includes(whatToSearch)) {
      result.push(i);
    }
    if (!i.description) {
      return;
    } else if (i.description.toString().toLowerCase().includes(whatToSearch)) {
      result.push(i);
    }
    if (!i.year) {
      return;
    } else if (i.year.includes(whatToSearch)) {
      result.push(i);
    }
    if (!i.country) {
      return;
    } else if (i.country.toString().toLowerCase().includes(whatToSearch)) {
      result.push(i);
    }
  });

  if(isShortFilm) {
    const newResult = result.filter(i => i.duration < 40)
    const res = new Set(newResult);
    return [...res];
  }

  const newResult = new Set(result);
  return [...newResult];
}

export default Search;
