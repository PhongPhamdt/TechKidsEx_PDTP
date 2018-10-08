import React, { Component } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';

class NewGame extends Component {
	state = {
		players: ['', '', '', '']
	}

	handleInputChange = (e) => {
		let { players } = this.state;
		players[e.target.name] = e.target.value;
		this.setState;
	}

	handleSubmitForm = (e) => {
		e.preventDefault();

		const { }
		const { players } = this.state;
		axios({
			url: 'http://localhost:6969/api/game',
			method: 'POST',
			data: {
				player: [],
				scores: [ [0,0,0,0] ]
			}
		}).then((data) => {
			console.log(data);
		})catch((err) => {
			console.log(err);
		});
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmitForm} className="text-center">
				<FormGroup className="border border-danger">
					<Input onChange={this.handleInputChange} type="text" placeholder="Player 1" name="player1" required/>
				</FormGroup>
				<FormGroup className="border border-danger">
					<Input onChange={this.handleInputChange} type="text" placeholder="Player 2" name="player2" required/>
				</FormGroup>
				<FormGroup className="border border-danger">
					<Input onChange={this.handleInputChange} type="text" placeholder="Player 3" name="player3" required/>
				</FormGroup>
				<FormGroup className="border border-danger">
					<Input onChange={this.handleInputChange} type="text" placeholder="Player 4" name="player4" required/>
				</FormGroup>
				<FormGroup >
					<Button color="danger" type="submit">
					Create New Game 
					</Button>
				</FormGroup>
			</Form>
			)
	}
}

export default NewGame;