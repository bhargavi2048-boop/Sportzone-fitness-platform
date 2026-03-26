
<div align="center">

```
 ███████╗██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ███╗   ██╗███████╗
 ██╔════╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝╚══███╔╝██╔═══██╗████╗  ██║██╔════╝
 ███████╗██████╔╝██║   ██║██████╔╝   ██║     ███╔╝ ██║   ██║██╔██╗ ██║█████╗  
 ╚════██║██╔═══╝ ██║   ██║██╔══██╗   ██║    ███╔╝  ██║   ██║██║╚██╗██║██╔══╝  
 ███████║██║     ╚██████╔╝██║  ██║   ██║   ███████╗╚██████╔╝██║ ╚████║███████╗
 ╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
```

### *Discover · Play · Connect*

**A fully interactive mobile sports app prototype — zero frameworks, zero dependencies, one file.**

![Version](https://img.shields.io/badge/version-3.0-1a6ef8?style=flat-square)
![Build](https://img.shields.io/badge/build-passing-16a34a?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-7c3aed?style=flat-square)
![Screens](https://img.shields.io/badge/screens-21-f97316?style=flat-square)
![Size](https://img.shields.io/badge/bundle-20KB-dc2626?style=flat-square)
![Responsive](https://img.shields.io/badge/responsive-mobile--first-0891b2?style=flat-square)

</div>

---

## ◈ What Is SportZone?

SportZone is a **high-fidelity mobile UI prototype** for a sports discovery and booking platform. It simulates the complete user journey — from onboarding to payment confirmation — entirely within a single HTML file, no build tools, no npm, no React. Just raw HTML, CSS, and vanilla JavaScript rendered as a pixel-perfect phone experience.

Built as a design + engineering exercise by **Akash**, this prototype demonstrates that production-quality UI/UX doesn't require a framework stack. Every screen, every transition, every chip filter, every chat bubble — all hand-crafted.

---

## ◈ Live Architecture

```
sportzone/
└── index.html          ← The entire app (HTML + CSS + JS, ~124KB raw)
```

That's it. One file. Open it in any browser and it works.

> On **desktop** → renders as a centered phone frame (430×900px) with rounded corners and drop shadow.  
> On **mobile** → fills the full viewport, feels like a native installed app.

---

## ◈ Feature Map

### 🏠 Home Feed
- Personalised greeting with live system clock in the status bar
- **Sport filter chips (Badminton / Cricket / Football / Swimming / Gym / Tennis)** — each chip dynamically swaps the hero banner AND the venue list to show only sport-relevant content
- Quick-stats dashboard: Upcoming bookings · Wallet balance · Nearby events
- Horizontal scrolling trainer cards with ratings and pricing
- Next-activity card with inline Chat and Directions shortcuts

### 🔍 Smart Search
- Filter chips: Open Now · Indoor · Under ₹500 · With Trainer — live-filter the results list
- Result count updates dynamically as filters change
- Advanced filter bottom sheet with price range slider, distance slider, amenity toggles, availability chips

### 🏟️ Venue Detail
- Wishlist heart toggle (save / unsave with toast feedback)
- Share link button
- Photo gallery row
- Pricing breakdown (court fee / shuttlecock / with trainer)
- Inline star reviews with reviewer avatars

### 📅 Slot Booking
- 7-day horizontal date picker
- Duration selector (30 min / 1 hr / 1.5 hr / 2 hr)
- Morning + Evening time slots (taken slots visually disabled)
- Court selector (Court 1–4, sold-out shown)
- Live booking summary bar at the bottom

### 💳 Payment Flow
- Order summary with line items
- Promo code field with Apply button
- 4 payment methods: UPI · Card · SportZone Wallet · Net Banking
- Radio button selection — only one active at a time
- Payment → Booking Confirmed success screen with Add to Calendar / Chat shortcuts

### 🎟️ Events
- **Event filter chips** (All / Tournament / Practice / Casual / Free) — hides non-matching cards
- Progress bars showing spot fill rate with color changes (green → amber as it fills)
- Create Event form with sport selector, venue, date/time, player cap, entry fee, skill level

### 💬 In-App Chat
- Realistic message thread with timestamps
- Smart auto-reply engine (contextual: gear → kit answer, parking → parking answer, etc.)
- Quick reply suggestion chips that disappear after use
- Contenteditable input with Enter-to-send support
- Incoming message animation

### 👤 Profile
- Stats grid: Bookings · Events · Friends · Wallet balance
- Role switcher banners → Venue Host View / Trainer View
- Upcoming activity cards with tap-to-navigate
- Achievements row (streak, rating, social badges)
- Full settings menu (Edit Profile · Notifications · Wallet · Help · Logout)

### 🏟️ Venue Host Dashboard
- Live occupancy stats (Bookings · Revenue · Occupancy %)
- Court-selector tabs for today's schedule
- Color-coded timeline (Confirmed → green, Pending → amber, Available → grey)
- One-tap Accept / Decline for pending bookings (row fades out on action)

### 🎽 Trainer Dashboard
- Session timeline: NOW · NEXT · LATER with colour-coded borders
- Active client list with progress bars (Beginner → Intermediate tracking)
- New coaching request cards with Accept / Chat / Decline actions

### 💰 Wallet
- Animated balance card with gradient
- Add Money + Withdraw buttons
- Transaction history (credits in green, debits in red)
- Referral programme card with copy link

### ⭐ Rate & Review
- Interactive 5-star rating (tap any star, fills from left)
- Tag chips for quick feedback categories
- Freetext review area

### 🔔 Notifications
- Today / Yesterday grouping
- Tap-to-navigate (booking confirmation → taps back to success screen, chat notification → opens chat)
- Unread indicator dot

---

## ◈ All Screens (21 Total)

| ID   | Screen              | ID   | Screen                  |
|------|---------------------|------|-------------------------|
| s1   | Splash              | s12  | Profile                 |
| s2   | Onboarding (Sports) | s13  | Edit Profile            |
| s3   | Home Feed           | s14  | Notification Settings   |
| s4   | Search              | s15  | Logout Confirmation     |
| s5   | Venue Detail        | s16  | In-App Chat             |
| s6   | Slot Booking        | s17  | Venue Host Dashboard    |
| s7   | Payment             | s18  | Trainer Dashboard       |
| s7b  | Booking Success     | s19  | Notifications Hub       |
| s8   | Events Feed         | s20  | Wallet                  |
| s9   | Create Event        | s21  | Rate & Review           |
| s10  | Event Detail        |      |                         |
| s11  | Join Success        |      |                         |

---

## ◈ Technical Decisions

### Why no framework?
This prototype was built to prove the point: **a polished, complex mobile UI does not need React, Vue, or Angular.** The entire interaction model — navigation, filtering, state, animations — is ~200 lines of vanilla JavaScript.

### CSS Architecture
- CSS custom properties (variables) for the entire design token system: colors, spacing, radii, shadows
- No utility-class framework (no Tailwind). Every component is a single purposeful class
- Mobile-first layout using `100dvh` (dynamic viewport height) to handle iOS Safari's collapsing chrome
- `@media(min-width:500px)` wraps the app in a phone frame on desktop with `border-radius:36px`

### Navigation Model
Screens are all `position:absolute;inset:0` with `display:none` by default. The `go(id)` function removes `.active` from all screens and adds it to the target, triggering a CSS `fadeUp` animation. No routing library, no history API — intentionally stateless for a prototype.

### Filter System
The sport chips on the home feed use `data-cat` attributes on content blocks. The `filterHome()` function reads the selected category and toggles `visibility` class on matching blocks. The same pattern powers event filters (`data-ev`) and search filters (`data-tags`), giving three independent filter systems with a single reusable concept.

### Font Stack
- **Syne** (800 weight) — Display / headings. Geometric, distinctive, high-impact.
- **DM Sans** (400–700) — Body / UI. Clean, legible at small sizes.
- Loaded via Google Fonts. App functions fully offline after first load.

---

## ◈ Design System

| Token        | Value       | Usage                     |
|-------------|-------------|---------------------------|
| `--p`        | `#1a6ef8`   | Primary blue (CTAs, active states) |
| `--g`        | `#16a34a`   | Success / open / confirmed |
| `--a`        | `#d97706`   | Warning / filling fast     |
| `--r`        | `#dc2626`   | Danger / decline / logout  |
| `--bg`       | `#f1f5fb`   | App background             |
| `--card`     | `#ffffff`   | Card / panel surfaces      |
| `--border`   | `#e2e8f0`   | All dividers and outlines  |
| `--t`        | `#0f172a`   | Primary text               |
| `--tm`       | `#64748b`   | Secondary / muted text     |
| `--tl`       | `#94a3b8`   | Tertiary / timestamps      |

---

## ◈ Getting Started

### Option A — Direct open (simplest)
```bash
# Unzip the archive
unzip sportzone_v3.zip

# Open in browser
open sportzone2/index.html
# or on Windows:
start sportzone2/index.html
```

### Option B — Local server (if you prefer)
```bash
cd sportzone2
python3 -m http.server 3000
# Then open http://localhost:3000
```

No build step. No `npm install`. No environment variables. No config files.

---

## ◈ Suggested User Flows to Explore

```
BOOKING FLOW
Splash → Onboarding → Home → [select Badminton chip] 
→ Venue Detail → Book Slot → Payment → Confirmed ✓

EVENT FLOW
Home → Events → [select Tournament chip] 
→ Event Detail → Chat with Organizer → Join → Success ✓

HOST FLOW
Profile → Venue Host Dashboard 
→ Accept/Decline pending bookings

TRAINER FLOW
Profile → Trainer Dashboard 
→ View sessions · Chat with clients · Accept new requests

DISCOVER FLOW
Home → [tap each sport chip, watch content change]
Search → [tap Open Now / Indoor / Under ₹500 chips]
Events → [tap Tournament / Practice / Free chips]
```

---

## ◈ Browser Compatibility

| Browser        | Status |
|----------------|--------|
| Chrome 90+     | ✅ Full support |
| Safari 14+ iOS | ✅ Full support |
| Firefox 88+    | ✅ Full support |
| Edge 90+       | ✅ Full support |
| Samsung Browser | ✅ Full support |

---

## ◈ Known Scope (Prototype Boundaries)

This is a **UI prototype**, not a production backend. The following are intentionally simulated:

- Payments do not process real transactions
- Chat auto-replies are pattern-matched, not AI-powered
- Venue/event/user data is hardcoded for demonstration
- No authentication, database, or API calls
- Photo upload shows a toast notification (UI hook only)

These are the natural next integration points for a real build.

---

## ◈ Roadmap (If Extended)

- [ ] Dark mode (CSS variable swap)
- [ ] PWA manifest + service worker (installable, offline-first)
- [ ] Supabase / Firebase backend integration
- [ ] Real UPI/Razorpay payment gateway
- [ ] Push notifications via Web Push API
- [ ] Map integration (Google Maps / Mapbox)
- [ ] Real-time chat via WebSockets
- [ ] Auth flow (OTP-based, India-first)

---

## ◈ Credits

```
  Designed & Built by   →  Akash
  Version               →  3.0
  Architecture          →  Vanilla HTML · CSS · JavaScript
  Fonts                 →  Syne + DM Sans (Google Fonts)
  Icons                 →  Inline SVG (zero external dependencies)
  Screens               →  21
  Compressed Size       →  20 KB
```

---

<div align="center">

*Built with obsessive attention to detail.*  
*Every pixel deliberate. Every interaction considered.*  
*No shortcuts. No frameworks. Just craft.*

**SportZone © 2025 — Akash**

</div>
