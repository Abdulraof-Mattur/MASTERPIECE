import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../../constants/";

export default function About() {
  return (
    <ScrollView>
      <View style={styles.contanier}>
        <Image
          source={require("../../assets/images/logoLarge.png")}
          style={{
            width: 380, // Set the width
            height: 200, // Set the height
          }}
        />
      </View>

      <View style={styles.contanierText}>
        <Text style={styles.text}>
          <Text style={styles.bold}>ThreadWise</Text>, is your fashion
          destination, dedicated to elevating your style effortlessly. We curate
          the latest trends, timeless classics, and sustainable fashion options,
          ensuring that your wardrobe is always on point.
        </Text>

        <Text style={styles.text}>
          Discover a personalized shopping experience like no other. With
          ThreadWise, we tailor recommendations to your unique style
          preferences, making it easier than ever to find the perfect pieces
          that resonate with your fashion sense.
        </Text>

        <Text style={styles.text}>
          We care about our planet and the future of fashion. ThreadWise proudly
          offers a sustainable fashion collection, so you can make eco-conscious
          choices while staying stylish. Join us in shaping a greener fashion
          industry.
        </Text>

        <Text style={styles.text}>
          Become part of the ThreadWise community, where fashion enthusiasts
          come together to share style tips, discover new trends, and celebrate
          individuality. Your style journey is a shared experience here.
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>At ThreadWise</Text> , we believe fashion is
          more than just clothing; it's an expression of your unique identity.
          With us, you have the freedom to craft your fashion narrative, one
          stylish choice at a time. Welcome to the world of ThreadWise, where
          style knows no boundaries.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    height: 300,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  contanierText: {
    padding: 20,
    backgroundColor: COLORS.nav,
  },
  text: {
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    marginTop: 10,
    color: COLORS.white,
  },
  bold: {
    fontWeight: "700",
  },
});
