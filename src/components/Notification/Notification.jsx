import css from "../Notification/Notification.module.css";

const Notification = ({ sum }) => {
  if (sum) {
    return;
  }
  return (
    <div className={css.notification}>
      <p className={css.p}>No feedback yet</p>
    </div>
  );
};

export default Notification;
