import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Forms";

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignIn = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            console.log("Logged In");
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
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleSignIn}
                            >
                            Sign In
                            </FormBtn> 
                        </form>
                    </Column>
                </Row>
                <Row>
                    <p>Don't have an accout?<br />
                    <a href="/signup">Sign up here.</a>
                    </p>
                </Row>
            </Container>

        )
    }
}

export default SignIn;