export type SourceLabel =
  | "Scriptural"
  | "Traditional Account"
  | "Historical Evidence"
  | "Scholarly Interpretation"
  | "Contested";

export type Guru = {
  slug: string;
  order: number;
  name: string;
  gurmukhi: string;
  years: string;
  guruship: string;
  epithet: string;
  summary: string;
  teachings: string[];
  institutions: string[];
  places: string[];
  legacy: string;
  label: SourceLabel;
};

export const gurus: Guru[] = [
  {
    slug: "guru-nanak",
    order: 1,
    name: "Guru Nanak",
    gurmukhi: "ਗੁਰੂ ਨਾਨਕ",
    years: "1469–1539",
    guruship: "1499–1539 (traditional)",
    epithet: "The first Guru",
    summary:
      "Born at Rai Bhoi di Talwandi (Nankana Sahib) in the Punjab, Guru Nanak taught a path of remembrance of one formless Reality, honest work, and sharing. His compositions form the opening and much of the substance of Sikh scripture.",
    teachings: [
      "Ik Oankar — one Reality pervading all creation",
      "Naam simran — remembrance as the core discipline",
      "Rejection of caste hierarchy and empty ritual",
      "Kirat karo, vand chhako, naam japo — work, share, remember",
    ],
    institutions: ["Sangat (congregation)", "Pangat / Langar", "Kartarpur community"],
    places: ["Nankana Sahib", "Sultanpur Lodhi", "Kartarpur"],
    legacy:
      "Established a lived community rather than a renunciate order, and appointed a successor, beginning the line of Gurus.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-angad",
    order: 2,
    name: "Guru Angad",
    gurmukhi: "ਗੁਰੂ ਅੰਗਦ",
    years: "1504–1552",
    guruship: "1539–1552",
    epithet: "The Guru of the script",
    summary:
      "Guru Angad consolidated Guru Nanak's community at Khadur Sahib, standardised the Gurmukhi script for recording Bani, and extended the langar.",
    teachings: ["Discipline of daily practice", "Learning and literacy", "Humility in service"],
    institutions: ["Gurmukhi script standardisation", "Schools for children", "Expanded langar"],
    places: ["Khadur Sahib", "Matte di Sarai"],
    legacy: "Gave the tradition a script and a pedagogy of its own.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-amar-das",
    order: 3,
    name: "Guru Amar Das",
    gurmukhi: "ਗੁਰੂ ਅਮਰ ਦਾਸ",
    years: "1479–1574",
    guruship: "1552–1574",
    epithet: "The social reformer",
    summary:
      "From Goindwal Sahib, Guru Amar Das built an administrative structure for a growing community and made langar a condition of meeting the Guru.",
    teachings: ["Equality enacted, not merely stated", "Rejection of sati and purdah", "Congregational gathering"],
    institutions: ["Manji system", "Baoli at Goindwal", "Fixed gathering days"],
    places: ["Goindwal Sahib", "Basarke"],
    legacy: "Turned an emerging movement into an organised, geographically distributed community.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-ram-das",
    order: 4,
    name: "Guru Ram Das",
    gurmukhi: "ਗੁਰੂ ਰਾਮ ਦਾਸ",
    years: "1534–1581",
    guruship: "1574–1581",
    epithet: "Founder of Amritsar",
    summary:
      "Guru Ram Das founded the settlement that became Amritsar and composed the Lavan, the four hymns that shape the Sikh marriage ceremony.",
    teachings: ["Devotion as relationship", "Marriage as spiritual companionship", "Service to the sangat"],
    institutions: ["City of Ramdaspur (Amritsar)", "Masand network", "Anand Karaj hymns"],
    places: ["Amritsar", "Lahore"],
    legacy: "Gave the community a centre that remains its spiritual heart.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-arjan",
    order: 5,
    name: "Guru Arjan",
    gurmukhi: "ਗੁਰੂ ਅਰਜਨ",
    years: "1563–1606",
    guruship: "1581–1606",
    epithet: "Compiler of the Adi Granth",
    summary:
      "Guru Arjan compiled the Adi Granth in 1604, including compositions of preceding Gurus and of Bhagats from varied backgrounds, and completed Harmandir Sahib. He was executed at Lahore in 1606.",
    teachings: ["Scripture as authority", "Sukhmani Sahib — the pearl of peace", "Acceptance of the divine will"],
    institutions: ["Adi Granth", "Harmandir Sahib", "Taran Taran, Kartarpur (Jalandhar)"],
    places: ["Amritsar", "Lahore", "Tarn Taran"],
    legacy: "Fixed the scriptural canon and, through his death, reframed the community's relationship to state power.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-hargobind",
    order: 6,
    name: "Guru Hargobind",
    gurmukhi: "ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ",
    years: "1595–1644",
    guruship: "1606–1644",
    epithet: "Miri and Piri",
    summary:
      "Guru Hargobind wore two swords signifying temporal and spiritual authority, built the Akal Takht facing Harmandir Sahib, and organised the community's defence.",
    teachings: ["Miri-Piri — sovereignty joined to spirituality", "Justified defence, never aggression", "Sovereignty of conscience"],
    institutions: ["Akal Takht", "Community defence forces", "Kiratpur Sahib"],
    places: ["Amritsar", "Gwalior", "Kiratpur Sahib"],
    legacy: "Introduced the political dimension that shapes later Sikh history and thought.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-har-rai",
    order: 7,
    name: "Guru Har Rai",
    gurmukhi: "ਗੁਰੂ ਹਰਿ ਰਾਇ",
    years: "1630–1661",
    guruship: "1644–1661",
    epithet: "The compassionate",
    summary:
      "Guru Har Rai maintained the community's cavalry while emphasising compassion, healing and care for the natural world, and navigated Mughal succession politics carefully.",
    teachings: ["Compassion for all life", "Healing and medicine as seva", "Restraint in power"],
    institutions: ["Herbal dispensary at Kiratpur", "Preaching centres"],
    places: ["Kiratpur Sahib", "Sirhind"],
    legacy: "Modelled restraint: strength retained but not used for conquest.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-har-krishan",
    order: 8,
    name: "Guru Har Krishan",
    gurmukhi: "ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ",
    years: "1656–1664",
    guruship: "1661–1664",
    epithet: "The child Guru",
    summary:
      "Guruship came to Har Krishan at five. Tradition remembers his service to the sick during an epidemic in Delhi, where he died of smallpox at eight.",
    teachings: ["Seva without regard to status", "Purity of intention"],
    institutions: ["Service during the Delhi epidemic (traditional account)"],
    places: ["Kiratpur Sahib", "Delhi — Gurdwara Bangla Sahib"],
    legacy: "A short guruship remembered chiefly for service to the suffering.",
    label: "Traditional Account",
  },
  {
    slug: "guru-tegh-bahadur",
    order: 9,
    name: "Guru Tegh Bahadur",
    gurmukhi: "ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ",
    years: "1621–1675",
    guruship: "1665–1675",
    epithet: "Shield of conscience",
    summary:
      "Guru Tegh Bahadur travelled widely, founded Anandpur Sahib, and was executed at Delhi in 1675 — remembered as a defence of the religious freedom of others, not only of Sikhs.",
    teachings: ["Detachment amid the world", "Fear none, frighten none", "Freedom of conscience"],
    institutions: ["Anandpur Sahib", "Extensive eastern travels"],
    places: ["Anandpur Sahib", "Patna", "Delhi — Sis Ganj"],
    legacy: "His martyrdom directly shapes the founding of the Khalsa a generation later.",
    label: "Historical Evidence",
  },
  {
    slug: "guru-gobind-singh",
    order: 10,
    name: "Guru Gobind Singh",
    gurmukhi: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ",
    years: "1666–1708",
    guruship: "1675–1708",
    epithet: "Founder of the Khalsa",
    summary:
      "Guru Gobind Singh inaugurated the Khalsa at Anandpur Sahib in 1699, gave the community its initiation and discipline, and conferred guruship on the Guru Granth Sahib.",
    teachings: ["Sant-Sipahi — saint and soldier", "Collective sovereignty of the Khalsa", "Force only as a last recourse"],
    institutions: ["Khalsa and Amrit Sanchar", "Panj Pyare", "Guruship of the Guru Granth Sahib"],
    places: ["Patna Sahib", "Anandpur Sahib", "Damdama Sahib", "Nanded"],
    legacy: "Closed the line of human Gurus and vested authority in scripture and the collective Panth.",
    label: "Historical Evidence",
  },
];

