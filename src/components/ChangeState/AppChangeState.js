import React from "react";

class AppChangeState extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    //Речь идёт о том, что каждый раз, создавая метод класса (handleClick() в нашем случае),
    //в котором планируется использовать метод setState(), этот метод нужно связать с this.
  }

  handleClick() {
    //this.setState({count: 1})
    //Состояние компонента можно сравнить с одеждой, которую носит человек.
    //Если он хочет переодеться, то он не перешивает и не перекрашивает одежду, не снимая с себя,
    //а снимает её и надевает что-то другое. Собственно говоря, именно так работают и с состоянием компонентов.
    this.setState(pervState => {
      return {
        count: pervState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default AppChangeState;
