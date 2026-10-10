/**
 * Portfolio content. Plain data (no asset imports) so `vite.config.ts` can
 * read it at build time to emit one static HTML file per case-study route.
 * Images live under `public/work/<slug>/`.
 */

export type Category = 'AI' | 'SaaS' | 'Mobile' | 'Marketplace' | 'Web' | 'Cloud';

export type Result = {label: string; value: string};

export type Testimonial = {text: string; author: string; role: string};

export type Shot = {src: string; alt: string; kind: 'phone' | 'screen'; caption?: string};

/** A compact spec table shown in place of a screenshot. */
export type Panel = {label: string; columns?: string[]; rows: string[][]};

export type Highlight = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  shots?: Shot[];
  panel?: Panel;
};

export type CaseStudy = {
  /** The apps / surfaces the product ships as. */
  surfaces: {name: string; audience: string; body: string; where: string}[];
  surfacesTitle?: string;
  surfacesLede?: string;
  /** Big visual walkthrough, alternating left/right. */
  highlights: Highlight[];
  /** A sequence the product enforces (shown as numbered steps). */
  sequence?: {eyebrow: string; title: string; lede: string; steps: {label: string; title: string; body: string}[]};
  /** Feature lists grouped by audience. */
  featureGroups: {audience: string; items: string[]}[];
  /** Engineering decisions worth showing to technical buyers. */
  engineering: {title: string; body: string}[];
  engineeringEyebrow?: string;
  engineeringTitle?: string;
  engineeringLede?: string;
  architectureTitle?: string;
  /** Stack grouped by layer. */
  architecture: {layer: string; items: string[]}[];
};

export type Project = {
  slug: string;
  name: string;
  /** One-line positioning used on cards and in <meta description>. */
  tagline: string;
  desc: string;
  categories: Category[];
  tags: string[];
  link?: string;
  cover: string;
  logo?: string;
  /** Per-project accent used to tint its case-study page. */
  accent: string;
  featured?: boolean;
  metadata: {client: string; year: string; service: string; location?: string};
  details: {
    challenge: string;
    solution: string;
    /** Heading for the solution column; defaults to "What we built". */
    solutionTitle?: string;
    impact: string;
    techStack: string[];
    features: string[];
    results: Result[];
    testimonial?: Testimonial;
  };
  caseStudy?: CaseStudy;
};

const NYC = '/work/nyc-beer-kegs';

