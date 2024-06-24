import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Utils/colors';

const MessageReminder = ({ message, onClose }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <AntDesign name="closecircleo" size={24} color={colors.primary} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: '5%',
    },
    message: {
        flex: 1,
        color: colors.primary,
        fontSize: 16,
    },
    closeButton: {
        marginLeft: 10,
    },
});

export default MessageReminder;
