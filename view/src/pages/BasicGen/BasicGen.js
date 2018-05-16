import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddSource from "../../components/AddSource";
import DeleteProject from "../../components/DeleteProject";
import RepeatSource from "../../components/RepeatSource";
import SaveButton from "../../components/SaveButton";
import OpenProject from "../../components/OpenProject";
import { Row, Container } from "../../components/Grid";

class BasicGen extends Component { 

    handleAddSource = event => {

    }

    handleSaveButton = event => {
        
    }

    handleOpenProject = event => {

    }

    handleDeleteProject = event => {

    }

    handleRepeatSource = event => {

    }

    render() {
        return (
            <div>
                <NavBar />
                <Container fluid>
                    <Row>
                        <SaveButton onClick={this.handleSaveButton}
                        >
                        Save
                        </SaveButton>
                        <OpenProject onClick={this.handleOpenProject}
                        >
                        Open
                        </OpenProject>
                        <DeleteProject onClick={this.handleDeleteProject}
                        >
                        Delete
                        </DeleteProject>
                    </Row>
                    <Row>
                        <AddSource onClick={this.handleAddSource} 
                        >
                        Add New Power Source
                        </AddSource>
                    </Row>
                    <Row>
                        <RepeatSource onClick={this.handleRepeatSource}
                        >
                        Repeat Source
                        </RepeatSource>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BasicGen;