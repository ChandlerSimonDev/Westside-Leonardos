# Westside Leonardo's: Website

The website for Westside Leonardo's, a takeout, gaming and convenience store in Burnt Church First Nation, NB.
Built with plain HTML, CSS and JavaScript. No frameworks and no build step.

## Folder layout

```
website/
├── index.html      ← the page (structure + all the words)
├── css/style.css   ← how it looks
├── js/script.js    ← the secret-menu chef button
├── images/         ← photos, resized for the web (lowercase-with-dashes names)
├── videos/         ← kitchen videos + their poster images
└── README.md       ← this file
```

## Preview it on your PC (VS Code)

1. In VS Code: **File → Open Folder…** and pick `C:\Westside\website`.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab.
3. Right-click `index.html` → **Open with Live Server**. The page opens in your browser and
   refreshes by itself every time you save a file.

## Preview it on your iPhone (before it's online)

Your phone and PC need to be on the same Wi-Fi.

1. On the PC, open Command Prompt and type `ipconfig`. Find the **IPv4 Address** (something like `192.168.1.23`).
2. With Live Server running, open Safari on the iPhone and go to `http://192.168.1.23:5500`
   (use your number; 5500 is Live Server's usual port, and it's shown in VS Code's bottom bar).
3. If Windows asks whether to allow VS Code on the network, allow it for **Private networks**.

## Put it online (GitHub Pages)

This gets its own repo, separate from your portfolio.

1. On github.com: **New repository** → name it `westside-leonardos` → Public → Create.
2. Click **uploading an existing file**, then drag in everything *inside* the `website` folder
   (index.html, css, js, images, videos, README.md). `index.html` must be at the top level.
3. **Commit changes**.
4. Go to **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
5. Wait a minute or two. It'll be live at **https://chandlersimondev.github.io/westside-leonardos/**

Later, once you've learned Git in VS Code (Source Control tab), you can push changes instead of uploading.

## Common edits

| I want to… | Do this |
|---|---|
| Add a menu item with a photo | Put the photo in `images/`, then in `index.html` copy a `<figure class="card">…</figure>` block and change the `src`, `alt` and name. |
| Add a menu item without a photo | Add an `<li>` to that category's `plain-list`. |
| Move an item to/from the secret menu | Cut its `<figure>` block and paste it into the other section. |
| Change the green | Edit `--green` at the top of `css/style.css`. |
| Change hours | Search `index.html` for `8 PM` (it appears in the hero and the Hours box). |

## Image tips

- Use **lowercase-with-dashes** file names (`steak-sub.jpg`, not `Steak Sub.JPG`). GitHub Pages is
  case-sensitive, so `Steak-Sub.jpg` and `steak-sub.jpg` are different files there, even though
  Windows treats them as the same. This is the #1 "works on my PC, broken online" bug.
- Phone photos are huge (2000+ px, 400 KB+). Shrink them to about 1200 px wide before adding them.
  Free tools: squoosh.app in your browser, or Windows Photos → Resize.
