import { StyledFooter, StyledFlex } from '../styled';
const Footer = () => {
  // device
  if (process.browser) {
    // client-side-only code
    // console.log('userAgent - ', navigator.userAgent);
    // console.log('appName - ', navigator.appName);
    // console.log('isChrome - ', isChrome);
  }
  return (
    <StyledFooter>
      <StyledFlex spaceAround="space-around">Your device info:</StyledFlex>
    </StyledFooter>
  );
};
export default Footer;
