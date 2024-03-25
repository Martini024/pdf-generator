export const enum ReportType {
  ProgressReport = "ProgressReport",
  CompareProgressReport = "CompareProgressReport",
  MarkupReport = "MarkupReport",
}

export const enum UploadFileType {
  Sheet = "Sheet",
  PanoImage = "PanoImage",
  ReplacePanoImage = "ReplacePanoImage",
  AddPanoImageOnSpot = "AddPanoImageOnSpot",
  Mobile_AddPanoImageOnSpot = "Mobile_AddPanoImageOnSpot",
  BIM = "BIM",
}

export const enum AttachmentType {
  Image = "Image2D",
  Video = "Video2D",
  PDF = "PDF",
  Screenshot = "Screenshot",
}

export const enum GeneratedFileType {
  SheetThumbnail = "SheetThumbnail",
  PanoImageThumbnail = "PanoImageThumbnail",
  AttachmentThumbnail = "AttachmentThumbnail",
  VideoWalkResult = "VideoWalkResult",
  DataSecurityPanoImageObject = "DataSecurityPanoImageObject",
  DataSecurityPanoImageThumbnail = "DataSecurityPanoImageThumbnail",
  Report = "Report",
}

export enum MarkupStatus {
  Open = "Open",
  InProgress = "InProgress",
  Close = "Close",

  // For TOP
  RectifiedOrClarified = "Rectified/Clarified",
}

export enum MarkupType {
  Info = "Info",
  Safety = "Safety",
  Quality = "Quality",
  Attachment = "Attachment",
  TOP = "TOP",
}

export enum MarkupSeverity {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
