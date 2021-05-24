import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

/**
 * primary - 用于展示一个给用户的主要界面元素。 它是在您的应用屏幕和组件中显示最频繁的一个颜色。
 * secondary - 用于展示一个给用户的次要界面元素。 它给予了更多的方法来强调和区分您的产品。 此颜色是可选的。
 * error - 用于表示用户应该注意到的界面元素。
 * warning - 用于呈现潜在的一些危险的操作或者重要的信息。
 * info - 用于向用户呈现一些中立的且不一定重要的信息。
 * success - 用于暗示一个用户触发的操作的成功完成。
 * 配置方法访问：https://material-ui.com/zh/customization/palette/
 */

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: '#ffebee'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#27d7ff'
    },
    text: {
      // The most important text.
      primary: '#172b4d',
      // Secondary text.
      secondary: '#6b778c',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: '#fbc7ff',
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shadows,
  typography
});

export default theme;
