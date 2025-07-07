import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"
import { NoteView } from "../views/NoteView"
import { Add, AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NoteView /> */}
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50, 
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
        {/* <Typography component="h1">JournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayout JournalLayout JournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayout JournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayoutJournalLayout JournalLayout JournalLayoutJournalLayoutJournalLayoutJournalLayout Journal Page</Typography>  */}
    </JournalLayout>
  )
}
