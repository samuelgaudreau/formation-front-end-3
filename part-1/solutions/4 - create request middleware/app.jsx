function AvailableItems(props) {
    if (props.availableItems.length === 0) {
      props.dispatch(getItems());
    }
  
    return (
      <>
        <p>Available Items ({props.availableItems.length})</p>
        <ul>
          {
            props.availableItems.map(item => {
              return <AvailableItem key={item.id} { ...item } dispatch={props.dispatch} />
            })
          }
        </ul>
      </>
    );
  }