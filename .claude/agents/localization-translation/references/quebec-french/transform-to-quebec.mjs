#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Transformations québécoises avec expressions locales et références culturelles
const quebecTransformations = {
  // Changement de ton général - vouvoiement vers tutoiement
  'Vous ne pouvez': 'Tu peux pas',
  'Vous devez': 'Tu dois',
  'Vous pouvez': 'Tu peux',
  'Vous devriez': 'Tu devrais',
  'vous devez': 'tu dois',
  'vous pouvez': 'tu peux',
  'vous devriez': 'tu devrais',
  'Assurez-vous': 'Assure-toi',
  'Choisissez': 'Choisis',
  'Créez': 'Crée',
  'Utilisez': 'Utilise',
  'Évitez': 'Évite',
  'Suivez': 'Suis',
  'Testez': 'Teste',
  'Configurez': 'Configure',
  
  // Expressions québécoises authentiques
  'Il est important': 'C\'est tiguidou important',
  'Il est essentiel': 'C\'est crucial en batince',
  'très important': 'super important',
  'extrêmement': 'en masse',
  'beaucoup': 'en masse',
  'nombreux': 'une gang de',
  'plusieurs': 'pas mal de',
  'rapidement': 'vite en tabarouette',
  'immédiatement': 'tusuite',
  'efficacement': 'comme il faut',
  'parfaitement': 'sur la coche',
  'correctement': 'comme du monde',
  'attention': 'fais ben attention',
  'problème': 'trouble',
  'difficulté': 'misère',
  'solution': 'patente',
  'stratégie': 'plan de match',
  'méthode': 'façon de faire',
  'technique': 'truc',
  'astuce': 'tip de pro',
  'conseil': 'p\'tit conseil',
  'excellent': 'sur la coche',
  'très bien': 'pas pire',
  'c\'est bien': 'c\'est l\'fun',
  'ça marche': 'l\'affaire est ketchup',
  'pas mal': 'pas pire',
  'intensément': 'ça fesse',
  
  // Terminologie marketing avec authentique québécois
  'campagne de marketing': 'batch de marketing',
  'liste d\'abonnés': 'ta gang d\'abonnés',
  'vos abonnés': 'ta gang',
  'les abonnés': 'ta gang',
  'destinataires': 'ta gang de clients',
  'utilisateurs': 'ton monde',
  'clients': 'ta clientèle',
  'audience': 'ton public',
  'performance': 'comment ça pogne',
  'taux d\'ouverture': 'combien de monde qui ouvrent tes affaires',
  'taux de clic': 'combien qui cliquent',
  'engagement': 'comment ton monde réagit',
  'conversion': 'comment tu fais de l\'argent avec',
  'retour sur investissement': 'combien tu fais de piasses avec ça',
  'ROI': 'tes piasses qui rentrent',
  'email': 'courriel',
  'e-mail': 'courriel',
  'chat': 'clavardage',
  'messagerie instantanée': 'clavardage',
  'shopping': 'magasinage',
  'acheter': 'magasiner',
  'travail': 'job',
  'emploi': 'job',
  'trafic': 'achalandage',
  'visiteurs': 'achalandage',
  'podcast': 'balado',
  'parking': 'stationnement',
  
  // Références culturelles québécoises
  'comme par magie': 'comme par magie de Noël',
  'rapide comme l\'éclair': 'vite comme une passe de Sidney Crosby',
  'froid comme la glace': 'frette comme un hiver à Saguenay',
  'chaud comme': 'chaud comme dans un sauna au Mont-Tremblant',
  'doux comme': 'doux comme du sirop d\'érable',
  'fort comme': 'solide comme du bois d\'érable',
  'populaire': 'populaire comme un double-double au Tim',
  'indispensable': 'important comme une pelle à neige en janvier',
  'essentiel': 'important comme le hockey le samedi soir',
  'fondamental': 'de base comme mettre ses mitaines l\'hiver',
  
  // Expressions pour les erreurs et problèmes
  'erreur': 'gaffe',
  'faute': 'bêtise',
  'mauvaise pratique': 'affaire à pas faire',
  'éviter': 'pas faire ça pantoute',
  'interdire': 'défendu en masse',
  'danger': 'danger comme traverser sur la glace mince',
  'risque': 'risque de se planter solide',
  'problématique': 'ça peut mal virer',
  
  // Expressions positives
  'excellent': 'full bon',
  'fantastique': 'malade!',
  'parfait': 'parfait comme une partie de hockey 7-0',
  'idéal': 'l\'idéal en masse',
  'optimal': 'le top du top',
  'recommandé': 'je te conseille ça fort',
  'suggéré': 'tu devrais essayer ça',
  'efficace': 'ça marche comme un charme',
  'réussi': 'ça pogne en masse',
  'succès': 'succès bœuf',
  'intelligent': 'fin',
  'gentil': 'fin',
  'agréable': 'correct',
  'd\'accord': 'correct',
  'ok': 'correct',
  'travailleur': 'vaillant',
  'énergique': 'vaillant',
  
  // Expressions de temps typiquement québécoises  
  'immédiatement': 'à matin même',
  'bientôt': 'dans pas long',
  'plus tard': 'tantôt',
  'récemment': 'pas longtemps passé',
  'maintenant': 'à c\'t\'heure',
  'actuellement': 'en ce moment',
  'longtemps': 'un boutte',
  'rapidement': 'en vitesse',
  
  // Connecteurs et transitions québécois
  'Cependant': 'Par contre',
  'Néanmoins': 'Mais quand même',
  'Toutefois': 'Mais bon',
  'En effet': 'En fait',
  'Par conséquent': 'Fait que',
  'Ainsi': 'Comme ça',
  'Ensuite': 'Pis après',
  'Finalement': 'Au final',
  'En conclusion': 'Pour finir',
  'En résumé': 'En gros',
  'Premièrement': 'Primo',
  'Deuxièmement': 'Deuxio',
  'Troisièmement': 'Troisio',
  'Bonjour': 'Bon matin',
  'au revoir': 'à tantôt',
  'à bientôt': 'à tantôt',
  
  // Spécifique au contenu email
  'ligne d\'objet': 'sujet de ton courriel',
  'contenu du courriel': 'ce que tu écris dans ton courriel',
  'gabarit': 'template',
  'mise en page': 'comment c\'est arrangé',
  'design': 'look de tes affaires',
  'délivrabilité': 'faire en sorte que ça se rende',
  'filtre anti-pourriel': 'filtre à spam',
  'pollupostage': 'spam cheap',
  'pourriel': 'junk mail',
};

