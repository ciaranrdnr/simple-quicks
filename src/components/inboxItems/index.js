import { ReactComponent as IconUsers } from "../../assets/icons/users.svg";
const InboxItems = (props) => {
  return (
    <div className="container-item">
      <div className="item">
        <IconUsers />
      </div>
      <div className="item column">
        <b>{props.listName}</b>
        <p>
          <b>{props.name} :</b>
        </p>
        <p>{props.message}</p>
      </div>
      <div className="item">
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
    </div>
  );
};

export default InboxItems;
