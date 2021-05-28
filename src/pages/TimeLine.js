import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import BorderTopIcon from '@material-ui/icons/BorderTop';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import CallIcon from '@material-ui/icons/Call';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import timeLineData from '../__mocks__/timeLine';
import MySwiper from '../components/MySwiper';

moment.locale('zh-en');

const iconsArr = [
  AlarmIcon,
  AddAlertIcon,
  AirlineSeatReclineExtraIcon,
  AirplanemodeActiveIcon,
  AttachMoneyIcon,
  AudiotrackIcon,
  BeachAccessIcon,
  BlurOnIcon,
  BorderTopIcon,
  Brightness5Icon,
  CallIcon,
  ChildCareIcon,
  ControlCameraIcon,
  DesktopWindowsIcon,
  DirectionsBikeIcon,
  DirectionsSubwayIcon,
  DirectionsRunIcon,
  EmojiPeopleIcon,
];

const useStyles = makeStyles((theme) => ({
  paper: {
    overflow: 'hidden',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    color: theme.palette.secondary.main,
  },
  startBox: {
    margin: '0 auto',
    marginBottom: 10,
    textAlign: 'center',
    height: 32,
    width: 32,
    lineHeight: '32px',
    borderRadius: '50%',
    fontSize: '12px',
    border: `1px dotted ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  const timelineItem = () => (
    timeLineData?.map(({
      data,
      address,
      content,
      desc,
      imgDataKey
    }, index) => {
      const CurrentIcon = iconsArr[(index % iconsArr.length)];
      return (
        <TimelineItem key={data}>
          <TimelineOppositeContent>
            <Typography variant="p" className={classes.content}>
              { content }
            </Typography>
            <Typography variant="h6" color="textSecondary">
              { moment(data).format('YYYY-MM-DD') }
            </Typography>
            <Typography variant="body2" fontSize="12px" color="textSecondary">
              { address }
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={index % 2 === 0 ? 'primary' : 'secondary'}>
              <CurrentIcon fontSize="small" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                variant="h6"
                component="h1"
                style={{
                  width: 'calc(50vw - 64px)',
                }}
              >
                <MySwiper
                  imgDataKey={imgDataKey}
                />
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                style={{
                  padding: '0 6px 6px 6px',
                }}
              >
                { desc }
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      );
    })
  );

  return (
    <>
      <Timeline align="alternate">
        {
          timelineItem()
        }
      </Timeline>
      <div className={classes.startBox}>开始</div>
    </>
  );
}
