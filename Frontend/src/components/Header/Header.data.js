// export const NAV_CONTACT = [
//   {
//     link: "/contact-us",
//     label: "تواصل معنا",
//     isDesktop: true,
//     isMobile: true,
//   },
// ];

export const headerDataAR = {
  NAV_LINKS: [
    {
      link: "/about",
      label: "واحة عبدالرحمن",
      isDesktop: true,
      isMobile: true,
      subLinks: [
        { link: "/about#story", isDesktop: true, isMobile: true, label: "قصة عبدالرحمن", },
        { link: "/about#goals", isDesktop: true, isMobile: false, label: "أهدافنا", },
        { link: "/about#members", isDesktop: true, isMobile: false, label: "أعضاء مجلس الإدارة", }
      ]
    },
    {
      link: "/child-life",
      label: "حياة الطفل",
      isDesktop: true,
      isMobile: true,
      subLinks: [
        { link: "/child-life#programs", isDesktop: true, isMobile: true, label: "قصة عبدالرحمنبرامج حياة الطفل", },
        { link: "/child-life#specialists", isDesktop: true, isMobile: false, label: "أخصائيون حياة الطفل", },
      ]
    },
    {
      link: "/media",
      label: "الميديا",
      isDesktop: true,
      isMobile: true,
    },
    {
      link: "/contact",
      label: "تواصل معنا",
      isDesktop: true,
      isMobile: true,
    },
  ],
  latestNews:
    "آخر أخبارنا ومقالاتنا ومواردنا ، سنرسلها إلى صندوق الوارد الخاص بك أسبوعيًا.",
};

export const headerDataEN = {
  NAV_LINKS: [
    {
      link: "/about",
      label: "Abdulrahman Oasis",
      isDesktop: true,
      isMobile: true,
      subLinks: [
        { link: "/about#story", isDesktop: true, isMobile: true, label: "Abdulrahman's story", },
        { link: "/about#goals", isDesktop: true, isMobile: false, label: "Our Mission", },
        { link: "/about#members", isDesktop: true, isMobile: false, label: "Board of Directors", }
      ]
    },
    {
      link: "/child-life",
      label: "Child Life",
      isDesktop: true,
      isMobile: true,
      subLinks: [
        { link: "/child-life#programs", isDesktop: true, isMobile: true, label: "Child Life Programs", },
        { link: "/child-life#specialists", isDesktop: true, isMobile: false, label: "Child Life Specialists", },
      ]
    },
    {
      link: "/media",
      label: "Media",
      isDesktop: true,
      isMobile: true,
    },
    {
      link: "/contact",
      label: "Contact Us",
      isDesktop: true,
      isMobile: true,
    },
  ],
  latestNews:
    "Our latest news, articles and resources, delivered to your inbox on a weekly basis.",
};
