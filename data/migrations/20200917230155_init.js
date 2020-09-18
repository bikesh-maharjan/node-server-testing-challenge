exports.up = function (knex) {
  return knex.schema.createTable("foods", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("foods");
};
