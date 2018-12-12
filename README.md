# ember-context

React-style context for Ember.

## Background
React offers a [context](https://reactjs.org/docs/context.html) approach which allows sharing data from ancestor components to descendents without having to pass it directly down the component tree. This addon is an attempt to emulate that behaviour in Ember.

## Disclaimer
Context is usually not the best tool for the job, as it has some drawbacks, both [stylistically](https://reactjs.org/docs/context.html#before-you-use-context) and in terms of [efficiency](https://reactjs.org/docs/context.html#caveats). If you still feel like context is the best solution for your design, then go ahead and use it :wink:

## Installation

* `ember install ember-context`
