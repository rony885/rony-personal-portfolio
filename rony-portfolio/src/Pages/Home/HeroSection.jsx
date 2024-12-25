import bannerImg from "../../assets/images/hb.jpg";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="banner-section">
        <div className="container">
          <div className="main">
            <div className="menu">
              <h1>Hello!</h1>
              <h2>My Name is Rony</h2>
              <p>Frontend Developer</p>
              <button>Contact Me</button>
            </div>
            <div className="banner">
              <img src={bannerImg} alt="bannerImg" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner-section {
    background-color: #475569; /* Slate-600 */
    padding: 4rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  @media (min-width: 768px) {
    .main {
      flex-direction: row;
      gap: 24rem;
    }
  }

  .menu {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .menu {
      text-align: left;
      margin-bottom: 0;
    }
  }

  .menu h1 {
    color: #06b6d4; /* Cyan-500 */
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .menu h2 {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .menu p {
    color: #94a3b8; /* Slate-400 */
    font-size: 1.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .menu button {
    font-size: 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 0.75rem 1.25rem;
    background-color: #06b6d4; /* Cyan-500 */
    color: white;
    font-weight: 600;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
  }

  .menu button:hover {
    background-color: #14b8a6; /* Teal-500 */
    color: #fb923c; /* Orange-200 */
  }

  .banner img {
    height: 400px;
    width: 100%;
    max-width: 60%;
    border-radius: 50%;
  }
`;

export default HeroSection;
