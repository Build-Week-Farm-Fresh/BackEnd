exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("produce")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("produce").insert([
        { name: "Apple", price: 1.99, quantity: 1, farmer_id: 1 },
        { name: "Pear", price: 1.89, quantity: 1, farmer_id: 1 },
        { name: "Potato", price: 0.99, quantity: 1, farmer_id: 1 },
        { name: "Broccoli", price: 0.5, quantity: 1, farmer_id: 1 },
        { name: "Pumpkin", price: 3.99, quantity: 1, farmer_id: 1 }
      ]);
    });
};
