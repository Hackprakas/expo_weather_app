import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import sunicon from "../assets/sun.gif";
import LottieView from "lottie-react-native";
import json from "../assets/Animation - 1711633209042.json";
import { ScrollView } from "react-native-gesture-handler";

export default function Page() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.divider}>
            <View style={styles.left}>
              <View style={styles.degree}>
                <Text style={styles.title}>34</Text>
                <Text style={styles.degreesym}>o</Text>
              </View>
              <Text style={styles.location}>Kundrathur</Text>
              <Text style={styles.feels}>35/25 Feellike 39</Text>
            </View>
            <LottieView
              source={require("../assets/Animation - 1711633209042.json")}
              style={{
                width: "200%",
                height: "200%",
                position: "absolute",
                left: -50,
                top: -30,
              }}
              autoPlay
            />
          </View>
          <View style={styles.cont}>
            <View style={styles.div}>
              <Text style={styles.gray}>Yesterday</Text>
              <Text style={styles.gray}>35 25</Text>
            </View>
            <View style={styles.div}>
              <View>
                <Text style={styles.white}>Today</Text>
                <Text style={styles.white}>Thursday</Text>
                <Text style={styles.white}>Friday</Text>
                <Text style={styles.white}>Saturday</Text>
                <Text style={styles.white}>Sunday</Text>
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.spc}>1%</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.spc}>1%</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.spc}>1%</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.spc}>1%</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.spc}>1%</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                  <Text style={styles.spc}>35</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.card2}>Tomorrow</Text>
              <Text style={styles.card2}>Tomorrow</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.card2}>Tomorrow</Text>
              <Text style={styles.card2}>Tomorrow</Text>
            </View>
          </View>
          <View style={styles.card3}>
            

         
            <View>
              <Text style={styles.white}>Pollen</Text>
              <Text style={styles.white}>Pollen</Text>
              <Text style={styles.white}>Pollen</Text>
              <Text style={styles.white}>Pollen</Text>
            </View>
            <View >
            <Text style={styles.white}>Pollen</Text>
              <Text style={styles.white}>Pollen</Text>
              <Text style={styles.white}>Pollen</Text>
              <Text style={styles.white}>Pollen</Text>

            </View>
          
          </View>
          <Text style={{color:"gray",textAlign:"center",marginBottom:10}}>Made by Prakash</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    overflow: "scroll",
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 36,
  },
  left: {
    alignItems: "flex-start",
  },
  location: {
    marginTop: 40,
    color: "white",
    fontSize: 24,
  },
  right: {
    position: "absolute",
    left: 0,
    top: 0,
    // justifyContent: "start",
  },
  feels: {
    marginTop: 4,
    color: "white",
    fontSize: 17,
  },
  degree: {
    flexDirection: "row",
  },
  degreesym: {
    color: "white",
    fontSize: 24,
    marginLeft: 2,
  },
  icon: {
    width: 170,
    height: 170,
  },
  cont: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",

    borderRadius: 10,
  },
  divider: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  div: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gray: {
    color: "gray",
    fontWeight: "bold",
  },
  white: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
  },
  spc: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    marginLeft: 16,
  },
  card2: {
    marginRight: 10,
    padding: 20,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",

    justifyContent: "center",

    borderRadius: 10,
    textAlign: "center",
    color: "white",
    flex: 1,
    // width:"100%",
  },
  card3:{
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 10,
    marginBottom:10
   
  }
});
