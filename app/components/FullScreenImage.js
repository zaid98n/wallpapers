import React from 'react';
import { Modal, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const FullScreenImage = ({ imageUrl, onClose }) => {
    return (
        <Modal transparent={true} visible={!!imageUrl} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <Image source={{ uri: imageUrl }} style={styles.fullScreenImage} resizeMode="contain" />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default FullScreenImage;
