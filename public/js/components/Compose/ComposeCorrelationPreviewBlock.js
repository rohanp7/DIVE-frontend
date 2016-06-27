import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectComposeVisualization } from '../../actions/ComposeActions';

import styles from './Compose.sass';

import CorrelationTable from '../Analysis/Correlation/CorrelationTable';

export default class ComposeCorrelationPreviewBlock extends Component {
  handleClick() {
    const { spec, onClick, id } = this.props;
    const desc = 'Correlating ' + (spec.data.headers.map((name, i) => { name }));
    onClick(spec.id, 'correlation');
  }

  render() {
    const { spec } = this.props;

    return (
      <div className={ styles.contentPreviewBlockContainer }
           onClick={ this.handleClick.bind(this) }>
         <span className={ styles.visualizationPreviewBlockHeader }>
           Correlating {
             spec.data.headers.map((name, i) =>
               <span
                 key={ `correlation-title-${ name }-${ i }` }
                 className={ `${ styles.dependentVariableTitle }` }>
                 { name }
               </span>
             )}
          </span>
         <CorrelationTable correlationResult={ spec.data || {} } preview={ true }/>
      </div>
    );
  }
}

ComposeCorrelationPreviewBlock.propTypes = {
  spec: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
