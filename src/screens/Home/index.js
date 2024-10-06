import React, { useEffect, useRef, useState, } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

import CarouselList from '../../components/CarouselList';
import Headline4 from '../../components/Headline4';
import Body2 from '../../components/Body2';
import Headline5 from '../../components/Headline5';
import OrganizerList from '../../components/OrganizerList';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [sliderImages, setSliderImages] = useState();
    const [organizerList, setOrganizerList] = useState();

    useEffect(() => {
        fetchData();
        fetchOrganizersData();
    }, []);

    async function fetchData() {
        await axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
            setSliderImages(response.data.slice(0, 10));
        });
      }

      async function fetchOrganizersData() {
        await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setOrganizerList(response.data.slice(0, 10));
        });
      }


    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}> 
                <CarouselList data={sliderImages}/>
                
                <View style={styles.bodyContainer}>
                    <Headline4 text={"Summar Party"}/>
                    <Body2 text={"56 O'Mally Road, ST LEONARDS, 2065, NSW"}/>
                    <Headline5 text={"Organizers"}/>
                    <OrganizerList data={organizerList}/>
                    <Headline5 text={"Photos"}/>
                </View>
            </View>
        </ScrollView>

    );

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LogIn")
            })
            .catch(error => alert(error.message))
    }
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {flex: 1},
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    bodyContainer: { marginHorizontal: 16}
})