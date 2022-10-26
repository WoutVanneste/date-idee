import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const RenderCards = ({ dates }) => {
    const renderContent = () => {
        var content = [];
        dates.forEach((item, index) => {
            content.push(<View key={index}>
                <Text>id: {item.id}</Text>
                <Text>title: {item.title}</Text>
                <Text>type: {item.type}</Text>
                <Text>isCompleted: {item.isCompleted}</Text>
                <Text>createdOn: {item.createdOn}</Text>
            </View>)
        });

        return content;
    }
    return <ScrollView style={{ height: '100%', overflow: 'scroll' }}>
        {/* {renderContent()} */}
        {dates.map((item, index) => <View key={index}>
            <Text>id: {item.id}</Text>
            <Text>title: {item.title}</Text>
            <Text>type: {item.type}</Text>
            <Text>isCompleted: {item.isCompleted}</Text>
            <Text>createdOn: {item.createdOn}</Text>
        </View>
        )}
    </ScrollView>;
}

export default RenderCards;