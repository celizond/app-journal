import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"
import { NoteView } from "../views/NoteView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NoteView />
      {/* <NothingSelectedView /> */}
        {/* <Typography component="h1">JournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayout JournalLayout JournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayout JournalLayout JournalLayoutJournalLayoutJournalLayoutJournalLayout Journal Page</Typography>  */}
    </JournalLayout>
  )
}