// Phrases complètes et expressions idiomatiques
const quebecPhrases = {
  'C\'est très important de': 'Faut vraiment que tu',
  'Il est crucial de': 'C\'est super important de',
  'Nous recommandons de': 'On te conseille de',
  'Il est conseillé de': 'Tu ferais mieux de',
  'N\'oubliez pas de': 'Oublie pas de',
  'Veillez à': 'Assure-toi de',
  'Prenez soin de': 'Fais attention de',
  'Assurez-vous de': 'Assure-toi que',
  
  // Expressions d'introduction québécoises
  'Dans cet article': 'Dans c\'te article-là',
  'Ce guide': 'C\'te guide-là',
  'Cette section': 'C\'te section-là',
  'Ces informations': 'Ces infos-là',
  'Cet exemple': 'C\'t\'exemple-là',
  
  // Expressions de conclusion
  'En conclusion': 'Pour conclure',
  'Pour résumer': 'En gros',
  'En fin de compte': 'Au final',
  'Pour terminer': 'Pour finir',
  
  // Expressions additionnelles du lexique québécois
  'Désolé, mais': 'Scusez, mais',
  'Excusez-moi': 'Scusez',
  'S\'il vous plaît': 'S\'il te plaît',
  'Je suis désolé': 'Scusez',
  'travail acharné': 'job vaillante',
  'travailler dur': 'travailler vaillant',
  'faire des achats': 'magasiner',
  'centre commercial': 'centre d\'achats',
  'beaucoup de monde': 'ben de l\'achalandage',
  'beaucoup de visiteurs': 'ben de l\'achalandage',
  'conversation en ligne': 'clavardage',
  'tchater': 'clavarder',
  'chat en ligne': 'clavardage',
  'discuter en ligne': 'clavarder',
  'écouter un podcast': 'écouter un balado',
  'créer un podcast': 'créer un balado',
  'héberger un podcast': 'héberger un balado',
  'place de parking': 'place de stationnement',
  'se garer': 'se stationner',
  'garer la voiture': 'stationner le char',
  'entreprise en démarrage': 'startup québécoise',
  'lancer une entreprise': 'partir en business',
  'faire du business': 'faire des affaires',
};

