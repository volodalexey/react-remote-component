Remote AJAX components for ReactJS

Highlighted description of how to load remote react-component apart from the whole react-application and render it!
I'll show you how I have solved this problem, event after one year, I still can not find a similar solution except [react-remote-component-demo] (https://github.com/jamesmartin/react-remote-component-demo).

During development [React](https://facebook.github.io/react/) project, the task was established,
it is required that a one-page react-application must load via AJAX additional components and render them, additional complexity was the fact that these components must be edit on the server-side, apart from the react-application.

Briefly the following structure of the application, there is a list of components on the left when you click on one of them, I load the remote component via AJAX and display its detailed view.

Because for bundle I used [Webpack](https://webpack.github.io/), the first attempts google something led to the use of [require.ensure](https://webpack.github.io/docs/api-in-modules.html#require-ensure).

It was not possible in my case, because at the time of webpack bundling I do not know how much remote components I will have, all that I know, let's say that the components will be distributed as the static from such folder or they will be served from the database.

Accordingly, it was impossible to use [CommonsChunkPlugin](https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin), for specifying webpack to say, here are some input files need to be bundled separately to somewhere, because I do not know how many files will be.

To summarize react-application is bundled with webpack and remote components are prepared separately (remote, means in this case from the react-application, that is why I gave them such definition).

I also wanted to code remote components with nice ES6. So it was necessary to use the [Babel](https://babeljs.io/) in addition to compile my remote components.

Through trial and errors I was able to get my remote component to be compiled.

The component looked like this:
```
class CMP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div>Hello from <strong>FIRST</strong> remote component!</div>
      <div>{this.props.now}</div>
    </div>
  }
}

module.exports = CMP;
```

Please note, this is a listing of the whole original remote component, there are no modules load `import ... from ...` or `... = require (...)` from `node_modules`, otherwise it will not work. Additionally, in the end it is `module.exports`.

Such ES6 component `1.jsx` I can compile into ES5 `1.js` using Babel without errors.

After compilation, I have a text file with remote component `1.js`:
```
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CMP = function (_React$Component) {
  _inherits(CMP, _React$Component);

  function CMP(props) {
    _classCallCheck(this, CMP);

    return _possibleConstructorReturn(this, (CMP.__proto__ || Object.getPrototypeOf(CMP)).call(this, props));
  }

  _createClass(CMP, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "Hello from ",
          React.createElement(
            "strong",
            null,
            "FIRST"
          ),
          " remote component!"
        ),
        React.createElement(
          "div",
          null,
          this.props.now
        )
      );
    }
  }]);

  return CMP;
}(React.Component);

module.exports = CMP;
```
This file is already possible to share from static or from database.

It remains to upload the file to the react-application, make it a component and render it.

The component that will do this will be named as `Remote`. And to display the list will be called `List`.
The logic about this, `List` listens user `click` event determines which element of the list has been pressed and accordingly such property `component` I pass into `Remote` as `props`.
Inside `Remote` I used [componentWillReceiveProps()](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops) function. So I determined that the property has changed and I need to render a detailed view of passed remote component. For this one, I check to see if it is in the component cache, and if not then load it.

It is simple enough to load our remote component (I am using a high-level wrapper over [XMLHttpRequest](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest) for clarity).
All the magic happens next:
```
      ajax.load('/remote/' + requiredComponent)
        .then((str_component) => {
          let component;
          try {
            let
              module = {},
              Template = new Function('module', 'React', str_component);

            Template(module, React);
            component = React.createFactory(module.exports);
          } catch (e) {
            console.error(e);
          }
        })
```

From downloaded string/component I make template function `new Function ()`.
As input parameters I define two string `module` variable and `React`.
This template now I "execute" `Template (module, React)`.
Create new object `module = {}` and pass it as first parameter, and the second parameter is React.
Thus, if we remember that we wrote in a remote component:
```
... extends React ...
```
and
```
module.exports = ...
```
At the "execution" of our function/template we pass these two variables, the errors should not be as we created these two variables.
As a result, our object `module = {}` will have assigned property `exports` as the result.
And we solve two problems, cast aside the errors at compile component time using `module.exports` and `React`. And define them as input parameters "execute" our template already in the browser.

Left to create our component `component = React.createFactory (module.exports)` and render it:

```
  render() {
    let component = ...;
    return <div>
      {component ?
        component({ now: Date.now() }) :
        null}
    </div>
  }
```

When using our component we can pass any parameters `component ({now: Date.now ()})`, which will be visible as `props`.

Our remote component works like usual!

Source code of simplified application posted on githab [react-remote-component](https://github.com/volodalexey/react-remote-component):
To start do the following:

`npm install` install all modules

`npm run build-cmp` compile our remote components `dist/remote`

`npm run server-dev` run webpack dev server that will bundle the entire application in memory, and serve from there, and serve remote components as static.

Visit [http://localhost:8099/](http://localhost:8099/) in the browser.