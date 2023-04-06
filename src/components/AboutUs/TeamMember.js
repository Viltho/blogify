import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './TeamMember.css';

function TeamMember(props) {
  return (
    <div className='col-sm-6 col-md-4'>
      <div className='team-item'>
        <img src={props.member.img} className='team-img' alt={props.member.img} />
        <div className='team-info'>
          <h3>{props.member.name}</h3>
          <div className="social-follow">
            <a href={props.member.FaceLink}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={props.member.GhLink}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={props.member.InLink}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeamMember;