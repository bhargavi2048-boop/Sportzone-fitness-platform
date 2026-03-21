# SportZone — UI/UX Prototype

A fully clickable mobile app prototype for a sports & fitness discovery platform.

## How to Run

1. Extract the ZIP file
2. Open `index.html` in any browser (Chrome / Firefox / Edge / Safari)
3. No server needed — works offline completely

## Project Structure

```
sportzone/
├── index.html          ← Main file (open this)
├── css/
│   └── style.css       ← All styles, variables, components
├── js/
│   └── app.js          ← All interactions & navigation
└── README.md           ← This file
```

## Screens (18 total)

| Screen | ID  | Description |
|--------|-----|-------------|
| Splash | s1  | App intro with Get Started |
| Onboarding | s2 | Sport selection & city |
| Home Feed | s3 | Venues, trainers, events |
| Search & Filter | s4 | Search with advanced filter sheet |
| Venue Detail | s5 | Court info, ratings, pricing |
| Slot Booking | s6 | Date, time slot, court picker |
| Payment | s7 | UPI / Card / Net Banking |
| Booking Confirmed | s7b | Success screen |
| Events Listing | s8 | Browse tournaments & sessions |
| Event Detail | s10 | Join event, organizer chat |
| Join Success | s11 | Confirmation screen |
| Profile | s12 | Player dashboard, role switcher |
| Edit Profile | s13 | Update personal info |
| Notifications | s14 | Toggle preferences |
| Log Out | s15 | Confirm logout |
| In-App Chat | s16 | Message organizer / players |
| Venue Host Dashboard | s17 | Court schedule, bookings, revenue |
| Trainer Dashboard | s18 | Sessions, clients, requests |

## Key Features

- **Advanced Filter Sheet** — Price slider synced with chips, distance, rating, amenities
- **In-App Messaging** — Chat with organizer, quick reply chips, live send
- **3 User Roles** — Player, Venue Host, Trainer — each with a dedicated view
- **Full Booking Flow** — Search → Venue → Slot → Payment → Confirmation
- **Community Layer** — Events, join flow, player spots tracker

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Syne (headings) + DM Sans (body)
- No frameworks or dependencies — works fully offline

---
Built for the SportZone UI/UX Design Challenge
