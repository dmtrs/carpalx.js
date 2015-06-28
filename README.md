Carpalx.js
==========

##About

Carpalx optimizes keyboard layouts to create ones that require less effort and significantly reduced carpal strain!

>The carpalx project introduces a quantitative model for typing effort and applies it to (a) evaluate QWERTY and popular alternatives, such as Dvorak and Colemak and (b) find the keyboard layouts that minimize typing effort for a given set of input documents. In the work presented here, these documents are English text, but they can be anything, such as corpora in French, Spanish and even programming languages, like C or Python.
>
>While there are many alternate layouts, the Carpalx project proposes new layouts and a fully-baked parametric model of typing effort. Way!

**[homepage](http://mkweb.bcgsc.ca/carpalx/?)**


##Usage

###Setup

  git clone git@bitbucket.org:dmtrs/carpalx.js.git
  cd carpalx.js
  npm install

###Run

Run demo on the `/usr/share/dict/words` file:

  node src/index.js

###Test

  npm test
