# Learning Design & Computing Education Portfolio

A standalone portfolio for Erdogan Kaya, separate from the original React/Express application. The site is entirely contained in `docs/index.html`.

## Preview

Download `index.html` and open it in a current browser. No build command, account, API key, database, or installation is required. The portfolio works offline; external project links require an internet connection.

## Publish with GitHub Pages

After reviewing the proposed changes:

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `portfolio/learning-design-2026-10-25` and `/docs`, then Save. Alternatively, merge the pull request and select `main` with `/docs`.
4. Wait for GitHub's deployment to finish and use the site URL displayed in Pages settings. Do not treat the GitHub source-file URL as the published portfolio.

GitHub allows publishing from `/docs` on a selected branch. See the official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

If a different Pages site is already configured for this repository, review that configuration before changing it. These files do not change the existing application, its dependencies, or its deployment settings.

## Selected content

- Pencil or Pickle? read-aloud reader and companion animation repository, with author and illustrator credits.
- Compose and Code (CoCo), linked to the public platform, lab overview, and associated paper.
- Compose with AI, identified as collaborative research and linked to its platform and public walkthrough.
- AI Story Lab, described as a learner-authored story-planning organizer, not an automatic story generator.
- Tube School, a browser-based robotics learning simulation with an explanation of its model limitations and third-party credits.
- ML Explorer (`CoCoModules`), clearly identified as a separate prototype using simulated machine-learning outcomes.
- Tableau Public profile, AP research analysis repository, Sporty Bot Label Lab, Van Gogh's Starry Adventure, and Snake Game.
- Current UTA directory, collaborating lab, LinkedIn, and earlier academic website.

The selection is curated rather than an automatic listing of every repository. Private repositories and third-party tutorial forks are not presented as portfolio projects. No existing project repository was renamed or modified.

## Editing

All content, styles, and the small filtering script are in `index.html`. Search for a project title to edit its card. Native `details` elements contain the design notes. Update each card's `data-categories` to change its filters (`literacy`, `ai`, `robotics`).

For each future project, document the learning purpose, intended audience, actual contribution, collaborators, design choices, available evidence, and limitations. Distinguish completed evaluation from proposed evaluation. Retain project-specific ownership and license terms.

## Access and link notes

- The supplied Tableau profile is linked, not embedded. Individual dashboard URLs were not retrieved, so their titles and findings are not invented.
- No confirmed direct public launch URL was supplied for AI Story Lab. The card links to the collaborating lab and an email request for a walkthrough.
- The specific simulation post on LinkedIn was not independently identified. The LinkedIn profile is linked; Tube School is included on the basis of its own repository, not an assumed LinkedIn post.
- Reader and Tube School launch URLs come from their public repository documentation. Their live deployments could not be loaded in the preparation environment; check them in a normal browser before sharing the published portfolio. Their repositories remain linked as fallbacks.
- The Wix website contains older affiliation information and is labeled as an earlier academic website.

## Accessibility and privacy features

Semantic headings and landmarks, a skip link, visible keyboard focus, native expandable design notes, filter state announcements, reduced-motion support, and responsive layout. All project content is available without JavaScript. These features are not a claim of a completed accessibility certification.

The page has no encoded image payloads, data-URI images, remote scripts, third-party fonts, analytics, tracking, iframe embeds, forms, or browser-storage writes. External destinations are loaded only when a visitor follows a link. The host may retain normal access logs.

## Verification

The local version was rendered with Chromium at viewport widths of 320, 390, 768, 1024, and 1440 pixels. Checks passed for horizontal overflow, category counts, keyboard activation of design notes, and JavaScript errors. With JavaScript disabled, all six featured projects and native design notes remained available. Desktop and mobile previews were inspected. This does not establish external service availability or constitute a full accessibility audit.
