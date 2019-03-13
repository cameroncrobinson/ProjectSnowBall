// let counter = 0;
//
// const fiveTimes = setInterval(
//   () => {
//     console.log("every 1 seconds");
// counter++;
//
//
// if (counter === 5){
//   console.log("done");
//   clearInterval(fiveTimes);
// }
// },1000,
// );
//
// const new = () => { };
function Button (props) {
  return(
    <button onClick= {() => props.onClickFunction(props.increment)}>
      {props.increment}
    </button>
  );
}

function Display (props) {
  return(
    <div>{props.message}</div>
  )
}


function App () {

const [counter, setCounter] = useState(0);
const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
return(
<div>
<Button onClickFunction ={incrementCounter} increment={1} />
<Button onClickFunction ={incrementCounter} increment={5} />
<Button onClickFunction ={incrementCounter} increment={10} />

<Display message={counter} />
</div>
);

}
