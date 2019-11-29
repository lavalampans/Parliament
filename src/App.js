import React from 'react'
import PersonList from './PersonList'
import Spinner from './Spinner'
import Header from './Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      personList: {},
      isLoading: true
    }
    this.initialState = {};
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    fetch("http://data.riksdagen.se/personlista/?utformat=json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          personList: data.personlista.person,
          isLoading: false
        })
        this.initialState = data.personlista.person
      })
  }

  reset() {
    this.setState(prevState => {
      if (this.initialState !== prevState.personList) {
        return { personList: this.initialState }
      }
    })
  }

  handleChange(parti) {
    this.reset()
    this.setState(prevState => {
      const sortList = prevState.personList.filter(fil => fil.parti === parti)
      return { personList: sortList }
    })
  }

  render() {
    return (
      <div className="container">
        <Header handleChange={this.handleChange} disabled={this.state.isLoading} reset={this.reset} />
        <div className='row mt-4'>
          {!this.state.isLoading ? <PersonList users={this.state.personList} /> : <Spinner />}
        </div>
      </div>
    )
  }
}

export default App;