export type Concept = {
  slug: string;
  term: string;
  gurmukhi: string;
  short: string;
  body: string;
  related: string[];
};

export const concepts: Concept[] = [
  {
    slug: "ik-oankar",
    term: "Ik Oankar",
    gurmukhi: "ੴ",
    short: "One Reality, without second, pervading all that exists.",
    body: "The opening of the Guru Granth Sahib. 'Ik' is the numeral one; 'Oankar' names the sounding, creative Reality. It asserts both oneness and pervasiveness: the divine is not distant from creation but present within it, beyond form (nirgun) yet knowable through form (sargun).",
    related: ["naam", "hukam", "waheguru"],
  },
  {
    slug: "naam",
    term: "Naam",
    gurmukhi: "ਨਾਮ",
    short: "The divine Name — presence, remembered and lived.",
    body: "Naam is not merely a word to repeat. It is the reality of the divine as it becomes present in a life. Naam simran is the discipline of holding that presence in attention through recitation, kirtan and everyday awareness.",
    related: ["simran", "shabad", "ik-oankar"],
  },
  {
    slug: "hukam",
    term: "Hukam",
    gurmukhi: "ਹੁਕਮ",
    short: "The divine order or command by which all things arise and move.",
    body: "Japji Sahib asks how one becomes true, and answers: by walking in accordance with hukam. Hukam is not fatalism — it names an order one can align with or resist through haumai. Acceptance of hukam is the ground of equanimity.",
    related: ["haumai", "naam", "jivan-mukti"],
  },
  {
    slug: "haumai",
    term: "Haumai",
    gurmukhi: "ਹਉਮੈ",
    short: "The self-centred 'I-am-ness' that separates a person from Reality.",
    body: "Haumai is the root affliction in Sikh thought: the constructed self that measures everything by its own advantage. It is dissolved not by withdrawal from the world but by naam, seva and living in sangat.",
    related: ["hukam", "seva", "maya"],
  },
  {
    slug: "shabad",
    term: "Shabad",
    gurmukhi: "ਸ਼ਬਦ",
    short: "The Word — revelation as sound, poetry and guide.",
    body: "Shabad is the Guru's utterance and, in a deeper sense, the divine self-expression. Sikh practice engages shabad musically: bani set to raga, sung in sangat, so that meaning is received through sound as well as sense.",
    related: ["naam", "kirtan", "guru"],
  },
  {
    slug: "seva",
    term: "Seva",
    gurmukhi: "ਸੇਵਾ",
    short: "Service given without expectation of return or recognition.",
    body: "Seva spans sweeping floors, cooking langar, medical relief and disaster response. It is a spiritual discipline precisely because it erodes haumai: the work is real, unglamorous and shared.",
    related: ["langar", "haumai", "sangat"],
  },
  {
    slug: "simran",
    term: "Simran",
    gurmukhi: "ਸਿਮਰਨ",
    short: "Remembrance — sustained attentive holding of the divine.",
    body: "Simran ranges from formal recitation of Nitnem to a continuous background awareness during ordinary work. It is meant to be householder practice, not monastic withdrawal.",
    related: ["naam", "nitnem", "shabad"],
  },
  {
    slug: "sangat",
    term: "Sangat",
    gurmukhi: "ਸੰਗਤ",
    short: "The congregation — company that shapes the self.",
    body: "Sikh thought treats company as formative. Sadh sangat, the company of the truth-seeking, is described as the setting in which naam takes root. Pangat, sitting together in a row for langar, is its social expression.",
    related: ["langar", "gurdwara", "seva"],
  },
  {
    slug: "miri-piri",
    term: "Miri-Piri",
    gurmukhi: "ਮੀਰੀ ਪੀਰੀ",
    short: "Temporal responsibility joined to spiritual authority.",
    body: "Symbolised by Guru Hargobind's two swords and by the Akal Takht standing opposite Harmandir Sahib. Sikh thought refuses to privatise religion: spiritual life carries obligations toward justice, governance and the defence of the vulnerable.",
    related: ["khalsa", "sant-sipahi", "akal-takht"],
  },
  {
    slug: "sant-sipahi",
    term: "Sant-Sipahi",
    gurmukhi: "ਸੰਤ ਸਿਪਾਹੀ",
    short: "The saint-soldier: inward discipline, outward courage.",
    body: "An ideal in which spiritual practice and the readiness to defend others are the same character, not two roles. Sikh ethical literature couples it with strict restraint: force is a last recourse, never a first instinct, and never for conquest or revenge.",
    related: ["miri-piri", "khalsa", "ethics"],
  },
  {
    slug: "maya",
    term: "Maya",
    gurmukhi: "ਮਾਇਆ",
    short: "Attachment to the transient as if it were ultimate.",
    body: "In Gurbani maya is less 'illusion' than misvaluation: the world is real and divine in origin, but clinging to it as the final good binds a person. The response is engaged detachment, not renunciation.",
    related: ["haumai", "jivan-mukti"],
  },
  {
    slug: "jivan-mukti",
    term: "Jivan Mukti",
    gurmukhi: "ਜੀਵਨ ਮੁਕਤੀ",
    short: "Liberation while living, within family and work.",
    body: "Sikh teaching locates liberation in this life and this world: the gurmukh lives in society, earns honestly, serves, and is free of haumai. There is no requirement of celibacy, renunciation or withdrawal.",
    related: ["hukam", "maya", "naam"],
  },
  {
    slug: "waheguru",
    term: "Waheguru",
    gurmukhi: "ਵਾਹਿਗੁਰੂ",
    short: "An expression of wonder at the Guru-Reality; the common Sikh name for God.",
    body: "Literally an exclamation of awe. It functions both as a name and as a simran phrase, appearing prominently in the writings of Bhai Gurdas and in daily practice.",
    related: ["naam", "simran", "ik-oankar"],
  },
  {
    slug: "khalsa",
    term: "Khalsa",
    gurmukhi: "ਖ਼ਾਲਸਾ",
    short: "The initiated collective body established in 1699.",
    body: "Instituted by Guru Gobind Singh at Anandpur Sahib on Vaisakhi 1699 through the first Amrit Sanchar and the Panj Pyare. Khalsa members take Singh and Kaur, keep the Five Ks, and follow the Rehat. Not all Sikhs are initiated; identity in practice is broader than initiation.",
    related: ["five-ks", "amrit-sanchar", "miri-piri"],
  },
  {
    slug: "langar",
    term: "Langar",
    gurmukhi: "ਲੰਗਰ",
    short: "The free community kitchen, open to all, eaten seated together.",
    body: "Begun by Guru Nanak and made institutional by Guru Amar Das, who required visitors to eat in pangat before meeting him. Langar enacts equality materially: same food, same floor, same row, regardless of caste, faith, gender or wealth.",
    related: ["seva", "sangat", "gurdwara"],
  },
  {
    slug: "five-ks",
    term: "Five Ks",
    gurmukhi: "ਪੰਜ ਕਕਾਰ",
    short: "Kes, Kangha, Kara, Kachera, Kirpan — the articles of Khalsa discipline.",
    body: "Kes (uncut hair) accepts the form given; Kangha (comb) orders it; Kara (steel bracelet) binds action; Kachera (undergarment) marks restraint and readiness; Kirpan (sword) obliges defence of the defenceless. They are worn as a covenant, not as amulets.",
    related: ["khalsa", "amrit-sanchar"],
  },
];

