import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Moment from 'moment';

class Search extends Component {
  state = {
    topic: "",
    begin_date: "",
    end_date: "",
    toResults: false,
    results:[]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {

      const topic = this.state.topic.trim().split(" ").join("+");
      let begin_date;
      let end_date;

      if (this.state.begin_date) {
        begin_date = this.state.begin_date + "0101";
      } else {
        begin_date = "18510918";
      }

      if (this.state.end_date) {
        end_date = this.state.end_date + "1231"
      } else {
        end_date = Moment().format("YYYYMMDD");
      }


      API.getNewArticles(topic, begin_date, end_date)
        .then(res => {

          this.setState({
            toResults: true,
            results: res.data.response.docs
          });

        })
        .catch(err => console.log(err));
    }
  };

}

export default Detail;
