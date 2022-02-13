import { CallToActionWithVideo } from "../components/templates/call-to-action-with-video";
import { PropsType } from "../constants/props-type";

const LandingPage = (props: PropsType) => {
  return (
    <CallToActionWithVideo 
      headerTopText={props.headerTopText} 
      headerBottomText={props.headerBottomText}
      descriptionText={props.descriptionText} />
  );
};

export default LandingPage;