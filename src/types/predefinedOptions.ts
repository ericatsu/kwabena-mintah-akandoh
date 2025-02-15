// constants/predefinedOptions.ts
export const BILL_STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "in_progress", label: "In Progress" },
  { value: "under_review", label: "Under Review" },
  { value: "passed", label: "Passed" },
  { value: "rejected", label: "Rejected" },
  { value: "withdrawn", label: "Withdrawn" },
];

export const BILL_STAGE_OPTIONS = [
  { value: "first_reading", label: "First Reading" },
  { value: "second_reading", label: "Second Reading" },
  { value: "committee_stage", label: "Committee Stage" },
  { value: "report_stage", label: "Report Stage" },
  { value: "third_reading", label: "Third Reading" },
  { value: "enacted", label: "Enacted" },
];

export const ACTIVITY_ICONS = [
  { value: "FileText", label: "Document" },
  { value: "Users", label: "Users" },
  { value: "Building", label: "Building" },
  { value: "Calendar", label: "Calendar" },
  { value: "MessageSquare", label: "Message" },
  { value: "Vote", label: "Vote" },
];

export const ACTIVITY_TYPES = [
  { value: "committee", label: "Committee" },
  { value: "plenary", label: "Plenary" },
  { value: "speech", label: "Speech" },
  { value: "bill", label: "Bill" },
];

export const COMMITTEE_ROLES = [
  { value: "chairman", label: "Chairman" },
  { value: "vice_chairman", label: "Vice Chairman" },
  { value: "secretary", label: "Secretary" },
  { value: "member", label: "Member" },
];

export const DURATION_UNITS = [
  { value: "minutes", label: "Minutes" },
  { value: "hours", label: "Hours" },
  { value: "days", label: "Days" },
  { value: "weeks", label: "Weeks" },
];

export const SPEECH_TOPICS = [
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "economy", label: "Economy" },
  { value: "environment", label: "Environment" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "security", label: "Security" },
];
