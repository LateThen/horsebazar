import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Buy Horses',
    path: '/products',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Posts',
    path: '/mypost',
    icon: icon('ic_user'),
  },
  {
    title: 'Create Post',
    path: '/createpost',
    icon: icon('ic_cart'),
  },

  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
  title: 'register',
  path: '/register',
  icon: icon('ic_lock'),
  className: 'config-navigation-register-item',
},


];

export default navConfig;
