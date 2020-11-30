import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import Backdrop from './Backdrop';
import './Model.css';

const ModelOverlay = props => {
    const content =(
        <div className={`model ${props.className}`} style={props.style}>
            <header className={`model__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`model__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`model__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('model-hook'));
}

const Model = props => {
  return (
      <React.Fragment>
          {props.show && <Backdrop onClick={props.onCancel}/>}
          <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="model">
            {/*Forward all the props get from out-side*/}
            <ModelOverlay {...props} /> 
          </CSSTransition>
      </React.Fragment>
  );
};

export default Model