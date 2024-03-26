import { StyleSheet, Text, View } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  title: {
    fontSize: 8,
    color: "rgb(128,128,128)",
  },
})

interface FooterProps {
  accessUrl?: string
}

export default function Footer({ accessUrl }: FooterProps) {
  return (
    <View
      fixed
      style={{
        position: "absolute",
        bottom: 16,
        left: 0,
        right: 0,
        paddingHorizontal: 32,
      }}
    >
      <View
        style={{
          borderTop: "2pt solid rgb(128, 128, 128)",
          marginTop: 16,
          marginBottom: 2,
          width: "100%",
        }}
      />
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={styles.title}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
        {accessUrl && <Text style={styles.title}>AirGo Link: {accessUrl}</Text>}
      </View>
    </View>
  )
}
