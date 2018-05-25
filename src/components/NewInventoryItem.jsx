import React, { Component } from 'react'
// import axios from 'axios'
import { Field, Input, Label, Control, Button, Column, Columns, Select } from 'bloomer'

class NewInventoryItem extends Component {

    state = {
        name: null,
        price: null,
        format: null,
        foodcategory: null,
        quantity: null
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }



    render() {
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
                                type="text" 
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
                            name="foodcategory"
                            onChange={this.handleChange}>
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
                            type="submit">Submit</Button>
                        </Control>
                    </Field>
                </Column>
            </Columns>
            </form>
        )
    }
}

export default NewInventoryItem