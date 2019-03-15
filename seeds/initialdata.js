
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'Super Mario Bros', genre: 'Platformer', releaseYear: 1984},
        {id: 2, title: 'The Legend of Zelda', genre: 'RPG', releaseYear: 1985},
        {id: 3, title: 'Duck Hunt', genre: 'Shooter', releaseYear: 1984},
      ]);
    });
};
