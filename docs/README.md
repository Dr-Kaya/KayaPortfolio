# Erdogan Kaya — Learning Design & Technology Portfolio

A self-contained, static portfolio in `index.html`. The page presents computing and STEM education through learning-design examples rather than a full repository dump. Existing application files outside `docs/` are unchanged.

## Preview

Open `index.html` in a browser. It contains its own readable HTML, CSS, and a small project-filter script. No package installation, build process, database, API key, or external script is required. All content remains visible if JavaScript is unavailable.

## Publish with GitHub Pages

After reviewing and merging the portfolio pull request:

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose **main** and the **/docs** folder, then **Save**.
4. Use the published address displayed by GitHub after deployment completes.

Alternatively, the portfolio can be published directly from the `portfolio/learning-design-text-only` branch and its `/docs` folder without changing the original application. Check any existing Pages configuration before changing its source; selecting a new source changes the site served for this repository.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Included projects

- Pencil or Pickle? — collaborative book and digital read-aloud edition.
- Tube School — independent browser-based robotics learning simulation.
- Compose and Code (CoCo) — collaborative learning platform and research.
- Compose with AI — collaborative evaluation-and-writing platform.
- AI Story Lab — scaffolded robot-story planning, described without a screenshot.
- ML Explorer — simulated machine-learning concept modules.
- Sporty Bot Label Lab — data-labeling investigation prototype.
- Playful programming — platformer and Snake coding experiments.
- Tableau Public — link to Erdogan Kaya's visualization collection.
- Advanced Placement participation and achievement — collaborative research and open analysis materials.

## Media, privacy, and scope

No screenshots, SVG files, encoded media, data-URI payloads, remote fonts, analytics, credentials, account forms, or embedded third-party dashboards are included. The visual cards are ordinary HTML and CSS. External resources load only after a visitor follows a link.

Only selected public repositories are linked. Private repositories are not exposed. Course forks, starter repositories, and empty repositories are not presented as original projects.

The page credits collaborators and distinguishes artifacts and prototypes from empirical evidence. It does not claim learning gains from in-app scores, badges, or simulated model results. The Tube School description explicitly limits its scope to educational simulation and fitted joint-command imitation.

## Content and source notes

Project descriptions were prepared from repository documentation, the supplied academic record and project descriptions, and the public DCoaD Literacies Lab pages:

- https://dcdll.lab.ua.edu/what-is-coco/
- https://dcdll.lab.ua.edu/sample-page/what-is-compose-with-ai/
- https://dcdll.lab.ua.edu/people/

Book and illustration credits are retained in the Pencil or Pickle? card; source media has not been copied into this site. Linked projects retain their own licenses.

The earlier Wix website is labeled as earlier work because its affiliation information is older. No direct public AI Story Lab application address was provided; its card links to the research collaboration and an email walkthrough request. Tableau is linked at the profile level because individual dashboard details were not available for inspection. The LinkedIn link is to the profile, not an unverified simulation post. The Tube School demonstration address comes from its repository README. External hosting and sign-in requirements can change; check the live destinations before sharing the portfolio.

## Maintenance

Edit the corresponding `<article class="project">` block in `index.html` to update a project. Category filters use its `data-category` values. Keep attribution, personal contribution, prototype status, and evidence claims accurate. Update the displayed project count when adding or removing cards.

Basic browser checks covered category filtering, expandable notes, desktop and mobile overflow, keyboard access to the skip link, and readable content without JavaScript. These checks are not a formal accessibility certification.
