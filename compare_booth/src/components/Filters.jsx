import React from 'react';


class Filters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2,
        selectedRadio: "option1"
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Participe :
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Nombre d'invités :
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <div>
            <h1>Filtrer la recherche</h1>
        Code postal: <input label="Code postal"/><br/>
        Professionnel <input type="radio"/><br/>
        Particulier <input type="radio"/><br/>
        <input/><br/>

            </div>
        </form>
      );
    }
  }

 
export default Filters;
