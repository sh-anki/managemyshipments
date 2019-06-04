import React, { Component } from "react";
import _axios from "../services/api";
import ShipmentCard from "./ShipmentCard";
import MenuItems from "./MenuItems";
import "../assets/styles/shipments.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      paginated_data: [],
      currentPage: 1,
      itemsPerPage: 20,
      pageNumbers: [],
      filteredShipments: [],
      searchId: "",
      hasResults: true
    };
  }

  async componentDidMount() {
    await _axios
      .get("/shipments")
      .then(response => response.data)
      .then(data => {
        this.setState({ data: data }, () => {
          this.state.data.length
            ? this.setState({ hasResults: true })
            : this.setState({ hasResults: false })
        });
      }).catch(error => console.error(error.message));
  }

  handlePageturn = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  shipmentClickHandler = item => {
    this.props.history.push("/" + item.id);
  };

  searchShipment = () => {
    let filteredShipments = this.state.data.filter(item =>
      item.id.toLowerCase().match(this.textInput.value.toLowerCase().trim())
    );
    this.setState(
      { filteredShipments: filteredShipments, searchId: this.textInput.value },
      () => {
        !this.state.filteredShipments.length
          ? this.setState({ hasResults: false })
          : this.setState({
              paginated_data: filteredShipments,
              hasResults: true
            });
      }
    );
  };

  sortShipments = () => {
    const field = this.sortInput.value;
    const sortedList = this.state.data.sort((a, b) =>
      a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
    );
    this.setState({ data: sortedList });
  };

  render() {
    const {
      data,
      filteredShipments,
      currentPage,
      itemsPerPage,
      hasResults
    } = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginated_items = !filteredShipments.length
      ? data.slice(indexOfFirstItem, indexOfLastItem)
      : filteredShipments.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];
    const limit = !filteredShipments.length
      ? data.length
      : filteredShipments.length;
    for (let i = 1; i <= Math.ceil(limit / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div id="dashboard">
        <MenuItems
          searchIdRef={input => (this.textInput = input)}
          sortRef={input => (this.sortInput = input)}
          handleIdSearch={this.searchShipment}
          handleSort={this.sortShipments}
        />

        <section className="shipments">
          {hasResults ? (
            paginated_items.map((item, index) => {
              return (
                <ShipmentCard
                  shipment={item}
                  key={index}
                  clickHandler={() => this.shipmentClickHandler(item)}
                />
              );
            })
          ) : (
            <div className="no-result">
              <h3>No Shipments Available</h3>
            </div>
          )}
        </section>
        {hasResults && (
          <section className="pagination-center">
            <div className="pagination">
              {pageNumbers.map(number => {
                return (
                  <a
                    key={number}
                    id={number}
                    onClick={this.handlePageturn}
                    className={currentPage === number ? "active" : ""}
                  >
                    {number}
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Dashboard;