export type TimelineEvent = {
  year: string;
  sort: number;
  title: string;
  layer: "Gurus" | "Scripture" | "Punjab" | "Khalsa" | "Empire" | "Modern";
  body: string;
  label: SourceLabel;
};

export const timeline: TimelineEvent[] = [
  { year: "1469", sort: 1469, title: "Birth of Guru Nanak", layer: "Gurus", body: "Born at Rai Bhoi di Talwandi, today Nankana Sahib in Pakistan.", label: "Historical Evidence" },
  { year: "c.1499", sort: 1499, title: "Sultanpur Lodhi and the beginning of teaching", layer: "Gurus", body: "Traditional accounts describe a revelatory experience followed by extensive travels (udasis).", label: "Traditional Account" },
  { year: "c.1521", sort: 1521, title: "Kartarpur community founded", layer: "Gurus", body: "A settlement of householders combining farming, congregation and langar.", label: "Historical Evidence" },
  { year: "1539", sort: 1539, title: "Guru Angad succeeds Guru Nanak", layer: "Gurus", body: "Succession by appointment rather than lineage establishes a durable institution.", label: "Historical Evidence" },
  { year: "1577", sort: 1577, title: "Founding of Ramdaspur (Amritsar)", layer: "Punjab", body: "Guru Ram Das establishes the settlement around the sarovar.", label: "Historical Evidence" },
  { year: "1604", sort: 1604, title: "Adi Granth compiled and installed", layer: "Scripture", body: "Guru Arjan compiles the scripture and installs it in Harmandir Sahib.", label: "Historical Evidence" },
  { year: "1606", sort: 1606, title: "Execution of Guru Arjan", layer: "Gurus", body: "Executed at Lahore under Jahangir; a turning point in the community's relation to state power.", label: "Historical Evidence" },
  { year: "1606", sort: 1606.5, title: "Akal Takht established", layer: "Khalsa", body: "Guru Hargobind builds the seat of temporal authority opposite Harmandir Sahib.", label: "Historical Evidence" },
  { year: "1675", sort: 1675, title: "Martyrdom of Guru Tegh Bahadur", layer: "Gurus", body: "Executed at Delhi; remembered as a defence of religious freedom beyond his own community.", label: "Historical Evidence" },
  { year: "1699", sort: 1699, title: "Founding of the Khalsa", layer: "Khalsa", body: "Guru Gobind Singh initiates the Panj Pyare at Anandpur Sahib on Vaisakhi.", label: "Historical Evidence" },
  { year: "1708", sort: 1708, title: "Guruship conferred on the Guru Granth Sahib", layer: "Scripture", body: "At Nanded, Guru Gobind Singh ends the line of human Gurus.", label: "Historical Evidence" },
  { year: "1710–1716", sort: 1710, title: "Banda Singh Bahadur's campaigns", layer: "Khalsa", body: "Sikh rule briefly established in parts of Punjab; ends with his execution in 1716.", label: "Historical Evidence" },
  { year: "1740s–1760s", sort: 1745, title: "Persecution and the rise of the Misls", layer: "Punjab", body: "Decades of repression and mobile resistance produce the confederacy of Misls.", label: "Historical Evidence" },
  { year: "1799–1839", sort: 1799, title: "Sikh Empire under Maharaja Ranjit Singh", layer: "Empire", body: "Lahore becomes the capital of a multi-religious state extending to Kashmir and Peshawar.", label: "Historical Evidence" },
  { year: "1845–1849", sort: 1845, title: "Anglo-Sikh Wars and annexation", layer: "Empire", body: "Two wars end with British annexation of Punjab in 1849.", label: "Historical Evidence" },
  { year: "1873 onward", sort: 1873, title: "Singh Sabha Movement", layer: "Modern", body: "Reform, education and print reshape Sikh institutions and self-definition.", label: "Historical Evidence" },
  { year: "1920–1925", sort: 1920, title: "Gurdwara Reform Movement", layer: "Modern", body: "Largely non-violent campaigns lead to the Sikh Gurdwaras Act and the SGPC.", label: "Historical Evidence" },
  { year: "1947", sort: 1947, title: "Partition of Punjab", layer: "Modern", body: "Mass migration and communal violence; Sikh, Muslim and Hindu communities all suffered catastrophic losses.", label: "Historical Evidence" },
  { year: "1966", sort: 1966, title: "Punjabi Suba reorganisation", layer: "Modern", body: "Indian Punjab reorganised on linguistic lines.", label: "Historical Evidence" },
  { year: "1984", sort: 1984, title: "Operation Blue Star and the anti-Sikh massacres", layer: "Modern", body: "A military operation at the Harmandir Sahib complex, the assassination of Indira Gandhi, and organised mass violence against Sikhs. Accounts of causation, casualty figures and accountability remain contested and are subject to ongoing legal and scholarly examination.", label: "Contested" },
  { year: "Present", sort: 2100, title: "A global Panth", layer: "Modern", body: "Roughly 25–30 million Sikhs worldwide, with major communities across India, the UK, Canada, the US, Australia, East Africa and Southeast Asia.", label: "Historical Evidence" },
];

