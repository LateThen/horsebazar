import SvgColor from "../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "Buy Horses",
    path: "/products",
    icon: icon("ic_analytics"),
  },
  {
    title: "Create Post",
    path: "/createpost",
    icon: icon("ic_cart"),
  },
];

export default navConfig;
