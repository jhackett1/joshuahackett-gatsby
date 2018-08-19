---
layout: work
title:  "Smoke Radio broadcast rebuild"
date:   2017-02-09 23:35:20 +0000
categories: digital UX
outline: I upgraded the broadcast infrastructure of one of the country's top student radio stations, for an improved listening experience and easier administration of the station's output.
quickFacts:
  - Fully responsive design
  - Multimedia friendly and automates common tasks
  - User-friendly
image: "/uploads/radio_1.jpg"
---
Smoke Radio is one of the top student radio stations in the UK, involving nearly one hundred students every year and broadcasting 24/7. They took home the Student Radio Association's award for best station in 2015, and were shortlisted again in 2016.

When I became student media coordinator in early 2016, the station was facing several issues with its broadcast infrastructure. The media server being used relied on Flash, which has virtually no mobile support and rapidly declining desktop support. This massively limited the potential audience.

The station operates across all four of the University of Westminster' campuses, with studios in central London and up in Harrow. However, taking a different studio live was time-consuming and difficult, so rarely done, again limiting participation and membership on particular campuses.

<figure>
  <img src="/uploads/radio_2.jpg"/>
  <figcaption>Smoke Radio's implementation of the Airtime system.</figcaption>
</figure>

I replaced the existing proprietary media server with two pieces of open-source software. For basic streaming, I went with Icecast, which is the gold standard for audio webcasting. It supports MP3 as well as higher efficiency codecs like AAC, and does not rely on Flash. This streaming protocol is also compatible with hardware audio decoders, and these are now being obtained and installed in social areas on campus, to improve listenership and brand awareness.

Icecast was controlled by the second piece of software, Airtime. Airtime functions as a central scheduling and playout manager. Media can be uploaded and connections to various studios established, and so live shows, pre-recorded shows and outside broadcasts can be made according to a single central calendar. Switchover became automated and hassle-free.

These upgrades also laid crucial groundwork for a cross-platform mobile app for on-the-go listening.
