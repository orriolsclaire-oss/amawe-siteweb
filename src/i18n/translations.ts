export const languages = {
  fr: "Francais",
  en: "English",
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = "fr"

export const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "A propos",
    "nav.program": "Energie Illimitee",
    "nav.experiences": "Experiences",
    "nav.contact": "Contact",
    "nav.language": "EN",

    // Hero — Homepage
    "hero.name": "Claire Orriols",
    "hero.title": "Coach en Sante Holistique",
    "hero.subtitle":
      "Formatrice MovNat & Facilitatrice de retraites en nature",
    "hero.cta": "Decouvrir mon approche",

    // Stats bar
    "stats.newsletter": "30 000+",
    "stats.newsletter.label": "abonnes SuperLetter",
    "stats.community": "3 500+",
    "stats.community.label": "personnes accompagnees",
    "stats.since": "Depuis",
    "stats.since.label": "2020",

    // Mission section
    "mission.label": "MA MISSION",
    "mission.title":
      "Vous guider vers une sante globale et une vitalite durable",
    "mission.text":
      "Je crois profondement que tout le monde peut etre en meilleure sante. Si nous nous donnons les conditions pour que la vie en nous puisse mieux circuler. La sante, ca s'apprend et ca se cultive... sur tous les plans.",
    "mission.cta": "Mon histoire",

    // Program section — Homepage
    "program.label": "PROGRAMME PHARE",
    "program.title": "Energie Illimitee",
    "program.subtitle":
      "Un accompagnement de 3 mois pour retrouver ta vitalite",
    "program.description":
      "Un programme transformateur qui allie coaching de groupe, seances individualisees et immersions en nature pour t'aider a sortir du mode survie et retrouver une energie durable.",
    "program.duration": "3 mois d'accompagnement",
    "program.start": "Prochaine session : 20 avril 2026",
    "program.cta": "Decouvrir le programme",

    // Experiences section — Homepage
    "experiences.label": "EXPERIENCES",
    "experiences.title": "Retraites & Stages",
    "experiences.subtitle":
      "Des immersions en nature pour se reconnecter a soi",
    "experiences.cta": "Voir les prochaines dates",

    // Retreat card
    "retreat.title": "Retraite Danse & Silence",
    "retreat.edition": "3eme edition",
    "retreat.location": "Ecolieu, Sud Aveyron",
    "retreat.description":
      "4 jours de silence, de danse libre et de reconnexion a la nature. Trois medecines : le Silence, le Mouvement et la Nature.",

    // Newsletter
    "newsletter.label": "LA SUPERLETTER",
    "newsletter.title": "Rejoins la communaute",
    "newsletter.text":
      "Chaque mardi, recois des conseils en nutrition, mouvement, gestion du stress et bien-etre holistique. Rejoins plus de 30 000 abonnes.",
    "newsletter.placeholder": "Ton adresse email",
    "newsletter.cta": "S'inscrire",

    // Testimonials
    "testimonial.default":
      "Grace a Claire, j'ai retrouve une energie que je pensais perdue a jamais. Son approche holistique a transforme ma facon de vivre.",
    "testimonial.author": "Temoignage",

    // Footer
    "footer.rights": "Tous droits reserves",
    "footer.tagline":
      "Coach en sante holistique, formatrice MovNat et facilitatrice de retraites en nature.",
    "footer.newsletter": "SuperLetter",
    "footer.legal": "Mentions legales",
    "footer.privacy": "Politique de confidentialite",

    // SEO
    "seo.title": "Amawe — Claire Orriols | Sante Holistique",
    "seo.description":
      "Amawe par Claire Orriols. Coach en nutrition et sante holistique, formatrice MovNat et facilitatrice de retraites en nature. Programmes, retraites et accompagnement.",

    // About page
    "about.label": "A PROPOS",
    "about.title": "Mon histoire",
    "about.intro":
      "Tout a bascule en 2017. Apres un grave accident de ski et trois chirurgies, je me suis retrouvee immobilisee pendant des semaines, puis un mois en centre de reeducation.",
    "about.story.1":
      "Mon corps et mon cerveau etaient intoxiques par des mois d'anesthesies, d'antibiotiques et de medicaments lourds. Mon microbiote etait devaste, mon energie au plus bas, mon mental en chaos.",
    "about.story.2":
      "J'ai fait un choix radical : refuser les antidouleurs prescrits et ne pas manger la nourriture de la cafeteria. A la place, j'ai applique les principes de nutrition-sante que j'etais en train d'apprendre. Je suis devenue mon propre cobaye.",
    "about.story.3":
      "Detox, alimentation anti-inflammatoire et hypotoxique, aliments vivants... J'ai decouvert l'alimentation intuitive, cette connexion profonde avec mon corps qui sait intuitivement ce dont il a besoin.",
    "about.story.4":
      "Mais j'ai aussi compris que l'alimentation seule ne guerit pas. Il fallait adresser la partie immergee de l'iceberg : ma sante mentale et emotionnelle. Cette reconstruction globale m'a montree que notre capacite d'auto-guerison est immense et a notre portee.",
    "about.certifications.label": "FORMATIONS & CERTIFICATIONS",
    "about.certifications.iin":
      "Institute for Integrative Nutrition (IIN), New York — Coach en Nutrition et Sante Holistique",
    "about.certifications.cnh":
      "Centre Naturopathie et Hormese (CNH) — Science, philosophie et renforcement",
    "about.certifications.movnat":
      "MovNat Certification Trainer Niveau 2 — Mouvement naturel",
    "about.certifications.jmv":
      "Naturo-praticienne Methode JMV — Reprogrammation cellulaire",
    "about.certifications.polyvagal":
      "Theorie polyvagale du systeme nerveux — Regulation du systeme nerveux",
    "about.philosophy.label": "MA PHILOSOPHIE",
    "about.philosophy.title": "La Roue de la Sante Holistique",
    "about.philosophy.text":
      "Je suis convaincue que chaque aspect de notre vie — nutrition, sommeil, mouvement, emotions, relations, etat d'esprit — est interconnecte et impacte notre sante globale. Mon objectif : vous guider pour atteindre au moins 8/10 dans les domaines qui comptent le plus pour la vie que vous voulez vivre.",
    "about.quote":
      "Tout le monde peut etre en meilleure sante. Si nous nous donnons les conditions pour que la vie en nous puisse mieux circuler.",
    "about.roots.label": "MES RACINES",
    "about.roots.text":
      "Elevee dans les montagnes catalanes, j'ai toujours ete passionnee par le sport en plein air et la nature. Aujourd'hui, je vis dans notre ecolieu en Sud Aveyron, un hameau en pierres au coeur du Parc Naturel des Grands Causses, ou je facilite retraites et immersions.",

    // Energie Illimitee page
    "ei.label": "PROGRAMME",
    "ei.title": "Energie Illimitee",
    "ei.subtitle":
      "3 mois pour sortir du mode survie et retrouver une vitalite durable",
    "ei.problem.label": "EST-CE QUE TU TE RECONNAIS ?",
    "ei.problem.title": "Tu es epuisee. En mode survie.",
    "ei.problem.1":
      "Tu te reveilles fatiguee, tu tiens a coups de cafe et de volonte",
    "ei.problem.2":
      "Tu as l'impression que ton corps ne repond plus, malgre tous tes efforts",
    "ei.problem.3":
      "Tu sais que quelque chose doit changer, mais tu ne sais pas par ou commencer",
    "ei.problem.4":
      "Tu as tout essaye — regimes, complements, sport — mais rien ne tient dans la duree",
    "ei.pillars.label": "LES 4 PILIERS",
    "ei.pillars.title": "Une approche globale, pas un enieme regime",
    "ei.pillar.1.title": "Alimentation & Detox naturelle",
    "ei.pillar.1.text":
      "Apprends a nourrir ton corps avec une alimentation anti-inflammatoire et vivante, et a soutenir tes organes d'elimination naturellement.",
    "ei.pillar.2.title": "Mouvement & Presence corporelle",
    "ei.pillar.2.text":
      "Retrouve le plaisir de bouger avec le mouvement naturel (MovNat), la danse libre et des pratiques qui reconnectent corps et esprit.",
    "ei.pillar.3.title": "Mental & Emotions",
    "ei.pillar.3.text":
      "Reguler ton systeme nerveux, identifier tes croyances limitantes et liberer les emotions qui bloquent ta vitalite.",
    "ei.pillar.4.title": "Ta priorite du moment",
    "ei.pillar.4.text":
      "Un accompagnement personnalise sur le domaine qui a le plus d'impact dans ta vie en ce moment.",
    "ei.format.label": "LE FORMAT",
    "ei.format.title": "Comment ca se passe",
    "ei.format.coaching":
      "1 seance de coaching de groupe toutes les 2 semaines (mardi a 20h, avec replays)",
    "ei.format.hotseat":
      "1 coaching individualise 'hot seat' toutes les 2 semaines (mini-groupes de 4, 20-30 min chacune)",
    "ei.format.rhythm": "= 1 seance par semaine au total",
    "ei.format.immersion.1.title": "Immersion 1 — Montpellier",
    "ei.format.immersion.1.text":
      "2 jours d'immersion a Montpellier, 2-3 mai 2026",
    "ei.format.immersion.2.title": "Immersion 2 — Ecolieu, Sud Aveyron",
    "ei.format.immersion.2.text":
      "4 jours en pleine nature dans notre ecolieu, 17-20 juillet 2026",
    "ei.dates.label": "DATES",
    "ei.dates.start": "Debut : 20 avril 2026",
    "ei.dates.end": "Fin : 20 juillet 2026",
    "ei.dates.duration": "3 mois d'accompagnement",
    "ei.pricing.label": "TARIFS",
    "ei.pricing.earlybird": "1 350 EUR",
    "ei.pricing.earlybird.label": "Tarif early bird",
    "ei.pricing.regular": "2 000 EUR",
    "ei.pricing.regular.label": "Tarif normal",
    "ei.pricing.payment.3x": "Paiement en 3x : 450 EUR/mois",
    "ei.pricing.payment.5x": "Paiement en 5x : 270 EUR/mois",
    "ei.pricing.includes":
      "Inclus : coaching, immersions (lieu + enseignement), bibliotheque de videos mouvement, recettes, groupe WhatsApp, suivi post-programme a M+1",
    "ei.bonus.label": "BONUS INCLUS",
    "ei.bonus.1": "Interventions d'experts invites",
    "ei.bonus.2": "Bibliotheque de videos mouvement",
    "ei.bonus.3": "Recettes sante et listes de courses",
    "ei.bonus.4": "Groupe WhatsApp prive",
    "ei.bonus.5": "Seance de suivi post-programme (M+1)",
    "ei.bonus.6":
      "Acces a une 3eme rencontre retrouvailles avec tous les anciens",
    "ei.cta": "Postuler au programme",
    "ei.cta.note": "Entree sur candidature — Places limitees",
    "ei.faq.label": "QUESTIONS FREQUENTES",
    "ei.faq.1.q": "C'est pour qui ?",
    "ei.faq.1.a":
      "Pour toute personne en fatigue chronique, les entrepreneurs en mode survie, et celles et ceux qui veulent reconstruire leur vitalite en profondeur — corps, mental et emotions.",
    "ei.faq.2.q":
      "Je ne peux pas me deplacer pour les immersions, c'est possible ?",
    "ei.faq.2.a":
      "Les immersions font partie integrante du programme et sont incluses dans le tarif. Le transport et l'hebergement pour l'immersion de Montpellier sont a ta charge. Pour l'immersion en Aveyron, le lieu et les enseignements sont inclus.",
    "ei.faq.3.q": "Comment se passe l'inscription ?",
    "ei.faq.3.a":
      "L'entree se fait sur candidature via un formulaire. Je selectionne les participants pour garantir un groupe aligne et motive.",

    // Experiences page
    "exp.label": "EXPERIENCES",
    "exp.title": "Retraites & Stages",
    "exp.subtitle":
      "Des immersions en pleine nature pour se reconnecter a l'essentiel",
    "exp.retreat.label": "RETRAITE",
    "exp.retreat.title": "Danse & Silence",
    "exp.retreat.edition": "3eme edition — Fevrier 2026",
    "exp.retreat.dates": "25 - 28 fevrier 2026 (4 jours / 3 nuits)",
    "exp.retreat.location":
      "Ecolieu a Saint-Felix-de-Sorgues (12400), Sud Aveyron, Parc Naturel des Grands Causses",
    "exp.retreat.intro":
      "Une retraite silencieuse de 4 jours articulee autour de trois medecines : le Silence, le Mouvement (danse libre) et la Nature.",
    "exp.retreat.includes.label": "LE PROGRAMME COMPREND",
    "exp.retreat.includes.1":
      "Seances quotidiennes de danse et mouvement libre",
    "exp.retreat.includes.2": "Breathwork et meditation",
    "exp.retreat.includes.3": "Marches et randonnees en nature",
    "exp.retreat.includes.4": "Temps d'introspection (guide ou autonome)",
    "exp.retreat.includes.5": "Cercles de parole (avant/apres retraite)",
    "exp.retreat.includes.6": "Soirees cocooning au coin du feu",
    "exp.retreat.includes.7":
      "Repas sains et biologiques en pension complete",
    "exp.retreat.silence":
      "Ceci est une retraite silencieuse. Les participants s'engagent a respecter le silence durant l'integralite du sejour.",
    "exp.retreat.venue.label": "LE LIEU",
    "exp.retreat.venue.text":
      "Un hameau historique en pierres, avec tiny houses et batiments bioclimatiques. Salle de pratique en bois de 120m2 avec baies vitrees. Riviere sur la propriete. Salon chaleureux avec poele a bois. A 1h30 de Montpellier, 2h30 de Toulouse.",
    "exp.retreat.pricing.label":
      "TARIFS (tout inclus : hebergement, pension complete, activites)",
    "exp.retreat.pricing.autonomous":
      "420 EUR — Autonome (van/camping-car)",
    "exp.retreat.pricing.dorm":
      "490 EUR — Dortoir partage (4-5 lits) — COMPLET",
    "exp.retreat.pricing.gite":
      "560 EUR — Gite independant partage (3 lits) — 1 PLACE",
    "exp.retreat.pricing.studio":
      "620 EUR — Studio independant solo ou couple (-80 EUR si couple)",
    "exp.retreat.booking": "Reserver ma place",
    "exp.retreat.booking.note":
      "Acompte de 200 EUR a la reservation. Solde en especes sur place.",
    "exp.stage.label": "STAGES",
    "exp.stage.title": "Danse & Silence — Prochaines dates",
    "exp.stage.text":
      "Au-dela des retraites, je propose des stages ponctuels de danse libre et de silence. Ces experiences plus courtes (1-2 jours) sont ideales pour decouvrir l'approche avant de s'engager dans une retraite complete.",
    "exp.stage.coming": "Prochaines dates a venir",

    // Contact page
    "contact.label": "CONTACT",
    "contact.title": "Echangeons",
    "contact.text":
      "Une question sur mes programmes, les retraites ou mon approche ? N'hesite pas a me contacter.",
    "contact.email": "hello@amawe.com",
    "contact.location": "Ecolieu, Sud Aveyron, France",
    "contact.form.name": "Ton prenom",
    "contact.form.email": "Ton email",
    "contact.form.message": "Ton message",
    "contact.form.send": "Envoyer",
    "contact.social.label": "ME SUIVRE",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Une erreur est survenue",
    "common.back": "Retour",
    "common.learnmore": "En savoir plus",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.program": "Unlimited Energy",
    "nav.experiences": "Experiences",
    "nav.contact": "Contact",
    "nav.language": "FR",

    // Hero
    "hero.name": "Claire Orriols",
    "hero.title": "Holistic Health Coach",
    "hero.subtitle": "MovNat Trainer & Nature Retreat Facilitator",
    "hero.cta": "Discover my approach",

    // Stats
    "stats.newsletter": "30,000+",
    "stats.newsletter.label": "newsletter subscribers",
    "stats.community": "3,500+",
    "stats.community.label": "people guided",
    "stats.since": "Since",
    "stats.since.label": "2020",

    // Mission
    "mission.label": "MY MISSION",
    "mission.title":
      "Guiding you toward holistic health and lasting vitality",
    "mission.text":
      "I deeply believe that everyone can be healthier. If we give ourselves the conditions for life within us to flow better. Health can be learned and cultivated... on every level.",
    "mission.cta": "My story",

    // Program
    "program.label": "FLAGSHIP PROGRAM",
    "program.title": "Unlimited Energy",
    "program.subtitle": "A 3-month journey to reclaim your vitality",
    "program.description":
      "A transformative program combining group coaching, individualized sessions and nature immersions to help you break free from survival mode and find lasting energy.",
    "program.duration": "3 months of guidance",
    "program.start": "Next session: April 20, 2026",
    "program.cta": "Discover the program",

    // Experiences
    "experiences.label": "EXPERIENCES",
    "experiences.title": "Retreats & Workshops",
    "experiences.subtitle":
      "Nature immersions to reconnect with yourself",
    "experiences.cta": "See upcoming dates",

    // Retreat
    "retreat.title": "Dance & Silence Retreat",
    "retreat.edition": "3rd edition",
    "retreat.location": "Eco-village, South Aveyron",
    "retreat.description":
      "4 days of silence, free dance and reconnection with nature. Three medicines: Silence, Movement and Nature.",

    // Newsletter
    "newsletter.label": "THE SUPERLETTER",
    "newsletter.title": "Join the community",
    "newsletter.text":
      "Every Tuesday, receive tips on nutrition, movement, stress management and holistic wellness. Join 30,000+ subscribers.",
    "newsletter.placeholder": "Your email address",
    "newsletter.cta": "Subscribe",

    // Testimonials
    "testimonial.default":
      "Thanks to Claire, I found energy I thought was lost forever. Her holistic approach transformed the way I live.",
    "testimonial.author": "Testimonial",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.tagline":
      "Holistic health coach, MovNat trainer and nature retreat facilitator.",
    "footer.newsletter": "SuperLetter",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy policy",

    // SEO
    "seo.title": "Amawe — Claire Orriols | Holistic Health",
    "seo.description":
      "Amawe by Claire Orriols. Holistic nutrition and health coach, MovNat trainer and nature retreat facilitator. Programs, retreats and guidance.",

    // About
    "about.label": "ABOUT",
    "about.title": "My story",
    "about.intro":
      "Everything changed in 2017. After a serious ski accident and three surgeries, I found myself immobilized for weeks, then spent a month in a rehabilitation center.",
    "about.story.1":
      "My body and brain were intoxicated by months of anesthesia, antibiotics and heavy medication. My gut microbiome was devastated, my energy at rock bottom, my mind in chaos.",
    "about.story.2":
      "I made a radical choice: refuse the prescribed painkillers and not eat the cafeteria food. Instead, I applied the nutrition-health principles I was learning. I became my own guinea pig.",
    "about.story.3":
      "Detox, anti-inflammatory and hypotoxic nutrition, living foods... I discovered intuitive eating, that deep connection with my body that intuitively knows what it needs.",
    "about.story.4":
      "But I also understood that food alone doesn't heal. I needed to address the submerged part of the iceberg: my mental and emotional health. This holistic reconstruction showed me that our self-healing capacity is immense and within our reach.",
    "about.certifications.label": "CERTIFICATIONS & TRAINING",
    "about.certifications.iin":
      "Institute for Integrative Nutrition (IIN), New York — Holistic Nutrition & Health Coach",
    "about.certifications.cnh":
      "Centre Naturopathie et Hormese (CNH) — Science, philosophy & strengthening",
    "about.certifications.movnat":
      "MovNat Certification Trainer Level 2 — Natural movement",
    "about.certifications.jmv":
      "JMV Method Naturopractitioner — Cellular reprogramming",
    "about.certifications.polyvagal":
      "Polyvagal Theory of the nervous system — Nervous system regulation",
    "about.philosophy.label": "MY PHILOSOPHY",
    "about.philosophy.title": "The Holistic Health Wheel",
    "about.philosophy.text":
      "I believe every aspect of our life — nutrition, sleep, movement, emotions, relationships, mindset — is interconnected and impacts our overall health. My goal: guide you to reach at least 8/10 in the domains that matter most for the life you want to live.",
    "about.quote":
      "Everyone can be healthier. If we give ourselves the conditions for life within us to flow better.",
    "about.roots.label": "MY ROOTS",
    "about.roots.text":
      "Raised in the Catalan mountains, I've always been passionate about outdoor sports and nature. Today, I live in our eco-village in South Aveyron, a stone hamlet in the heart of the Grands Causses Natural Park, where I facilitate retreats and immersions.",

    // Energie Illimitee
    "ei.label": "PROGRAM",
    "ei.title": "Unlimited Energy",
    "ei.subtitle":
      "3 months to break free from survival mode and find lasting vitality",
    "ei.problem.label": "DOES THIS SOUND LIKE YOU?",
    "ei.problem.title": "You're exhausted. In survival mode.",
    "ei.problem.1":
      "You wake up tired, running on coffee and willpower",
    "ei.problem.2":
      "You feel like your body no longer responds, despite all your efforts",
    "ei.problem.3":
      "You know something needs to change, but you don't know where to start",
    "ei.problem.4":
      "You've tried everything — diets, supplements, exercise — but nothing lasts",
    "ei.pillars.label": "THE 4 PILLARS",
    "ei.pillars.title": "A holistic approach, not another diet",
    "ei.pillar.1.title": "Nutrition & Natural Detox",
    "ei.pillar.1.text":
      "Learn to nourish your body with anti-inflammatory, living food, and naturally support your elimination organs.",
    "ei.pillar.2.title": "Movement & Body Presence",
    "ei.pillar.2.text":
      "Rediscover the joy of moving with natural movement (MovNat), free dance and practices that reconnect body and mind.",
    "ei.pillar.3.title": "Mind & Emotions",
    "ei.pillar.3.text":
      "Regulate your nervous system, identify limiting beliefs and release the emotions blocking your vitality.",
    "ei.pillar.4.title": "Your current priority",
    "ei.pillar.4.text":
      "Personalized guidance on the area with the greatest impact on your life right now.",
    "ei.format.label": "THE FORMAT",
    "ei.format.title": "How it works",
    "ei.format.coaching":
      "1 group coaching session every 2 weeks (Tuesday at 8pm, with replays)",
    "ei.format.hotseat":
      "1 individualized 'hot seat' coaching every 2 weeks (mini-groups of 4, 20-30 min each)",
    "ei.format.rhythm": "= 1 session per week total",
    "ei.format.immersion.1.title": "Immersion 1 — Montpellier",
    "ei.format.immersion.1.text":
      "2-day immersion in Montpellier, May 2-3, 2026",
    "ei.format.immersion.2.title":
      "Immersion 2 — Eco-village, South Aveyron",
    "ei.format.immersion.2.text":
      "4 days in nature at our eco-village, July 17-20, 2026",
    "ei.dates.label": "DATES",
    "ei.dates.start": "Start: April 20, 2026",
    "ei.dates.end": "End: July 20, 2026",
    "ei.dates.duration": "3 months of guidance",
    "ei.pricing.label": "PRICING",
    "ei.pricing.earlybird": "1,350 EUR",
    "ei.pricing.earlybird.label": "Early bird rate",
    "ei.pricing.regular": "2,000 EUR",
    "ei.pricing.regular.label": "Regular rate",
    "ei.pricing.payment.3x": "Pay in 3x: 450 EUR/month",
    "ei.pricing.payment.5x": "Pay in 5x: 270 EUR/month",
    "ei.pricing.includes":
      "Includes: coaching, immersions (venue + teaching), movement video library, recipes, WhatsApp group, post-program follow-up at M+1",
    "ei.bonus.label": "BONUSES INCLUDED",
    "ei.bonus.1": "Guest expert sessions",
    "ei.bonus.2": "Movement video library",
    "ei.bonus.3": "Healthy recipes & shopping lists",
    "ei.bonus.4": "Private WhatsApp group",
    "ei.bonus.5": "Post-program follow-up session (M+1)",
    "ei.bonus.6":
      "Access to a 3rd reunion gathering with all alumni",
    "ei.cta": "Apply to the program",
    "ei.cta.note": "Application-based entry — Limited spots",
    "ei.faq.label": "FAQ",
    "ei.faq.1.q": "Who is this for?",
    "ei.faq.1.a":
      "For anyone experiencing chronic fatigue, entrepreneurs in survival mode, and those who want to deeply rebuild their vitality — body, mind and emotions.",
    "ei.faq.2.q": "What if I can't travel to the immersions?",
    "ei.faq.2.a":
      "The immersions are an integral part of the program and are included in the price. Transport and accommodation for the Montpellier immersion are at your expense. For the Aveyron immersion, venue and teachings are included.",
    "ei.faq.3.q": "How does enrollment work?",
    "ei.faq.3.a":
      "Entry is by application via a form. I select participants to ensure an aligned and motivated group.",

    // Experiences
    "exp.label": "EXPERIENCES",
    "exp.title": "Retreats & Workshops",
    "exp.subtitle":
      "Nature immersions to reconnect with what matters",
    "exp.retreat.label": "RETREAT",
    "exp.retreat.title": "Dance & Silence",
    "exp.retreat.edition": "3rd edition — February 2026",
    "exp.retreat.dates": "February 25-28, 2026 (4 days / 3 nights)",
    "exp.retreat.location":
      "Eco-village in Saint-Felix-de-Sorgues (12400), South Aveyron, Grands Causses Natural Park",
    "exp.retreat.intro":
      "A 4-day silent retreat centered around three medicines: Silence, Movement (free dance) and Nature.",
    "exp.retreat.includes.label": "THE PROGRAM INCLUDES",
    "exp.retreat.includes.1":
      "Daily free dance and movement sessions",
    "exp.retreat.includes.2": "Breathwork and meditation",
    "exp.retreat.includes.3": "Nature walks and hikes",
    "exp.retreat.includes.4":
      "Introspection time (guided or autonomous)",
    "exp.retreat.includes.5":
      "Sharing circles (before/after retreat)",
    "exp.retreat.includes.6": "Cozy evenings by the fire",
    "exp.retreat.includes.7": "Healthy organic meals, full board",
    "exp.retreat.silence":
      "This is a silent retreat. Participants commit to respecting silence throughout the stay.",
    "exp.retreat.venue.label": "THE VENUE",
    "exp.retreat.venue.text":
      "A historic stone hamlet with tiny houses and bioclimatic buildings. 120m2 wooden practice room with bay windows. River on property. Cozy shared living room with wood stove. 1.5h from Montpellier, 2.5h from Toulouse.",
    "exp.retreat.pricing.label":
      "PRICING (all-inclusive: lodging, full board, activities)",
    "exp.retreat.pricing.autonomous":
      "420 EUR — Autonomous (van/camper)",
    "exp.retreat.pricing.dorm":
      "490 EUR — Shared dorm (4-5 beds) — FULL",
    "exp.retreat.pricing.gite":
      "560 EUR — Independent shared gite (3 beds) — 1 SPOT LEFT",
    "exp.retreat.pricing.studio":
      "620 EUR — Independent studio solo or couple (-80 EUR for couples)",
    "exp.retreat.booking": "Book my spot",
    "exp.retreat.booking.note":
      "200 EUR deposit upon booking. Balance in cash on-site.",
    "exp.stage.label": "WORKSHOPS",
    "exp.stage.title": "Dance & Silence — Upcoming dates",
    "exp.stage.text":
      "Beyond retreats, I offer occasional free dance and silence workshops. These shorter experiences (1-2 days) are ideal for discovering the approach before committing to a full retreat.",
    "exp.stage.coming": "Upcoming dates to be announced",

    // Contact
    "contact.label": "CONTACT",
    "contact.title": "Let's connect",
    "contact.text":
      "Have a question about my programs, retreats or approach? Don't hesitate to reach out.",
    "contact.email": "hello@amawe.com",
    "contact.location": "Eco-village, South Aveyron, France",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Your message",
    "contact.form.send": "Send",
    "contact.social.label": "FOLLOW ME",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.back": "Back",
    "common.learnmore": "Learn more",
  },
} as const
