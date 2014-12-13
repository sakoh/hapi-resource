module.exports = function(config) {

  if(!config.namespace) config.namespace = '';

  return [

    {
      path: config.namespace + '/' + config.name + 's',
      method: 'GET',
      handler: config.controller.index
    },

    {
      path: config.namespace + '/' + config.name + 's/{id}',
      method: 'GET',
      handler: config.controller.show
    },

    {
      path: config.namespace + '/' + config.name + 's',
      method: 'POST',
      handler: config.controller.create
    },

    {
      path: config.namespace + '/' + config.name + 's/{id}',
      method: 'PUT',
      handler: config.controller.update
    },

    {
      path: config.namespace + '/' + config.name + 's/{id}',
      method: 'DELETE',
      handler: config.controller.destroy
    }

  ];

}
