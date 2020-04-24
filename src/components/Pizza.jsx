import React from 'react'

const Pizza = props => {
    const {
        formValues,
        changeHandler,
        checkBoxChangeHandler,
        submitDisabled,
        submitHandler,
    } = props
    return (
        <div className="pizza-form">
            <form>
                <label htmlFor="Name and Number">
                    Name: 
                    <input
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={changeHandler}
                    />
                    <br/>
                    Number: 
                    <input
                        type='text'
                        name='number'
                        value={formValues.number}
                        onChange={changeHandler}
                    />
                    <br/>
                </label>
                <label htmlFor="Address">
                    Address: 
                    <input
                        type='text'
                        name='address'
                        value={formValues.address}
                        onChange={changeHandler}
                    />
                    <br/>
                </label>
                <label htmlFor="Size">
                    Size: 
                    <select name='size' id='size-selector' onChange={changeHandler}>
                        <option value="XXL">XXL</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                    </select>
                    <br/>
                </label>
                {/* <label htmlFor="Toppings"> */}
                    Toppings:
                    <br/>
                    <label htmlFor="Pepperoni">
                        Pepperoni: 
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={formValues.toppings.pepperoni}
                            onChange={checkBoxChangeHandler}
                        />
                        <br />
                    </label>
                    
                    <label htmlFor="Ham">
                        Ham: 
                        <input
                            checked={formValues.toppings.ham}
                            onChange={checkBoxChangeHandler}
                            type='checkbox'
                            name='ham'
                        />
                        <br />
                    </label>
                    <label htmlFor="Pineapple">
                        Pineapple: 
                        <input
                            type='checkbox'
                            name='pineapple'
                            checked={formValues.toppings.pineapple}
                            onChange={checkBoxChangeHandler}
                        />
                        <br />
                    </label>
                    <label htmlFor="Bacon">
                        Bacon: 
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={formValues.toppings.bacon}
                            onChange={checkBoxChangeHandler}
                        />
                        <br />
                    </label>
                {/* </label> */}
                <label htmlFor="Special Instructions">
                    Special Instructions: 
                    <input
                        type='text'
                        name='specialInstructions'
                        value={formValues.specialInstructions}
                        onChange={changeHandler}
                    />
                    <br/>
                </label>
                <label htmlFor="Quantity">
                    Quantity: 
                    <input 
                        type='number'
                        name='quantity'
                        value={formValues.quantity}
                        onChange={changeHandler}
                    />
                    <br />
                </label>
                <button disabled={submitDisabled} name="my-button" onClick={submitHandler}>Add To Cart - $0.00</button>

            </form>
        </div>
    )
}

export default Pizza