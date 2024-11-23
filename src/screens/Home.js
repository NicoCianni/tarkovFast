import { ImageBackground, StyleSheet, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'





const Home = ({navigation}) => {


    return (
        <ScrollView style={styles.fondo}>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Traders")}>
                <ImageBackground source={{uri: "https://i.ytimg.com/vi/uFk4RcFq9BI/maxresdefault.jpg"}} style={styles.imagen}>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Quest Tracker")}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.Ix29EYHMeoST5hkm7jhluAAAAA?rs=1&pid=ImgDetMain"}} style={styles.imagen}>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Bullets")}>
                <ImageBackground source={{uri:"https://guided.news/wp-content/uploads/2021/02/tarkov-ammo-chart-1024x497.jpg"}} style={styles.imagen}>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Wiki Oficial")}>
                <ImageBackground source={{uri:"https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e6/Site-logo.png/revision/latest?cb=20221016193554"}} resizeMode='contain' style={styles.imagen}>
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "black",
        padding: 5,
    },
    block:{
        marginVertical: 5,
        width: "100%",
        height: 300,
        borderWidth: 2,
        borderColor: "white",
    },
    imagen: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 35,
        fontWeight: "800",
        padding: 8,
        borderRadius: 8,
        borderColor: "black",
        textAlign: "center",
        backgroundColor: "#2E2E2E",
    },
})