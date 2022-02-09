import Banner from "../Sections/Banner/Banner";
import Navbar from "../Sections/Navbar/Navbar";
import Videos from "../Sections/Videos/Videos";
import Pricing from "../Sections/Pricing/Pricing";

export const TOTAL_SCREENS = [
  {
    screen_name: "Navbar",
    component: Navbar,
  },
  {
    screen_name: "Banner",
    component: Banner,
  },
  {
    screen_name: "Videos",
    component: Videos,
  },
  {
    screen_name: "Pricing",
    component: Pricing,
  },
];
