const mainlink = "https://mulearn.org";
export const links = [
  {
    head: -1,
    name: "About",
    submenu: true,
    sublinks: [
      {
        name: "Key Pages",
        submenu: true,
        sublinks: [
          {
            name: "Our Team",
            submenu: false,
            sublinks: [],
            link: mainlink + "/team",
            foreign: false,
          },
        ],
      },
      {
        name: "Partners",
        submenu: true,
        sublinks: [
          {
            name: "Community Partners",
            submenu: false,
            sublinks: [],
            link: mainlink + "/community-partners",
            foreign: false,
          },
          {
            name: "Company Partners",
            submenu: false,
            sublinks: [],
            link: mainlink + "/company-partners",
            foreign: false,
          },
        ],
      },
      {
        name: "Leaderboard",
        submenu: true,
        sublinks: [
          {
            name: "Overall Leaderboards",
            link: mainlink + "/leaderboard",
          },
          {
            name: "Monthly Leaderboards",
            link: mainlink + "/leaderboard/monthly",
          },
        ],
      },
      {
        name: "Media",
        submenu: true,
        sublinks: [
          {
            name: "Gallery",
            submenu: false,
            sublinks: [],
            link: mainlink + "/gallery",
            foreign: false,
          },
          {
            name: "News",
            submenu: false,
            sublinks: [],
            link: mainlink + "/news",
            foreign: false,
          },
          {
            name: "Blogs",
            submenu: false,
            sublinks: [],
            link: mainlink + "/blogs",
            foreign: false,
          },
        ],
      },
      {
        name: "Events",
        submenu: true,
        sublinks: [
          {
            name: "Global Calendar",
            submenu: false,
            sublinks: [],
            link: mainlink + "/calendar",
            foreign: false,
          },
          {
            name: "Announcements",
            submenu: false,
            sublinks: [],
            link: mainlink + "/announcements",
            foreign: false,
          },
          {
            name: "Weekly Events",
            submenu: false,
            sublinks: [],
            link: mainlink + "/events",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Programs",
    submenu: true,
    sublinks: [
      {
        head: 1,
        name: "Flagship",
        submenu: true,
        sublinks: [
          {
            name: "YIP",
            submenu: false,
            sublinks: [],
            link: mainlink + "/yip",
            foreign: true,
          },
          {
            name: "Foundation Program",
            submenu: false,
            sublinks: [],
            link: "https://foundation.mulearn.org",
            foreign: true,
          },
          {
            name: "Art of Teaching",
            submenu: false,
            sublinks: [],
            link: mainlink + "/artofteaching",
            foreign: false,
          },
        ],
      },
      {
        head: 1,
        name: "Others",
        submenu: true,
        sublinks: [
          {
            name: "Wiki Syllabus",
            submenu: false,
            sublinks: [],
            link: mainlink + "/wikisyllabus",
            foreign: false,
          },
          {
            name: "Hacktober Fest",
            submenu: false,
            sublinks: [],
            link: mainlink + "/hacktoberfest",
            foreign: false,
          },
          {
            name: "Build For Team",
            submenu: false,
            sublinks: [],
            link: mainlink + "/BuildForTeam",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Campus Chapters",
    submenu: true,
    sublinks: [
      {
        head: 2,
        name: "The Chaptership",
        submenu: true,
        link: mainlink + "/campuschapters",
        sublinks: [
          {
            name: "Campus Logo Generator",
            link: mainlink + "/campuschapters/#logo-generator",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Success Stories",
            link: mainlink + "/successstories",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Interest Group",
    submenu: true,
    sublinks: [
      {
        head: 3,
        name: "Interest Groups",
        submenu: true,
        link: "/",
        sublinks: [
          {
            name: "Android Development",
            link: "/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Artifical Intelligence",
            link: "/ai",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Civil Engineering",
            link: "/civil",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Cyber Security",
            link: "/cybersec",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "IoT",
            link: "/iot",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Product Management",
            link: "/pm",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "UX",
            link: "/ux",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Web Development",
            link: "/web",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Bootcamps",
        submenu: true,
        link: "/bootcamps",
        sublinks: [
          {
            name: "Android",
            link: "/bootcamps/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Artificial Intelligence",
            link: "/bootcamps/ai",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "CTF",
            link: "/bootcamps/ctf",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Flutter",
            link: "/bootcamps/flutter",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Rust",
            link: "/bootcamps/rust",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "JavaScript",
            link: "/bootcamps/javascript",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Python",
            link: "/bootcamps/python",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Practice",
        submenu: true,
        sublinks: [
          {
            name: "OpenSource Projects",
            link: "/opensource",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Problem Shelf",
            link: "/problemshelves",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Challenges",
            link: "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Courses",
            link: "/courses",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "API Setu",
            link: "/apisetu",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Learning Circles",
        submenu: true,
        sublinks: [
          {
            name: "Create Circle",
            link: "/create",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Join Circles",
            link: "/join",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Search",
        submenu: true,
        sublinks: [
          {
            name: "Mentor Directory",
            link: "/mentors",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Existing Circles",
            link: "/searchcircles",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
];
