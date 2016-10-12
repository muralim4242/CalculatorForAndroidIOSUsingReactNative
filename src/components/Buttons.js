import React, {Component} from "react";
import {View} from "react-native";
import {connect} from "react-redux";

import {Button, CardSection} from "./common";

import * as actions from "../actions";

class Buttons extends Component {
    render()
    {
        return (
            <View>
                <CardSection>
                    <Button onPress={()=>this.props.setText("C")}>C</Button>
                    <Button onPress={()=>this.props.setText("1")}>1</Button>
                    <Button onPress={()=>this.props.setText("2")}>2</Button>
                    <Button onPress={()=>this.props.setText("+")}>+</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.props.setText("3")}>3</Button>
                    <Button onPress={()=>this.props.setText("4")}>4</Button>
                    <Button onPress={()=>this.props.setText("5")}>5</Button>
                    <Button onPress={()=>this.props.setText("-")}>-</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.props.setText("6")}>6</Button>
                    <Button onPress={()=>this.props.setText("7")}>7</Button>
                    <Button onPress={()=>this.props.setText("8")}>8</Button>
                    <Button onPress={()=>this.props.setText("*")}>*</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.props.setText("9")}>9</Button>
                    <Button onPress={()=>this.props.setText("0")}>0</Button>
                    <Button onPress={()=>this.props.setText("=")}>=</Button>
                    <Button onPress={() =>this.props.setText("/")}>/</Button>
                </CardSection>
            </View>
        )
    }
}

export default connect(null, actions)(Buttons);