export type Branch = { title: string; to: string; blurb: string; nodes: string[] };

export const knowledgeMap: Branch[] = [
  {
    title: "Foundations",
    to: "/start",
    blurb: "Who is a Sikh, what the Gurus taught, and where it began.",
    nodes: ["What is Sikhism", "Who is a Sikh", "Ik Oankar", "Waheguru", "Guru", "Sangat", "Pangat"],
  },
  {
    title: "Philosophy",
    to: "/philosophy",
    blurb: "Reality, self, freedom, ethics and the human condition.",
    nodes: ["Naam", "Hukam", "Haumai", "Maya", "Jivan Mukti", "Nirgun & Sargun", "Grace"],
  },
  {
    title: "Scripture",
    to: "/scripture",
    blurb: "Guru Granth Sahib, its structure, authors and other Sikh texts.",
    nodes: ["Adi Granth", "1430 Angs", "Ragas", "Bhagat Bani", "Dasam Granth", "Janamsakhis"],
  },
  {
    title: "Guru Tradition",
    to: "/gurus",
    blurb: "Ten Gurus, their institutions and the eternal Guruship of scripture.",
    nodes: ["Guru Nanak", "Guru Arjan", "Guru Hargobind", "Guru Tegh Bahadur", "Guru Gobind Singh"],
  },
  {
    title: "Khalsa",
    to: "/khalsa",
    blurb: "1699, initiation, the Five Ks and collective identity.",
    nodes: ["Panj Pyare", "Amrit Sanchar", "Five Ks", "Rehat", "Singh & Kaur"],
  },
  {
    title: "History",
    to: "/history",
    blurb: "From pre-Guru Punjab to the contemporary global Panth.",
    nodes: ["Misls", "Sikh Empire", "Colonial Punjab", "Partition", "1984", "Diaspora"],
  },
  {
    title: "Practice",
    to: "/langar",
    blurb: "Gurdwara, langar, seva, nitnem and the shape of a Sikh day.",
    nodes: ["Nitnem", "Ardas", "Kirtan", "Langar", "Seva", "Anand Karaj"],
  },
  {
    title: "Culture & Language",
    to: "/gurmukhi",
    blurb: "Gurmukhi, Punjabi, music, art, architecture and everyday life.",
    nodes: ["Gurmukhi", "Raga", "Rabab & Taus", "Phulkari", "Frescoes", "Punjab"],
  },
];

