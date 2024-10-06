import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrganizerList = ({data}) => {
    return(
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                snapToAlignment='center'
                decelerationRate={'fast'}
                initialNumToRender={10}
                renderItem={({item}) => {
                    return(
                        <View style={{paddingVertical: 14,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            borderBottomWidth: 0.5, borderBottomColor: COLORS.textFieldBorder}}>
                                {item.url ? (
                          <Image
                            alt=""
                            resizeMode="cover"
                            source={{ uri: img }}
                            style={styles.cardImg} />
                        ) : (
                          <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{item.name[0]}</Text>
                          </View>
                        )}

                            <View style={{marginRight: 'auto',
    marginLeft: 12,}}>
                                <Text style={{fontSize: 16,
    fontWeight: '700',
    color: '#000',}}>{item.name}</Text>
    <Text style={{fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,}}>{item.email}</Text>
                            </View>
                            <View style={{paddingRight: 16,}}>
                            <Icon
            name={'message-minus-outline'}
            style={{color: COLORS.grey700, fontSize: 20}}
          />
                        </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardImg: {
        width: 42,
        height: 42,
        borderRadius: 42,
      },
      cardAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9ca1ac',
      },
      cardAvatarText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
      },
});

export default OrganizerList;