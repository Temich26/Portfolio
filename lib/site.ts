export const site = {
  name: "Артём Хачатурян",
  role: "IT-разработчик",
  telegram: "https://t.me/Temich_tkd",
  telegramHandle: "@Temich_tkd",
  max: {
    label: "Max",
    phone: "+79054101667",
    href: "tel:+79054101667",
  },
} as const;

export const skills = [
  "React / Next.js",
  "Telegram WebApp SDK",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  "B2B Solutions",
] as const;

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  subtitle?: string;
  featured?: boolean;
  demo?: "sales-desk" | "booking-bot";
  screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    title: "TKDHub",
    featured: true,
    summary:
      "Telegram Mini App для тренеров тхэквондо: клубы с инвайтами, таймер раундов, каталог тулей, GPS-трекер бега, учёт веса и посещаемости — под ключ в одном WebApp.",
    stack: [
      "React",
      "Telegram WebApp SDK",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    screenshots: [
      {
        src: "/projects/trainer-hub/home.png",
        alt: "Главный экран TKDHub: клубы и быстрые инструменты",
      },
      {
        src: "/projects/trainer-hub/timer.png",
        alt: "Таймер раундов и комбинатор тренировок",
      },
      {
        src: "/projects/trainer-hub/tul.png",
        alt: "Каталог тулей с поясами и количеством движений",
      },
      {
        src: "/projects/trainer-hub/run.png",
        alt: "GPS-трекер бега на карте",
      },
    ],
  },
  {
    title: "Sales Desk",
    demo: "sales-desk",
    summary:
      "Mini App и бот для отдела продаж: каталог услуг, заявки в воронке, статусы сделок и мгновенные уведомления менеджерам в Telegram.",
    stack: ["Next.js", "Telegram WebApp SDK", "Node.js", "PostgreSQL"],
  },
  {
    title: "BookingBot",
    subtitle: "Веб-сервисы и Telegram-бот для записи клиентов",
    demo: "booking-bot",
    summary:
      "Система автоматизации записи, управления слотами и календаря администратора с функцией автоматических напоминаний и повторных визитов.",
    stack: [
      "React",
      "Next.js",
      "Telegram WebApp SDK",
      "Node.js",
      "PostgreSQL",
    ],
  },
];