export const questions = [
  {
    q: "Is Sikhism a branch of Hinduism?",
    a: "No. Sikh tradition emerged in a Punjabi religious environment shaped by Hindu, Islamic, Sufi and Bhakti currents, and shares vocabulary with them, but it asserts its own scripture, Gurus, initiation, institutions and theology. Sikh thinkers have consistently rejected being classified as a Hindu sect; the question also carries legal and political weight in modern India.",
  },
  {
    q: "Do Sikhs worship the Guru Granth Sahib?",
    a: "Sikhs treat the Guru Granth Sahib with the reverence due to a living Guru — bowing, ceremonial installation, and attentive listening. Sikh theology directs worship to the one formless Reality; the scripture is honoured as the Guru who reveals it, not as an object of worship in itself. Practitioners and scholars discuss this distinction with care.",
  },
  {
    q: "Do all Sikhs wear turbans?",
    a: "No. The dastaar is central to Khalsa identity and to many Sikh men and a growing number of women, but observance varies widely by family, region and personal commitment. A person who does not wear one is not thereby not a Sikh.",
  },
  {
    q: "What is the difference between Sikh and Khalsa?",
    a: "A Sikh is a learner who follows the Gurus and the Guru Granth Sahib. Khalsa refers specifically to those who have received Amrit initiation and accept the Rehat and the Five Ks. All Khalsa are Sikhs; not all Sikhs are initiated.",
  },
  {
    q: "Why is hair kept uncut?",
    a: "Kes expresses acceptance of the form as given and is one of the Five Ks bound to the 1699 covenant. It is a commitment of identity and discipline rather than a claim that hair is itself sacred.",
  },
  {
    q: "What is the Kirpan?",
    a: "A small sword worn by initiated Sikhs as an obligation to defend the vulnerable and resist injustice. It is an article of faith, governed by religious discipline and, in many countries, by specific legal accommodations.",
  },
  {
    q: "Are the Gurus considered divine?",
    a: "No. The Gurus are revered as human beings through whom the divine Word was revealed. Sikh scripture is emphatic that the Gurus are not to be treated as God, though the language of devotion toward them is intense.",
  },
  {
    q: "What is the difference between Punjabi and Sikh?",
    a: "Punjabi is a language and a regional identity shared by Sikhs, Muslims, Hindus, Christians and others. Sikh is a religious identity held by people of many languages and countries. Punjab is central to Sikh history; Sikhism is not limited to Punjabis.",
  },
];

