export const company = {
  name: "Powszechna Spółdzielnia Spożywców „Społem” w Białymstoku",
  short: "PSS Społem Białystok",
  address: "Rynek Kościuszki 15",
  city: "15-950 Białystok",
  krs: "0000028056",
  nip: "542-000-07-71",
  regon: "001052654",
  president: "mgr inż. Janusz Kulesza",
  vice: "mgr Elżbieta Chalecka",
  founded: 1897,
  employees: "1700+",
  links: {
    eshop: "https://esklep.spolembialystok.pl/",
    gastro: "https://bialostockagastronomia.pl/",
    loyalty: "https://spolemznaczyrazem.pl/moje-konto",
    facebook: "https://www.facebook.com/SpolemBialystok/",
  },
  phones: {
    eshop: "693 503 504",
    gastro: "603 503 504",
    loyalty: "781 600 100",
    hr: "85 742 56 03",
    bakeryB2b: "85 652 71 39",
    bakeryMobile: "601 284 233",
    cakes: "505 605 611",
  },
  emails: {
    eshop: "esklep@spolem.bialystok.pl",
    loyalty: "lojalnosc@spolem.bialystok.pl",
    iod: "iod@spolem.bialystok.pl",
    office: "sekretariat@spolem.bialystok.pl",
    hr: "kadry@spolem.bialystok.pl",
    marketing: "marketing@spolem.bialystok.pl",
  },
};

export type PlaceType = "supermarket" | "sklep" | "bar" | "agd" | "central";

export type Place = {
  slug: string;
  name: string;
  type: PlaceType;
  address: string;
  phones: string[];
  hoursWeek: string;
  hoursSat: string;
  hoursSun?: string;
  tags?: string[];
};

