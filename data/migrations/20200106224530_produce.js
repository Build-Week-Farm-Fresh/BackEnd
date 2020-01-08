
exports.up = function(knex) {
    return knex.schema.createTable("produce", tbl => {
        tbl.increments("id");
        tbl
          .text("name")
          .unique()
          .notNullable();
        tbl.integer("price").notNullable();
        tbl.integer("quantity").notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("produce");
};
