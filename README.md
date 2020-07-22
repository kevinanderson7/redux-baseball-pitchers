# Redux Baseball Pitchers

- Fork
- Clone
- `npm install`
- `npm start`

## Base Requirements

Our application is a hit! Baseball coaches around the world are using our application to track their list of pitchers and catchers. They love that clicking a name updates immediately and they can add new pitchers or catchers on the fly.

We're about to add a ton of new features to our application, but before we do, we should add redux to our application so that our `App.js` component doesn't get out of control.

### TotalPitchers Component

In `App.js` replace the line:

```JSX
<div>Total Pitchers: {this.state.pitcherList.length}</div>
```

with

```JSX
<TotalPitchers />
```

It shouldn't need props, because the `pitcherList` should be stored in Redux.

### TotalCatchers Component

In `App.js` replace the line:

```JSX
<div>Total Catchers: {this.state.catcherList.length}</div>
```

with

```JSX
<TotalCatchers />
```

## Stretch Goals

### Keep Going in App.js

One of the joys of redux is that it can really clean up our components. Make `App.js` look like this:

```JSX
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <OnTheMound />
        <BehindThePlate />
        <TotalPitchers />
        <TotalCatchers />
        <h3>All Pitchers</h3>
        <PitcherForm />
        <PitcherList />
        <h3>All Catchers</h3>
        <CatcherForm />
        <CatcherList />
      </div>
    );
  }
}

export default App;

```

There are about nine stretch goals wrapped up into this one stretch goal, so break things down into very small steps.

### Clean Index.js

If you have moved everything out of `App.js`, your `index.js` is probably getting a little crowded. Move each of your reducers to a separate file in a new `App/redux/reducers` folder.