export const stores: Place[] = [
  { slug: "ken", name: "Supermarket KEN", type: "supermarket", address: "ul. Kołłątaja 50", phones: ["85 664 74 76", "85 664 74 77"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00", tags: ["bar"] },
  { slug: "boboli", name: "Supermarket Boboli", type: "supermarket", address: "ul. Św. Andrzeja Boboli 95", phones: ["85 741 15 46"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00" },
  { slug: "pogodny", name: "Supermarket Pogodny", type: "supermarket", address: "ul. Pogodna 6", phones: ["85 742 60 22"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00", tags: ["bar"] },
  { slug: "stroma", name: "Supermarket Stroma", type: "supermarket", address: "ul. Stroma 1G", phones: ["663 840 000"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00", tags: ["bar", "drive"] },
  { slug: "zodiak", name: "Supermarket Zodiak", type: "supermarket", address: "ul. Wrocławska 5", phones: ["85 662 79 92"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00", tags: ["bar"] },
  { slug: "wars", name: "Supermarket Wars", type: "supermarket", address: "ul. Warszawska 79", phones: ["85 740 61 13"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00" },
  { slug: "mieszko", name: "Supermarket Mieszko", type: "supermarket", address: "ul. Mieszka I 6", phones: ["85 654 48 90"], hoursWeek: "6:00–21:00", hoursSat: "6:30–21:00" },
  { slug: "tecza", name: "Supermarket Tęcza", type: "supermarket", address: "ul. Brzechwy 3", phones: ["85 675 54 16"], hoursWeek: "6:00–21:00", hoursSat: "6:30–21:00", tags: ["bar"] },
  { slug: "bazar", name: "Supermarket Bazar", type: "supermarket", address: "ul. Bema 89/2", phones: ["85 744 09 89"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00" },
  { slug: "kometa", name: "Supermarket Kometa", type: "supermarket", address: "ul. Kard. Wyszyńskiego 6", phones: ["85 744 49 47"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00" },
  { slug: "opalek", name: "Supermarket Opałek", type: "supermarket", address: "ul. M.C. Skłodowskiej 14B", phones: ["85 742 06 41", "693 503 504"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00", tags: ["odbiór e-sklepu"] },
  { slug: "bojary", name: "Supermarket Bojary", type: "supermarket", address: "ul. Słonimska 2/1", phones: ["85 740 33 85"], hoursWeek: "6:00–21:00", hoursSat: "7:00–21:00" },
  { slug: "wygoda", name: "Supermarket Wygoda", type: "supermarket", address: "ul. Traugutta 1", phones: ["85 675 39 76"], hoursWeek: "6:00–20:00", hoursSat: "6:30–20:00" },
  { slug: "gaj", name: "Supermarket Gaj", type: "supermarket", address: "ul. Gajowa 68", phones: ["85 662 94 79"], hoursWeek: "6:00–21:00", hoursSat: "6:30–21:00" },
  { slug: "delikatesy", name: "Delikatesy", type: "supermarket", address: "Rynek Kościuszki 15", phones: ["85 744 27 16"], hoursWeek: "6:30–21:00", hoursSat: "7:00–21:00" },
  { slug: "narewska", name: "Sklep Narewska", type: "sklep", address: "ul. Narewska 5", phones: ["85 664 74 80"], hoursWeek: "6:00–19:00", hoursSat: "7:00–19:00" },
  { slug: "zwyciestwa", name: "Sklep Zwycięstwa", type: "sklep", address: "ul. Zwycięstwa 25", phones: ["85 664 92 61"], hoursWeek: "6:00–20:00", hoursSat: "7:00–20:00" },
  { slug: "wesola", name: "Sklep Wesoła", type: "sklep", address: "ul. Wesoła 18", phones: ["85 724 65 61"], hoursWeek: "6:00–20:00", hoursSat: "7:00–20:00" },
  { slug: "dojlidy", name: "Sklep Dojlidy Fabryczne", type: "sklep", address: "ul. Dojlidy Fabryczne 8", phones: ["85 743 41 88"], hoursWeek: "6:30–21:00", hoursSat: "6:30–21:00" },
  { slug: "broniewskiego", name: "Sklep Broniewskiego", type: "sklep", address: "ul. Broniewskiego 4", phones: ["85 664 92 30"], hoursWeek: "6:00–20:00", hoursSat: "7:00–18:00" },
  { slug: "pietrasze", name: "Sklep Pietrasze", type: "sklep", address: "ul. Pietrasze 2", phones: ["85 675 54 15"], hoursWeek: "6:30–21:00", hoursSat: "6:30–21:00" },
  { slug: "dukat", name: "Sklep Dukat", type: "sklep", address: "ul. Niedźwiedzia 26", phones: ["85 740 60 35"], hoursWeek: "6:30–20:00", hoursSat: "7:00–19:00" },
  { slug: "jubileuszowy", name: "Sklep Jubileuszowy", type: "sklep", address: "al. Piłsudskiego 2", phones: ["85 652 70 83"], hoursWeek: "6:00–20:00", hoursSat: "7:00–17:00" },
  { slug: "central", name: "Dom Handlowy Central", type: "central", address: "ul. M.C. Skłodowskiej 2/1", phones: ["85 742 24 71"], hoursWeek: "9:00–19:00", hoursSat: "9:00–18:00", tags: ["Eleganza", "AGD"] },
  { slug: "hermes-agd", name: "Hermes AGD", type: "agd", address: "ul. Zagórna 10", phones: ["85 653 17 46"], hoursWeek: "9:30–17:30", hoursSat: "8:30–14:30" },
];

export const bars: Place[] = [
  { slug: "podlasie", name: "Bar Podlasie", type: "bar", address: "Rynek Kościuszki 15", phones: ["85 742 25 04"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "topolanka", name: "Bar Topolanka", type: "bar", address: "ul. Wasilkowska 22/24", phones: ["85 654 59 12"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "slowianski", name: "Bar Słowiański", type: "bar", address: "ul. Piastowska 11", phones: ["85 742 56 08"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "hermes", name: "Bar Hermes", type: "bar", address: "ul. Zagórna 10", phones: ["85 652 66 99", "85 664 32 13"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "tecza-bar", name: "Bar Tęcza", type: "bar", address: "ul. Brzechwy 3", phones: ["85 652 67 53"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "zodiak-bar", name: "Bar Zodiak", type: "bar", address: "ul. Wrocławska 5", phones: ["85 742 84 12"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "pogodny-bar", name: "Bar Pogodny", type: "bar", address: "ul. Pogodna 6", phones: ["85 662 77 56"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "ken-bar", name: "Bar Ken", type: "bar", address: "ul. Kołłątaja 50", phones: ["85 652 71 89"], hoursWeek: "potwierdź telefonicznie", hoursSat: "potwierdź telefonicznie" },
  { slug: "stroma-bar", name: "Bar Stroma", type: "bar", address: "ul. Stroma 1G", phones: ["663 840 000"], hoursWeek: "8:00–19:30", hoursSat: "8:00–19:30", hoursSun: "10:00–18:00", tags: ["drive", "72 miejsca"] },
];

export const suburbs = [
  "Grabówka", "Zaścianki", "Kleosin", "Księżyno", "Ignatki", "Wasilków",
  "Sobolewo", "Sowlany", "Osowicze", "Izabelin", "Olmonty", "Klepacze",
  "Krupniki", "Porosły", "Halickie", "Stanisławowo", "Kuriany", "Sienkiewicze",
  "Hryniewicze", "Sikorszczyzna", "Śródlesie", "Łyski", "Solniczki",
];

export const news = [
  { slug: "otwarcie-stroma", date: "2025-01-30", title: "Supermarket i bar Stroma już otwarte", lead: "Na Słonecznym Stoku ruszył kompleks handlowo-gastronomiczny z oknem drive.", body: "Przy ul. Stromej 1G działa supermarket o powierzchni ponad 650 m² oraz bar z 72 miejscami i okienkiem dla kierowców." },
  { slug: "karta-klienta", date: "2025-09-01", title: "Program Społem znaczy razem", lead: "Zbieraj punkty w sklepach i wymieniaj je na e-bony.", body: "Za każde wydane 5 zł otrzymujesz 1 punkt. 200 punktów to e-bon 10 zł, 400 punktów — e-bon 30 zł." },
  { slug: "pieczywo-na-zakwasie", date: "2026-02-03", title: "Chleb na naturalnym zakwasie", lead: "Codziennie wypiekamy dziesiątki tysięcy bochenków i bułek.", body: "Piekarnia pracuje trzy zmiany. Zużywamy około 20 ton podlaskiej mąki dziennie. Chleb fermentuje ponad 40 godzin." },
];

export const promos = [
  { title: "Asy cenowe z gazetki", text: "Aktualną gazetkę wgra zespół marketingu. To miejsce na PDF i wyróżnione produkty.", tag: "do podmiany" },
  { title: "Produkcja własna", text: "Pieczywo, wędliny i ciasta z naszych zakładów — świeże, lokalne, codziennie.", tag: "stała oferta" },
  { title: "Karta klienta", text: "Punkty za zakupy wymienisz na e-bony do sklepów i barów.", tag: "lojalność" },
];

export const slides = [
  {
    tag: "Promocje",
    title: "Gazetka i asy cenowe",
    text: "Cotygodniowe obniżki w supermarketach Społem. Aktualną gazetkę znajdziesz w sklepie i wkrótce tutaj.",
    href: "/promocje",
    cta: "Zobacz promocje",
  },
  {
    tag: "E-sklep",
    title: "Zakupy z dowozem do domu",
    text: "Zamów online lub telefonicznie 693 503 504. Odbiór też w markecie Opałek.",
    href: "https://esklep.spolembialystok.pl/",
    cta: "Przejdź do e-sklepu",
  },
  {
    tag: "Karta klienta",
    title: "Społem znaczy razem",
    text: "5 zł = 1 punkt. 200 punktów to e-bon 10 zł, 400 punktów — e-bon 30 zł.",
    href: "/karta-klienta",
    cta: "Zasady programu",
  },
  {
    tag: "Nowość",
    title: "Supermarket i bar Stroma",
    text: "Na Słonecznym Stoku: sklep, bar z 72 miejscami i okienko drive.",
    href: "/sklepy/stroma",
    cta: "Sprawdź lokalizację",
  },
  {
    tag: "Produkcja własna",
    title: "Pieczywo z podlaskiej mąki",
    text: "Zakwas powyżej 40 godzin. Około 20 ton mąki dziennie i 700 ton pieczywa miesięcznie.",
    href: "/produkcja/pieczywo",
    cta: "Nasza piekarnia",
  },
];

export function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Białystok`)}`;
}
export function getStore(slug: string) { return stores.find((s) => s.slug === slug); }
export function getBar(slug: string) { return bars.find((b) => b.slug === slug); }
export function getNews(slug: string) { return news.find((n) => n.slug === slug); }
