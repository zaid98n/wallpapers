import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import styles from '../../styles';
import FullScreenImage from './FullScreenImage';

const Photos = ({ QUERY }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const getImageWidthPercentage = (percentage) => {
        return (screenWidth * percentage) / 100;
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const scrollViewRef = useRef();

    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreenImage = (imageUrl) => {
        setFullscreenImage(imageUrl);
    };

    const closeFullscreenImage = () => {
        setFullscreenImage(null);
    };

    const scrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
        }
    };
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        scrollToTop();
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
            scrollToTop();
        }
    };

    const API_KEY = 'Z2czjJRDYYfOQIHRlsrFU8KjeQCnUOgz591mdW2WnibUuEjkKWcmrqVE';
    const BASE_URL = 'https://api.pexels.com/v1/search';
    const PER_PAGE = 80;

    useEffect(() => {
        fetchPhotos();
    }, [currentPage]);

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}?page=${currentPage}&query=${QUERY}&per_page=${PER_PAGE}`, {
                headers: {
                    'Authorization': API_KEY,
                },
            });
            const data = await response.json();
            const photoData = data.photos.map(photo => ({
                mediumUrl: photo.src.large,
                largeUrl: photo.src.original,
                large2x: photo.src.large2x,
            }));
            setPhotos(photoData);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
        setLoading(false);
    };

    const handleDownload = async (photoUrl) => {
        const maxRetries = 3;
        let retryCount = 0;

        while (retryCount < maxRetries) {
            try {
                const { dirs } = RNFetchBlob.fs;
                const response = await RNFetchBlob.config({
                    fileCache: true,
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        notification: true,
                        path: `${dirs.DownloadDir}/image.jpg`,
                        description: 'Image downloaded from your app',
                    },
                }).fetch('GET', photoUrl);

                console.log('Downloaded:', response.path());
                return;
            } catch (error) {
                console.error('Error downloading:', error);
                retryCount++;
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        console.error('Download failed after retries');
    };

    const handleReport = (photoId) => {
        // Implement your report logic here using the provided photoId
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollContentContainer}
                onContentSizeChange={() => { }}
            >
                {loading ? (
                    <View style={styles.loaderScreen}>
                        <ActivityIndicator size="large" color="white" style={styles.loader} />
                    </View>
                ) : (
                    photos.map((photoData, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <TouchableOpacity
                                onPress={() => openFullscreenImage(photoData.large2x)}
                                style={[styles.postProfilePicture, { width: getImageWidthPercentage(90) }]}>
                                <Image
                                    source={{ uri: photoData.mediumUrl }}
                                    style={styles.photo}
                                />
                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => handleDownload(photoData.largeUrl)}
                                    >
                                        <Text style={styles.buttonText}>Download</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => handleReport(index)}
                                    >
                                        <Text style={styles.buttonText}>Report</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                )}

                <View style={styles.paginationContainer}>
                    <TouchableOpacity
                        onPress={handlePreviousPage}
                        style={[styles.paginationButton]}
                        disabled={currentPage === 1}
                    >
                        <Text style={styles.paginationButtonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleNextPage}
                        style={[styles.paginationButton]}
                        disabled={currentPage === Math.ceil(totalPages / PER_PAGE)}
                    >
                        <Text style={styles.paginationButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <FullScreenImage imageUrl={fullscreenImage} onClose={closeFullscreenImage} />
        </View>
    );
};

export default Photos;
