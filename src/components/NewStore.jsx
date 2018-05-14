import React, { Component } from 'react'
import { Field, Input, Label, Control, TextArea, Button } from 'bloomer'
import StoreTagSelector from './StoreTagSelector';
import axios from 'axios'

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
        axios
            .post("/add", {
                storeName,
                storeDesc,
                selectedTags
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
                return i != tag
            })

            this.setState({ selectedTags: newTags })
        }
    }

    render() {
        return (
            <div>
                <h2>Fill out the form below to add your store:</h2>
                <form action="" onSubmit={this.handleSubmit}>
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
                        <Control>
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
            </div>
        )
    }
}

export default NewStore;