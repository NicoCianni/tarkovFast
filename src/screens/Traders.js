import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'



const Traders = () => {
    return (
        <ScrollView style={styles.back}>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.wMpGXxj_IYwfHx09ByQQJAHaEK?rs=1&pid=ImgDetMain"}} style={styles.imagenTrader}>

                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.2bVykQJSFk-SKO8N-eD1YAHaEK?rs=1&pid=ImgDetMain"}} style={styles.imagenTrader}>

                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.WJ1hKz3amg6yXfLQuhevegHaE7?rs=1&pid=ImgDetMain"}} style={styles.imagenTrader}>

                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://cdnb.artstation.com/p/assets/images/images/008/629/673/large/ivan-vilmont-2.jpg?1514192145"}} style={styles.imagenTrader}>
                    
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/d/dd/PeacekeeperFullRes.jpg/1200px-PeacekeeperFullRes.jpg"}} style={styles.imagenTrader}>
                    
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.IVaei5VdPgKgXLwliGXV4wHaEK?rs=1&pid=ImgDetMain"}} style={styles.imagenTrader}>
                    
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://th.bing.com/th/id/R.e56aceaa389204ef36eecefca9e5e2f7?rik=Qn1OhVjbQkHrWg&pid=ImgRaw&r=0"}} style={styles.imagenTrader}>
                    
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trader}>
                <ImageBackground source={{uri:"https://i.ytimg.com/vi/KlgT8IO66-E/maxresdefault.jpg"}} style={styles.imagenTrader}>
                    
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Traders

const styles = StyleSheet.create({
    back: {
        backgroundColor: "black",
        padding: 15,
    },
    trader: {
        marginVertical: 10,
        width: "100%",
        height: 200,
        borderColor: "white",
    },
    imagenTrader: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})