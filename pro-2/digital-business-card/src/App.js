import Header from './components/Header';
import Section from './components/Section';
import image from './img/akeju.jpg';
import './App.css';
import Info from './components/Info';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className='main'>
      <Header image={image} alt={'akeju picture'} />
      <div className='main-content'>
        <Info />
        <Section
          title={'About'}
          content={
            'My first foray into IT/software development began with supplying CISCO networking devices to different corporations. I have since transitioned into web development with a focus on backend development with Node.js. I enjoy provisioning databases, fleshing out architecture, and bringing business logic and ideas to life. I also have little experience working with PHP,  Go, and React.'
          }
        />
        <Section
          title={'Interests'}
          content={`I am interested in all forms of literary writing. I marvel at finely written prose and talk about writing (even though I don't much. I also like playing chess.
            Professionallly, I am interested in working in the cloud and the workings of distributed systems. I hope to become a site reliability engineer in the future.`}
        />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
