import * as React from 'react';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import VirtualizedSelect from 'react-virtualized-select';

const options = [...Array(100000)].map((_, index) => ({
  label: `${index} One`,
  value: index,
}));
// Then import the virtualized Select HOC

export default class App extends React.Component {
  state = { counter: 0 };
  render() {
    const { counter } = this.state;
    const locOptions = options.slice(0, 100 + counter);

    return <VirtualizedSelect options={locOptions} counter={counter} />;
  }

  componentDidMount() {
    setInterval(i => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }, 200);
  }
}
