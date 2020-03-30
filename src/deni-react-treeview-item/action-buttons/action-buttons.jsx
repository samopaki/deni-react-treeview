import React from 'react'
import './action-buttons.scss'

class ActionButtons extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let actionButtons = [];
    this.props.buttons.map((actionButton, index) => {

      console.log('actionButton.props', actionButton.props)
      if(!(actionButton.props['disabled-on-leaf'] === 'true' && this.props.item.isLeaf && !actionButton.props['disabled-on-leaf'] === 'true')) {
        actionButtons.push((
          <span key={ index } className="action-button" onClick={this.props.onActionButtonClick.bind(this, this.props.item, actionButton)} >
            { actionButton }
          </span>
        ));
      } else if(actionButton.props['disabled-on-folder'] === 'true' && this.props.item.isLeaf) {
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
