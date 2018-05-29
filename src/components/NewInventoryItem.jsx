import React, { Component } from 'react'
// import axios from 'axios'
import { Field, Input, Label, Control, Button, Column, Columns, Select } from 'bloomer'


class NewInventoryItem extends Component {
    
    constructor() {
        super()
        this.verifySubmission = this.verifySubmission.bind(this)
    }
    
    state = {
        name: undefined,
        price: undefined,
        format: undefined,
        category: undefined,
        quantity: undefined
    }
    
    verifySubmission() {
        const newState = this.state
        if (newState.name && newState.price && newState.format && newState.foodcategory && newState.quantity !== undefined) {
            return true
        } else {
            return false
        }
    }
    
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        const newState = this.state
        // console.log(newState)
        // Object.keys(newState)
        this.verifySubmission(newState)
        
        // console.log(isEnabled)
    }
    
    
    handleSubmit = e => {
        e.preventDefault()
        const item = this.state
        const { addToInventory } = this.props

        addToInventory(item)
    }
    
    
    render() {
        
        const isEnabled = this.verifySubmission();

        return (
            <form 
            action="POST" 
            onSubmit={this.handleSubmit}>
            <Columns isCentered>
                <Column>
                    <Field>
                        <Label>Product Name</Label>
                        <Control>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange}/>
                        </Control>
                    </Field>
                </Column>
                
                <Column>
                    <Field>
                        <Label>Price</Label>
                        <Control>
                            <Input 
                                type="number"
                                min='0' 
                                name="price"
                                onChange={this.handleChange} />
                        </Control>
                    </Field>
                </Column>

                <Column>
                    <Field>
                        <Label>Price Format</Label>
                        <Control>
                            <Select 
                            className="newInventory--inputField" 
                            name="format"
                            onChange={this.handleChange}>
                                <option selected disabled>Choose Below</option>
                                <option value="piece">Per Piece</option>
                                <option value="kilo">Per Kilo</option>
                            </Select>
                        </Control>
                    </Field>
                </Column>

                <Column>
                    <Field>
                        <Label>Category</Label>
                        <Control>
                            <Select 
                            className="newInventory--inputField" 
                            name="category"
                            onChange={this.handleChange}>
                                <option selected disabled>Choose Below</option>
                                <option value="dairy">Dairy</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="fruit">Fruit</option>
                                <option value="meat">Meat</option>
                                <option value="eggs">Eggs</option>
                                <option value="drygoods">Dry Goods</option>
                            </Select>
                        </Control>
                    </Field>
                </Column>

                <Column>
                    <Field>
                        <Label>Quantity</Label>
                        <Control>
                            <Input 
                            type="text" 
                            name="quantity"
                            onChange={this.handleChange} />
                        </Control>
                    </Field>
                </Column>

            </Columns>
            <Columns isCentered>
                <Column isSize="1/2">
                    <Field>
                        <Control hasTextAlign="centered">
                            <Button 
                            isFullWidth={true}
                            type="submit"
                            disabled={!isEnabled}
                            >Submit</Button>
                        </Control>
                    </Field>
                </Column>
            </Columns>
            </form>
        )
    }
}

export default NewInventoryItem