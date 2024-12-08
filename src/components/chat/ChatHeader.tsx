import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

type Props = {
  channelName: string | null;
};

const ChatHeader = (props: Props) => {
  const { channelName } = props;

  return (
    <div className="chat__header">
      <div className="chat__header-left">
        <h3>
          <span className="chat__header-hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chat__header-right">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chat__header-search">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
