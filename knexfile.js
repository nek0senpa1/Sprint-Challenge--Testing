// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './duhBee/Dev.sqlite3'
    },
    useNullAsDefault: true,
  },

  
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './duhBee/Test.sqlite3',
    },
    useNullAsDefault: true,
  }

};

