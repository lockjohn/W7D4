export const fetchAllPokemon = () => {
  return $.ajax({
      method: 'get',
      url: '/api/pokemon',
      dataType: 'json'
  });
};

export const fetchPoke = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/pokemon/${id}`

  });
};
