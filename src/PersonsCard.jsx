import React, { Component } from 'react';
import styled from 'styled-components';


const CardBlock = styled.div`
  width: 40%;
  margin-top: 100px;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  text-align: center;
  height: auto;
  vertical-align: center;
  float: left;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  // border: solid 1px;
  height: 40%;
  background-color: #f9f9f9;
  border-bottom: 1px solid rgba(0,0,0,.15);
`
const Userphoto = styled.div`
  margin-top: 70px;
  width: 120px;
  border: solid 1px;
  border-radius: 50%;
  height: 120px;
  text-align: center;
`


class PersonsCard extends Component {

  render() {
    return (
      <CardBlock >
        <Container>
          <Userphoto>
            <img className="userphoto" src={this.props.personCard.picture.large}></img>
          </Userphoto>
        </Container>
        <div className="info">
          <p className="userinfo"><span className="infoCategory">First name:</span> {this.props.personCard.name.first}</p>
          <p className="userinfo__2"><span className="infoCategory">Last name:</span> {this.props.personCard.name.last}</p>
          <p className="userinfo__2"><span className="infoCategory">State:</span> {this.props.personCard.location.state}</p>
          <p className="userinfo__2"><span className="infoCategory">City:</span> {this.props.personCard.location.city}</p>
          <p className="userinfo__2"><span className="infoCategory">Email:</span> {this.props.personCard.email}</p>
        </div>
      </CardBlock>
    )
  }
}

export default PersonsCard;