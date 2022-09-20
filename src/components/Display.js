import "./Display.css";

/* find a way to
1: have Buttons onClick variable save to a variable
2: make a function that uses that variable to change text on page
3: find a magic way to make that timer NOT fuck up whenever mutliple numbers are added lmao
*/

const Display = (props) => {
  const convert = () => {};
  return (
    <div className="Display">
      <div className="Timer">
        <p>{props.show}</p>
      </div>
    </div>
  );
};

//=============================
export default Display;