export const glossary = [
  { term: "Akal Purakh", gurmukhi: "ਅਕਾਲ ਪੁਰਖ", def: "The Timeless Being; a principal Sikh name for the divine." },
  { term: "Amrit", gurmukhi: "ਅੰਮ੍ਰਿਤ", def: "The sweetened water prepared for Khalsa initiation." },
  { term: "Amritdhari", gurmukhi: "ਅੰਮ੍ਰਿਤਧਾਰੀ", def: "One who has received Amrit initiation." },
  { term: "Ang", gurmukhi: "ਅੰਗ", def: "'Limb' — the term used for a page of the Guru Granth Sahib." },
  { term: "Ardas", gurmukhi: "ਅਰਦਾਸ", def: "The formal Sikh supplication offered at the close of gatherings." },
  { term: "Bani", gurmukhi: "ਬਾਣੀ", def: "Utterance; the compositions of the Gurus and Bhagats." },
  { term: "Bhagat", gurmukhi: "ਭਗਤ", def: "Devotee-poets whose works are included in the Guru Granth Sahib." },
  { term: "Gurbani", gurmukhi: "ਗੁਰਬਾਣੀ", def: "The Guru's word; scripture as recited and sung." },
  { term: "Gurdwara", gurmukhi: "ਗੁਰਦੁਆਰਾ", def: "'Door of the Guru' — a Sikh place of gathering and worship." },
  { term: "Gurmukh", gurmukhi: "ਗੁਰਮੁਖ", def: "One oriented toward the Guru; the opposite of manmukh." },
  { term: "Gurmukhi", gurmukhi: "ਗੁਰਮੁਖੀ", def: "The script standardised by Guru Angad for writing Punjabi and Bani." },
  { term: "Hukamnama", gurmukhi: "ਹੁਕਮਨਾਮਾ", def: "The randomly read scriptural passage taken as the day's guidance." },
  { term: "Kaur", gurmukhi: "ਕੌਰ", def: "Name taken by Sikh women, signifying sovereign dignity." },
  { term: "Kirtan", gurmukhi: "ਕੀਰਤਨ", def: "Devotional singing of Gurbani in raga." },
  { term: "Nishan Sahib", gurmukhi: "ਨਿਸ਼ਾਨ ਸਾਹਿਬ", def: "The saffron flag flown at gurdwaras." },
  { term: "Nitnem", gurmukhi: "ਨਿਤਨੇਮ", def: "The daily rule of prescribed prayers." },
  { term: "Panj Pyare", gurmukhi: "ਪੰਜ ਪਿਆਰੇ", def: "The Five Beloved, first initiated into the Khalsa in 1699." },
  { term: "Panth", gurmukhi: "ਪੰਥ", def: "The Sikh community as a collective path and body." },
  { term: "Rehat", gurmukhi: "ਰਹਿਤ", def: "The code of Khalsa discipline." },
  { term: "Singh", gurmukhi: "ਸਿੰਘ", def: "'Lion' — name taken by Sikh men at initiation." },
];

export const labelBlurb: Record<SourceLabel, string> = {
  Scriptural: "Drawn directly from Sikh scripture.",
  "Traditional Account": "Community narrative; historical corroboration varies.",
  "Historical Evidence": "Supported by documentary or archaeological evidence.",
  "Scholarly Interpretation": "An academic reading among others.",
  Contested: "Interpretations differ significantly; read multiple sources.",
};
