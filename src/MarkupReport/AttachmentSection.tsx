import { Image, StyleSheet, Text, View } from "@react-pdf/renderer"
import { AirReport } from "../types"
import commonStyles from "./commonStyles"

const styles = StyleSheet.create({
  name: { fontSize: 9, color: "rgb(0, 110, 175)", marginBottom: 2 },
  description: { fontSize: 9 },
  image: { objectFit: "contain" },
})

const AttachmentItem = ({
  index,
  attachment,
}: {
  index: number
  attachment: AirReport.Attachment
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        flex: "1 0 21%",
      }}
      wrap={false}
    >
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sample_Floorplan.jpg/640px-Sample_Floorplan.jpg"
        }
        style={styles.image}
      />
      <Text style={styles.name} id={`${attachment.parentMarkupId}-${index}`}>
        #{index} - {attachment.name}
      </Text>
      <Text style={styles.description}>{attachment.description}</Text>
    </View>
  )
}

interface AttachmentSectionProps {
  attachmentList: AirReport.Attachment[]
}

export default function AttachmentSection({
  attachmentList,
}: AttachmentSectionProps) {
  if (attachmentList.length > 0)
    return (
      <View>
        <Text style={commonStyles.sectionTitle}>Attachments</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {attachmentList.map((attachment, index) => (
            <AttachmentItem
              key={attachment.id}
              index={index + 1}
              attachment={attachment}
            />
          ))}
          {Array.from({ length: 4 - (attachmentList.length % 4) }, () => (
            <View style={{ flex: "1 0 21%" }} />
          ))}
        </View>
        <View style={commonStyles.sectionMargin} />
      </View>
    )
  return null
}
