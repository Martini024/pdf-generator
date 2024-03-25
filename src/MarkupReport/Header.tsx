import { Image, StyleSheet, Text, View } from "@react-pdf/renderer"
import { getLogoUrl } from "../helpers/resourceHelper"

const styles = StyleSheet.create({
  title: {
    fontSize: 8,
    color: "rgb(128,128,128)",
  },
  image: {
    objectFit: "contain",
    height: 8,
  },
})

interface HeaderProps {
  projectName: string
  projectLogoBase64?: string
  companyLogo?: string
}

export default function Header({
  projectName,
  projectLogoBase64,
}: HeaderProps) {
  return (
    <View fixed>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{projectName}</Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {projectLogoBase64 && (
            <Image style={styles.image} src={decodeURI(projectLogoBase64)} />
          )}
          <Image style={styles.image} src={getLogoUrl()} />
        </View>
      </View>
      <View
        style={{
          borderTop: "2pt solid rgb(128, 128, 128)",
          marginTop: 2,
          marginBottom: 16,
        }}
      />
    </View>
  )
}
