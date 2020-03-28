import React from 'react'
import './action-buttons.scss'

class ActionButtons extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let actionButtons = [];
    this.props.buttons.map((actionButton, index, disableAddOption) => {
      console.log('disableAddOption', this.props.disableAddOption);
      console.log('item', this.props.item);
      if(!this.props.disableAddOption && !this.props.item.isLeaf) {
         actionButtons.push((
          <span key={ index } className="action-button" onClick={this.props.onActionButtonClick.bind(this, this.props.item, actionButton)} >
          { actionButton }
        </span>
        )); 
      }
    })

    return (
      <div className="action-buttons-container">
        <span className="action-buttons-container-text">{this.props.item.text}</span>
        {actionButtons}
      </div>
    )
  }

}

export default ActionButtons;
