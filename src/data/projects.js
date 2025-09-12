// Booki
import booki1 from '../assets/booki1.png'
import booki2 from '../assets/booki2.png'
import booki3 from '../assets/booki3.png'

// Buel
import buel1 from '../assets/buel1.png'
import buel2 from '../assets/buel2.png'
import buel3 from '../assets/buel3.png'
import buel4 from '../assets/buel4.png'

// Kasa
import kasa1 from '../assets/kasa1.png'
import kasa2 from '../assets/kasa2.png'
import kasa3 from '../assets/kasa3.png'
import kasa4 from '../assets/kasa4.png'

// MVG
import mvg1 from '../assets/mvg1.png'
import mvg2 from '../assets/mvg2.png'
import mvg3 from '../assets/mvg3.png'
import mvg4 from '../assets/mvg4.png'


// --- Données projets ---
export const projects = [
{
    title: 'BOOKI',
    description: 'Intégration des maquettes Figma d’un site de réservation d’hébergements et d’activités en HTML5 / CSS3. L’objectif était de respecter fidèlement le design fourni (pixel-perfect) tout en assurant un affichage responsive sur desktop, tablette et mobile grâce aux media queries. La mise en page suit les standards du W3C et les bonnes pratiques d’accessibilité. Le projet a été versionné avec Git/GitHub pour assurer un suivi clair du développement.',
    image: booki1,
    hoverImage: booki2,
    imagesCarrousel: [booki1, booki2, booki3],
    stack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/hschbonus/OCP2',
  },
  {
    title: 'KASA',
    description: 'Développement complet du front-end d’une application de location immobilière en React avec Vite. Mise en place d’un design responsive. Création des composants dynamiques (galerie avec navigation circulaire, menu déroulant animé avec Collapse, gestion des routes et erreurs 404 via React Router). Utilisation de Sass pour l’organisation des styles et implémentation d’animations CSS. Gestion des données depuis un fichier JSON simulant l’API et versionnement sur Git/GitHub.',
    image: kasa1,
    hoverImage: kasa2,
    imagesCarrousel:[kasa1, kasa2, kasa3, kasa4],
    stack: ['React', 'Sass'],
    githubLink: 'https://github.com/hschbonus/OCP5',
  },
  {
    title: 'SOPHIE BUEL',
    description: 'Développement du site portfolio d’une architecte d’intérieur avec un front dynamique en JavaScript connecté à un back-end Node.js existant. Mise en place d’une galerie dynamique alimentée par l’API (affichage, filtrage par catégories). Création d’une page de connexion sécurisée avec gestion de l’authentification et stockage du token. Développement d’une modale interactive pour l’ajout et la suppression de projets, avec mise à jour du DOM en temps réel sans rechargement de la page.',
    image: buel1,
    hoverImage: buel3,
    imagesCarrousel: [buel1, buel2, buel3, buel4],
    stack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/hschbonus/OCP3',
  },
  {
    title: 'MON VIEUX GRIMOIRE',
    description: 'Développement du back-end complet d’un site de référencement et de notation de livres avec Node.js, Express et MongoDB. Mise en place d’un modèle de données Mongoose et d’un système d’authentification sécurisée (JWT + mots de passe chiffrés). Création des routes CRUD pour la gestion des livres et ajout de la notation par utilisateur avec calcul automatique de la moyenne.',
    image: mvg1,
    hoverImage: mvg2,
    imagesCarrousel: [mvg1, mvg2, mvg3, mvg4],
    stack: ['Nodejs', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/hschbonus/OCP6',
  },
]
