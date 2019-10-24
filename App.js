class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "bolonese", active: false },
      { id: 4, name: "żelki", active: true },
      { id: 5, name: "chlep", active: false },
      { id: 6, name: "marchefka", active: false }
    ]
  };

  handleChangeSatus = id => {

    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeSatus}
        />
      </>
    );
  }
}
