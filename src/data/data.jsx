export const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [{ id: 3, name: "index.html", isFolder: false, items: [] }],
    },
    {
      id: 4,
      name: "src",
      isFolder: true,
      items: [{ id: 5, name: "components", isFolder: true, items: [
        {
            id: 6,
            name: "hero.jsx",
            isFolder: false,
            items: [],
          },
          {
            id: 7,
            name: "navbar.jsx",
            isFolder: false,
            items: [],
          },
      ] }],
    },
  ],
};
