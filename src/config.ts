export const SITE = {
  website: "https://everfacture.github.io/", // GitHub Pages domain
  author: "Ibby",
  profile: "https://github.com/everfacture",
  desc: "Memoir of building, life, and the headaches in between.",
  title: "Hustle & Headaches",
  ogImage: "https://ibby.is-a.dev/og.png",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/everfacture/everfacture.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Jakarta",
} as const;
