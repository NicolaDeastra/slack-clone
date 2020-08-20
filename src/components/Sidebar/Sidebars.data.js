import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

export const sidebarsData = [
  {
    sort: 1,
    Icon: InsertCommentIcon,
    title: "Threads",
  },
  {
    sort: 2,
    Icon: InboxIcon,
    title: "Mentions & reactions",
  },
  {
    sort: 3,
    Icon: DraftsIcon,
    title: "Saved items",
  },
  {
    sort: 4,
    Icon: BookmarkBorderIcon,
    title: "Channel browser",
  },
  {
    sort: 5,
    Icon: PeopleAltIcon,
    title: "People & user groups",
  },
  {
    sort: 6,
    Icon: AppsIcon,
    title: "Apps",
  },
  {
    sort: 7,
    Icon: FileCopyIcon,
    title: "File browser",
  },
  {
    sort: 8,
    Icon: ExpandLessIcon,
    title: "Show less",
  },
  {
    sort: 9,
    type: "line",
  },
  {
    sort: 10,
    Icon: ExpandMoreIcon,
    title: "Channels",
  },
  {
    sort: 11,
    type: "line",
  },
  {
    sort: 12,
    Icon: AddIcon,
    title: "Channels",
    addChannelOption: true,
  },
];
