import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const useClasses = makeStyles((theme) => ({
  pageWrapper: {
    paddingTop: theme.spacing(2),
  },
}));

const IndexPage: React.FC<{ username: string }> = ({ username }) => {
  const classes = useClasses();

  return (
    <div className={classes.pageWrapper}>
      <Typography variant="h5" paragraph>
        Привет, <strong>{username}</strong>!
      </Typography>
      <Typography paragraph>
        Для входа в систему используйте пары логин - пароль:
      </Typography>
      <Typography paragraph>user - user</Typography>
      <Typography paragraph>admin - admin</Typography>
      <Divider />
      <Typography paragraph>
        <strong>Гость</strong> может только просматривать одобренные новости.
      </Typography>
      <Typography paragraph>
        <strong>Пользователь</strong> может добавлять новости. Видит только
        одобренные и свои неодобренные новости.
      </Typography>
      <Typography paragraph>
        <strong>Администратор</strong> может одобрить / отклонить новость. Видит
        все новости.
      </Typography>
      <Typography>
        По умолчанию созданная новость не является одобренной.
      </Typography>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    username: state.auth.user.username ? state.auth.user.username : "Гость",
  };
};

export default connect(mapStateToProps)(IndexPage);
