import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Header, Right, Left, Body, Title } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
export const CustomHeader = (props)=>(
    <Header style={styles.header}>
        {props.backButton ? (
            <Left>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons size={30} name="md-arrow-back" />
                </TouchableOpacity>
            </Left>
        ) : null}
        <Body>
            <Row style={{ marginTop: 12 }}>
                <Col>
                    <Title>{props.title}</Title>
                </Col>
            </Row>
        </Body>
        {(props.right != null) ? (
            <Right>
                {props.right}
            </Right>
        ) : null}
    </Header>
);

const styles = StyleSheet.create({
    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight()
    }
});