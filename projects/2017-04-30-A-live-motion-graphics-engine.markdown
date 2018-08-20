---
layout: work
title:  "A live broadcast graphics engine"
date:   2017-02-09 23:35:20 +0000
type: 
  - Development
  - Design
  - Other
outline: I conceptualised, developed and tested an application to overlay dynamic motion graphics on top of live video streams, intended to add value to student TV livestreams.
quickFacts:
  - Fully customisable and needs minimal training to use.
  - Based on node.js and Websockets.
  - Inspired by BBC news graphics
image: "/uploads/brooker_1.jpg"
---
Brooker CG (character generator) is a tool designed to make broadcast-quality graphics easy and straightforward to achieve for student television volunteers.

Professional character generation hardware and software is prohibitively expensive, and the other alternative - using software like Adobe After Effects to render out all graphics in advance, is time-consuming and requires a great deal of forward planning to do effectively.

The Brooker CG application allows a volunteer to use simple text input fields to create custom graphics on the fly, updating viewers with alert messages, scrolling tickers, scoreboards and more.

<figure>
  <img src="/uploads/brooker_2.jpg"/>
  <figcaption>The Brooker CG control panel.</figcaption>
</figure>

The application relies on a Websockets server written in node.js, and accepts commands issued from a browser control panel. It is compatible with all major video live streaming software, including Wirecast and Open Broadcast Software.

Future versions of Brooker CG will incorporate live infographics, charts and direct integration with social media feeds.
