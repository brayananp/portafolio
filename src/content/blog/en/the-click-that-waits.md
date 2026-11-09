---
title: "The click that waits is already the problem"
description: "INP measures how fast a page answers a tap. Web Almanac 2025 figures, plus a short check before you ship."
publishedAt: 2026-11-08
tags: ["performance", "inp", "javascript"]
version: "v2026.11"
changeType: "added"
assistedByAi: true
coverImage: "/images/blog/el-clic-que-tarda-cover.jpg"
coverDetails:
  alt: "A phone on a dark background. An amber button waits beside a faint offset copy, next to a three-step line: tap, pause, and painted frame."
  caption: "The gap between the tap and the next frame is what INP collapses into one number."
  width: 1600
  height: 900
alternateSlug: "el-clic-que-tarda"
---

On the catalog sites I build, the comment I hear most often is not about file size. It is about the button.

Someone opens the site on a phone, taps the menu or a filter, and the page goes quiet for a beat. On the laptop, the lab report can look fine. In the hand, it does not. Nobody says "your JavaScript weighs 600 kilobytes." They say the control does not answer.

## What that silence is measuring

The silence has a name: **Interaction to Next Paint**, INP. It has been a [Core Web Vital](https://web.dev/blog/inp-cwv-march-12) since March 12, 2024. It watches clicks, taps, and key presses for the whole visit and keeps one of the slowest interactions, setting outliers aside. It looks at the full visit, not only the first tap, which is what FID measured.

A page is in good shape when, at the 75th percentile of real visits, INP is **200 ms or less**. Between 200 and 500 ms it needs work. Above 500 ms the response is poor. The 75th percentile is the point: if one visit in four is already slow, the site does not pass, even when the rest feel quick. The definition is on [web.dev](https://web.dev/articles/inp).

Two hundred milliseconds comes from how we feel cause and effect. Under about 100 ms, the button and the response feel like the same action. Past 200 ms, that feeling breaks. The "good" line was set at 200 ms because, on real phones, a 100 ms target was not something most sites could hold. The reasoning is in [how the thresholds were defined](https://web.dev/articles/defining-core-web-vitals-thresholds).

## What real sites are shipping

The [2025 Web Almanac](https://almanac.httparchive.org/en/2025/page-weight), from the July crawl, puts the median home page at **2,559 KB** on mobile and **2,862 KB** on desktop.

That total is the weight of the page. Each file type has its own median, and those medians are not slices that add up to it. On mobile they look like this:

- 911 KB of images
- 632 KB of JavaScript
- 122 KB of fonts
- 77 KB of CSS
- 22 KB of HTML

On desktop, the JavaScript median rises to 697 KB. Images still win on bytes. Script still has to be parsed and run on the same thread that has to paint the answer to a finger.

Field data is uneven. The [performance chapter](https://almanac.httparchive.org/en/2025/performance) reports that in 2025 **77%** of sites have a good INP on phones and **97%** do on desktop. When all three Core Web Vitals are required together — LCP, INP, and CLS — **48%** of mobile sites and **56%** of desktop sites land in "good."

There is a more awkward gap. In the lab, median mobile Total Blocking Time reached **1,916 ms**, 58% higher than in 2024. Desktop median TBT was 92 ms. Field INP improved while lab blocking got worse. The Almanac offers two readings: real phones are more capable and hide some of the complexity, and some sites tune the interactions that dominate INP while leaving a lot of background work in place.

Inner pages on mobile do worse than home pages: **69%** with a good INP, against **80%** on the home page. Filters, validation, and widgets that show up once someone is already inside. That is where I usually find the click that waits.

<figure>
  <img
    src="/images/blog/el-clic-que-tarda-laboratorio.webp"
    alt="On the left, a laptop with a settled page and a green dot. On the right, a phone with an amber button still dim and a finger waiting."
    width="1600"
    height="900"
    loading="lazy"
  />
  <figcaption>
    The laptop report and the hand that is waiting are not measuring the same moment.
  </figcaption>
</figure>

## What I check before I hand a site over

Four steps are enough for a first pass:

1. Open the site on a mid-range phone, as well as the laptop where I built it.
2. Tap the menu, a filter, and a form field. If the visual response arrives late, I look at the main thread, not only the download weight.
3. Ask what each script is for when it is not the product: a chat widget, a second analytics tag, a carousel nobody asked for.
4. Leave in HTML anything that does not change after the click. A catalog you can read without hydrating the whole page reaches the hand sooner.

If the site already has traffic, PageSpeed Insights shows CrUX field data. The lab report answers a different question: how the page behaves on a controlled machine. Both are useful. They describe different moments.

| Signal | Good | Poor |
| --- | --- | --- |
| INP, 75th percentile | ≤ 200 ms | > 500 ms |
| LCP | ≤ 2.5 s | > 4 s |
| CLS | ≤ 0.1 | > 0.25 |

Between "good" and "poor" sits "needs improvement." All three thresholds come from [web.dev](https://web.dev/articles/vitals).

## Closing

When I hand a site over, what I worry about most is the first control someone will tap on a phone. If that control answers, the conversation with the client starts from something they can already use.

I checked the figures against the 2025 Web Almanac and the web.dev docs. If a number here disagrees with a measurement from your own site, keep the measurement: the Almanac describes the web as a whole, not your project.
