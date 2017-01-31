# react-redux-linked-prices

Example with next features:
Step 1 Branch:

1. onClick event handling to update the state (Unlink button)
2. onSubmit event handing to update the state
3. Filtering to show only linked room prices in the table (roomprice.linkedPriceId>0)
4. Filtering to show only allowed room prices in the dropdowns
5. Flatern state with 2 entities: room prices and link rules related by id

Step 2 Branch:

1. Fetch data from server using "restables" (bookassist way to create models that has a java correspondency)
2. Chain or promises so that for each room price a link rule is loaded

To look in more detail:

1. When it is needed to bind function parameter before using a callback


You could use the example to understand

1. React-redux
2. Redux-forms
3. ES6 arrow function
4. Array.prototype.map()
5. Array.prototype.filter()
3. ES6 Map object
4. Promises

Each component is splited in 2 files one in components and other in containers
Built with JSPM

### Dependencies

```
jspm install npm:redux-form

jspm install npm:lodash

jspm install npm:react-bootstrap

jspm install ba-git:ba-common-interface-js@1.0.8


``


### Installation

To install the example:

```
cd src

yarn

```


#### Install yarn to test it if needed

To test the example you can use live-server

```
npm install --global yarn

```

### Test

```
cd src

yarn start

```

