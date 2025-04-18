import Email from "./components/svg/email.astro";
import Facebook from "./components/svg/facebook.astro";
import Instagram from "./components/svg/instagram.astro";
import MapPin from "./components/svg/mapPin.astro";
import Phone from "./components/svg/phone.astro";
import Xsocial from "./components/svg/xsocial.astro";
export const social_networks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/yourprofile",
    icon: Facebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourprofile",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourprofile",
    icon: Xsocial,
  },
];
export const contact = [
  // {
  //   icon: MapPin,
  //   title: "dirección",
  //   label: "0665 Broadway st. 10234 NY, USA",
  //   link: "https://www.google.com/maps/place/0665+Broadway+st.+10234+NY,+USA",
  // },
  {
    icon: Email,
    title: "Correo",
    label: "lexaegisasociados@gmail.com",
    link: "mailto:lexaegisasociados@gmail.com",
  },
  // {
  //   icon: Phone,
  //   title: "Teléfono",
  //   label: "11-2356-789-10",
  //   link: "tel:+11235678910",
  // },
];
