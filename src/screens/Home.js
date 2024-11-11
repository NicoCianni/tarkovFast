import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'





const Home = ({navigation}) => {


    return (
        <ScrollView style={styles.fondo}>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Traders")}>
                <ImageBackground source={{uri: "https://game.mhcdkey.com/image/ask/238818/dpdlvzq4oj0.jpg"}} style={styles.imagen}>
                    <Text style={styles.text}>Traders</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Quest Tracker")}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.BUh39Tn3Hp3ICLR5H345SQHaEP?rs=1&pid=ImgDetMain"}} style={styles.imagen}>
                    <Text style={styles.text}>Quests</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Bullets")}>
                <ImageBackground source={{uri:"https://guided.news/wp-content/uploads/2021/02/tarkov-ammo-chart-768x373.jpg"}} style={styles.imagen}>
                    <Text style={styles.text}>Bullets</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block} onPress={() => navigation.navigate("Wiki Oficial")}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.utsaMVoErXeJ9RtoqXVDbAHaF9?rs=1&pid=ImgDetMain"}} style={styles.imagen}>
                    <Text style={styles.text}>Wiki Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "#4C4C4C",
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