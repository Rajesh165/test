// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import request from './requests';
// import requests from './request';
import Banner from './Banner';
function App() {
  return (
    <div className="App">

      <Banner fatchUrl={request.fatchNetflixOriginals} />
      <Row  title="NETFLIX ORIGINAL" fatchUrl={request.fatchNetflixOriginals} isLargeRow/>
      <Row  title="TRENDING NOW" fatchUrl={request.fatchTrending}/>
      <Row  title="TOP RATED" fatchUrl={request.fatchTopRated}/>
      <Row  title="COMEDY" fatchUrl={request.fatchComedyMovie}/>
      <Row  title="HORROR" fatchUrl={request.fatchHorrorMovie}/>
      <Row  title="ACTION" fatchUrl={request.fatchActionMovie}/>
      <Row  title="ROMANCE" fatchUrl={request.fatchRomancdeMovie}/>
      <Row  title="DOCUMENTRIES" fatchUrl={request.fatchDocumentries}/>
    </div>
  );
}

export default App;
