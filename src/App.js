
import './App.css';

export default function App(){
  return (
    <Comment username="Princess" time={(new Date()).toString()}>
      <p>Hello My Love</p>
      <p>This is a comment according to how we defined our children in our Comment component</p>

    </Comment>
  );
}


function Comment ({username, time, children}){
  return(
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  );
}