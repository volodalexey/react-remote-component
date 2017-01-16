import React from 'react'

import ajax from './ajax'
import Spinner from './spinner'

class Remote extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  componentWillReceiveProps(nextProps) {
    this.getComponent(nextProps.component);
  }

  getComponent(requiredComponent) {
    let component;
    if (component = this.state.components[requiredComponent]) {
      // found in cache
    } else if (requiredComponent) {
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

          if (component) {
            this.setState({
              pending: false,
              components: Object.assign({}, this.state.components, {
                [requiredComponent]: component
              })
            });
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ pending: false });
        });

      this.setState({ pending: true });
    } else {
      component = null;
    }
    return component;
  }

  getInitialState() {
    return {
      components: {},
      pending: false
    };
  }

  render() {
    let {pending, components} = this.state;

    let component = components[this.props.component];
    return <div>
      {component ?
        component({ now: Date.now() }) :
        null}
      {pending ?
        <Spinner />
        : null}
    </div>
  }
}

export default Remote;