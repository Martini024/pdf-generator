import { Link, StyleSheet, Text, View } from "@react-pdf/renderer"
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
  first,
  last,
  attachmentList,
}: {
  reply: AirReport.Reply
  first: boolean
  last: boolean
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
    .map(index => index + 1)

  return (
    <View wrap={false}>
      <View
        style={first ? commonStyles.sectionDivider : commonStyles.itemDivider}
      />
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
            {referencingAttachments.map((referencingNumber, index, arr) => (
              <Link
                style={styles.reference}
                src={`#${reply.parentMarkupId}-${referencingNumber}`}
              >{` #${referencingNumber}${
                index !== arr.length - 1 ? "," : ""
              }`}</Link>
            ))}
          </Text>
        </View>
      </View>
      {last && <View style={commonStyles.itemDivider} />}
    </View>
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
  if (replyList.length > 0)
    return (
      <View>
        <Text style={commonStyles.sectionTitle}>Replies</Text>
        <View>
          {replyList.map((reply, index, arr) => (
            <ReplyItem
              key={reply.id}
              first={index === 0}
              last={index === arr.length - 1}
              reply={reply}
              attachmentList={attachmentList}
            />
          ))}
        </View>
      </View>
    )
  return null
}
