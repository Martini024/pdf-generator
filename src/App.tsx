import { PDFViewer } from "@react-pdf/renderer"
import styled from "styled-components"
import MarkupReport from "./MarkupReport"
import { ReportType } from "./helpers/enum"

const Container = styled(PDFViewer)`
  width: 100vw;
  height: 100vh;
  border: none;
`

export default function App() {
  return (
    <Container>
      <MarkupReport
        projectName="Construction : Sample Project - Seaport Civic Center"
        projectLogoBase64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgBpVVbSBRhFP5mZ6+6s17XctbES6VFlFGBUBASFAQ99VYmCCIoRfSQVEYFKqaBhoXWQ+HDgpdCuj3YS4nQgxSo6Lqxq7tuImy7Xte9uOvubP/MmulecsUPhpn5zznff875vzNDeTyeIOKA1/YbrvFRpJw9B4qm4wmBCHEisLKC6aYHMNyuguunLq6Y/5JzXm/EmmtiDJa2JuyafO7LZ8y0t8DvWIpqHxwcRGNjI9xuN1pbW6HX69HV1YX+/v7Y5EGOE+5UkIP9wxvY+rqjkut0OnhJdSaTCRyJGRgYgMVigdFojE7OE0811Ib6Sq2bA9y6JxWxwdDQEORyOWQyGcrLy4WNrFZr7Mx9szNYIC3ZDEpEReNGcXExiOLg8/mg1WpRUFAAjUYTmzwELrYpGFIvwzAwm81Qq9VCK1iWhUqlglKpFOzi8DiKT5DeRqHr5KWlpcLFo6OjI8Itbp0jfNS4f5Xx58T5/eACgS0u4hhU8Jim4J40CM/eeTtWxkY2bGsL83AMf4dIpoC1uxMu/TiYopPIvFYBRU7ehh+1efzXlhaI7Hpg//gWyiNFkLJZmHvfC0oiQZBk9rcd4tQ0yLNz4Rz9ARm7D9k3asAcOxHqaXjmfFm8lq09naATGeTeqYMsk8V0S33IKSkFGZevYPblU+HdTzJ3LS+StatgyyohkkqjVi/03ElGevHbVySfLkHh8064DRPQV5fBTbSeeuESDr3QglYkbARJ0tXY//gZsiquxySOaIt/eQmm+ntwjg1DJJGCrbyJ9PMXMfu6HfZ3vULZivyDyH/YDGnGHmyHLQdq/9QHz7QJNNFpzt06JOQdwGTtLTjHRwRi5vgp5N1vEFoXD6jw73nAu4o1mw00o4Kxphqrv8zCeuLho8h/9ARiMiTxgor2s/A7HDDUVGGVVMFDuleDwrZXhDgJO0HUIaIVCkEFyWdKIE5Tk4ybd0zM4w86sx40Pk5AhwAAAABJRU5ErkJggg=="
        type={ReportType.MarkupReport}
        markupList={[
          {
            id: "7807f436-d4e6-4587-9eed-5bf87b7f7f64",
            index: 2,
            name: "Wet Floor",
            status: "Open",
            type: "TOP",
            description:
              "Hotel sales professionals are responsible for generating revenue for hotels by selling rooms, meeting spaces, and other amenities to individuals, groups, and businesses. Their duties typically include prospecting for new clients, negotiating contracts, managing accounts, and ensuring customer satisfaction. They often work closely with marketing teams to develop promotional strategies and with event planners to coordinate functions. Additionally, they may participate in industry events and networking activities to expand their client base. Overall, their goal is to maximize occupancy rates and profitability for the hotel.",
            createdDate: 1710294088395,
            updatedDate: 1710311090111,
            position: {
              lon: -164.73448937038876,
              lat: 216.70085334761092,
              __typename: "Position",
            },
            severityLevel: "Medium",
            replyList: [],
            attachmentList: [],
            createdByUser: {
              email: "helen@airsquire.ai",
              __typename: "User",
            },
            panoImage: {
              id: "e87fd4cc-14f7-4b62-821a-7815e7761ec1",
              objectUUID: "236d9869-5259-450c-bcdc-e3050b9163f9",
              createdDate: 1709251663570,
              defaultView: {
                lon: 0,
                lat: 0,
              },
            },
            videoWalkIndex: 0,
            spot: {
              id: "8e860b37-9c3e-43d1-bcb6-645429f1d582",
              transformation: {
                x: -1602.736473083496,
                y: 440.3088887532552,
              },
              parentSheet: {
                id: "8c652b84-85c2-485f-98fe-e3b4080224e4",
                name: "Floor Seven",
                objectUUID: "0feefc46-d16b-40df-9504-020930460efd",
              },
              basePanoImage: {
                id: "e87fd4cc-14f7-4b62-821a-7815e7761ec1",
                objectUUID: "236d9869-5259-450c-bcdc-e3050b9163f9",
                createdDate: 1709251663570,
                defaultView: {
                  lon: 0,
                  lat: 0,
                },
              },
              labelList: [],
            },
            sheet: {
              id: "8c652b84-85c2-485f-98fe-e3b4080224e4",
              name: "Floor Seven",
              objectUUID: "0feefc46-d16b-40df-9504-020930460efd",
              accessUrl: "",
            },
            // markupCategoryId: "10886688-ed51-4577-907a-5f94a77a838b",
            dueDate: 1710898864073,
            category: {
              id: "10886688-ed51-4577-907a-5f94a77a838b",
              name: "TOP-Non-Compliance",
              __typename: "MarkupCategory",
            },
          },
        ]}
        timeRange={{
          start: 1708790400000,
          end: 1711382399999,
        }}
        urlExpiredDate={1714060799999}
      />
    </Container>
  )
}
