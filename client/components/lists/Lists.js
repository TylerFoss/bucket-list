import React from "react";
import List from "./List"

class Lists extends React.Component{
  constructor(props){
    super(props);
    this.state = {lists: []}
  }
  componentDidMount(){
    $.ajax({
      url: "/lists",
      type: "Get",
      data:{bucketId: this.props.bucketId}
    }).done
  }
}
