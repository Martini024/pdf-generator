import { Link, StyleSheet, Text, TextProps, View } from "@react-pdf/renderer"
import { Style } from "@react-pdf/types/style"
import dayjs from "dayjs"
import { ReactElement } from "react"
import { AirReport } from "../types"
import commonStyles from "./commonStyles"

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

const SectionDivider = () => <View style={commonStyles.sectionDivider} />

const Field = ({
  label,
  value,
  valueStyle,
}: {
  label: string
  value?: string | ReactElement<TextProps>
  valueStyle?: Style
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
        <Text style={{ ...styles.fieldValue, ...valueStyle }}>{value}</Text>
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
      <SectionDivider />
      <Field label="Status" value={markup.status} />
      <Field label="Category" value={markup.category.name} />
      <Field label="Description" value={markup.description} />
      <Field
        label="Created by"
        value={
          <>
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              {markup.createdByUser.email}
            </Text>
            <Text>{` (${dayjs(markup.createdDate).format(
              "DD MMM YYYY"
            )})`}</Text>
          </>
        }
      />
    </View>
  )
}
