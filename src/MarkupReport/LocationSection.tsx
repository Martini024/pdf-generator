import { Image, StyleSheet, View } from "@react-pdf/renderer"
import commonStyles from "./commonStyles"

const styles = StyleSheet.create({
  image: {
    objectFit: "cover",
    aspectRatio: 1.618,
    width: "100%",
  },
})

export default function LocationSection() {
  return (
    <>
      <View style={{ flexDirection: "row", columnGap: 8 }}>
        <Image
          style={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sample_Floorplan.jpg/640px-Sample_Floorplan.jpg"
        />
        <Image
          style={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBSQylRotzhxmGlumyVTyjYyWrQFBV6v-gg&usqp=CAU"
        />
      </View>
      <View style={commonStyles.sectionMargin} />
    </>
  )
}