// Métaphores et comparaisons québécoises amusantes
const quebecMetaphors = [
  {
    search: /comme.*?(rapide|vite)/gi,
    replace: 'vite comme une slap shot de Weber'
  },
  {
    search: /comme.*?(froid|frette)/gi, 
    replace: 'frette comme les pieds sur la galerie en janvier'
  },
  {
    search: /comme.*?(chaud)/gi,
    replace: 'chaud comme une tourtière qui sort du four'
  },
  {
    search: /comme.*?(doux)/gi,
    replace: 'doux comme de la tire d\'érable'
  },
  {
    search: /comme.*?(fort|solide)/gi,
    replace: 'solide comme un banc de neige'
  }
];

// Interjections et expressions typiques authentiques
const quebecInterjections = [
  'Écoute bien ça:',
  'Tiens-toi bien:',  
  'Check ça:',
  'Pis là,',
  'Anyway,',
  'En tout cas,',
  'Bon,',
  'Là,',
  'Fait que,',
  'T\'sé,',
  'Lâche pas la patate,',
  'Bon ben,',
  'Scusez,',
  'À tantôt,'
];

// Fonction pour ajouter du piquant québécois
function addQuebecFlavor(text) {
  let result = text;
  
  // Ajouter des interjections au début de certains paragraphes
  const paragraphs = result.split('\n\n');
  const flavoredParagraphs = paragraphs.map((paragraph, index) => {
    // Ajouter une interjection à environ 1 paragraphe sur 4
    if (index > 0 && index % 4 === 0 && Math.random() > 0.6) {
      const interjection = quebecInterjections[Math.floor(Math.random() * quebecInterjections.length)];
      // Ne pas ajouter sur les headers markdown
      if (!paragraph.startsWith('#') && paragraph.trim().length > 50) {
        return interjection + ' ' + paragraph;
      }
    }
    return paragraph;
  });
  
  return flavoredParagraphs.join('\n\n');
}

// Fonction principale de transformation
function applyQuebecTransformations(content) {
  let transformed = content;
  
  // Appliquer les transformations de base
  for (const [french, quebec] of Object.entries(quebecTransformations)) {
    const regex = new RegExp(french.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'), 'gi');
    transformed = transformed.replace(regex, quebec);
  }
  
  // Appliquer les phrases complètes
  for (const [french, quebec] of Object.entries(quebecPhrases)) {
    const regex = new RegExp(french.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'), 'gi');
    transformed = transformed.replace(regex, quebec);
  }
  
  // Appliquer les métaphores
  quebecMetaphors.forEach(metaphor => {
    transformed = transformed.replace(metaphor.search, metaphor.replace);
  });
  
  // Changer les URLs pour pointer vers fr-qc
  transformed = transformed.replace(/\/fr-CA\//g, '/fr-qc/');
  transformed = transformed.replace(/\/fr-ca\//g, '/fr-qc/');
  
  // Ajouter du piquant québécois
  transformed = addQuebecFlavor(transformed);
  
  return transformed;
}

// Fonction pour traiter un fichier
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const transformedContent = applyQuebecTransformations(content);
    
    await fs.writeFile(filePath, transformedContent, 'utf-8');
    console.log(`✓ Transformé: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`✗ Erreur avec ${filePath}:`, error.message);
  }
}

// Fonction pour traiter un répertoire
async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      await processFile(fullPath);
    }
  }
}

// Exécution principale
async function main() {
  const frQcPath = path.join(__dirname, '..', 'pages', 'fr-qc', 'best-practices');
  
  console.log('🍁 Transformation en québécois en cours...');
  console.log(`Répertoire: ${frQcPath}`);
  
  await processDirectory(frQcPath);
  
  console.log('🎉 Transformation québécoise terminée!');
  console.log('');
  console.log('📚 Transformations appliquées:');
  console.log('   • Tutoiement partout');
  console.log('   • Expressions québécoises');
  console.log('   • Références culturelles locales');
  console.log('   • Métaphores amusantes');
  console.log('   • Ton décontracté mais professionnel');
}

// Lancer le script
main().catch(console.error);