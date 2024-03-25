import { MarkupStatus, MarkupType, ReportType } from "helpers/enum"

declare namespace AirReport {
  interface User {
    id: string
    name: string
    email: string
    token: string
    isDeleted: boolean
    metadata?: {
      isAutodeskConnected?: boolean
    }
  }

  interface ProgressReportData {
    projectName: string
    projectLogoBase64?: string
    type: ReportType
    compareDate?: number
    spotList: Spot[]
    timeRange: {
      start?: number
      end?: number
    }
    urlExpiredDate: number
  }

  interface MarkupReportData {
    projectName: string
    projectLogoBase64?: string
    type: ReportType
    markupList: Markup[]
    timeRange: {
      start?: number
      end?: number
    }
    urlExpiredDate: number
  }

  interface Markup {
    id: string
    index: number
    name: string
    status: MarkupStatus
    type: MarkupType
    description: string
    createdDate: number
    updatedDate: number
    severityLevel: MarkupSeverity
    position: LonLat
    replyList: Reply[]
    attachmentList: Attachment[]
    createdByUser: User
    category?: MarkupCategory
    screenshot?: Screenshot
    dueDate?: number
    sheet: Sheet
    spot: Spot
    panoImage: PanoImage
    accessUrl?: string
    videoWalk?: VideoWalk
    videoWalkIndex?: number
  }

  interface Attachment {
    id: string
    objectUUID: string
    thumbnailUUID: string
    name: string
    description?: string
    size: number
    uploadedDate: number
    createdDate: number
    type: AttachmentType
    createdByUserId: string
    sheetId: string
    // optional
    parentSpotId?: string
    parentPanoImageId?: string
    position?: LonLat
    parentMarkupId?: string
  }

  interface Reply {
    id: string
    parentMarkupId: string
    description: string
    createdDate: number
    updatedDate: number
    notifyUserIdList: string[]
    refAttachmentList: Attachment[]
    refAttachmentIdList: string[]
    createdByUser: {
      email: string
    }
  }

  interface VideoWalk {
    id: string
    isPublished: boolean
    objectUUID: string
    result: any
    userDefinedPosition: any
    sheet?: {
      id: string
      objectUUID: string
      name: string
    }
    status: string
  }
  interface PanoImage {
    id: string
    createdDate: number
    objectUUID: string
    defaultView: {
      lon: number
      lat: number
    }
    accessUrl?: string
    description?: string
  }
  interface Spot {
    id: string
    parentSheet: Sheet
    basePanoImage: PanoImage
    comparePanoImage?: PanoImage
    labelList: string[]
    transformation: {
      x: number
      y: number
    }
    accessUrl?: string
  }

  interface Sheet {
    id: string
    objectUUID: string
    name: string
    accessUrl?: string
  }
}
