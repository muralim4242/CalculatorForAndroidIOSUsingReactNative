import React, {Component} from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {Header, Card} from "./components/common";

import Buttons from "./components/Buttons";
import Display from "./components/Display";

import reducers from './reducers';

class App extends Component {
    render()
    {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText={"Calculator"}></Header >
                    <Card>
                        <Display/>
                        <Buttons/>
                    </Card>
                </View>
            </Provider>
        );
    }
}

export default App;
