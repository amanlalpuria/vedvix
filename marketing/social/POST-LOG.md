# Vedvix social post log

The single record of everything we post on LinkedIn and Instagram. **Check this before writing a new post** so we don't repeat a project, a hook, a stat or a testimonial too soon.

- Profiles: [linkedin.com/company/vedvix](https://linkedin.com/company/vedvix) · [instagram.com/vedvix2](https://www.instagram.com/vedvix2/)
- Posters: [`posters/posters.html`](posters/posters.html) holds the source, and `posters/out/<id>.png` holds the rendered images (open `posters.html` in a browser to preview them all).
- Profile picture, bio and highlight covers: [`PROFILE.md`](PROFILE.md)
- Re-render after editing: `node marketing/social/posters/render.mjs` (all) or `node marketing/social/posters/render.mjs ig2` (one post).

## How to use this file

1. **Before writing:** read the [Repeat tracker](#repeat-tracker). Don't reuse a hook, and leave **at least 4 weeks** before featuring the same project or quoting the same testimonial again.
2. **When drafting:** add an entry under [Posts](#posts) with status `Draft`, and add its poster to `posters.html` using the next id (`ig4-1`, `li4`, …).
3. **When it goes live:** set the status to `Posted`, fill in the date and link, update the [Calendar](#calendar) and the Repeat tracker.
4. **After 7 days:** record the results (likes, comments, shares/saves, profile visits). This tells us what to make more of.

Status values: `Idea` → `Draft` → `Ready` → `Scheduled` → `Posted`

---

## Calendar

| ID | Platform | Topic | Pillar | Status | Date posted | Link | Results after 7 days |
|---|---|---|---|---|---|---|---|
| LI-01 | LinkedIn | Introducing Vedvix | Brand | Ready | | | |
| LI-02 | LinkedIn | NYC Beer Kegs case study | Case study | Ready | | | |
| LI-03 | LinkedIn | Weekly demos > status reports (process) | How we work | Ready | | | |
| IG-01 | Instagram | Hello Instagram (intro carousel) | Brand | Ready | | | |
| IG-02 | Instagram | NYC Beer Kegs carousel | Case study | Ready | | | |
| IG-03 | Instagram | 5 signs your app needs a rebuild | Value / tips | Ready | | | |

Suggested order: LI-01 + IG-01 in week 1, LI-02 + IG-02 in week 2, LI-03 + IG-03 in week 3.

**Content pillars** (rotate between these so the feed doesn't feel one-note):
- **Brand:** who we are, team, culture, milestones
- **Case study:** one project, one angle
- **How we work:** process, engineering decisions, behind the scenes
- **Value / tips:** advice founders save and share (no hard sell)
- **Social proof:** testimonials, launches, client wins

---

## Repeat tracker

Update this every time something is posted.

**Projects featured**

| Project | Posts | Last posted | Angles used |
|---|---|---|---|
| NYC Beer Kegs | LI-02, IG-02 (also appears on IG-01, LI-01 visuals) | | 4 apps/1 backend, location-first catalog, delivery zones, substitutions, 21+ compliance, oversell-proof stock |
| KAPS / KAPS9 | LI-03, IG-03 | | Django → Spring Boot rebuild, 20 modules, 3 AWS envs, Terraform |
| Sipstr | (screenshot on IG-01 cover only) | | |
| Urban Culture | (screenshot on IG-01 cover only) | | |
| Viaflo | none yet | | |
| Veraeaty.ai | none yet | | |
| Shell Consultancy | none yet | | |
| Maruti Industries | none yet | | |

**Hooks / headlines used.** Don't reuse these word for word.
- "We build products that actually ship." (LI-01, IG-01)
- "One team. Zero handoffs." (IG-01)
- "4 apps. 1 backend. All five boroughs." (LI-02, IG-02)
- "Weekly demos > weekly status reports." (LI-03)
- "5 signs your app has outgrown its first version" (IG-03)
- "Rebuilt, not patched" (IG-03)

**Testimonials quoted**

| Quote from | Post | Date | Client approved? |
|---|---|---|---|
| Vikrant, CEO, KAPS9 | LI-03 | | ☐ ask before posting |

**Stats used:** 12+ products shipped · 3 AI platforms live · 100% on-time delivery · NYC: 4 apps / 5 boroughs / 6 roles / 9 finance reports · KAPS: 20 modules / 3 AWS envs / 56 Terraform resources / 4 verticals

**CTAs used:** "Link in bio" · "DM us REBUILD" · "What's your biggest frustration with a dev team?"

---

## Posts

### LI-01 · Introducing Vedvix

- **Platform:** LinkedIn · **Pillar:** Brand · **Status:** Ready
- **Image:** `posters/out/li1.png` (1200×1200)
- **First comment:** `Explore our work → https://vedvix.in/work`

```text
We build products that actually ship.

Most failed software projects don't fail on code. They fail in the gaps: between the designer and the developer, between the dev agency and the DevOps freelancer, between "it works on my machine" and "it works for 10,000 users."

That's why we started Vedvix, a product studio in Jaipur building for clients worldwide.

One team takes you from first sketch to production:
→ Product & UI/UX design
→ Web, iOS and Android apps
→ Backends, AI features and integrations
→ AWS infrastructure, CI/CD and launch

So far:
✅ 12+ products shipped
✅ 3 AI platforms live
✅ Clients in the USA and India: marketplaces, SaaS, on-demand services and manufacturing

We're finally putting our work out in public. Over the next few weeks we'll share real case studies, the engineering decisions behind them and what we've learned shipping for founders.

If you're sitting on a product idea or a platform that has outgrown its first version, let's talk.

🌐 vedvix.in | ✉️ hello@vedvix.in

#ProductDevelopment #SaaS #StartupIndia #UIUXDesign #SoftwareEngineering
```

---

### LI-02 · NYC Beer Kegs case study

- **Platform:** LinkedIn · **Pillar:** Case study · **Status:** Ready
- **Image:** `posters/out/li2.png` (1200×1200)
- **First comment:** `Full case study → https://vedvix.in/work/nyc-beer-kegs`

```text
4 apps. 1 backend. All five boroughs of New York City.

Delivering alcohol in NYC means keeping three groups happy at once:
🛒 Shoppers want what's actually in stock nearby, delivered fast.
🏪 Licensed stores want control over stock, prices, delivery zones and payouts, without hiring a tech team.
🪪 Every handover has to prove the customer is 21 or older.

We designed and built the whole platform for NYC Beer Kegs:
• Customer website + Android app
• Store & operations console
• Courier app
• One Spring Boot backend shared by all four

A few decisions we're proud of:

📍 Location comes first. Stores draw delivery zones on a map. A spatial index (PostGIS + H3) decides which products and prices each address can see, so customers never fall for something they can't get.

📦 Stock can't be oversold. Stock is reserved at add-to-bag and reduced with one guarded SQL update. Two people can never buy the last keg.

🔁 Fix the order instead of cancelling it. If a store runs out, staff can substitute items. The difference is refunded automatically, or the customer gets a payment link for exactly the extra amount.

🔒 Compliance lives in the code. Age is checked four times, and the server refuses to complete a delivery without a 21+ confirmation plus a delivery code or proof photo.

It's live now at nycbeerkeg.com.

#Marketplace #ProductDesign #SpringBoot #ReactJS #CaseStudy
```

---

### LI-03 · Weekly demos > weekly status reports

- **Platform:** LinkedIn · **Pillar:** How we work · **Status:** Ready
- **Image:** `posters/out/li3.png` (1200×1200)
- **Before posting:** confirm with Vikrant (KAPS9) that we can quote him on social media.

```text
Weekly demos > weekly status reports.

A founder once told us their last agency sent beautiful progress reports for 4 months. Then they saw the product for the first time, and it wasn't what they needed.

That's why our process has five stages, and you see working software at every one:

1️⃣ Discover: your goals, your users, and what the first release must do. Nothing more.
2️⃣ Design: user flows and clickable prototypes you can show real customers before we write production code.
3️⃣ Build: agile sprints with a live demo every week.
4️⃣ Launch: QA, end-to-end tests, app store submissions, production infrastructure and a release checklist.
5️⃣ Scale: monitoring, performance work and new features as you grow.

The same team stays with you from step 1 to step 5. No handoffs, no lost context.

For KAPS, a transport platform covering goods delivery, cabs, handyman services and heavy machinery, this meant rebuilding the backend from Django into 20 Spring Boot modules. We also set up 3 AWS environments in Terraform, where each branch deploys itself.

"Kaps9 was delivered as a complete end-to-end product across mobile, web, and backend, with strong execution and attention to product quality."
— Vikrant, CEO, KAPS9

What's the biggest frustration you've had working with a dev team? 👇

#Agile #ProductManagement #DevOps #AWS #StartupLife
```

---

### IG-01 · Hello Instagram (intro carousel)

- **Platform:** Instagram · **Pillar:** Brand · **Status:** Ready
- **Slides (in order):** `ig1-1.png` … `ig1-5.png` (1080×1350)
  1. We build products that actually ship (with app screens from three of our projects)
  2. One team. Zero handoffs. (Idea → Design → Code → Cloud → Launch)
  3. Six things we do really well
  4. Numbers we're proud of
  5. Got an idea? Let's build it.

```text
Hello, Instagram 👋 We're Vedvix, a product studio from Jaipur building for the world 🌍

Design, development, cloud and launch, all under one roof. Follow along for real projects, behind-the-scenes and product tips 💡

📩 hello@vedvix.in

#vedvix #productstudio #appdevelopment #uiuxdesign #webdesign #saas #startupindia #jaipur #jaipurstartups #mobileappdevelopment #techstartup #madeinindia
```

---

### IG-02 · NYC Beer Kegs carousel

- **Platform:** Instagram · **Pillar:** Case study · **Status:** Ready
- **Slides:** `ig2-1.png` … `ig2-6.png` (1080×1350)
  1. 4 apps. 1 backend. New York City.
  2. Storefront: only what can actually reach the door
  3. Tracking: every step visible, store to door
  4. Store console: delivery zones drawn on a map
  5. Courier app: built for the doorstep
  6. Live across all 5 boroughs (stats)
- **Note:** keep the caption about design and tech, not the alcohol. Instagram restricts alcohol promotion.

```text
From a blank Figma file to live on the streets of NYC 🗽

We designed and built every piece of NYC Beer Kegs: the website, Android app, store console and courier app. Swipe to see how it works 👉

Full case study at the link in bio 🔗

#casestudy #uidesign #appdesign #productdesign #marketplace #reactjs #mobileapp #uxdesign #deliveryapp #techagency #vedvix #portfolio
```

---

### IG-03 · 5 signs your app needs a rebuild

- **Platform:** Instagram · **Pillar:** Value / tips · **Status:** Ready
- **Slides:** `ig3-1.png` … `ig3-8.png` (1080×1350)
  1. Title, 2–6. One sign per slide, 7. KAPS proof (we fixed all five), 8. DM us "REBUILD"
- **Follow-up:** reply to every "REBUILD" DM within 24 hours.

```text
How many did you tick? Be honest 😅 Save this for your next team meeting 📌

#startuptips #softwaredevelopment #techtips #founders #devops #aws #backend #saasstartup #entrepreneurindia #vedvix #appdevelopment #productmanagement
```

---

## Idea backlog

Not drafted yet. Move an idea into Posts when you start it, and delete it from here.

- **Sipstr:** React Native customer app + vendor portal, 5,800+ products, stores choose from 3 payout schedules. Testimonial from Nirav Patadia.
- **Viaflo:** AI invoice extraction with approval workflows, aiming for 70–80% less manual entry. Good for an "AI that's actually in production" angle.
- **Veraeaty.ai:** 45 AWS resources in Terraform, 30-day point-in-time recovery, zero long-lived keys. Good for a security / "sleep at night" angle.
- **Urban Culture:** tech partner to India's 2nd largest salon-at-home app (28 cities, 4.7★ from 29k reviews). Testimonial from Yogendra Meena.
- **Shell Consultancy / Maruti Industries:** before/after website redesigns, "websites that convert".
- **Engineering bite-sizes (LinkedIn):** oversell-proof stock in one SQL update; why we chose a modular monolith over microservices; branch-to-environment deploys with no AWS keys.
- **Team / culture:** meet the team, a day at Vedvix in Jaipur, the tools we use.
- **Reels:** 15-second screen recording of the NYC app flow; time-lapse of a Figma → live app build.
