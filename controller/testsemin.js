'use strict';

const e = React.createElement;

class testsemin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '회원가입 완료 !! ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '전송'
    );
  }
}


document.querySelectorAll('.testsemin_button')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(testsemin, { commentID: commentID })
    );
  });