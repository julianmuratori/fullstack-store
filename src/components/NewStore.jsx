import React, { Component } from 'react'
import { Field, Input, Label, Control, TextArea, Button, Card } from 'bloomer'
import StoreTagSelector from './StoreTagSelector';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class NewStore extends Component {

    constructor() {
        super()

        this.addTag = this.addTag.bind(this)
        this.removeTag = this.removeTag.bind(this)
    }
    
    state = {
        tags: ["Vegetables", "Fruit", "Dairy", "Eggs", "Dry Goods"],
        selectedTags: [],
        storeName: "",
        storeDesc: ""

    }

    handleSubmit = e => {
        e.preventDefault()
        const { selectedTags, storeName, storeDesc } = this.state
        const { user } = this.props;
        axios
            .post("/add", {
                storeName,
                storeDesc,
                selectedTags,
                user
            })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/stores')
                }
            })

    }

    handleChange = e => {
        // console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }

    renderTags = (key) => {
        return (   
            <StoreTagSelector 
                key={key} 
                name={key} 
                addTag={this.addTag}
                removeTag={this.removeTag}/>
        )
    }

    // checks if the selected item is already in state and adds it to state if it isn't already there
    addTag = (tag) => {
        const { selectedTags } = this.state

        if (!(selectedTags.includes(tag))) {
            selectedTags.push(tag)
            this.setState({ selectedTags })
        }
    }

    // checks if the selected item is already in state and removes it from state if it is already there
    removeTag = (tag) => {
        const { selectedTags } = this.state
        
        if (selectedTags.includes(tag)) {

            const newTags = selectedTags.filter(function(i) {
                return i !== tag
            })

            this.setState({ selectedTags: newTags })
        }
    }

    render() {
        return (
            <div className="new-store">
                
                <div className="new-store-text">
                    <h4>Fill out the form below to add your store:</h4>
                </div>

                <Card>
                    <form 
                        action="" 
                        onSubmit={this.handleSubmit}
                        className="new-store-form">
                        <Field>
                            <Label>Store Name</Label>
                            <Control>
                                <Input 
                                    type="text" 
                                    name="storeName"
                                    onChange={this.handleChange}/>
                            </Control>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Control>
                                <TextArea 
                                    type="text" 
                                    onChange={this.handleChange}
                                    name="storeDesc"/>
                            </Control>
                        </Field>
                        <Field>
                            <Label>Available Product Categories</Label>
                            <Control className="new-store-tags">
                                {
                                    this.state.tags.map(this.renderTags)
                                }
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Button 
                                    type="submit" 
                                    isColor="primary">Submit</Button>
                            </Control>
                        </Field>
                    </form>
                </Card>
            </div>
        )
    }
}

export default withRouter(NewStore);