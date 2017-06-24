import React, { Component } from 'react';
import { Button, Modal, Select, Image } from 'semantic-ui-react'

const age = [
      {key: '10', value: '10', text: '10'},
      {key: '11', value: '11', text: '11'},
      {key: '12', value: '12', text: '12'},
      {key: '13', value: '13', text: '13'}
      ]

class Calculator extends Component {

    state = {
      open: false,
      age: 10,
      weight: 10,
      height: 10,
      activity: 1
    }

    constructor(props) {
      super(props);
      this.close = this.close.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.calculate = this.calculate.bind(this);
  }

    weight = [
      {key: '10', value: '10', text: '10'},
      {key: '11', value: '11', text: '11'},
      {key: '12', value: '12', text: '12'},
      {key: '13', value: '13', text: '13'}
      ]

    height = [
      {key: '10', value: '10', text: '10'},
      {key: '11', value: '11', text: '11'},
      {key: '12', value: '12', text: '12'},
      {key: '13', value: '13', text: '13'}
      ]

    activity = [
      {key: 1, value: '1', text: 'Sedentary'},
      {key: 2, value: '1', text: 'Light active'},
      {key: 3, value: '1', text: 'Moderately active'},
      {key: 4, value: '1', text: 'Very active'},
      {key: 5, value: '1', text: 'Extrimely active'}
    ]

    close = () => this.setState({ open: false })
    show = () => () => this.setState({ open: true })

    handleChange(event, component) {
      this.setState({
        [component] : event.target.textContent
      });
    }
    calculate () {
      const { sex, age, weight, activity } = this.state;
      console.log({ sex, age, weight, activity });
    }

    render() {
      const { sex, open } = this.state;
      return (
        <div>
          <Button size="massive" color="green" onClick={ this.show(true) }>Calculate</Button>
          <Modal size="small"
              open={open}
              onClose={ this.close }>
            <Modal.Content>
              <Image wrapped size='medium' src='./img/rachel.png' />
              <Modal.Description>
                <h3>Select your gender</h3>
                <Button.Group>
                  <Button positive={sex==="male"} onClick={() => this.setState({sex: "male"})}>Male</Button>
                  <Button.Or/>
                  <Button positive={sex==="female"} onClick={() => this.setState({ sex: "female" })}>Female</Button>
                </Button.Group>
                <h3>Select your age</h3>
                <Select
                  options={age}
                  placeholder={this.state.age}
                  onChange={(e) => { this.handleChange(e, 'age') } }/>
                <h3>Select your weight</h3>
                <Select placeholder='wight'
                  value={this.state.age}
                  options={this.weight}
                  onChange={this.handleChange}/>
                <h3>Select your weight</h3>
                <Select placeholder='height'
                  value={this.state.height}
                  options={this.height}
                  onChange={this.handleChange}/>
                <h3>Select your activity factor</h3>
                <Select placeholder='activity'
                  value={this.state.activity}
                  options={this.activity}
                  onChange={this.handleChange}/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                positive
                content="Get calculation" onClick={this.calculate.bind(this)}
              />
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
}
export default Calculator