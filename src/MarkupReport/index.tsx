import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer"
import { AirReport } from "../types"
import AttachmentSection from "./AttachmentSection"
import BasicSection from "./BasicSection"
import Footer from "./Footer"
import Header from "./Header"
import LocationSection from "./LocationSection"
import ReplySection from "./ReplySection"

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
})

const styles = StyleSheet.create({
  body: {
    position: "relative",
    paddingTop: 16,
    paddingBottom: 44,
    paddingHorizontal: 32,
  },
})

interface MarkupReportProps extends AirReport.MarkupReportData {}

const MarkupReport = ({
  projectName,
  projectLogoBase64,
  markupList,
}: MarkupReportProps) => (
  <Document>
    <Page style={styles.body}>
      <Header projectName={projectName} projectLogoBase64={projectLogoBase64} />
      {markupList.map(markup => (
        <>
          <BasicSection markup={markup} />
          <LocationSection />
          <AttachmentSection attachmentList={markup.attachmentList} />
          <ReplySection
            attachmentList={markup.attachmentList}
            replyList={markup.replyList}
          />
          <Footer accessUrl={markup.accessUrl} />
        </>
      ))}
    </Page>
  </Document>
)

export default MarkupReport
