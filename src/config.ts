// ─────────────────────────────────────────────────────────────
//  WEDDING CONFIG — Simranjeet & Pallak
// ─────────────────────────────────────────────────────────────

export interface WeddingEvent {
  id: string;
  name: string;
  title: string;
  date: string;
  dayLabel: string;
  dayNum: string;
  monthLabel: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapsQuery: string;
  note?: string;
  hosts?: string;
  program?: { name: string; time: string; note?: string }[];
}

export const wedding = {
  bride: "Pallak",
  groom: "Simranjeet",
  groomFull: "Simranjeet Singh",
  brideFull: "Pallak",
  
  // Parents & Family lineage
  groomParents: "Sdn. Mandeep Kaur & S. Brijinder Singh Ratra",
  groomGrandParents: "Sdn. Joginder Kaur & S. Bhagat Singh Ratra",
  groomLateGrandParents: "Late Sdn. & S. Jaswant Singh Ratra",
  brideParents: "Smt. Meenu Dhawan & Shri Sanjeev Dhawan",
  
  familyHost: "Ratra Family",
  familyAddress: "71, Guru Road, Dehradun",
  
  hashtag: "#SimranjeetWedsPallak",
  monogram: "S · P",

  // Main Wedding Date (Sunday, 15th Nov 2026)
  dateISO: "2026-11-15T12:00:00+05:30",
  dateLabel: "Sunday, 15th November 2026",
  timeLabel: "Anand Karaj at 12:00 Noon",

  // Primary venue for Google Calendar / Header
  venue: {
    name: "Gurudwara Sahib & Grand Euphoria",
    address: "Gobind Nagar & Haridwar Bypass Road, Dehradun",
    mapsQuery: "Grand Euphoria Haridwar Bypass Road Dehradun",
  },

  verse: {
    blessing: "ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ",
    gurmukhi: "ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ",
    subtitle: "Auspicious Wedding Ceremony",
    text: "Sdn Joginder Kaur & S. Bhagat Singh Ratra request your gracious presence and blessings on the auspicious occasion of the wedding ceremony of their grandson",
  },

  // Events: Dinner (14 Nov) & Wedding Anand Karaj + Lunch (15 Nov)
  events: [
    {
      id: "dinner",
      name: "Dinner",
      title: "Wedding Eve Celebration & Dinner",
      date: "Saturday, 14th November 2026",
      dayLabel: "Saturday",
      dayNum: "14",
      monthLabel: "November 2026",
      time: "7:30 PM Onwards",
      venueName: "Grand Euphoria",
      venueAddress: "Haridwar Bypass Road, Near-Kargi Chowk, Dehradun",
      mapsQuery: "Grand Euphoria, Haridwar Bypass Road, Near Kargi Chowk, Dehradun",
      note: "Ratra Family warmly invites you to celebrate the beginning of the joyous union with a splendid dinner.",
      hosts: "On the occasion of the Marriage of their grandson Simranjeet Singh (S/o Sdn. Mandeep Kaur & S. Brijinder Singh Ratra, Grand S/o Late Sdn. & S. Jaswant Singh Ratra)",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      title: "Anand Karaj & Wedding Lunch",
      date: "Sunday, 15th November 2026",
      dayLabel: "Sunday",
      dayNum: "15",
      monthLabel: "November 2026",
      time: "Anand Karaj at 12:00 Noon",
      venueName: "Gurudwara Sahib & Grand Euphoria",
      venueAddress: "Gurudwara Sahib, Gobind Nagar, Race Course & Grand Euphoria, Haridwar Bypass Road, Dehradun",
      mapsQuery: "Gurudwara Sahib Gobind Nagar Race Course Dehradun",
      note: "Sacred Anand Karaj blessings followed by joyful wedding lunch.",
      program: [
        { name: "Sehrabandi", time: "8:00 AM", note: "At Home (71, Guru Road)" },
        { name: "Departure of Barat", time: "10:00 AM", note: "From Home" },
        { name: "Barat Reassembles", time: "11:30 AM", note: "Near PNB Race Course & proceeds to Gurudwara Sahib" },
        { name: "Anand Karaj", time: "12:00 Noon", note: "At Gurudwara Sahib, Gobind Nagar, Race Course" },
        { name: "Lunch & Celebration", time: "1:00 PM", note: "At Grand Euphoria, Haridwar Bypass Road, Near-ISBT, Dehradun" },
      ],
    },
  ],

  // Cute Pet Conversation (Bruno & Rambo)
  petStory: {
    title: "A Sweet Note From Our Furry Brothers",
    dogs: "Bruno & Rambo",
    dialogue: [
      { speaker: "Bruno", text: "Rambo, do you know what a wedding means?" },
      { speaker: "Rambo", text: "Lots of people, lots of noise and absolutely no table scraps for us?" },
      { speaker: "Bruno", text: "It means our boy has found someone to share his life with." },
      { speaker: "Rambo", text: "Like we share ours with him?" },
      { speaker: "Bruno", text: "In a way, yes. Someone to hold his hand when we can't reach it with our paws." },
      { speaker: "Rambo", text: "Someone to make him smile on the difficult days?" },
      { speaker: "Bruno", text: "Someone to remind him that he's loved, even when we're not around." },
      { speaker: "Rambo", text: "Then I hope their love feels like home." },
    ],
    closing: "May every new beginning carry a little of the love that brought us here.",
  },

  // Butter paper insert inscription
  butterPaperNote: "Simranjeet weds Pallak",

  // Compliments & RSVP
  compliments: {
    from: "Ratra Family, Relatives & Friends",
    cuteFrom: "Rajbir Kohli",
  },

  rsvp: [
    {
      names: ["Bhagat Singh Ratra", "Pritpal Singh Ratra", "Gurvinder Singh Ratra"],
      phones: ["+91 99970 01579", "+91 80065 32613"],
    },
    {
      names: ["Super Emporium, Rama Market", "Super House, Rama Market"],
      phones: ["+91 98977 73095", "+91 98373 04711"],
    },
  ],

  // Music configuration
  music: {
    title: "Khayaal",
    artist: "Asees Kaur & Goldie Sohel",
    url: "/assets/audio/khayaal.m4a",
    appleMusicUrl: "https://music.apple.com/in/album/khayaal/1727442787?i=1727442793",
  },

  sections: {
    events: true,
    venue: true,
    countdown: true,
    pets: true,
    rsvp: true,
  },
};

export const googleCalendarUrl = (event?: { title: string; dateISO: string; venue: string }) => {
  const start = new Date(event?.dateISO || wedding.dateISO);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]|\.\d{3}/g, "").slice(0, 15) + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${wedding.groom} weds ${wedding.bride} — ${event?.title || "Wedding"}`,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: `${wedding.venue.name} — ${wedding.venue.address}. ${wedding.hashtag}`,
    location: `${event?.venue || wedding.venue.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadICS = () => {
  const start = new Date(wedding.dateISO);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d
      .toISOString()
      .replaceAll("-", "")
      .replaceAll(":", "")
      .replaceAll(".", "")
      .slice(0, 15) + "Z";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//InviteStory//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@invitestory`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${wedding.groom} weds ${wedding.bride}`,
    `DESCRIPTION:${wedding.venue.name} — ${wedding.venue.address}`,
    `LOCATION:${wedding.venue.name}\\, ${wedding.venue.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${wedding.groom}-${wedding.bride}-wedding.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  wedding.venue.mapsQuery
)}&output=embed`;

export const mapsDirectionsUrl = (query = wedding.venue.mapsQuery) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
