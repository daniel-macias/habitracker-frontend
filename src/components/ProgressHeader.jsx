import React from 'react'
import { Box, Stack } from '@mui/material'
export const ProgressHeader = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
      <Box flex={1} p={2} >Monday</Box>
      <Box flex={1} p={2} >Tuesday</Box>
      <Box flex={1} p={2} >Wednesday</Box>
      <Box flex={1} p={2} >Thursday</Box>
      <Box flex={1} p={2} >Friday</Box>
      <Box flex={1} p={2} >Saturday</Box>
      <Box flex={1} p={2} >Sunday</Box>
      </Stack>
      
    </div>
    
    
  )
}
