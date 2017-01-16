Удаленные AJAX компоненты для ReactJS

Здесь будет идти речь о том, как отдельно от всего реакт-приложения подгрузить удаленный реакт компонент и отрендерить его!
Я покажу как решил эту проблему, т.к. год спустя я так и не могу найти аналогичные решения кроме как [react-remote-component-demo](https://github.com/jamesmartin/react-remote-component-demo).

При разработке проекта на [React](https://facebook.github.io/react/) была поставлена задача,
необходимо чтобы одностраничное приложение на React подгружало по AJAX дополнительные компоненты и показывало их, дополнительную сложность составляло то, что эти компоненты должны правиться на сервере независимо от самого приложения.

Упрощенно структура приложения следующая, есть список компонентов слева, при нажатии на один из них, я подгружаю удаленный компонент через AJAX и отображаю его детальный просмотр.

Т.к. при сборке я использовал [Webpack](https://webpack.github.io/), то первые же попытки нагуглить что-то приводили к использованию [require.ensure](https://webpack.github.io/docs/api-in-modules.html#require-ensure).

Это оказалось невозможным в моём случае, т.к. на момент компиляции вебпака я не знаю сколько у меня будет удаленных компонентов, всё что я знаю, что допустим компоненты будут раздаваться как статика из такой-то папки или сервер будет их раздавать из базы данных.

Соответственно оказалось невозможным использовать [CommonsChunkPlugin](https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin), чтобы сказать вебпаку, вот такие-то входные файлы положить отдельно туда-то, т.к. я не знаю сколько файлов будет.

Итого само реакт-приложение собирается с помощью вебпака, а удаленные компоненты подготавливаются отдельно (удаленные в данном случае от самого реакт-приложения, поэтому я дал им такое определение).

Удаленные компоненты я также хотел красиво писать на ES6. Значит необходимо было использовать [Babel](https://babeljs.io/) дополнительно для компиляции моих удаленных компонентов.

Методом проб и ошибок я смог заставить компилироваться мой удаленный компонент.

Компонент выглядел так:
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

Обратите внимание, это листинг всего исходного удаленного компонента, здесь нет никаких подгрузок модулей `import ... from ...` или `... = require(...)` из `node_modules`, иначе работать не будет. Дополнительно в конце стоит `module.exports`.

Вот такой компонент на ES6 `1.jsx` я могу компилировать в ES5 `1.js` с помощью бабеля чтобы он не ругнулся.

После компиляции у меня есть готовый текстовый файл с удаленным компонентом `1.js`:
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
Этот файл уже можно отдавать статикой или из базы данных.

Осталось загрузить этот файл в реакт-приложение, сделать из него компонент и отрендерить его.

Компонент, который будет делать это назовём `Remote`. А для отображения списка назовём `List`.
Логика примерно такая, `List` слушает событие пользователя `click`, определяет какой элемент списка был нажат и соответственно такое свойство `component` я и передаю в `Remote` в качестве `props`.
Внутри `Remote` я использовал [componentWillReceiveProps()](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops) функцию. Так я определял, что свойство изменилось и мне необходимо отрендерить детальный просмотр переданного удаленного компонента. Для этого я проверяю, есть ли он в кеше компонента, и если нет то подгружаю.

Подгрузить наш удаленный компонент не составляет труда (использую более высокоуровневую обертку над [XMLHttpRequest](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest) для наглядности).
Вся магия происходит дальше:
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

Из подгруженной строки/компонента я делаю функцию-шаблон `new Function()`.
В качестве входных параметров определяем две строковые переменные `module` и `React`.
Этот шаблон я теперь "вызываю" `Template(module, React)`.
Создаю новый объект `module = {}` и передаю его на первое место, а на второе место передаю модуль реакт.
Таким образом, если вспомнить что мы писали внутри удаленного компонента:
```
... extends React ...
```
и
```
module.exports = ...
```
При "вызове" нашей функции/шаблона мы передаем эти две переменные, ошибки быть не должно т.к. мы определили эти две переменные.
В результате в наш объект `module = {}` присвоиться результат в свойство `exports`.
Так мы решаем две проблемы, обходим ошибки на этапе компиляции компонента, используя `module.exports` и `React`. И определив их как входные параметры "выполняем" наш шаблон уже в браузере.

Осталось создать наш компонент `component = React.createFactory(module.exports)` и отрендерить его:

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

При вызове нашего компонента можно передать любые параметры `component({ now: Date.now() })`, которые будут видны как `props`.

Наш удаленный компонент работает как родной!

Код упрошенного приложения выложил на гитхаб:
Для запуска выполняем следующее:

`npm install` устанавливаем все модули

`npm run build-cmp` компилиреум наши удаленные компоненты `dist/remote`

`npm run server-dev` запускаем дев сервер вебпака, кторый будет собирать все приложение в оперативную память, а удаленные компоненты будет раздавать как статику.