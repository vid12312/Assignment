import { Input } from '../input/input';


export const submitLoadingClass: string = 'disabled ui fluid blue elastic submit button';
// export const submitLoadingClass: string = 'ui fluid blue elastic loading submit button';

export const Form = ( props: any ) => {

  let formElementArray: any[ ] = [ ];

    for ( let [key, value] of Object.entries(props.formConfig) ) {

      formElementArray.push( {name: key, config: value} );
    }

    let formControlsJSX = formElementArray.map( (item: any) => {

      return(
        <Input
            config = { item.config }
            name = { item.name }
            key = { item.name }
            onChange = { props.onChange }/>
      );
  });

  let submitButtonState: string = `ui fluid blue submit button`;

  if ( !props.formIsValid ) {

    submitButtonState = `disabled ${submitButtonState}`;
  } else if ( props.errorMessage ) {

    submitButtonState = `ui fluid blue elastic submit button`;
  }
   
  return (
    <div className="ui blue attached raised segment">
      <h2 className="ui top center aligned header">{props.formTitle}</h2>
      <div className="ui basic left aligned segment">
        <form className="ui form" onKeyPress={props.onKeyPress}>
          { formControlsJSX }
          <button ref={props.submitRef} className={submitButtonState} onClick={props.onSubmit}>Submit</button>
        </form>
      </div>
      <div className={(props.errorMessage) ? "ui negative message transition" : "ui negative message transition hidden"}>
        <div className="ui center aligned header">
            { props.errorMessage }
        </div>
      </div>
    </div>
  );
}