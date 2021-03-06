import React from 'react';

class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {edit: false};
        this.input;
    }

    toggleEdit = () => {
        this.setState({ edit: !this.state.edit });
    }

    showEdit = () => {
        let { name, updateBucket, _id } = this.props;
        if (this.state.edit) {
        return (
            <form
            onSubmit={ e => {
                e.preventDefault()
                updateBucket({ _id, name: this.input.value })
                this.input.value = null;
                this.toggleEdit()
            }}
            >
            <input defaultValue={name} ref={ (n) => this.input = n } />
            </form>
        )
        } else {
        return (<span className="card-title">{name}</span>)
        }
    }

    render() {
        let { deleteBucket, _id } = this.props;
        return (
        <div className="col s12 m4">
            <div className="card hoverable grey darken-1">
            <div className="card-content white-text">
                { this.showEdit() }
            </div>
            <div className="card-action grey lighten-2">
              <a className="red-text" onClick={ () => deleteBucket(_id) }>X</a>
                <a className="grey-text" onClick={this.toggleEdit}>
                { this.state.edit ? 'Cancel' : 'Edit' }
                </a>
              <a className="grey-text right" href={`/buckets/${_id}`}>View Card</a>
            </div>
            </div>
        </div>
        )
    }
}
export default Bucket;
