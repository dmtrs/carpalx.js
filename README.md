Carpalx.js
==========
[![Build Status](https://travis-ci.org/dmtrs/carpalx.js.svg?branch=master)](https://travis-ci.org/dmtrs/carpalx.js)
[![Coverage Status](https://coveralls.io/repos/dmtrs/carpalx.js/badge.svg)](https://coveralls.io/r/dmtrs/carpalx.js)

##About

Carpalx optimizes keyboard layouts to create ones that require less effort and significantly reduced carpal strain!

>The carpalx project introduces a quantitative model for typing effort and applies it to (a) evaluate QWERTY and popular alternatives, such as Dvorak and Colemak and (b) find the keyboard layouts that minimize typing effort for a given set of input documents. In the work presented here, these documents are English text, but they can be anything, such as corpora in French, Spanish and even programming languages, like C or Python.
>
>While there are many alternate layouts, the Carpalx project proposes new layouts and a fully-baked parametric model of typing effort. Way!

**[homepage](http://mkweb.bcgsc.ca/carpalx/?)**

##How it works

>The carpalx typing effort model is based on triads, which are three character substrings formed from the training text. A triad starts at each letter position. Thus, triads overlap, though this is configurable. The effort model takes into account contributions of the following characteristics
>
>- finger travel distance
>- hand, finger and row penalties
>- stroke path

Detailed information information on how `typing effort model` works can be found [here](http://mkweb.bcgsc.ca/carpalx/?typing_effort)

##Setup

Clone repo and install dependencies:

    git clone https://github.com/dmtrs/carpalx.js.git
    cd carpalx.js
    npm install

##Run

Current version runs typing effort model the `/usr/share/dict/words` file (see `src/index.js`):

    node src/index.js

##Test

Run testing suite with:

    npm test
