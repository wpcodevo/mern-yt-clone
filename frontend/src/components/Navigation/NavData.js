const NavBarData = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Products',
    path: '/products',
  },
  {
    title: 'Shop',
    path: '/shop',
    icon: <i className='fas fa-chevron-down'></i>,
    class: 'desktopLink',
    label: 'showMega',

    megaMenu: [
      {
        title: 'Shop Layout',
        subItem: [
          {
            title: 'Shop With Background',
            path: '/',
          },
          {
            title: 'Shop Mini Categories',
            path: '/',
          },
          {
            title: 'Shop Only Categories',
            path: '/',
          },
          {
            title: 'Shop Icon Categories',
            path: '/',
          },
        ],
      },
      {
        title: 'Product Layout',
        subItem: [
          {
            title: 'Layout Zoom',
            path: '/',
          },
          {
            title: 'Layout Scroll',
            path: '/',
          },
          {
            title: 'Layout Sticky',
            path: '/',
          },
          {
            title: 'Layout Sticky 2',
            path: '/',
          },
        ],
      },
      {
        title: 'Filter Layout',
        subItem: [
          {
            title: 'Sidebar',
            path: '/',
          },
          {
            title: 'Filter Default',
            path: '/',
          },
          {
            title: 'Filter Drawer',
            path: '/',
          },
          {
            title: 'Filter Dropdown',
            path: '/',
          },
        ],
      },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Vendors',
    path: '/',
    icon: <i className='fas fa-chevron-down'></i>,
    label: 'showdrop1',
    class: 'desktopLink',

    subMenu: [
      {
        title: 'Vendor Store listings',
        path: '/',
      },
      {
        title: 'Store Details',
        path: '/',
      },
    ],
  },
  {
    title: 'Page',
    path: '/',
    icon: <i className='fas fa-chevron-down'></i>,
    label: 'showdrop2',
    class: 'desktopLink',

    subMenu: [
      {
        title: 'About',
        path: '/',
      },
      {
        title: 'Contact',
        path: '/',
      },
      {
        title: 'Faq',
        path: '/',
      },
      {
        title: 'Page 404',
        path: '/',
      },
    ],
  },
]

export default NavBarData
