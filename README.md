# NetHistory 🎬

PWA pour visualiser votre historique de visionnage Netflix.

## Fonctionnalités

- 📺 **Séries** — grille ou liste, groupées avec compteur d'épisodes et saisons
- 🎬 **Films** — liste chronologique
- 📅 **Chronologie** — activité par année et par mois
- 📊 **Statistiques** — top 10 séries, activité globale
- 🖼️ **Affiches TMDB** — récupérées automatiquement avec synopsis
- 🔍 Recherche, filtres, tri
- 📱 **PWA** — installable sur mobile et desktop

## Utilisation

1. Ouvrir l'app
2. Glisser-déposer votre fichier `NetflixViewingHistory.csv`
3. C'est tout — aucune donnée n'est envoyée sur un serveur

## Télécharger son historique Netflix

1. netflix.com → Compte → Profil → Accès aux données
2. Télécharger → Historique de visionnage
3. Attendre l'email Netflix, puis importer le CSV

## Déploiement GitHub Pages

```bash
git clone https://github.com/VOTRE_USER/netflix-history
cd netflix-history
# Activer GitHub Pages sur la branche main, dossier /root
```

## Stack

- HTML / CSS / JS vanilla (zéro dépendance)
- [TMDB API](https://www.themoviedb.org/) pour les affiches
- Service Worker pour le mode offline
