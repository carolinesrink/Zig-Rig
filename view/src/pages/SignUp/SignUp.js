import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Forms";

class SignUp extends Component {
    state = {
        email: "",
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUp = event => {
        event.preventDefault();
        if (this.state.email && this.state.username && this.state.password) {
            console.log("Signed Up");
        } else {
            console.log("error");
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <img id="logo" src="./public/images/logo.png" alt="Zig-Rig Logo" class="center" />
                </Row>
                <Row>
                    <Column size="md-6">
                        <form>
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email"
                            />
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password"
                            />
                            <FormBtn
                                disabled={!(this.state.email && this.state.username && this.state.password)}
                                onClick={this.handleSignUp}
                            >
                            Sign Up!
                            </FormBtn> 
                        </form>
                    </Column>
                </Row>
                <Row>
                    <p>Have an accout?<br />
                    <a href="/">Sign in here.</a>
                    </p>
                </Row>
            </Container>

        )
    }
}

export default SignUp;