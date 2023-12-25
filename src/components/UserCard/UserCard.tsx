import { UserStat } from 'components/UserStat';
import { LocalGitHubUser } from 'types';
import styles from './UserCard.module.scss';
import { UserTitle } from 'components/UserTitle';

interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img className={styles.avatar} src={props.avatar} alt={props.login} />
    <UserTitle login={props.login} name={props.name} created={props.created} />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
