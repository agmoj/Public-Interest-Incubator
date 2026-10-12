# Public Interest Incubator website

A simple static website: plain HTML and CSS, with no build tools or frameworks required.

## Pages

| File | Page |
|------|------|
| `index.html` | Landing page |
| `mission.html` | Mission, vision, and values |
| `events.html` | Upcoming events |
| `team.html` | Staff members |
| `apply.html` | Application form |

Shared styles are in `css/styles.css` (colors and fonts are at the top), and images go in `images/`.

## Preview locally

Open `index.html` in a web browser, or run a local server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

- **Text:** edit the HTML files directly. Placeholder text is marked with *italics* or generic names.
- **Events:** in `events.html`, copy an `<article class="card event">` block and change the date, title, and details.
- **Staff:** in `team.html`, copy a `staff-card` block, add a photo to `images/`, and update the `src`.
- **Navigation/footer:** these are repeated in every page, so update all five files when you change them.

## Connecting the application form

A static site can't store form submissions by itself. Use a form service such as
[Formspree](https://formspree.io) (free tier available):

1. Create a form in Formspree and copy its endpoint (e.g. `https://formspree.io/f/abcd1234`).
2. In `apply.html`, replace `https://formspree.io/f/YOUR_FORM_ID` with your endpoint.

Submissions will then be emailed to you. Until then, the form shows a "not connected yet" notice.
Alternatives: Netlify Forms (if hosting on Netlify), or embedding a Google Form.

## Publishing with GitHub Pages (free)

1. Merge this branch into `main`.
2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a few minutes.

To use a custom domain (e.g. `publicinterestincubator.org`), add it under **Settings → Pages → Custom domain**
and follow GitHub's DNS instructions.
