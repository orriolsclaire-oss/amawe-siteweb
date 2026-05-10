export const languages = {
  fr: "Français",
  en: "English",
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = "fr"

export const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.program": "Énergie Illimitée",
    "nav.experiences": "Expériences",
    "nav.contact": "Contact",
    "nav.language": "EN",

    // Hero — Homepage
    "hero.name": "Claire Orriols",
    "hero.title": "Coach en Santé Holistique",
    "hero.subtitle":
      "Formatrice MovNat & Facilitatrice de retraites en nature",
    "hero.cta": "Découvrir mon approche",

    // Stats bar
    "stats.newsletter": "30 000+",
    "stats.newsletter.label": "abonnés SuperLetter",
    "stats.community": "3 500+",
    "stats.community.label": "personnes accompagnées",
    "stats.since": "Depuis",
    "stats.since.label": "2020",

    // Mission section
    "mission.label": "MA MISSION",
    "mission.title":
      "Vous guider vers une santé globale et une vitalité durable",
    "mission.text":
      "Je crois profondément que tout le monde peut être en meilleure santé. Si nous nous donnons les conditions pour que la vie en nous puisse mieux circuler. La santé, ça s'apprend et ça se cultive... sur tous les plans.",
    "mission.cta": "Mon histoire",

    // Program section — Homepage
    "program.label": "PROGRAMME PHARE",
    "program.title": "Énergie Illimitée",
    "program.subtitle":
      "Un accompagnement de 3 mois pour retrouver ta vitalité",
    "program.description":
      "Un programme transformateur qui allie coaching de groupe, séances individualisées et immersions en nature pour t'aider à sortir du mode survie et retrouver une énergie durable.",
    "program.duration": "3 mois d'accompagnement",
    "program.start": "Prochaine session : 20 avril 2026",
    "program.cta": "Découvrir le programme",

    // Experiences section — Homepage
    "experiences.label": "EXPÉRIENCES",
    "experiences.title": "Retraites & Stages",
    "experiences.subtitle":
      "Des immersions en nature pour se reconnecter à soi",
    "experiences.cta": "Voir les prochaines dates",

    // Retreat card
    "retreat.title": "Retraite Danse & Silence",
    "retreat.edition": "3ème édition",
    "retreat.location": "Écolieu, Sud Aveyron",
    "retreat.description":
      "4 jours de silence, de danse libre et de reconnexion à la nature. Trois médecines : le Silence, le Mouvement et la Nature.",

    // Newsletter
    "newsletter.label": "LA SUPERLETTER",
    "newsletter.title": "Rejoins la communauté",
    "newsletter.text":
      "Chaque mardi, reçois des conseils en nutrition, mouvement, gestion du stress et bien-être holistique. Rejoins plus de 30 000 abonnés.",
    "newsletter.placeholder": "Ton adresse email",
    "newsletter.cta": "S'inscrire",

    // Testimonials
    "testimonial.default":
      "Grâce à Claire, j'ai retrouvé une énergie que je pensais perdue à jamais. Son approche holistique a transformé ma façon de vivre.",
    "testimonial.author": "Témoignage",

    // Footer
    "footer.rights": "Tous droits réservés",
    "footer.tagline":
      "Coach en santé holistique, formatrice MovNat et facilitatrice de retraites en nature.",
    "footer.newsletter": "SuperLetter",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Politique de confidentialité",

    // SEO
    "seo.title": "Amawe — Claire Orriols | Santé Holistique",
    "seo.description":
      "Amawe par Claire Orriols. Coach en nutrition et santé holistique, formatrice MovNat et facilitatrice de retraites en nature. Programmes, retraites et accompagnement.",

    // About page
    "about.label": "À PROPOS",
    "about.title": "Mon histoire",
    "about.intro":
      "Tout a basculé en 2017. Après un grave accident de ski et trois chirurgies, je me suis retrouvée immobilisée pendant des semaines, puis un mois en centre de rééducation.",
    "about.story.1":
      "Mon corps et mon cerveau étaient intoxiqués par des mois d'anesthésies, d'antibiotiques et de médicaments lourds. Mon microbiote était dévasté, mon énergie au plus bas, mon mental en chaos.",
    "about.story.2":
      "J'ai fait un choix radical : refuser les antidouleurs prescrits et ne pas manger la nourriture de la cafétéria. À la place, j'ai appliqué les principes de nutrition-santé que j'étais en train d'apprendre. Je suis devenue mon propre cobaye.",
    "about.story.3":
      "Détox, alimentation anti-inflammatoire et hypotoxique, aliments vivants... J'ai découvert l'alimentation intuitive, cette connexion profonde avec mon corps qui sait intuitivement ce dont il a besoin.",
    "about.story.4":
      "Mais j'ai aussi compris que l'alimentation seule ne guérit pas. Il fallait adresser la partie immergée de l'iceberg : ma santé mentale et émotionnelle. Cette reconstruction globale m'a montré que notre capacité d'auto-guérison est immense et à notre portée.",
    "about.certifications.label": "FORMATIONS & CERTIFICATIONS",
    "about.certifications.iin":
      "Institute for Integrative Nutrition (IIN), New York — Coach en Nutrition et Santé Holistique",
    "about.certifications.cnh":
      "Centre Naturopathie et Hormèse (CNH) — Science, philosophie et renforcement",
    "about.certifications.movnat":
      "MovNat Certification Trainer Niveau 2 — Mouvement naturel",
    "about.certifications.jmv":
      "Naturo-praticienne Méthode JMV — Reprogrammation cellulaire",
    "about.certifications.polyvagal":
      "Théorie polyvagale du système nerveux — Régulation du système nerveux",
    "about.philosophy.label": "MA PHILOSOPHIE",
    "about.philosophy.title": "La Roue de la Santé Holistique",
    "about.philosophy.text":
      "Je suis convaincue que chaque aspect de notre vie — nutrition, sommeil, mouvement, émotions, relations, état d'esprit — est interconnecté et impacte notre santé globale. Mon objectif : vous guider pour atteindre au moins 8/10 dans les domaines qui comptent le plus pour la vie que vous voulez vivre.",
    "about.quote":
      "Tout le monde peut être en meilleure santé. Si nous nous donnons les conditions pour que la vie en nous puisse mieux circuler.",
    "about.roots.label": "MES RACINES",
    "about.roots.text":
      "Élevée dans les montagnes catalanes, j'ai toujours été passionnée par le sport en plein air et la nature. Aujourd'hui, je vis dans notre écolieu en Sud Aveyron, un hameau en pierres au cœur du Parc Naturel des Grands Causses, où je facilite retraites et immersions.",

    // Énergie Illimitée page

    // Hero
    "ei.label": "PROGRAMME",
    "ei.title": "Énergie Illimitée",
    "ei.hero.subtitle":
      "Ton énergie est à la base de tout ce que tu peux créer dans ta vie.",
    "ei.hero.text":
      "En 3 mois, tu restaures ta vitalité physique, tu clarifies ton mental, tu renforces ton équilibre émotionnel — pour arrêter de t'épuiser, retrouver un élan solide, et mettre cette énergie au service de la vie que tu veux vraiment construire.",
    "ei.hero.punchline":
      "Quand ton niveau d'énergie change, tout redevient possible !",
    "ei.cta": "Je candidate pour Énergie Illimitée",
    "ei.cta.secondary": "Prendre un appel avec Claire",
    "ei.cta.note": "Entrée sur candidature — Places limitées",
    "ei.badge": "Inscriptions ouvertes — Démarrage le 20 avril 2026",

    // Promesse
    "ei.promise.title":
      "Retrouve une énergie profonde, stable et durable pour créer une vie qui te ressemble vraiment.",
    "ei.promise.intro":
      "ÉNERGIE ILLIMITÉE est un accompagnement de 3 mois pour restaurer ta vitalité physique, clarifier ton mental et renforcer ton équilibre émotionnel.",
    "ei.promise.1":
      "Quitter la fatigue de fond et retrouver une énergie solide, qui te porte naturellement et soutient ton rythme de vie",
    "ei.promise.2":
      "Retrouver calme, clarté et stabilité à l'intérieur, où ton corps, ton mental et tes émotions fonctionnent enfin ensemble",
    "ei.promise.3":
      "Insuffler un nouvel élan à ta vie et canaliser ton énergie vers ce qui compte vraiment pour toi",
    "ei.promise.footer":
      "Avec : coaching et mentorat hebdomadaire, stages en présentiel qui transforment, et un groupe qui te soutient pleinement dans ton évolution.",

    // Pour qui
    "ei.audience.label": "POUR QUI ?",
    "ei.audience.title": "Pour qui est Énergie Illimitée ?",
    "ei.audience.intro":
      "Cet accompagnement est pour toi si tu te reconnais dans l'un ou plusieurs des points suivants :",
    "ei.audience.1":
      "Tu ressens une fatigue régulière — pas juste \"besoin de vacances\", mais une fatigue qui s'installe, physique ou mentale, et tu sens qu'il y a quelque chose à rééquilibrer en profondeur.",
    "ei.audience.2":
      "Tu sais, au fond, qu'un autre niveau d'énergie est possible pour toi… mais tu ne sais plus par où commencer.",
    "ei.audience.3":
      "Tu veux arrêter de fonctionner en mode \"survie\" ou \"je tiens\" et retrouver une vitalité qui te porte, te soutient, te donne de l'élan.",
    "ei.audience.4":
      "Tu sens que certaines choses te vident (stress, charge mentale, alimentation, manque de mouvement, pensées répétitives, procrastination ou hyper-activité…) et tu veux enfin libérer ce poids.",
    "ei.audience.5":
      "Tu as besoin d'un cadre clair et motivant, avec des outils concrets et un accompagnement qui te soutient dans la durée pour activer une vraie transformation intérieure.",
    "ei.audience.6":
      "Tu veux réhabiter ton corps comme un espace de puissance, de plaisir et de liberté — pas juste \"tenir le coup\", mais créer la vie que tu souhaites vraiment vivre.",
    "ei.audience.7":
      "Tu es entrepreneur(e), engagé(e) dans ton travail ou dans un projet important — et tu as besoin d'une énergie qui soutienne ton rythme au lieu de l'épuiser.",
    "ei.audience.conclusion":
      "Ce programme est pour les personnes qui sentent que leur énergie est la clé du prochain chapitre de leur vie — et qui sont prêtes à sortir du mode survie ou du statu quo pour retrouver un ancrage intérieur solide, vivant et aligné avec ce qu'elles veulent vraiment créer.",

    // Ce que ça va changer
    "ei.results.label": "CE QUE ÇA VA CHANGER",
    "ei.results.title": "Ce que ça va changer concrètement dans ta vie",
    "ei.results.body.title": "Corps & Vitalité",
    "ei.results.body.1":
      "Retrouver un niveau d'énergie stable au quotidien, sans dépendre du sucre ou du café pour tenir",
    "ei.results.body.2":
      "Sortir de l'inflammation chronique, du brouillard mental et de l'épuisement en mettant en place une hygiène de vie respectueuse de ton corps",
    "ei.results.body.3":
      "Observer des signes concrets de mieux-être : meilleure digestion, sommeil réparateur, regain de vitalité",
    "ei.results.mind.title": "Mental & Clarté",
    "ei.results.mind.1":
      "Calmer ton système nerveux pour retrouver un état de paix et de stabilité",
    "ei.results.mind.2":
      "Te libérer de la suradaptation, de la pression intérieure et de l'auto-sabotage",
    "ei.results.mind.3":
      "Installer plus de calme et de présence dans ton quotidien, même quand les choses s'accélèrent",
    "ei.results.emotions.title": "Émotions & Présence",
    "ei.results.emotions.1":
      "T'autoriser à ressentir pleinement sans te laisser submerger",
    "ei.results.emotions.2":
      "Poser tes limites et revenir à une forme de joie simple",
    "ei.results.emotions.3":
      "Te sentir chez toi dans ton corps",
    "ei.results.life.title": "Vie Quotidienne & Réalisation",
    "ei.results.life.1":
      "Remettre ton énergie au service de ta vision, de tes projets et de ton ambition",
    "ei.results.life.2":
      "Être plus présent(e) pour tes proches, sans t'oublier toi-même",
    "ei.results.life.3":
      "Avoir un socle solide pour construire ce que tu veux vraiment vivre",

    // 4 Piliers
    "ei.pillars.label": "LES 4 PILIERS",
    "ei.pillars.title": "Une approche globale, pas un énième régime",
    "ei.pillar.1.title": "Alimentation & Détox naturelle",
    "ei.pillar.1.text":
      "Tu nourris ton corps, tu nettoies tes cellules. Une régénération profonde par l'alimentation et la naturopathie.",
    "ei.pillar.1.benefit.1": "Vitalité digestive",
    "ei.pillar.1.benefit.2": "Baisse de l'inflammation",
    "ei.pillar.1.benefit.3": "Énergie durable",
    "ei.pillar.2.title": "Mouvement & Présence corporelle",
    "ei.pillar.2.text":
      "Tu (re)connectes avec ton corps pour le libérer, le renforcer, l'habiter pleinement.",
    "ei.pillar.2.benefit.1": "Fluidité et mobilité physique",
    "ei.pillar.2.benefit.2": "Force vitale",
    "ei.pillar.2.benefit.3": "Présence et puissance",
    "ei.pillar.3.title": "Mental & Émotions",
    "ei.pillar.3.text":
      "Stress, pensées, croyances, émotions refoulées — tu libères, tu alchimises, tu transformes.",
    "ei.pillar.3.benefit.1": "Sensation de paix intérieure et clarté mentale",
    "ei.pillar.3.benefit.2": "Émotions apaisées",
    "ei.pillar.3.benefit.3": "Reset du système nerveux",
    "ei.pillar.4.title": "Ta priorité et focus du moment",
    "ei.pillar.4.text":
      "Tu priorises enfin ce qui compte pour toi, et qui impacte directement ou indirectement ton niveau d'énergie et de vitalité.",
    "ei.pillar.4.benefit.1": "Sens et cohérence",
    "ei.pillar.4.benefit.2": "Alignement et impact",
    "ei.pillar.4.benefit.3": "Sensation de réalisation",

    // Format
    "ei.format.label": "LE PROGRAMME",
    "ei.format.title": "1 coaching en direct/semaine pendant 3 mois + 2 immersions en présentiel",
    "ei.format.start": "Démarrage le 20 avril 2026",
    "ei.format.coaching.title": "1 coaching de groupe tous les 15 jours",
    "ei.format.coaching.subtitle": "Un mardi sur deux à 20h",
    "ei.format.coaching.text":
      "Pour te guider pas à pas dans ta régénération et ton énergie durable. Tous les 15 jours, on se retrouve en live pour un coaching et mentorat de groupe approfondi, centré sur les 3 piliers clés d'ÉNERGIE ILLIMITÉE.",
    "ei.format.hotseat.title": "1 coaching individualisé format \"hot seat\" tous les 15 jours",
    "ei.format.hotseat.subtitle": "Plusieurs créneaux proposés en journée pour s'adapter à tes disponibilités",
    "ei.format.hotseat.text":
      "Un coaching individualisé où tu présentes tes besoins, ta problématique, tes avancées et on va en profondeur dans les solutions et l'adaptation à ton cas particulier. Ici, on focus sur le 4ème pilier : TA priorité du moment. Les sessions de hot seat assurent un suivi personnalisé tout au long des 3 mois.",
    "ei.format.immersion.title": "2 immersions en présentiel",
    "ei.format.immersion.subtitle": "Comme un stage intensif — inclus dans l'accompagnement. Des moments de transformation et des espaces de pratique où on se retrouve, on partage et on crée de vrais liens.",
    "ei.format.immersion.1.title": "Immersion 1 — Montpellier",
    "ei.format.immersion.1.text":
      "2 jours d'immersion à Montpellier, 2-3 mai 2026",
    "ei.format.immersion.2.title": "Immersion 2 — Écolieu, Sud Aveyron",
    "ei.format.immersion.2.text":
      "4 jours en pleine nature dans notre écolieu, 17-20 juillet 2026 (à 1h30 de Montpellier, 2h30 de Toulouse)",
    "ei.format.hybrid":
      "Un format hybride, en ligne et en présentiel pour une transformation qui s'ancre vraiment.",
    "ei.format.hybrid.text":
      "Tous les coachings et les immersions sont là pour t'apporter des enseignements et pratiques ciblés et actionnables, des réponses concrètes à tes questions, et des espaces d'échange et de partage avec le groupe.",
    "ei.format.rhythm": "= 1 séance par semaine au total",

    // Dates
    "ei.dates.label": "DATES",
    "ei.dates.start": "Début : 20 avril 2026",
    "ei.dates.end": "Fin : 20 juillet 2026",
    "ei.dates.duration": "3 mois d'accompagnement",

    // Tarifs
    "ei.pricing.label": "TARIFS",
    "ei.pricing.earlybird": "1 350 €",
    "ei.pricing.earlybird.label": "Tarif early bird",
    "ei.pricing.regular": "2 000 €",
    "ei.pricing.regular.label": "Tarif normal",
    "ei.pricing.payment.3x": "Paiement en 3x : 450 €/mois",
    "ei.pricing.payment.5x": "Paiement en 5x : 270 €/mois",
    "ei.pricing.includes":
      "Inclus : coaching, immersions (lieu + enseignements), bibliothèque de vidéos mouvement, recettes, groupe WhatsApp, suivi post-programme à M+1",
    "ei.pricing.immersion.included":
      "Pour les immersions, sont inclus dans le tarif : le lieu et la salle qui nous accueille, les enseignements et les transmissions.",
    "ei.pricing.immersion.notincluded":
      "Non inclus : transport, hébergement, repas (des options seront proposées et le transport pourra être mutualisé avec les autres participants).",
    "ei.pricing.payment.info":
      "Paiement sécurisé par carte bancaire ou virement. Paiement en 1x, 3x ou 5x sans frais. Délai légal de rétractation de 14 jours.",

    // Bonus
    "ei.bonus.label": "BONUS INCLUS",
    "ei.bonus.1": "Interventions d'autres expert(e)s",
    "ei.bonus.2": "Ressources complémentaires entre les sessions lives",
    "ei.bonus.3":
      "Bibliothèque de contenus spécifiques sur le mouvement (séances guidées en vidéo) + recettes santé",
    "ei.bonus.4": "Accès au groupe WhatsApp privé d'échanges entre participant(e)s",
    "ei.bonus.5":
      "Une session live \"Cercle de Suivi\" post-programme à M+1",
    "ei.bonus.6":
      "Accès privilégié à une 3ème rencontre en présentiel avec tous les participants de cette édition + tous les anciens d'Énergie Illimitée, env. 2-3 mois après la fin du programme",

    // FAQ
    "ei.faq.label": "QUESTIONS FRÉQUENTES",
    "ei.faq.1.q":
      "Est-ce possible de ne faire que les coachings en ligne ou uniquement les immersions en présentiel ?",
    "ei.faq.1.a":
      "Non, ce n'est pas possible. ÉNERGIE ILLIMITÉE est un parcours pensé comme un tout cohérent et transformateur. Les coachings en ligne t'apportent la régularité, l'ancrage, les clés concrètes et l'intégration dans ton quotidien. Les immersions sont des moments puissants de transformation, de reconnexion et de bascule intérieure, qui ne peuvent être remplacés à distance. Participer à l'ensemble du parcours est essentiel pour vivre une vraie régénération, en profondeur et sur la durée.",
    "ei.faq.2.q":
      "Et si je ne peux pas être là à tous les coachings en live ?",
    "ei.faq.2.a":
      "Pas de souci : tous les coachings sont enregistrés et disponibles en replay. Tu pourras les regarder à ton rythme, et rester dans le fil du programme. Et si tu ne passes pas en hot seat une semaine, tu peux aussi assister aux autres et bénéficier des effets miroirs (souvent très puissants !).",
    "ei.faq.3.q": "Qu'est-ce que le format \"hot seat\" ?",
    "ei.faq.3.a":
      "Le hot seat, c'est un moment de coaching individualisé au sein d'un mini groupe de 4 personnes. Tu viens avec ta problématique, ta situation ou ton blocage, et on va en profondeur dans ta réalité, pour t'apporter des réponses concrètes, des pistes claires et des ajustements sur-mesure. Tu es \"au centre\" pendant 20 à 30 minutes. Le bonus ? Tu peux aussi assister aux hot seats des autres du mini-groupe. C'est souvent là que naissent les plus grands déclics, grâce à l'effet miroir.",
    "ei.faq.4.q":
      "Comment se déroule concrètement le programme ?",
    "ei.faq.4.a":
      "Le programme a été pensé pour s'adapter à ton rythme, pas pour rajouter de la pression. Semaine après semaine, tu alternes entre coaching de groupe et hot seat individualisé, avec 2 immersions en présentiel qui viennent ancrer la transformation. Tous les replays sont disponibles si tu ne peux pas être en live.",
    "ei.contact":
      "Si tu as des questions, contacte-moi à hello@amawe.com",

    // Expériences page
    "exp.label": "EXPÉRIENCES",
    "exp.title": "Retraites & Stages",
    "exp.subtitle":
      "Des immersions en pleine nature pour se reconnecter à l'essentiel",
    "exp.retreat.label": "RETRAITE",
    "exp.retreat.title": "Danse & Silence",
    "exp.retreat.edition": "3ème édition — Février 2026",
    "exp.retreat.dates": "25 - 28 février 2026 (4 jours / 3 nuits)",
    "exp.retreat.location":
      "Écolieu à Saint-Félix-de-Sorgues (12400), Sud Aveyron, Parc Naturel des Grands Causses",
    "exp.retreat.intro":
      "Une retraite silencieuse de 4 jours articulée autour de trois médecines : le Silence, le Mouvement (danse libre) et la Nature.",
    "exp.retreat.includes.label": "LE PROGRAMME COMPREND",
    "exp.retreat.includes.1":
      "Séances quotidiennes de danse et mouvement libre",
    "exp.retreat.includes.2": "Breathwork et méditation",
    "exp.retreat.includes.3": "Marches et randonnées en nature",
    "exp.retreat.includes.4": "Temps d'introspection (guidé ou autonome)",
    "exp.retreat.includes.5": "Cercles de parole (avant/après retraite)",
    "exp.retreat.includes.6": "Soirées cocooning au coin du feu",
    "exp.retreat.includes.7":
      "Repas sains et biologiques en pension complète",
    "exp.retreat.silence":
      "Ceci est une retraite silencieuse. Les participants s'engagent à respecter le silence durant l'intégralité du séjour.",
    "exp.retreat.venue.label": "LE LIEU",
    "exp.retreat.venue.text":
      "Un hameau historique en pierres, avec tiny houses et bâtiments bioclimatiques. Salle de pratique en bois de 120m² avec baies vitrées. Rivière sur la propriété. Salon chaleureux avec poêle à bois. À 1h30 de Montpellier, 2h30 de Toulouse.",
    "exp.retreat.pricing.label":
      "TARIFS (tout inclus : hébergement, pension complète, activités)",
    "exp.retreat.pricing.autonomous":
      "420 EUR — Autonome (van/camping-car)",
    "exp.retreat.pricing.dorm":
      "490 EUR — Dortoir partagé (4-5 lits) — COMPLET",
    "exp.retreat.pricing.gite":
      "560 EUR — Gîte indépendant partagé (3 lits) — 1 PLACE",
    "exp.retreat.pricing.studio":
      "620 EUR — Studio indépendant solo ou couple (-80 EUR si couple)",
    "exp.retreat.booking": "Réserver ma place",
    "exp.retreat.booking.note":
      "Acompte de 200 EUR à la réservation. Solde en espèces sur place.",
    "exp.stage.label": "STAGES",
    "exp.stage.title": "Danse & Silence — Prochaines dates",
    "exp.stage.text":
      "Au-delà des retraites, je propose des stages ponctuels de danse libre et de silence. Ces expériences plus courtes (1-2 jours) sont idéales pour découvrir l'approche avant de s'engager dans une retraite complète.",
    "exp.stage.coming": "Prochaines dates à venir",

    // Contact page
    "contact.label": "CONTACT",
    "contact.title": "Échangeons",
    "contact.text":
      "Une question sur les programmes, les stages ou mon approche ?<br />Une demande de collaboration ou de partenariat ?<br />Un projet à proposer, une intervention à imaginer ensemble ?<br /><br />N'hésite pas à envoyer un mail à <a href='mailto:hello@amawe.com' class='text-[var(--color-secondary)] underline hover:text-[var(--color-primary)] transition-colors'>hello@amawe.com</a>, ou utilise le formulaire juste ici.",
    "contact.email": "hello@amawe.com",
    "contact.location": "Écolieu, Sud Aveyron, France",
    "contact.form.name": "Ton prénom",
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

    // Unlimited Energy page
    "ei.label": "PROGRAM",
    "ei.title": "Unlimited Energy",
    "ei.hero.subtitle":
      "Your energy is the foundation of everything you can create in your life.",
    "ei.hero.text":
      "In 3 months, you restore your physical vitality, clarify your mind, strengthen your emotional balance — to stop burning out, find solid momentum, and channel your energy toward the life you truly want to build.",
    "ei.hero.punchline":
      "When your energy level changes, everything becomes possible again!",
    "ei.cta": "Apply to Unlimited Energy",
    "ei.cta.secondary": "Book a call with Claire",
    "ei.cta.note": "Application-based entry — Limited spots",
    "ei.badge": "Enrollment open — Starting April 20, 2026",
    "ei.promise.title":
      "Find deep, stable, lasting energy to create a life that truly reflects who you are.",
    "ei.promise.intro":
      "UNLIMITED ENERGY is a 3-month program to restore your physical vitality, clarify your mind and strengthen your emotional balance.",
    "ei.promise.1":
      "Leave behind chronic fatigue and find solid energy that naturally supports your rhythm of life",
    "ei.promise.2":
      "Find calm, clarity and stability within, where your body, mind and emotions finally work together",
    "ei.promise.3":
      "Breathe new momentum into your life and channel your energy toward what truly matters to you",
    "ei.promise.footer":
      "With: weekly coaching and mentoring, transformative in-person retreats, and a group that fully supports your evolution.",
    "ei.audience.label": "WHO IS THIS FOR?",
    "ei.audience.title": "Who is Unlimited Energy for?",
    "ei.audience.intro":
      "This program is for you if you recognize yourself in one or more of the following:",
    "ei.audience.1":
      "You experience regular fatigue — not just \"need a vacation\", but a fatigue that settles in, physical or mental, and you sense something needs deep rebalancing.",
    "ei.audience.2":
      "Deep down, you know another level of energy is possible for you… but you no longer know where to start.",
    "ei.audience.3":
      "You want to stop functioning in \"survival\" or \"just getting by\" mode and find a vitality that carries you, supports you, gives you momentum.",
    "ei.audience.4":
      "You feel that certain things are draining you (stress, mental load, diet, lack of movement, repetitive thoughts, procrastination or hyperactivity…) and you want to finally release that weight.",
    "ei.audience.5":
      "You need a clear, motivating framework with concrete tools and support that lasts, to activate a real inner transformation.",
    "ei.audience.6":
      "You want to reinhabit your body as a space of power, pleasure and freedom — not just \"hang in there\", but create the life you truly wish to live.",
    "ei.audience.7":
      "You're an entrepreneur, committed to your work or an important project — and you need energy that supports your rhythm instead of depleting it.",
    "ei.audience.conclusion":
      "This program is for people who feel that their energy is the key to the next chapter of their life — and who are ready to leave survival mode or the status quo behind to find a solid, vibrant inner anchor aligned with what they truly want to create.",
    "ei.results.label": "WHAT WILL CHANGE",
    "ei.results.title": "What will concretely change in your life",
    "ei.results.body.title": "Body & Vitality",
    "ei.results.body.1":
      "Find a stable daily energy level, without relying on sugar or coffee to keep going",
    "ei.results.body.2":
      "Break free from chronic inflammation, brain fog and exhaustion by building a lifestyle that respects your body",
    "ei.results.body.3":
      "Observe concrete signs of well-being: better digestion, restorative sleep, renewed vitality",
    "ei.results.mind.title": "Mind & Clarity",
    "ei.results.mind.1":
      "Calm your nervous system to find a state of peace and stability",
    "ei.results.mind.2":
      "Free yourself from over-adaptation, inner pressure and self-sabotage",
    "ei.results.mind.3":
      "Install more calm and presence in your daily life, even when things accelerate around you",
    "ei.results.emotions.title": "Emotions & Presence",
    "ei.results.emotions.1":
      "Allow yourself to feel fully without being overwhelmed",
    "ei.results.emotions.2":
      "Set your boundaries and return to a form of simple joy",
    "ei.results.emotions.3":
      "Feel at home in your body",
    "ei.results.life.title": "Daily Life & Fulfillment",
    "ei.results.life.1":
      "Put your energy at the service of your vision, your projects and your ambition",
    "ei.results.life.2":
      "Be more present for your loved ones, without forgetting yourself",
    "ei.results.life.3":
      "Have a solid foundation to build the life you truly want to live",
    "ei.pillars.label": "THE 4 PILLARS",
    "ei.pillars.title": "A holistic approach, not another diet",
    "ei.pillar.1.title": "Nutrition & Natural Detox",
    "ei.pillar.1.text":
      "You nourish your body, you cleanse your cells. A deep regeneration through food and naturopathy.",
    "ei.pillar.1.benefit.1": "Digestive vitality",
    "ei.pillar.1.benefit.2": "Reduced inflammation",
    "ei.pillar.1.benefit.3": "Lasting energy",
    "ei.pillar.2.title": "Movement & Body Presence",
    "ei.pillar.2.text":
      "You (re)connect with your body to free it, strengthen it, fully inhabit it.",
    "ei.pillar.2.benefit.1": "Physical fluidity and mobility",
    "ei.pillar.2.benefit.2": "Vital strength",
    "ei.pillar.2.benefit.3": "Presence and power",
    "ei.pillar.3.title": "Mind & Emotions",
    "ei.pillar.3.text":
      "Stress, thoughts, beliefs, repressed emotions — you release, you alchemize, you transform.",
    "ei.pillar.3.benefit.1": "Inner peace and mental clarity",
    "ei.pillar.3.benefit.2": "Soothed emotions",
    "ei.pillar.3.benefit.3": "Nervous system reset",
    "ei.pillar.4.title": "Your priority and current focus",
    "ei.pillar.4.text":
      "You finally prioritize what matters to you, what directly or indirectly impacts your energy and vitality level.",
    "ei.pillar.4.benefit.1": "Meaning and coherence",
    "ei.pillar.4.benefit.2": "Alignment and impact",
    "ei.pillar.4.benefit.3": "Sense of fulfillment",
    "ei.format.label": "THE PROGRAM",
    "ei.format.title": "1 live coaching/week for 3 months + 2 in-person immersions",
    "ei.format.start": "Starting April 20, 2026",
    "ei.format.coaching.title": "Group coaching every 2 weeks",
    "ei.format.coaching.subtitle": "Every other Tuesday at 8pm",
    "ei.format.coaching.text":
      "To guide you step by step in your regeneration and lasting energy. Every 2 weeks, we meet live for in-depth group coaching and mentoring, focused on the 3 key pillars of UNLIMITED ENERGY.",
    "ei.format.hotseat.title": "Individualized \"hot seat\" coaching every 2 weeks",
    "ei.format.hotseat.subtitle": "Multiple time slots offered during the day to fit your schedule",
    "ei.format.hotseat.text":
      "An individualized coaching session where you present your needs, challenges and progress and we go deep into solutions tailored to your situation. Here, we focus on the 4th pillar: YOUR current priority. Hot seat sessions ensure personalized follow-up throughout the 3 months.",
    "ei.format.immersion.title": "2 in-person immersions",
    "ei.format.immersion.subtitle": "Like an intensive retreat — included in the program. Moments of transformation and practice spaces where we meet, share and create real bonds.",
    "ei.format.immersion.1.title": "Immersion 1 — Montpellier",
    "ei.format.immersion.1.text":
      "2-day immersion in Montpellier, May 2-3, 2026",
    "ei.format.immersion.2.title": "Immersion 2 — Eco-village, South Aveyron",
    "ei.format.immersion.2.text":
      "4 days in nature at our eco-village, July 17-20, 2026 (1.5h from Montpellier, 2.5h from Toulouse)",
    "ei.format.hybrid":
      "A hybrid format, online and in-person for a transformation that truly anchors.",
    "ei.format.hybrid.text":
      "All coaching sessions and immersions are designed to bring you targeted, actionable teachings and practices, concrete answers to your questions, and spaces for exchange and sharing with the group.",
    "ei.format.rhythm": "= 1 session per week total",
    "ei.dates.label": "DATES",
    "ei.dates.start": "Start: April 20, 2026",
    "ei.dates.end": "End: July 20, 2026",
    "ei.dates.duration": "3 months of guidance",
    "ei.pricing.label": "PRICING",
    "ei.pricing.earlybird": "€1,350",
    "ei.pricing.earlybird.label": "Early bird rate",
    "ei.pricing.regular": "€2,000",
    "ei.pricing.regular.label": "Regular rate",
    "ei.pricing.payment.3x": "Pay in 3x: €450/month",
    "ei.pricing.payment.5x": "Pay in 5x: €270/month",
    "ei.pricing.includes":
      "Includes: coaching, immersions (venue + teachings), movement video library, recipes, WhatsApp group, post-program follow-up at M+1",
    "ei.pricing.immersion.included":
      "For the immersions, included in the price: the venue and room, teachings and transmissions.",
    "ei.pricing.immersion.notincluded":
      "Not included: transport, accommodation, meals (options will be offered and transport can be shared with other participants).",
    "ei.pricing.payment.info":
      "Secure payment by card or bank transfer. Pay in 1x, 3x or 5x interest-free. 14-day legal cooling-off period.",
    "ei.bonus.label": "BONUSES INCLUDED",
    "ei.bonus.1": "Guest expert sessions",
    "ei.bonus.2": "Complementary resources between live sessions",
    "ei.bonus.3":
      "Library of movement-specific content (guided video sessions) + healthy recipes",
    "ei.bonus.4": "Access to the private WhatsApp group for participants",
    "ei.bonus.5":
      "A live \"Follow-up Circle\" session post-program at M+1",
    "ei.bonus.6":
      "Exclusive access to a 3rd in-person gathering with all participants of this edition + all Unlimited Energy alumni, approx. 2-3 months after the program ends",
    "ei.faq.label": "FAQ",
    "ei.faq.1.q":
      "Can I do only the online coaching or only the in-person immersions?",
    "ei.faq.1.a":
      "No, that's not possible. UNLIMITED ENERGY is designed as a coherent, transformative journey. Online coaching provides regularity, grounding, concrete tools and integration into your daily life. Immersions are powerful moments of transformation, reconnection and inner shift that cannot be replaced remotely. Participating in the full program is essential for deep, lasting regeneration.",
    "ei.faq.2.q":
      "What if I can't make all the live coaching sessions?",
    "ei.faq.2.a":
      "No worries: all coaching sessions are recorded and available as replays. You can watch them at your own pace and stay on track with the program. If you miss a hot seat week, you can attend others' sessions and benefit from the mirror effect (often very powerful!).",
    "ei.faq.3.q": "What is the \"hot seat\" format?",
    "ei.faq.3.a":
      "The hot seat is an individualized coaching moment within a mini group of 4 people. You bring your challenge, situation or block, and we go deep into your reality to provide concrete answers, clear pathways and custom adjustments. You're \"in the center\" for 20-30 minutes. The bonus? You can also attend others' hot seats. That's often where the biggest breakthroughs happen, through the mirror effect.",
    "ei.faq.4.q":
      "How does the program actually work?",
    "ei.faq.4.a":
      "The program is designed to adapt to your rhythm, not to add pressure. Week after week, you alternate between group coaching and individualized hot seats, with 2 in-person immersions that anchor the transformation. All replays are available if you can't attend live.",
    "ei.contact":
      "If you have questions, contact me at hello@amawe.com",

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
