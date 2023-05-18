import { Wrapper } from "./styled";
import user from "../../assets/icons/users.svg"
import userCheck from "../../assets/icons/user-check.svg"
import link from "../../assets/icons/link.svg"
import linkedin from "../../assets/icons/linkedin-svgrepo-com.svg"


const Profile = () => {
    return (
      <>
      <Wrapper>
      <figure className="user-avatar__container">
        <img src="https://avatars.githubusercontent.com/u/106921450?v=4" alt=""/>
      </figure>
      <div className="user-info__container">
        <section>
          <h2>Jumael Martins</h2>
          <h3>@jumaelmartins</h3>
          <h3>Desenvolvedor Front End</h3>
        </section>
        <ul>
          <li><img src={user} alt="" /><p>Seguidores</p><p className="follows">1000</p></li>
          <li><img src={userCheck} alt="" /><p>Seguindo</p><p className="following">1000</p></li>
          <li><img src={link} alt="" /><p>www.website.com</p></li>
          <li><img src={linkedin} alt="" /><p>www.linkedin/user</p></li>
        </ul>
        <div className="user-info__buttons">
          <button id="repos">
            Repositorios
          <label htmlFor="repos">999</label>
          </button>
          <button id="stars">
            Favoritos
          <label htmlFor="stars">999</label>
          </button>
        </div>
      </div>
      </Wrapper>
      </>
    )
  }
  
  export default Profile;
  