import React, {Component} from "react";
import {View} from "react-native";
import {connect} from "react-redux";
import {CardSection, Input} from "./common";
import * as actions from "../actions";

class Display extends Component {
    render()
    {
        return (
            <View>
                <CardSection>
                    <Input placeholder="0" value={this.props.input} onChangeText={input => this.props.setText(input)}/>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {input: state.inputFeed}
}

export default connect(mapStateToProps, actions)(Display);
