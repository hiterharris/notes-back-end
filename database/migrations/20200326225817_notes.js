exports.up = function(knex) {
    return knex.schema.createTable('notes', notes => {
      notes.increments();
  
      notes
        .string('note', 128)
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notes');
  };
  