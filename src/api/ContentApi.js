// Placeholder for real API

let id = 0;

const getRandomImage = () => {
  return `https://picsum.photos/1400/940/?image=${~~(Math.random() * 1000)}`
};

const ARTICLES = [
  { id: id++, image: getRandomImage(), name: "bol.com", title: "A summer island in the Netherlands" },
  { id: id++, image: getRandomImage(), name: "Kempen", title: "Not some average banking website" },
  { id: id++, image: getRandomImage(), name: "Gemeentemuseum", title: "A 100 years of Mondriaan & De Stijl" },
  { id: id++, image: getRandomImage(), name: "Philips", title: "Beautiful design meets innovative technology" },
  { id: id++, image: getRandomImage(), name: "Florensis", title: "Rethinking the entire online ecosystem" },
  { id: id++, image: getRandomImage(), name: "Microsoft", title: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels" },
  { id: id++, image: getRandomImage(), name: "O'Neill", title: "Integrating existing content into O’Neill’s new e-commerce platform" },
  { id: id++, image: getRandomImage(), name: "Be Lighting", title: "Delivering clarity on a global scale" },
  { id: id++, image: getRandomImage(), name: "Tui", title: "Swipe to find your next holiday destination" }
];

const ContentApi = {
  fetchArticles: () => {
    console.log("Fetching articles...");
    return ARTICLES;
  }
};

export default ContentApi;