export const PROJECTS: Project[] = [
  {
    slug: 'nyc-beer-kegs',
    name: 'NYC Beer Kegs',
    tagline: 'A four-app alcohol delivery marketplace for New York City, built end to end.',
    desc: 'Customer website, Android app, store & operations console and courier app on one backend, with live stock from licensed local stores and 21+ checks the server enforces at the door.',
    categories: ['Marketplace', 'Mobile', 'SaaS', 'Cloud'],
    tags: ['Marketplace', 'Web + Android', 'Stripe Connect', 'Geo search', 'Spring Boot'],
    link: 'https://nycbeerkeg.com',
    cover: `${NYC}/cover.jpg`,
    logo: `${NYC}/logo.png`,
    accent: '#F2541B',
    featured: true,
    metadata: {
      client: 'NYC Beer Kegs LLC',
      year: '2026',
      service: 'Product design · Full-stack engineering · Mobile apps · Cloud & DevOps',
      location: 'New York City, USA',
    },
    details: {
      challenge:
        'Alcohol delivery in New York has to satisfy three groups at once. Shoppers want what is actually in stock near them, delivered fast. Licensed stores need to control stock, prices, delivery areas and payouts without hiring a tech team. And every handover has to prove the recipient is 21 or older. NYC Beer Kegs needed one platform that did all three from day one.',
      solution:
        'Vedvix designed and built the whole platform: a customer website and Android app, a role-based store and operations console, a courier app, and the Spring Boot backend they all share. Location sits at the core. A spatial index and hand-drawn delivery-zone polygons decide which licensed stores, products and prices each address can see. Stripe handles checkout and Stripe Connect pays stores out.',
      impact:
        'The storefront and console run in production at nycbeerkeg.com and admin.nycbeerkeg.com, covering all five boroughs. Stores manage their own inventory, zones and orders. Operators fix orders with substitutions that refund or collect the difference automatically. The server refuses to complete any delivery without a 21+ confirmation plus a delivery code or proof photo.',
      techStack: [
        'Java 17',
        'Spring Boot 3.4',
        'PostgreSQL + PostGIS',
        'H3 spatial index',
        'Redis',
        'AWS SQS',
        'React 19',
        'TypeScript',
        'Vite',
        'Redux Toolkit',
        'Tailwind CSS',
        'Capacitor 8',
        'Stripe + Connect',
        'Firebase Cloud Messaging',
        'AWS S3 + CloudFront',
        'Playwright',
      ],
      features: [
        'Location-first catalog from licensed local stores',
        'Multi-store cart that splits into per-store orders',
        'Scheduled delivery in New York time slots',
        'Keg, tap and CO₂ rentals with refundable deposits',
        'Delivery zones drawn on a map, with approval and rollback',
        'Substitutions with automatic refund or pay-the-difference link',
        'Courier QR pickup, 21+ check and proof of delivery',
        'Six roles and nine finance reports with Excel export',
      ],
      results: [
        {label: 'Apps on one backend', value: '4'},
        {label: 'NYC boroughs covered', value: '5'},
        {label: 'Built-in roles', value: '6'},
        {label: 'Finance reports', value: '9'},
      ],
    },
    caseStudy: {
      surfaces: [
        {
          name: 'Customer website',
          audience: 'Shoppers',
          body: 'Browse what nearby stores can deliver, check out with Stripe, track orders, manage rentals and saved cards.',
          where: 'nycbeerkeg.com',
        },
        {
          name: 'Customer Android app',
          audience: 'Shoppers',
          body: 'The full storefront as a native app with push notifications, native Google sign-in and GPS address pick.',
          where: 'React + Capacitor',
        },
        {
          name: 'Store & operations console',
          audience: 'Stores and operators',
          body: 'Orders, stores, inventory, catalog, offers, rentals, reports, users and roles, scoped to what each role may see.',
          where: 'admin.nycbeerkeg.com',
        },
        {
          name: 'Courier app',
          audience: 'Couriers',
          body: 'Store-approved onboarding, QR self-assign, ID and code checks at the door, proof photos and earnings.',
          where: 'Web + Android shell',
        },
      ],
      highlights: [
        {
          eyebrow: 'Storefront',
          title: 'Only what can actually reach the door',
          body: 'The delivery address drives everything. Products, prices and stock come from the licensed stores whose delivery zones cover that address, so shoppers never fall for something they cannot get.',
          points: [
            'Admin-curated home: banner carousel, top picks and category rails',
            'Category filters whose counts equal what selecting them returns',
            'Every product card names the selling store and its real price',
          ],
          shots: [
            {src: `${NYC}/app-home.jpg`, alt: 'NYC Beer Kegs app home screen with delivery address, search and categories', kind: 'phone'},
            {src: `${NYC}/app-category.jpg`, alt: 'NYC Beer Kegs category screen with filters', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Product & search',
          title: 'Pack sizes, savings and the store up front',
          body: 'Product pages compare pack sizes side by side, from a 12-pack to a half-barrel keg, each priced by the nearest store. Search runs across brands and styles inside delivery range.',
          points: [
            'Per-pack notes from the store, shown above the description',
            'Reviews with reporting and moderation',
            'Favorites for quick reorder',
          ],
          shots: [
            {src: `${NYC}/app-product.jpg`, alt: 'Product page with two pack sizes and discounts', kind: 'phone'},
            {src: `${NYC}/app-search.jpg`, alt: 'Search results for Heineken with prices and store names', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Tracking',
          title: 'Every step visible, from store to door',
          body: 'Customers follow the order through processing, accepted, ready, on the way and delivered, with a push at each step and a six-digit delivery code to hand the courier along with photo ID.',
          points: [
            'SMS tracking link for the recipient, no login needed',
            'Multi-store orders tracked per store',
            'Clear refunds and balance-due links after substitutions',
          ],
          shots: [
            {src: `${NYC}/app-orders.jpg`, alt: 'Track order screen with status steps and delivery code', kind: 'phone'},
            {src: `${NYC}/app-account.jpg`, alt: 'Account screen with orders, rentals and appearance setting', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Store console',
          title: 'Delivery zones drawn on a map',
          body: 'Stores draw their delivery areas as polygons and price each one: base fee, per-mile fee, surge, minimum order and prep time. Store staff propose changes; operators approve, reject or roll back with a full history.',
          shots: [
            {src: `${NYC}/console-zones.jpg`, alt: 'Store console showing a delivery-zone polygon on a map with fee settings', kind: 'screen', caption: 'Store console · Delivery Zones'},
          ],
        },
        {
          eyebrow: 'Order desk',
          title: 'Fix the order instead of cancelling it',
          body: 'When a store is out of something, staff replace, remove or add items with a before-and-after preview. If the total drops, the difference is refunded automatically. If it rises, the customer gets a secure payment link for exactly the difference.',
          shots: [
            {src: `${NYC}/console-substitute.jpg`, alt: 'Substitute and adjust order items dialog', kind: 'screen', caption: 'Order desk · Substitute / Adjust Order Items'},
          ],
        },
        {
          eyebrow: 'Courier app',
          title: 'Built for the doorstep',
          body: 'Couriers apply to a store and wait for approval. Once approved they go online, scan the packing-slip QR to take an order, and complete it with a guided 21+ check, the customer\'s code or a proof photo, then see earnings by week, month or year.',
          shots: [
            {src: `${NYC}/courier-dashboard.jpg`, alt: 'Courier app dashboard with online status and earnings', kind: 'phone'},
          ],
        },
      ],
      sequence: {
        eyebrow: 'Responsible 21+ delivery',
        title: 'Age is checked four times. The server enforces the last one.',
        lede: 'Compliance is built into the product, not left to a policy document.',
        steps: [
          {label: 'App open', title: 'Age gate', body: 'A one-time 21+ confirmation before anything in the store is visible.'},
          {label: 'Signup', title: 'Date of birth', body: 'Required for every account, including Google sign-ups. Under-21 signups are refused.'},
          {label: 'At the door', title: 'Photo ID', body: 'The courier checks government ID and records how it was verified.'},
          {label: 'Handover', title: 'Code or proof photo', body: 'Completion is rejected without the 21+ confirmation plus the delivery code or a photo.'},
        ],
      },
      featureGroups: [
        {
          audience: 'For shoppers',
          items: [
            'Email, mobile or Google sign-up with one-time codes',
            'Guest bag that merges on sign-in',
            'Itemised bill: tax, delivery, service, bag fee, bottle deposit, tip',
            'Saved cards and PDF invoices',
            'Schedule for later in New York time',
            'Notification preferences with quiet hours',
          ],
        },
        {
          audience: 'For stores',
          items: [
            'Weekly and holiday opening hours',
            'Pause new orders when the store is slammed',
            'Stock, price and customer notes per pack',
            'Spreadsheet upload with preview and undo',
            'Employees and in-house couriers',
            'Stripe Connect onboarding and payouts',
          ],
        },
        {
          audience: 'For operators',
          items: [
            'Live order dispatcher with status override',
            'Full and partial refunds with double-refund guards',
            'Master catalog with inherited custom attributes',
            'Bulk catalog export and import with dry run',
            'Coupons, vouchers, referrals and usage caps',
            'Nine finance reports with Excel export',
          ],
        },
        {
          audience: 'For couriers',
          items: [
            'Store-approved onboarding with documents',
            'Online / offline availability',
            'Scan the packing slip to self-assign',
            'Guided 21+ check and ID method',
            'Delivery code or proof photo',
            'Earnings by week, month or year',
          ],
        },
      ],
      engineering: [
        {
          title: 'Oversell-proof stock',
          body: 'Stock is reserved at add-to-bag and decremented with a single guarded SQL update, so two customers can never buy the last keg.',
        },
        {
          title: 'One cart, many stores',
          body: 'A checkout splits into one order per store with its own fees and status. The customer-facing status is derived from the slowest store.',
        },
        {
          title: 'Status changes with an actor model',
          body: 'Every transition is checked against who is making it: customer, store, courier, admin or system. Store staff are scoped to their own stores.',
        },
        {
          title: 'Zone changes you can undo',
          body: 'Every delivery-zone edit is a row with before and after state. A rollback is a new approved row, never a silent revert.',
        },
        {
          title: 'Filters that match results',
          body: 'Facet counts are computed from nearby, in-stock, approved inventory, so every number equals what the filter returns.',
        },
        {
          title: 'Traceable errors',
          body: 'Every request carries an ID end to end. Customers see a short reference on errors that support can look up directly.',
        },
      ],
      architecture: [
        {layer: 'Clients', items: ['React 19 + TypeScript', 'Vite', 'Redux Toolkit / RTK Query', 'TanStack Query', 'Tailwind CSS', 'Capacitor 8 (Android)', 'socket.io live updates']},
        {layer: 'Backend', items: ['Java 17', 'Spring Boot 3.4 modular monolith', 'Spring Security + JWT', 'Flyway migrations', 'Resilience4j']},
        {layer: 'Data & location', items: ['PostgreSQL + PostGIS', 'H3 spatial index', 'Redis caching', 'Delivery-zone polygons']},
        {layer: 'Messaging', items: ['AWS SQS workers', 'Firebase Cloud Messaging', 'AWS SES email', 'AWS SNS SMS']},
        {layer: 'Payments', items: ['Stripe checkout', 'Saved cards (SetupIntent)', 'Refunds to original card', 'Stripe Connect payouts']},
        {layer: 'Delivery', items: ['AWS S3 + CloudFront', 'Google Maps & Sign-In', 'Leaflet + OpenStreetMap', 'Playwright end-to-end tests']},
      ],
    },
  },
  {
    slug: 'kaps9',
    name: 'KAPS',
    tagline: 'Backend architecture and AWS infrastructure for a multi-service transport and on-demand platform.',
    desc: 'One platform for goods delivery, cabs, handyman services and heavy machinery. Vedvix re-architected the backend from Django to a modular Spring Boot core, built the AWS infrastructure and CI/CD from scratch, and delivered the React admin portal.',
    categories: ['SaaS', 'Cloud', 'Marketplace', 'Web'],
    tags: ['Backend Architecture', 'AWS + Terraform', 'Spring Boot', 'Admin Portal', 'Real-time'],
    link: 'https://dev.kaps9.in',
    cover: '/work/kaps9/cover.jpg',
    logo: '/work/kaps9/logo.png',
    accent: '#14B8A6',
    metadata: {
      client: 'KAPS Trans Pvt. Ltd.',
      year: '2025–2026',
      service: 'Backend architecture · Cloud infrastructure & DevOps · Admin portal',
      location: 'India',
    },
    details: {
      challenge:
        'KAPS runs goods delivery, cabs, handyman services and JCB and crane rental from one set of apps. Its original Django backend had grown to 260 endpoints of raw SQL, five separate driver tables and a single shared admin login. It could not support city-by-city pricing, live tracking or a growing operations team, and there was no repeatable way to deploy it.',
      solution:
        'Vedvix designed the complete backend architecture and infrastructure. We rebuilt the platform as a modular Spring Boot monolith with 20 domain modules, PostgreSQL with PostGIS, Redis and RabbitMQ, then provisioned dev, sandbox and production on AWS with Terraform and GitHub Actions. Our team also built the React admin portal that operations staff use every day.',
      impact:
        'Every branch now deploys itself: develop to dev, release branches to sandbox, main to production, with no long-lived AWS keys. The customer and provider apps run on documented REST, WebSocket and push contracts. Operators manage pricing, fleet, KYC, coupons, wallets and reports from one console, scoped to the states, cities and branches they are responsible for.',
      techStack: [
        'Java 21',
        'Spring Boot 3',
        'PostgreSQL 16 + PostGIS',
        'Redis 7',
        'RabbitMQ / Amazon MQ',
        'WebSocket (STOMP)',
        'Terraform',
        'AWS (VPC, ALB, EC2, RDS, ElastiCache, S3)',
        'GitHub Actions + OIDC',
        'Docker / GHCR',
        'OpenTelemetry · Loki · Grafana',
        'Razorpay',
        'Firebase Cloud Messaging',
        'React 19 + MUI',
      ],
      features: [
        'Django to Spring Boot re-architecture',
        'Nearby-provider matching on Redis Geo',
        'Live trip tracking over WebSocket',
        'City and pincode pricing with peak hours',
        'Wallets, coins, referrals and recharge plans',
        'Provider KYC with step-by-step onboarding',
        'State, city and branch admin scopes',
        'Terraform + GitHub Actions for three environments',
      ],
      results: [
        {label: 'Service verticals on one backend', value: '4'},
        {label: 'Domain modules', value: '20'},
        {label: 'AWS environments', value: '3'},
        {label: 'AWS resources in Terraform', value: '56'},
      ],
      testimonial: {
        text: 'Kaps9 was delivered as a complete end-to-end product across mobile, web, and backend, with strong execution and attention to product quality.',
        author: 'Vikrant',
        role: 'CEO, KAPS9',
      },
    },
    caseStudy: {
      surfacesTitle: 'What we delivered',
      surfacesLede:
        'Vedvix owned the backend, the cloud and the admin portal. The customer and provider Android apps run on the APIs, events and push contracts we designed.',
      surfaces: [
        {
          name: 'Spring Boot backend',
          audience: 'Core platform',
          body: 'Twenty domain modules covering auth, booking, pricing, providers, tracking, wallet, coupons, referrals, payments, invoices and audit.',
          where: 'Java 21 · Spring Boot',
        },
        {
          name: 'AWS infrastructure',
          audience: 'Cloud & DevOps',
          body: 'VPC, load balancer, auto-scaling compute, managed Postgres, Redis and RabbitMQ, all defined in Terraform and deployed by branch.',
          where: 'Terraform · ap-south-1',
        },
        {
          name: 'Admin portal',
          audience: 'Operations teams',
          body: 'Dashboards, bookings, fleet and pricing, provider KYC, wallets, coupons, banners, reports, roles and audit logs.',
          where: 'React 19 · MUI',
        },
        {
          name: 'Mobile app APIs',
          audience: 'Customer & provider apps',
          body: 'REST endpoints, real-time WebSocket events and data-only push messages, with integration guides for the Android teams.',
          where: 'REST · STOMP · FCM',
        },
      ],
      highlights: [
        {
          eyebrow: 'Re-architecture',
          title: 'From 260 Django endpoints to a modular Spring Boot core',
          body: 'We mapped every legacy endpoint, then rebuilt the platform module by module so the apps could move across without a big-bang cutover.',
          panel: {
            label: 'legacy → rebuilt',
            columns: ['', 'Django backend', 'KAPS on Spring Boot'],
            rows: [
              ['Drivers', '5 separate tables', '1 unified provider model'],
              ['Identifiers', 'Numeric IDs', 'UUIDs in every route'],
              ['Data access', 'Raw SQL', 'JPA + Flyway migrations'],
              ['API style', 'RPC-style URLs', 'Versioned REST under /api/v1'],
              ['Admin access', 'One shared login', 'Roles, permissions and geographic scopes'],
            ],
          },
        },
        {
          eyebrow: 'Operations console',
          title: 'One control panel for every service',
          body: 'The admin portal gives operators a live view of orders across goods, cabs, bikes and heavy machinery, with each service managed from its own panel.',
          points: [
            'Fleet, vehicle types, base, peak-hour and upgrade pricing',
            'Provider KYC review with document-by-document approval',
            'Coupons, banners, recharge plans and app controls',
            'Reports, admin users, access scopes, roles and audit logs',
          ],
          shots: [
            {
              src: '/work/kaps9/console-dashboard.jpg',
              alt: 'KAPS super admin dashboard with revenue, orders, active drivers and service panels',
              kind: 'screen',
              caption: 'KAPS admin portal · Super Admin Dashboard',
            },
          ],
        },
        {
          eyebrow: 'Matching & tracking',
          title: 'Find the nearest provider in real time',
          body: 'Provider apps report their position every second into Redis Geo. When a customer confirms, the booking goes out to every matching provider nearby at once, and the first to accept wins.',
          panel: {
            label: 'booking dispatch',
            rows: [
              ['Locations', 'Redis Geo, updated every second'],
              ['Offer', 'Broadcast to up to 50 nearby providers'],
              ['Accept', 'First to accept wins, guarded by optimistic locking'],
              ['Stand down', 'Data-only push tells everyone else the job is taken'],
              ['Tracking', 'WebSocket (STOMP) with a polling fallback'],
              ['Sharing', 'Tokenised trip links that can be revoked'],
            ],
          },
        },
        {
          eyebrow: 'Money',
          title: 'Pricing, wallets and payments that reconcile',
          body: 'Fares are built from configurable parts so operators can change prices city by city without a release, and every rupee moving through wallets and payments is recorded.',
          panel: {
            label: 'pricing & payments',
            rows: [
              ['Fares', 'Base price per vehicle type, per city or pincode'],
              ['Surge', 'Peak-hour pricing windows and vehicle upgrades'],
              ['Wallet', 'Balances, coins, referral rewards and refunds'],
              ['Providers', 'Recharge plans that keep partners active'],
              ['Payments', 'Razorpay with webhooks and idempotent handling'],
              ['Invoices', 'PDF invoices from an immutable fare snapshot'],
            ],
          },
        },
        {
          eyebrow: 'Runtime configuration',
          title: 'Change the business without a deploy',
          body: 'Operators tune the platform from the console and changes take effect immediately: 78 live settings, from sign-up bonuses to coin conversion rates, plus city-by-city pricing coverage and provider recharge plans.',
          points: [
            'App controls grouped by agent, auth, booking, coins, finance, invoice, pricing and referral',
            'Pricing coverage per city shows which vehicle types still need prices',
            'Recharge plans by price, duration, ride limit, service and vehicle type',
          ],
          shots: [
            {src: '/work/kaps9/console-app-controls.jpg', alt: 'KAPS App Controls screen listing live configuration settings', kind: 'screen', caption: 'App Controls'},
            {src: '/work/kaps9/console-service-setup.jpg', alt: 'KAPS Service Setup screen showing vehicle pricing coverage by city', kind: 'screen', caption: 'Service Setup · pricing by city'},
          ],
        },
        {
          eyebrow: 'Access control',
          title: 'Permissions as granular as the org chart',
          body: 'Five roles ship out of the box, from customer and driver to vendor, admin and super admin, each built from fine-grained permissions. On top of roles, every admin is scoped to the states, cities or branches they run.',
          points: ['192 permissions available to the super admin role', 'Roles editable in the console, no code change', 'Admin users, access scopes and audit logs side by side'],
          shots: [
            {src: '/work/kaps9/console-roles.jpg', alt: 'KAPS Roles and Access screen listing five roles with permission counts', kind: 'screen', caption: 'Roles & Access'},
          ],
        },
        {
          eyebrow: 'Infrastructure',
          title: 'Three environments, one Terraform codebase',
          body: 'The same Terraform code builds dev, sandbox and production, with each environment sized for its job. Dev and sandbox trade redundancy for cost; production locks everything down.',
          panel: {
            label: 'infra/*.tf',
            columns: ['', 'Dev', 'Sandbox', 'Prod'],
            rows: [
              ['Branch', 'develop', 'release/*', 'main'],
              ['Database', 'RDS', 'RDS', 'RDS, private only'],
              ['Message broker', 'RabbitMQ container', 'RabbitMQ container', 'Amazon MQ'],
              ['NAT gateway', 'Off to save cost', 'Off to save cost', 'On'],
              ['Server access', 'Conditional SSH', 'Conditional SSH', 'SSM only'],
              ['Compute schedule', 'Paused midnight to 9 AM', 'Always on', 'Always on'],
            ],
          },
        },
        {
          eyebrow: 'Observability',
          title: 'Logs and traces without touching app code',
          body: 'An OpenTelemetry agent baked into the image captures logs, traces and metrics automatically. A collector ships them to Loki, and the team reads them in Grafana on its own subdomain per environment.',
          panel: {
            label: 'observability',
            columns: ['', 'Dev', 'Sandbox', 'Prod'],
            rows: [
              ['Log retention', '7 days', '14 days', '30 days'],
              ['Log level', 'DEBUG', 'INFO', 'INFO'],
              ['Grafana access', 'Login required', 'Login required', 'Admin login over SSM tunnel'],
              ['Actuator', 'All endpoints', 'All endpoints', 'Health and info only'],
            ],
          },
        },
      ],
      sequence: {
        eyebrow: 'Delivery pipeline',
        title: 'Push a branch. Get an environment.',
        lede: 'GitHub Actions and Terraform turn every merge into a deployment, with no long-lived AWS keys anywhere.',
        steps: [
          {label: 'Commit', title: 'Push to a branch', body: 'develop, release/* or main decides whether it lands in dev, sandbox or production.'},
          {label: 'Build', title: 'Container image', body: 'A Java 21 image is built and pushed to GitHub Container Registry, tagged by branch and commit.'},
          {label: 'Plan', title: 'Terraform apply', body: 'GitHub OIDC assumes an AWS role; Terraform plans and applies with state kept in S3.'},
          {label: 'Boot', title: 'Config at start-up', body: 'Instances pull compose files from S3 and secrets from AWS Secrets Manager on boot.'},
          {label: 'Serve', title: 'Health-checked', body: 'The load balancer only routes traffic once health checks pass, over HTTPS with ACM certificates.'},
        ],
      },
      featureGroups: [
        {
          audience: 'For customers',
          items: [
            'OTP sign-in with rate limiting',
            'Goods, cab, handyman and JCB bookings',
            'Multiple drop points per trip',
            'Live tracking and shareable trip links',
            'Coupons, coins and referral rewards',
            'Ratings and PDF invoices',
          ],
        },
        {
          audience: 'For providers',
          items: [
            'Step-by-step KYC with document uploads',
            'Online / offline availability',
            'Broadcast booking offers',
            'Ride status actions and cancellation reasons',
            'Wallet, earnings and recharge plans',
            'Customer ratings',
          ],
        },
        {
          audience: 'For operators',
          items: [
            'Live dashboard across every service',
            'City, pincode and peak-hour pricing',
            'Fleet, vehicle types and goods types',
            'KYC verification queue',
            'Coupons, banners and app controls',
            'Reports, roles, access scopes and audit logs',
          ],
        },
        {
          audience: 'For the engineering team',
          items: [
            'Swagger / OpenAPI docs',
            'Integration guides for each app flow',
            'JUnit, Gatling load tests and Postman suites',
            'Branch-based deploys with OIDC',
            'OpenTelemetry, Loki and Grafana',
            'Flyway-managed schema changes',
          ],
        },
      ],
      engineering: [
        {
          title: 'No double accepts, no double debits',
          body: 'Bookings, wallets and providers carry version columns, so two providers accepting the same job, or two debits racing on one wallet, fail safely instead of corrupting data.',
        },
        {
          title: 'Coupons that can’t be over-redeemed',
          body: 'Limited coupons are claimed under a distributed Redis lock, so the last redemption is won once even with several servers running.',
        },
        {
          title: 'Rate limits where abuse happens',
          body: 'Redis-backed token buckets protect OTP, login and geocoding, the endpoints that cost money or attract brute-force attempts.',
        },
        {
          title: 'Access by geography',
          body: 'Admins are scoped to the states, cities or branches they run, and the data they see follows that scope.',
        },
        {
          title: 'Audit trail on changes',
          body: 'Admin actions are recorded with who changed what and when, so pricing or KYC decisions can always be traced.',
        },
        {
          title: 'Secrets out of the code',
          body: 'Runtime credentials live in AWS Secrets Manager with per-environment caching, and CI authenticates to AWS through OIDC.',
        },
      ],
      architecture: [
        {layer: 'Backend', items: ['Java 21', 'Spring Boot 3', 'Spring Security + JWT', 'WebSocket / STOMP', 'MapStruct', 'Flyway', 'OpenAPI']},
        {layer: 'Data', items: ['PostgreSQL 16 + PostGIS', 'Hibernate Spatial', 'Redis 7 (Geo, cache, rate limits)', 'Redisson locks', 'Caffeine']},
        {layer: 'Messaging', items: ['RabbitMQ / Amazon MQ', 'Firebase Cloud Messaging', 'Twilio SMS', 'AWS SES email']},
        {layer: 'Payments & files', items: ['Razorpay + webhooks', 'PDF invoices', 'AWS S3 documents', 'Resilience4j retries & breakers']},
        {layer: 'Cloud', items: ['Terraform 1.9', 'AWS VPC', 'ALB + ACM', 'EC2 Auto Scaling', 'RDS', 'ElastiCache', 'Amazon MQ', 'Secrets Manager', 'Cloudflare DNS']},
        {layer: 'Delivery & ops', items: ['GitHub Actions', 'GitHub OIDC', 'GHCR', 'Docker Compose', 'OpenTelemetry', 'Loki', 'Grafana', 'Gatling']},
        {layer: 'Admin portal', items: ['React 19', 'TypeScript', 'Vite', 'MUI', 'Redux Toolkit', 'React Hook Form + Zod', 'Google Maps + Turf', 'Chart.js']},
      ],
    },
  },
  {
    slug: 'sipstr',
    name: 'Sipstr',
    tagline: 'An on-demand alcohol delivery marketplace with a customer app, vendor portal, courier app and admin console.',
    desc: 'Sipstr connects shoppers with licensed liquor stores near them. Vedvix built the customer app, the vendor portal stores run their business from, the courier app, the admin console and the Spring Boot backend, including Stripe payouts to every store.',
    categories: ['Marketplace', 'Mobile', 'SaaS', 'Cloud'],
    tags: ['Marketplace', 'React Native', 'Vendor Portal', 'Stripe Connect', 'Spring Boot'],
    link: 'https://sipstr.com',
    cover: '/work/sipstr/cover.jpg',
    logo: '/work/sipstr/logo.png',
    accent: '#F47B20',
    metadata: {client: 'Sipstr Inc.', year: '2025–2026', service: 'Product design · Mobile apps · Vendor & admin web · Backend · Payments · Cloud', location: 'New York, USA'},
    details: {
      challenge:
        'Sipstr needed to run a three-sided marketplace for alcohol: shoppers who expect fast delivery from stores nearby, liquor stores that need to manage stock, orders and money without a tech team, and couriers who must check age at the door. Money had to flow correctly between all of them, from checkout and refunds to each store’s payout.',
      solution:
        'Vedvix designed and built every piece. A React Native customer app for iOS and Android, a vendor portal where each store manages inventory, orders, hours, staff, reports and payouts, a courier app for pickups and deliveries, and an admin console for the Sipstr team. All of them run on one Spring Boot backend with PostgreSQL and PostGIS, Stripe for checkout and Stripe Connect for store settlements.',
      impact:
        'Stores run their whole operation from the vendor portal, from accepting orders and substituting items to choosing a daily, weekly or monthly payout schedule. Every settlement records exactly which orders and refunds it covers, so a store is never paid or charged twice, and refunds after a payout are clawed back by exactly the store’s share.',
      techStack: [
        'React Native (Expo)',
        'Expo Router',
        'Redux Toolkit / RTK Query',
        'React 18 + Vite',
        'Next.js',
        'Tailwind CSS',
        'Java 17 · Spring Boot 3.4',
        'PostgreSQL + PostGIS',
        'RabbitMQ / AWS SQS',
        'Stripe + Connect',
        'Firebase Cloud Messaging',
        'Twilio · AWS SES',
        'AWS S3 + CloudFront',
        'Terraform · GitHub Actions',
        'Grafana · Loki · VictoriaMetrics',
      ],
      features: [
        'Customer app for iOS and Android with a 21+ age gate',
        'Nearby stores, categories, top picks and favourites',
        'Live order tracking with a delivery OTP',
        'Vendor portal for inventory, orders, reports and payouts',
        'Order substitutions with automatic refunds',
        'Daily, weekly or monthly Stripe payouts per store',
        'Courier app with active deliveries and earnings',
        'Admin console for orders, catalog, stores and settlements',
      ],
      results: [
        {label: 'Apps on one backend', value: '4'},
        {label: 'Catalog products', value: '5,800+'},
        {label: 'Payout schedules stores can choose', value: '3'},
        {label: 'Platform commission, configurable', value: '18%'},
      ],
      testimonial: {
        text: 'The Sipstr team built more than an app. They created a polished, community-driven experience with exceptional mobile UX and a strong product vision.',
        author: 'Nirav Patadia',
        role: 'Founder, Sipstr',
      },
    },
    caseStudy: {
      surfacesTitle: 'Four apps, one marketplace',
      surfacesLede:
        'Shoppers, stores, couriers and the Sipstr team each get an app built for their job, and all four share one backend, so an order moves from checkout to doorstep without anyone re-typing it.',
      surfaces: [
        {name: 'Customer app', audience: 'Shoppers', body: 'Browse nearby stores, build a bag, check out with a card and track the order live, with a delivery code for the handover.', where: 'React Native · iOS + Android'},
        {name: 'Vendor portal', audience: 'Liquor stores', body: 'Accept and prepare orders, manage inventory and hours, run reports, add staff and choose how often Sipstr pays out.', where: 'React + Vite'},
        {name: 'Courier app', audience: 'Couriers', body: 'See active deliveries, open each drop-off, complete it inside the delivery radius and track earnings.', where: 'React Native'},
        {name: 'Admin console', audience: 'Sipstr team', body: 'Platform metrics, every order with refunds, the master catalog, stores, offers, users and settlements.', where: 'Next.js'},
      ],
      highlights: [
        {
          eyebrow: 'Customer app',
          title: 'From the age gate to a full bag in a few taps',
          body: 'The app opens with a 21+ check, then shows what nearby stores actually stock: categories, promotions, top picks and every product with its store, price and pack size.',
          points: ['Age verification before anything else', 'Products from stores that deliver to you', 'Favourites and a bag that spans stores'],
          shots: [
            {src: '/work/sipstr/app-home.jpg', alt: 'Sipstr customer app home with categories, promotion banner and top picks', kind: 'phone'},
            {src: '/work/sipstr/app-product.jpg', alt: 'Sipstr product page for a single malt scotch with price and store', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Checkout & tracking',
          title: 'Clear totals, then every step to the door',
          body: 'The bag shows subtotal and tax per store before checkout. After paying, customers follow the order from processing to delivered, call the store in one tap, and share a one-time code with the courier at handover.',
          points: ['Per-store bag with tax shown up front', 'Five-step live tracking', 'Delivery OTP to confirm the handover'],
          shots: [
            {src: '/work/sipstr/app-cart.jpg', alt: 'Sipstr shopping cart with order summary', kind: 'phone'},
            {src: '/work/sipstr/app-tracking.jpg', alt: 'Sipstr order tracking with delivery OTP', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Vendor portal',
          title: 'A store’s order desk, in the browser',
          body: 'New orders land in the vendor dashboard with the customer, address and total. Store staff accept them, print a packing slip, and move them through preparation, while a single switch pauses new orders when the store is busy.',
          shots: [
            {src: '/work/sipstr/vendor-dashboard.jpg', alt: 'Vendor portal order management with new orders to accept', kind: 'screen', caption: 'Vendor portal · Order Management'},
          ],
        },
        {
          eyebrow: 'Order detail',
          title: 'Everything to prepare the order on one screen',
          body: 'Each order opens as a ticket with line items, the full price breakdown including bag fee, bottle deposit and tax, a QR code for the courier to scan, and buttons to substitute items or accept.',
          shots: [
            {src: '/work/sipstr/vendor-order.jpg', alt: 'Vendor order detail with line items, totals, courier QR code and accept button', kind: 'screen', caption: 'Vendor portal · Order detail'},
          ],
        },
        {
          eyebrow: 'Inventory & reports',
          title: 'Stock and sales the store can trust',
          body: 'Stores keep stock and prices current inline or by bulk import, with in-stock, low-stock and out-of-stock counts at the top. Transaction reports break every order down into subtotal, fees, tax, tip, commission and net.',
          shots: [
            {src: '/work/sipstr/vendor-inventory.jpg', alt: 'Vendor inventory management with stock counts', kind: 'screen', caption: 'Inventory'},
            {src: '/work/sipstr/vendor-reports.jpg', alt: 'Vendor transaction report with revenue, tips and net totals', kind: 'screen', caption: 'Transaction Reports'},
          ],
        },
        {
          eyebrow: 'Payouts',
          title: 'Stores choose how often they get paid',
          body: 'Each store picks a daily, weekly or monthly settlement schedule from the options Sipstr enables. The payouts screen shows the last settlement line by line, from sales and delivery fees to refunds and the Sipstr fee.',
          shots: [
            {src: '/work/sipstr/vendor-payouts.jpg', alt: 'Vendor payouts screen with settlement schedule and last settlement', kind: 'screen', caption: 'Payouts'},
          ],
        },
        {
          eyebrow: 'Store settings',
          title: 'Hours, holidays and staff without a support ticket',
          body: 'Owners set weekly opening hours and holiday closures that drive what customers can order, and add managers or in-house couriers to their team.',
          shots: [
            {src: '/work/sipstr/vendor-store-hours.jpg', alt: 'Vendor store hours settings', kind: 'screen', caption: 'Store Hours'},
            {src: '/work/sipstr/vendor-employees.jpg', alt: 'Vendor employee management', kind: 'screen', caption: 'Employee Management'},
          ],
        },
        {
          eyebrow: 'Courier app',
          title: 'Built around the drop-off',
          body: 'Couriers see today’s deliveries and earnings, open an active order to get the customer, address and items, and can only complete it from inside the delivery radius. Earnings are listed per order with tips.',
          shots: [
            {src: '/work/sipstr/courier-dashboard.jpg', alt: 'Sipstr courier dashboard with today’s deliveries and earnings', kind: 'phone'},
            {src: '/work/sipstr/courier-deliver.jpg', alt: 'Courier deliver order screen with delivery location and Delivered button', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Admin console',
          title: 'The whole marketplace at a glance',
          body: 'The Sipstr team sees orders, customers, stores and the preparation queue, with trends and status splits that refresh every minute, then drills into any order to view, substitute or refund it.',
          shots: [
            {src: '/work/sipstr/admin-dashboard.jpg', alt: 'Sipstr admin overview with order metrics and charts', kind: 'screen', caption: 'Admin · Overview'},
            {src: '/work/sipstr/admin-orders.jpg', alt: 'Sipstr admin orders list with refund actions', kind: 'screen', caption: 'Admin · Orders'},
          ],
        },
      ],
      sequence: {
        eyebrow: 'Money flow',
        title: 'From the customer’s card to the store’s bank',
        lede: 'Sipstr collects the full order, then pays each store its share on the schedule the store chose.',
        steps: [
          {label: 'Checkout', title: 'Customer pays Sipstr', body: 'Stripe charges the full order total to Sipstr’s platform balance.'},
          {label: 'Deliver', title: 'Order completes', body: 'Delivered and partly refunded orders become eligible for settlement.'},
          {label: 'Settle', title: 'Store share calculated', body: 'Items, deposit, bag fee, delivery fee and tip, less the commission.'},
          {label: 'Refunds', title: 'Refunds netted exactly', body: 'A refund costs the store only its share, before or after payout.'},
          {label: 'Payout', title: 'Stripe transfer', body: 'Sent to the store’s connected account, retried with backoff if needed.'},
        ],
      },
      featureGroups: [
        {audience: 'For shoppers', items: ['21+ age gate and verified sign-up', 'Email, mobile, Google or Apple sign-in', 'Nearby stores and category browsing', 'Saved addresses and payment methods', 'Favourites and top picks', 'Live tracking with delivery OTP']},
        {audience: 'For stores', items: ['Accept, prepare and substitute orders', 'Pause new orders when busy', 'Inventory with bulk import', 'Transaction reports with date filters', 'Hours, holidays and staff', 'Stripe onboarding and payout schedule']},
        {audience: 'For couriers', items: ['Active and recent deliveries', 'Customer and order details', 'Complete only inside the delivery radius', 'Scan the order QR code', 'Earnings by week with tips', 'Sign in with email or mobile']},
        {audience: 'For the Sipstr team', items: ['Live overview and order trends', 'Full and partial refunds', 'Master catalog, brands and packages', 'Store approvals and settlement options', 'Offers and coupons', 'Users, roles and audit logs']},
      ],
      engineering: [
        {title: 'Settlements that never pay twice', body: 'Each settlement saves its destination, amount, order list and an idempotency key, so re-running a period or changing schedule never pays or deducts twice.'},
        {title: 'Payout retries with backoff', body: 'Failed transfers retry with exponential backoff up to six hours, and a definitive Stripe rejection is re-keyed safely instead of retried blindly.'},
        {title: 'Refunds after payout', body: 'A refund issued after a store was paid is deducted from its next settlement by exactly its share, net of commission and tax.'},
        {title: 'Correct multi-store totals', body: 'Orders from two stores are charged as the sum of each store’s part, with tax and deposits saved per line at checkout.'},
        {title: 'Signed CDN images', body: 'Product images are served through CloudFront with signed, expiring URLs instead of public links.'},
        {title: 'Observability built in', body: 'Metrics, logs and alerts for every server through a Grafana, Loki and VictoriaMetrics stack built for the platform.'},
      ],
      architecture: [
        {layer: 'Mobile', items: ['React Native (Expo)', 'Expo Router', 'Redux Toolkit / RTK Query', 'Firebase push', 'Google & Apple sign-in']},
        {layer: 'Web', items: ['React 18 + Vite (vendor portal)', 'Next.js (admin)', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']},
        {layer: 'Backend', items: ['Java 17', 'Spring Boot 3.4', 'Spring Security + JWT', 'Flyway', 'RabbitMQ / AWS SQS']},
        {layer: 'Data', items: ['PostgreSQL + PostGIS', 'Delivery-zone polygons', 'Flyway migrations']},
        {layer: 'Payments', items: ['Stripe checkout', 'Stripe Connect transfers', 'Saved cards', 'Webhooks']},
        {layer: 'Cloud & ops', items: ['AWS EC2, ALB, S3, CloudFront', 'Terraform', 'GitHub Actions', 'Jenkins', 'Grafana · Loki · VictoriaMetrics', 'Twilio · AWS SES']},
      ],
    },
  },
  {
    slug: 'viaflo',
    name: 'Viaflo',
    tagline: 'AI accounts-payable automation: invoices go from the inbox to the ERP without anyone typing them in.',
    desc: 'Viaflo reads invoices straight from a Microsoft 365 mailbox, extracts every field and line item with GPT-4o, routes them through review and approval, and posts them to Sage Intacct and other ERPs. Vedvix designed and built the whole multi-tenant SaaS, from the AI pipeline to the cloud it runs on.',
    categories: ['AI', 'SaaS', 'Cloud'],
    tags: ['AI Document Processing', 'Multi-Tenant SaaS', 'AP Automation', 'Spring Boot', 'FastAPI'],
    link: 'https://app.viaflo.ai/login',
    cover: '/work/viaflo/cover.jpg',
    logo: '/work/viaflo/logo.png',
    accent: '#14B8A6',
    metadata: {
      client: 'Viaflo',
      year: '2026',
      service: 'Product design · Full-stack engineering · AI integration · Cloud & CI/CD',
      location: 'USA',
    },
    details: {
      challenge:
        'Accounts-payable teams still key invoices in by hand: 15 to 30 minutes each, approvals lost in email threads, and errors that turn into duplicate payments. Viaflo set out to automate the whole journey for many client companies at once, which meant strict separation between organisations, an AI pipeline that copes with any vendor’s layout, and a clean hand-off into each client’s ERP.',
      solution:
        'Vedvix designed and built Viaflo end to end. A Spring Boot core handles organisations, users, approvals, vendors, subscriptions and ERP sync, while a FastAPI microservice runs a three-tier extraction pipeline: GPT-4o Vision reads the invoice, GPT-4o Text pulls structured data, and pattern matching cross-checks the result and scores confidence. Invoices arrive by polling a Microsoft 365 mailbox through the Graph API or by drag-and-drop upload. The React portal gives reviewers the PDF and the extracted data side by side, and approved invoices post to the client’s ERP.',
      impact:
        'Each client gets its own isolated workspace with its own mailbox, ERP connection, users and approval rules. Reviewers check an invoice against its PDF and approve it in one click; low-confidence fields are flagged for a closer look. Approved invoices sync to Sage Intacct automatically, with retries and a full log, and the same design carries connectors for QuickBooks, NetSuite, Oracle, SAP, Xero, Zoho and custom APIs.',
      techStack: [
        'Java 21 · Spring Boot',
        'Spring Security + JWT',
        'Python · FastAPI',
        'OpenAI GPT-4o (vision + text)',
        'pdfplumber · Tesseract OCR',
        'PostgreSQL 16',
        'React + TypeScript',
        'Tailwind CSS',
        'Microsoft Graph API',
        'Sage Intacct API',
        'Stripe subscriptions',
        'AWS (EC2, ALB, Auto Scaling, RDS, S3, Secrets Manager)',
        'Terraform',
        'GitHub Actions',
      ],
      features: [
        'Microsoft 365 inbox polling and drag-and-drop upload',
        '3-tier AI extraction with confidence scores',
        'Side-by-side PDF and data review',
        'One-click approve or reject with comments',
        'Vendor directory with spend analytics',
        'Sage Intacct sync with retries and logs',
        'Multi-tenant organisations with four roles',
        'Subscription plans billed through Stripe',
      ],
      results: [
        {label: 'ERP connectors built', value: '8'},
        {label: 'Tiers in the AI extraction pipeline', value: '3'},
        {label: 'Roles from platform admin to viewer', value: '4'},
        {label: 'Subscription plans', value: '4'},
      ],
      testimonial: {
        text: 'Viaflo combines enterprise-grade workflow reliability with practical AI extraction, making invoice operations faster, cleaner, and easier to scale across organizations.',
        author: 'Devanshi Shah',
        role: 'Viaflo',
      },
    },
    caseStudy: {
      surfacesTitle: 'From inbox to ERP',
      surfacesLede: 'Every invoice moves through four stages, and Viaflo handles the hand-off between each one.',
      surfaces: [
        {name: 'Intake', audience: 'Automatic', body: 'A Microsoft 365 mailbox is polled for PDF attachments, or invoices are dropped in by hand: PDF, JPG, PNG or TIFF.', where: 'Microsoft Graph'},
        {name: 'AI extraction', audience: 'Automatic', body: 'Vendor, dates, totals, tax, PO number and every line item are read and scored for confidence.', where: 'GPT-4o · FastAPI'},
        {name: 'Review & approve', audience: 'AP team', body: 'Reviewers compare the PDF with the extracted data, fix any field inline, and approve or reject.', where: 'React portal'},
        {name: 'ERP sync', audience: 'Automatic', body: 'Approved invoices post as AP bills with GL, project and cost-centre codes, retried if the ERP refuses.', where: 'Sage Intacct + 7 more'},
      ],
      highlights: [
        {
          eyebrow: 'Review',
          title: 'The PDF and the data, side by side',
          body: 'Every invoice opens with the original document on the left and the extracted fields on the right. A confidence badge and a manual-review banner tell the reviewer exactly when to look closer, and approve or reject is one click.',
          points: ['High, medium and low confidence badges', 'Edit any extracted field inline', 'Reject with a reason that goes back to the queue'],
          shots: [{src: '/work/viaflo/app-invoice-review.jpg', alt: 'Viaflo invoice review with the PDF beside extracted invoice details and approve and reject buttons', kind: 'screen', caption: 'Invoice review · Under review, medium confidence'}],
        },
        {
          eyebrow: 'Invoice queue',
          title: 'Every invoice, every status, one list',
          body: 'The queue groups invoices by where they are: pending review, rejected, approved, sync failed, completed and archived. Search by vendor, number or amount, filter by date, export, or upload a PDF directly.',
          shots: [{src: '/work/viaflo/app-invoices.jpg', alt: 'Viaflo invoices list with status tabs and pending invoices', kind: 'screen', caption: 'Invoices'}],
        },
        {
          eyebrow: 'AI pipeline',
          title: 'Three tiers so no invoice is left unread',
          body: 'No templates and no per-vendor setup. The pipeline reads each invoice as an image first, then as text, then checks the two against each other, and logs the tokens and cost of every call.',
          panel: {
            label: 'pdf-microservice',
            columns: ['Tier', 'How it works', 'Role'],
            rows: [
              ['1 · Vision', 'GPT-4o reads the invoice as an image', 'Any layout, scans and photos'],
              ['2 · Text', 'GPT-4o extracts from the PDF text layer', 'Structured fields and line items'],
              ['3 · Validation', 'Pattern matching and cross-checks', 'Confidence score per invoice'],
              ['Usage', 'Tokens and cost logged per invoice', 'AI spend visible per organisation'],
            ],
          },
        },
        {
          eyebrow: 'Vendors',
          title: 'Know who you pay, and how much',
          body: 'Vendors are matched automatically as invoices arrive and collected into a directory with totals, averages and the top suppliers by count and by spend.',
          shots: [{src: '/work/viaflo/app-vendors.jpg', alt: 'Viaflo vendor management with top vendors by invoice count and amount', kind: 'screen', caption: 'Vendor Management'}],
        },
        {
          eyebrow: 'ERP sync',
          title: 'Approved means posted',
          body: 'Once an invoice is approved it posts to the client’s ERP with its vendor, dates, line items, GL accounts, project and cost-centre codes. Failures retry with backoff, and every attempt is logged with its request, response and duration.',
          panel: {
            label: 'erp connectors',
            rows: [
              ['Sage Intacct', 'AP bills with dimensional posting, in production'],
              ['QuickBooks · Xero · Zoho', 'Bills and accounts payable'],
              ['NetSuite · Oracle · SAP', 'Vendor bills and invoices'],
              ['Custom API', 'REST connector for in-house systems'],
              ['Reliability', 'Automatic retries with backoff, manual retry, full sync log'],
            ],
          },
        },
        {
          eyebrow: 'Multi-tenant SaaS',
          title: 'One platform, many companies',
          body: 'Each organisation has its own users, mailbox, ERP settings and data. Admins manage their team and roles, and subscriptions run on four plans billed through Stripe, managed by the platform team from Admin Control.',
          shots: [
            {src: '/work/viaflo/app-users.jpg', alt: 'Viaflo team members screen with roles and departments', kind: 'screen', caption: 'Organisation · Users'},
            {src: '/work/viaflo/app-subscription.jpg', alt: 'Viaflo subscription screen with plan comparison', kind: 'screen', caption: 'Organisation · Subscription'},
          ],
        },
      ],
      sequence: {
        eyebrow: 'Invoice lifecycle',
        title: 'From email to ERP in five steps',
        lede: 'What used to take days of keying and chasing now runs on its own, with people only where judgement is needed.',
        steps: [
          {label: 'Receive', title: 'Inbox polling', body: 'PDFs attached to emails in the client’s mailbox are picked up automatically.'},
          {label: 'Extract', title: 'AI reads it', body: 'Vision, text and validation tiers turn the PDF into structured data.'},
          {label: 'Review', title: 'Side-by-side check', body: 'Low-confidence fields are flagged for the reviewer.'},
          {label: 'Approve', title: 'One click', body: 'Approve, or reject with a reason that goes back to the queue.'},
          {label: 'Sync', title: 'Post to the ERP', body: 'An AP bill is created with its codes, retried until it lands.'},
        ],
      },
      featureGroups: [
        {audience: 'For AP teams', items: ['Invoices arrive without forwarding or typing', 'PDF and data side by side', 'Confidence flags on uncertain fields', 'Bulk and one-click approval', 'Search, filters and export', 'Vendor spend at a glance']},
        {audience: 'For finance leaders', items: ['Status of every invoice in one place', 'GL, project and cost-centre codes on every line', 'Audit trail of every action', 'Automatic ERP posting', 'Role-based access by organisation', 'AI cost tracked per invoice']},
        {audience: 'For the platform team', items: ['Organisations created and managed centrally', 'Plans, coupons and runtime config', 'Stripe subscriptions and billing', 'Per-organisation mailbox and ERP setup', 'Seeded environments for new clients', 'Branch-based deploys to AWS']},
      ],
      engineering: [
        {title: 'Tenants kept apart', body: 'Every record belongs to an organisation, and access is checked against the signed-in user’s organisation on every request.'},
        {title: 'AI behind its own service', body: 'Extraction runs in a separate Python service, so models and prompts can change without redeploying the core platform.'},
        {title: 'Cost-aware AI', body: 'Tokens and estimated cost are recorded for every extraction, so AI spend is visible per invoice and per client.'},
        {title: 'Connectors behind one interface', body: 'Each ERP is a connector behind the same contract, so adding a new accounting system doesn’t touch the approval flow.'},
        {title: 'Retries you can audit', body: 'Failed syncs retry with backoff, and every attempt keeps its payload, response, status code and duration.'},
        {title: 'Infrastructure as code', body: 'AWS networking, load balancer, auto-scaling compute, RDS and secrets are defined in Terraform and deployed by GitHub Actions.'},
      ],
      architecture: [
        {layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Brandable themes']},
        {layer: 'Core API', items: ['Java 21', 'Spring Boot', 'Spring Security + JWT', 'Flyway', 'PostgreSQL 16']},
        {layer: 'AI service', items: ['Python', 'FastAPI', 'OpenAI GPT-4o', 'pdfplumber', 'Tesseract OCR']},
        {layer: 'Integrations', items: ['Microsoft Graph', 'Sage Intacct', 'QuickBooks · NetSuite · Xero', 'Oracle · SAP · Zoho', 'Stripe']},
        {layer: 'Cloud', items: ['AWS EC2 + Auto Scaling', 'Application Load Balancer', 'Amazon RDS', 'Amazon S3', 'Secrets Manager', 'Terraform', 'GitHub Actions']},
      ],
    },
  },
  {
    slug: 'veraeaty',
    name: 'Veraeaty.ai',
    tagline: 'End-to-end AWS infrastructure, CI/CD and operations for an AI meal-planning platform.',
    desc: 'Veraeaty.ai plans meals with AI, from a RAG chatbot that can speak its replies to a graph of foods and preferences. Vedvix designed and runs the infrastructure underneath it: three AWS environments in Terraform, branch-driven deploys, security, backups and the runbooks to operate it all.',
    categories: ['Cloud', 'AI'],
    tags: ['AWS', 'Terraform', 'GitHub Actions', 'DevOps', 'Security', 'FastAPI'],
    link: 'https://veraeaty.ai',
    cover: '/work/veraeaty/cover.jpg',
    accent: '#22C55E',
    metadata: {
      client: 'Veraeaty Labs',
      year: '2026',
      service: 'Cloud architecture · Infrastructure as code · CI/CD · Security · Operations support',
      location: 'AWS us-east-1',
    },
    details: {
      challenge:
        'Veraeaty’s team was building a FastAPI backend with MySQL, Redis, a Neo4j food graph, a RAG chatbot and Google text-to-speech. They needed somewhere to run it: separate dev, sandbox and production environments, safe deploys, secrets that never touch the code, and a setup the product team could operate without becoming cloud experts.',
      solutionTitle: 'What we delivered',
      solution:
        'Vedvix took ownership of the infrastructure end to end. We wrote the whole AWS estate in Terraform, from the VPC, load balancer and HTTPS domain to managed MySQL and Redis and a dedicated Neo4j volume, and built GitHub Actions pipelines that build, deploy and destroy environments from a branch name with no long-lived AWS keys. We added a web application firewall, automated backups, cost controls for dev and keyless Google Cloud access for text-to-speech, then documented every step in an operator runbook.',
      impact:
        'Pushing to a branch now produces a running environment: develop to dev, release branches to sandbox, main to production. Production runs on Multi-AZ MySQL with 30 days of point-in-time recovery behind a firewall, while dev runs everything on one instance that switches itself off outside working hours. The Veraeaty team ships features, and the platform underneath stays secure, recoverable and cheap to run.',
      techStack: [
        'Terraform',
        'AWS VPC · ALB · EC2',
        'Amazon RDS (MySQL 8.4)',
        'Amazon ElastiCache (Redis)',
        'Neo4j on EBS',
        'AWS WAF',
        'Route 53 + ACM',
        'AWS Secrets Manager',
        'AWS Systems Manager',
        'Amazon EventBridge Scheduler',
        'AWS Data Lifecycle Manager',
        'GitHub Actions + OIDC',
        'GHCR · Docker Compose',
        'Google Workload Identity Federation',
        'Jenkins',
      ],
      features: [
        'Three AWS environments from one Terraform codebase',
        'Branch-driven deploys with GitHub OIDC',
        'Multi-AZ MySQL with point-in-time recovery',
        'Web application firewall with AWS managed rules',
        'Scheduled dev shutdown to cut cost',
        'Neo4j volume snapshots',
        'Keyless Google Cloud access for text-to-speech',
        'Operator runbook from deploy to destroy',
      ],
      results: [
        {label: 'Environments from one codebase', value: '3'},
        {label: 'AWS resources in Terraform', value: '45'},
        {label: 'Days of point-in-time recovery in prod', value: '30'},
        {label: 'Long-lived AWS or Google keys', value: '0'},
      ],
      testimonial: {
        text: "They didn't just build features, they built the entire engine room. Our infrastructure is solid, our deployments are seamless, and the AI pipeline is genuinely impressive.",
        author: 'Ashish',
        role: 'Founding Team',
      },
    },
    caseStudy: {
      surfacesTitle: 'What we own',
      surfacesLede: 'Veraeaty’s developers build the product. Vedvix provides everything it runs on, and keeps it running.',
      surfaces: [
        {name: 'Cloud architecture', audience: 'Foundation', body: 'VPC, subnets, load balancer, HTTPS domain, compute, managed MySQL and Redis, and a dedicated Neo4j volume.', where: 'Terraform · AWS'},
        {name: 'Delivery pipelines', audience: 'Build & deploy', body: 'Image builds, branch-to-environment deploys, guarded destroys and a Jenkins path for service redeploys.', where: 'GitHub Actions · Jenkins'},
        {name: 'Security & recovery', audience: 'Protection', body: 'Firewall, secrets management, least-privilege IAM, SSM-only access, database PITR and graph backups.', where: 'WAF · Secrets Manager · DLM'},
        {name: 'Operations', audience: 'Day two', body: 'Runbooks for deploy, verify, rollback and destroy, debug access to every service, and ongoing support.', where: 'Docs · SSM · on-call'},
      ],
      highlights: [
        {
          eyebrow: 'Environments',
          title: 'One codebase, three right-sized environments',
          body: 'The same Terraform builds every environment, with switches that size each one for its job. Dev runs every service in Docker on one instance; sandbox and production use managed databases, and production adds Multi-AZ and longer backups.',
          panel: {
            label: 'infra/*.tf',
            columns: ['', 'Dev', 'Sandbox', 'Prod'],
            rows: [
              ['Branch', 'develop', 'release/*', 'main'],
              ['MySQL', 'Docker on EC2', 'Amazon RDS', 'Amazon RDS, Multi-AZ'],
              ['Redis', 'Docker on EC2', 'ElastiCache', 'ElastiCache'],
              ['Neo4j', 'Docker', 'EBS volume', 'EBS volume'],
              ['DB backups', '—', '7 days', '30 days + Performance Insights'],
              ['Schedule', 'Stops outside working hours', 'Always on', 'Always on'],
            ],
          },
        },
        {
          eyebrow: 'Delivery',
          title: 'Deploys driven by the branch name',
          body: 'Three GitHub Actions workflows build the image, deploy an environment and tear one down. The deploy job works out the target from the branch, validates every required variable before touching AWS, and refuses destructive changes unless someone explicitly allows them.',
          panel: {
            label: '.github/workflows',
            rows: [
              ['docker-build.yml', 'Builds the FastAPI image and pushes it to GHCR'],
              ['deploy.yml', 'Resolves the environment, preflights inputs, runs Terraform'],
              ['destroy.yml', 'Controlled teardown with an environment guard'],
              ['Jenkinsfile', 'Service redeploy path that runs tests first'],
              ['Auth', 'GitHub OIDC assumes a scoped AWS role, no stored keys'],
              ['State', 'Terraform state and configuration in S3'],
            ],
          },
        },
        {
          eyebrow: 'Security',
          title: 'Locked down by default',
          body: 'Traffic enters through an HTTPS load balancer with a web application firewall. Servers are reached through Systems Manager rather than open SSH, and every credential lives in Secrets Manager.',
          panel: {
            label: 'security',
            rows: [
              ['Edge', 'AWS WAF with IP reputation, common, bad-input and SQL-injection rule sets'],
              ['TLS', 'ACM certificate on the ALB, Route 53 domain'],
              ['Access', 'Systems Manager sessions; SSH only when enabled per environment'],
              ['Secrets', 'AWS Secrets Manager, injected at start-up'],
              ['IAM', 'Least-privilege deploy role, scoped action by action'],
              ['Network', 'Databases and Redis in private subnets'],
            ],
          },
        },
        {
          eyebrow: 'Recovery & cost',
          title: 'Recoverable when it matters, cheap when it doesn’t',
          body: 'Production MySQL keeps 30 days of point-in-time recovery, and the Neo4j graph volume can be snapshotted on a schedule. Dev, which nobody uses at night, starts and stops itself on a timetable.',
          panel: {
            label: 'resilience',
            rows: [
              ['MySQL', 'Automated backups with point-in-time recovery'],
              ['Neo4j', 'Dedicated EBS volume with lifecycle-managed snapshots'],
              ['Rollback', 'Redeploy any previous image tag from the pipeline'],
              ['Dev cost', 'EventBridge Scheduler starts and stops the instance'],
              ['Prod insight', 'RDS Performance Insights where the instance class supports it'],
            ],
          },
        },
        {
          eyebrow: 'Multi-cloud',
          title: 'Google text-to-speech without a single key',
          body: 'The chatbot speaks its replies through Google Cloud. Veraeaty’s Google organisation blocks service-account key files, so we set up Workload Identity Federation: the EC2 instance proves who it is with its AWS role and receives a short-lived Google token. Nothing secret is stored anywhere.',
          panel: {
            label: 'aws → gcp',
            rows: [
              ['1', 'EC2 instance holds an AWS IAM role'],
              ['2', 'Google trusts that AWS account and role through a workload identity pool'],
              ['3', 'Backend exchanges its AWS identity for a token valid about an hour'],
              ['4', 'Text-to-speech calls use the token, which refreshes automatically'],
            ],
          },
        },
      ],
      sequence: {
        eyebrow: 'Daily lifecycle',
        title: 'Build, deploy, verify, operate, destroy',
        lede: 'The runbook we wrote takes an operator through every stage, from a GitHub button to a healthy environment.',
        steps: [
          {label: 'Build', title: 'Image', body: 'Tagged by branch and commit, pushed to GitHub Container Registry.'},
          {label: 'Deploy', title: 'Terraform', body: 'Preflight checks, then plan and apply for the target environment.'},
          {label: 'Verify', title: 'Health checks', body: 'Load balancer health checks and logs confirm the release.'},
          {label: 'Operate', title: 'SSM & debug access', body: 'Reach MySQL, Redis, Neo4j, S3 and Docker through documented paths.'},
          {label: 'Destroy', title: 'Clean teardown', body: 'Guarded destroy for dev and sandbox when they are not needed.'},
        ],
      },
      featureGroups: [
        {audience: 'For the Veraeaty developers', items: ['Push a branch, get an environment', 'Local stack in Docker Compose', 'Documented runtime environment contract', 'Debug access to every service', 'Database migrations with Alembic', 'Rollback to any earlier image']},
        {audience: 'For the business', items: ['Production on Multi-AZ managed database', '30-day point-in-time recovery', 'Firewall in front of every request', 'Dev switches off when idle', 'No long-lived cloud keys to leak', 'A runbook anyone can follow']},
      ],
      engineeringEyebrow: 'Design decisions',
      engineeringTitle: 'Infrastructure built to be handed over',
      engineeringLede: 'Good infrastructure is the kind the product team rarely has to think about.',
      engineering: [
        {title: 'Preflight before apply', body: 'The deploy workflow checks every required variable and secret before Terraform runs, so a missing value fails in seconds, not halfway through a deploy.'},
        {title: 'Destructive changes need consent', body: 'Changes that would replace or delete resources are blocked unless the operator explicitly allows them for that run.'},
        {title: 'Firewall rolled out safely', body: 'The WAF went live in count mode first, so real traffic could be observed before any request is blocked.'},
        {title: 'Least privilege, proven', body: 'Permissions were added action by action and checked with IAM policy simulation, with no wildcards or admin rights.'},
        {title: 'Dev that costs less', body: 'Dev skips managed databases entirely and shuts down outside working hours, while sandbox and prod keep managed services.'},
        {title: 'Docs for every persona', body: 'One guide for non-technical operators, new developers and existing engineers, from first setup to troubleshooting.'},
      ],
      architectureTitle: 'Infrastructure at a glance',
      architecture: [
        {layer: 'Network & edge', items: ['AWS VPC', 'Application Load Balancer', 'AWS WAF', 'Route 53', 'ACM']},
        {layer: 'Compute', items: ['Amazon EC2', 'Docker Compose', 'GHCR images', 'Systems Manager']},
        {layer: 'Data', items: ['Amazon RDS for MySQL 8.4', 'Amazon ElastiCache for Redis', 'Neo4j 5 on EBS', 'Amazon S3']},
        {layer: 'Security', items: ['AWS Secrets Manager', 'IAM least privilege', 'GitHub OIDC', 'Google Workload Identity Federation']},
        {layer: 'Delivery', items: ['Terraform', 'GitHub Actions', 'Jenkins', 'S3 remote state']},
        {layer: 'Resilience & cost', items: ['RDS point-in-time recovery', 'Data Lifecycle Manager snapshots', 'EventBridge Scheduler', 'Performance Insights']},
      ],
    },
  },
  {
    slug: 'urban-culture',
    name: 'Urban Culture',
    tagline: 'Technology consulting and support partner to India’s 2nd largest salon-at-home app.',
    desc: 'Urban Culture brings certified beauty professionals to customers’ homes across 28 Indian cities. Vedvix works alongside the team as a technology consultant and support partner, advising on the marketplace platform and helping keep it fast and reliable as it grows.',
    categories: ['Marketplace', 'Mobile', 'Web'],
    tags: ['Marketplace', 'Consulting', 'Technology Partner', 'Next.js', 'iOS + Android'],
    link: 'https://urbanculture.me',
    cover: '/work/urban-culture/cover.jpg',
    logo: '/work/urban-culture/logo.png',
    accent: '#8CC63F',
    metadata: {
      client: 'Urban Culture',
      year: '2025–2026',
      service: 'Technology consulting · Architecture advisory · Ongoing engineering support',
      location: 'India',
    },
    details: {
      challenge:
        'Urban Culture runs a two-sided marketplace: customers book waxing, facials, hair care and bridal packages at home, and a network of trained beauty professionals delivers them. Growing to 28 cities with 16 more on the way means the booking platform, the apps and the partner network all have to scale together without slowing down a booking or a payout.',
      solutionTitle: 'How we help',
      solution:
        'Vedvix acts as a technology consultant and supporting partner to the Urban Culture team. We advise on marketplace architecture and the booking and dispatch flows, review how the web platform and apps are built and delivered, and provide engineering support when the team needs extra hands, so product decisions are backed by a platform that can carry them.',
      impact:
        'Urban Culture keeps growing on a platform customers rate 4.7 out of 5 across more than 29,000 reviews. Its fast, search-friendly website, customer apps on iOS and Android and a separate partner app now serve 28 cities, with 16 more announced.',
      techStack: ['Next.js', 'Incremental static regeneration', 'Cloudflare', 'Firebase', 'Google Cloud Storage', 'iOS app', 'Android apps'],
      features: [
        'Architecture and scaling advisory',
        'Booking and dispatch flow reviews',
        'Web performance and SEO guidance',
        'Release and delivery practices',
        'Engineering support on demand',
        'Partner-app and onboarding flow input',
      ],
      results: [
        {label: 'Average rating from 29,225 reviews', value: '4.7★'},
        {label: 'Cities served', value: '28'},
        {label: 'More cities announced', value: '16'},
        {label: 'Beauty partners on the platform', value: '1,000+'},
      ],
      testimonial: {
        text: 'From initial concept to full-scale deployment, Vedvix was our strategic partner. Their marketplace logic is simply the best in the business.',
        author: 'Yogendra Meena',
        role: 'Founder, Urban Culture',
      },
    },
    caseStudy: {
      surfacesTitle: 'The platform we support',
      surfacesLede:
        'Urban Culture owns its product. Vedvix sits beside the team as a consultant and support partner across the four places customers and professionals meet the brand.',
      surfaces: [
        {name: 'Customer website', audience: 'Customers', body: 'Browse every service with prices and durations, build a custom package, and book a slot at home.', where: 'urbanculture.me'},
        {name: 'Customer apps', audience: 'Customers', body: 'The same catalog and booking on iOS and Android, with a first-order offer to move web visitors into the app.', where: 'iOS · Android'},
        {name: 'Partner app', audience: 'Beauty professionals', body: 'The app professionals use to take and complete bookings and track their weekly payouts.', where: 'Android'},
        {name: 'Partner onboarding', audience: 'New professionals', body: 'Apply online, submit documents, then interview, train and get kit approval, aiming for onboarding within 7 days.', where: '/partner'},
      ],
      highlights: [
        {
          eyebrow: 'Customer website',
          title: 'Every service one tap from the first screen',
          body: 'The home page leads with location and search, then fourteen service categories, from make-your-own packages and hair care to Rica waxing and pre-bridal, so customers reach a bookable service in seconds.',
          shots: [{src: '/work/urban-culture/site-home.jpg', alt: 'Urban Culture website home with search and service categories', kind: 'screen', caption: 'urbanculture.me · Home'}],
        },
        {
          eyebrow: 'Service catalog',
          title: 'Clear prices, durations and savings',
          body: 'Every service shows how long it takes, the price and the discount from the list price, with a running cart that totals both cost and time for the visit.',
          points: ['Branded treatments from VLCC, Lotus, O3+ and more', 'Time shown per service and per visit', 'Make-your-own packages with bigger savings'],
          shots: [{src: '/work/urban-culture/site-services.jpg', alt: 'Urban Culture service catalog with hair care and facial prices', kind: 'screen', caption: 'Services'}],
        },
        {
          eyebrow: 'Mobile',
          title: 'Built for booking on the phone',
          body: 'On mobile, a first-order offer and an app download button sit above the fold, and each category opens as a tabbed “beauty box” that is easy to scroll with one thumb.',
          shots: [
            {src: '/work/urban-culture/phone-home.jpg', alt: 'Urban Culture mobile home with first-order offer and app download', kind: 'phone'},
            {src: '/work/urban-culture/phone-services.jpg', alt: 'Urban Culture mobile beauty box with hair care services', kind: 'phone'},
          ],
        },
        {
          eyebrow: 'Partner network',
          title: 'Supply that grows with demand',
          body: 'A marketplace is only as good as its professionals. The partner programme offers ₹360 to ₹600 an hour, weekly payouts, medical insurance up to ₹5 lakh and free training, with a three-step path from application to first booking.',
          shots: [{src: '/work/urban-culture/site-partner.jpg', alt: 'Urban Culture partner page with earnings, benefits and onboarding steps', kind: 'screen', caption: 'Partner with Urban Culture'}],
        },
      ],
      sequence: {
        eyebrow: 'How we work together',
        title: 'A partner, not a vendor',
        lede: 'We plug into the Urban Culture team’s rhythm and stay for the long run.',
        steps: [
          {label: 'Assess', title: 'Understand the platform', body: 'Review the booking, dispatch and partner flows and where growth will stress them.'},
          {label: 'Advise', title: 'Shape the roadmap', body: 'Recommend architecture and product changes, ordered by impact on customers and partners.'},
          {label: 'Support', title: 'Build alongside', body: 'Add engineering capacity when the team needs it, on their codebase and process.'},
          {label: 'Sustain', title: 'Keep it healthy', body: 'Stay on hand for performance, releases and new cities as Urban Culture scales.'},
        ],
      },
      featureGroups: [
        {
          audience: 'For customers',
          items: ['Fourteen service categories', 'Make-your-own packages', 'Prices, durations and savings up front', 'Location-based serviceability', 'Reviews from verified bookings', 'Support line and app downloads'],
        },
        {
          audience: 'For beauty partners',
          items: ['₹360–₹600 per hour payouts', 'Weekly bank payments', 'Medical insurance up to ₹5 lakh', 'Free and advanced training', 'Onboarding within 7 days', '24/7 partner support'],
        },
      ],
      engineeringEyebrow: 'Where we focus',
      engineeringTitle: 'Advice that keeps the marketplace moving',
      engineeringLede: 'For a two-sided marketplace, the technical decisions that matter most are the ones customers and partners feel.',
      engineering: [
        {title: 'Fast pages, found in search', body: 'Pre-rendered service pages behind a CDN keep the catalog quick to load and easy for search engines to index.'},
        {title: 'Booking flows without friction', body: 'From location check to cart and slot, every extra step is a lost booking, so flows are reviewed with conversion in mind.'},
        {title: 'Supply and demand in balance', body: 'Matching bookings to available professionals by city and time is the core of the business, and the hardest part to scale.'},
        {title: 'One catalog everywhere', body: 'Services, prices and images stay consistent across the website, the iOS and Android apps and the partner app.'},
        {title: 'Ready for new cities', body: 'Adding a city should be configuration, not a project, as Urban Culture expands from 28 cities to 44.'},
        {title: 'Support when it counts', body: 'An experienced team on hand for releases, incidents and peak seasons such as weddings and festivals.'},
      ],
      architectureTitle: 'Platform at a glance',
      architecture: [
        {layer: 'Web', items: ['Next.js', 'Pre-rendered pages (ISR)', 'Structured data for search']},
        {layer: 'Mobile', items: ['Customer app · iOS', 'Customer app · Android', 'Partner app · Android']},
        {layer: 'Content & media', items: ['Firebase', 'Google Cloud Storage']},
        {layer: 'Delivery', items: ['Cloudflare CDN', 'HTTPS']},
      ],
    },
  },
  {
    slug: 'shell-consultancy',
    name: 'Shell Consultancy',
    tagline: 'A fast, animated website for a Jaipur recruitment and upskilling firm, designed and built by Vedvix.',
    desc: 'Website for Shell Consultancy, which recruits for companies such as Tech Mahindra and trains candidates in IT, UI/UX and digital marketing. One page tells both stories, to the companies that hire and the people who want to be hired.',
    categories: ['Web'],
    tags: ['Recruitment', 'Training & Placement', 'HR Tech', 'Next.js'],
    link: 'https://shellconsultancy.com',
    cover: '/work/shell-consultancy/cover.jpg',
    accent: '#1D6FE0',
    metadata: {client: 'Shell Consultancy', year: '2025', service: 'Website design · Next.js build · Hosting & deployment', location: 'Jaipur, India'},
    details: {
      challenge:
        'Shell Consultancy does two jobs at once. It recruits for companies, from permanent hires to executive search and volume hiring, and it trains candidates so they are job-ready. Its website had to speak to both audiences without confusing either, and show the clients and results that make a recruitment firm credible.',
      solution:
        'Vedvix designed and built a single-page Next.js site with animated sections that walk visitors from the mission to services, training programmes, industries, clients, team, FAQs and a contact form. All content lives in one data file, so services, courses, clients and team members can be updated without touching the layout. The site is exported as static files, deployed by GitHub Actions to GitHub Pages and served over HTTPS through Cloudflare.',
      impact:
        'The site is live at shellconsultancy.com and works as the firm’s main touchpoint for both companies and candidates. It presents four recruitment services, three training programmes, ten industries and fifteen client companies, alongside the firm’s headline numbers: 500+ placements, 50+ partner companies and 95% client satisfaction.',
      techStack: ['Next.js 14 (static export)', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI / shadcn/ui', 'GitHub Actions', 'GitHub Pages', 'Cloudflare'],
      features: [
        'Animated hero with the firm’s promise',
        'Recruitment services for employers',
        'Training programmes with course topics',
        'Industries served',
        'Scrolling wall of client logos',
        'Team profiles',
        'FAQ accordion',
        'Contact form and details',
      ],
      results: [
        {label: 'Successful placements', value: '500+'},
        {label: 'Partner companies', value: '50+'},
        {label: 'Client satisfaction', value: '95%'},
        {label: 'Client companies showcased', value: '15'},
      ],
      testimonial: {
        text: "The website perfectly represents who we are: professional, modern, and results-driven. It's become our primary touchpoint for both clients and candidates.",
        author: 'Manan Sharma',
        role: 'CEO & Founder, Shell Consultancy',
      },
    },
    caseStudy: {
      surfacesTitle: 'One site, two audiences',
      surfacesLede: 'Every section is written for either the companies that hire or the people who want to be hired, and the page moves between them in a clear order.',
      surfaces: [
        {name: 'For employers', audience: 'Hiring companies', body: 'Permanent recruitment, contract staffing, executive search and volume hiring, plus the clients who already trust the firm.', where: '#services · #clients'},
        {name: 'For candidates', audience: 'Job seekers', body: 'IT languages, UI/UX design and digital marketing courses, 4 to 12 weeks long, with placement support afterwards.', where: '#training'},
        {name: 'Trust', audience: 'Both', body: 'Mission, headline numbers, the leadership team and answers to the questions people ask first.', where: '#about · #team · #faq'},
        {name: 'Contact', audience: 'Both', body: 'A message form next to email, phone, address and social links, one click from anywhere on the page.', where: '#contact'},
      ],
      highlights: [
        {
          eyebrow: 'First screen',
          title: 'Talent. Trained. Transformed.',
          body: 'The hero states the promise in one line, then four quick signals: fast placement, expert training, industry aligned and proven results. A sticky menu reaches every section from anywhere on the page.',
          shots: [{src: '/work/shell-consultancy/site-home.jpg', alt: 'Shell Consultancy website hero with tagline and four highlights', kind: 'screen', caption: 'shellconsultancy.com · Home'}],
        },
        {
          eyebrow: 'Services & training',
          title: 'Hiring and upskilling, side by side',
          body: 'Employers see four recruitment services; candidates see three training programmes with the exact tools they will learn, such as Java, Python and React, Figma and Adobe XD, or SEO and PPC.',
          shots: [{src: '/work/shell-consultancy/site-services.jpg', alt: 'Our Services and Upskilling for the Real World sections', kind: 'screen', caption: 'Services and training'}],
        },
        {
          eyebrow: 'Proof',
          title: 'Clients and numbers up front',
          body: 'A scrolling wall of client logos, tagged by industry, sits directly above the numbers that matter to a buyer: 100+ clients, 500+ placements, 95% retention and 24/7 support.',
          shots: [{src: '/work/shell-consultancy/site-clients.jpg', alt: 'Our Valued Clients logo carousel with headline numbers', kind: 'screen', caption: 'Our Valued Clients'}],
        },
        {
          eyebrow: 'People',
          title: 'Faces behind the firm',
          body: 'Recruitment is a people business, so the team section introduces the founder and the heads of training and recruitment with their focus areas.',
          shots: [{src: '/work/shell-consultancy/site-team.jpg', alt: 'Meet Our Team section with four team members', kind: 'screen', caption: 'Meet Our Team'}],
        },
        {
          eyebrow: 'Mobile',
          title: 'Just as clear on a phone',
          body: 'Every section reflows to a single column with large tap targets, and the menu collapses into a drawer, so candidates browsing on a phone get the same story.',
          shots: [
            {src: '/work/shell-consultancy/phone-home.jpg', alt: 'Shell Consultancy mobile home', kind: 'phone'},
            {src: '/work/shell-consultancy/phone-services.jpg', alt: 'Shell Consultancy services on mobile', kind: 'phone'},
          ],
        },
      ],
      sequence: {
        eyebrow: 'Delivery',
        title: 'From commit to live site, automatically',
        lede: 'No servers to run: every change is built and published by the pipeline.',
        steps: [
          {label: 'Edit', title: 'Update content', body: 'Services, courses, clients and team all live in one data file.'},
          {label: 'Build', title: 'Static export', body: 'Next.js renders every section to plain HTML, CSS and images.'},
          {label: 'Deploy', title: 'GitHub Actions', body: 'Each push to main builds the site and publishes it to GitHub Pages.'},
          {label: 'Serve', title: 'Cloudflare', body: 'The custom domain is served over HTTPS through Cloudflare’s network.'},
        ],
      },
      featureGroups: [
        {audience: 'For visitors', items: ['Smooth animated sections', 'Sticky menu with section links', 'Training topics as clear tags', 'Client logos tagged by industry', 'FAQ accordion', 'Contact form plus phone and email']},
        {audience: 'For the Shell team', items: ['All content in one data file', 'Add a client, course or team member in minutes', 'No server or database to maintain', 'Automatic deploys on every push', 'Free hosting on GitHub Pages', 'HTTPS through Cloudflare']},
      ],
      engineeringEyebrow: 'Design & build decisions',
      engineeringTitle: 'Simple to run, quick to load',
      engineeringLede: 'A marketing site should be cheap to host, easy to update and fast for every visitor.',
      engineering: [
        {title: 'Static, not serverless', body: 'The whole site is exported to static files, so there is nothing to patch or scale and hosting costs nothing.'},
        {title: 'Content separate from layout', body: 'Every list on the page is driven from one data file, so content changes never risk breaking the design.'},
        {title: 'Motion with a purpose', body: 'Sections fade and rise into view as visitors scroll, guiding the eye through the story without slowing the page.'},
        {title: 'Accessible components', body: 'Cards, badges, buttons and the FAQ accordion use Radix-based shadcn/ui components with keyboard support.'},
        {title: 'Two audiences, one order', body: 'The page alternates between employer and candidate sections in a deliberate sequence, ending at one shared contact form.'},
        {title: 'Hands-off deploys', body: 'GitHub Actions builds and publishes on every push, with Cloudflare providing HTTPS for the custom domain.'},
      ],
      architectureTitle: 'Stack & delivery',
      architecture: [
        {layer: 'Framework', items: ['Next.js 14', 'React 18', 'TypeScript', 'Static export']},
        {layer: 'UI', items: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Framer Motion', 'Lucide icons']},
        {layer: 'Delivery', items: ['GitHub Actions', 'GitHub Pages', 'Cloudflare DNS & HTTPS']},
      ],
    },
  },
  {
    slug: 'maruti-industries',
    name: 'Maruti Industries',
    tagline: 'A product-led website for a toughened-glass manufacturer, designed and built on Wix.',
    desc: 'Website for Maruti Industries, maker of Maruti Tuff toughened glass since 1996, presenting seven product lines to appliance, architectural and infrastructure buyers and connecting them with two plants in Maharashtra.',
    categories: ['Web'],
    tags: ['Manufacturing', 'B2B Website', 'Wix', 'Product Showcase'],
    link: 'https://www.marutind.com',
    cover: '/work/maruti-industries/cover.jpg',
    logo: '/work/maruti-industries/logo.png',
    accent: '#E5483D',
    metadata: {
      client: 'Maruti Industries',
      year: '2023',
      service: 'Website design · Wix build · Content structure · Launch',
      location: 'Pune, India',
    },
    details: {
      challenge:
        'Maruti Industries has made toughened glass since 1996, supplying appliance makers, architects and infrastructure projects from a Pune office and a tempering plant at Supa MIDC. Its range runs from architectural, clear float and tinted glass to borosilicate, LED street-light glass and industrial rubber gaskets. Buyers needed one place to see that whole range and reach the right plant quickly.',
      solution:
        'Vedvix designed and built the website on Wix. A dark, product-first design puts the glass and the red gaskets in front of buyers. Each of the seven product lines gets its own page from one shared template, with a description, a project gallery, a Get Quote button and Previous / Next navigation. Around them sit a products gallery, the company story with mission, vision and leadership, and a contact page with an inquiry form.',
      impact:
        'The site is live at marutind.com. A buyer can go from the home page to a product line, see real work and ask for a quote in a few taps, on desktop or phone. Every page ends with both plant addresses, emails and phone numbers, plus click-to-call and live chat, and the Maruti team can update content in the Wix editor themselves.',
      techStack: ['Wix', 'Wix Forms', 'Wix Chat', 'Responsive desktop + mobile layouts', 'SEO title, description and social image', 'Cloudflare CDN'],
      features: [
        'Seven product-line pages from one template',
        'Project gallery and Get Quote on every product page',
        'Previous / Next browsing between product lines',
        'Products gallery',
        'About page with mission, vision and leadership',
        'Inquiry form with confirmation message',
        'Click-to-call and live chat',
        'Both plants’ contacts in every footer',
      ],
      results: [
        {label: 'Making toughened glass', value: 'Since 1996'},
        {label: 'Product lines, each with its own page', value: '7'},
        {label: 'Plants with direct contacts', value: '2'},
        {label: 'Sectors served', value: '3'},
      ],
    },
    caseStudy: {
      surfacesTitle: 'What we built',
      surfacesLede: 'Five sections that take a buyer from the brand to the right product line, and from there to the right plant.',
      surfaces: [
        {name: 'Home', audience: 'First impression', body: 'Skyline hero, company introduction, four headline product lines and the quality, delivery and service promise.', where: 'marutind.com'},
        {name: 'Product lines', audience: 'Seven pages', body: 'Architectural, clear float, tinted, home-appliance, industrial and LED street-light glass, plus industrial rubber gaskets.', where: '/services'},
        {name: 'Products gallery', audience: 'Proof of work', body: 'Studio photography of toughened, borosilicate, round and tube glass alongside the gasket range.', where: '/products'},
        {name: 'About & contact', audience: 'Trust and reach', body: 'Story since 1996, mission and vision, leadership, plus an inquiry form, both plants and opening hours.', where: '/about-us · /contact-us'},
      ],
      highlights: [
        {
          eyebrow: 'Home',
          title: 'A first screen that says who they are',
          body: 'The home page opens on a skyline with the brand line “Crafting New Realities”, then moves straight into the company story, the four headline product lines and the promises buyers care about: quality, on-time delivery and professional service.',
          shots: [
            {src: '/work/maruti-industries/site-home.jpg', alt: 'Maruti Industries home page with skyline hero and Crafting New Realities headline', kind: 'screen', caption: 'marutind.com · Home'},
          ],
        },
        {
          eyebrow: 'Product lines',
          title: 'Seven product lines, one consistent layout',
          body: 'Every product line is a card with a photo, one plain sentence about where it is used and a Read More link, so a buyer scanning for “LED street light glass” or “rubber gasket” finds it in seconds.',
          points: [
            'Architectural, clear float and tinted glass',
            'Home-appliance glass for refrigerators, microwaves and TVs',
            'Industrial glass: borosilicate, round toughened and tube glass',
            'LED street-light glass and industrial rubber gaskets',
          ],
          shots: [
            {src: '/work/maruti-industries/site-services.jpg', alt: 'Our Services page listing seven product lines with photos', kind: 'screen', caption: 'Our Services'},
          ],
        },
        {
          eyebrow: 'Product page',
          title: 'From interest to a quote in one page',
          body: 'Each product line shares one template: a full-width hero, what Maruti makes in that line, a Get Quote button, a project gallery of real installations, and Previous / Next links to keep buyers browsing.',
          shots: [
            {src: '/work/maruti-industries/site-industrial-glass.jpg', alt: 'Industrial Glass product page with hero, description, Get Quote button and project gallery', kind: 'screen', caption: 'Industrial Glass'},
          ],
        },
        {
          eyebrow: 'Products gallery',
          title: 'Let the product do the talking',
          body: 'Clean studio shots on white show toughened, borosilicate, round and tube glass next to the gasket range, each frame carrying the brand mark.',
          shots: [
            {src: '/work/maruti-industries/site-gallery.jpg', alt: 'Products gallery with toughened glass and red rubber gaskets', kind: 'screen', caption: 'Products Gallery'},
          ],
        },
        {
          eyebrow: 'Mobile',
          title: 'Built for the phone in a buyer’s hand',
          body: 'The mobile layout is designed separately, not squeezed: a compact header with the logo, a menu and a Call Now bar, stacked sections and a chat button that stays in reach.',
          shots: [
            {src: '/work/maruti-industries/phone-home.jpg', alt: 'Maruti Industries mobile home page', kind: 'phone'},
            {src: '/work/maruti-industries/phone-industrial-glass.jpg', alt: 'Industrial Glass page on mobile', kind: 'phone'},
          ],
        },
      ],
      sequence: {
        eyebrow: 'Buyer journey',
        title: 'From first visit to the right plant',
        lede: 'Every page is designed around one job: get a serious buyer talking to Maruti.',
        steps: [
          {label: 'Land', title: 'See the brand', body: 'The hero and company story establish 25+ years in toughened glass.'},
          {label: 'Choose', title: 'Pick a product line', body: 'Seven clearly labelled lines, each one plain sentence long.'},
          {label: 'Check', title: 'See real work', body: 'A project gallery on every product page shows finished installations.'},
          {label: 'Ask', title: 'Request a quote', body: 'Get Quote, the inquiry form, live chat or a one-tap call.'},
          {label: 'Connect', title: 'Reach the right plant', body: 'Pune and Supa MIDC addresses, emails and phones on every page.'},
        ],
      },
      featureGroups: [
        {
          audience: 'For buyers',
          items: [
            'Browse seven product lines',
            'Project galleries of real installations',
            'Get Quote on every product page',
            'Inquiry form with an instant confirmation',
            'Live chat and click-to-call',
            'Both plant addresses and opening hours',
          ],
        },
        {
          audience: 'For the Maruti team',
          items: [
            'Edit text and photos in the Wix editor, no developer needed',
            'Add photos to any product gallery',
            'Inquiries and chats arrive in the Wix dashboard',
            'Search title, description and share image set up',
            'Separate desktop and mobile layouts',
            'Hosting, HTTPS and delivery handled by the platform',
          ],
        },
      ],
      engineeringEyebrow: 'Design decisions',
      engineeringTitle: 'Choices that keep the focus on the product',
      engineeringLede: 'A manufacturer’s site succeeds when buyers find the right product and the right person fast.',
      engineering: [
        {
          title: 'Dark canvas, bright product',
          body: 'A black background lets clear glass, molten-orange furnace shots and red gaskets stand out, and matches the red-and-blue BINGLE mark.',
        },
        {
          title: 'One template for every line',
          body: 'Every product page follows the same structure, so new product lines can be added quickly and buyers always know where to look.',
        },
        {
          title: 'Contact on every page',
          body: 'Both plants’ addresses, emails and phone numbers sit in every footer, with a Call Now button and chat always visible.',
        },
        {
          title: 'Plain-language copy',
          body: 'Each product line is described by where it is used, such as refrigerators, street lamps or shower cubicles, rather than by jargon.',
        },
        {
          title: 'A platform the client can run',
          body: 'Wix means the Maruti team can change photos and text, read inquiries and keep the site secure without a developer on call.',
        },
        {
          title: 'Mobile designed on its own',
          body: 'The phone layout has its own header, Call Now bar and stacking, instead of a shrunken desktop page.',
        },
      ],
      architectureTitle: 'Platform & tools',
      architecture: [
        {layer: 'Platform', items: ['Wix website builder', 'Wix Forms', 'Wix Chat']},
        {layer: 'Experience', items: ['Separate desktop and mobile layouts', 'Product page template', 'Image galleries']},
        {layer: 'Reach', items: ['SEO title and description', 'Social share image', 'Click-to-call links']},
        {layer: 'Delivery', items: ['HTTPS', 'Cloudflare CDN']},
      ],
    },
  },
];

export const CATEGORIES: Category[] = ['AI', 'SaaS', 'Mobile', 'Marketplace', 'Web', 'Cloud'];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const FEATURED = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
