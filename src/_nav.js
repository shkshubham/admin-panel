export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info'
      },
    },
    {
      name: 'Dish',
      url: '/dish',
      icon: 'icon-food',
      children: [
        {
          name: 'List Dish',
          url: '/dish/list',
          icon: 'icon-list'
        },
        {
          name: 'Create Show',
          url: '/dish/create',
          icon: 'icon-plus'
        }
      ]
    }
  ],
};
