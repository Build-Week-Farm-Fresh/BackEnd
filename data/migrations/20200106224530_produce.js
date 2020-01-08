exports.up = function(knex) {
  return knex.schema.createTable("produce", tbl => {
    tbl.increments("id");
    tbl
      .text("name")
      .unique()
      .notNullable();
    tbl.decimal("price").notNullable();
    tbl.integer("quantity").notNullable();
    tbl
      .integer("farmer_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("produce");
};
