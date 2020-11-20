import React, { Component } from "react";
import CKEditor from "ckeditor4-react";

class TwoWayBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onPublishClick = this.onPublishClick.bind(this);
  }

  onEditorChange(evt) {
    this.setState({
      data: evt.editor.getData(),
    });
  }

  handleChange(changeEvent) {
    this.setState({
      data: changeEvent.target.value,
    });
  }

  onPublishClick() {
    const data = new Blob([this.state.data], { type: "text/html" });
    const htmlURL = window.URL.createObjectURL(data);
    let tempLink = document.createElement("a");
    tempLink.href = htmlURL;
    tempLink.setAttribute("download", "filename.html");
    tempLink.click();
  }

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <CKEditor data={this.state.data} onChange={this.onEditorChange} />
        <br />
        <button onClick={this.onPublishClick} type="button">
          Publish
        </button>
      </div>
    );
  }
}

export default TwoWayBinding;
