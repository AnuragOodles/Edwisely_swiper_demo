import React, { useState } from 'react'
import dummyImage from './../assets/studyContent.png'
import {  Box, Stack, Typography, styled } from '@mui/material';
// import BorderLinearProgress from '../BorderLinearProgress/BorderLinearProgress';
// import GroupedAvatar from '../GroupedAvatar/GroupedAvatar';
// import RedmedialButton from '../RemedialButtons/RedmedialButton';

const RemedialStudyCard = ({index}) => {
  const[studyModal , setStudyModal] = useState(false);

  const StudyCard = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    'cover-image': {
      width: '100%',
      height: '160px',
      img: {
        objectFit: 'contain'
      }
    }
  }));


  return (
    <>
      <StudyCard>
        <Box className='cover-image'>
          <img src={dummyImage} alt='study-card-img' />
        </Box>
        <Stack gap={'12px'}>
          <Typography component='p' sx={{
            fontFamily: 'Poppins-SemiBold',
            color: 'grey.900',
            fontSize: '16px',
            textAlign: 'start'
          }}>Intro to Electronics</Typography>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'4px'}>
            <Typography component='p' sx={{
              fontFamily: 'Poppins-Regular',
              color: 'grey.800',
              fontSize: '12px',
              textAlign: 'start'
            }}>10 Pages</Typography>
            <Typography component='p' sx={{
              fontFamily: 'Poppins-Regular',
              color: 'grey.800',
              fontSize: '12px',
              textAlign: 'start'
            }}>5 min read</Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'20px'}>
            {/* <BorderLinearProgress value={80} height={8} progressColor={'primary.800'} barColor={'primary.100'} /> */}
            <Typography component='p' sx={{
              fontFamily: 'Poppins-Medium',
              color: 'primary.800',
              fontSize: '12px',
              textAlign: 'start'
            }}>80 %</Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
            {/* <GroupedAvatar /> */}
            <Typography component='p' sx={{
              fontFamily: 'Poppins-Regular',
              color: 'grey.600',
              fontSize: '10px',
              textAlign: 'start'
            }}>867+ Students are studying</Typography>

          </Stack>


          {/* <RedmedialButton color="primary.100" textColor='primary.600' textSize={12} size='medium' borderRadius={5} onClick={() => {setStudyModal(true)}}>Read Again</RedmedialButton> */}

        </Stack>

      </StudyCard>
    
    </>
  )
}

export default RemedialStudyCard