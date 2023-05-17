import { Wrapper } from "./styled";


const Profile = () => {
    return (
      <>
      <Wrapper>
      <figure className="user-avatar__container">
        <img src="https://avatars.githubusercontent.com/u/106921450?v=4" alt=""/>
      </figure>
      <div className="user-info__container">
        <section>
          <h1>Jumael Martins</h1>
          <h3>@jumaelmartins</h3>
          <h3>Desenvolvedor Front End</h3>
        </section>
        <ul>
          <li><img src="" alt="" /><p>Seguidores</p><p></p></li>
          <li><img src="" alt="" /><p>Seguindo</p><p></p></li>
          <li><img src="" alt="" /><p>www.website.com</p></li>
          <li><img src="" alt="" /><p>www.linkedin/user</p></li>
        </ul>
        <div>
          <button>
            Repositorios
          </button>
          <button>
            Favoritos
          </button>
          <label htmlFor=""></label>
          <label htmlFor=""></label>
        </div>
      </div>
      </Wrapper>
      </>
    )
  }
  
  export default Profile;
  