import React, { Component } from 'react';

import { 
    View,
    Text, 
    Image,
    StyleSheet, 
    Dimensions
} from 'react-native';

export default class EditableAccountInfo extends Component {
    render(){        
        return (
            <View style={[styles.editableAccountInfoContainer, { borderRightWidth: this.props.borderRightWidth }]}>
                <Image source={this.props.imageSource} style={styles.editableImage}/>
                <Text style={styles.editableText}>{this.props.editableInfo}</Text>
                <Text style={styles.editButton}>edit</Text>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({

    editableAccountInfoContainer: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: height / 7, 
        width: width / 2.5, 
        borderRightColor: 'gray',
    },

    editableImage: {
        width: width / 6, 
        height: width / 6, 
        borderRadius: width / 12, 
        borderWidth: 1, 
        borderColor: 'gray', 
        marginBottom: 2
    },
    editableText: {
        color: 'white',
        fontSize: width / 20
    },
    editButton: {
        color: 'tomato',
        textTransform: 'uppercase', 
        fontSize: width / 30
    }

});

