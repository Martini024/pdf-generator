import { Link, StyleSheet, Text, TextProps, View } from "@react-pdf/renderer"
import dayjs from "dayjs"
import { ReactElement } from "react"
import { MarkupStatus } from "../helpers/enum"
import { AirReport } from "../types"
import commonStyles from "./commonStyles"

function getMarkupStatusColor(status: MarkupStatus) {
  switch (status) {
    case MarkupStatus.Open:
      return "#FFBA18"
    case MarkupStatus.InProgress:
    case MarkupStatus.RectifiedOrClarified:
      return "#1890FF"
    case MarkupStatus.Close:
      return "#0BAD0D"
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: "rgb(0, 110, 175)",
    textDecoration: "none",
  },
  fieldLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "rgb(128, 128, 128)",
    flexBasis: "20%",
  },
  fieldValue: {
    fontSize: 9,
    color: "rgb(60, 60, 60)",
    width: "100%",
  },
})

const Field = ({
  label,
  value,
}: {
  label: string
  value?: string | ReactElement<TextProps>
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 8,
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.fieldLabel}>{label}</Text>
        {typeof value === "string" ? (
          <Text style={styles.fieldValue}>{value}</Text>
        ) : (
          <View style={styles.fieldValue}>{value}</View>
        )}
      </View>
      <View style={commonStyles.itemDivider} />
    </>
  )
}

interface BasicSectionProps {
  markup: AirReport.Markup
}

export default function BasicSection({ markup }: BasicSectionProps) {
  const titleRender = `${markup.type} #${markup.index}: ${markup.name}`
  return (
    <View style={{ marginBottom: 8 }}>
      {markup.accessUrl ? (
        <Link style={styles.title} src={markup.accessUrl}>
          {titleRender}
        </Link>
      ) : (
        <Text style={styles.title}>{titleRender}</Text>
      )}
      <View style={commonStyles.sectionMargin} />
      <Text style={commonStyles.sectionTitle}>Basic Information</Text>
      <View style={commonStyles.sectionDivider} />
      <Field
        label="Status"
        value={
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 4,
                borderRadius: 2,
                backgroundColor: getMarkupStatusColor(markup.status),
                marginRight: 4,
                marginVertical: -2,
              }}
            />
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              {markup.status}
            </Text>
          </View>
        }
      />
      <Field label="Category" value={markup.category.name} />
      <Field label="Description" value={markup.description} />
      <Field
        label="Created by"
        value={
          <Text>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              {markup.createdByUser.email}
            </Text>
            <Text>{` (${dayjs(markup.createdDate).format(
              "DD MMM YYYY"
            )})`}</Text>
          </Text>
        }
      />
    </View>
  )
}
