import { StyleSheet, Text, View } from "@react-pdf/renderer"
import dayjs from "dayjs"
import { AirReport } from "../types"
import commonStyles from "./commonStyles"

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: "rgb(0, 110, 175)",
  },
  avatar: {
    width: 24,
    height: 24,
    backgroundColor: "rgb(180, 180, 180)",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  avatarText: {
    fontSize: 9,
    color: "white",
    textTransform: "capitalize",
    textOverflow: "ellipsis",
  },
  author: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "rgb(60, 60, 60)",
    marginBottom: 2,
  },
  text: {
    fontSize: 9,
    color: "rgb(60, 60, 60)",
    width: "100%",
  },
  reference: {
    fontSize: 9,
    color: "rgb(0, 110, 175)",
  },
})

const ReplyItem = ({
  reply,
  attachmentList,
}: {
  reply: AirReport.Reply
  attachmentList: AirReport.Attachment[]
}) => {
  const referencingAttachments = reply.refAttachmentIdList
    .map(attachmentId => {
      const index = attachmentList.findIndex(
        attachment => attachment.id === attachmentId
      )
      return index
    })
    .filter(index => index !== -1)
    .sort((a, b) => a - b)
    .map(index => `#${index + 1}`)
    .join(", ")

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginVertical: 8,
          gap: 4,
        }}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {reply.createdByUser.email.charAt(0)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 3,
          }}
        >
          <Text style={styles.author}>
            {reply.createdByUser.email.split("")}
          </Text>
          <Text style={styles.text}>
            {dayjs(reply.createdDate).format("DD MMM YYYY, HH:mm")}
          </Text>
        </View>
        <View style={{ flex: 10 }}>
          <Text>
            <Text style={styles.text}>{reply.description}</Text>
            {referencingAttachments && (
              <Text
                style={styles.reference}
              >{` ${referencingAttachments}`}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={commonStyles.itemDivider} />
    </>
  )
}

interface ReplySectionProps {
  replyList: AirReport.Reply[]
  attachmentList: AirReport.Attachment[]
}

export default function ReplySection({
  replyList,
  attachmentList,
}: ReplySectionProps) {
  return (
    <View>
      <Text style={commonStyles.sectionTitle}>Replies</Text>
      <View style={commonStyles.sectionDivider} />
      {replyList.map(reply => (
        <ReplyItem reply={reply} attachmentList={attachmentList} />
      ))}
    </View>
  )
}
