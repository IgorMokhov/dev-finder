import { UserStat } from 'components/UserStat';
import { LocalGitHubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import styles from './UserCard.module.scss';
import { UserInfo } from 'components/UserInfo';

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
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
